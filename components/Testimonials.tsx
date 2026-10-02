import type { Testimonial } from "@/lib/types";

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) return null;
  return (
    <section className="bg-amber-100/60 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="font-display text-center text-3xl font-bold">Kata Pelanggan</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.id} className="rounded-2xl bg-white p-6 shadow">
              <div className="text-amber-500">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
              <blockquote className="mt-2 text-stone-700">“{t.message}”</blockquote>
              <figcaption className="mt-3 text-sm font-medium text-stone-500">
                — {t.customer_name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}