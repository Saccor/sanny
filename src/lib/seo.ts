import type { FighterProfile } from '@/types/content';

export const buildPersonLd = (fighter: FighterProfile) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: fighter.name,
  jobTitle: 'Athlete',
  nationality: fighter.nationality,
  sameAs: Object.values(fighter.social).filter(Boolean)
});

