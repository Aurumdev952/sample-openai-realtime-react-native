// List of tools available to the assistant
// No need to include the top-level wrapper object as it is added in lib/tools/tools.ts
// More information on function calling: https://platform.openai.com/docs/guides/function-calling

export const toolsList = [
  {
    name: 'get_products',
    description: 'Fetch the list of available products',
    parameters: {
      limit: {
        type: 'number',
        description: 'number of products to fetch'
      },
      skip: {
        type: 'number',
        description:
          'number of products to skip before fetching the remaining product according to the limit'
      }
    }
  },
  {
    name: 'filter_products',
    description:
      'Filters a list of products based on various criteria such as price, size, gender, colors, ratings, and tags.',
    parameters: {
      filters: {
        type: 'object',
        properties: {
          minPrice: {
            type: 'number',
            description: 'Minimum price of the product.'
          },
          maxPrice: {
            type: 'number',
            description:
              'Maximum price of the product. it will be 10000 by default'
          },
          sizes: {
            type: 'array',
            items: {
              type: 'string'
            },
            description: 'List of acceptable product sizes.'
          },
          gender: {
            type: 'string',
            enum: ['MALE', 'FEMALE', 'UNISEX', 'ALL'],
            description: 'Gender category of the product. "ALL" by default'
          },
          colors: {
            type: 'array',
            items: {
              type: 'string'
            },
            description: 'List of acceptable product colors.'
          },
          minRating: {
            type: 'number',
            description: 'Minimum average rating of the product.'
          },
          tags: {
            type: 'array',
            items: {
              type: 'string'
            },
            description: 'List of tags for filtering products.'
          }
        },
        required: [
          'minPrice',
          'maxPrice',
          'sizes',
          'gender',
          'colors',
          'minRating',
          'tags'
        ],
        additionalProperties: false
      }
    }
  },
  {
    name: 'get_product_by_id',
    description: 'Fetch a product by its ID',
    parameters: {
      product_id: {
        type: 'string',
        description: 'ID of the product to fetch'
      }
    }
  },
  {
    name: 'add_to_cart',
    description:
      'Add items to cart when the user has confirmed their interest.',
    parameters: {
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            product_id: {
              type: 'string',
              description: 'ID of the product to add to the cart'
            },
            quantity: {
              type: 'integer',
              description: 'Quantity of the product to add to the cart'
            }
          },
          required: ['product_id', 'quantity'],
          additionalProperties: false
        }
      }
    }
  },
  {
    name: 'display_product',
    description: 'display a product to the user ui',
    parameters: {
      product_id: {
        type: 'string'
      }
    }
  },
  {
    name: 'display_list_of_products',
    description: 'display multiple products to the user ui',
    parameters: {
      product_ids: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    }
  },
  {
    name: 'proceed_to_checkout',
    description: 'Proceeds to the checkout process',
    parameters: {}
  }
]
