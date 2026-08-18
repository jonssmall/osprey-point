export type NavItem = {
  label: string;
  url: string;
  description?: string;
  children?: NavItem[];
};

const navigation: NavItem[] = [
  {
    label: "Government",
    url: "/government/",
    description: "Council, meetings, and public notices",
    children: [
      { label: "Town Council", url: "/government/council/" },
      { label: "Meetings & Minutes", url: "/government/meetings/" },
      { label: "Public Notices", url: "/government/notices/" },
      { label: "Budget & Finance", url: "/government/budget/" },
    ],
  },
  {
    label: "Departments",
    url: "/departments/",
    description: "The offices that run day-to-day operations",
    children: [
      { label: "All Departments", url: "/departments/" },
      { label: "Public Works", url: "/departments/public-works/" },
      { label: "Parks & Recreation", url: "/departments/parks-recreation/" },
      { label: "Police", url: "/departments/police/" },
      { label: "Fire & Rescue", url: "/departments/fire-rescue/" },
    ],
  },
  {
    label: "Services",
    url: "/services/",
    description: "Permits, licenses, billing, and collection schedules",
    children: [
      { label: "All Services", url: "/services/" },
      { label: "Building Permits", url: "/services/building-permits/" },
      { label: "Utility Billing", url: "/services/utility-billing/" },
      { label: "Trash & Recycling", url: "/services/trash-recycling/" },
      { label: "Apply for a Permit", url: "/services/permit-application/" },
    ],
  },
  {
    label: "News",
    url: "/news/",
    description: "Announcements, alerts, and press releases",
  },
  {
    label: "Contact",
    url: "/contact/",
    description: "Reach the right office",
    children: [
      { label: "Contact Town Hall", url: "/contact/" },
      { label: "Staff Directory", url: "/directory/" },
    ],
  },
];

export default navigation;
