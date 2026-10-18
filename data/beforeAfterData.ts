import { BeforeAfterScenario } from "@/types";

export const beforeAfterScenarios: BeforeAfterScenario[] = [
  {
    id: "night-neon",
    title: "Gece Şehir Manzarası",
    category: "Gece & Düşük Işık",
    description: "Otomatik mod sokak lambalarını patlatıp gökyüzünü yapay griye boyar. -1.0 EV düşürülerek çekildiğinde gerçek neon renkleri ve derin siyahlar ortaya çıkar.",
    beforeLabel: "Otomatik Bas-Çek",
    afterLabel: "ShutterCraft Pro Ayar",
    beforeImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    beforeDetails: "Patlamış sokak lambaları, kirli lens izleri, yapay aydınlık gökyüzü, grenli doku.",
    afterDetails: "-1.0 EV pozlama telafisi, temizlenmiş lens, kilitli neon odak, kristal kontrast.",
    appliedSettings: {
      lens: "1x Ana Lens (f/1.6)",
      shutter: "Gece Modu 2s Sabit",
      iso: "ISO 125",
      ev: "-1.0 EV",
      keyTechnique: "Parlak tabelaya kilitli AE/AF & dirsek sabitleme"
    }
  },
  {
    id: "portrait-golden",
    title: "Altın Saat Portresi",
    category: "Portre & İnsan",
    description: "1x geniş açıyla yüze yaklaşıldığında burun büyür ve yüz formu deforme olur. 3x optik lense geçilip ters ışık kullanıldığında sinematik halo etkisi oluşur.",
    beforeLabel: "1x Standart Çekim",
    afterLabel: "3x Telefoto + Ters Saç Işığı",
    beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    beforeDetails: "Geniş açı fıçı bükülmesi, tepe ışığında göz altı gölgeleri, sıradan arka plan.",
    afterDetails: "3x telefoto sıkıştırma, saç tellerinde altın ters ışık parıltısı, yumuşak f/2.8 bokeh.",
    appliedSettings: {
      lens: "3x Telefoto (77mm eşdeğeri)",
      shutter: "1/500s",
      iso: "ISO 64",
      ev: "+0.3 EV",
      keyTechnique: "Güneşi modelin arkasına çapraz konumlandırma"
    }
  },
  {
    id: "food-flatlay",
    title: "Gurme Kahve & Yemek",
    category: "Yemek & Makro",
    description: "Sarı iç mekân ampulü yemekleri soluk ve yağlı gösterir. 45° pencere kenarı ışığı ve beyaz reflektör ile restoran menüsü standartları yakalanır.",
    beforeLabel: "Sarı Ampul Işığı",
    afterLabel: "45° Doğal Pencere Işığı",
    beforeImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    beforeDetails: "Karanlık gölgeler, yapay sarı renk tonu (WB hatası), telefon gölgesinin düşmesi.",
    afterDetails: "Doğal 45° pencere ışığı, beyaz menü kartı reflektörü, net krema dokusu.",
    appliedSettings: {
      lens: "2x Telefoto",
      shutter: "1/125s",
      iso: "ISO 100",
      ev: "+0.3 EV",
      keyTechnique: "Karşı cepheye beyaz peçete yansıtıcı yerleştirme"
    }
  },
  {
    id: "street-silhouette",
    title: "Sokak Silueti & Geometri",
    subtitle: "Mimari hatlar ve insan dengesi",
    category: "Sokak & Aksiyon",
    description: "Otomatik mod gölgedeki detayları açmaya çalışırken dramatik etkiyi yok eder. Pozlamayı gökyüzüne kilitleyip yüksek dekanşörle insan adımı havada dondurulur.",
    beforeLabel: "Düz Çekim",
    afterLabel: "Dramatik Siluet & Pusu Tekniği",
    beforeImage: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop",
    beforeDetails: "Puslu gri tonlar, belirsiz süje, hareket bulanıklığı olan adımlar.",
    afterDetails: "Pusu tekniği, çivi gibi donmuş adım, geometrik ışık şeridi, yüksek kontrast.",
    appliedSettings: {
      lens: "1x Ana Kamera",
      shutter: "1/1000s Seri Çekim",
      iso: "ISO 100",
      ev: "-0.7 EV",
      keyTechnique: "Pusu Tekniği + Seri Çekim Zamanlaması"
    }
  }
];
