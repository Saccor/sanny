import { fighter } from '@/data/mock';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: fighter.name,
  jobTitle: 'Athlete',
  nationality: fighter.nationality,
  sameAs: [fighter.social.instagram, fighter.social.youtube, fighter.social.patreon].filter(Boolean)
};

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">
        Hem
      </h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
