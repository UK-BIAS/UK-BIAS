import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const bios = defineCollection({
  loader: glob({ base: "./src/content/bios/", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      firstname: z.string(),
      lastname: z.string(),
      role: z.string().optional(),
      affiliation: z.string(),
      photo: image(),
    }),
});

export const collections = { bios };
