import { resolve } from 'pathe'
import { startDevelopmentCycle } from '~/helpers/dev'

async function entry() {
  // Change your target dev subject here:
  const targetDevSubject = resolve(import.meta.dirname, 'assembly/roo-rocket-troops/boomerang')
  const fuelDir = resolve(import.meta.dirname, 'assembly/roo-rocket-troops/@fuel-garage')
  const devDir = resolve(import.meta.dirname, '../.config-dev')

  await startDevelopmentCycle({
    targetDevSubject,
    fuelDir,
    devDir,
  })
}
await entry()
