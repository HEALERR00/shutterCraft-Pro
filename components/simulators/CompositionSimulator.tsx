"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Grid, Compass, RotateCw, Check, Sparkles, Layers, Eye } from "lucide-react";

interface CompositionSample {
  id: string;
  title: string;
  category: string;
  image: string;
  recommendedOverlay: "thirds" | "golden" | "diagonal" | "symmetry";
  explanation: string;
  proRule: string;
}

const COMPOSITION_SAMPLES: CompositionSample[] = [
  {
    id: "portrait-thirds",
    title: "Üçler Kuralı: Portrede Göz Hizası",
    category: "Portre Kompozisyonu",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    recommendedOverlay: "thirds",
    explanation: "İnsan gözü doğal olarak kadrajın tam merkezine değil, çizgilerin kesiştiği 4 güç noktasına bakar. Modelin baskın gözü üst sağ kesişim noktasına oturtulduğunda fotoğraf anında nefes alır.",
    proRule: "Kamera ızgarasını (Grid) açın ve modelin gözlerini asla tam ortada bırakmayın; üst 1/3 yatay çizgiye hizalayın."
  },
  {
    id: "golden-spiral-nature",
    title: "Altın Spiral: Doğanın Matematiksel Akışı",
    category: "Doğa & Makro",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    recommendedOverlay: "golden",
    explanation: "Fibonacci dizilimi (1.618 Altın Oran) insan beyninin en rahat ve estetik bulduğu görsel spiraldir. Bakış geniş alandan başlayıp spiralin merkezindeki neon odak noktasına doğru akar.",
    proRule: "Kadrajdaki en küçük ve en önemli detayı spiralin 'göz' noktasına denk getirin."
  },
  {
    id: "leading-lines-road",
    title: "Yönlendirici Çizgiler: Sonsuzluğa Çekim",
    category: "Sokak & Manzara",
    image: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=1200&auto=format&fit=crop",
    recommendedOverlay: "diagonal",
    explanation: "Köşelerden başlayan diyagonal çizgiler (yollar, raylar, köprü korkulukları) izleyicinin gözünü mıknatıs gibi yakalar ve fotoğrafın derinliğine doğru sürükler.",
    proRule: "Kamerayı yere yaklaştırıp (low-angle) çekim yaparsanız diyagonal çizgilerin derinlik etkisi ikiye katlanır."
  },
  {
    id: "symmetry-arch",
    title: "Simetri & Ufuk Çizgisi: Kusursuz Denge",
    category: "Mimari & Şehir",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop",
    recommendedOverlay: "symmetry",
    explanation: "Merkez çizgisi ve su terazisi, mimarinin kusursuz dengesini hissettirir. Deniz veya ufuk çizgisi 1 derece bile eğik olduğunda fotoğraf dengesiz hissettirir.",
    proRule: "Telefonun 'Sanal Su Terazisi' (Level) kılavuzunu açın ve renk sarı yanana kadar telefonu dik tutun."
  }
];

export function CompositionSimulator() {
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);
  const [activeOverlay, setActiveOverlay] = useState<"thirds" | "golden" | "diagonal" | "symmetry">("thirds");
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPowerPoints, setShowPowerPoints] = useState(true);

  const sample = COMPOSITION_SAMPLES[selectedSampleIndex];

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl bg-camera-card/90 backdrop-blur-2xl border border-camera-border p-6 sm:p-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-camera-border">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-cyan-400 mb-1">
            <Grid className="w-4 h-4" />
            <span>Laboratuvar & Simülatör 02</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Grid & Kompozisyon Stüdyosu
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Profesyonel fotoğrafçıların beynindeki geometrik çerçeveleri canlı katman olarak fotoğraflara uygulayın.
          </p>
        </div>

        {/* Overlay Types Pill Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-camera-darkest/80 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => setActiveOverlay("thirds")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeOverlay === "thirds"
                ? "bg-cyan-500 text-black font-semibold shadow-cyanGlow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            3x3 Üçler Kuralı
          </button>
          <button
            onClick={() => setActiveOverlay("golden")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeOverlay === "golden"
                ? "bg-amber-500 text-black font-semibold shadow-glow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Altın Spiral (Phi)
          </button>
          <button
            onClick={() => setActiveOverlay("diagonal")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeOverlay === "diagonal"
                ? "bg-blue-500 text-white font-semibold shadow-lg"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Diyagonal Hatlar
          </button>
          <button
            onClick={() => setActiveOverlay("symmetry")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeOverlay === "symmetry"
                ? "bg-emerald-500 text-black font-semibold shadow-lg"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Simetri & Su Terazisi
          </button>
        </div>
      </div>

      {/* Main Grid: Visual Overlay Canvas + Interactive Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Viewport (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl select-none group">
            <Image
              src={sample.image}
              alt={sample.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 700px"
            />

            {/* Dark vignette gradient for contrast */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* OVERLAY 1: Rule of Thirds (3x3 Grid) */}
            {activeOverlay === "thirds" && (
              <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3">
                {/* 2 Vertical Lines */}
                <div className="border-r border-cyan-400/60 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                <div className="border-r border-cyan-400/60 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                <div />
                {/* 2 Horizontal Lines */}
                <div className="absolute top-1/3 inset-x-0 border-b border-cyan-400/60 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                <div className="absolute top-2/3 inset-x-0 border-b border-cyan-400/60 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />

                {/* 4 Power Points (Intersections) */}
                {showPowerPoints && (
                  <>
                    <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400/90 shadow-[0_0_15px_#06b6d4] ring-4 ring-cyan-400/30 animate-pulse" />
                    <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-400/90 shadow-[0_0_15px_#f59e0b] ring-4 ring-amber-400/30 animate-pulse" />
                    <div className="absolute top-2/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400/90 shadow-[0_0_15px_#06b6d4] ring-4 ring-cyan-400/30 animate-pulse" />
                    <div className="absolute top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400/90 shadow-[0_0_15px_#06b6d4] ring-4 ring-cyan-400/30 animate-pulse" />
                  </>
                )}
              </div>
            )}

            {/* OVERLAY 2: Golden Ratio / Fibonacci Spiral */}
            {activeOverlay === "golden" && (
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className={`absolute inset-0 w-full h-full pointer-events-none transition-transform duration-500 ${
                  isFlipped ? "scale-x-[-1]" : ""
                }`}
              >
                {/* Golden rectangles */}
                <rect x="0" y="0" width="61.8" height="100" fill="none" stroke="rgba(245,158,11,0.5)" strokeWidth="0.8" strokeDasharray="2,2" />
                <rect x="61.8" y="0" width="38.2" height="61.8" fill="none" stroke="rgba(245,158,11,0.5)" strokeWidth="0.8" strokeDasharray="2,2" />
                <rect x="61.8" y="61.8" width="23.6" height="38.2" fill="none" stroke="rgba(245,158,11,0.5)" strokeWidth="0.8" strokeDasharray="2,2" />
                {/* The Golden Spiral Arc */}
                <path
                  d="M 0,100 A 61.8,61.8 0 0,1 61.8,0 A 38.2,38.2 0 0,1 100,61.8 A 23.6,23.6 0 0,1 76.4,100 A 14.6,14.6 0 0,1 61.8,85.4 A 9,9 0 0,1 70.8,76.4"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                  className="filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                />
                {/* Spiral Core target */}
                <circle cx="70.8" cy="76.4" r="2" fill="#f59e0b" className="animate-ping" />
              </svg>
            )}

            {/* OVERLAY 3: Diagonal Lines (Leading Lines) */}
            {activeOverlay === "diagonal" && (
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="0" y1="100" x2="65" y2="45" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3,2" className="drop-shadow-[0_0_8px_#3b82f6]" />
                <line x1="100" y1="100" x2="65" y2="45" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3,2" className="drop-shadow-[0_0_8px_#3b82f6]" />
                <line x1="0" y1="0" x2="65" y2="45" stroke="#60a5fa" strokeWidth="0.8" strokeDasharray="2,2" />
                <line x1="100" y1="0" x2="65" y2="45" stroke="#60a5fa" strokeWidth="0.8" strokeDasharray="2,2" />
                {/* Convergence point */}
                <circle cx="65" cy="45" r="3" fill="#60a5fa" className="animate-pulse" />
              </svg>
            )}

            {/* OVERLAY 4: Symmetry & Level */}
            {activeOverlay === "symmetry" && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {/* Center vertical line */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-emerald-400/80 shadow-[0_0_10px_#10b981]" />
                {/* Center horizontal line (Horizon level) */}
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-emerald-400/80 shadow-[0_0_10px_#10b981]" />
                {/* Level Bubble indicator */}
                <div className="w-12 h-12 rounded-full border-2 border-emerald-400/80 flex items-center justify-center bg-emerald-950/30 backdrop-blur-sm">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981]" />
                </div>
                {/* Angle badge */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 rounded-full border border-emerald-400/50 text-[11px] font-mono text-emerald-400">
                  UFUK DERECESİ: 0.0° (DÜZEY KİLİTLİ)
                </div>
              </div>
            )}

            {/* Bottom Controls Bar on canvas */}
            <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs font-mono text-zinc-200 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{sample.title}</span>
              </span>

              {activeOverlay === "golden" && (
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCw className="w-3 h-3" />
                  <span>Yönü Çevir</span>
                </button>
              )}

              {activeOverlay === "thirds" && (
                <button
                  onClick={() => setShowPowerPoints(!showPowerPoints)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Eye className="w-3 h-3" />
                  <span>Güç Noktaları {showPowerPoints ? "Gizle" : "Göster"}</span>
                </button>
              )}
            </div>
          </div>

          {/* Sample Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {COMPOSITION_SAMPLES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedSampleIndex(idx);
                  setActiveOverlay(s.recommendedOverlay);
                }}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  idx === selectedSampleIndex
                    ? "bg-camera-cardHover border-amber-400/50 text-white shadow-md"
                    : "bg-camera-darkest/60 border-camera-border text-zinc-400 hover:text-white"
                }`}
              >
                <div className="text-[10px] font-mono text-zinc-500 uppercase">{s.category}</div>
                <div className="text-xs font-semibold truncate mt-0.5">{s.title.split(":")[0]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Breakdown & Photography Rule (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-3xl bg-camera-darkest/80 border border-camera-border gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {sample.category}
              </span>
              <span className="text-xs text-zinc-500">• Estetik Geometri</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              {sample.title}
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {sample.explanation}
            </p>

            {/* Pro Golden Rule Card */}
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                  Fotoğrafçının Altın Kuralı
                </div>
                <div className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  {sample.proRule}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Guide on how to enable on phones */}
          <div className="pt-4 border-t border-camera-border/70 text-xs text-zinc-400">
            <div className="font-semibold text-zinc-200 mb-2 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Telefonunuzda Bu Kılavuzu Nasıl Açarsınız?</span>
            </div>
            <ul className="space-y-1.5 list-disc list-inside text-zinc-400 text-[11px]">
              <li><strong className="text-zinc-300">iPhone:</strong> Ayarlar &gt; Kamera &gt; <span className="text-amber-300">"Kılavuz" (Grid)</span> ve <span className="text-amber-300">"Düzey" (Level)</span> açın.</li>
              <li><strong className="text-zinc-300">Samsung:</strong> Kamera Ayarları &gt; <span className="text-cyan-300">"Kılavuz Çizgileri" (3x3)</span> aktif edin.</li>
              <li><strong className="text-zinc-300">Xiaomi:</strong> Kamera &gt; Üst Menü &gt; <span className="text-emerald-300">"Kılavuz Çizgileri"</span> ikonuna dokunun.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
