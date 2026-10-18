"use client";

import React from "react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Sparkles, Compass, Sliders, ArrowDown, Aperture, Layers, Video } from "lucide-react";

interface HeroSectionProps {
  onSelectCategory: (id: string) => void;
  onOpenSimulator: () => void;
}

export function HeroSection({ onSelectCategory, onOpenSimulator }: HeroSectionProps) {
  const quickCategories = [
    { id: "portrait", label: "Portre & İnsan", icon: "👤", badge: "2x-3x Telefoto" },
    { id: "night", label: "Gece & Düşük Işık", icon: "🌙", badge: "-1.0 EV Kuralı" },
    { id: "street", label: "Sokak & Aksiyon", icon: "⚡", badge: "Seri Çekim & Pusu" },
    { id: "macro", label: "Yemek & Makro", icon: "☕", badge: "45° Pencere Işığı" },
    { id: "video", label: "Sinematik Video", icon: "🎬", badge: "24 FPS & Ninja Yürüyüşü" },
  ];

  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Cinematic Atmosphere Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center mb-12">
        {/* Top Live Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-inner animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono font-medium tracking-wide text-zinc-300">
            ShutterCraft Pro <span className="text-amber-400">v2.4</span> • Mobil Fotoğrafçılık Akademisi
          </span>
        </div>

        {/* Catchy Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
          Cebinizdeki Kamerayı{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400">
            Profesyonel Bir Stüdyoya
          </span>{" "}
          Dönüştürün.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-8">
          Standart <span className="text-zinc-200">"bas-çek"</span> alışkanlığını geride bırakın. Pozlama telafisi, lens geometrisi, kompozisyon kuralları ve canlı simülatörlerle fotoğraflarınızı sinematik başyapıtlara dönüştürün.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#guides"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm tracking-wide shadow-glow hover:shadow-[0_0_35px_rgba(245,158,11,0.45)] transition-all flex items-center gap-2 group cursor-pointer"
          >
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            <span>Rehberleri Keşfet</span>
          </a>

          <button
            onClick={onOpenSimulator}
            className="px-6 py-3.5 rounded-2xl bg-camera-card/90 hover:bg-camera-cardHover border border-camera-border hover:border-cyan-500/50 text-white font-semibold text-sm tracking-wide shadow-glass transition-all flex items-center gap-2 group cursor-pointer"
          >
            <Sliders className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Pozlama & Kompozisyon Simülatörü</span>
          </button>
        </div>

        {/* Quick Scenario Pills */}
        <div className="w-full max-w-4xl">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 text-center">
            Hızlı Senaryo Seçici
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {quickCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="p-3 rounded-2xl bg-camera-card/60 hover:bg-camera-card border border-camera-border/80 hover:border-amber-400/40 text-left transition-all duration-200 group flex flex-col justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-[10px] font-mono text-amber-400/90 bg-amber-400/10 px-1.5 py-0.5 rounded">
                    {cat.badge}
                  </span>
                </div>
                <div className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  {cat.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Before / After Slider Showcase */}
      <div className="mt-8">
        <BeforeAfterSlider />
      </div>
    </section>
  );
}
