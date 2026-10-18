"use client";

import React, { useState } from "react";
import { deviceShortcuts } from "@/data/deviceShortcuts";
import { Smartphone, Apple, CheckCircle2, Lightbulb, Zap, Moon, Camera, Sliders, Grid } from "lucide-react";

export function DeviceShortcuts() {
  const [selectedOs, setSelectedOs] = useState<"ios" | "android">("ios");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");

  const categories = ["Tümü", "Odak & Pozlama", "Hızlı Çekim", "RAW & Kalite", "Gece Modu", "Pro Mod"];

  const filteredShortcuts = deviceShortcuts.filter((item) => {
    const osMatch = item.os === selectedOs;
    const catMatch = selectedCategory === "Tümü" || item.category === selectedCategory;
    return osMatch && catMatch;
  });

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl bg-camera-card/90 backdrop-blur-2xl border border-camera-border p-6 sm:p-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-camera-border">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-400 mb-1">
            <Smartphone className="w-4 h-4" />
            <span>Kamera Arayüzü Kısayolları</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Cihazına Özel Gizli Kamera Kısayolları
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            iOS ve Android kamera yazılımlarının saklı özelliklerini ve jestlerini keşfedin.
          </p>
        </div>

        {/* OS Selector Tabs */}
        <div className="flex items-center p-1.5 bg-camera-darkest rounded-2xl border border-camera-border shrink-0 self-start md:self-auto">
          <button
            onClick={() => setSelectedOs("ios")}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              selectedOs === "ios"
                ? "bg-white text-black shadow-lg"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Apple className="w-4 h-4" />
            <span>Apple iPhone (iOS)</span>
          </button>

          <button
            onClick={() => setSelectedOs("android")}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              selectedOs === "android"
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-lg font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Android (Samsung / Xiaomi)</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                : "bg-white/5 text-zinc-400 hover:text-white border border-transparent hover:border-white/10"
            }`}
          >
            {cat === "Tümü" ? "Tüm Kısayollar" : cat}
          </button>
        ))}
      </div>

      {/* Shortcuts Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredShortcuts.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-camera-darkest/70 border border-camera-border hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400">
                  {item.category}
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">
                  {item.testedDevices}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>

              {/* Step by step instructions */}
              <div className="space-y-2 mb-6">
                {item.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="w-5 h-5 rounded-full bg-white/10 text-white font-mono flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secret Tip Callout */}
            <div className="pt-4 border-t border-white/5">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5 text-xs text-amber-200">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-300 block mb-0.5">Profesyonel İpucu:</span>
                  <span>{item.shortcutTip}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
