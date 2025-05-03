import { defineRocketConfig } from 'config-rocket'

export default defineRocketConfig({
  parameters: [{
    id: 'MEMORY_BANK_LOAD-disabled',
    resolver: {
      operation: 'prompt',
      label: 'Disable "Memory Bank Load" instruction?',
      type: 'confirm',
      initial: false,
    },
  }],

  variablesResolver: {
    '{{MEMORY_BANK_LOAD}}': {
      type: 'match',
      a: 'MEMORY_BANK_LOAD-disabled',
      b: false,
      result: 'fuel:instruct_memory-bank-load.md',
    },
  },
})
