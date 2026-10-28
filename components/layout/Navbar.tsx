"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Camera, Aperture, Sliders, Wand2, Menu, X, Sparkles, BookOpen, Smartphone } from "lucide-react";

interface NavbarProps {
  onOpenWizard: () => void;
}

export function Navbar({ onOpenWizard }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-camera-darkest/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-glass"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-black shadow-glow group-hover:scale-105 transition-transform">
            <Aperture className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <div className="text-base sm:text-lg font-black tracking-wider text-white flex items-center gap-1.5">
              <span>ShutterCraft</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                PRO
              </span>
            </div>
            <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
              Mobil Görsel Stüdyo
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-xs font-medium text-zinc-300">
          <a
            href="#guides"
            className="px-3.5 py-2 rounded-xl hover:text-white hover:bg-white/10 transition-colors"
          >
            Rehberler
          </a>
          <a
            href="#exposure-simulator"
            className="px-3.5 py-2 rounded-xl hover:text-white hover:bg-white/10 transition-colors"
          >
            Pozlama Simülatörü
          </a>
          <a
            href="#composition-studio"
            className="px-3.5 py-2 rounded-xl hover:text-white hover:bg-white/10 transition-colors"
          >
            Kompozisyon
          </a>
          <a
            href="#iphone-studio"
            className="px-3.5 py-2 rounded-xl text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 transition-colors font-semibold flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Cihaz Stüdyosu (iPhone & Galaxy)</span>
          </a>
          <a
            href="#device-shortcuts"
            className="px-3.5 py-2 rounded-xl hover:text-white hover:bg-white/10 transition-colors"
          >
            Kısayollar
          </a>
          <a
            href="#wizard"
            className="px-3.5 py-2 rounded-xl hover:text-white hover:bg-white/10 transition-colors"
          >
            Sihirbaz
          </a>
          <a
            href="#glossary"
            className="px-3.5 py-2 rounded-xl hover:text-white hover:bg-white/10 transition-colors"
          >
            Sözlük
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenWizard}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs shadow-glow transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>Ne Çekmek İstiyorsun?</span>
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-camera-darkest/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2 text-sm font-medium text-zinc-300">
            <a
              href="#guides"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400"
            >
              Çekim Rehberleri
            </a>
            <a
              href="#exposure-simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400"
            >
              Pozlama Üçgeni Simülatörü
            </a>
            <a
              href="#composition-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400"
            >
              Grid & Kompozisyon Stüdyosu
            </a>
            <a
              href="#iphone-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-amber-400 font-bold flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Cihaz Stüdyosu (iPhone & Samsung Galaxy)</span>
            </a>
            <a
              href="#device-shortcuts"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400"
            >
              Cihaz Kısayolları (iOS & Android)
            </a>
            <a
              href="#wizard"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400"
            >
              "Ne Çekmek İstiyorsun?" Sihirbazı
            </a>
            <a
              href="#glossary"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400"
            >
              Kamera Terimleri Sözlüğü
            </a>
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWizard();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-xs text-center flex items-center justify-center gap-2"
            >
              <Wand2 className="w-4 h-4" />
              <span>Anlık Çekim Sihirbazını Aç</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
