import { DeviceShortcut } from "@/types";

export const deviceShortcuts: DeviceShortcut[] = [
  {
    id: "ios-aeaf",
    os: "ios",
    title: "AE/AF Kilidi ve Hassas Pozlama",
    category: "Odak & Pozlama",
    icon: "Focus",
    steps: [
      "Kamerayı açın ve odaklamak istediğiniz nesneye sarı kutucuk belirene kadar 1.5 saniye basılı tutun.",
      "Üst kısımda sarı renkte 'AE/AF KİLİTLENDİ' yazısı belirecektir.",
      "Kutunun sağındaki güneş simgesine parmağınızı koyup aşağı doğru kaydırarak pozlamayı karartın veya yukarı kaydırarak aydınlatın.",
      "Telefonu hareket ettirseniz bile odak ve ışık ayarı asla değişmeyecektir."
    ],
    shortcutTip: "Gün batımında güneşi kadrajın dışına alarak kilitleyin, ardından güneşe dönüp pozlamayı indirin; büyüleyici siluetler elde edersiniz.",
    testedDevices: "iPhone 11 - iPhone 16 Pro Max (iOS 15 - 18)"
  },
  {
    id: "ios-burst",
    os: "ios",
    title: "Yıldırım Hızında Seri Çekim (Burst Mode)",
    category: "Hızlı Çekim",
    icon: "Zap",
    steps: [
      "Dekanşör butonuna dokunun ve parmağınızı kaldırmadan hızla SOLA kaydırıp tutun.",
      "Butonun içinde saniyede 10 kare hızla artan sayı sayacı belirecektir.",
      "Parmağınızı çektiğinizde çekim tamamlanır.",
      "Fotoğraflar uygulamasından albüme girip 'Seç...' diyerek havada sıçrama veya rüzgar anını tek kare olarak ayırın."
    ],
    shortcutTip: "Ayarlar > Kamera > 'Seri Çekim için Sesi Yükselt' seçeneğini açarsanız, ses açma tuşuna basılı tutarak da seri çekim yapabilirsiniz.",
    testedDevices: "Tüm iOS Cihazlar"
  },
  {
    id: "ios-proraw",
    os: "ios",
    title: "Apple ProRAW & 48MP Çözünürlük Kilidi",
    category: "RAW & Kalite",
    icon: "Sliders",
    steps: [
      "Ayarlar > Kamera > Biçimler > 'ProRAW ve Çözünürlük Denetimi'ni aktif edin.",
      "Varsayılan biçimi 'ProRAW Maks (48 MP)' olarak ayarlayın.",
      "Kamera uygulamasını açtığınızda sağ üst köşede çıkan 'RAW MAX' simgesine dokunarak çizgiyi kaldırın.",
      "Çektiğiniz fotoğraf 10-12 bit dinamik aralıkla ve 8000x6000 piksel devasa detayla kaydedilir."
    ],
    shortcutTip: "ProRAW fotoğraflar Lightroom Mobile veya VSCO'da düzenlenirken gölgelerden gürültüsüz inanılmaz detay çıkartır.",
    testedDevices: "iPhone 12 Pro ve üstü Pro modelleri"
  },
  {
    id: "ios-night-max",
    os: "ios",
    title: "Maksimum 30 Saniye Tripod Gece Pozlaması",
    category: "Gece Modu",
    icon: "Moon",
    steps: [
      "Karanlık ortamda sol üstte sarı gece modu simgesi belirdiğinde üzerine dokunun.",
      "Altta açılan süreyi 'Otomatik'ten sağa kaydırarak 'Maks' seviyesine (genellikle 10 saniye) getirin.",
      "Telefonu bir tripoda veya sabit bir kayaya dayadığınızda jiroskop bunu algılar ve süre otomatik olarak 30 SANİYEYE çıkar!",
      "Dekanşöre basın; Samanyolu yıldızlarını ve gökyüzü bulutlarını yakalayın."
    ],
    shortcutTip: "Dekanşöre basarken telefonu sallamamak için 3 saniye zamanlayıcı veya Apple Watch dekanşörünü kullanın.",
    testedDevices: "iPhone 11 ve üstü modeller"
  },
  {
    id: "android-pro-mode",
    os: "android",
    title: "Samsung / Xiaomi Profesyonel Mod (Pro Mod)",
    category: "Pro Mod",
    icon: "Sliders",
    steps: [
      "Kamera uygulamasında alt çubuğu sağa kaydırıp 'Daha Fazla' > 'PRO' modunu seçin.",
      "ISO değerini '50' veya '100'e sabitleyin (Grenleri önler).",
      "Dekanşör hızını ortam ışığına göre 1/500s veya 1/4s olarak ayarlayın.",
      "MF (Manuel Netleme / Odak) seçeneğine basıp kaydırarak yeşil Focus Peaking çizgileriyle süjenizi jilet gibi netleyin."
    ],
    shortcutTip: "Focus Peaking ekranda net olan yerleri neon yeşil çizgilerle boyar. Süjenizin gözü yeşil yandığında dekanşöre basın!",
    testedDevices: "Samsung Galaxy S/Z Serisi, Xiaomi Ultra/Pro, Pixel"
  },
  {
    id: "android-burst",
    os: "android",
    title: "Aşağı Kaydırarak Hızlı Seri Çekim",
    category: "Hızlı Çekim",
    icon: "Zap",
    steps: [
      "Kamera ekranında yuvarlak dekanşör butonuna parmağınızı basıp hemen EKRANIN AŞAĞISINA doğru sürükleyin.",
      "Saniyede 30 kareye varan çılgın bir hızla seri fotoğraf çekecektir.",
      "Galeriden albüme girip 'En İyi Çekim' (Önerilen Kare) seçeneğine bakın veya istediğiniz kareyi seçip kaydedin."
    ],
    shortcutTip: "Kamera Ayarları > 'Dekanşör tuşunu kaydır' ayarından 'Seri çekim yap' seçeneğinin açık olduğundan emin olun.",
    testedDevices: "One UI 5.0+ Samsung Galaxy, HyperOS Xiaomi"
  },
  {
    id: "android-expert-raw",
    os: "android",
    title: "Expert RAW & Çoklu Pozlama / Yıldız Çekimi",
    category: "RAW & Kalite",
    icon: "Camera",
    steps: [
      "Galaxy Store'dan resmi 'Expert RAW' uygulamasını indirin veya kameranın Pro sekmesinden açın.",
      "16-bit doğrusal DNG RAW formatını seçin.",
      "Üstteki 'Astrofotoğrafçılık' modunu seçin; gökyüzü takımyıldızlarını ekranda canlı harita olarak görebilirsiniz.",
      "Çekim süresini 4-7 dakikaya ayarlayıp yıldızların hareket izlerini kaydedin."
    ],
    shortcutTip: "Çekim sonrasında doğrudan Adobe Lightroom ile senkronize açabilir ve tek tıkla düzenleyebilirsiniz.",
    testedDevices: "Samsung Galaxy S21 Ultra - S24 Ultra"
  },
  {
    id: "android-grid-level",
    os: "android",
    title: "Sanal Su Terazisi ve 3x3 Kılavuz Çizgileri",
    category: "Odak & Pozlama",
    icon: "Grid",
    steps: [
      "Kamera ayarları (Dişli simgesi) > 'Kılavuz Çizgileri' (Grid lines) seçeneğini açın.",
      "'Çekim Önerileri' (Shot Suggestions) veya 'Düzey Çizgisi' (Level line) özelliğini etkinleştirin.",
      "Fotoğraf çekerken ekranda sarı bir yuvarlak ve yatay çizgi belirir; telefon tam düz olduğunda sarıya döner ve kilitlenir."
    ],
    shortcutTip: "Eğik binalar ve yana kaymış deniz ufuk çizgilerini daha çekim anında sıfır hata ile düzeltir.",
    testedDevices: "Samsung, Google Pixel, Xiaomi, Oppo"
  }
];
