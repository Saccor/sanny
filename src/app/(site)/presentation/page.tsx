import { fighter } from "@/data/mock";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

export default function PresentationPage() {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-8">{fighter.name}</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Om mig</h2>
          <p className="text-zinc-400 text-lg">{fighter.bio}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fighter.nickname && (
            <div>
              <span className="text-zinc-500">Smeknamn:</span>
              <span className="ml-2 text-zinc-100">{fighter.nickname}</span>
            </div>
          )}
          <div>
            <span className="text-zinc-500">Viktklass:</span>
            <span className="ml-2 text-zinc-100">{fighter.weightClass}</span>
          </div>
          {fighter.stance && (
            <div>
              <span className="text-zinc-500">Ställning:</span>
              <span className="ml-2 text-zinc-100">{fighter.stance}</span>
            </div>
          )}
          {fighter.gym && (
            <div>
              <span className="text-zinc-500">Gym:</span>
              <span className="ml-2 text-zinc-100">{fighter.gym}</span>
            </div>
          )}
          {fighter.nationality && (
            <div>
              <span className="text-zinc-500">Nationalitet:</span>
              <span className="ml-2 text-zinc-100">{fighter.nationality}</span>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Följ mig</h2>
          <div className="flex gap-4">
            {fighter.social.instagram && (
              <Link
                href={fighter.social.instagram}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </Link>
            )}
            {fighter.social.youtube && (
              <Link
                href={fighter.social.youtube}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
              >
                <Youtube className="h-5 w-5" />
                YouTube
              </Link>
            )}
            {fighter.social.patreon && (
              <Link
                href={fighter.social.patreon}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
              >
                <span className="font-bold">P</span>
                Patreon
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

