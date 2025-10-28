import { fighter } from '@/data/mock';
import { buildPersonLd } from '@/lib/seo';

const jsonLd = buildPersonLd(fighter);

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
