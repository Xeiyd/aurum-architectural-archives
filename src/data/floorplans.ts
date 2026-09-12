export type PlanRoom = {
  name: string;
  note: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type PlanLevel = {
  level: string;
  rooms: PlanRoom[];
};

/* Geometry in a 100 × 64 viewBox, hand-drawn per level. */
export const floorplans: Record<string, PlanLevel[]> = {
  "casa-lumen": [
    {
      level: "Lower Level",
      rooms: [
        { name: "Wine Cellar", note: "Subterranean cellar for 2,400 bottles, held at 13°C by the limestone mass.", x: 4, y: 6, w: 34, h: 26 },
        { name: "Spa & Hammam", note: "Travertine-lined hammam, treatment room and cold plunge.", x: 42, y: 6, w: 30, h: 26 },
        { name: "Plant Room", note: "Geothermal exchange and building services.", x: 76, y: 6, w: 20, h: 26 },
        { name: "Garaging", note: "Secure garaging for four vehicles with turntable.", x: 4, y: 36, w: 56, h: 22 },
        { name: "Service Entrance", note: "Discreet staff arrival with laundry and stores.", x: 64, y: 36, w: 32, h: 22 },
      ],
    },
    {
      level: "Ground Floor",
      rooms: [
        { name: "Entrance Court", note: "Sheltered arrival court beneath a single ancient olive.", x: 4, y: 4, w: 26, h: 24 },
        { name: "Living Room", note: "Double-height room opening fully to the sea terrace.", x: 34, y: 4, w: 34, h: 36 },
        { name: "Dining Hall", note: "Seats fourteen beneath a coffered oak ceiling.", x: 72, y: 4, w: 24, h: 24 },
        { name: "Kitchen", note: "Working kitchen in honed granite with a daily table.", x: 72, y: 32, w: 24, h: 26 },
        { name: "Guest Suite", note: "Ground-floor suite with private garden access.", x: 4, y: 32, w: 26, h: 26 },
        { name: "Sea Terrace", note: "Full-width terrace stepping down to the pool.", x: 34, y: 44, w: 34, h: 14 },
      ],
    },
    {
      level: "First Floor",
      rooms: [
        { name: "Principal Suite", note: "Suite spanning the full sea frontage with dressing room and terrace.", x: 34, y: 4, w: 38, h: 34 },
        { name: "Bedroom Suite II", note: "Corner suite with morning and evening light.", x: 4, y: 4, w: 26, h: 26 },
        { name: "Bedroom Suite III", note: "Overlooks the entrance court and olive grove.", x: 4, y: 34, w: 26, h: 24 },
        { name: "Bedroom Suite IV", note: "Quiet rear suite facing the limestone ridge.", x: 76, y: 4, w: 20, h: 26 },
        { name: "Study", note: "Panelled study with reading balcony.", x: 76, y: 34, w: 20, h: 24 },
        { name: "Gallery Landing", note: "Bridge landing above the living room void.", x: 34, y: 42, w: 38, h: 16 },
      ],
    },
    {
      level: "Roof",
      rooms: [
        { name: "Shaded Terrace", note: "Timber-pergola terrace for long lunches.", x: 4, y: 6, w: 44, h: 34 },
        { name: "Outdoor Kitchen", note: "Grill, plancha and cool store serving the roof.", x: 52, y: 6, w: 20, h: 22 },
        { name: "Sea Observatory", note: "Open platform aligned with the house axis, facing the cove.", x: 76, y: 6, w: 20, h: 52 },
        { name: "Solar Field", note: "Concealed photovoltaic array.", x: 4, y: 44, w: 44, h: 14 },
      ],
    },
  ],
  "cliff-house": [
    {
      level: "Entry Level",
      rooms: [
        { name: "Arrival Court", note: "Gravel court cut into the serpentine, sheltered by a steel canopy.", x: 4, y: 4, w: 28, h: 28 },
        { name: "Gallery Hall", note: "Forty-metre gallery lit by a continuous roof slot.", x: 36, y: 4, w: 40, h: 14 },
        { name: "Library", note: "Two-storey library in blackened steel and walnut.", x: 80, y: 4, w: 16, h: 28 },
        { name: "Powder Room", note: "Carved from a single block of limestone.", x: 36, y: 22, w: 18, h: 10 },
        { name: "Stair Core", note: "Sculptural concrete stair descending to the great room.", x: 58, y: 22, w: 18, h: 10 },
        { name: "Viewing Loggia", note: "First framed view of the Pacific on arrival.", x: 4, y: 36, w: 92, h: 22 },
      ],
    },
    {
      level: "Main Level",
      rooms: [
        { name: "Great Room", note: "Full-height glazing; the cantilever begins here.", x: 30, y: 4, w: 42, h: 34 },
        { name: "Kitchen", note: "Galley kitchen with a ten-seat counter facing the surf.", x: 76, y: 4, w: 20, h: 20 },
        { name: "Dining Terrace", note: "Cantilevered terrace ninety metres above the water.", x: 76, y: 28, w: 20, h: 30 },
        { name: "Principal Suite", note: "Occupies the seaward corner; glazing retracts fully.", x: 4, y: 4, w: 22, h: 34 },
        { name: "Fire Pit Court", note: "Sunken court protected from the evening wind.", x: 30, y: 42, w: 42, h: 16 },
      ],
    },
    {
      level: "Lower Level",
      rooms: [
        { name: "Guest Suite I", note: "Carved into the rock face with a private balcony.", x: 4, y: 4, w: 28, h: 26 },
        { name: "Guest Suite II", note: "Twin suite sharing the rock garden.", x: 4, y: 34, w: 28, h: 24 },
        { name: "Screening Room", note: "Acoustic timber lining, seating for eight.", x: 36, y: 4, w: 30, h: 26 },
        { name: "Wellness Room", note: "Sauna and treatment space opening to the lap pool.", x: 70, y: 4, w: 26, h: 26 },
        { name: "Lap Pool", note: "Twenty-metre glass-walled pool projecting over the cliff.", x: 36, y: 34, w: 60, h: 24 },
      ],
    },
    {
      level: "Grounds",
      rooms: [
        { name: "Guest Cabin", note: "One-room cabin set among the redwoods.", x: 4, y: 4, w: 24, h: 22 },
        { name: "Redwood Walk", note: "Surveyed path; no tree was lost to the house.", x: 4, y: 30, w: 44, h: 28 },
        { name: "Observation Deck", note: "Whale-watching deck at the southern point.", x: 70, y: 4, w: 26, h: 24 },
        { name: "Solar Array", note: "Off-grid array with battery storage.", x: 52, y: 4, w: 14, h: 24 },
        { name: "Well & Water Store", note: "Private well and rainwater harvesting.", x: 52, y: 32, w: 44, h: 26 },
      ],
    },
  ],
  "villa-noir": [
    {
      level: "Ground Floor",
      rooms: [
        { name: "Entrance Courtyard", note: "Frangipani court behind the charred-timber wall.", x: 4, y: 4, w: 26, h: 26 },
        { name: "Reception", note: "Cross-ventilated gallery reception with granite floor.", x: 34, y: 4, w: 32, h: 22 },
        { name: "Dining Hall", note: "Opens to the central courtyard on three sides.", x: 70, y: 4, w: 26, h: 22 },
        { name: "Central Courtyard", note: "The cool heart of the house, planted with palm.", x: 34, y: 30, w: 32, h: 28 },
        { name: "Kitchen", note: "Chef's kitchen with deep shaded loggia.", x: 70, y: 30, w: 26, h: 14 },
        { name: "Prep Scullery", note: "Separate scullery and cold store.", x: 70, y: 48, w: 26, h: 10 },
        { name: "Guest Cloakroom", note: "Stone-lined cloakroom off the reception.", x: 4, y: 34, w: 26, h: 24 },
      ],
    },
    {
      level: "First Floor",
      rooms: [
        { name: "Principal Suite", note: "Suite with shaded veranda over the courtyard.", x: 4, y: 4, w: 36, h: 30 },
        { name: "Bedroom Suite II", note: "Overhang-shaded suite facing east.", x: 44, y: 4, w: 24, h: 24 },
        { name: "Bedroom Suite III", note: "Corner suite with cross ventilation.", x: 72, y: 4, w: 24, h: 24 },
        { name: "Bedroom Suite IV", note: "Quiet suite over the gatehouse garden.", x: 72, y: 32, w: 24, h: 26 },
        { name: "Family Lounge", note: "Informal lounge bridging the courtyard void.", x: 4, y: 38, w: 36, h: 20 },
      ],
    },
    {
      level: "Second Floor",
      rooms: [
        { name: "Library", note: "Full-height library with rolling ladder.", x: 4, y: 4, w: 40, h: 28 },
        { name: "Private Study", note: "Panelled study adjoining the library.", x: 4, y: 36, w: 40, h: 22 },
        { name: "Guest Suite V", note: "Tree-canopy suite with screened balcony.", x: 48, y: 4, w: 24, h: 28 },
        { name: "Guest Suite VI", note: "Top-floor suite with city views.", x: 76, y: 4, w: 20, h: 28 },
        { name: "Roof Stair & Lift", note: "Core serving the dining pavilion above.", x: 48, y: 36, w: 48, h: 22 },
      ],
    },
    {
      level: "Roof",
      rooms: [
        { name: "Dining Pavilion", note: "Open-sided pavilion for evening dining.", x: 4, y: 4, w: 44, h: 30 },
        { name: "Planted Terrace", note: "Deep-planted terrace cooling the roof plane.", x: 52, y: 4, w: 44, h: 30 },
        { name: "Serving Kitchen", note: "Compact kitchen serving the pavilion.", x: 4, y: 38, w: 24, h: 20 },
        { name: "Evening Deck", note: "West-facing deck for sunset over Ikoyi.", x: 32, y: 38, w: 64, h: 20 },
      ],
    },
  ],
};
