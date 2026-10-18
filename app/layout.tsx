import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "ShutterCraft Pro | Profesyonel Mobil Fotoğrafçılık & Simülatör",
  description: "Telefonunuzun kamerasını standart bas-çek mantığından çıkarıp profesyonel bir stüdyoya dönüştürün. Canlı pozlama üçgeni simülatörü, kompozisyon ızgaraları, adım adım çekim rehberleri ve anlık ayar sihirbazı.",
  keywords: [
    "mobil fotoğrafçılık",
    "telefon kamerası ayarları",
    "iPhone fotoğrafçılık hileleri",
    "Android pro mod",
    "pozlama üçgeni",
    "üçler kuralı",
    "altın oran",
    "mobil video çekimi",
    "24 fps ninja walk",
    "gece modu ayarları"
  ],
  authors: [{ name: "ShutterCraft Studio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <body className="bg-camera-darkest text-zinc-100 antialiased selection:bg-amber-500/30 selection:text-amber-300">
        {children}
      </body>
    </html>
  );
}
