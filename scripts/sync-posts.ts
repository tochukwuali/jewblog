// scripts/fetch-feed.js
import Parser from "rss-parser";
import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";

type FeedItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  content?: string;
  "content:encoded"?: string;
};

const parser = new Parser<unknown, FeedItem>();

const FEED_URL = "https://jubileedeh.substack.com/feed";

const OUTPUT_DIR = path.resolve("src/content/blog");

function cleanSubstackHTML(html: string): string {
  const $ = cheerio.load(html);

  // Remove forms (email inputs, subscribe forms)
  $("form").remove();

  // Remove input fields
  $("input").remove();

  // Remove buttons
  $("button").remove();

  // Remove common Substack CTA containers
  $("[class*='subscribe']").remove();
  $("[class*='Subscribe']").remove();
  $("[class*='subscription']").remove();

  // Optional: remove empty divs after cleanup
  $("div").each((_, el) => {
    if ($(el).text().trim() === "" && $(el).children().length === 0) {
      $(el).remove();
    }
  });

  return $.html();
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function main() {
  ensureDir(OUTPUT_DIR);

  const feed = await parser.parseURL(FEED_URL);

  for (const item of feed.items) {
     if (!item.title) continue;

    const slug = slugify(item.title);
    const filePath = path.join(OUTPUT_DIR, `${slug}.md`);

    // avoid duplicates
    // if (fs.existsSync(filePath)) continue;

    const content = item["content:encoded"] || "";

    const cleanedContent = cleanSubstackHTML(content);

    const markdown = `---
title: "${item.title}"
pubDate: "${item.pubDate}"
source: "${item.link}"
description: "${item.content?.slice(0, 20)}"
heroImage: "${item.enclosure?.url}"
---

${cleanedContent}
`;

    fs.writeFileSync(filePath, markdown, 'utf-8');
    console.log(`Created: ${item.content}`);
  }

  // console.log(feed.items[2]);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});;
