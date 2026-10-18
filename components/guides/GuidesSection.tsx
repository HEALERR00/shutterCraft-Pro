"use client";

import React, { useState } from "react";
import { guidesData } from "@/data/guides";
import { GuideCard } from "./GuideCard";
import { GuideDetailModal } from "./GuideDetailModal";
import { GuideItem } from "@/types";
import { BookOpen, Sparkles, Filter } from "lucide-react";

interface GuidesSectionProps {
  activeCategoryFilter: string | null;
  onClearFilter: () => void;
}

export function GuidesSection({ activeCategoryFilter, onClearFilter }: GuidesSectionProps) {
  const [selectedGuide, setSelectedGuide] = useState<GuideItem | null>(null);
  const [currentFilter, setCurrentFilter] = useState<string>("all");

  const effectiveFilter = activeCategoryFilter || currentFilter;

  const categories = [
    { id: "all", label: "Tüm Rehberler" },
    { id: "portrait", label: "Portre & İnsan" },
    { id: "night", label: "Gece & Düşük Işık" },
    { id: "street", label: "Sokak & Aksiyon" },
    { id: "macro", label: "Yemek & Makro" },
    { id: "video", label: "Sinematik Video" },
  ];

  const filteredGuides = guidesData.filter((guide) => {
    if (effectiveFilter === "all") return true;
    return guide.id === effectiveFilter;
  });

  return (
    <section id="guides" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-400 mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Modül 02 • Profesyonel Çekim Rehberleri</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Senaryo ve Çekim Modu Rehberleri
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
              Farklı ışık ve çevre senaryolarında telefonunuzun sınırlarını zorlayın. Doğru lens seçimi, ışık matematiği ve kompozisyon kuralları.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-camera-card/90 rounded-2xl border border-camera-border">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onClearFilter();
                  setCurrentFilter(cat.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  effectiveFilter === cat.id
                    ? "bg-amber-500 text-black font-semibold shadow-glow"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide) => (
            <GuideCard
              key={guide.id}
              guide={guide}
              onOpenDetails={(item) => setSelectedGuide(item)}
            />
          ))}
        </div>
      </div>

      {/* Guide Detail Modal */}
      <GuideDetailModal
        guide={selectedGuide}
        onClose={() => setSelectedGuide(null)}
      />
    </section>
  );
}
