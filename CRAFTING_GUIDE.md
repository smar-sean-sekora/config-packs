# CRAFTING_GUIDE.md

### Necessary components:

To be able to bundle and assemble, `Config Rocket` requires a `rocket assembly`, which is these components:
  * `frame/`: the rocket frame, containing the base files that will be processed and split out.
  * `fuel/`: the rocket fuel, containing the files that will be used as context to build the rocket, feel free to add any files as you need.
  * `rocket.config.ts`: the rocket config file, containing the instructions to for `RR` to assemble and allowing customization of the rocket.
    * Utilizes `TypeScript` on development side for type safety & autocomplete DX, bundles to `JSON5` for safety and human-readability at client-side.

#### `rocket.config.ts` available configurations:

Please refer to [**Typedoc page**](https://namesmt.github.io/config-rocket/interfaces/RocketConfig.html)

### Ecosystem and customizability note:

If you're crafting a config pack for an extension of `config-rocket`, remember to check their rules and guidelines, e.g:
+ [`roo-rocket`](https://github.com/NamesMT/roo-rocket/tree/main/libs/roo-rocket) only allows limited `frame` pattern to ensure safety.

You can mix and create config packs for multiple extension of `config-rocket` in the same repo.

Some could provide their own assemble and bundle functions, this codebase is just a template for you to start from, feel free to adjust and customize it to your needs.

## Live development:

Simply run `pnpm run dev`,

This will assemble the `targetDevSubject` at `.config-dev/` folder and watch for changes, triggering re-assembly as needed, you can open `.config-dev/` in another window to test the assembled config live!

## Bundle for distribution:

Simply run `pnpm run bundle`,

This will execute all `bundleConfigPack` in `src/bundle.ts` and output the result to `dist/` folder.

You can then add them into a GitHub release, or upload them anywhere, everyone can now use it through CLI.
