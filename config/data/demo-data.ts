// Placeholder demo data - used in the API routes

import { Order, Product } from './types'

export const products: Product[] = [
  {
    brand: 'Nike',
    colors: [
      {
        color_hex_code: '#FFFFFF',
        color_name: 'White'
      },
      {
        color_hex_code: '#000000',
        color_name: 'Black'
      }
    ],
    features: [
      'Leather Upper',
      'Air cushioning',
      'Durable rubber outsole',
      'Perforations for breathability',
      'Padded collar for comfort'
    ],
    full_description:
      "The Nike Air Force 1 '07 is a modern take on the iconic AF1, blending classic style and fresh, crisp details. Featuring a white leather upper and encapsulated Air-Sole unit for lightweight cushioning and all-day comfort.",
    gender: 'UNISEX',
    name: "Nike Air Force 1 '07",
    price: 110.0,
    product_id: 'AF1-001',
    ratings: 4.7,
    short_description:
      "The iconic Nike Air Force 1 '07: Classic style, all-day comfort.",
    sizes: ['8 US', '9 US', '10 US', '11 US', '12 US'],
    tags: ['sneakers', 'lifestyle', 'classic', 'basketball'],
    acessories_id: [],
    related_products_ids: ['AF1-002', 'AJ1-001']
  },
  {
    brand: 'Adidas',
    colors: [
      {
        color_hex_code: '#002B5E',
        color_name: 'Navy Blue'
      },
      {
        color_hex_code: '#FFFFFF',
        color_name: 'White'
      }
    ],
    features: [
      'Primeknit upper',
      'Boost midsole',
      'Continental rubber outsole',
      'Adaptive fit',
      'Energy return'
    ],
    full_description:
      'The Adidas Ultraboost 22 is engineered for responsive cushioning and unparalleled comfort. Featuring a Primeknit+ upper for a sock-like fit and a Boost midsole for exceptional energy return, perfect for running and everyday wear.',
    gender: 'UNISEX',
    name: 'Adidas Ultraboost 22',
    price: 180.0,
    product_id: 'UB22-001',
    ratings: 4.8,
    short_description:
      'Experience ultimate comfort with the Adidas Ultraboost 22, designed with responsive cushioning for peak performance.',
    sizes: ['7 US', '8 US', '9 US', '10 US', '11 US'],
    tags: ['running shoes', 'performance', 'comfort', 'sportswear'],
    acessories_id: [],
    related_products_ids: ['UB22-002', 'SL20-001']
  },
  {
    brand: 'Puma',
    colors: [
      {
        color_hex_code: '#FF0000',
        color_name: 'Red'
      },
      {
        color_hex_code: '#000000',
        color_name: 'Black'
      }
    ],
    features: [
      'Suede upper',
      'Classic silhouette',
      'Rubber outsole',
      'Comfortable fit',
      'Iconic design'
    ],
    full_description:
      'The Puma Suede Classic is an iconic silhouette, featuring a suede upper for a smooth, stylish look. Its rubber outsole provides grip and durability, making it perfect for casual wear and timeless fashion.',
    gender: 'UNISEX',
    name: 'Puma Suede Classic',
    price: 70.0,
    product_id: 'PSC-001',
    ratings: 4.5,
    short_description:
      'The Puma Suede Classic: A timeless silhouette for effortless style.',
    sizes: ['6 US', '7 US', '8 US', '9 US', '10 US'],
    tags: ['sneakers', 'casual', 'lifestyle', 'classic'],
    acessories_id: [],
    related_products_ids: ['PSC-002', 'RS-0-001']
  },
  {
    brand: 'New Balance',
    colors: [
      {
        color_hex_code: '#C4C4C4',
        color_name: 'Grey'
      },
      {
        color_hex_code: '#FFFFFF',
        color_name: 'White'
      }
    ],
    features: [
      'Suede and mesh upper',
      'ENCAP midsole cushioning',
      'Durable rubber outsole',
      'Comfortable fit',
      'Retro style'
    ],
    full_description:
      'The New Balance 574 is a timeless classic, combining a suede and mesh upper with ENCAP midsole cushioning for superior comfort and support. Its durable rubber outsole offers reliable traction for everyday wear.',
    gender: 'UNISEX',
    name: 'New Balance 574',
    price: 90.0,
    product_id: 'NB574-001',
    ratings: 4.6,
    short_description:
      'The New Balance 574: A classic sneaker with superior comfort and retro style.',
    sizes: ['7.5 US', '8.5 US', '9.5 US', '10.5 US', '11.5 US'],
    tags: ['sneakers', 'lifestyle', 'retro', 'comfort'],
    acessories_id: [],
    related_products_ids: ['NB574-002', 'NB990-001']
  },
  {
    brand: 'Reebok',
    colors: [
      {
        color_hex_code: '#FFFFFF',
        color_name: 'White'
      },
      {
        color_hex_code: '#0000FF',
        color_name: 'Blue'
      }
    ],
    features: [
      'Leather upper',
      'EVA midsole',
      'Durable rubber outsole',
      'Comfortable cushioning',
      'Classic design'
    ],
    full_description:
      'The Reebok Classic Leather features a soft leather upper and a lightweight EVA midsole for exceptional cushioning and comfort. A durable rubber outsole ensures reliable traction, making it perfect for everyday wear.',
    gender: 'UNISEX',
    name: 'Reebok Classic Leather',
    price: 80.0,
    product_id: 'RCL-001',
    ratings: 4.4,
    short_description:
      'The Reebok Classic Leather: Timeless style and exceptional comfort for everyday wear.',
    sizes: ['6 US', '7 US', '8 US', '9 US', '10 US'],
    tags: ['sneakers', 'lifestyle', 'classic', 'comfort'],
    acessories_id: [],
    related_products_ids: ['RCL-002', 'RF-001']
  },
  {
    brand: 'Vans',
    colors: [
      {
        color_hex_code: '#000000',
        color_name: 'Black'
      },
      {
        color_hex_code: '#FFFFFF',
        color_name: 'White'
      }
    ],
    features: [
      'Canvas upper',
      'Vulcanized rubber sole',
      'Classic waffle pattern',
      'Durable construction',
      'Iconic style'
    ],
    full_description:
      "The Vans Old Skool features a durable canvas upper and a vulcanized rubber sole with Vans' signature waffle pattern for grip. Perfect for skating or casual wear, these sneakers provide iconic style and reliable performance.",
    gender: 'UNISEX',
    name: 'Vans Old Skool',
    price: 65.0,
    product_id: 'VOS-001',
    ratings: 4.6,
    short_description:
      'The Vans Old Skool: An iconic skateboarding shoe with a timeless style.',
    sizes: ['7 US', '8 US', '9 US', '10 US', '11 US'],
    tags: ['sneakers', 'skateboarding', 'casual', 'lifestyle'],
    acessories_id: [],
    related_products_ids: ['VOS-002', 'VAC-001']
  },
  {
    brand: 'Jordan',
    colors: [
      {
        color_hex_code: '#000000',
        color_name: 'Black'
      },
      {
        color_hex_code: '#FF0000',
        color_name: 'Red'
      }
    ],
    features: [
      'Leather Upper',
      'Air cushioning',
      'Durable rubber outsole',
      'Iconic Wings Logo',
      'Padded collar for comfort'
    ],
    full_description:
      'The Air Jordan 1 Retro High OG is a classic basketball sneaker with premium materials and iconic style.  Featuring a leather upper, Air-Sole unit, and durable rubber outsole for superior comfort and performance.',
    gender: 'UNISEX',
    name: 'Air Jordan 1 Retro High OG',
    price: 170.0,
    product_id: 'AJ1-001',
    ratings: 4.8,
    short_description:
      'The iconic Air Jordan 1 Retro High OG: Classic style and performance for basketball enthusiasts.',
    sizes: ['8 US', '9 US', '10 US', '11 US', '12 US'],
    tags: ['sneakers', 'basketball', 'classic', 'lifestyle'],
    acessories_id: [],
    related_products_ids: ['AJ1-002', 'AF1-001']
  },
  {
    brand: 'Converse',
    colors: [
      {
        color_hex_code: '#FFFFFF',
        color_name: 'White'
      },
      {
        color_hex_code: '#000000',
        color_name: 'Black'
      }
    ],
    features: [
      'Canvas upper',
      'Rubber outsole',
      'Classic design',
      'Comfortable fit',
      'Iconic silhouette'
    ],
    full_description:
      'The Converse Chuck Taylor All Star is an iconic sneaker featuring a durable canvas upper and a classic rubber outsole.  Perfect for any occasion, these sneakers offer timeless style and comfortable all-day wear.',
    gender: 'UNISEX',
    name: 'Converse Chuck Taylor All Star',
    price: 60.0,
    product_id: 'CTA-001',
    ratings: 4.5,
    short_description:
      'The iconic Converse Chuck Taylor All Star: A timeless classic for any wardrobe.',
    sizes: ['6 US', '7 US', '8 US', '9 US', '10 US'],
    tags: ['sneakers', 'casual', 'lifestyle', 'classic'],
    acessories_id: [],
    related_products_ids: ['CTA-002', 'VOS-001']
  },
  {
    brand: 'Timberland',
    colors: [
      {
        color_hex_code: '#A3763D',
        color_name: 'Wheat Nubuck'
      }
    ],
    features: [
      'Waterproof leather',
      'Padded collar',
      'Durable lug outsole',
      'Comfortable fit',
      'Rugged style'
    ],
    full_description:
      'The Timberland 6-Inch Premium Boot is a durable and waterproof boot designed for rugged terrain and everyday wear. Featuring a premium waterproof leather upper, padded collar, and a lug outsole for excellent traction.',
    gender: 'UNISEX',
    name: 'Timberland 6-Inch Premium Boot',
    price: 190.0,
    product_id: 'TB6-001',
    ratings: 4.7,
    short_description:
      'The Timberland 6-Inch Premium Boot: Rugged durability and waterproof protection.',
    sizes: ['7 US', '8 US', '9 US', '10 US', '11 US'],
    tags: ['boots', 'outdoor', 'waterproof', 'rugged'],
    acessories_id: [],
    related_products_ids: ['TB6-002', 'CLB-001']
  },
  {
    brand: 'Salomon',
    colors: [
      {
        color_hex_code: '#264653',
        color_name: 'Dark Denim'
      }
    ],
    features: [
      'Quicklace lacing system',
      'Contagrip outsole',
      'Waterproof membrane',
      'EnergyCell midsole',
      'Protective toecap'
    ],
    full_description:
      'The Salomon Speedcross 5 GTX is designed for trail running in challenging conditions.  Featuring a Gore-Tex waterproof membrane, aggressive Contagrip outsole, and EnergyCell+ midsole for responsive cushioning and reliable grip on any terrain.',
    gender: 'UNISEX',
    name: 'Salomon Speedcross 5 GTX',
    price: 150.0,
    product_id: 'SX5-001',
    ratings: 4.8,
    short_description:
      'The Salomon Speedcross 5 GTX: Waterproof trail running shoes for challenging terrain.',
    sizes: ['8 US', '9 US', '10 US', '11 US', '12 US'],
    tags: ['trail running', 'outdoor', 'waterproof', 'performance'],
    acessories_id: [],
    related_products_ids: ['SX5-002', 'NBC-001']
  }
]

const daysAgo = (days: number) => {
  const date = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
  return date.toLocaleDateString()
}

export const orders: Order[] = [
  {
    id: 'CX2312',
    items: [
      {
        product: products[0],
        quantity: 1
      },
      {
        product: products[2],
        quantity: 1
      }
    ],
    status: 'delivered',
    created_at: daysAgo(4),
    total: 2389.99
  },
  {
    id: 'CYE223',
    items: [
      {
        product: products[1],
        quantity: 1
      }
    ],
    status: 'cancelled',
    created_at: daysAgo(18),
    total: 1199.99
  },
  {
    id: 'EB2134',
    items: [
      {
        product: products[3],
        quantity: 2
      }
    ],
    status: 'delivered',
    created_at: daysAgo(42),
    total: 999.98
  }
]
