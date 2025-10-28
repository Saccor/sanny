import { fighter } from "@/data/mock";
import Link from "next/link";
import { Instagram, Youtube, ExternalLink } from "lucide-react";

export default function LankarPage() {
  const socialLinks = [
    {
      name: "Instagram",
      url: fighter.social.instagram || "#",
      icon: Instagram,
      description: "Följ mig på Instagram för dagliga uppdateringar och träningsklipp",
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "YouTube",
      url: fighter.social.youtube || "#",
      icon: Youtube,
      description: "Kolla in mina träningsvideor och fighttips",
      color: "from-red-600 to-red-500"
    },
    {
      name: "Patreon",
      url: fighter.social.patreon || "#",
      icon: ExternalLink,
      description: "Stötta mig och få tillgång till exklusivt innehåll",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-4">Länkar</h1>
      <p className="text-zinc-400 mb-8">
        Hitta mig på sociala medier och andra plattformar
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${link.color} flex items-center justify-center mb-4`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-zinc-300 transition-colors">
                {link.name}
              </h3>
              <p className="text-zinc-400 text-sm">
                {link.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

