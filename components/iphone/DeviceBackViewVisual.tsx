"use client";

import React, { useState } from "react";
import { DeviceModelSpec } from "@/types";
import { Camera, Sparkles, Layers, Aperture, Eye } from "lucide-react";

interface DeviceBackViewVisualProps {
  device: DeviceModelSpec;
  className?: string;
}

export function DeviceBackViewVisual({ device, className = "" }: DeviceBackViewVisualProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const isSamsung = device.brand === "samsung";
  const isUltra = isSamsung && device.id.includes("ultra");

  return (
    <div
      className={`relative w-full max-w-[280px] sm:max-w-[320px] mx-auto aspect-[9/17] rounded-[42px] p-3 shadow-2xl flex flex-col items-center justify-between overflow-hidden border transition-all duration-500 group select-none ${
        isSamsung
          ? isUltra
            ? "bg-gradient-to-b from-slate-900 via-neutral-900 to-black border-cyan-500/30 rounded-[28px] shadow-cyanGlow/20"
            : "bg-gradient-to-b from-slate-900 via-zinc-900 to-black border-blue-500/30"
          : device.isPro
          ? "bg-gradient-to-b from-neutral-900 via-zinc-900 to-black border-amber-500/30 shadow-glow/20"
          : "bg-gradient-to-b from-zinc-900 via-neutral-900 to-black border-sky-500/30"
      } ${className}`}
    >
      {/* Outer Metallic Edge Highlight */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/10 pointer-events-none" />
      <div className="absolute inset-[2px] rounded-[inherit] border border-white/5 pointer-events-none" />

      {/* Ambient Glow behind Camera Island */}
      <div
        className={`absolute top-6 left-6 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-40 transition-colors ${
          isSamsung ? "bg-cyan-500/30" : "bg-amber-500/30"
        }`}
      />

      {/* Real Phone Back-View Image with Graceful Fallback */}
      {!imageError && device.backViewImage && (
        <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
          <img
            src={device.backViewImage}
            alt={`${device.name} Arka Yüzeyi`}
            className={`w-full h-full object-contain rounded-2xl drop-shadow-2xl transition-opacity duration-700 ${
              imageLoaded ? "opacity-90 hover:opacity-100 hover:scale-105 transition-transform" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      )}

      {/* Vector Fallback Chassis (Visible during loading or error, or as backdrop) */}
      <div className={`relative z-0 w-full h-full flex flex-col justify-between p-3 ${imageLoaded ? "opacity-20" : "opacity-100"}`}>
        {/* Top Camera Bump Rendering */}
        <div className="w-full flex justify-start">
          {/* SAMSUNG ULTRA CAMERA MODULE (5 Lenses + Laser AF) */}
          {isSamsung && isUltra && (
            <div className="p-3 rounded-3xl bg-black/80 border border-white/15 backdrop-blur-md shadow-2xl flex gap-3">
              {/* Left Column: 3 Main Lenses */}
              <div className="flex flex-col gap-2.5">
                {/* 1. Ultra Wide */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border-2 border-white/20 flex items-center justify-center relative shadow-inner">
                  <div className="w-5 h-5 rounded-full bg-neutral-950 border border-cyan-400/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400/80 animate-pulse" />
                  </div>
                  <span className="absolute -right-1 -top-1 px-1 rounded bg-black/80 text-[8px] font-mono text-cyan-300">UW</span>
                </div>
                {/* 2. Primary 200MP Sensor */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border-2 border-cyan-400/60 flex items-center justify-center relative shadow-glow">
                  <div className="w-6 h-6 rounded-full bg-black border border-cyan-400 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-300" />
                  </div>
                  <span className="absolute -right-2 -top-1 px-1 rounded bg-cyan-500 text-[8px] font-mono text-black font-bold">200MP</span>
                </div>
                {/* 3. 5x/10x Periscope Prism */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border-2 border-white/20 flex items-center justify-center relative">
                  <div className="w-5 h-4 rounded-sm bg-neutral-950 border border-amber-400/70 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-sm bg-amber-400" />
                  </div>
                  <span className="absolute -right-1 -bottom-1 px-1 rounded bg-black/80 text-[8px] font-mono text-amber-300">PERI</span>
                </div>
              </div>

              {/* Right Column: Laser AF + Flash + 3x Tele */}
              <div className="flex flex-col justify-between py-1 items-center">
                {/* Laser AF */}
                <div className="w-5 h-5 rounded-full bg-red-950/80 border border-red-500/60 flex items-center justify-center" title="Lazer Otofokus">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                </div>
                {/* LED Flash */}
                <div className="w-5 h-5 rounded-full bg-amber-100/90 border border-amber-300 shadow-sm" />
                {/* 3x Telephoto */}
                <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-white/20 flex items-center justify-center relative">
                  <div className="w-4 h-4 rounded-full bg-black border border-white/30" />
                  <span className="absolute -right-1 -bottom-1 px-1 rounded bg-black/80 text-[7px] font-mono text-white">3x</span>
                </div>
              </div>
            </div>
          )}

          {/* SAMSUNG STANDARD / PLUS / FE (Vertical 3-Lens Traffic Light) */}
          {isSamsung && !isUltra && (
            <div className="p-2.5 rounded-3xl bg-black/70 border border-white/10 backdrop-blur-md flex flex-col gap-2.5 shadow-xl">
              <div className="w-9 h-9 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center relative">
                <div className="w-4 h-4 rounded-full bg-black border border-blue-400/50" />
                <span className="absolute -right-1 -top-1 px-1 rounded bg-black/80 text-[7px] font-mono text-blue-300">UW</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-zinc-800 border-2 border-blue-400/60 flex items-center justify-center relative shadow-sm">
                <div className="w-4.5 h-4.5 rounded-full bg-black border border-blue-400" />
                <span className="absolute -right-1 -top-1 px-1 rounded bg-blue-500 text-[7px] font-mono text-black font-bold">50MP</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center relative">
                <div className="w-4 h-4 rounded-full bg-black border border-amber-400/50" />
                <span className="absolute -right-1 -bottom-1 px-1 rounded bg-black/80 text-[7px] font-mono text-amber-300">3x</span>
              </div>
            </div>
          )}

          {/* APPLE iPHONE PRO / PRO MAX (Triangle 3-Lens Island + LiDAR + Flash) */}
          {!isSamsung && device.isPro && (
            <div className="w-32 h-32 rounded-[28px] bg-neutral-800/80 border border-white/15 backdrop-blur-xl p-2.5 shadow-2xl relative">
              {/* Lens 1: Top Left */}
              <div className="absolute top-2.5 left-2.5 w-11 h-11 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border-2 border-white/30 flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 rounded-full bg-black border border-amber-400/60 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                </div>
              </div>
              {/* Lens 2: Bottom Left */}
              <div className="absolute bottom-2.5 left-2.5 w-11 h-11 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border-2 border-white/30 flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 rounded-full bg-black border border-cyan-400/60 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400/80" />
                </div>
              </div>
              {/* Lens 3: Right Center */}
              <div className="absolute top-1/2 -translate-y-1/2 right-2.5 w-11 h-11 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border-2 border-white/30 flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 rounded-full bg-black border border-amber-400/60 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                </div>
              </div>
              {/* Flash: Top Right */}
              <div className="absolute top-3 right-4 w-5 h-5 rounded-full bg-amber-100 border border-amber-300 shadow-sm" />
              {/* LiDAR: Bottom Right */}
              <div className="absolute bottom-3 right-4 w-5 h-5 rounded-full bg-black border border-neutral-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
              </div>
            </div>
          )}

          {/* APPLE iPHONE STANDARD / AIR / SE */}
          {!isSamsung && !device.isPro && (
            <div className="p-3 rounded-3xl bg-neutral-800/80 border border-white/15 backdrop-blur-xl flex flex-col gap-2.5 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-white/30 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-black border border-sky-400/60" />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-white/30 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-black border border-sky-400/60" />
              </div>
            </div>
          )}
        </div>

        {/* Center / Bottom Branding Stamp */}
        <div className="w-full text-center py-4">
          <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
            {isSamsung ? "SAMSUNG GALAXY" : "APPLE iPHONE"}
          </div>
          <div className="text-xs font-bold text-zinc-300 mt-0.5">
            {device.name}
          </div>
        </div>
      </div>

      {/* Floating Bottom Badge */}
      <div className="absolute bottom-3 inset-x-3 z-20">
        <div className="px-3 py-1.5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] font-mono">
          <span className="flex items-center gap-1 text-white font-semibold truncate">
            <Aperture className={`w-3 h-3 ${isSamsung ? "text-cyan-400" : "text-amber-400"}`} />
            <span className="truncate">{device.hardware.zoomCapabilities}</span>
          </span>
          <span
            className={`px-1.5 py-0.5 rounded text-[9px] font-bold shrink-0 ${
              isSamsung
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
            }`}
          >
            {device.topFeatureBadge.split("&")[0].trim()}
          </span>
        </div>
      </div>
    </div>
  );
}
