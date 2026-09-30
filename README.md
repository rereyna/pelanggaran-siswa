# Pelanggaran Siswa

Project sederhana untuk remedial UTS Pemrograman Web.

## Fitur
- Menampilkan data pelanggaran
- Tambah data
- Edit data dengan dynamic route `[id]`
- Hapus data
- API GET `/api/pelanggaran`

## Menjalankan project

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Buka:
http://localhost:3000/pelanggaran

API:
http://localhost:3000/api/pelanggaran
