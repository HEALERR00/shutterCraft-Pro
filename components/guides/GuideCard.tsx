"use client";

import React from "react";
import Image from "next/image";
import { GuideItem } from "@/types";
import { ArrowUpRight, Clock, Gauge, Sliders, Sparkles, CheckCircle2 } from "lucide-react";

interface GuideCardProps {
  guide: GuideItem;
  onOpenDetails: (guide: GuideItem) => void;
}

export function GuideCard({ guide, onOpenDetails }: GuideCardProps) {
  return (
    <div
      onClick={() => onOpenDetails(guide)}
      className="group relative rounded-3xl bg-camera-card/90 border border-camera-border hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer shadow-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
    >
      {/* Cover Image Container */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden">
        <Image
          src={guide.coverImage}
          alt={guide.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-camera-card via-black/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between">
          <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-400 border border-white/10 uppercase tracking-wider">
            {guide.tag}
          </span>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <Clock className="w-3 h-3 text-cyan-400" />
            <span>{guide.duration}</span>
          </div>
        </div>

        {/* Bottom Title on Image */}
        <div className="absolute bottom-4 inset-x-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {guide.title}
          </h3>
          <p className="text-xs text-zinc-300 line-clamp-1 mt-0.5">
            {guide.subtitle}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-6">
        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
          {guide.summary}
        </p>

        {/* Mini Pro Settings Matrix */}
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="p-2.5 rounded-xl bg-camera-darkest/80 border border-white/5">
            <span className="text-[9px] text-zinc-500 block uppercase">Önerilen Lens</span>
            <span className="font-semibold text-zinc-200 truncate block mt-0.5">
              {guide.recommendedSettings.lens.split("(")[0]}
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-camera-darkest/80 border border-white/5">
            <span className="text-[9px] text-zinc-500 block uppercase">Pozlama (EV)</span>
            <span className="font-semibold text-amber-400 truncate block mt-0.5">
              {guide.recommendedSettings.ev.split("(")[0]}
            </span>
          </div>
        </div>

        {/* Action Button Link */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Adım Adım Rehberi Aç</span>
          </span>
          <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-amber-500 group-hover:text-black flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
