import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "../../../lib/prisma";

const daftarPelanggaran = [
  ["Makeup", 5],
  ["Tidak lengkap atribut", 5],
  ["Kuku panjang", 2],
  ["Terlambat", 5],
  ["Memakai aksesoris", 2],
  ["Membawa senjata tajam", 10],
  ["Membawa barang terlarang", 5],
];

async function tambahPelanggaran(formData) {
  "use server";

  await prisma.pelanggaran.create({
    data: {
      nis: formData.get("nis"),
      nama: formData.get("nama"),
      kelas: formData.get("kelas"),
      jenis_pelanggaran: formData.get("jenis_pelanggaran"),
      poin: Number(formData.get("poin")),
    },
  });

  redirect("/pelanggaran");
}

export default function TambahPage() {
  return (
    <main className="container">
      <div className="card">
        <h1>Tambah Pelanggaran</h1>

        <form action={tambahPelanggaran}>
          <div className="form-group">
            <label>NIS</label>
            <input name="nis" required />
          </div>

          <div className="form-group">
            <label>Nama</label>
            <input name="nama" required />
          </div>

          <div className="form-group">
            <label>Kelas</label>
            <input name="kelas" placeholder="Contoh: XI PPLG" required />
          </div>

          <div className="form-group">
            <label>Jenis Pelanggaran</label>
            <select name="jenis_pelanggaran" required defaultValue="">
              <option value="" disabled>Pilih pelanggaran</option>
              {daftarPelanggaran.map(([nama, poin]) => (
                <option key={nama} value={nama}>{nama} (+{poin} poin)</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Poin</label>
            <input name="poin" type="number" min="0" required />
          </div>

          <div className="actions">
            <button className="btn" type="submit">Simpan</button>
            <Link href="/pelanggaran" className="btn-edit">Batal</Link>
          </div>
        </form>
      </div>
    </main>
  );
}
