"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Sliders, Sun, Gauge, Eye, AlertTriangle, CheckCircle, RefreshCcw, Camera, Activity } from "lucide-react";

interface SceneOption {
  id: string;
  name: string;
  category: string;
  image: string;
  idealIso: number;
  idealShutterIndex: number;
  idealApertureIndex: number;
  description: string;
  hasFastMotion: boolean;
}

const SCENES: SceneOption[] = [
  {
    id: "action",
    name: "Hızlı Koşu & Sporcu",
    category: "Aksiyon / Hareket",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop",
    idealIso: 200,
    idealShutterIndex: 5, // 1/1000s
    idealApertureIndex: 2, // f/2.8
    description: "Hızlı hareket eden süjeyi havada dondurmak için yüksek perde hızı (shutter) gerekir.",
    hasFastMotion: true,
  },
  {
    id: "night",
    name: "Gece Sokak & Neon Işıkları",
    category: "Düşük Işık",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop",
    idealIso: 400,
    idealShutterIndex: 2, // 1/30s
    idealApertureIndex: 0, // f/1.4
    description: "Işık az olduğu için geniş diyafram ve dengeli ISO ile karanlık korunmalıdır.",
    hasFastMotion: false,
  },
  {
    id: "portrait",
    name: "Stüdyo Portresi & Bokeh",
    category: "Portre",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    idealIso: 100,
    idealShutterIndex: 4, // 1/250s
    idealApertureIndex: 1, // f/2.0
    description: "Arka planı eritip gözleri öne çıkarmak için açık diyafram ve düşük ISO kullanılır.",
    hasFastMotion: false,
  },
];

const SHUTTER_VALUES = [
  { label: "1s", speedSec: 1, blurPx: 25 },
  { label: "1/4s", speedSec: 0.25, blurPx: 16 },
  { label: "1/30s", speedSec: 1 / 30, blurPx: 8 },
  { label: "1/125s", speedSec: 1 / 125, blurPx: 3 },
  { label: "1/250s", speedSec: 1 / 250, blurPx: 0.5 },
  { label: "1/1000s", speedSec: 1 / 1000, blurPx: 0 },
  { label: "1/4000s", speedSec: 1 / 4000, blurPx: 0 },
];

const APERTURE_VALUES = [
  { label: "f/1.4", fNumber: 1.4, bokehPx: 18, depthName: "Çok Sığ (Derin Bokeh)" },
  { label: "f/2.0", fNumber: 2.0, bokehPx: 12, depthName: "Sığ Portre" },
  { label: "f/2.8", fNumber: 2.8, bokehPx: 6, depthName: "Optik Denge" },
  { label: "f/5.6", fNumber: 5.6, bokehPx: 2, depthName: "Geniş Netlik" },
  { label: "f/11", fNumber: 11.0, bokehPx: 0, depthName: "Tüm Kadraj Net" },
];

const ISO_VALUES = [50, 100, 200, 400, 800, 1600, 3200, 6400];

export function ExposureSimulator() {
  const [selectedSceneIndex, setSelectedSceneIndex] = useState(0);
  const [isoIndex, setIsoIndex] = useState(2); // ISO 200
  const [shutterIndex, setShutterIndex] = useState(3); // 1/125s
  const [apertureIndex, setApertureIndex] = useState(2); // f/2.8
  const [evOffset, setEvOffset] = useState(0); // -2 to +2

  const scene = SCENES[selectedSceneIndex];
  const currentIso = ISO_VALUES[isoIndex];
  const currentShutter = SHUTTER_VALUES[shutterIndex];
  const currentAperture = APERTURE_VALUES[apertureIndex];

  // Calculate Exposure Value balance (EV index relative to ideal)
  // EV balance = log2( (ISO/100) * (speed / (f^2)) ) + evOffset
  const exposureScore = useMemo(() => {
    const isoFactor = Math.log2(currentIso / 100);
    const shutterFactor = Math.log2(currentShutter.speedSec / (1 / 125));
    const apertureFactor = -Math.log2(Math.pow(currentAperture.fNumber / 2.8, 2));
    const sceneBias = scene.id === "night" ? 1.0 : scene.id === "action" ? -0.5 : 0;
    
    return Number((isoFactor + shutterFactor + apertureFactor + evOffset + sceneBias).toFixed(1));
  }, [currentIso, currentShutter, currentAperture, evOffset, scene]);

  // Brightness CSS multiplier (clamped between 0.15 and 2.2)
  const brightnessCss = useMemo(() => {
    // 0 score is normal brightness 1.0
    const mult = Math.max(0.18, Math.min(2.3, 1 + exposureScore * 0.28));
    return mult;
  }, [exposureScore]);

  // Noise opacity based on ISO (ISO 50 = 0%, ISO 6400 = 65%)
  const noiseOpacity = useMemo(() => {
    if (currentIso <= 200) return 0;
    if (currentIso === 400) return 0.08;
    if (currentIso === 800) return 0.18;
    if (currentIso === 1600) return 0.32;
    if (currentIso === 3200) return 0.52;
    return 0.72; // 6400
  }, [currentIso]);

  // Motion blur pixels
  const motionBlurPx = useMemo(() => {
    if (!scene.hasFastMotion) {
      // General hand camera shake blur for very slow speeds
      return currentShutter.blurPx > 10 ? currentShutter.blurPx * 0.4 : 0;
    }
    return currentShutter.blurPx;
  }, [scene.hasFastMotion, currentShutter]);

  // Depth blur for background
  const depthBlurPx = currentAperture.bokehPx;

  // Feedback State
  const feedback = useMemo(() => {
    if (exposureScore > 2.2) {
      return {
        status: "overexposed",
        title: "Aşırı Pozlama (Beyazlar Patlamış)",
        desc: "Görüntü fazla ışık aldı. Parlak gökyüzü veya ten dokusu bembeyaz oldu ve detaylar kayboldu.",
        action: "Dekanşör hızını artırın veya ISO'yu düşürün.",
        color: "text-red-400 border-red-500/30 bg-red-950/20",
        icon: AlertTriangle,
      };
    }
    if (exposureScore < -2.2) {
      return {
        status: "underexposed",
        title: "Düşük Pozlama (Karanlık & Çamurlu)",
        desc: "Sensöre yeterli ışık ulaşmadı. Gölgeler simsiyah oldu ve renk bilgisi kayboldu.",
        action: "ISO'yu yükseltin, dekanşörü yavaşlatın veya daha açık bir diyaframa geçin.",
        color: "text-blue-400 border-blue-500/30 bg-blue-950/20",
        icon: AlertTriangle,
      };
    }
    if (scene.hasFastMotion && currentShutter.speedSec > 1 / 250) {
      return {
        status: "motion-blur",
        title: "Dikkat: Hareket Bulanıklığı (Motion Blur)",
        desc: "Süje hızlı hareket ediyor ancak dekanşör hızınız yetersiz olduğu için sporcu net değil, bulanık çıkacaktır.",
        action: "Dekanşörü 1/500s veya 1/1000s seviyesine yükseltin.",
        color: "text-amber-400 border-amber-500/30 bg-amber-950/20",
        icon: AlertTriangle,
      };
    }
    if (currentIso >= 3200) {
      return {
        status: "high-noise",
        title: "Aşırı Dijital Kumlanma (Noise)",
        desc: "ISO çok yüksek olduğu için görüntüde yoğun renkli kumlanma ve detay kaybı oluştu.",
        action: "Telefonu sabitleyip daha yavaş dekanşör hızıyla ISO'yu 400'ün altına çekin.",
        color: "text-amber-400 border-amber-500/30 bg-amber-950/20",
        icon: AlertTriangle,
      };
    }
    return {
      status: "optimal",
      title: "Mükemmel Sinematik Pozlama!",
      desc: "Işık, renk doğruluğu ve keskinlik kusursuz dengede. Sensör dinamik aralığı en verimli şekilde kullanılıyor.",
      action: "Bu ayarları telefonunuzun Pro moduna veya AE kilidine uygulayabilirsiniz.",
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
      icon: CheckCircle,
    };
  }, [exposureScore, scene, currentShutter, currentIso]);

  const resetToIdeal = () => {
    setIsoIndex(ISO_VALUES.indexOf(scene.idealIso));
    setShutterIndex(scene.idealShutterIndex);
    setApertureIndex(scene.idealApertureIndex);
    setEvOffset(0);
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl bg-camera-card/90 backdrop-blur-2xl border border-camera-border p-6 sm:p-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-camera-border">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-400 mb-1">
            <Sliders className="w-4 h-4" />
            <span>Laboratuvar & Simülatör 01</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            İnteraktif Pozlama Üçgeni Simülatörü
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            ISO, Dekanşör Hızı ve Diyaframın görüntüyü canlı olarak nasıl etkilediğini deneyimleyin.
          </p>
        </div>

        {/* Scene Selector Pills */}
        <div className="flex items-center gap-2 p-1 bg-camera-darkest/80 rounded-2xl border border-white/10 shrink-0">
          {SCENES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setSelectedSceneIndex(idx);
                setIsoIndex(ISO_VALUES.indexOf(s.idealIso));
                setShutterIndex(s.idealShutterIndex);
                setApertureIndex(s.idealApertureIndex);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                idx === selectedSceneIndex
                  ? "bg-amber-500 text-black font-semibold shadow-glow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Live Canvas (Left) + Sliders Matrix (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Live Simulated Viewport (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative w-full h-[340px] sm:h-[420px] rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl select-none group">
            {/* The Base Photo with dynamic CSS filters */}
            <div
              className="absolute inset-0 w-full h-full transition-all duration-150"
              style={{
                filter: `brightness(${brightnessCss}) blur(${motionBlurPx}px)`,
              }}
            >
              <Image
                src={scene.image}
                alt={scene.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
            </div>

            {/* Depth of Field / Bokeh Overlay Simulation */}
            {depthBlurPx > 0 && (
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  backdropFilter: `blur(${depthBlurPx}px)`,
                  WebkitBackdropFilter: `blur(${depthBlurPx}px)`,
                  maskImage: "radial-gradient(circle at 50% 45%, transparent 35%, black 85%)",
                  WebkitMaskImage: "radial-gradient(circle at 50% 45%, transparent 35%, black 85%)",
                }}
              />
            )}

            {/* Grain / Noise Canvas Simulation */}
            {noiseOpacity > 0 && (
              <div
                className="absolute inset-0 pointer-events-none mix-blend-screen opacity-90"
                style={{
                  opacity: noiseOpacity,
                  backgroundImage: `radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)`,
                  backgroundSize: "3px 3px",
                }}
              />
            )}

            {/* Viewfinder Corners */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-white/60 pointer-events-none" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-white/60 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-white/60 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-white/60 pointer-events-none" />

            {/* Dynamic Exposure Meter Indicator Top Center */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 flex items-center gap-2 font-mono text-xs">
              <span className="text-zinc-400">EV:</span>
              <span
                className={`font-bold ${
                  exposureScore === 0
                    ? "text-emerald-400"
                    : Math.abs(exposureScore) <= 1.0
                    ? "text-amber-400"
                    : "text-red-400"
                }`}
              >
                {exposureScore > 0 ? `+${exposureScore}` : exposureScore}
              </span>
              <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden relative">
                <div
                  className="absolute top-0 bottom-0 w-2 bg-amber-400 rounded-full transition-all duration-150"
                  style={{
                    left: `${Math.max(0, Math.min(90, 50 + exposureScore * 18))}%`,
                  }}
                />
              </div>
            </div>

            {/* Bottom Camera HUD Ribbon */}
            <div className="absolute bottom-4 inset-x-4 bg-camera-darkest/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 flex items-center justify-between text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-3">
                <span className="text-amber-400 font-bold">PRO MODU</span>
                <span className="text-zinc-500">|</span>
                <span className="text-cyan-300 font-semibold">{currentAperture.label}</span>
                <span className="text-zinc-400">{currentShutter.label}</span>
                <span className="text-amber-300">ISO {currentIso}</span>
              </div>
              <button
                onClick={resetToIdeal}
                className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                title="İdeal Pro Ayarlara Sıfırla"
              >
                <RefreshCcw className="w-3 h-3" />
                <span>Sıfırla</span>
              </button>
            </div>
          </div>

          {/* Dynamic AI Feedback & Diagnosis Banner */}
          <div className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-all ${feedback.color}`}>
            <feedback.icon className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="text-xs">
              <div className="font-bold text-sm mb-0.5">{feedback.title}</div>
              <div className="text-zinc-300 mb-1.5">{feedback.desc}</div>
              <div className="font-semibold text-white/90">
                💡 <span className="underline decoration-amber-400/50">Tavsiye:</span> {feedback.action}
              </div>
            </div>
          </div>
        </div>

        {/* Sliders & Controls Matrix (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* 1. ISO Slider */}
          <div className="p-4 rounded-2xl bg-camera-darkest/70 border border-camera-border">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-400" />
                <span>ISO (Işık Hassasiyeti & Gren)</span>
              </label>
              <span className="font-mono text-amber-400 font-bold text-sm">
                ISO {currentIso}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={ISO_VALUES.length - 1}
              step="1"
              value={isoIndex}
              onChange={(e) => setIsoIndex(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1.5">
              <span>50 (Temiz)</span>
              <span>400</span>
              <span>1600</span>
              <span className="text-red-400">6400 (Yoğun Kumlanma)</span>
            </div>
          </div>

          {/* 2. Dekanşör Hızı (Shutter Speed) */}
          <div className="p-4 rounded-2xl bg-camera-darkest/70 border border-camera-border">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                <Gauge className="w-4 h-4 text-cyan-400" />
                <span>Dekanşör Hızı (Hareket Dondurma)</span>
              </label>
              <span className="font-mono text-cyan-400 font-bold text-sm">
                {currentShutter.label}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={SHUTTER_VALUES.length - 1}
              step="1"
              value={shutterIndex}
              onChange={(e) => setShutterIndex(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1.5">
              <span className="text-amber-400">1s (Bulanık/Işık İzi)</span>
              <span>1/125s</span>
              <span className="text-emerald-400">1/4000s (Çivi Gibi Donuk)</span>
            </div>
          </div>

          {/* 3. Diyafram (Aperture / Bokeh) */}
          <div className="p-4 rounded-2xl bg-camera-darkest/70 border border-camera-border">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>Diyafram (Alan Derinliği & Bokeh)</span>
              </label>
              <span className="font-mono text-emerald-400 font-bold text-sm">
                {currentAperture.label}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={APERTURE_VALUES.length - 1}
              step="1"
              value={apertureIndex}
              onChange={(e) => setApertureIndex(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1.5">
              <span className="text-emerald-400">f/1.4 (Sığ Portre)</span>
              <span>f/2.8</span>
              <span>f/11 (Derin Netlik)</span>
            </div>
            <div className="text-[11px] text-zinc-400 mt-2 italic">
              Etki: {currentAperture.depthName}
            </div>
          </div>

          {/* 4. Pozlama Telafisi (EV Offset) */}
          <div className="p-4 rounded-2xl bg-camera-darkest/70 border border-camera-border">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-300" />
                <span>Pozlama Telafisi (EV Kaydırıcı)</span>
              </label>
              <span className="font-mono text-amber-300 font-bold text-sm">
                {evOffset > 0 ? `+${evOffset}` : evOffset} EV
              </span>
            </div>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.3"
              value={evOffset}
              onChange={(e) => setEvOffset(Number(e.target.value))}
              className="w-full accent-amber-300 cursor-pointer h-2 bg-zinc-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1.5">
              <span>-2.0 EV (Karanlık)</span>
              <span>0.0 (Doğal)</span>
              <span>+2.0 EV (Parlak)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
