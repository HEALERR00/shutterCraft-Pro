"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GuideItem } from "@/types";
import { 
  X, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Camera, 
  ShieldCheck, 
  Sun, 
  Layers, 
  Gauge, 
  Wrench, 
  ListChecks, 
  HelpCircle,
  Check
} from "lucide-react";

interface GuideDetailModalProps {
  guide: GuideItem | null;
  onClose: () => void;
}

export function GuideDetailModal({ guide, onClose }: GuideDetailModalProps) {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (guide) {
      document.body.style.overflow = "hidden";
      setCheckedItems({});
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guide, onClose]);

  if (!guide) return null;

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-camera-card border border-camera-border shadow-2xl z-10 flex flex-col">
        {/* Modal Header & Hero Image */}
        <div className="relative w-full h-64 sm:h-80 shrink-0">
          <Image
            src={guide.coverImage}
            alt={guide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-camera-card via-black/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and Badges */}
          <div className="absolute bottom-6 inset-x-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500 text-black uppercase tracking-wider">
                {guide.tag}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10">
                {guide.difficulty} Seviye
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10">
                {guide.duration}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {guide.title}
            </h2>
            <p className="text-sm text-zinc-300 mt-1">
              {guide.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-camera-darkest/80 border border-white/5 text-sm text-zinc-300 leading-relaxed">
            {guide.summary}
          </div>

          {/* Recommended Camera Settings Matrix */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5 text-amber-400" />
              <span>Önerilen Kamera Ayarları Reçetesi</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-camera-darkest border border-camera-border">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Lens & Odak Uzaklığı</span>
                <span className="font-semibold text-zinc-200">{guide.recommendedSettings.lens}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-camera-darkest border border-camera-border">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Hassasiyet (ISO)</span>
                <span className="font-semibold text-cyan-400 font-mono">{guide.recommendedSettings.iso}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-camera-darkest border border-camera-border">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Dekanşör Hızı</span>
                <span className="font-semibold text-cyan-400 font-mono">{guide.recommendedSettings.shutter}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-camera-darkest border border-camera-border">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Pozlama Telafisi (EV)</span>
                <span className="font-semibold text-amber-400 font-mono">{guide.recommendedSettings.ev}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-camera-darkest border border-camera-border">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Odak Modu</span>
                <span className="font-semibold text-zinc-200">{guide.recommendedSettings.focusMode}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-camera-darkest border border-camera-border">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Işık Stratejisi</span>
                <span className="font-semibold text-emerald-400">{guide.recommendedSettings.lighting}</span>
              </div>
            </div>
          </div>

          {/* Composition Rules Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Kompozisyon & Çekim Kuralları</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.rules.map((rule, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-camera-darkest/70 border border-white/5">
                  <div className="flex items-center gap-2 text-sm font-bold text-white mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono flex items-center justify-center shrink-0 font-bold">
                      {idx + 1}
                    </span>
                    <span>{rule.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-7">
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Step by Step Action Plan */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Uygulama Adımları & Pratik Tüyolar</span>
            </h3>

            <div className="space-y-4">
              {guide.steps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-camera-darkest/90 border border-camera-border space-y-3">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-black text-xs font-mono font-bold">
                      {idx + 1}. ADIM
                    </span>
                    <span>{step.title.includes(":") ? step.title.split(":")[1] : step.title}</span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    {/* Pro Tip Callout */}
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-300 block mb-0.5">Profesyonel İpucu:</span>
                        <span>{step.proTip}</span>
                      </div>
                    </div>

                    {/* Common Mistake Callout */}
                    <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/20 text-red-200 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-red-300 block mb-0.5">En Sık Yapılan Hata:</span>
                        <span>{step.commonMistake}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real World Problem & Solution Cases */}
          {guide.realWorldCases && guide.realWorldCases.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span>Karşılaşılan Gerçek Sorunlar ve Çözümleri</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guide.realWorldCases.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-camera-darkest/80 border border-camera-border flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-red-400 mb-1 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span>Sorun: {item.scenario}</span>
                      </div>
                      <div className="text-xs text-zinc-300 leading-relaxed mt-2 p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                        <strong className="text-emerald-400 block mb-0.5">✓ Çözüm Yolu:</strong>
                        <span>{item.solution}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Equipment Tips Section */}
          {guide.equipmentTips && guide.equipmentTips.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-cyan-400" />
                <span>Önerilen Ekipman & Yardımcı Aksesuarlar</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {guide.equipmentTips.map((equip, idx) => {
                  const parts = equip.split(":");
                  return (
                    <div key={idx} className="p-3.5 rounded-2xl bg-camera-darkest border border-white/5 text-xs">
                      <span className="font-bold text-amber-400 block mb-1">
                        {parts[0]}
                      </span>
                      <span className="text-zinc-400 leading-relaxed">
                        {parts[1] || ""}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Pro Checklist */}
          {guide.proChecklist && guide.proChecklist.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-emerald-400" />
                <span>Çekim Öncesi Hızlı Kontrol Listesi</span>
              </h3>

              <div className="p-4 rounded-2xl bg-camera-darkest border border-camera-border space-y-2">
                {guide.proChecklist.map((checkItem, idx) => {
                  const isChecked = !!checkedItems[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleCheck(idx)}
                      className={`p-2.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-200"
                          : "bg-black/30 border-white/5 text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                          isChecked
                            ? "bg-emerald-500 text-black font-bold"
                            : "border border-zinc-600 bg-zinc-800"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-xs ${isChecked ? "line-through opacity-80" : ""}`}>
                        {checkItem}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-camera-darkest border-t border-camera-border flex items-center justify-between">
          <div className="text-xs text-zinc-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Mobil kamera donanımınızı zorlamadan %100 optik prensiplerle tasarlandı.</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Anladım, Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
