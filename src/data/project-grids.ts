import type { ImageMetadata } from "astro";

import type { GridCell, GridRow } from "./project-grid.types";

import larchHouse1Image from "../images/larch-house/grid-1.jpg";
import larchHouse2Image from "../images/larch-house/grid-2.jpg";
import larchHouse3Image from "../images/larch-house/grid-3.jpg";
import larchHouse4Image from "../images/larch-house/grid-4.jpg";
import larchHouse5Image from "../images/larch-house/grid-5.jpg";
import larchHouse6Image from "../images/larch-house/grid-6.jpg";
import larchHouse7Image from "../images/larch-house/grid-7.jpg";

import fernHollow1Image from "../images/fern-hollow/grid-1.jpg";
import fernHollow2Image from "../images/fern-hollow/grid-2.jpg";
import fernHollow3Image from "../images/fern-hollow/grid-3.jpg";
import fernHollow4Image from "../images/fern-hollow/grid-4.jpg";
import fernHollow5Image from "../images/fern-hollow/grid-5.jpg";
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

const photo = (src: ImageMetadata, alt: string, aspect: string): Image => ({
  src,
  alt,
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
          image: photo(
            larchHouse1Image,
            "Kitchen with oak cabinetry, a long walnut-topped island lined with leather bar stools, and a black range hood under exposed timber beams.",
            "4 / 3",
          ),
        },
        {
          image: photo(
            larchHouse2Image,
            "Pale bedroom with a low upholstered bed, a woven pendant and a branching tree in a clay pot before sheer full-height curtains.",
            "3 / 2",
          ),
          caption: {
            label: "The brief",
            body: "A family of six, spread across three generations, wanted one building that could hold a full holiday and still feel right for two people in February. The clients asked for warmth without heaviness, and for every room to know where the valley was.",
          },
        },
      ],
      [7, 5],
    ),
    captioned(
      photo(
        larchHouse3Image,
        "Snow-capped volcanic peak glowing at dusk above ridges of dark conifer forest.",
        "21 / 9",
      ),
      {
        label: "The site",
        body: "Eleven acres on a south-facing bench above the river, screened by second-growth larch. Steep, dry, and cold, with a narrow window of winter sun that set the building's angle before the first sketch was made.",
      },
      "left",
    ),
    columns(
      [
        {
          image: photo(
            larchHouse4Image,
            "Dark-stained house among tall firs, a lit dining room visible through its glass corner and timber decks stepping down the slope.",
            "4 / 3",
          ),
        },
        {
          image: photo(
            larchHouse5Image,
            "Bathroom with a green-tiled walk-in shower, brass fittings and a double oak vanity beneath a window onto the trees.",
            "4 / 3",
          ),
        },
        {
          image: photo(
            larchHouse6Image,
            "Living room with a dark timber fireplace wall, open shelving and a stacked log store beside sliding glass doors to the forest.",
            "5 / 6",
          ),
        },
      ],
      [4, 4, 4],
    ),
    captioned(
      photo(
        larchHouse7Image,
        "Dining room with a long oak table and leather chairs under pale timber beams, glass doors opening to a terrace.",
        "16 / 9",
      ),
      {
        label: "The outcome",
        body: "Two low volumes joined by a glazed passage. A compact winter house and a summer wing that closes down when it is empty. Board-form concrete at the base, charred larch above, weathering to match the trees it was milled beside.",
      },
    ),
  ],
  "fern-hollow": [
    captioned(
      photo(
        fernHollow1Image,
        "Living room with two sage-green sofas under a pale timber ceiling, opening through to the dining area and a teak kitchen.",
        "16 / 9",
      ),
      {
        label: "The brief",
        body: "A corner lot two streets from a light rail stop, and a couple who wanted to stay in the neighbourhood they had rented in for a decade. Room for a workshop, and nothing they would have to explain to the neighbours.",
      },
      "right",
    ),
    columns(
      [
        {
          image: photo(
            fernHollow2Image,
            "Bed with a cane-and-walnut headboard and patterned cushions against a dark green wall, a black swing-arm lamp above the nightstand.",
            "4 / 3",
          ),
          caption: {
            label: "The site",
            body: "A quarter of an acre that slopes away from the street, with a cedar the city had tagged for retention. The house steps down with the grade and keeps its distance from the roots.",
          },
        },
        {
          image: photo(
            fernHollow3Image,
            "Timber garden studio with its glass doors open onto a sewing room of thread racks, fabric bolts and a dress form.",
            "1 / 1",
          ),
        },
      ],
      [5, 7],
    ),
    full(
      photo(
        fernHollow4Image,
        "Built-in walnut desk and shelving with yellow, orange and red drawer fronts, beneath a landscape painting at the top of the stair.",
        "16 / 9",
      ),
    ),
    columns(
      [
        {
          image: photo(
            fernHollow5Image,
            "Bedroom with a walnut platform bed under a dark-beamed timber ceiling, a corner window looking into the trees.",
            "4 / 3",
          ),
        },
        {
          image: photo(
            fernHollow6Image,
            "Bathroom with a walnut vanity and round mirror against ochre and teal patterned tile, beside a freestanding tub and glass shower.",
            "3 / 2",
          ),
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
          image: photo(
            cutbankResidence1Image,
            "Pair of built-in oak bunk beds with grey quilts and indigo cushions, a vintage Yosemite map on the panelled wall between them.",
            "4 / 3",
          ),
          caption: {
            label: "The brief",
            body: "A retired couple moving from a farmhouse they had kept for forty years, wanting less to look after and no less room for the family that visits each August.",
          },
        },
        {
          image: photo(
            cutbankResidence2Image,
            "Dining room under a gabled timber ceiling, with floor-to-ceiling glass on three sides looking out over trees to open water.",
            "4 / 3",
          ),
        },
      ],
      [6, 6],
    ),
    full(
      photo(
        cutbankResidence3Image,
        "Bedroom with a wall of tall black-framed windows, one swung open, looking through autumn trees to the water.",
        "21 / 9",
      ),
    ),
    columns(
      [
        {
          image: photo(
            cutbankResidence4Image,
            "Small-town main street in autumn: a sidewalk under a timber shopfront awning, with parked cars and yellow trees.",
            "4 / 3",
          ),
        },
        {
          image: photo(
            cutbankResidence5Image,
            "Kitchen with blue-grey cabinets and an oak peninsula under exposed timber rafters, with reeded-glass upper cupboards.",
            "16 / 9",
          ),
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
          image: photo(
            cutbankResidence6Image,
            "Bathroom with a freestanding tub before tall black-framed windows onto a lake and autumn woods, timber-lined walls behind.",
            "4 / 3",
          ),
          caption: {
            label: "The outcome",
            body: "A single storey held back from the bluff, wrapped by a deep porch that takes the wind. Everything the couple needs sits on one side; the guest rooms close off when the summer ends.",
          },
        },
        {
          image: photo(
            cutbankResidence7Image,
            "Ferry at its terminal on calm water at dusk, seen from a shoreline bank of purple asters and dry grass.",
            "4 / 3",
          ),
        },
      ],
      [6, 6],
    ),
  ],
  "ledger-house": [
    columns(
      [
        {
          image: photo(
            ledgerHouse1Image,
            "Living room under a timber-boarded ceiling, with a grey sofa and a dog asleep on a rust rug beside white-painted brick walls.",
            "1 / 1",
          ),
          caption: {
            label: "The brief",
            body: "A 1974 house with good bones and a plan that had been cut into small rooms. The owners wanted it opened up without losing the parts that made them buy it.",
          },
        },
        {
          image: photo(
            ledgerHouse2Image,
            "Aerial view of a yellow camper van on a winding road through conifer forest, past a still green lake.",
            "4 / 5",
          ),
        },
        {
          image: photo(
            ledgerHouse3Image,
            "Leather lounge chair and ottoman on a cowhide rug before a plywood-panelled wall hung with a large cityscape painting.",
            "4 / 5",
          ),
        },
      ],
      [6, 3, 3],
    ),
    captioned(
      photo(
        ledgerHouse4Image,
        "Narrow bedroom under a sloping timber ceiling, a wall of built-in wardrobes on one side and full-height glass to the woods on the other.",
        "16 / 9",
      ),
      {
        label: "The site",
        body: "A third of an acre above a canyon, dry and south-facing, with a deck that had outlived its framing.",
      },
    ),
    columns(
      [
        {
          image: photo(
            ledgerHouse5Image,
            "Dining nook with a built-in timber banquette and a globe pendant, its corner windows framing a windswept cypress and the sea.",
            "1 / 1",
          ),
        },
        {
          image: photo(
            ledgerHouse6Image,
            "Bathroom with a tiled soaking tub beneath a wide window onto evergreens, under a sloping timber ceiling.",
            "1 / 1",
          ),
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
          image: photo(
            skagitBarn1Image,
            "Kitchen corner with oxblood tiled walls, a brass range hood and walnut drawers, an oak island holding strawberries and a flowering branch.",
            "16 / 9",
          ),
          caption: {
            label: "The brief",
            body: "A working farm that needed another bedroom, a proper bathroom, and somewhere to put visiting family without giving up the shop.",
          },
        },
        {
          image: photo(
            skagitBarn2Image,
            "Bathroom with an oxblood double trough sink on an oak vanity, tall brass-framed mirrors and terrazzo floor under an ochre ceiling.",
            "3 / 4",
          ),
        },
      ],
      [8, 4],
    ),
    full(
      photo(
        skagitBarn3Image,
        "Mixed herd of cattle, a longhorn cow at the front, grazing a green pasture on a misty morning.",
        "16 / 9",
      ),
    ),
    columns(
      [
        {
          image: photo(
            skagitBarn4Image,
            "Bed against an upholstered wall-length headboard and oak panelling, a mushroom lamp on the floating oak nightstand.",
            "5 / 6",
          ),
        },
        {
          image: photo(
            skagitBarn5Image,
            "Hillside meadow of yellow balsamroot and purple lupine, with forested hills and distant mountains beyond.",
            "5 / 4",
          ),
          caption: {
            label: "The site",
            body: "Six acres of flat ground under a big sky, with a barn from 1936 that the county would not let anyone take down.",
          },
        },
        {
          image: photo(
            skagitBarn6Image,
            "Sage-green panelled entry hall with a glazed front door standing open, a walnut chest of drawers and a patterned runner.",
            "5 / 4",
          ),
        },
      ],
      [4, 4, 4],
    ),
    captioned(
      photo(
        skagitBarn7Image,
        "Red gambrel-roofed barn and outbuildings behind white fences, a snow-capped volcano rising over the trees behind.",
        "21 / 9",
      ),
      {
        label: "The outcome",
        body: "An addition that borrows the barn's roof pitch and stops short of touching it. Corrugated steel weathering to the same grey, and a glazed link that keeps the two apart.",
      },
      "left",
    ),
  ],
};
