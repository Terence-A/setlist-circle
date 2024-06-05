import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Setlist Circle",
  description: "Be prepared for planned or spontaneous jams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-stone-950">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
