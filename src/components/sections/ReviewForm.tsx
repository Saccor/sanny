"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const reviewFormSchema = z.object({
  name: z.string().min(2, {
    message: "Namn måste vara minst 2 tecken.",
  }),
  rating: z.coerce
    .number()
    .min(1, { message: "Välj ett betyg mellan 1 och 5." })
    .max(5, { message: "Välj ett betyg mellan 1 och 5." }),
  text: z.string().min(10, {
    message: "Recensionen måste vara minst 10 tecken.",
  }),
});

type ReviewFormValues = z.infer<typeof reviewFormSchema>;

export default function ReviewForm() {
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      name: "",
      rating: 5,
      text: "",
    },
  });

  function onSubmit(data: ReviewFormValues) {
    console.log("Review submitted:", data);
    // TODO: Backend integration
    form.reset();
    alert("Tack för din recenssion! Den kommer att granskas innan publicering.");
  }

  return (
    <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
      <h2 className="text-2xl font-bold mb-4">Lämna en recension</h2>
      <p className="text-zinc-400 mb-6">
        Dela din upplevelse av träningen
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Namn</FormLabel>
                <FormControl>
                  <Input placeholder="Ditt namn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Betyg</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min="1"
                      max="5"
                      placeholder="5"
                      className="w-24"
                      {...field}
                    />
                    <div className="text-yellow-400 text-2xl">
                      {"★".repeat(Number(field.value) || 0)}
                      {"☆".repeat(5 - (Number(field.value) || 0))}
                    </div>
                  </div>
                </FormControl>
                <FormDescription>
                  Välj ett betyg från 1 till 5 stjärnor
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Din recension</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Berätta om din upplevelse..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" className="w-full md:w-auto">
            Skicka recension
          </Button>
        </form>
      </Form>
    </div>
  );
}

