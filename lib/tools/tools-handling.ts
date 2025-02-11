import { functionsMap } from '../../config/functions'

type ToolName = keyof typeof functionsMap

export const handleTool = async (
  toolName: ToolName,
  // toolName: ToolName | 'generate_ui',
  parameters: any
) => {
  console.log('Handle tool', toolName, parameters)
  // if (toolName === 'generate_ui') {
  //   const { component } = parameters
  //   return { component }
  // } else
  if (functionsMap[toolName]) {
    return await functionsMap[toolName](parameters)
  } else {
    throw new Error(`Unknown tool: ${toolName}`)
  }
}
