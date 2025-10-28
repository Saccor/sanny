import { reviews } from "@/data/mock";
import { CheckCircle } from "lucide-react";
import ReviewForm from "@/components/sections/ReviewForm";

export default function RecensionerPage() {
  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-4">Recensioner</h1>
      <p className="text-zinc-400 mb-8">
        Vad mina klienter säger om träningen
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 bg-zinc-900 rounded-lg border border-zinc-800"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  {review.verified && (
                    <CheckCircle className="h-5 w-5 text-blue-400" title="Verifierad kund" />
                  )}
                </div>
                <div className="text-yellow-400 text-xl mt-1">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>

            <p className="text-zinc-300 mb-4">{review.text}</p>

            <div className="text-sm text-zinc-500">
              {new Date(review.createdAt).toLocaleDateString('sv-SE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        ))}
      </div>

      {reviews.length === 0 && (
        <p className="text-center text-zinc-500 py-10">
          Inga recensioner ännu
        </p>
      )}

      <ReviewForm />
    </div>
  );
}

