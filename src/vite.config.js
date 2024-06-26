import { defineConfig } from 'vite'
import { join } from 'path'

export default defineConfig({
  base:"./",
  build:{
    rollupOptions: {
      input: {
        main: join("./", 'index.html'),
        
      },
    },
  }
})