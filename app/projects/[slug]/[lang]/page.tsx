import { notFound } from "next/navigation";
import { getProject, slugs, type Lang } from "@/lib/projects";
import ProjectClient from "./ProjectClient";

const langs: Lang[] = ["zh", "en"];

export function generateStaticParams() {
  return slugs.flatMap((slug) =>
    langs.map((lang) => ({
      slug,
      lang,
    }))
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}) {
  const { slug, lang } = await params;

  const resolvedLang: Lang = lang === "zh" ? "zh" : "en";
  const project = getProject(slug, resolvedLang);

  if (!project) return notFound();

  return (
    <ProjectClient
      project={project}
      lang={resolvedLang}
      slug={slug}
    />
  );
}