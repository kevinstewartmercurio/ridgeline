import larchHouseImage from "../images/larch-house/hero.jpg";
import fernHollowImage from "../images/fern-hollow/hero.jpg";
import cutbankResidenceImage from "../images/cutbank-residence/hero.jpg";
import ledgerHouseImage from "../images/ledger-house/hero.jpg";
import skagitBarnImage from "../images/skagit-barn/hero.jpg";

export const projects = [
  {
    slug: "larch-house",
    details: {
      program: "4 bed / 3.5 bath, 3,840 sq ft",
      site: "11 acres, south bench",
      completed: "October 2025",
      scope: "Architecture, interiors, build oversight",
    },
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
    details: {
      program: "3 bed / 2.5 bath, 2,150 sq ft",
      site: "0.25 acre infill lot",
      completed: "June 2024",
      scope: "Architecture, interiors",
    },
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
    details: {
      program: "4 bed / 3 bath, 3,120 sq ft",
      site: "2.5 acres, bluff edge",
      completed: "September 2024",
      scope: "Architecture, build oversight",
    },
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
    details: {
      program: "3 bed / 2 bath, 2,480 sq ft",
      site: "0.3 acres, river canyon",
      completed: "May 2023",
      scope: "Architecture, interiors, build oversight",
    },
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
    details: {
      program: "2 bed / 1 bath, 1,640 sq ft plus studio",
      site: "6 acres, working farm",
      completed: "November 2023",
      scope: "Architecture, build oversight",
    },
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
