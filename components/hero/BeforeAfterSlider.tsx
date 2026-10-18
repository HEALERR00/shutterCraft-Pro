"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { beforeAfterScenarios } from "@/data/beforeAfterData";
import { SlidersHorizontal, Sparkles, AlertCircle, Camera, CheckCircle2, ChevronRight, Eye } from "lucide-react";

export function BeforeAfterSlider() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const [showHud, setShowHud] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const scenario = beforeAfterScenarios[selectedScenarioIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      {/* Scenario Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-camera-card/80 backdrop-blur-md rounded-2xl border border-camera-border/70 shadow-lg">
        {beforeAfterScenarios.map((item, idx) => {
          const isActive = idx === selectedScenarioIndex;
          return (
            <button
              key={item.id}
              onClick={() => {
                setSelectedScenarioIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-glow font-semibold"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Slider Canvas & Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Interactive Comparison Window (8 cols) */}
        <div className="lg:col-span-8 flex flex-col">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[360px] sm:h-[460px] md:h-[500px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-white/10 shadow-2xl bg-black group"
          >
            {/* Background / Right Image: AFTER (Pro) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={scenario.afterImage}
                alt={scenario.afterLabel}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
              />
              {/* After Badge */}
              <div className="absolute top-4 right-4 z-10 bg-amber-500/90 backdrop-blur-md text-black font-bold text-xs uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 fill-black" />
                <span>{scenario.afterLabel}</span>
              </div>
            </div>

            {/* Foreground / Left Image: BEFORE (Amateur / Auto) clipped */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden will-change-[clip-path]"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <Image
                src={scenario.beforeImage}
                alt={scenario.beforeLabel}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
              />
              {/* Before Badge */}
              <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md text-zinc-300 font-medium text-xs uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                <span>{scenario.beforeLabel}</span>
              </div>
            </div>

            {/* Camera Viewfinder HUD Overlay */}
            {showHud && (
              <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
                {/* 4 Viewfinder Corner Brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/40 pointer-events-none" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/40 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/40 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/40 pointer-events-none" />

                {/* Center Crosshair (Simulated Target) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 pointer-events-none flex items-center justify-center">
                  <div className="w-8 h-8 border border-amber-400/60 rounded-md relative animate-pulse-slow">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-amber-400" />
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-amber-400" />
                    <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-0.5 h-1.5 bg-amber-400" />
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-0.5 h-1.5 bg-amber-400" />
                  </div>
                </div>

                {/* Alt Kamera Canlı Vizör Çubuğu */}
                <div className="mt-auto w-full flex items-center justify-between text-[11px] sm:text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 font-bold tracking-wider">AE/AF KİLİTLİ</span>
                    <span className="text-zinc-400 hidden sm:inline">|</span>
                    <span className="hidden sm:inline text-zinc-300">{scenario.appliedSettings.lens}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-cyan-300">
                    <span>{scenario.appliedSettings.shutter}</span>
                    <span>{scenario.appliedSettings.iso}</span>
                    <span className="text-amber-300 font-bold">{scenario.appliedSettings.ev}</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-zinc-200">RAW (HAM)</span>
                  </div>
                </div>
              </div>
            )}

            {/* The Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Central Drag Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-2xl border-2 border-amber-400 cursor-ew-resize group-hover:scale-110 transition-transform">
                <SlidersHorizontal className="w-5 h-5 text-zinc-900" />
              </div>
            </div>

            {/* Instruction Banner at Bottom */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="text-[11px] sm:text-xs text-white/90 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                ↔ Sürükleyerek Öncesi / Sonrası Farkını İnceleyin
              </span>
            </div>
          </div>
        </div>

        {/* Live Analysis & Settings Breakdown Card (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-3xl bg-camera-card/90 backdrop-blur-xl border border-camera-border shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                {scenario.category}
              </span>
              <button
                onClick={() => setShowHud(!showHud)}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                title="Kamera Vizör Göstergelerini Aç/Kapat"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Vizör {showHud ? "Açık" : "Kapalı"}</span>
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {scenario.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              {scenario.description}
            </p>

            {/* Key Comparison Points */}
            <div className="space-y-3 mb-6">
              <div className="p-3 rounded-2xl bg-red-950/20 border border-red-500/20 flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs font-bold">✕</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-red-300">Standart Bas-Çek Hatası</div>
                  <div className="text-xs text-zinc-400 mt-0.5">{scenario.beforeDetails}</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-500/20 flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-amber-300">ShutterCraft Reçetesi</div>
                  <div className="text-xs text-zinc-400 mt-0.5">{scenario.afterDetails}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Settings Matrix */}
          <div className="pt-4 border-t border-camera-border/80">
            <div className="text-xs font-medium text-zinc-400 mb-2.5 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Uygulanan Kamera Ayarları</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-camera-darkest/70 border border-white/5">
                <span className="text-[10px] text-zinc-500 block uppercase">Lens / Optik</span>
                <span className="font-medium text-white text-xs">{scenario.appliedSettings.lens}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-camera-darkest/70 border border-white/5">
                <span className="text-[10px] text-zinc-500 block uppercase">Dekanşör</span>
                <span className="font-mono text-cyan-400 text-xs">{scenario.appliedSettings.shutter}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-camera-darkest/70 border border-white/5">
                <span className="text-[10px] text-zinc-500 block uppercase">Hassasiyet</span>
                <span className="font-mono text-cyan-400 text-xs">{scenario.appliedSettings.iso}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-camera-darkest/70 border border-white/5">
                <span className="text-[10px] text-zinc-500 block uppercase">Pozlama (EV)</span>
                <span className="font-mono text-amber-400 text-xs font-bold">{scenario.appliedSettings.ev}</span>
              </div>
            </div>

            <div className="mt-3 text-[11px] text-zinc-400 italic flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">★ Sır:</span>
              <span>{scenario.appliedSettings.keyTechnique}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
