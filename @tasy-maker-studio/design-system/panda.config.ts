import { defineConfig } from "@pandacss/dev";
import pandaPreset from "@pandacss/preset-panda";
// you need to separate the preset from the components othewise esbuild & panda get confused
import { tmsPandaPreset } from "@tasty-maker-studio/design-system/src/theme/tms-panda-preset";

export default defineConfig({
  // Whether to include css reset styles in the generated css.
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx,js,jsx}"],
  presets: [pandaPreset, tmsPandaPreset],

  exclude: [],
  jsxFramework: "react",
  emitPackage: true,
  outdir: "@tasty-maker-studio/styled-system",
});
