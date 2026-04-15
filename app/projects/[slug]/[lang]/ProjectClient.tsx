"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import type { Lang } from "@/lib/projects";

const videoMap: Record<string, { video: string; poster?: string }> = {
  compressor: {
    video: "/videos/compressor.mp4",
    // poster: "/posters/compressor.jpg",
  },
  vision: {
    video: "/videos/vision.mp4",
    // poster: "/posters/vision.jpg",
  },
  rl: {
    video: "/videos/rl.mp4",
    // poster: "/posters/rl.jpg",
  },
};

export default function ProjectClient({
  project,
  lang,
  slug,
}: {
  project: {
    slug: string;
    title: string;
    subtitle: string;
    tag: string;
    summary: string;
    content: string;
  };
  lang: Lang;
  slug: string;
}) {
  const toggleLang = lang === "zh" ? "en" : "zh";

  const media = videoMap[slug] ?? {
    video: "/hero-video.mp4",
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 md:px-8">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
            <Link
              href="/#projects"
              className="text-sm font-medium uppercase tracking-[0.18em] text-white"
            >
              YLX
            </Link>

            <Link
              href={`/projects/${slug}/${toggleLang}`}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/10"
            >
              {lang === "zh" ? "EN" : "中"}
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:px-10 md:pt-40">
        <div className="absolute inset-0 bg-black" />

        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={media.poster || undefined}
        >
          <source src={media.video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/8 backdrop-blur-md" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            {project.tag}
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            {project.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
            {project.subtitle}
          </p>

          <div className="mt-10">
            <Link
              href="/#projects"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm backdrop-blur transition hover:bg-white/15"
            >
              {lang === "zh" ? "← 返回" : "← Back"}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:p-12">
            <article className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  img: ({ src, alt }) => {
                    if (typeof src !== "string" || !src.trim()) return null;

                    return (
                      <img
                        src={src}
                        alt={alt ?? ""}
                        className="mx-auto my-6 block max-w-full rounded-xl"
                      />
                    );
                  },
                }}
              >
                {project.content}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}