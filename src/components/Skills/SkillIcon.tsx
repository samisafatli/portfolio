import React from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiFirebase,
  SiGraphql,
  SiPython,
  SiGo,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiMongodb,
  SiMysql,
  SiAmazondynamodb,
} from "react-icons/si";
import { TbInfinity, TbSettings, TbFlag, TbBrandAzure } from "react-icons/tb";
import { MdLanguage } from "react-icons/md";
import { FaCode } from "react-icons/fa";

/**
 * Color pattern for icons project-wide:
 * - A recognizable brand/technology logo renders in a muted version of its
 *   official brand color (same hue, desaturated/darkened ~45%) so the grid
 *   still reads like a real stack, but sits quietly next to the site's sober
 *   graphite + petrol-blue palette instead of popping as a vivid primary.
 * - A generic/conceptual icon (not an actual brand — CI/CD, DevOps, spoken
 *   languages, the unmatched fallback) has no "real" color, so it renders in
 *   the site's own accent (var(--accent) from Skills.css), keeping it
 *   visually tied to the UI instead of competing with the brand colors.
 */
const BRAND_ICONS: Record<string, { Icon: IconType; color: string }> = {
  react: { Icon: SiReact, color: "#6CBBD1" },
  "react native": { Icon: SiReact, color: "#6CBBD1" },
  "next.js": { Icon: SiNextdotjs, color: "#F0F0F0" },
  "vue.js": { Icon: SiVuedotjs, color: "#59977B" },
  javascript: { Icon: SiJavascript, color: "#BAAC3C" },
  typescript: { Icon: SiTypescript, color: "#486B90" },
  html: { Icon: SiHtml5, color: "#A75943" },
  css: { Icon: SiCss3, color: "#315C7C" },
  "node.js": { Icon: SiNodedotjs, color: "#3F6F3F" },
  firebase: { Icon: SiFirebase, color: "#C8A641" },
  graphql: { Icon: SiGraphql, color: "#972C74" },
  python: { Icon: SiPython, color: "#46647D" },
  golang: { Icon: SiGo, color: "#2A7B90" },
  git: { Icon: SiGit, color: "#BD5946" },
  azure: { Icon: TbBrandAzure, color: "#29618D" },
  docker: { Icon: SiDocker, color: "#4181B2" },
  aws: { Icon: SiAmazonwebservices, color: "#AE7D32" },
  mongodb: { Icon: SiMongodb, color: "#4F7B50" },
  mysql: { Icon: SiMysql, color: "#194C57" },
  dynamodb: { Icon: SiAmazondynamodb, color: "#505BA8" },
};

const GENERIC_ICONS: Record<string, IconType> = {
  "ci/cd": TbInfinity,
  "split.io": TbFlag,
  devops: TbSettings,
};

interface SkillIconProps {
  skill: string;
  className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, className = "" }) => {
  const key = skill.toLowerCase();
  const isLanguage = /\(native\)|\(fluent\)/.test(key);

  if (isLanguage) {
    return <MdLanguage className={className} aria-hidden="true" />;
  }

  const brand = BRAND_ICONS[key];
  if (brand) {
    const { Icon, color } = brand;
    return <Icon className={className} style={{ color }} aria-hidden="true" />;
  }

  const Icon = GENERIC_ICONS[key] ?? FaCode;
  return <Icon className={className} aria-hidden="true" />;
};

export default SkillIcon;
