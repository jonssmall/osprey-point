export type CouncilMember = {
  name: string;
  role: string;
  district: string;
  termEnds: number;
  email: string;
  phone: string;
  committees: string[];
  bio: string;
};

const council: CouncilMember[] = [
  {
    name: "Delphine Marchetti",
    role: "Mayor",
    district: "At-large",
    termEnds: 2028,
    email: "mayor@ospreypoint.example.gov",
    phone: "(609) 555-0101",
    committees: ["Executive", "Bay Restoration Task Force"],
    bio: "Elected in 2024 after nine years on the Planning Commission. Focused on shoreline resilience and the Marsh Landing corridor redevelopment.",
  },
  {
    name: "Terrence Okonkwo",
    role: "Council President",
    district: "District 1 — Harborside",
    termEnds: 2027,
    email: "t.okonkwo@ospreypoint.example.gov",
    phone: "(609) 555-0102",
    committees: ["Finance", "Public Safety"],
    bio: "Retired harbor pilot serving a third term. Chairs the Finance Committee and leads the annual budget review.",
  },
  {
    name: "Ruth Villanueva-Park",
    role: "Council Vice President",
    district: "District 2 — Pintail",
    termEnds: 2028,
    email: "r.villanueva@ospreypoint.example.gov",
    phone: "(609) 555-0103",
    committees: ["Parks & Open Space", "Housing"],
    bio: "Small-business owner and former PTA president. Sponsored the 2025 accessory dwelling unit ordinance.",
  },
  {
    name: "Aloysius Brandt",
    role: "Council Member",
    district: "District 3 — Old Mill",
    termEnds: 2027,
    email: "a.brandt@ospreypoint.example.gov",
    phone: "(609) 555-0104",
    committees: ["Public Works", "Historic Preservation"],
    bio: "Third-generation Osprey Point resident. Advocates for stormwater upgrades in the Old Mill watershed.",
  },
  {
    name: "Ingrid Sarabhai",
    role: "Council Member",
    district: "District 4 — Egret Flats",
    termEnds: 2029,
    email: "i.sarabhai@ospreypoint.example.gov",
    phone: "(609) 555-0105",
    committees: ["Finance", "Technology & Records"],
    bio: "Environmental engineer elected in 2025. Leads the town's open-data and records modernization effort.",
  },
];

export default council;
