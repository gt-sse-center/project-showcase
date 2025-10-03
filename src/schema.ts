import { z } from "zod";

// Partner and Engineer interfaces
export interface Partner {
  name: string;
  profileUrl?: string | null;
}

export interface SoftwareEngineer {
  name: string;
  profileUrl?: string | null;
}

export interface ProjectDetails {
  startDate: string;
  endDate: string;
  source: string;
  scientificDomain: string;
  partners: Partner[];
  softwareEngineers: SoftwareEngineer[];
}

export interface Screenshot {
  url: string;
  alt: string;
  caption: string;
  description?: string;
}

export interface Technology {
  name: string;
  url: string;
}

// Application-level Project interface - projects are stored as static data
export interface Project {
  id: number;
  title: string;
  description: string;
  summary: string;
  imageUrl: string;
  category: string[];
  githubUrl: string[];
  demoUrl?: string[] | null;
  featured?: boolean | null;
  achievements: string[];
  goals: string[];
  softwareSolution: string;
  impact: string[];
  detailedTechnologies: {
    [categoryName: string]: Array<string | Technology>;
  };
  projectDetails: ProjectDetails;
  screenshots: Screenshot[];
  references?: string[] | null;
}

/** —————————————————————————————————————————————
 *  A URL _or_ a relative link (/, ./, ../)
 *  ————————————————————————————————————————————— */
const AbsoluteOrRelativeUrl = z.union([
  // absolute URLs…
  z.url(),
  // …or relative paths starting with /, ./, or ../
  z
    .string()
    .regex(
      /^(\.\/|\.\.\/|\/)[^\s]+$/,
      "Must be a valid absolute URL or a relative path (starting with /, ./, or ../)",
    ),
]);

/** Extend it to also accept "", null, or undefined */
const UrlOrRelativeOptional = z
  .union([AbsoluteOrRelativeUrl, z.literal("")])
  .nullable()
  .optional();

/** —————————————————————————————————————————————
 *  Zod Schemas for runtime validation
 *  ————————————————————————————————————————————— */
export const PartnerSchema = z.object({
  name: z.string(),
  profileUrl: UrlOrRelativeOptional,
});

export const SoftwareEngineerSchema = PartnerSchema; // same shape

export const ProjectDetailsSchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
  source: z.string(),
  scientificDomain: z.string(),
  partners: z.array(PartnerSchema),
  softwareEngineers: z.array(SoftwareEngineerSchema),
});

export const ScreenshotSchema = z.object({
  url: AbsoluteOrRelativeUrl.optional(),
  alt: z.string(),
  caption: z.string(),
  description: z.string().optional(),
});

export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  // ← enforce summary length between 10 and 200 chars:
  summary: z
    .string()
    .min(10, { message: "Summary must be at least 10 characters" })
    .max(200, { message: "Summary cannot exceed 200 characters" }),
  imageUrl: AbsoluteOrRelativeUrl,
  category: z.array(z.string()),
  githubUrl: z.array(z.url()),
  demoUrl: z.array(z.url().optional()).nullable().optional(),
  featured: z.boolean().nullable().optional(),
  achievements: z.array(z.string()),
  goals: z.array(z.string()),
  softwareSolution: z.string(),
  impact: z.array(z.string()),
  detailedTechnologies: z.record(z.string(),
    z.array(
      z.union([
        z.string(),
        z.object({ name: z.string(), url: z.url() }),
      ]),
    ),
  ),
  projectDetails: ProjectDetailsSchema,
  screenshots: z.array(ScreenshotSchema),
  references: z.array(z.string()).nullable().optional(),
});

export type ProjectFromSchema = z.infer<typeof ProjectSchema>;
