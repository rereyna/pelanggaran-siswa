kelar saya pak, asli ini prisma lama bener
intinya maafin saya kalau sederhana bgt, kan orang yang dulunya sederhana kelak akan menjadi kaya raya, (hehe)

clue fitur:
- Menampilkan data pelanggaran
- Tambah data
- Edit data dengan dynamic route `[id]`
- Hapus data
- API GET `/api/pelanggaran`



```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Buka ini biar bisa diliatt:
http://localhost:3000/pelanggaran

API:
http://localhost:3000/api/pelanggaran
