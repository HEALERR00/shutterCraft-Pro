"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { GuidesSection } from "@/components/guides/GuidesSection";
import { ExposureSimulator } from "@/components/simulators/ExposureSimulator";
import { CompositionSimulator } from "@/components/simulators/CompositionSimulator";
import { DeviceShortcuts } from "@/components/simulators/DeviceShortcuts";
import { ShotRecipeWizard } from "@/components/assistant/ShotRecipeWizard";
import { IphoneSpecsStudio } from "@/components/iphone/IphoneSpecsStudio";
import { ProCheatSheet } from "@/components/glossary/ProCheatSheet";
import { Sliders, Grid, Smartphone, Sparkles, Layers } from "lucide-react";

export default function Home() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | null>(null);
  const [activeSimulatorTab, setActiveSimulatorTab] = useState<"exposure" | "composition" | "device">("exposure");

  const scrollToGuides = (categoryId: string) => {
    setActiveCategoryFilter(categoryId);
    const el = document.getElementById("guides");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSimulators = () => {
    const el = document.getElementById("simulators-hub");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWizard = () => {
    const el = document.getElementById("wizard");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-camera-darkest text-zinc-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-300">
      {/* Top Fixed Navigation */}
      <Navbar onOpenWizard={scrollToWizard} />

      {/* Main Flow */}
      <main className="flex-1 flex flex-col">
        {/* 1. HERO SECTION */}
        <HeroSection
          onSelectCategory={scrollToGuides}
          onOpenSimulator={scrollToSimulators}
        />

        {/* 2. GUIDES & SHOOTING MODES SECTION */}
        <GuidesSection
          activeCategoryFilter={activeCategoryFilter}
          onClearFilter={() => setActiveCategoryFilter(null)}
        />

        {/* 3. INTERACTIVE SIMULATORS & WORKSHOP HUB */}
        <section id="simulators-hub" className="py-20 px-4 sm:px-6 lg:px-8 bg-camera-dark/60 border-y border-camera-border relative">
          <div className="max-w-6xl mx-auto mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>Modül 03 • Canlı İnteraktif Simülatörler</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Fotoğrafçılık Laboratuvarı & Simülatörler
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl mx-auto">
              Teoriyi ezberlemeyin, canlı olarak deneyimleyin. Pozlama ayarlarını kaydırın, kompozisyon ızgaralarını açın ve cihazınızın gizli modlarını keşfedin.
            </p>

            {/* Hub Tab Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveSimulatorTab("exposure")}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  activeSimulatorTab === "exposure"
                    ? "bg-amber-500 text-black shadow-glow font-bold"
                    : "bg-camera-card text-zinc-400 hover:text-white border border-camera-border"
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>1. Pozlama Üçgeni Simülatörü</span>
              </button>

              <button
                onClick={() => setActiveSimulatorTab("composition")}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  activeSimulatorTab === "composition"
                    ? "bg-cyan-500 text-black shadow-cyanGlow font-bold"
                    : "bg-camera-card text-zinc-400 hover:text-white border border-camera-border"
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>2. Grid & Kompozisyon Stüdyosu</span>
              </button>

              <button
                onClick={() => setActiveSimulatorTab("device")}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  activeSimulatorTab === "device"
                    ? "bg-white text-black shadow-lg font-bold"
                    : "bg-camera-card text-zinc-400 hover:text-white border border-camera-border"
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>3. Cihaz Arayüz Kısayolları (iOS/Android)</span>
              </button>
            </div>
          </div>

          {/* Active Tool Render */}
          <div className="max-w-6xl mx-auto">
            {activeSimulatorTab === "exposure" && (
              <div id="exposure-simulator">
                <ExposureSimulator />
              </div>
            )}
            {activeSimulatorTab === "composition" && (
              <div id="composition-studio">
                <CompositionSimulator />
              </div>
            )}
            {activeSimulatorTab === "device" && (
              <div id="device-shortcuts">
                <DeviceShortcuts />
              </div>
            )}
          </div>
        </section>

        {/* 4. iPHONE MODEL-SPECIFIC CAMERA & SHOOTING STUDIO */}
        <IphoneSpecsStudio />

        {/* 5. "NE ÇEKMEK İSTİYORSUN?" MINI QUIZ & INSTANT RECIPE */}
        <ShotRecipeWizard />

        {/* 6. CAMERA GLOSSARY & CHEAT SHEET */}
        <ProCheatSheet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
