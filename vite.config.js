import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/diligent-cicd-recipes/',
    plugins: [react()]
});