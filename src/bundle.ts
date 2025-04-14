import { bundleConfigPack } from 'config-rocket'
import { resolve } from 'pathe'

async function entry() {
  const outDir = resolve(import.meta.dirname, '../dist')

  // Add as much `bundleConfigPack` as you want here

  await bundleConfigPack({
    frameDir: resolve(import.meta.dirname, 'assembly/roo-rocket-troops/boomerang/frame'),
    fuelDir: resolve(import.meta.dirname, 'assembly/roo-rocket-troops/@fuel-garage'),
    outDir,
    outName: 'roo-boomerang',
  })
}
await entry()
