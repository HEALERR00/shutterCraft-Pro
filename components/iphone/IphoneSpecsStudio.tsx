"use client";

import React, { useState, useMemo } from "react";
import { iphoneSpecsData, samsungSpecsData, allDevices } from "@/data/devices";
import { DeviceModelSpec, DeviceBrand, ShootingCategoryKey } from "@/types";
import { DeviceBackViewVisual } from "./DeviceBackViewVisual";
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
  Video,
  Award,
  Layers,
  Search,
  CheckCircle2,
  Flame,
  Aperture,
  Sliders,
  Filter,
} from "lucide-react";

export function IphoneSpecsStudio() {
  const [activeBrand, setActiveBrand] = useState<DeviceBrand>("apple");
  const [selectedModelId, setSelectedModelId] = useState<string>("iphone-16-pro");
  const [activeCategory, setActiveCategory] = useState<ShootingCategoryKey>("portrait");
  const [filterType, setFilterType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Brand models
  const brandModels: DeviceModelSpec[] = useMemo(() => {
    return activeBrand === "apple" ? iphoneSpecsData : samsungSpecsData;
  }, [activeBrand]);

  // Handle brand switch
  const handleBrandSwitch = (brand: DeviceBrand) => {
    setActiveBrand(brand);
    setFilterType("all");
    setSearchQuery("");
    if (brand === "apple") {
      setSelectedModelId("iphone-16-pro");
    } else {
      setSelectedModelId("samsung-s24-ultra");
    }
  };

  // Filter models
  const filteredModels = useMemo(() => {
    return brandModels.filter((m) => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = m.name.toLowerCase().includes(query);
        const matchesSeries = m.series.toLowerCase().includes(query);
        const matchesBadge = m.badge.toLowerCase().includes(query);
        const matchesBest = m.bestShootingType.toLowerCase().includes(query);
        if (!matchesName && !matchesSeries && !matchesBadge && !matchesBest) {
          return false;
        }
      }

      // Category / Type filter
      if (filterType === "all") return true;

      if (activeBrand === "apple") {
        if (filterType === "pro") return m.isPro;
        if (filterType === "standard") return !m.isPro && !m.id.includes("se") && !m.id.includes("air") && !m.id.endsWith("e");
        if (filterType === "special") return m.id.includes("se") || m.id.includes("air") || m.id.endsWith("e");
      } else {
        // Samsung filters
        if (filterType === "ultra") return m.id.includes("ultra");
        if (filterType === "standard") return !m.id.includes("ultra") && !m.id.includes("fe") && !m.id.includes("edge");
        if (filterType === "fe-edge") return m.id.includes("fe") || m.id.includes("edge");
      }

      // Series filter
      if (filterType.startsWith("series-")) {
        const targetSeries = filterType.replace("series-", "");
        return m.series.toLowerCase().includes(targetSeries.toLowerCase());
      }

      return true;
    });
  }, [brandModels, filterType, searchQuery, activeBrand]);

  // Current selected model
  const currentModel: DeviceModelSpec = useMemo(() => {
    const found = allDevices.find((m) => m.id === selectedModelId);
    if (found) return found;
    return brandModels[0] || iphoneSpecsData[0];
  }, [selectedModelId, brandModels]);

  // Category definitions
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
    { key: "video", label: "Video & Sinematik", icon: Video, accentColor: "text-purple-400" },
  ];

  const activeRecipe = currentModel.recipes[activeCategory] || currentModel.recipes.portrait;

  // Average Score
  const averageScore = useMemo(() => {
    const s = currentModel.evaluation.scoreOverview;
    const scores = [s.night, s.portrait, s.street, s.macro, s.landscape];
    if (s.video) scores.push(s.video);
    const sum = scores.reduce((acc, val) => acc + val, 0);
    return (sum / scores.length).toFixed(1);
  }, [currentModel]);

  return (
    <section id="iphone-studio" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-camera-darkest overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 ${
          activeBrand === "apple" ? "bg-amber-500/10" : "bg-cyan-500/10"
        }`}
      />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono mb-4 shadow-sm transition-colors ${
              activeBrand === "apple"
                ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                : "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
            }`}
          >
            <Smartphone className="w-4 h-4 animate-pulse" />
            <span>Cihaz & Sensör Stüdyosu (41 Telefon Modeli Destekli)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Cihazınızın Sensör Sınırlarını Keşfedin
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            iPhone 12 - 18 Pro Max ve Samsung Galaxy S21 - S26 Ultra serisi için optimize edilmiş optik rehber, sensör analizi, şeffaf arka yüzey görseli ve profesyonel çekim reçeteleri.
          </p>
        </div>

        {/* 1. BRAND SWITCHER TABS (Apple vs Samsung) */}
        <div className="flex items-center justify-center mb-8">
          <div className="p-1.5 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-xl flex items-center gap-2 shadow-2xl">
            <button
              onClick={() => handleBrandSwitch("apple")}
              className={`px-5 sm:px-8 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer ${
                activeBrand === "apple"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-glow font-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-base">🍎</span>
              <span>Apple iPhone ({iphoneSpecsData.length} Model)</span>
            </button>

            <button
              onClick={() => handleBrandSwitch("samsung")}
              className={`px-5 sm:px-8 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer ${
                activeBrand === "samsung"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-cyanGlow font-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-base">🌌</span>
              <span>Samsung Galaxy S ({samsungSpecsData.length} Model)</span>
            </button>
          </div>
        </div>

        {/* 2. SEARCH & SUB-FILTERS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          {/* Sub-Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {activeBrand === "apple" ? (
              <>
                <button
                  onClick={() => setFilterType("all")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    filterType === "all"
                      ? "bg-white text-black font-bold shadow-md"
                      : "bg-camera-card text-zinc-400 hover:text-white border border-white/5"
                  }`}
                >
                  Tümü ({iphoneSpecsData.length})
                </button>
                <button
                  onClick={() => setFilterType("pro")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    filterType === "pro"
                      ? "bg-amber-500 text-black font-bold shadow-glow"
                      : "bg-camera-card text-zinc-400 hover:text-white border border-white/5"
                  }`}
                >
                  Pro & Pro Max
                </button>
                <button
                  onClick={() => setFilterType("standard")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    filterType === "standard"
                      ? "bg-amber-500/80 text-black font-bold"
                      : "bg-camera-card text-zinc-400 hover:text-white border border-white/5"
                  }`}
                >
                  Standart & Plus
                </button>
                <button
                  onClick={() => setFilterType("special")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    filterType === "special"
                      ? "bg-amber-500/80 text-black font-bold"
                      : "bg-camera-card text-zinc-400 hover:text-white border border-white/5"
                  }`}
                >
                  Air & e / SE Serisi
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setFilterType("all")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    filterType === "all"
                      ? "bg-white text-black font-bold shadow-md"
                      : "bg-camera-card text-zinc-400 hover:text-white border border-white/5"
                  }`}
                >
                  Tümü ({samsungSpecsData.length})
                </button>
                <button
                  onClick={() => setFilterType("ultra")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    filterType === "ultra"
                      ? "bg-cyan-500 text-black font-bold shadow-cyanGlow"
                      : "bg-camera-card text-zinc-400 hover:text-white border border-white/5"
                  }`}
                >
                  Ultra (100x Zoom & 200MP)
                </button>
                <button
                  onClick={() => setFilterType("standard")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    filterType === "standard"
                      ? "bg-cyan-500/80 text-black font-bold"
                      : "bg-camera-card text-zinc-400 hover:text-white border border-white/5"
                  }`}
                >
                  Standart & Plus
                </button>
                <button
                  onClick={() => setFilterType("fe-edge")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    filterType === "fe-edge"
                      ? "bg-cyan-500/80 text-black font-bold"
                      : "bg-camera-card text-zinc-400 hover:text-white border border-white/5"
                  }`}
                >
                  FE & Edge Serisi
                </button>
              </>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`${activeBrand === "apple" ? "iPhone" : "Galaxy S"} modeli ara...`}
              className="w-full bg-camera-card border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-all font-mono"
            />
          </div>
        </div>

        {/* 3. MODEL SELECTION GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 mb-10 max-h-72 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10">
          {filteredModels.map((model) => {
            const isSelected = model.id === currentModel.id;
            return (
              <button
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                className={`p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? activeBrand === "apple"
                      ? "bg-gradient-to-b from-amber-500/20 to-camera-card border-amber-500 shadow-glow"
                      : "bg-gradient-to-b from-cyan-500/20 to-camera-card border-cyan-400 shadow-cyanGlow"
                    : "bg-camera-card/80 border-white/5 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-semibold ${
                        model.isPro
                          ? activeBrand === "apple"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                            : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {model.series}
                    </span>
                    {isSelected && (
                      <span
                        className={`w-2 h-2 rounded-full animate-ping ${
                          activeBrand === "apple" ? "bg-amber-400" : "bg-cyan-400"
                        }`}
                      />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-tight line-clamp-1">
                    {model.name}
                  </div>
                </div>
                <div className="text-[10px] text-zinc-400 mt-2 font-mono truncate">
                  {model.badge.split("&")[0].trim()}
                </div>
              </button>
            );
          })}
        </div>

        {/* 4. SELECTED MODEL SHOWCASE CARD (Visual + Specs + Performance) */}
        <div className="rounded-3xl bg-camera-card/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-white/10">
            {/* Left 4 Cols: Realistic Back-View Device Visual */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-3 px-2">
                <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5 font-semibold">
                  <Aperture className={`w-3.5 h-3.5 ${activeBrand === "apple" ? "text-amber-400" : "text-cyan-400"}`} />
                  <span>Şeffaf Arka Yüzey & Optik Modül</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                  {currentModel.releaseYear}
                </span>
              </div>

              {/* The Back-View Component */}
              <DeviceBackViewVisual device={currentModel} />
            </div>

            {/* Right 8 Cols: Title, Hardware & Score Radar */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span
                    className={`px-2.5 py-0.5 rounded-lg border text-xs font-mono font-bold ${
                      activeBrand === "apple"
                        ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                        : "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                    }`}
                  >
                    {currentModel.series}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-white/10 text-white text-xs font-mono font-semibold">
                    {currentModel.badge}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-zinc-800 text-zinc-300 text-xs font-mono">
                    {currentModel.generation}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {currentModel.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 max-w-2xl leading-relaxed">
                  {currentModel.evaluation.verdictBadge} • {currentModel.hardware.mainSensor}
                </p>

                {/* BEST SHOOTING TYPE & RECOMMENDED SETTINGS HIGHLIGHT */}
                <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-black/40 to-cyan-500/10 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5 mb-1">
                        <Flame className="w-3.5 h-3.5" />
                        <span>En Performanslı Çekim Türü</span>
                      </div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{currentModel.bestShootingType}</span>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1">
                        Önerilen Lens / Kamera Ayarı
                      </div>
                      <div className="text-xs font-mono text-zinc-200 bg-black/60 px-2.5 py-1 rounded-lg border border-white/10 inline-block">
                        {currentModel.recommendedSetting}
                      </div>
                    </div>
                  </div>

                  {currentModel.evaluation.bestShootingScenarioDetails && (
                    <p className="text-xs text-zinc-300 mt-2.5 pt-2.5 border-t border-white/5 leading-relaxed">
                      💡 {currentModel.evaluation.bestShootingScenarioDetails}
                    </p>
                  )}
                </div>
              </div>

              {/* Performance Radar & Hardware Matrix */}
              <div className="mt-6">
                {/* Score Overview */}
                <div className="bg-black/50 border border-white/5 rounded-2xl p-4">
                  <div className="text-[11px] font-mono text-zinc-400 mb-2.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      Kamera Performans Puanı ({averageScore} / 10)
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">Sensör & Optik Değerlendirme</span>
                  </div>

                  <div className="grid grid-cols-6 gap-1.5 text-center">
                    <div>
                      <div className="h-10 bg-white/5 rounded flex flex-col justify-end p-0.5">
                        <div
                          className="bg-indigo-500 rounded-sm w-full transition-all duration-500"
                          style={{ height: `${currentModel.evaluation.scoreOverview.night * 10}%` }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-400 mt-1 block">Gece</span>
                    </div>
                    <div>
                      <div className="h-10 bg-white/5 rounded flex flex-col justify-end p-0.5">
                        <div
                          className="bg-amber-500 rounded-sm w-full transition-all duration-500"
                          style={{ height: `${currentModel.evaluation.scoreOverview.portrait * 10}%` }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-400 mt-1 block">Portre</span>
                    </div>
                    <div>
                      <div className="h-10 bg-white/5 rounded flex flex-col justify-end p-0.5">
                        <div
                          className="bg-cyan-500 rounded-sm w-full transition-all duration-500"
                          style={{ height: `${currentModel.evaluation.scoreOverview.street * 10}%` }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-400 mt-1 block">Sokak</span>
                    </div>
                    <div>
                      <div className="h-10 bg-white/5 rounded flex flex-col justify-end p-0.5">
                        <div
                          className="bg-rose-500 rounded-sm w-full transition-all duration-500"
                          style={{ height: `${currentModel.evaluation.scoreOverview.macro * 10}%` }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-400 mt-1 block">Makro</span>
                    </div>
                    <div>
                      <div className="h-10 bg-white/5 rounded flex flex-col justify-end p-0.5">
                        <div
                          className="bg-emerald-500 rounded-sm w-full transition-all duration-500"
                          style={{ height: `${currentModel.evaluation.scoreOverview.landscape * 10}%` }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-400 mt-1 block">Manzara</span>
                    </div>
                    <div>
                      <div className="h-10 bg-white/5 rounded flex flex-col justify-end p-0.5">
                        <div
                          className="bg-purple-500 rounded-sm w-full transition-all duration-500"
                          style={{ height: `${(currentModel.evaluation.scoreOverview.video || 8.5) * 10}%` }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-400 mt-1 block">Video</span>
                    </div>
                  </div>
                </div>

                {/* Quick Hardware Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[9px] text-zinc-500 block">OPTİK ZOOM</span>
                    <span className="text-amber-400 font-semibold truncate block">
                      {currentModel.hardware.zoomCapabilities}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[9px] text-zinc-500 block">HAM ÇEKİM (RAW)</span>
                    <span className="text-cyan-400 font-semibold truncate block">
                      {currentModel.hardware.rawSupport}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[9px] text-zinc-500 block">MAKRO</span>
                    <span className="text-emerald-400 font-semibold truncate block">
                      {currentModel.hardware.macroSupport ? "✓ 2cm Süper Makro" : "✗ Yok"}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[9px] text-zinc-500 block">ÖNE ÇIKAN TEKNOLOJİ</span>
                    <span className="text-white font-semibold truncate block">
                      {currentModel.topFeatureBadge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strength & Weakness Verdict Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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
        </div>

        {/* 5. SIX SCENARIO TABS & MODEL-SPECIFIC RECIPES */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>{currentModel.name} İçin Özel Çekim Reçeteleri</span>
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                  6 Senaryo
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Bu telefonun donanımına ve sensörüne göre optimize edilmiş özel kamera ayarları ve profesyonel ipuçları.
              </p>
            </div>

            {/* Category Nav Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-camera-card rounded-2xl border border-white/10">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isActive
                        ? activeBrand === "apple"
                          ? "bg-amber-500 text-black shadow-glow font-bold"
                          : "bg-cyan-500 text-black shadow-cyanGlow font-bold"
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
              <div
                className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${
                  activeBrand === "apple"
                    ? "from-amber-500 via-orange-400 to-amber-600"
                    : "from-cyan-400 via-blue-500 to-indigo-500"
                }`}
              />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <div
                    className={`text-xs font-mono uppercase tracking-widest mb-1.5 flex items-center gap-1.5 font-bold ${
                      activeBrand === "apple" ? "text-amber-400" : "text-cyan-400"
                    }`}
                  >
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

                <div
                  className={`border rounded-2xl p-4 lg:max-w-xs shrink-0 ${
                    activeBrand === "apple"
                      ? "bg-amber-500/10 border-amber-500/20"
                      : "bg-cyan-500/10 border-cyan-500/20"
                  }`}
                >
                  <div
                    className={`text-[11px] font-mono uppercase font-bold mb-1 flex items-center gap-1 ${
                      activeBrand === "apple" ? "text-amber-400" : "text-cyan-400"
                    }`}
                  >
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
