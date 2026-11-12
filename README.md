# Modern Minimal Wedding Invitation — Demo

เว็บไซต์การ์ดเชิญงานแต่งงานสไตล์ Minimal Luxury (Mobile-First) สร้างด้วย React + Vite + TypeScript + Tailwind CSS v4 + Motion

> ข้อมูลทั้งหมดเป็นข้อมูลสมมติ (DEMO) และทุกตำแหน่งภาพเป็น Placeholder

## เริ่มต้นใช้งาน

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build ไปที่ dist/
npm run preview   # ทดสอบไฟล์ build
```

## ปรับแต่งสำหรับลูกค้า

แก้ไขข้อมูลทั้งหมดที่ `src/config/wedding.ts` ที่เดียว

- `isDemo: false` เพื่อซ่อนป้าย DEMO
- `showOpening: false` เพื่อปิดหน้าจอเปิดการ์ด
- `theme.colors` เพื่อเปลี่ยนสี เช่น `{ taupe: '#9C8F80' }`

## เปลี่ยน Placeholder เป็นภาพจริง

1. วางไฟล์ใน `public/images/couple|gallery|venue|qr/`
2. เพิ่ม `src` ใน config:

```ts
photo: { src: asset('images/couple/hero.jpg'), alt: '...', label: 'COUPLE HERO PHOTO', ratio: '4 / 5' }
```

แนะนำ: ใช้ WebP หรือ JPG ขนาดกว้างไม่เกิน 1600px และไม่เกิน 300KB ต่อภาพ

## แผนที่จริง

Google Maps → Share → Embed a map → คัดลอกค่า `src` ไปใส่ที่ `venue.mapEmbedUrl`

## Deploy ขึ้น GitHub Pages

1. Push repo ขึ้น GitHub (branch `main`) พร้อมไฟล์ `package-lock.json`
2. ไปที่ Settings → Pages → Source เลือก **GitHub Actions**
3. ทุกครั้งที่ push ระบบจะ build และ deploy อัตโนมัติ
4. เว็บจะอยู่ที่ `https://<user>.github.io/<repo>/` (รองรับ HTTPS)

`vite.config.ts` ใช้ `base: './'` จึงทำงานได้ไม่ว่า repo จะชื่ออะไร
