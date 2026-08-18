export type StaffMember = {
  name: string;
  title: string;
  department: string;
  email: string;
  phone: string;
  location: string;
};

const staff: StaffMember[] = [
  {
    name: "Marguerite Hollins",
    title: "Town Manager",
    department: "Administration",
    email: "m.hollins@ospreypoint.example.gov",
    phone: "(609) 555-0110",
    location: "Town Hall, 2nd Floor",
  },
  {
    name: "Desmond Achterberg",
    title: "Town Clerk",
    department: "Administration",
    email: "clerk@ospreypoint.example.gov",
    phone: "(609) 555-0111",
    location: "Town Hall, 1st Floor",
  },
  {
    name: "Priya Raghunathan",
    title: "Finance Director",
    department: "Finance",
    email: "finance@ospreypoint.example.gov",
    phone: "(609) 555-0120",
    location: "Town Hall, 2nd Floor",
  },
  {
    name: "Callum Ferreira",
    title: "Director of Public Works",
    department: "Public Works",
    email: "publicworks@ospreypoint.example.gov",
    phone: "(609) 555-0130",
    location: "Operations Yard, 88 Dredge Road",
  },
  {
    name: "Yolanda Prishtina",
    title: "Superintendent of Parks & Recreation",
    department: "Parks & Recreation",
    email: "parks@ospreypoint.example.gov",
    phone: "(609) 555-0140",
    location: "Heron Field House",
  },
  {
    name: "Nathaniel Boas",
    title: "Chief of Police",
    department: "Police",
    email: "police@ospreypoint.example.gov",
    phone: "(609) 555-0150",
    location: "Public Safety Building",
  },
  {
    name: "Simone Delacroix-Webb",
    title: "Fire Chief",
    department: "Fire & Rescue",
    email: "fire@ospreypoint.example.gov",
    phone: "(609) 555-0160",
    location: "Station 1, 14 Bay Street",
  },
  {
    name: "Gideon Amaechi",
    title: "Planning & Zoning Administrator",
    department: "Planning & Zoning",
    email: "planning@ospreypoint.example.gov",
    phone: "(609) 555-0170",
    location: "Town Hall, 1st Floor",
  },
  {
    name: "Beatriz Kowalczyk",
    title: "Utility Billing Supervisor",
    department: "Finance",
    email: "billing@ospreypoint.example.gov",
    phone: "(609) 555-0121",
    location: "Town Hall, 1st Floor",
  },
  {
    name: "Oscar Lindqvist",
    title: "Code Enforcement Officer",
    department: "Planning & Zoning",
    email: "code@ospreypoint.example.gov",
    phone: "(609) 555-0171",
    location: "Town Hall, 1st Floor",
  },
];

export default staff;
