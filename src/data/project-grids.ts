import type { ImageMetadata } from "astro";

import type { GridCell, GridRow } from "./project-grid";

import larchHouseImage from "../images/larch-house/hero.png";
import fernHollowImage from "../images/fern-hollow/hero.png";
import cutbankResidenceImage from "../images/cutbank-residence/hero.png";
import ledgerHouseImage from "../images/ledger-house/hero.png";
import skagitBarnImage from "../images/skagit-barn/hero.png";

// Stand-ins until each project has its own set of photographs.
import interiorImage from "../images/homepage/wwd-1.png";
import exteriorImage from "../images/homepage/wwd-2.png";
import detailImage from "../images/homepage/wwd-3.png";
import diningImage from "../images/homepage/wwd-4.png";
import roomImage from "../images/homepage/stack-1.png";
import tableImage from "../images/homepage/stack-2.png";
import duskImage from "../images/homepage/stack-3.png";

type Image = NonNullable<GridCell["image"]>;
type Caption = NonNullable<GridCell["caption"]>;
type Tile = Omit<GridCell, "span" | "start">;

const photo = (src: ImageMetadata, aspect: string): Image => ({
  src,
  alt: "",
  aspect,
});

// The row shapes every grid is built from. Each project arranges them in its
// own order, with its own proportions and content.

/** Two or three columns whose spans add up to twelve. */
const columns = (tiles: Tile[], spans: number[]): GridRow => ({
  cells: tiles.map((tile, i) => ({ ...tile, span: spans[i] })),
});

/** One full-width photo. */
const full = (image: Image): GridRow => ({
  cells: [{ span: 12, image }],
});

/** A full-width photo with its caption set beneath one side. */
const captioned = (
  image: Image,
  caption: Caption,
  side: "left" | "right" = "right",
): GridRow => ({
  cells: [
    {
      span: 12,
      image,
      caption: { ...caption, align: side === "right" ? "end" : "start" },
    },
  ],
});

export const projectGrids: Record<string, GridRow[]> = {
  "larch-house": [
    columns(
      [
        {
          image: photo(interiorImage, "4 / 3"),
          caption: {
            label: "The brief",
            body: "A family of six, spread across three generations, wanted one building that could hold a full holiday and still feel right for two people in February. The clients asked for warmth without heaviness, and for every room to know where the valley was.",
          },
        },
        {
          image: photo(exteriorImage, "3 / 2"),
        },
      ],
      [7, 5],
    ),
    // full(photo(larchHouseImage, "21 / 9")),
    captioned(
      photo(larchHouseImage, "21 / 9"),
      {
        label: "The site",
        body: "Eleven acres on a south-facing bench above the river, screened by second-growth larch. Steep, dry, and cold, with a narrow window of winter sun that set the building's angle before the first sketch was made.",
      },
      "left",
    ),
    columns(
      [
        { image: photo(roomImage, "4 / 3") },
        { image: photo(tableImage, "4 / 3") },
        { image: photo(duskImage, "5 / 6") },
      ],
      [4, 4, 4],
    ),
    captioned(photo(detailImage, "16 / 9"), {
      label: "The outcome",
      body: "Two low volumes joined by a glazed passage. A compact winter house and a summer wing that closes down when it is empty. Board-form concrete at the base, charred larch above, weathering to match the trees it was milled beside.",
    }),
  ],
  "fern-hollow": [
    captioned(
      photo(fernHollowImage, "16 / 9"),
      {
        label: "The brief",
        body: "A corner lot two streets from a light rail stop, and a couple who wanted to stay in the neighbourhood they had rented in for a decade. Room for a workshop, and nothing they would have to explain to the neighbours.",
      },
      "right",
    ),
    columns(
      [
        {
          image: photo(diningImage, "4 / 3"),
          caption: {
            label: "The site",
            body: "A quarter of an acre that slopes away from the street, with a cedar the city had tagged for retention. The house steps down with the grade and keeps its distance from the roots.",
          },
        },
        { image: photo(roomImage, "6 / 5") },
      ],
      [5, 7],
    ),
    full(photo(duskImage, "21 / 9")),
    columns(
      [
        {
          image: photo(interiorImage, "4 / 3"),
        },
        {
          image: photo(exteriorImage, "3 / 2"),
          caption: {
            label: "The outcome",
            body: "Three storeys that read as two from the pavement. Brick at the base to match the block, stained cedar above, and a workshop that opens onto the lane behind.",
          },
        },
      ],
      [7, 5],
    ),
  ],
  "cutbank-residence": [
    columns(
      [
        {
          image: photo(detailImage, "4 / 3"),
          caption: {
            label: "The brief",
            body: "A retired couple moving from a farmhouse they had kept for forty years, wanting less to look after and no less room for the family that visits each August.",
          },
        },
        { image: photo(diningImage, "4 / 3") },
      ],
      [6, 6],
    ),
    full(photo(cutbankResidenceImage, "21 / 9")),
    columns(
      [
        {
          image: photo(tableImage, "4 / 3"),
        },
        {
          image: photo(exteriorImage, "16 / 9"),
          caption: {
            label: "The site",
            body: "Two and a half acres on a bluff, with a setback that fixed the footprint before design began. Madrona along the edge, and wind off the water most afternoons.",
          },
        },
      ],
      [4, 8],
    ),
    columns(
      [
        {
          image: photo(roomImage, "4 / 3"),
          caption: {
            label: "The outcome",
            body: "A single storey held back from the bluff, wrapped by a deep porch that takes the wind. Everything the couple needs sits on one side; the guest rooms close off when the summer ends.",
          },
        },
        { image: photo(duskImage, "4 / 3") },
      ],
      [6, 6],
    ),
  ],
  "ledger-house": [
    columns(
      [
        {
          image: photo(interiorImage, "1 / 1"),
          caption: {
            label: "The brief",
            body: "A 1974 house with good bones and a plan that had been cut into small rooms. The owners wanted it opened up without losing the parts that made them buy it.",
          },
        },
        { image: photo(roomImage, "4 / 5") },
        { image: photo(detailImage, "4 / 5") },
      ],
      [6, 3, 3],
    ),
    captioned(photo(ledgerHouseImage, "21 / 9"), {
      label: "The site",
      body: "A third of an acre above a canyon, dry and south-facing, with a deck that had outlived its framing.",
    }),
    columns(
      [
        {
          image: photo(diningImage, "1 / 1"),
          caption: {
            label: "The outcome",
            body: "The original post-and-beam frame kept and exposed, partitions removed, and the glazing replaced. A new deck on steel, set out to the line the old one had only implied.",
          },
        },
        {
          image: photo(tableImage, "1 / 1"),
        },
      ],
      [6, 6],
    ),
    full(photo(exteriorImage, "16 / 9")),
  ],
  "skagit-barn": [
    columns(
      [
        {
          image: photo(exteriorImage, "16 / 9"),
          caption: {
            label: "The brief",
            body: "A working farm that needed another bedroom, a proper bathroom, and somewhere to put visiting family without giving up the shop.",
          },
        },
        {
          image: photo(tableImage, "3 / 4"),
        },
      ],
      [8, 4],
    ),
    full(photo(skagitBarnImage, "21 / 9")),
    columns(
      [
        { image: photo(duskImage, "5 / 6") },
        {
          image: photo(detailImage, "5 / 4"),
          caption: {
            label: "The site",
            body: "Six acres of flat ground under a big sky, with a barn from 1936 that the county would not let anyone take down.",
          },
        },
        { image: photo(roomImage, "5 / 4") },
      ],
      [4, 4, 4],
    ),
    captioned(
      photo(diningImage, "21 / 9"),
      {
        label: "The outcome",
        body: "An addition that borrows the barn's roof pitch and stops short of touching it. Corrugated steel weathering to the same grey, and a glazed link that keeps the two apart.",
      },
      "left",
    ),
  ],
};
