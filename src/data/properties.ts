import heroImg from "@/assets/hero.jpg";
import featuredImg from "@/assets/featured.jpg";
import storyImg from "@/assets/story.jpg";
import galleryImg from "@/assets/gallery.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";

export type Property = {
  slug: string;
  img: string;
  name: string;
  place: string;
  detail: string;
  price: string;
  tagline: string;
  intro: string;
  facts: [string, string][];
  amenities: string[];
  layout: { level: string; rooms: string }[];
  gallery: { src: string; alt: string }[];
};

export const properties: Property[] = [
  {
    slug: "casa-lumen",
    img: p1,
    name: "Casa Lumen",
    place: "Costa Brava, Spain",
    detail: "5 Bedrooms · 890 sqm",
    price: "€14.2M",
    tagline: "A house drawn around the movement of Mediterranean light.",
    intro:
      "Set on a limestone shelf above a private cove, Casa Lumen is organised around a single north–south axis so that every principal room receives sea light twice a day. Lime plaster, untreated oak and honed travertine were selected for how they weather rather than how they photograph.",
    facts: [
      ["Location", "Costa Brava, Spain"],
      ["Interior", "890 sqm"],
      ["Plot", "1.6 hectares"],
      ["Bedrooms", "Five"],
      ["Completed", "2021"],
      ["Guide Price", "€14,200,000"],
    ],
    amenities: [
      "Twenty-five metre infinity pool",
      "Private cove access and boat mooring",
      "Subterranean wine cellar for 2,400 bottles",
      "Spa with hammam and cold plunge",
      "Olive grove with working press",
      "Staff quarters and separate service entrance",
      "Geothermal heating and cooling",
      "Garaging for four vehicles",
    ],
    layout: [
      { level: "Lower Level", rooms: "Wine cellar, spa, plant room, garaging" },
      { level: "Ground Floor", rooms: "Entrance court, living room, dining hall, kitchen, guest suite" },
      { level: "First Floor", rooms: "Principal suite with terrace, three further bedroom suites, study" },
      { level: "Roof", rooms: "Shaded terrace, outdoor kitchen, sea observatory" },
    ],
    gallery: [
      { src: p1, alt: "Casa Lumen exterior above the cove" },
      { src: storyImg, alt: "Travertine wall and floating walnut staircase" },
      { src: galleryImg, alt: "Courtyard with lit olive tree at dusk" },
      { src: heroImg, alt: "Terrace and infinity pool at golden hour" },
    ],
  },
  {
    slug: "cliff-house",
    img: p2,
    name: "Cliff House",
    place: "Big Sur, California",
    detail: "4 Bedrooms · 720 sqm",
    price: "$21.5M",
    tagline: "Cantilevered over the Pacific, quiet as the weather allows.",
    intro:
      "Anchored into serpentine rock ninety metres above the surf, Cliff House is a study in structural restraint — board-formed concrete, blackened steel and full-height glazing engineered to disappear. The house was sited over eighteen months of survey so that no redwood was lost.",
    facts: [
      ["Location", "Big Sur, California"],
      ["Interior", "720 sqm"],
      ["Plot", "4.2 hectares"],
      ["Bedrooms", "Four"],
      ["Completed", "2019"],
      ["Guide Price", "$21,500,000"],
    ],
    amenities: [
      "Cantilevered ocean terrace",
      "Off-grid solar array with battery storage",
      "Private well and rainwater harvesting",
      "Screening room with acoustic timber lining",
      "Glass-walled lap pool",
      "Guest cabin among the redwoods",
      "Helipad approval in place",
      "Whale-watching observation deck",
    ],
    layout: [
      { level: "Entry Level", rooms: "Arrival court, gallery hall, library, powder room" },
      { level: "Main Level", rooms: "Great room, kitchen, dining terrace, principal suite" },
      { level: "Lower Level", rooms: "Two guest suites, screening room, wellness room" },
      { level: "Grounds", rooms: "Guest cabin, lap pool, redwood walk" },
    ],
    gallery: [
      { src: p2, alt: "Cliff House cantilevered above the Pacific" },
      { src: featuredImg, alt: "Stone and glass elevation at dusk" },
      { src: storyImg, alt: "Interior detail with raking light" },
      { src: galleryImg, alt: "Evening courtyard overlooking the sea" },
    ],
  },
  {
    slug: "villa-noir",
    img: p3,
    name: "Villa Noir",
    place: "Ikoyi, Lagos",
    detail: "6 Bedrooms · 1,140 sqm",
    price: "₦2.4B",
    tagline: "A walled tropical modernist compound in the heart of Ikoyi.",
    intro:
      "Behind a charred-timber wall, Villa Noir opens into a sequence of shaded courtyards planted with frangipani and palm. Deep overhangs, cross-ventilated galleries and locally quarried granite give the house a cool interior climate long before the systems are switched on.",
    facts: [
      ["Location", "Ikoyi, Lagos"],
      ["Interior", "1,140 sqm"],
      ["Plot", "0.9 hectares"],
      ["Bedrooms", "Six"],
      ["Completed", "2023"],
      ["Guide Price", "₦2,400,000,000"],
    ],
    amenities: [
      "Three planted internal courtyards",
      "Full-height library and private study",
      "Gymnasium and treatment room",
      "Chef's kitchen with separate prep scullery",
      "Independent power with silent generator",
      "Gatehouse and 24-hour security suite",
      "Covered parking for six vehicles",
      "Rooftop dining pavilion",
    ],
    layout: [
      { level: "Ground Floor", rooms: "Entrance courtyard, reception, dining hall, kitchen, scullery" },
      { level: "First Floor", rooms: "Principal suite, three bedroom suites, family lounge" },
      { level: "Second Floor", rooms: "Two guest suites, library, study" },
      { level: "Roof", rooms: "Dining pavilion, planted terrace" },
    ],
    gallery: [
      { src: p3, alt: "Villa Noir behind its charred-timber wall" },
      { src: galleryImg, alt: "Planted courtyard at dusk" },
      { src: featuredImg, alt: "Stone elevation with reflecting pool" },
      { src: heroImg, alt: "Pool terrace in evening light" },
    ],
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
