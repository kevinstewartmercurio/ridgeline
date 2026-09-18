import type { ImageMetadata } from "astro";

/**
 * A row of the project photo grid. Each row lays its cells out on a
 * twelve-column grid, so a row can be one wide image, a pair of uneven
 * columns, or three images of different sizes.
 */
export type GridRow = {
  cells: GridCell[];
};

export type GridCell = {
  /** Columns the cell fills, out of twelve. Ignored below `md`, where cells stack. */
  span?: number;
  /** Column the cell starts at, out of twelve, for leaving a gap beside it. */
  start?: number;
  image: {
    src: ImageMetadata;
    alt: string;
    /** Any CSS `aspect-ratio`, e.g. "4 / 3" for landscape or "3 / 4" for portrait. */
    aspect?: string;
  };
  /** Always set beneath the image; a cell never holds a caption on its own. */
  caption?: {
    label?: string;
    /** Which side of the cell the caption sits on. Defaults to the left. */
    align?: "start" | "end";
    body: string;
  };
};
