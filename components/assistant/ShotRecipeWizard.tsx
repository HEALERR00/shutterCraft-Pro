"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Wand2, ArrowRight, RotateCcw, Copy, Check, CheckCircle2, Camera, Sun, Smartphone, Heart, Share2 } from "lucide-react";
import { ShotRecipe } from "@/types";
import { iphoneSpecsData, samsungSpecsData } from "@/data/devices";

export function ShotRecipeWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [subject, setSubject] = useState("");
  const [light, setLight] = useState("");
  const [device, setDevice] = useState("");
  const [iphoneModel, setIphoneModel] = useState("iphone-16-pro");
  const [samsungModel, setSamsungModel] = useState("samsung-s24-ultra");
  const [vibe, setVibe] = useState("");
  const [copied, setCopied] = useState(false);

  const totalSteps = 4;

  const subjectOptions = [
    { id: "portrait", label: "Arkadaşımı / Portre", icon: "👤", desc: "İnsan yüzü veya boy portresi" },
    { id: "night", label: "Gece Şehir & Işıklar", icon: "🌙", desc: "Neonlar, binalar, gece sokakları" },
    { id: "food", label: "Yemek & Kahve", icon: "☕", desc: "Restoran masası veya mutfak sunumu" },
    { id: "street", label: "Sokak & Şehir Ritmi", icon: "🚶", desc: "Mimari, siluetler, anlık sokak anları" },
    { id: "nature", label: "Manzara & Doğa", icon: "🏔️", desc: "Deniz, dağ, gün doğumu veya gökyüzü" },
    { id: "action", label: "Evcil Hayvan / Aksiyon", icon: "🐾", desc: "Koşan kedi/köpek veya hareketli spor" },
  ];

  const lightOptions = [
    { id: "sun", label: "Parlak Güneş", icon: "☀️", desc: "Açık hava, sert ışık ve gölgeler" },
    { id: "golden", label: "Altın Saat / Günbatımı", icon: "🌅", desc: "Yumuşak sarı/turuncu sıcak ışık" },
    { id: "dim", label: "Loş İç Mekân / Kafe", icon: "🕯️", desc: "Sarı ampuller, loş masa lambası" },
    { id: "dark", label: "Gece / Sokak Lambası", icon: "🌃", desc: "Az ışık, sadece sokak aydınlatması" },
    { id: "backlit", label: "Güneş Arkada (Ters Işık)", icon: "✨", desc: "Işık kaynağı süjenin tam arkasında" },
  ];

  const deviceOptions = [
    { id: "iphone", label: "Apple iPhone", icon: "🍎", desc: "iOS Kamera / ProRAW" },
    { id: "samsung", label: "Samsung Galaxy", icon: "🌌", desc: "One UI / Pro Mod / Expert RAW" },
    { id: "xiaomi", label: "Xiaomi / Pixel / Diğer", icon: "⚡", desc: "HyperOS veya Stock Android" },
  ];

  const vibeOptions = [
    { id: "cinematic", label: "Sinematik & Derin", icon: "🎬", desc: "Zengin gölgeler ve sıcak tonlar" },
    { id: "crisp", label: "Canlı & Kristal Net", icon: "💎", desc: "Yüksek detay ve parlak renkler" },
    { id: "moody", label: "Karanlık & Dramatik", icon: "🖤", desc: "Negatif alan ve gizemli siluetler" },
  ];

  // Dynamic Recipe Generator based on chosen options
  const generateRecipe = (): ShotRecipe => {
    let lensChoice = "2x veya 3x Telefoto Lens (Yüz deformasyonunu önler)";
    let focusAndEV = "Modelin size en yakın gözüne dokunup basılı tutun (AE/AF Kilitli). Güneşi 1 tık aşağı kaydırın.";
    let compositionTip = "Modeli 2.5 metre geriye çekin, gözleri üst 1/3 kılavuz çizgisine hizalayın.";
    let goldenRule = "Güneşi modelin arkasına çapraz konumlandırıp saçlarda altın hale ışığı yakalayın.";
    let settings = { iso: "ISO 50 - 100", shutter: "1/250s", ev: "0.0 ile -0.3 EV", lens: "2x / 3x Telefoto" };
    let modelSpecificTip: string | undefined = undefined;

    if (subject === "night" || light === "dark") {
      lensChoice = "1x Ana Kamera Lensi (En geniş f/1.6 diyafram)";
      focusAndEV = "En parlak neon tabelaya dokunup sabitleyin. Güneş ikonunu aşağı çekip -1.0 EV yapın.";
      compositionTip = "Yağmur sonrası ıslak asfalt yansımalarını veya vitrin camlarını kadraja dahil edin.";
      goldenRule = "Telefonu asla havada sallamayın; dirseklerinizi göğsünüze yaslayın veya bir duvara dayayın.";
      settings = { iso: "ISO 200 - 400", shutter: "Gece Modu 2s", ev: "-1.0 EV", lens: "1x Ana Lens" };
    } else if (subject === "food") {
      lensChoice = "2x Telefoto Lens (Telefon gölgenizin tabağa düşmesini engeller)";
      focusAndEV = "Yemeğin en dokulu yerine (Örn: Çilek tohumu, sos parlaklığı) odaklayın. Pozlama: +0.3 EV.";
      compositionTip = "Tabakları 45 derecelik doğal pencere ışığına koyun, karşıya beyaz peçete reflektörü dikin.";
      goldenRule = "Tabağı tam merkezlemek yerine çapraz üçgen garnitür yerleşimi yapın.";
      settings = { iso: "ISO 100", shutter: "1/125s", ev: "+0.3 EV", lens: "2x Telefoto" };
    } else if (subject === "street" || subject === "action") {
      lensChoice = "1x Ana Lens veya 2x (Doğal insan görüş açısı)";
      focusAndEV = "Bölgeye önceden kilitlenmiş odak (Zone Focus) kullanın. EV: -0.3 EV.";
      compositionTip = "Kaldırım çizgilerini veya tramvay raylarını yönlendirici hat olarak kullanın.";
      goldenRule = "Dekanşörü kaydırarak Seri Çekim (Burst Mode) ile saniyede 10 kare alın.";
      settings = { iso: "ISO 200", shutter: "1/1000s (Burst)", ev: "-0.3 EV", lens: "1x Lens" };
    } else if (subject === "nature") {
      lensChoice = "0.5x Ultra Geniş veya 1x Ana Lens";
      focusAndEV = "Ufkun en parlak bulutuna odaklayıp pozlamayı kilitleyin.";
      compositionTip = "Ön plana bir kaya, çiçek veya ağaç dalı koyarak derinlik katmanı oluşturun.";
      goldenRule = "Sanal su terazisini açarak ufuk çizgisini 0.0° tam düz hizalayın.";
      settings = { iso: "ISO 50", shutter: "1/500s", ev: "-0.3 EV", lens: "0.5x / 1x" };
    }

    // Model-Specific iPhone Enhancements
    if (device === "iphone") {
      const iphoneModelData = iphoneSpecsData.find((m) => m.id === iphoneModel);
      if (iphoneModelData) {
        let categoryKey: "night" | "street" | "landscape" | "portrait" | "foodMacro" = "portrait";
        if (subject === "night" || light === "dark") categoryKey = "night";
        else if (subject === "food") categoryKey = "foodMacro";
        else if (subject === "street" || subject === "action") categoryKey = "street";
        else if (subject === "nature") categoryKey = "landscape";

        const modelRecipe = iphoneModelData.recipes[categoryKey];
        if (modelRecipe) {
          lensChoice = `${modelRecipe.recommendedLens} (${iphoneModelData.name})`;
          focusAndEV = modelRecipe.stepByStepTip;
          goldenRule = modelRecipe.secretTrick;
          modelSpecificTip = `${iphoneModelData.name} Donanım Avantajı: ${modelRecipe.hardwareAdvantage}`;

          if (categoryKey === "night") {
            settings = { iso: "ISO 100 - 400", shutter: "Gece Modu Sabit", ev: "-0.7 EV", lens: "1x Ana Lens" };
          } else if (categoryKey === "portrait") {
            settings = { iso: "ISO 50 - 100", shutter: "1/250s", ev: "+0.3 EV", lens: iphoneModelData.isPro ? "2x / 3x / 5x Telefoto" : "1x / 2x Kırpma" };
          } else if (categoryKey === "street") {
            settings = { iso: "ISO 100 - 200", shutter: "1/500s", ev: "-0.3 EV", lens: "1x (24mm / 28mm)" };
          } else if (categoryKey === "foodMacro") {
            settings = { iso: "ISO 80 - 125", shutter: "1/125s", ev: "+0.3 EV", lens: iphoneModelData.hardware.macroSupport ? "Otomatik Makro (2cm)" : "2x Telefoto Kırpma" };
          } else if (categoryKey === "landscape") {
            settings = { iso: "ISO 50", shutter: "1/500s", ev: "0.0 EV", lens: "0.5x Ultra Geniş" };
          }
        }
      }
    } else if (device === "samsung") {
      const samsungModelData = samsungSpecsData.find((m) => m.id === samsungModel);
      if (samsungModelData) {
        let categoryKey: "night" | "street" | "landscape" | "portrait" | "foodMacro" = "portrait";
        if (subject === "night" || light === "dark") categoryKey = "night";
        else if (subject === "food") categoryKey = "foodMacro";
        else if (subject === "street" || subject === "action") categoryKey = "street";
        else if (subject === "nature") categoryKey = "landscape";

        const modelRecipe = samsungModelData.recipes[categoryKey];
        if (modelRecipe) {
          lensChoice = `${modelRecipe.recommendedLens} (${samsungModelData.name})`;
          focusAndEV = modelRecipe.stepByStepTip;
          goldenRule = modelRecipe.secretTrick;
          modelSpecificTip = `${samsungModelData.name} Donanım Avantajı: ${modelRecipe.hardwareAdvantage}`;

          if (categoryKey === "night") {
            settings = { iso: "ISO 100 - 320", shutter: "Nightography Sabit", ev: "-0.7 EV", lens: "1x Ana Kamera" };
          } else if (categoryKey === "portrait") {
            settings = { iso: "ISO 50 - 100", shutter: "1/250s", ev: "+0.3 EV", lens: "3x / 5x Optik Telefoto" };
          } else if (categoryKey === "street") {
            settings = { iso: "ISO 100 - 200", shutter: "1/640s", ev: "-0.3 EV", lens: "2x (48mm) / 3x (70mm)" };
          } else if (categoryKey === "foodMacro") {
            settings = { iso: "ISO 80 - 100", shutter: "1/160s", ev: "+0.3 EV", lens: samsungModelData.hardware.macroSupport ? "2cm Odak İyileştirici Makro" : "2x / 3x Telefoto" };
          } else if (categoryKey === "landscape") {
            settings = { iso: "ISO 50", shutter: "1/800s", ev: "0.0 EV", lens: samsungModelData.isPro ? "200MP / 50MP Expert RAW" : "50MP Yüksek Çözünürlük" };
          }
        }
      }
    }

    const checklist = [
      "Lensinizi tişörtünüzle değil, mikrofiber bezle dairesel silin.",
      device === "iphone"
        ? iphoneSpecsData.find((m) => m.id === iphoneModel)?.hardware.cameraControl
          ? "Kamera Denetimi tuşu ile anlık EV veya odak kaydırıcısını kullanın."
          : iphoneSpecsData.find((m) => m.id === iphoneModel)?.hardware.actionButton
          ? "Eylem Düğmesi ile 0.5 saniyede hızlı kamera açın."
          : "Üstteki RAW simgesini açın ve 48MP yüksek çözünürlüğü etkinleştirin."
        : device === "samsung"
        ? (samsungSpecsData.find((m) => m.id === samsungModel)?.chassisDesign?.formFactor === "fold" ||
           samsungSpecsData.find((m) => m.id === samsungModel)?.chassisDesign?.formFactor === "flip")
          ? "📐 Flex Stand Avantajı: Cihazı 90° açıyla masaya koyup harici tripoda gerek kalmadan eller serbest çekim yapın veya Dual Preview ile arka kameradan yüksek kaliteli selfie çekin."
          : samsungSpecsData.find((m) => m.id === samsungModel)?.hardware.spaceZoom
          ? "Uzaktaki detaylar için Zoom Lock çerçevesine dokunarak kadrajı kilitleyin."
          : "Expert RAW veya Pro modunu açıp 50MP yüksek çözünürlüğü kontrol edin."
        : "Kamera ayarlarından 3x3 kılavuz çizgilerini ve Pro modu kontrol edin.",
      "Dekanşöre basarken nefesinizi hafifçe vererek mikro titreşimi sıfırlayın.",
    ];

    return {
      title: `${subjectOptions.find(s => s.id === subject)?.label || "Özel"} Çekim Reçetesi`,
      subtitle: `${lightOptions.find(l => l.id === light)?.label || "Doğal Işık"} & ${vibeOptions.find(v => v.id === vibe)?.label || "Sinematik"} Vibe`,
      lensChoice,
      focusAndEV,
      compositionTip,
      goldenRule,
      recommendedSettings: settings,
      proChecklist: checklist,
      modelSpecificTip,
    };
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Trigger confetti celebration on final recipe!
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#f59e0b", "#06b6d4", "#ffffff"],
      });
      setCurrentStep(5); // Show result
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSubject("");
    setLight("");
    setDevice("");
    setVibe("");
    setCopied(false);
  };

  const recipe = generateRecipe();

  const handleCopyRecipe = () => {
    const text = `📸 ShutterCraft Pro Çekim Reçetesi:
Başlık: ${recipe.title}
1. Lens & Mesafe: ${recipe.lensChoice}
2. Odak & Pozlama: ${recipe.focusAndEV}
3. Kompozisyon & Işık: ${recipe.compositionTip}
★ Altın Kural: ${recipe.goldenRule}
⚙️ Ayarlar: ISO: ${recipe.recommendedSettings.iso} | Shutter: ${recipe.recommendedSettings.shutter} | EV: ${recipe.recommendedSettings.ev}
Lensini temizlemeyi unutma!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="wizard" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <Wand2 className="w-3.5 h-3.5" />
            <span>Akıllı Çekim Sihirbazı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            "Ne Çekmek İstiyorsun?" Anlık Ayar Reçetesi
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
            Ortamını ve amacını seç, profesyonel fotoğrafçıların o an uygulayacağı 3 maddelik nokta atışı kamera reçetesini anında al.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="rounded-3xl bg-camera-card/90 backdrop-blur-2xl border border-camera-border p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Progress Bar (if steps 1-4) */}
          {currentStep <= 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                <span>Adım {currentStep} / {totalSteps}</span>
                <span className="text-amber-400 font-semibold">
                  {currentStep === 1 && "Konu Seçimi"}
                  {currentStep === 2 && "Işık & Ortam"}
                  {currentStep === 3 && "Cihaz Türü"}
                  {currentStep === 4 && "İstenen Vibe"}
                </span>
              </div>
              <div className="w-full h-1.5 bg-camera-darkest rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-cyan-400 transition-all duration-300 rounded-full"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: SUBJECT */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">1. Adım: Şu anda neyin fotoğrafını çekeceksiniz?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {subjectOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSubject(opt.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      subject === opt.id
                        ? "bg-amber-500/15 border-amber-500 shadow-glow"
                        : "bg-camera-darkest/70 border-white/5 hover:border-white/20"
                    }`}
                  >
                    <span className="text-2xl mb-2">{opt.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-white">{opt.label}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{opt.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: LIGHTING */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">2. Adım: Bulunduğunuz yerin ışık durumu nasıl?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {lightOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setLight(opt.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      light === opt.id
                        ? "bg-amber-500/15 border-amber-500 shadow-glow"
                        : "bg-camera-darkest/70 border-white/5 hover:border-white/20"
                    }`}
                  >
                    <span className="text-2xl mb-2">{opt.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-white">{opt.label}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{opt.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: DEVICE */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">3. Adım: Hangi telefonu kullanıyorsunuz?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {deviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setDevice(opt.id)}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      device === opt.id
                        ? "bg-amber-500/15 border-amber-500 shadow-glow"
                        : "bg-camera-darkest/70 border-white/5 hover:border-white/20"
                    }`}
                  >
                    <span className="text-2xl mb-3">{opt.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-white">{opt.label}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{opt.desc}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Specific iPhone Model Picker */}
              {device === "iphone" && (
                <div className="p-4 sm:p-5 rounded-2xl bg-camera-darkest/90 border border-amber-500/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <label className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4" />
                      <span>Hangi iPhone Modelini Kullanıyorsunuz?</span>
                    </label>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      iPhone 12'den 18 Pro Max'e Özel Sensör Verisi
                    </span>
                  </div>

                  <select
                    value={iphoneModel}
                    onChange={(e) => setIphoneModel(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                  >
                    {iphoneSpecsData.map((m) => (
                      <option key={m.id} value={m.id} className="bg-zinc-950 text-white">
                        {m.name} ({m.generation}) — {m.badge}
                      </option>
                    ))}
                  </select>

                  {/* Selected model preview info */}
                  {iphoneSpecsData.find((m) => m.id === iphoneModel) && (
                    <div className="mt-3 p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="text-zinc-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="font-semibold text-white">
                          {iphoneSpecsData.find((m) => m.id === iphoneModel)?.name}:
                        </span>
                        <span className="text-zinc-400 text-[11px]">
                          {iphoneSpecsData.find((m) => m.id === iphoneModel)?.hardware.mainSensor}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                        {iphoneSpecsData.find((m) => m.id === iphoneModel)?.evaluation.verdictBadge}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Specific Samsung Galaxy Model Picker */}
              {device === "samsung" && (
                <div className="p-4 sm:p-5 rounded-2xl bg-camera-darkest/90 border border-cyan-500/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <label className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4" />
                      <span>Hangi Samsung Galaxy Modelini Kullanıyorsunuz?</span>
                    </label>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      Galaxy S21'den S26 Ultra'ya Özel Optik Veri
                    </span>
                  </div>

                  <select
                    value={samsungModel}
                    onChange={(e) => setSamsungModel(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                  >
                    <optgroup label="Galaxy S Serisi (Amiral Gemisi & Ultra)" className="bg-zinc-950 text-cyan-400 font-bold">
                      {samsungSpecsData
                        .filter((m) => !m.id.includes("fold") && !m.id.includes("flip"))
                        .map((m) => (
                          <option key={m.id} value={m.id} className="bg-zinc-900 text-white font-normal">
                            {m.name} ({m.generation}) — {m.badge}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Galaxy Z Serisi (Fold & Flip Katlanabilir)" className="bg-zinc-950 text-purple-400 font-bold">
                      {samsungSpecsData
                        .filter((m) => m.id.includes("fold") || m.id.includes("flip"))
                        .map((m) => (
                          <option key={m.id} value={m.id} className="bg-zinc-900 text-white font-normal">
                            {m.name} ({m.generation}) — {m.badge}
                          </option>
                        ))}
                    </optgroup>
                  </select>

                  {/* Selected Samsung model preview info */}
                  {samsungSpecsData.find((m) => m.id === samsungModel) && (
                    <div className="mt-3 p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="text-zinc-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span className="font-semibold text-white">
                          {samsungSpecsData.find((m) => m.id === samsungModel)?.name}:
                        </span>
                        <span className="text-zinc-400 text-[11px]">
                          {samsungSpecsData.find((m) => m.id === samsungModel)?.hardware.mainSensor}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                        {samsungSpecsData.find((m) => m.id === samsungModel)?.evaluation.verdictBadge}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* STEP 4: VIBE */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">4. Adım: Nasıl bir görsel atmosfer istiyorsunuz?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {vibeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setVibe(opt.id)}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      vibe === opt.id
                        ? "bg-amber-500/15 border-amber-500 shadow-glow"
                        : "bg-camera-darkest/70 border-white/5 hover:border-white/20"
                    }`}
                  >
                    <span className="text-2xl mb-3">{opt.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-white">{opt.label}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{opt.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* NAVIGATION BUTTONS (Steps 1-4) */}
          {currentStep <= 4 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-camera-border">
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-4 py-2 rounded-xl text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Geri Dön
                </button>
              ) : (
                <div />
              )}

              <button
                disabled={
                  (currentStep === 1 && !subject) ||
                  (currentStep === 2 && !light) ||
                  (currentStep === 3 && !device) ||
                  (currentStep === 4 && !vibe)
                }
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs tracking-wide shadow-glow transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
              >
                <span>{currentStep === 4 ? "Reçetemi Üret" : "Sonraki Adım"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* STEP 5: FINAL INSTANT RECIPE RESULT */}
          {currentStep === 5 && (
            <div className="space-y-6">
              {/* Recipe Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-camera-border">
                <div>
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Özel Reçeteniz Hazırlandı</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {recipe.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {recipe.subtitle}
                  </p>

                  {/* iPhone Model Optimization Pill */}
                  {device === "iphone" && (
                    <div className="mt-2.5 inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                      <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-300 font-semibold">
                        {iphoneSpecsData.find((m) => m.id === iphoneModel)?.name}
                      </span>
                      <span className="text-zinc-400 text-[11px]">
                        • {iphoneSpecsData.find((m) => m.id === iphoneModel)?.hardware.mainSensor}
                      </span>
                      <a
                        href="#iphone-studio"
                        className="text-amber-400 hover:text-white underline font-mono text-[10px] ml-1"
                      >
                        Model Rehberine Git →
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyRecipe}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Kopyalandı!" : "Reçeteyi Kopyala"}</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Yeniden Başlat"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 3 CORE PILLARS OF ACTION */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Lens */}
                <div className="p-5 rounded-2xl bg-camera-darkest/90 border border-camera-border flex flex-col justify-between">
                  <div>
                    <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 font-mono text-xs font-bold flex items-center justify-center mb-3">
                      1
                    </span>
                    <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-1">
                      Lens & Mesafe
                    </h4>
                    <p className="text-sm font-semibold text-white leading-snug">
                      {recipe.lensChoice}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-zinc-500">
                    Optik kaliteyi bozmadan doğru yüz açısı.
                  </div>
                </div>

                {/* 2. Focus & EV */}
                <div className="p-5 rounded-2xl bg-camera-darkest/90 border border-camera-border flex flex-col justify-between">
                  <div>
                    <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center mb-3">
                      2
                    </span>
                    <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-1">
                      Odak & Pozlama (EV)
                    </h4>
                    <p className="text-sm font-semibold text-white leading-snug">
                      {recipe.focusAndEV}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-zinc-500">
                    Otomatik modun ışığı patlatmasını engeller.
                  </div>
                </div>

                {/* 3. Light & Composition */}
                <div className="p-5 rounded-2xl bg-camera-darkest/90 border border-camera-border flex flex-col justify-between">
                  <div>
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center mb-3">
                      3
                    </span>
                    <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-1">
                      Işık Açısı & Geometri
                    </h4>
                    <p className="text-sm font-semibold text-white leading-snug">
                      {recipe.compositionTip}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-zinc-500">
                    Yapay ampul yerine yönlü doğal dolgu.
                  </div>
                </div>
              </div>

              {/* Secret Golden Rule */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-amber-300 uppercase tracking-wide">
                    Fotoğrafçının Gizli Sırrı:
                  </div>
                  <div className="text-zinc-200 mt-1 leading-relaxed">
                    {recipe.goldenRule}
                  </div>
                </div>
              </div>

              {/* Model-Specific Hardware Tip */}
              {recipe.modelSpecificTip && (
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <div className="font-bold text-cyan-300 uppercase tracking-wide">
                      Seçilen iPhone Donanımının Sağladığı Özel Avantaj:
                    </div>
                    <div className="text-zinc-200 mt-1 leading-relaxed">
                      {recipe.modelSpecificTip}
                    </div>
                  </div>
                </div>
              )}

              {/* Önerilen Ayarlar Matrisi */}
              <div className="p-4 rounded-2xl bg-camera-darkest/70 border border-white/5">
                <div className="text-xs font-mono text-zinc-400 mb-2.5 flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Önerilen Çekim Ayarları</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <div className="p-2 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-[10px] text-zinc-500 block">LENS / AÇI</span>
                    <span className="text-white font-bold">{recipe.recommendedSettings.lens}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-[10px] text-zinc-500 block">HASSASİYET (ISO)</span>
                    <span className="text-cyan-400 font-bold">{recipe.recommendedSettings.iso}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-[10px] text-zinc-500 block">DEKANŞÖR (HIZ)</span>
                    <span className="text-cyan-400 font-bold">{recipe.recommendedSettings.shutter}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-[10px] text-zinc-500 block">POZLAMA (EV)</span>
                    <span className="text-amber-400 font-bold">{recipe.recommendedSettings.ev}</span>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="pt-2">
                <div className="text-xs font-bold text-zinc-300 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Çekim Öncesi Hızlı Kontrol Listesi</span>
                </div>
                <div className="space-y-1.5">
                  {recipe.proChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
