import { defineRocketConfig } from 'config-rocket'

export default defineRocketConfig({
  parameters: [
    {
      id: '$input-SMARTSHEET_API_KEY',
      resolver: {
        operation: 'prompt',
        label: 'Please enter your Smartsheet API key:',
        type: 'text',
      },
    },
    {
      id: '$input-SMARTSHEET_ENDPOINT',
      resolver: {
        operation: 'prompt',
        label: 'Please enter your Smartsheet URL:',
        type: 'text',
        initial: 'https://api.smartsheet.com/2.0',
      },
    },
  ],

  variablesResolver: {
    '{{SMARTSHEET_API_KEY}}': '$input-SMARTSHEET_API_KEY',
    '{{SMARTSHEET_ENDPOINT}}': '$input-SMARTSHEET_ENDPOINT',
  },

  filesBuildResolver: {
    'smartsheet-mcp': {
      filePath: '.roo/mcp.json',
      content: 'fuel:smartsheet-mcp.json',
    },
  },
})
