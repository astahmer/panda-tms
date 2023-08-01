import { defineConfig } from "@pandacss/dev";
import pandaPreset from '@pandacss/preset-panda';
import { recipes } from "@tasty-maker-studio/design-system/src/theme/recipes";
import { tmsPandaPreset } from "@tasty-maker-studio/design-system";

export default defineConfig({
    // Whether to include css reset styles in the generated css.
    preflight: true,

    // Where to look for your css declarations
    include: [
        "node_modules/@tasty-maker-studio/design-system/src/**/*.{ts,tsx,js,jsx}",
        // "node_modules/@tasty-maker-studio/design-system/dist/panda.buildinfo.json",
        "./src/**/*.{ts,tsx,js,jsx}"
    ],

    //Using pandaPreset does not work
   // presets: [pandaPreset,  tmsPandaPreset],

    // We have to first install this without the tmsPandaPreset.
   // presets: ['@pandacss/dev/presets'],
    // Once we have generated the @tasty-maker-studio/styled-system package, we can add tmsPandaPreset
    presets:['@pandacss/dev/presets',  tmsPandaPreset],

    exclude: [],
    jsxFramework: "react",
    emitPackage: true,
    outdir: "@tasty-maker-studio/styled-system",
    theme: {
        extend:{
            recipes
        }
    }
});
