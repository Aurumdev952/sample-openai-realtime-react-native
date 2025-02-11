// Define custom components to replace the default function call UI
// These will be displayed in the chat when a tool call is triggered

import React from 'react'
import { CheckCircle } from 'lucide-react'

const CartAdded: React.FC = () => {
  return (
    <div className="flex items-center rounded-md border border-black p-2.5">
      <CheckCircle className="mr-2" />
      <div>Added to cart</div>
    </div>
  )
}

export const toolDisplayMap = {
  add_to_cart: CartAdded
  // add more components as you define them
}
