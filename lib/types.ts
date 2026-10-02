export interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price_idr: number;
  category: string;
  is_available: boolean;
  is_featured: boolean;
  sort_order: number;
}

export interface Testimonial {
  id: string;
  customer_name: string;
  message: string;
  rating: number;
}

export interface CartItem {
  id: string;
  name: string;
  price_idr: number;
  qty: number;
}