"use client";

import { useState } from "react";
import { ptSlots } from "@/data/mock";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin, Clock, CreditCard } from "lucide-react";

export default function PTPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async (slotId: string) => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slotId }),
      });

      // Since API doesn't exist yet, we'll handle the error gracefully
      if (!response.ok) {
        throw new Error('API not implemented yet');
      }

      const data = await response.json();
      console.log('Checkout response:', data);
    } catch (error) {
      console.log('Booking attempt for slot:', slotId);
      // Show dialog since API isn't ready yet
      setDialogOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

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
                  onClick={() => handleBooking(slot.id)}
                  disabled={slot.status !== "available" || isLoading}
                  variant={slot.status === "available" ? "default" : "secondary"}
                >
                  {isLoading ? "Laddar..." : slot.status === "available" ? "Boka" : "Ej tillgänglig"}
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Betalning
            </DialogTitle>
            <DialogDescription className="pt-4">
              <div className="text-center space-y-4">
                <p className="text-lg font-medium text-zinc-300">
                  Stripe-flöde kommer snart
                </p>
                <p className="text-sm text-zinc-500">
                  Vi håller på att integrera Stripe för säkra betalningar. Du kommer snart kunna boka och betala direkt här på sidan.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={() => setDialogOpen(false)}>
              Stäng
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

