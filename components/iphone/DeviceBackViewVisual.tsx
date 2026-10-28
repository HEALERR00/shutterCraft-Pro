"use client";

import React, { useState } from "react";
import { DeviceModelSpec } from "@/types";
import { Aperture, Sparkles, Layers, Shield, Eye } from "lucide-react";

interface DeviceBackViewVisualProps {
  device: DeviceModelSpec;
  className?: string;
}

export function DeviceBackViewVisual({ device, className = "" }: DeviceBackViewVisualProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const isSamsung = device.brand === "samsung";
  const chassis = device.chassisDesign || {
    lensCount: isSamsung ? (device.id.includes("ultra") ? 5 : 3) : device.isPro ? 3 : 2,
    layout: isSamsung
      ? device.id.includes("ultra")
        ? "samsung-ultra-multi"
        : "samsung-traffic-3"
      : device.isPro
      ? "triple-pro-triangle"
      : "dual-diagonal",
    formFactor: "slab",
  };

  const isFold = chassis.formFactor === "fold";
  const isFlip = chassis.formFactor === "flip";
  const sigColor = device.signatureColor || {
    name: "Standart Titanyum",
    hex: isSamsung ? "#38BDF8" : "#E05A2B",
    gradient: "from-slate-900 via-neutral-900 to-black",
  };

  return (
    <div
      className={`relative w-full max-w-[280px] sm:max-w-[320px] mx-auto ${
        isFold ? "aspect-[9/19] rounded-[28px]" : isFlip ? "aspect-[9/17] rounded-[36px]" : "aspect-[9/18] rounded-[42px]"
      } p-3 shadow-2xl flex flex-col items-center justify-between overflow-hidden border transition-all duration-500 group select-none ${className}`}
      style={{
        backgroundColor: "#0B0F17",
        borderColor: `${sigColor.hex}44`,
        boxShadow: `0 20px 50px -10px ${sigColor.hex}25`,
      }}
    >
      {/* 1. Realistic Glass/Metal Back Surface Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${sigColor.gradient || "from-slate-900 via-neutral-900 to-black"} opacity-85`}
      />

      {/* 2. Glass Specular Sheen Diagonal Reflection */}
      <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 pointer-events-none group-hover:translate-x-12 transition-transform duration-1000" />

      {/* 3. Metallic Outer Frame Edge Highlight */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/20 pointer-events-none" />
      <div className="absolute inset-[2px] rounded-[inherit] border border-white/10 pointer-events-none" />

      {/* 4. Left Hinge Spine for Foldable Devices (Galaxy Z Fold) */}
      {isFold && (
        <div className="absolute left-0 inset-y-0 w-3 bg-gradient-to-r from-zinc-700 via-zinc-300 to-zinc-800 border-r border-black/60 shadow-lg rounded-l-[28px] z-10 flex items-center justify-center">
          <div className="w-[1px] h-3/4 bg-white/40" />
        </div>
      )}

      {/* 5. Center Hinge Crease for Flip Devices (Galaxy Z Flip) */}
      {isFlip && (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-b from-black/80 via-zinc-800 to-black/80 border-y border-white/10 z-10 pointer-events-none" />
      )}

      {/* 6. Ambient Signature Color Glow behind Camera Module */}
      <div
        className="absolute top-4 left-4 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-40 transition-colors"
        style={{ backgroundColor: sigColor.hex }}
      />

      {/* 7. Top Status & Signature Color Badge */}
      <div className="w-full relative z-20 flex items-center justify-between px-2 pt-1 text-[10px] font-mono">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-zinc-200 shadow-sm max-w-[70%] truncate">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0 shadow-inner border border-white/40"
            style={{ backgroundColor: sigColor.hex }}
          />
          <span className="truncate font-medium">{sigColor.name}</span>
        </div>
        <div className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-[9px] text-zinc-300 font-bold shrink-0">
          {chassis.lensCount} LENS
        </div>
      </div>

      {/* 8. Real Phone Back-View Image with Smooth Fade-in */}
      {!imageError && device.backViewImage && (
        <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
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

      {/* 9. Vector Fallback Chassis (Exact Camera Cluster Layouts) */}
      <div className={`relative z-0 w-full h-full flex flex-col justify-between p-2 pt-3 ${imageLoaded ? "opacity-25" : "opacity-100"}`}>
        <div className="w-full flex justify-start pl-2">
          {/* LAYOUT 1: SAMSUNG ULTRA MULTI-LENS (5 Lenses + Periscope + Laser AF) */}
          {(chassis.layout === "samsung-ultra-multi" || chassis.layout === "z-fold-ultra") && (
            <div className="p-3 rounded-[28px] bg-black/85 border border-white/20 backdrop-blur-xl shadow-2xl flex gap-3">
              {/* Left Column: 3 Main Lenses */}
              <div className="flex flex-col gap-2.5">
                {/* 1. Ultra-Wide */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border-2 border-white/30 flex items-center justify-center relative shadow-inner">
                  <div className="w-5 h-5 rounded-full bg-neutral-950 border border-cyan-400/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400/80 animate-pulse" />
                  </div>
                  <span className="absolute -right-1 -top-1 px-1 rounded bg-black/80 text-[7px] font-mono text-cyan-300">UW</span>
                </div>
                {/* 2. Primary 200MP ISOCELL */}
                <div
                  className="w-11 h-11 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border-2 flex items-center justify-center relative shadow-lg"
                  style={{ borderColor: sigColor.hex }}
                >
                  <div className="w-6 h-6 rounded-full bg-black border border-white/40 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: sigColor.hex }} />
                  </div>
                  <span
                    className="absolute -right-2 -top-1 px-1 rounded text-[7px] font-mono text-black font-bold"
                    style={{ backgroundColor: sigColor.hex }}
                  >
                    200M
                  </span>
                </div>
                {/* 3. 5x/10x Periscope Prism Window */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border-2 border-white/30 flex items-center justify-center relative">
                  <div className="w-5 h-4 rounded-sm bg-neutral-950 border border-amber-400/80 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-sm bg-amber-400" />
                  </div>
                  <span className="absolute -right-1 -bottom-1 px-1 rounded bg-black/80 text-[7px] font-mono text-amber-300">PERI</span>
                </div>
              </div>

              {/* Right Column: Laser AF + LED Flash + 3x Telephoto */}
              <div className="flex flex-col justify-between py-1 items-center">
                {/* Laser AF */}
                <div className="w-5 h-5 rounded-full bg-red-950/90 border border-red-500/70 flex items-center justify-center" title="Lazer Otofokus">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                </div>
                {/* LED Flash */}
                <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 shadow-sm" />
                {/* 3x Portre Telephoto */}
                <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-white/20 flex items-center justify-center relative">
                  <div className="w-4 h-4 rounded-full bg-black border border-white/30" />
                  <span className="absolute -right-1 -bottom-1 px-1 rounded bg-black/80 text-[7px] font-mono text-white">3x</span>
                </div>
              </div>
            </div>
          )}

          {/* LAYOUT 2: SAMSUNG TRAFFIC-3 (S22-S26, Plus, FE) */}
          {chassis.layout === "samsung-traffic-3" && (
            <div className="p-2.5 rounded-3xl bg-black/75 border border-white/15 backdrop-blur-md flex flex-col gap-2.5 shadow-xl">
              <div className="w-9 h-9 rounded-full bg-zinc-800 border-2 border-white/20 flex items-center justify-center relative">
                <div className="w-4 h-4 rounded-full bg-black border border-blue-400/50" />
                <span className="absolute -right-1 -top-1 px-1 rounded bg-black/80 text-[7px] font-mono text-blue-300">UW</span>
              </div>
              <div
                className="w-10 h-10 rounded-full bg-zinc-800 border-2 flex items-center justify-center relative shadow-sm"
                style={{ borderColor: sigColor.hex }}
              >
                <div className="w-5 h-5 rounded-full bg-black border border-white/40" />
                <span
                  className="absolute -right-2 -top-1 px-1 rounded text-[7px] font-mono text-black font-bold"
                  style={{ backgroundColor: sigColor.hex }}
                >
                  50M
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-zinc-800 border-2 border-white/20 flex items-center justify-center relative">
                <div className="w-4 h-4 rounded-full bg-black border border-amber-400/50" />
                <span className="absolute -right-1 -bottom-1 px-1 rounded bg-black/80 text-[7px] font-mono text-amber-300">3x</span>
              </div>
            </div>
          )}

          {/* LAYOUT 3: SAMSUNG S21 CONTOUR CUT (Violet + Gold Corner Island) */}
          {chassis.layout === "samsung-s21-contour" && (
            <div className="p-2.5 rounded-br-3xl rounded-tl-2xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-700 border border-amber-300/60 shadow-2xl flex flex-col gap-2 -ml-2 -mt-2">
              <div className="w-9 h-9 rounded-full bg-zinc-900 border-2 border-black/40 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-black border border-purple-400" />
              </div>
              <div className="w-9 h-9 rounded-full bg-zinc-900 border-2 border-black/40 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-black border border-purple-400" />
              </div>
              <div className="w-9 h-9 rounded-full bg-zinc-900 border-2 border-black/40 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-black border border-amber-300" />
              </div>
            </div>
          )}

          {/* LAYOUT 4: SAMSUNG GALAXY Z FOLD VERTICAL (Sleek Folding Camera Island) */}
          {chassis.layout === "z-fold-vertical" && (
            <div className="p-2.5 ml-2 rounded-2xl bg-black/80 border border-white/20 backdrop-blur-xl flex flex-col gap-2.5 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-white/30 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-black border border-sky-400" />
              </div>
              <div
                className="w-9 h-9 rounded-full bg-zinc-800 border-2 flex items-center justify-center shadow-md"
                style={{ borderColor: sigColor.hex }}
              >
                <div className="w-4 h-4 rounded-full bg-black" />
              </div>
              <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-white/30 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-black border border-amber-400" />
              </div>
              <div className="w-3.5 h-3.5 rounded-full bg-amber-100 border border-amber-300 mx-auto" />
            </div>
          )}

          {/* LAYOUT 5: SAMSUNG GALAXY Z FLIP (FlexWindow Screen + Dual Cameras) */}
          {chassis.layout === "z-flip-dual" && (
            <div className="w-full flex flex-col items-center">
              {/* FlexWindow Cover Screen (Top Half) */}
              <div className="w-full h-36 rounded-2xl bg-black/95 border border-white/20 p-3 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
                {/* FlexWindow Clock & Widget */}
                <div className="flex items-center justify-between text-white text-[11px] font-mono z-10">
                  <span className="font-bold tracking-wider">10:08</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/15 text-zinc-300">FlexWindow</span>
                </div>
                {/* Dual Horizontal / Ring Cameras */}
                <div className="flex items-center gap-3 self-end z-10">
                  <div
                    className="w-9 h-9 rounded-full bg-zinc-900 border-2 flex items-center justify-center shadow-lg"
                    style={{ borderColor: sigColor.hex }}
                  >
                    <div className="w-4 h-4 rounded-full bg-black border border-white/40" />
                  </div>
                  <div
                    className="w-9 h-9 rounded-full bg-zinc-900 border-2 flex items-center justify-center shadow-lg"
                    style={{ borderColor: sigColor.hex }}
                  >
                    <div className="w-4 h-4 rounded-full bg-black border border-white/40" />
                  </div>
                  <div className="w-4 h-4 rounded-full bg-amber-100 border border-amber-300 ml-1" />
                </div>
              </div>
            </div>
          )}

          {/* LAYOUT 6: APPLE iPHONE PRO TRIPLE TRIANGLE (Triangle Island + LiDAR + Flash) */}
          {chassis.layout === "triple-pro-triangle" && (
            <div
              className="w-32 h-32 rounded-[28px] bg-neutral-900/80 border backdrop-blur-xl p-2.5 shadow-2xl relative"
              style={{ borderColor: `${sigColor.hex}55` }}
            >
              {/* Top Left Lens */}
              <div className="absolute top-2.5 left-2.5 w-11 h-11 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border-2 border-white/30 flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 rounded-full bg-black border border-white/40 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: sigColor.hex }} />
                </div>
              </div>
              {/* Bottom Left Lens */}
              <div className="absolute bottom-2.5 left-2.5 w-11 h-11 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border-2 border-white/30 flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 rounded-full bg-black border border-white/40 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                </div>
              </div>
              {/* Right Center Lens */}
              <div className="absolute top-1/2 -translate-y-1/2 right-2.5 w-11 h-11 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border-2 border-white/30 flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 rounded-full bg-black border border-white/40 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: sigColor.hex }} />
                </div>
              </div>
              {/* True Tone Flash: Top Right */}
              <div className="absolute top-3 right-4 w-5 h-5 rounded-full bg-amber-100 border border-amber-300 shadow-sm" />
              {/* LiDAR Sensor: Bottom Right */}
              <div className="absolute bottom-3 right-4 w-5 h-5 rounded-full bg-black border border-neutral-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
              </div>
            </div>
          )}

          {/* LAYOUT 7: APPLE iPHONE DUAL VERTICAL (iPhone 16, 16e, 17e) */}
          {chassis.layout === "dual-vertical" && (
            <div
              className="p-3 rounded-full bg-black/80 border backdrop-blur-xl flex flex-col gap-2.5 shadow-xl"
              style={{ borderColor: `${sigColor.hex}55` }}
            >
              <div className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-white/30 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-black border border-white/40" />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-white/30 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-black border border-white/40" />
              </div>
            </div>
          )}

          {/* LAYOUT 8: APPLE iPHONE DUAL DIAGONAL (iPhone 13, 14, 15) */}
          {chassis.layout === "dual-diagonal" && (
            <div
              className="w-28 h-28 rounded-[24px] bg-neutral-900/80 border backdrop-blur-xl p-2.5 shadow-xl relative"
              style={{ borderColor: `${sigColor.hex}55` }}
            >
              {/* Top Left */}
              <div className="absolute top-2.5 left-2.5 w-10 h-10 rounded-full bg-zinc-700 border-2 border-white/30 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-black border border-white/40" />
              </div>
              {/* Bottom Right */}
              <div className="absolute bottom-2.5 right-2.5 w-10 h-10 rounded-full bg-zinc-700 border-2 border-white/30 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-black border border-white/40" />
              </div>
              {/* Flash Top Right */}
              <div className="absolute top-3 right-4 w-4 h-4 rounded-full bg-amber-100 border border-amber-300" />
            </div>
          )}

          {/* LAYOUT 9: APPLE iPHONE SINGLE CENTER (iPhone SE 2022) */}
          {chassis.layout === "single-center" && (
            <div className="p-3 rounded-2xl bg-neutral-900/80 border border-white/20 backdrop-blur-md flex items-center gap-3 shadow-xl">
              <div className="w-11 h-11 rounded-full bg-zinc-700 border-2 border-white/40 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-black border border-white/40" />
              </div>
              <div className="w-3.5 h-3.5 rounded-full bg-amber-100 border border-amber-300" />
            </div>
          )}

          {/* LAYOUT 10: APPLE iPHONE AIR (Ultra-Slim Capsule Single Fusion) */}
          {chassis.layout === "slim-single-fusion" && (
            <div
              className="px-4 py-2 rounded-full bg-neutral-900/90 border backdrop-blur-xl flex items-center gap-3 shadow-2xl"
              style={{ borderColor: sigColor.hex }}
            >
              <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-white/50 flex items-center justify-center shadow-glow">
                <div className="w-5 h-5 rounded-full bg-black border border-sky-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-sky-300 animate-pulse" />
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-sky-300">48MP AIR</span>
            </div>
          )}
        </div>

        {/* Center / Bottom Branding Stamp */}
        <div className="w-full text-center py-2 relative z-10">
          <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
            {isSamsung ? (isFold ? "SAMSUNG GALAXY Z FOLD" : isFlip ? "SAMSUNG GALAXY Z FLIP" : "SAMSUNG GALAXY") : "APPLE iPHONE"}
          </div>
          <div className="text-xs font-bold text-white mt-0.5 drop-shadow">
            {device.name}
          </div>
          <div className="text-[9px] font-mono text-zinc-400 mt-0.5">
            {device.generation}
          </div>
        </div>
      </div>

      {/* 10. Floating Bottom Optics Pill */}
      <div className="w-full relative z-20 pt-1">
        <div className="px-3 py-1.5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] font-mono shadow-lg">
          <span className="flex items-center gap-1 text-white font-semibold truncate">
            <Aperture className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="truncate">{device.hardware.zoomCapabilities}</span>
          </span>
          <span
            className="px-1.5 py-0.5 rounded text-[9px] font-bold shrink-0 truncate ml-1 text-black font-semibold"
            style={{ backgroundColor: sigColor.hex }}
          >
            {device.topFeatureBadge.split("&")[0].trim()}
          </span>
        </div>
      </div>
    </div>
  );
}
