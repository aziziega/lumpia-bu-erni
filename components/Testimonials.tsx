import type { Testimonial } from "@/lib/types";

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  if (testimonials.length === 0) return null;

  return (
    <section id="ulasan" className="border-b border-[#E8E1D5] bg-[#FAF7F2] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A8422B]">
            Ulasan Nyata
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#262220] sm:text-4xl">
            Cerita Dari Meja Makan Pelanggan
          </h2>
          <p className="mt-3 text-base text-[#615852]">
            Kerenyahan kulit lumpia dan gurihnya isian rebung segar yang selalu membuat rindu.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border border-[#E8E1D5] bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7"
            >
              <div>
                {/* Rating Stars SVG */}
                <div className="flex items-center gap-1 text-[#D97706]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${i < t.rating ? "fill-current" : "stroke-current fill-none"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-4 text-sm leading-relaxed text-[#262220]">
                  &ldquo;{t.message}&rdquo;
                </blockquote>
              </div>

              {/* Author */}
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[#F4EFE6] pt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4EFE6] text-xs font-bold text-[#A8422B]">
                  {t.customer_name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#262220]">
                    {t.customer_name}
                  </div>
                  <div className="text-xs text-[#8C827A]">
                    Pelanggan Terverifikasi
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
