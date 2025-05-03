import { bundleConfigPack } from 'config-rocket'
import { resolve } from 'pathe'
import { prepareDirectory } from './helpers/fs'

async function entry() {
  const outDir = resolve(import.meta.dirname, '../dist')

  // Clean old dist files
  await prepareDirectory({
    path: outDir,
    clean: true,
  })

  // Add as much `bundleConfigPack` as you want here

  await bundleConfigPack({
    frameDir: resolve(import.meta.dirname, 'assembly/roo-rocket/boomerang/frame'),
    fuelDir: resolve(import.meta.dirname, 'assembly/@fuel-garage'),
    outDir,
    outName: 'roo-boomerang',
  })

  await bundleConfigPack({
    rocketConfig: resolve(import.meta.dirname, 'assembly/roo-rocket/brave-search-mcp/rocket.config.ts'),
    fuelDir: resolve(import.meta.dirname, 'assembly/@fuel-garage'),
    outDir,
    outName: 'roo-brave-search-mcp',
  })

  await bundleConfigPack({
    rocketConfig: resolve(import.meta.dirname, 'assembly/roo-rocket/shariqriazz-vertex-mcp/rocket.config.ts'),
    fuelDir: resolve(import.meta.dirname, 'assembly/@fuel-garage'),
    outDir,
    outName: 'roo-shariqriazz-vertex-mcp',
  })
}
await entry()
