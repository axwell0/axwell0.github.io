/**
 * Content types for articles.
 *
 * Each entry is a category you can attach to a post via its `tags` frontmatter.
 * `tag` must match the (kebab-case) tag string used in posts; `label` is what's
 * shown in the UI; `description` explains the category.
 *
 * Add, remove, or rename entries here — this is the single place that defines
 * the kinds of content on the site.
 */
export interface ContentType {
  tag: string;
  label: string;
  description: string;
}

export const CONTENT_TYPES: ContentType[] = [
  {
    tag: "article",
    label: "Article",
    description: "Long-form writing and deep dives.",
  },
  {
    tag: "note",
    label: "Note",
    description: "Short notes, TILs, and quick thoughts.",
  },
  {
    tag: "project",
    label: "Project",
    description: "Things I've built and shipped.",
  },
  {
    tag: "tutorial",
    label: "Tutorial",
    description: "Step-by-step guides and how-tos.",
  },
];

export const getContentType = (tag: string): ContentType | undefined =>
  CONTENT_TYPES.find(t => t.tag === tag);
