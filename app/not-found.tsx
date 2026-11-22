import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-2">Sayfa Bulunamadı</h2>
      <p className="text-zinc-400 mb-4 text-sm">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-amber-500 text-black font-semibold rounded-xl text-xs hover:bg-amber-400 transition-colors"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
