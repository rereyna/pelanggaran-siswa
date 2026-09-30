import "./globals.css";

export const metadata = {
  title: "Data Pelanggaran Siswa",
  description: "Sistem sederhana pencatatan pelanggaran siswa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
