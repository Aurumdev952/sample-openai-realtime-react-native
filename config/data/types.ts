export interface Product {
  product_id: string;
  name: string;
  price: number;
  short_description: string;
  full_description: string;
  sizes: string[]; // Array of US shoe sizes like ["8 US", "9 US", "10 US"]
  acessories_id?: string[]; // Optional array of accessory product IDs
  brand: string;
  gender: "MALE" | "FEMALE" | "UNISEX";
  colors: {
    color_name: string;
    color_hex_code: string;
  }[];
  features: string[]; // Key selling points of the shoe
  ratings: number; // Average rating (e.g., 4.5)
  tags: string[]; // Searchable keywords like ["running", "sports"]
  related_products_ids?: string[]; // Optional array of related product IDs
}

export interface OrderItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  items: OrderItem[]
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled' | 'returned'
  created_at: string
  total: number
}
