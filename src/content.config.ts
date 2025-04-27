import { file, glob } from "astro/loaders";
import { defineCollection, z, reference } from "astro:content";
import type { icons as lucideIcons } from "@iconify-json/lucide/icons.json";
import type { icons as simpleIcons } from "@iconify-json/simple-icons/icons.json";

const other = defineCollection({
  loader: glob({ base: "src/content/other", pattern: "**/*.{md,mdx}" }),
});

const lucideIconSchema = z.object({
  type: z.literal("lucide"),
  name: z.custom<keyof typeof lucideIcons>(),
});

const simpleIconSchema = z.object({
  type: z.literal("simple-icons"),
  name: z.custom<keyof typeof simpleIcons>(),
});

const quickInfo = defineCollection({
  loader: file("src/content/info.json"),
  schema: z.object({
    id: z.number(),
    icon: z.union([lucideIconSchema, simpleIconSchema]),
    text: z.string(),
  }),
});

const socials = defineCollection({
  loader: file("src/content/socials.json"),
  schema: z.object({
    id: z.number(),
    icon: z.union([lucideIconSchema, simpleIconSchema]),
    text: z.string(),
    link: z.string().url(),
  }),
});

const skills = defineCollection({
  loader: file("src/content/skills.json"),
  schema: z.object({
    id: z.number(),
    icon: z.union([lucideIconSchema, simpleIconSchema]),
    category: z.string(),
    skills: z.string(),
  }),
});

const workExperience = defineCollection({
  loader: file("src/content/work.json"),
  schema: z.object({
    id: z.number(),
    company: z.string(),
    location: z.string(),
    duration: z.string(),
    description: z.string(),
  }),
});

const educationExperience = defineCollection({
  loader: file("src/content/education.json"),
  schema: z.object({
    id: z.number(),
    company: z.string(),
    location: z.string(),
    duration: z.string(),
    description: z.string(),
  }),
});

export const collections = { other, quickInfo, socials, skills, workExperience, educationExperience };
