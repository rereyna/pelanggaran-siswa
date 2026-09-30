-- CreateTable
CREATE TABLE "Pelanggaran" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nis" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "jenis_pelanggaran" TEXT NOT NULL,
    "poin" INTEGER NOT NULL
);
