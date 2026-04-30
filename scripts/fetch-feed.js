import Parser from "rss-parser";

const parser = new Parser();

const FEED_URL = "https://jubileedeh.substack.com/feed";

async function main() {
  const feed = await parser.parseURL(FEED_URL);

  console.log(feed.items[0]); // inspect one post
}

main();
