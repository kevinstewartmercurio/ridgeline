import type { ImageMetadata } from "astro";

import type { GridRow } from "./project-grid";

import larchHouseImage from "../images/larch-house/hero.png";
import fernHollowImage from "../images/fern-hollow/hero.png";
import cutbankResidenceImage from "../images/cutbank-residence/hero.png";
import ledgerHouseImage from "../images/ledger-house/hero.png";
import skagitBarnImage from "../images/skagit-barn/hero.png";

// Stand-ins until each project has its own set of photographs.
import interiorImage from "../images/homepage/wwd-1.png";
import exteriorImage from "../images/homepage/wwd-2.png";
import detailImage from "../images/homepage/wwd-3.png";
import roomImage from "../images/homepage/stack-1.png";
import tableImage from "../images/homepage/stack-2.png";
import duskImage from "../images/homepage/stack-3.png";

type Copy = {
  brief: string;
  site: string;
  outcome: string;
};

// The five row shapes of the grid: a pair of uneven columns, three columns,
// one full-width photo, a column of text between two photos, and a photo with
// its caption set beneath one side.
const rows = (hero: ImageMetadata, copy: Copy): GridRow[] => [
  {
    cells: [
      {
        span: 6,
        image: { src: interiorImage, alt: "", aspect: "4 / 3" },
        caption: { label: "The brief", body: copy.brief },
      },
      {
        span: 6,
        image: { src: exteriorImage, alt: "", aspect: "3 / 2" },
        caption: { label: "The site", body: copy.site },
      },
    ],
  },
  {
    cells: [
      { span: 3, image: { src: roomImage, alt: "", aspect: "4 / 3" } },
      {
        span: 4,
        image: { src: tableImage, alt: "", aspect: "4 / 3" },
        caption: { label: "The outcome", body: copy.outcome },
      },
      {
        span: 5,
        image: { src: duskImage, alt: "", aspect: "5 / 4" },
      },
    ],
  },
  {
    cells: [
      {
        span: 12,
        image: { src: hero, alt: "", aspect: "21 / 9" },
      },
    ],
  },
  {
    cells: [
      { span: 3, image: { src: detailImage, alt: "", aspect: "4 / 3" } },
      { span: 4, caption: { label: "The brief", body: copy.brief } },
      {
        span: 5,
        image: { src: interiorImage, alt: "", aspect: "3 / 4" },
      },
    ],
  },
  {
    cells: [
      {
        span: 12,
        image: { src: exteriorImage, alt: "", aspect: "16 / 9" },
      },
      { span: 5, start: 8, caption: { label: "The site", body: copy.site } },
    ],
  },
];

export const projectGrids: Record<string, GridRow[]> = {
  "larch-house": rows(larchHouseImage, {
    brief:
      "A family of six, spread across three generations, wanted one building that could hold a full holiday and still feel right for two people in February. The clients asked for warmth without heaviness, and for every room to know where the valley was.",
    site: "Eleven acres on a south-facing bench above the river, screened by second-growth larch. Steep, dry, and cold, with a narrow window of winter sun that set the building's angle before the first sketch was made.",
    outcome:
      "Two low volumes joined by a glazed passage. A compact winter house and a summer wing that closes down when it is empty. Board-form concrete at the base, charred larch above, weathering to match the trees it was milled beside.",
  }),
  "fern-hollow": rows(fernHollowImage, {
    brief:
      "A corner lot two streets from a light rail stop, and a couple who wanted to stay in the neighbourhood they had rented in for a decade. Room for a workshop, and nothing they would have to explain to the neighbours.",
    site: "A quarter of an acre that slopes away from the street, with a cedar the city had tagged for retention. The house steps down with the grade and keeps its distance from the roots.",
    outcome:
      "Three storeys that read as two from the pavement. Brick at the base to match the block, stained cedar above, and a workshop that opens onto the lane behind.",
  }),
  "cutbank-residence": rows(cutbankResidenceImage, {
    brief:
      "A retired couple moving from a farmhouse they had kept for forty years, wanting less to look after and no less room for the family that visits each August.",
    site: "Two and a half acres on a bluff, with a setback that fixed the footprint before design began. Madrona along the edge, and wind off the water most afternoons.",
    outcome:
      "A single storey held back from the bluff, wrapped by a deep porch that takes the wind. Everything the couple needs sits on one side; the guest rooms close off when the summer ends.",
  }),
  "ledger-house": rows(ledgerHouseImage, {
    brief:
      "A 1974 house with good bones and a plan that had been cut into small rooms. The owners wanted it opened up without losing the parts that made them buy it.",
    site: "A third of an acre above a canyon, dry and south-facing, with a deck that had outlived its framing.",
    outcome:
      "The original post-and-beam frame kept and exposed, partitions removed, and the glazing replaced. A new deck on steel, set out to the line the old one had only implied.",
  }),
  "skagit-barn": rows(skagitBarnImage, {
    brief:
      "A working farm that needed another bedroom, a proper bathroom, and somewhere to put visiting family without giving up the shop.",
    site: "Six acres of flat ground under a big sky, with a barn from 1936 that the county would not let anyone take down.",
    outcome:
      "An addition that borrows the barn's roof pitch and stops short of touching it. Corrugated steel weathering to the same grey, and a glazed link that keeps the two apart.",
  }),
};
