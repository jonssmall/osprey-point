export type SiteData = {
  name: string;
  shortName: string;
  county: string;
  state: string;
  stateAbbr: string;
  incorporated: number;
  population: number;
  tagline: string;
  description: string;
  url: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  fax: string;
  email: string;
  hours: string;
  disclaimer: string;
};

const site: SiteData = {
  name: "Town of Osprey Point",
  shortName: "Osprey Point",
  county: "Sedgemere County",
  state: "New Jersey",
  stateAbbr: "NJ",
  incorporated: 1847,
  population: 14280,
  tagline: "Where the marsh meets the bay",
  description:
    "Official demonstration website for the Town of Osprey Point — services, meeting records, permits, and news for residents and businesses.",
  url: "https://www.ospreypoint.example.gov",
  address: {
    line1: "Osprey Point Town Hall",
    line2: "220 Marsh Landing Road",
    city: "Osprey Point",
    state: "NJ",
    zip: "08247",
  },
  phone: "(609) 555-0142",
  fax: "(609) 555-0143",
  email: "townhall@ospreypoint.example.gov",
  hours: "Monday–Friday, 8:30 a.m. – 4:30 p.m.",
  disclaimer:
    "Osprey Point is a fictional municipality. This site is a design demonstration — no part of it represents a real government body, and none of the services, forms, or contact details are functional.",
};

export default site;
