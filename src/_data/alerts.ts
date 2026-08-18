export type AlertLevel = "emergency" | "warning" | "info";

export type Alert = {
  level: AlertLevel;
  headline: string;
  detail: string;
  url: string;
  posted: string;
  active: boolean;
};

// Flip `active` to false to hide the site-wide banner.
const alerts: Alert[] = [
  {
    level: "warning",
    headline: "Marsh Landing Road closed between Bay Street and Pintail Lane",
    detail:
      "Culvert replacement is underway through August 29. Detour signage is posted; Route 3 riders should expect delays of 10–15 minutes.",
    url: "/news/marsh-landing-culvert-closure/",
    posted: "2026-08-10",
    active: true,
  },
];

export default alerts;
