"use client";

import React, { useState } from "react";
import { iphoneSpecsData } from "@/data/iphoneSpecs";
import { IphoneModelSpec, ShootingCategoryKey } from "@/types";
import {
  Smartphone,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Moon,
  Users,
  Compass,
  Mountain,
  UtensilsCrossed,
  ZoomIn,
  Camera,
  Layers,
  Sliders,
  CheckCircle2,
  ChevronRight,
  Flame,
  Award,
  CircleDot,
  Fingerprint,
} from "lucide-react";

export function IphoneSpecsStudio() {
  const [selectedModelId, setSelectedModelId] = useState<string>("iphone-16-pro");
  const [activeCategory, setActiveCategory] = useState<ShootingCategoryKey>("portrait");
  const [filterType, setFilterType] = useState<"all" | "pro" | "standard">("all");

  const currentModel: IphoneModelSpec =
    iphoneSpecsData.find((m) => m.id === selectedModelId) || iphoneSpecsData[0];

  const filteredModels = iphoneSpecsData.filter((m) => {
    if (filterType === "pro") return m.isPro;
    if (filterType === "standard") return !m.isPro;
    return true;
  });

  const categories: {
    key: ShootingCategoryKey;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }[] = [
    { key: "portrait", label: "Portre & İnsan", icon: Users, accentColor: "text-amber-400" },
    { key: "night", label: "Gece & Düşük Işık", icon: Moon, accentColor: "text-indigo-400" },
    { key: "street", label: "Sokak & Şehir", icon: Compass, accentColor: "text-cyan-400" },
    { key: "landscape", label: "Manzara & Doğa", icon: Mountain, accentColor: "text-emerald-400" },
    { key: "foodMacro", label: "Yemek & Makro", icon: UtensilsCrossed, accentColor: "text-rose-400" },
  ];

  const activeRecipe = currentModel.recipes[activeCategory];

  return (
    <section id="iphone-studio" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-camera-darkest">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-4 shadow-sm">
            <Smartphone className="w-4 h-4 animate-pulse" />
            <span>iPhone Modeline Özel Çekim Stüdyosu (12 - 18 Pro Max)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Cihazınızın Sensör Sınırlarını Keşfedin
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Her iPhone aynı değildir. Sahip olduğunuz modelin sensör boyutu, LiDAR tarayıcısı, 48MP Quad-Pixel yapısı veya Eylem Düğmesi gibi donanım avantajlarını kullanarak en iyi kareyi yakalayın.
          </p>
        </div>

        {/* Model Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setFilterType("all")}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filterType === "all"
                ? "bg-white text-black shadow-md font-bold"
                : "bg-camera-card text-zinc-400 hover:text-white border border-white/5"
            }`}
          >
            Tüm Modeller ({iphoneSpecsData.length})
          </button>
          <button
            onClick={() => setFilterType("pro")}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filterType === "pro"
                ? "bg-amber-500 text-black shadow-glow font-bold"
                : "bg-camera-card text-zinc-400 hover:text-white border border-white/5"
            }`}
          >
            Sadece Pro & Pro Max
          </button>
          <button
            onClick={() => setFilterType("standard")}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filterType === "standard"
                ? "bg-cyan-500 text-black shadow-cyanGlow font-bold"
                : "bg-camera-card text-zinc-400 hover:text-white border border-white/5"
            }`}
          >
            Standart & Plus Modeller
          </button>
        </div>

        {/* Model Selector Horizontal Scroll / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 mb-10 overflow-x-auto pb-2">
          {filteredModels.map((model) => {
            const isSelected = model.id === currentModel.id;
            return (
              <button
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-b from-amber-500/20 to-camera-card border-amber-500 shadow-glow"
                    : "bg-camera-card/80 border-white/5 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        model.isPro
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {model.generation}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-tight line-clamp-1">
                    {model.name}
                  </div>
                </div>
                <div className="text-[10px] text-zinc-400 mt-2 font-mono truncate">
                  {model.hardware.zoomCapabilities}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Model Showcase Card */}
        <div className="rounded-3xl bg-camera-card/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 shadow-2xl mb-12">
          {/* Top Model Badge & Evaluation Overview */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
                  {currentModel.series}
                </span>
                <span className="px-2.5 py-0.5 rounded-lg bg-white/10 text-white text-xs font-mono">
                  {currentModel.badge}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  Çıkış: {currentModel.releaseYear}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {currentModel.name}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
                {currentModel.evaluation.verdictBadge} • {currentModel.hardware.mainSensor}
              </p>
            </div>

            {/* Performance Radar / Score Bars */}
            <div className="bg-black/40 border border-white/5 rounded-2xl p-4 min-w-[260px]">
              <div className="text-[11px] font-mono text-zinc-400 mb-2.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  Kamera Performans Puanı
                </span>
                <span className="text-xs font-bold text-white">
                  {(
                    (currentModel.evaluation.scoreOverview.night +
                      currentModel.evaluation.scoreOverview.portrait +
                      currentModel.evaluation.scoreOverview.street +
                      currentModel.evaluation.scoreOverview.macro +
                      currentModel.evaluation.scoreOverview.landscape) /
                    5
                  ).toFixed(1)}{" "}
                  / 10
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1.5 text-center">
                <div title="Gece">
                  <div className="h-10 bg-white/5 rounded flex flex-col justify-end p-0.5">
                    <div
                      className="bg-indigo-500 rounded-sm w-full transition-all duration-500"
                      style={{ height: `${currentModel.evaluation.scoreOverview.night * 10}%` }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 mt-1 block">Gece</span>
                </div>
                <div title="Portre">
                  <div className="h-10 bg-white/5 rounded flex flex-col justify-end p-0.5">
                    <div
                      className="bg-amber-500 rounded-sm w-full transition-all duration-500"
                      style={{ height: `${currentModel.evaluation.scoreOverview.portrait * 10}%` }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 mt-1 block">Portre</span>
                </div>
                <div title="Sokak">
                  <div className="h-10 bg-white/5 rounded flex flex-col justify-end p-0.5">
                    <div
                      className="bg-cyan-500 rounded-sm w-full transition-all duration-500"
                      style={{ height: `${currentModel.evaluation.scoreOverview.street * 10}%` }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 mt-1 block">Sokak</span>
                </div>
                <div title="Makro">
                  <div className="h-10 bg-white/5 rounded flex flex-col justify-end p-0.5">
                    <div
                      className="bg-rose-500 rounded-sm w-full transition-all duration-500"
                      style={{ height: `${currentModel.evaluation.scoreOverview.macro * 10}%` }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 mt-1 block">Makro</span>
                </div>
                <div title="Manzara">
                  <div className="h-10 bg-white/5 rounded flex flex-col justify-end p-0.5">
                    <div
                      className="bg-emerald-500 rounded-sm w-full transition-all duration-500"
                      style={{ height: `${currentModel.evaluation.scoreOverview.landscape * 10}%` }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 mt-1 block">Manzara</span>
                </div>
              </div>
            </div>
          </div>

          {/* Strength & Weakness Verdict Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* Strongest */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-0.5">
                  ★ En Güçlü Olduğu Yanı (Uzman Görüşü)
                </span>
                <p className="text-xs sm:text-sm text-zinc-200 leading-snug">
                  {currentModel.evaluation.strongestSide}
                </p>
              </div>
            </div>

            {/* Weakest */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-0.5">
                  ⚠ Sınırlı / Zayıf Olduğu Yanı & Dikkat Edilmesi Gereken
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-snug">
                  {currentModel.evaluation.weakestSide}
                </p>
              </div>
            </div>
          </div>

          {/* Hardware Specs Quick Matrix */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <div className="text-xs font-mono text-zinc-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Donanım & Optik Yapılandırma Özeti</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] text-zinc-500 block">DİYAFRAM</span>
                <span className="text-white font-semibold truncate block">
                  {currentModel.hardware.apertures}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] text-zinc-500 block">OPTİK ZOOM</span>
                <span className="text-amber-400 font-semibold truncate block">
                  {currentModel.hardware.zoomCapabilities}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] text-zinc-500 block">LiDAR SENSÖRÜ</span>
                <span
                  className={`font-semibold ${
                    currentModel.hardware.lidar ? "text-emerald-400" : "text-zinc-500"
                  }`}
                >
                  {currentModel.hardware.lidar ? "✓ Var (Kızılötesi)" : "✗ Yok"}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] text-zinc-500 block">OTOMATİK MAKRO</span>
                <span
                  className={`font-semibold ${
                    currentModel.hardware.macroSupport ? "text-emerald-400" : "text-zinc-500"
                  }`}
                >
                  {currentModel.hardware.macroSupport ? "✓ 2cm Süper Makro" : "✗ Yok (2x Kırpma)"}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] text-zinc-500 block">HAM ÇEKİM (RAW)</span>
                <span className="text-cyan-400 font-semibold truncate block">
                  {currentModel.hardware.rawSupport}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] text-zinc-500 block">FİZİKİ TUŞLAR</span>
                <span className="text-white font-semibold truncate block">
                  {currentModel.hardware.cameraControl
                    ? "Kamera Denetimi"
                    : currentModel.hardware.actionButton
                    ? "Eylem Düğmesi"
                    : "Standart Tuşlar"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 CATEGORY TABS & MODEL-SPECIFIC RECIPES */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>{currentModel.name} İçin Özel Çekim Reçeteleri</span>
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                  5 Çekim Türü
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Bu telefonun donanımına göre optimize edilmiş özel kamera ayarları ve profesyonel ipuçları.
              </p>
            </div>

            {/* Category Nav Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-camera-card rounded-2xl border border-white/10">
              {categories.map((cat: any) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                      isActive
                        ? "bg-amber-500 text-black shadow-glow font-bold"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE CATEGORY RECIPE CARD */}
          {activeRecipe && (
            <div className="rounded-3xl bg-camera-card/95 border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Top Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-cyan-400 to-indigo-500" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5 font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {currentModel.name} • {activeRecipe.categoryName}
                    </span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeRecipe.title}
                  </h4>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-cyan-300">
                      🎯 Lens: {activeRecipe.recommendedLens}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-amber-300">
                      ⚙️ Değerler: {activeRecipe.isoShutterEv}
                    </span>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 lg:max-w-xs shrink-0">
                  <div className="text-[11px] font-mono uppercase text-amber-400 font-bold mb-1 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Bu Modeldeki Donanım Avantajı</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {activeRecipe.hardwareAdvantage}
                  </p>
                </div>
              </div>

              {/* 3 Step Pillars: How To, Secret Trick, Common Trap */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                {/* 1. Step by Step */}
                <div className="p-5 rounded-2xl bg-camera-darkest/90 border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center mb-3">
                      1
                    </div>
                    <h5 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2 font-bold">
                      Nasıl Uygulanır? (Adım Adım)
                    </h5>
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      {activeRecipe.stepByStepTip}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-zinc-500">
                    Kamera uygulamasında sırayla uygulayın.
                  </div>
                </div>

                {/* 2. Secret Trick */}
                <div className="p-5 rounded-2xl bg-camera-darkest/90 border border-amber-500/20 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-bl-3xl" />
                  <div>
                    <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-400 font-mono text-xs font-bold flex items-center justify-center mb-3">
                      ★
                    </div>
                    <h5 className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-2 font-bold">
                      Fotoğrafçının Gizli Hilesi
                    </h5>
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      {activeRecipe.secretTrick}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-amber-400/70 font-mono">
                    Bu modelin sensör sınırlarını zorlar.
                  </div>
                </div>

                {/* 3. Common Trap */}
                <div className="p-5 rounded-2xl bg-camera-darkest/90 border border-rose-500/20 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-xl bg-rose-500/20 text-rose-400 font-mono text-xs font-bold flex items-center justify-center mb-3">
                      ✕
                    </div>
                    <h5 className="text-xs font-mono uppercase text-rose-400 tracking-wider mb-2 font-bold">
                      Kaçınılması Gereken Hata
                    </h5>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {activeRecipe.commonTrap}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-rose-400/70">
                    Fotoğrafı en çok bozan yaygın alışkanlık.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
