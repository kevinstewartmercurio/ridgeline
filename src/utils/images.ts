/**
 * Candidate widths for every `<Image>` srcset. Astro drops any wider than the
 * source and adds the source's own width in their place, so the last entry
 * sits above the largest photograph (2880 px) to keep the original in the set.
 *
 * Each call site pairs these with a `sizes` that describes its own layout.
 * Content is capped at `max-w-344` (1376 px), which it reaches at a 1456 px
 * viewport once the `lg:px-10` gutters are added.
 */
export const imageWidths = [480, 768, 1080, 1440, 1920, 2560, 3200];
