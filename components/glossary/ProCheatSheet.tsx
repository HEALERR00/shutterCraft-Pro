"use client";

import React, { useState } from "react";
import { glossaryTerms, GlossaryTerm } from "@/data/glossaryData";
import { BookMarked, HelpCircle, Sparkles, ChevronDown, CheckCircle } from "lucide-react";

export function ProCheatSheet() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = ["Tümü", "Pozlama", "Optik", "Format & Kalite", "Video"];

  const filteredTerms = glossaryTerms.filter((item) => {
    if (selectedCategory === "Tümü") return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="glossary" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Kamera Terimleri & Profesyonel İpuçları</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Mobil Fotoğrafçılık Terimler Sözlüğü
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
            Kamera ayarlarını ezberlemeyin; mantığını kavrayın. Telefonunuzun sensöründe tam olarak ne olduğunu öğrenin.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-black font-semibold shadow-cyanGlow"
                  : "bg-camera-card text-zinc-400 hover:text-white border border-camera-border"
              }`}
            >
              {cat === "Tümü" ? "Tüm Terimler" : cat}
            </button>
          ))}
        </div>

        {/* Accordion / Cards List */}
        <div className="space-y-4">
          {filteredTerms.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={item.term}
                className="rounded-2xl bg-camera-card/90 border border-camera-border overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.term}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline text-xs text-zinc-400 truncate max-w-md">
                      {item.shortDef}
                    </span>
                    <div className={`transform transition-transform text-zinc-400 ${isExpanded ? "rotate-180" : ""}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-white/5 space-y-4 text-xs sm:text-sm">
                    <p className="text-zinc-300 leading-relaxed">
                      {item.detailedExpl}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {/* Phone Impact */}
                      <div className="p-3.5 rounded-xl bg-camera-darkest/90 border border-white/5">
                        <span className="font-bold text-amber-400 block mb-1">
                          📱 Telefonda Nasıl Davranır?
                        </span>
                        <span className="text-zinc-400 leading-relaxed">
                          {item.phoneImpact}
                        </span>
                      </div>

                      {/* Golden Rule */}
                      <div className="p-3.5 rounded-xl bg-camera-darkest/90 border border-white/5">
                        <span className="font-bold text-emerald-400 block mb-1">
                          ⭐ Uygulanacak Altın Kural
                        </span>
                        <span className="text-zinc-400 leading-relaxed">
                          {item.recommendedRule}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
