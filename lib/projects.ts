import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Lang = "zh" | "en";

const dir = path.join(process.cwd(), "content/projects");

export const slugs = ["compressor", "vision", "rl"] as const;

export function getProject(slug: string, lang: Lang) {
  const filePath = path.join(dir, `${slug}.${lang}.md`);
  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  return {
    slug,
    title: String(data.title ?? ""),
    subtitle: String(data.subtitle ?? ""),
    tag: String(data.tag ?? ""),
    summary: String(data.summary ?? ""),
    content,
  };
}