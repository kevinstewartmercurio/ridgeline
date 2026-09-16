import larchHouseImage from "../images/larch-house/hero.png";
import fernHollowImage from "../images/fern-hollow/hero.png";
import cutbankResidenceImage from "../images/cutbank-residence/hero.png";
import ledgerHouseImage from "../images/ledger-house/hero.png";
import skagitBarnImage from "../images/skagit-barn/hero.png";

export const projects = [
  {
    slug: "larch-house",
    title: "Larch House",
    location: "Methow Valley, WA",
    type: "New Build",
    year: 2025,
    img: {
      src: larchHouseImage,
      alt: "",
    },
  },
  {
    slug: "fern-hollow",
    title: "Fern Hollow",
    location: "Portland, OR",
    type: "Infill",
    year: 2024,
    img: {
      src: fernHollowImage,
      alt: "",
    },
  },
  {
    slug: "cutbank-residence",
    title: "Cutbank Residence",
    location: "Bainbridge Island, WA",
    type: "New Build",
    year: 2024,
    img: {
      src: cutbankResidenceImage,
      alt: "",
    },
  },
  {
    slug: "ledger-house",
    title: "The Ledger House",
    location: "Bend, OR",
    type: "Renovation",
    year: 2023,
    img: {
      src: ledgerHouseImage,
      alt: "",
    },
  },
  {
    slug: "skagit-barn",
    title: "Skagit Barn",
    location: "Skagit Valley, WA",
    type: "Addition",
    year: 2023,
    img: {
      src: skagitBarnImage,
      alt: "",
    },
  },
];

export type Project = (typeof projects)[number];
