import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

interface OrderPayload {
  customer_name: string;
  whatsapp: string;
  note?: string;
  total_idr: number;
  items: { menu_item_id: string; item_name: string; qty: number; price_idr: number }[];
}

// Server-side order creation: uses service_role server-side ONLY.
// Public anon submits via RLS "public submit order" insert policy.
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as OrderPayload;
    const { customer_name, whatsapp, note, total_idr, items } = body;

    if (!customer_name?.trim() || !whatsapp?.trim() || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Data pesanan tidak lengkap" }, { status: 400 });
    }

    const { data: order, error: orderErr } = await supabase
      .from("orders")
      .insert({ customer_name, whatsapp, note: note ?? "", total_idr })
      .select("id")
      .single();

    if (orderErr || !order) {
      console.error("order insert failed:", orderErr);
      return NextResponse.json({ error: "Gagal membuat pesanan" }, { status: 500 });
    }

    const rows = items.map((i) => ({
      order_id: order.id,
      menu_item_id: i.menu_item_id,
      item_name: i.item_name,
      qty: i.qty,
      price_idr: i.price_idr,
    }));
    const { error: itemErr } = await supabase.from("order_items").insert(rows);
    if (itemErr) {
      console.error("order_items insert failed:", itemErr);
      return NextResponse.json({ error: "Gagal menyimpan item" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, order_id: order.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}