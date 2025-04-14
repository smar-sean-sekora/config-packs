import { defineRocketConfig } from 'config-rocket'

export default defineRocketConfig({
  parameters: [{
    id: '$input-BRAVE_API_KEY',
    resolver: {
      operation: 'prompt',
      label: 'Please enter your Brave API key:',
      type: 'text',
    },
  }],

  variablesResolver: {
    '{{BRAVE_API_KEY}}': '$input-BRAVE_API_KEY',
  },

  filesBuildResolver: {
    'brave-search-mcp': {
      filePath: '.roo/mcp.json',
      content: 'fuel:brave-search-mcp.json',
    },
  },
})
