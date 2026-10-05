import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const fromRoot = (p: string) => path.resolve(rootDir, p);

export default {
  resolve: {
    alias: {
      "@": fromRoot("./src"),
      "@components": fromRoot("./src/shared/ui"),
      "@pages": fromRoot("./src/pages"),
      "@layouts": fromRoot("./src/shared/layouts"),
      "@hooks": fromRoot("./src/shared/hooks"),
      "@styles": fromRoot("./src/styles"),
      "@assets": fromRoot("./src/assets"),
      "@utils": fromRoot("./src/shared/utils"),
      "@lib": fromRoot("./src/shared/lib"),
      "@store": fromRoot("./src/shared/store"),
      "@types": fromRoot("./src/shared/types"),
      "clsx": fromRoot("./src/shims/clsx.ts"),
      "sonner": fromRoot("./src/shims/sonner.tsx"),
      "framer-motion": fromRoot("./src/shims/framer-motion.tsx"),
      "lucide-react": fromRoot("./src/shims/lucide-react.tsx"),
      "react-router-dom": fromRoot("./src/shims/react-router-dom.tsx"),
      "zustand": fromRoot("./src/shims/zustand.ts"),
      "@twa-dev/sdk": fromRoot("./src/shims/twa-sdk.ts"),
      "@sentry/react": fromRoot("./src/shims/sentry-react.tsx")
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    open: false
  },
  preview: {
    host: "0.0.0.0",
    port: 4173
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1200,
    target: "es2017"
  }
};
