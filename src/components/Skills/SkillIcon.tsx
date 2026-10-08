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

const ICON_MAP: Record<string, IconType> = {
  react: SiReact,
  "react native": SiReact,
  "next.js": SiNextdotjs,
  "vue.js": SiVuedotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss3,
  "node.js": SiNodedotjs,
  firebase: SiFirebase,
  graphql: SiGraphql,
  python: SiPython,
  golang: SiGo,
  "ci/cd": TbInfinity,
  git: SiGit,
  azure: TbBrandAzure,
  "split.io": TbFlag,
  docker: SiDocker,
  aws: SiAmazonwebservices,
  devops: TbSettings,
  mongodb: SiMongodb,
  mysql: SiMysql,
  dynamodb: SiAmazondynamodb,
};

interface SkillIconProps {
  skill: string;
  className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, className = "" }) => {
  const key = skill.toLowerCase();
  const isLanguage = /\(native\)|\(fluent\)/.test(key);
  const Icon = isLanguage ? MdLanguage : ICON_MAP[key] ?? FaCode;

  return <Icon className={className} aria-hidden="true" />;
};

export default SkillIcon;
