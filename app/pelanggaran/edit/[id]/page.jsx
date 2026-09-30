import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "../../../../lib/prisma";

async function editPelanggaran(formData) {
  "use server";

  const id = Number(formData.get("id"));

  await prisma.pelanggaran.update({
    where: { id },
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

export default async function EditPage({ params }) {
  const { id } = await params;

  const data = await prisma.pelanggaran.findUnique({
    where: { id: Number(id) },
  });

  if (!data) {
    return <main className="container"><div className="card"><h1>Data tidak ditemukan</h1><Link href="/pelanggaran" className="btn">Kembali</Link></div></main>;
  }

  return (
    <main className="container">
      <div className="card">
        <h1>Edit Pelanggaran</h1>

        <form action={editPelanggaran}>
          <input type="hidden" name="id" value={data.id} />

          <div className="form-group">
            <label>NIS</label>
            <input name="nis" defaultValue={data.nis} required />
          </div>

          <div className="form-group">
            <label>Nama</label>
            <input name="nama" defaultValue={data.nama} required />
          </div>

          <div className="form-group">
            <label>Kelas</label>
            <input name="kelas" defaultValue={data.kelas} required />
          </div>

          <div className="form-group">
            <label>Jenis Pelanggaran</label>
            <input name="jenis_pelanggaran" defaultValue={data.jenis_pelanggaran} required />
          </div>

          <div className="form-group">
            <label>Poin</label>
            <input name="poin" type="number" defaultValue={data.poin} required />
          </div>

          <div className="actions">
            <button className="btn" type="submit">Simpan Perubahan</button>
            <Link href="/pelanggaran" className="btn-edit">Batal</Link>
          </div>
        </form>
      </div>
    </main>
  );
}
