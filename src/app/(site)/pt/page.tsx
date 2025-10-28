"use client";

import { ptSlots } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

export default function PTPage() {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-4">Personlig Träning</h1>
      <p className="text-zinc-400 mb-8">
        Boka en personlig träningstid med mig. Välj mellan träning på gymmet eller online.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ptSlots.map((slot) => {
          const startDate = new Date(slot.start);
          const endDate = new Date(slot.end);
          
          return (
            <div
              key={slot.id}
              className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    slot.status === "available"
                      ? "bg-green-600/20 text-green-400"
                      : slot.status === "reserved"
                      ? "bg-yellow-600/20 text-yellow-400"
                      : "bg-red-600/20 text-red-400"
                  }`}
                >
                  {slot.status === "available"
                    ? "Tillgänglig"
                    : slot.status === "reserved"
                    ? "Reserverad"
                    : "Bokad"}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock className="h-4 w-4" />
                  <span>
                    {startDate.toLocaleDateString('sv-SE', {
                      weekday: 'short',
                      day: 'numeric',
                      month: 'short'
                    })}
                  </span>
                </div>
                <div className="text-lg font-semibold">
                  {startDate.toLocaleTimeString('sv-SE', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                  {' - '}
                  {endDate.toLocaleTimeString('sv-SE', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <MapPin className="h-4 w-4" />
                  <span>{slot.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{slot.priceSEK} kr</span>
                <Button
                  onClick={() => alert('Kommer snart')}
                  disabled={slot.status !== "available"}
                  variant={slot.status === "available" ? "default" : "secondary"}
                >
                  {slot.status === "available" ? "Boka" : "Ej tillgänglig"}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

