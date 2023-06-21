import { defineConfig } from "cypress";
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  component: {
    devServer: {
      framework: "analog",
      bundler: "vite",
      viteConfig: () => {
        return {
          plugins: [angular({ tsconfig: 'tsconfig.spec.json' })],
        }
      }
    },
  },
});
