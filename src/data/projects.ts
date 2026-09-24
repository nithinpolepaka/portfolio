import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Portfolio Website",
    href: "/projects",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: {
      LIGHT: "/images/projects/portfolioLight.webp",
      DARK: "/images/projects/portfolioDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website built using Next.js, Tailwind CSS and Framer Motion.",
    sourceCodeHref: siteMetadata.siteRepo,
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
