import { supabase } from "@/lib/supabase";
import { FALLBACK_MENU, FALLBACK_TESTIMONIALS } from "@/lib/fallback";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuGrid from "@/components/MenuGrid";
import InfoSection from "@/components/InfoSection";
import Testimonials from "@/components/Testimonials";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import type { MenuItem, Testimonial } from "@/lib/types";

export const revalidate = 60; // ISR: refresh konten tiap 60 detik

async function getMenu(): Promise<MenuItem[]> {
  try {
    const { data, error } = await supabase
      .from("menu_items")
      .select("*")
      .eq("is_available", true)
      .order("sort_order");
    if (error) throw error;
    return data && data.length > 0 ? (data as MenuItem[]) : FALLBACK_MENU;
  } catch {
    return FALLBACK_MENU; // Supabase belum siap → tampilkan menu default
  }
}

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .limit(6);
    if (error) throw error;
    return data && data.length > 0 ? (data as Testimonial[]) : FALLBACK_TESTIMONIALS;
  } catch {
    return FALLBACK_TESTIMONIALS;
  }
}

export default async function Home() {
  const [menu, testimonials] = await Promise.all([getMenu(), getTestimonials()]);
  const featured = menu.filter((m) => m.is_featured);
  const categories = [...new Set(menu.map((m) => m.category))];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />
      <main className="flex-1">
        <Hero featuredNames={featured.map((f) => f.name)} />
        <MenuGrid menu={menu} categories={categories} />
        <InfoSection />
        <Testimonials testimonials={testimonials} />
        <OrderForm menu={menu} />
      </main>
      <Footer />
    </div>
  );
}
