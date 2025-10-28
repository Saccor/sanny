export type FighterProfile = {
  name: string;
  nickname?: string;
  weightClass: string;
  stance?: string;
  gym?: string;
  nationality?: string;
  bio: string;
  heroImage?: string;
  social: { instagram?: string; youtube?: string; patreon?: string };
};

export type FightRecord = {
  wins: number;
  losses: number;
  draws: number;
  ko: number;
  sub: number;
  decision: number;
};

export type Achievement = {
  date?: string;
  title: string;
  org?: string;
  belt?: string;
  description?: string;
};

export type Review = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  createdAt: string;
  verified?: boolean;
};

export type PtSlot = {
  id: string;
  start: string;
  end: string;
  location: "Gym" | "Online";
  priceSEK: number;
  status: "available" | "reserved" | "booked";
};

