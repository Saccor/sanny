"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function ShopPage() {
  return (
    <div className="py-10">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <ShoppingBag className="h-20 w-20 mx-auto text-zinc-600 mb-4" />
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <p className="text-xl text-zinc-400">
            Merch kommer snart
          </p>
        </div>

        <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
          <p className="text-zinc-300 mb-6">
            Vi jobbar på att ta fram unik merch. Anmäl ditt intresse så hör vi av oss när shopen öppnar!
          </p>
          <Button
            size="lg"
            onClick={() => alert('Tack för ditt intresse! Vi hör av oss när shopen öppnar.')}
            className="w-full md:w-auto"
          >
            Anmäl intresse
          </Button>
        </div>

        <div className="mt-8 text-sm text-zinc-500">
          <p>Kommande produkter kan inkludera:</p>
          <ul className="mt-2 space-y-1">
            <li>• T-shirts och hoodies</li>
            <li>• Träningskläder</li>
            <li>• Accessoarer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

