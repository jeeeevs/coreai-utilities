import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@myorg/core": path.resolve(__dirname, "../../packages/ui/src"),
      // "@myorg/common": path.resolve(__dirname, "../../packages/common/src")
    }
  }
});
