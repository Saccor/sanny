import type { FighterProfile, FightRecord, Achievement, Review, PtSlot } from '@/types/content';

export const fighter: FighterProfile = {
  name: 'Sanny',
  nickname: 'The North',
  weightClass: 'Lightweight',
  stance: 'Orthodox',
  gym: 'Stockholm Fight Center',
  nationality: 'Sweden',
  bio: 'Sanny är en svensk fighter och personlig tränare med fokus på teknik, disciplin och resultat.',
  heroImage: '/images/hero.jpg',
  social: { instagram: '#', youtube: '#', patreon: '#' }
};

export const fightRecord: FightRecord = {
  wins: 18, losses: 3, draws: 0, ko: 10, sub: 4, decision: 4
};

export const achievements: Achievement[] = [
  { date: '2024-11-10', title: 'Titelmatch – Lättvikt', org: 'SWE MMA', belt: 'Champion', description: 'Vinst via TKO R2.' },
  { date: '2023-06-18', title: 'Bästa Fighter Award', org: 'Nordic Open', description: 'Utsedd till kvällens fighter.' }
];

export const reviews: Review[] = [
  { id: 'r1', name: 'Mikael', rating: 5, text: 'Bästa PT:n jag haft. Tydlig plan, grym energi!', createdAt: '2025-01-12', verified: true },
  { id: 'r2', name: 'Sara', rating: 5, text: 'Teknikfokus och mätbara resultat efter 6 veckor.', createdAt: '2025-02-03' }
];

export const ptSlots: PtSlot[] = [
  { id: 'p1', start: '2025-11-05T09:00:00+01:00', end: '2025-11-05T10:00:00+01:00', location: 'Gym', priceSEK: 850, status: 'available' },
  { id: 'p2', start: '2025-11-05T18:00:00+01:00', end: '2025-11-05T19:00:00+01:00', location: 'Online', priceSEK: 750, status: 'available' }
];

