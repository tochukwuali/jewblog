/**
 * Cloudinary base URL for jewbelee images.
 * Appending w_XXX or dpr_2 transforms the delivery size.
 */
const CLOUDINARY_BASE =
  "https://res.cloudinary.com/tochukwu/image/upload";

const VERSION = "v1783010490";
const FOLDER = "jewbelee";

function cloudinarySrcset(filename: string, widths: number[] = [400, 640, 960, 1280]): string {
  return widths
    .map((w) => `${CLOUDINARY_BASE}/w_${w}/${VERSION}/${FOLDER}/${filename} ${w}w`)
    .join(", ");
}

export interface Project {
  slug: string;
  title: string;
  /** Image filename inside the Cloudinary folder (e.g. "yakutz-1280.jpg") */
  image: string;
  imageSrcset: string;
  category: "youtube" | "books" | "other";
  tags: string[];
  role?: string;
  video?: string;
  link?: string;
  contribution?: string[];
  results?: string;
  whyChosen?: string;
}

export const projects: Project[] = [
  {
    slug: "yakutia-coldest-city",
    title: "Visiting the Coldest City in the World −71°C (−95°F) | Yakutia, Siberia",
    image: "yakutz-1280.jpg",
    imageSrcset: cloudinarySrcset("yakutz-1280.jpg"),
    category: "youtube",
    tags: ["Youtube", "Scriptwriter"],
    role: "Head Content Writer / Content Strategist",
    video: "Visiting the Coldest City in the World −71°C (−95°F) | Yakutia, Siberia",
    contribution: ["Research", "Scriptwriting", "Narrative structure", "Content strategy"],
    results: "9.6m views",
    whyChosen:
      "This is probably the most successful script I have written long form wise and it required heavy research and took almost two weeks to complete. I also wrote most of the popular videos on that channel.",
      link: "https://www.youtube.com/watch?v=7jDei3xyC60"
  },
  {
    slug: "eminem-apologize",
    title: "The Only Rapper Who Made Eminem APOLOGIZE",
    image: "eminem-1280.jpg",
    imageSrcset: cloudinarySrcset("eminem-1280.jpg"),
    category: "youtube",
    tags: ["Youtube", "Scriptwriter"],
    role: "Script Writer (co wrote)",
    video: "The Only Rapper Who Made Eminem APOLOGIZE",
    link: "https://youtu.be/ECszc9UVXVs?si=OUfG4tWi3skQqEQ7",
    contribution: ["Research", "Scriptwriting", "Narrative structure"],
    results: "1.7m views",
  },
  {
    slug: "tyler-the-creator",
    title: "The FULL Tyler The Creator Story (Documentary)",
    image: "tyler-1280.jpg",
    imageSrcset: cloudinarySrcset("tyler-1280.jpg"),
    category: "youtube",
    tags: ["Youtube", "Scriptwriter"],
    role: "Script Writer",
    video: "The FULL Tyler The Creator Story (Documentary)",
    link: "https://youtu.be/miMtEPEF3is",
    contribution: ["Research", "Scriptwriting", "Narrative structure"],
    results: "148k views",
  },
  {
    slug: "mike-israetel",
    title: "The Incredibly Satisfying Downfall of Mike Israetel",
    image: "mike-1280.jpg",
    imageSrcset: cloudinarySrcset("mike-1280.jpg"),
    category: "youtube",
    tags: ["Youtube", "Scriptwriter"],
    role: "Head Content Writer / Content Strategist",
    video: "The Incredibly Satisfying Downfall of Mike Israetel",
    link: "https://youtu.be/sdrWWHSvkSg",
    contribution: ["Research", "Scriptwriting", "Narrative structure", "Content strategy"],
    results: "660k views",
  },
  {
    slug: "rasta",
    title: "Rasta Documentary",
    image: "rasta-1280.jpg",
    imageSrcset: cloudinarySrcset("rasta-1280.jpg"),
    category: "youtube",
    tags: ["Youtube", "Scriptwriter"],
    link: "https://youtu.be/UL7ctJwoVpU?si=GdigYgt6v9a0Dji5",
  },
  {
    slug: "livestream",
    title: "Livestream Project",
    image: "livestream-1280.jpg",
    imageSrcset: cloudinarySrcset("livestream-1280.jpg"),
    category: "youtube",
    tags: ["Youtube", "Scriptwriter"],
  },
  {
    slug: "fortnite",
    title: "Fortnite Documentary",
    image: "fortnite-1280.jpg",
    imageSrcset: cloudinarySrcset("fortnite-1280.jpg"),
    category: "youtube",
    tags: ["Youtube", "Scriptwriter"],
  },
];