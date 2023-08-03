import "./globals.css";
import { PT_Serif, Heebo } from "next/font/google";
import NavBar from "@/app/components/NavBar";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata = {
  title: "Firma Jurídica Laboral",
  description: "Despacho Jurídico Laboral en Pachuca, Hidalgo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`h-screen w-screen bg-gray-900 overflow-auto ${heebo.className}`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
