// Functions mapping to tool calls
// Define one function per tool call - each tool call should have a matching function
// Parameters for a tool call are passed as an object to the corresponding function

import { features } from 'process'
import { products } from './data/demo-data'

interface FilterCriteria {
  priceRange?: [number, number]
  size?: string
  gender?: 'MALE' | 'FEMALE' | 'UNISEX'
  colors?: string[]
  ratings?: number
  tags?: string[]
}

export function filter_products({
  filters
}: {
  filters: {
    minPrice?: number
    maxPrice?: number
    sizes?: string[]
    gender?: 'MALE' | 'FEMALE' | 'UNISEX' | 'ALL'
    colors?: string[]
    minRating?: number
    tags?: string[]
  }
}) {
  return {
    filtered_products: products
      .filter(product => {
        const matchesPrice =
          (filters.minPrice === undefined ||
            product.price >= filters.minPrice) &&
          (filters.maxPrice === undefined || product.price <= filters.maxPrice)

        const matchesSize =
          !filters.sizes ||
          filters.sizes.some(size => product.sizes.includes(size)) || filters.sizes.length === 0

        const matchesGender =
          !filters.gender || product.gender === filters.gender || filters.gender === "ALL"

        const matchesColors =
          !filters.colors ||
          filters.colors.some(color =>
            product.colors.some(
              productColor =>
                productColor.color_name.toLowerCase() ===
                color.toLocaleLowerCase()
            )
          ) || filters.colors.length === 0

        const matchesRating =
          filters.minRating === undefined ||
          product.ratings >= filters.minRating

        const matchesTags =
          !filters.tags ||
          filters.tags.some(tag =>
            product.tags.some(
              productTag => productTag.toLowerCase() === tag.toLowerCase()
            )
          ) || filters.tags.length === 0

        return (
          matchesPrice &&
          matchesSize &&
          matchesGender &&
          matchesColors &&
          matchesRating &&
          matchesTags
        )
      })
      .map(item => ({
        product_id: item.product_id,
        name: item.name,
        price: item.price,
        short_description: item.short_description,
        sizes: item.sizes,
        brand: item.brand,
        gender: item.gender,
        colors: item.colors,
        ratings: item.ratings,
        tags: item.tags
      }))
  }
}

export const get_products = async ({
  limit,
  skip
}: {
  limit: number
  skip: number
}) => {
  // Apply pagination
  const paginatedProducts = products.slice(skip, skip + limit)

  return {
    products: paginatedProducts.map(item => ({
      product_id: item.product_id,
      name: item.name,
      price: item.price,
      short_description: item.short_description,
      sizes: item.sizes,
      brand: item.brand,
      gender: item.gender,
      colors: item.colors,
      ratings: item.ratings,
      tags: item.tags,
      features: item.features
    })),
    total: products.length
  }
}

export const get_product_by_id = async ({
  product_id
}: {
  product_id: string
}) => {
  const product = products.find(item => item.product_id == product_id) ?? null
  return {
    product
  }
}

export const get_orders = async () => {
  const response = await fetch('/api/tools/get_orders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const result = await response.json()
  return result
}

export const create_return = ({
  orderId,
  items
}: {
  orderId: string
  items: any
}) => {
  return {
    message: `Successfully created return for order ${orderId} with items: ${JSON.stringify(
      items
    )}`
  }
}

export const file_claim = ({
  orderId,
  reason,
  description
}: {
  orderId: string
  reason: string
  description: string
}) => {
  return {
    message: `Successfully filed claim for order ${orderId} (reason: ${reason}, description: ${description})`
  }
}

export const add_to_cart = ({ items }: { items: any }) => {
  return {
    message: `Added these items to cart: ${JSON.stringify(items)}`
  }
}

export const proceed_to_checkout = () => {
  return {
    message: `Proceeded to checkout`
  }
}

export const display_list_of_products = ({
  product_ids
}: {
  product_ids: string[]
}) => {
  console.log('product ids', product_ids)
  const _products = products.filter(item =>
    product_ids?.includes(item.product_id)
  )
  console.log('display', _products)
  return {
    message: `Displayed these products to the ui: ${JSON.stringify(_products)}`
  }
}
export const display_product = ({ product_id }: { product_id: string }) => {
  const product = products.find(item => item.product_id === product_id)
  console.log('display', product)
  return {
    message: `Displayed these products to the ui: ${JSON.stringify(product)}`
  }
}

export const functionsMap = {
  get_products,
  get_product_by_id,
  add_to_cart,
  display_list_of_products,
  display_product,
  filter_products,
  proceed_to_checkout
  // Add more functions here as you define them
}
