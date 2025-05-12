import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 0.0.0.0 ก็ใช้ได้
    port: 80, //url จะไม่ขึ้น port
    open: true, //run แล้วเปิด browser อัตโนมัติ
    strictPort: true, //บังคับใช้ port ที่กำหนดเท่านั้น
  }
})
