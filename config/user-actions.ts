// User actions that are used in custom components defined in the config/ui/components.tsx
// Use this to define user-triggered actions that impact the conversation history

import { processMessages } from '@/lib/assistant'
import useConversationStore from '@/stores/useConversationStore'
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions'

// Adds the user action as context to the conversation history and calls processMessages to get a response from the assistant
const addUserActionToContext = async (message: string) => {
  const { addConversationItem } = useConversationStore.getState()

  const conversationItem: ChatCompletionMessageParam = {
    role: 'user',
    content: `[APP CONTEXT] ${message}`
  }

  addConversationItem(conversationItem)
  await processMessages()
}

export const selectOrder = async (orderId: string) => {
  const userMessage = `User selected order ${orderId}.`
  await addUserActionToContext(userMessage)
}

export const addToCart = async (productId: string) => {
  const userMessage = `User added product ${productId} to cart.`
  await addUserActionToContext(userMessage)
}
