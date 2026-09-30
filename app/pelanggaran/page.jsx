import Link from "next/link";
import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/prisma";

async function hapusPelanggaran(formData) {
  "use server";
  const id = Number(formData.get("id"));

  await prisma.pelanggaran.delete({
    where: { id },
  });

  revalidatePath("/pelanggaran");
}

export default async function PelanggaranPage() {
  const data = await prisma.pelanggaran.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <main className="container">
      <div className="topbar">
        <div>
          <h1>Data Pelanggaran Siswa</h1>
          <p>SMKN 21 Jakarta</p>
        </div>
        <Link href="/pelanggaran/tambah" className="btn">+ Tambah Data</Link>
      </div>

      <div className="card">
        {data.length === 0 ? (
          <div className="notice">Belum ada data pelanggaran.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>NIS</th>
                <th>Nama</th>
                <th>Kelas</th>
                <th>Pelanggaran</th>
                <th>Poin</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.nis}</td>
                  <td>{item.nama}</td>
                  <td>{item.kelas}</td>
                  <td>{item.jenis_pelanggaran}</td>
                  <td>{item.poin}</td>
                  <td>
                    <div className="actions">
                      <Link href={`/pelanggaran/edit/${item.id}`} className="btn-edit">Edit</Link>
                      <form action={hapusPelanggaran}>
                        <input type="hidden" name="id" value={item.id} />
                        <button className="btn-danger" type="submit">Delete</button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
