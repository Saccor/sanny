import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Snabblänkar */}
          <div>
            <h3 className="font-bold text-lg mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/presentation" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  Presentation
                </Link>
              </li>
              <li>
                <Link href="/meriter" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  Meriter
                </Link>
              </li>
              <li>
                <Link href="/pt" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  PT
                </Link>
              </li>
              <li>
                <Link href="/recensioner" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  Recensioner
                </Link>
              </li>
            </ul>
          </div>

          {/* Mer information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Mer information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lankar" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  Länkar
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Sociala medier */}
          <div>
            <h3 className="font-bold text-lg mb-4">Följ mig</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://patreon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center justify-center"
                aria-label="Patreon"
              >
                <span className="font-bold text-xl">P</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-zinc-800">
          <p className="text-center text-sm text-zinc-400">
            © 2025 Sanny – Alla rättigheter förbehållna
          </p>
        </div>
      </div>
    </footer>
  );
}

