import React from "react";
import { Aperture, Camera, Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-camera-darkest border-t border-camera-border text-zinc-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Aperture className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white text-sm">
              ShutterCraft Pro • LuminaPhone
            </div>
            <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
              Telefon Kameraları İçin Profesyonel Mobil Vizör ve Akademi
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-[11px] text-zinc-400 font-mono flex-wrap justify-center">
          <span>RAW / 48MP</span>
          <span>•</span>
          <span>24 FPS SİNEMATİK</span>
          <span>•</span>
          <span>ÜÇLER KURALI</span>
          <span>•</span>
          <span>POZLAMA ÜÇGENİ</span>
        </div>

        <div className="text-zinc-500 text-[11px] text-center md:text-right">
          © {new Date().getFullYear()} ShutterCraft. Her anı bir başyapıta dönüştürün.
        </div>
      </div>
    </footer>
  );
}
