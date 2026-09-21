import type { ImageMetadata } from "astro";

import type { GridCell, GridRow } from "./project-grid";

import larchHouseImage from "../images/larch-house/hero.jpg";
import fernHollowImage from "../images/fern-hollow/hero.jpg";
import cutbankResidenceImage from "../images/cutbank-residence/hero.jpg";
import ledgerHouseImage from "../images/ledger-house/hero.jpg";
import skagitBarnImage from "../images/skagit-barn/hero.jpg";

// Stand-ins until each project has its own set of photographs.
import interiorImage from "../images/homepage/wwd-1.jpg";
import exteriorImage from "../images/homepage/wwd-2.jpg";
import detailImage from "../images/homepage/wwd-3.jpg";
import diningImage from "../images/homepage/wwd-4.jpg";
import roomImage from "../images/homepage/stack-1.jpg";
import tableImage from "../images/homepage/stack-2.jpg";
import duskImage from "../images/homepage/stack-3.jpg";

import larchHouse1Image from "../images/larch-house/grid-1.jpeg";
import larchHouse2Image from "../images/larch-house/grid-2.jpg";
import larchHouse3Image from "../images/larch-house/grid-3.jpg";
import larchHouse4Image from "../images/larch-house/grid-4.jpg";
import larchHouse5Image from "../images/larch-house/grid-5.jpeg";
import larchHouse6Image from "../images/larch-house/grid-6.jpg";
import larchHouse7Image from "../images/larch-house/grid-7.jpg";

import fernHollow1Image from "../images/fern-hollow/grid-1.jpg";
import fernHollow2Image from "../images/fern-hollow/grid-2.jpg";
import fernHollow3Image from "../images/fern-hollow/grid-3.jpg";
import fernHollow4Image from "../images/fern-hollow/grid-4.jpg";
import fernHollow5Image from "../images/fern-hollow/grid-5.jpeg";
import fernHollow6Image from "../images/fern-hollow/grid-6.jpg";

import cutbankResidence1Image from "../images/cutbank-residence/grid-1.jpg";
import cutbankResidence2Image from "../images/cutbank-residence/grid-2.jpg";
import cutbankResidence3Image from "../images/cutbank-residence/grid-3.jpg";
import cutbankResidence4Image from "../images/cutbank-residence/grid-4.jpg";
import cutbankResidence5Image from "../images/cutbank-residence/grid-5.jpg";
import cutbankResidence6Image from "../images/cutbank-residence/grid-6.jpg";
import cutbankResidence7Image from "../images/cutbank-residence/grid-7.jpg";

import ledgerHouse1Image from "../images/ledger-house/grid-1.jpg";
import ledgerHouse2Image from "../images/ledger-house/grid-2.jpg";
import ledgerHouse3Image from "../images/ledger-house/grid-3.jpg";
import ledgerHouse4Image from "../images/ledger-house/grid-4.jpg";
import ledgerHouse5Image from "../images/ledger-house/grid-5.jpg";
import ledgerHouse6Image from "../images/ledger-house/grid-6.jpg";

import skagitBarn1Image from "../images/skagit-barn/grid-1.jpg";
import skagitBarn2Image from "../images/skagit-barn/grid-2.jpg";
import skagitBarn3Image from "../images/skagit-barn/grid-3.jpg";
import skagitBarn4Image from "../images/skagit-barn/grid-4.jpg";
import skagitBarn5Image from "../images/skagit-barn/grid-5.jpg";
import skagitBarn6Image from "../images/skagit-barn/grid-6.jpg";
import skagitBarn7Image from "../images/skagit-barn/grid-7.jpg";

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
          image: photo(larchHouse1Image, "4 / 3"),
        },
        {
          image: photo(larchHouse2Image, "3 / 2"),
          caption: {
            label: "The brief",
            body: "A family of six, spread across three generations, wanted one building that could hold a full holiday and still feel right for two people in February. The clients asked for warmth without heaviness, and for every room to know where the valley was.",
          },
        },
      ],
      [7, 5],
    ),
    captioned(
      photo(larchHouse3Image, "21 / 9"),
      {
        label: "The site",
        body: "Eleven acres on a south-facing bench above the river, screened by second-growth larch. Steep, dry, and cold, with a narrow window of winter sun that set the building's angle before the first sketch was made.",
      },
      "left",
    ),
    columns(
      [
        { image: photo(larchHouse4Image, "4 / 3") },
        { image: photo(larchHouse5Image, "4 / 3") },
        { image: photo(larchHouse6Image, "5 / 6") },
      ],
      [4, 4, 4],
    ),
    captioned(photo(larchHouse7Image, "16 / 9"), {
      label: "The outcome",
      body: "Two low volumes joined by a glazed passage. A compact winter house and a summer wing that closes down when it is empty. Board-form concrete at the base, charred larch above, weathering to match the trees it was milled beside.",
    }),
  ],
  "fern-hollow": [
    captioned(
      photo(fernHollow1Image, "16 / 9"),
      {
        label: "The brief",
        body: "A corner lot two streets from a light rail stop, and a couple who wanted to stay in the neighbourhood they had rented in for a decade. Room for a workshop, and nothing they would have to explain to the neighbours.",
      },
      "right",
    ),
    columns(
      [
        {
          image: photo(fernHollow2Image, "4 / 3"),
          caption: {
            label: "The site",
            body: "A quarter of an acre that slopes away from the street, with a cedar the city had tagged for retention. The house steps down with the grade and keeps its distance from the roots.",
          },
        },
        { image: photo(fernHollow3Image, "1 / 1") },
      ],
      [5, 7],
    ),
    full(photo(fernHollow4Image, "16 / 9")),
    columns(
      [
        {
          image: photo(fernHollow5Image, "4 / 3"),
        },
        {
          image: photo(fernHollow6Image, "3 / 2"),
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
          image: photo(cutbankResidence1Image, "4 / 3"),
          caption: {
            label: "The brief",
            body: "A retired couple moving from a farmhouse they had kept for forty years, wanting less to look after and no less room for the family that visits each August.",
          },
        },
        { image: photo(cutbankResidence2Image, "4 / 3") },
      ],
      [6, 6],
    ),
    full(photo(cutbankResidence3Image, "21 / 9")),
    columns(
      [
        {
          image: photo(cutbankResidence4Image, "4 / 3"),
        },
        {
          image: photo(cutbankResidence5Image, "16 / 9"),
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
          image: photo(cutbankResidence6Image, "4 / 3"),
          caption: {
            label: "The outcome",
            body: "A single storey held back from the bluff, wrapped by a deep porch that takes the wind. Everything the couple needs sits on one side; the guest rooms close off when the summer ends.",
          },
        },
        { image: photo(cutbankResidence7Image, "4 / 3") },
      ],
      [6, 6],
    ),
  ],
  "ledger-house": [
    columns(
      [
        {
          image: photo(ledgerHouse1Image, "1 / 1"),
          caption: {
            label: "The brief",
            body: "A 1974 house with good bones and a plan that had been cut into small rooms. The owners wanted it opened up without losing the parts that made them buy it.",
          },
        },
        { image: photo(ledgerHouse2Image, "4 / 5") },
        { image: photo(ledgerHouse3Image, "4 / 5") },
      ],
      [6, 3, 3],
    ),
    captioned(photo(ledgerHouse4Image, "16 / 9"), {
      label: "The site",
      body: "A third of an acre above a canyon, dry and south-facing, with a deck that had outlived its framing.",
    }),
    columns(
      [
        {
          image: photo(ledgerHouse5Image, "1 / 1"),
        },
        {
          image: photo(ledgerHouse6Image, "1 / 1"),
          caption: {
            label: "The outcome",
            body: "The original post-and-beam frame kept and exposed, partitions removed, and the glazing replaced. A new deck on steel, set out to the line the old one had only implied.",
          },
        },
      ],
      [6, 6],
    ),
  ],
  "skagit-barn": [
    columns(
      [
        {
          image: photo(skagitBarn1Image, "16 / 9"),
          caption: {
            label: "The brief",
            body: "A working farm that needed another bedroom, a proper bathroom, and somewhere to put visiting family without giving up the shop.",
          },
        },
        {
          image: photo(skagitBarn2Image, "3 / 4"),
        },
      ],
      [8, 4],
    ),
    full(photo(skagitBarn3Image, "16 / 9")),
    columns(
      [
        { image: photo(skagitBarn4Image, "5 / 6") },
        {
          image: photo(skagitBarn5Image, "5 / 4"),
          caption: {
            label: "The site",
            body: "Six acres of flat ground under a big sky, with a barn from 1936 that the county would not let anyone take down.",
          },
        },
        { image: photo(skagitBarn6Image, "5 / 4") },
      ],
      [4, 4, 4],
    ),
    captioned(
      photo(skagitBarn7Image, "21 / 9"),
      {
        label: "The outcome",
        body: "An addition that borrows the barn's roof pitch and stops short of touching it. Corrugated steel weathering to the same grey, and a glazed link that keeps the two apart.",
      },
      "left",
    ),
  ],
};
