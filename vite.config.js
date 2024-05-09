import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://drshakuntalaayush.in/",
  plugins: [react()],
  assetsInclude: [
    "**/*.{jpg,jpeg,png,gif,svg,ico,eot,otf,ttf,woff,woff2,mp4,webm,wav,mp3,m4a,aac,oga,JPG}",
  ],
});
