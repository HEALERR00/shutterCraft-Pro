import { SamsungModelSpec } from "@/types";

export const samsungSpecsData: SamsungModelSpec[] = [
  {
    "id": "samsung-s21",
    "brand": "samsung",
    "series": "Galaxy S21",
    "name": "Samsung Galaxy S21",
    "badge": "64MP Telefoto & Hibrit 30x Space Zoom",
    "generation": "2021 Kompakt Amiral Gemisi",
    "releaseYear": 2021,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#3b82f6",
    "bestShootingType": "Sokak & Günlük Anlar (64MP Kırpma)",
    "recommendedSetting": "64MP Yüksek Çözünürlük • 3x Hibrit Optik Zoom • Tek Çekim (Single Take)",
    "topFeatureBadge": "64MP Sensör & 8K Video",
    "hardware": {
      "mainSensor": "12 MP (1/1.76\" sensör, 1.8µm piksel, f/1.8, Dual Pixel OIS)",
      "ultraWide": "12 MP (f/2.2, 120° görüş açısı, 1.4µm)",
      "telephoto": "64 MP (f/2.0, 1.1x optik, 3x hibrit optik, OIS)",
      "zoomCapabilities": "0.5x Ultra Geniş, 1x Geniş, 3x Hibrit, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.0",
      "rawSupport": "Pro Mod 12MP DNG RAW",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": false,
      "specialTech": [
        "64MP Yüksek Çözünürlük",
        "30x Space Zoom",
        "Tek Çekim (Single Take)",
        "8K 24fps Video"
      ]
    },
    "evaluation": {
      "strongestSide": "64MP sensör sayesinde gündüz manzara ve sokak çekimlerinde yüksek detay ve kırpma esnekliği; Dual Pixel hızlı otofokus.",
      "weakestSide": "Fiziki periskop lensi yoktur, zoom 3x sonrası yazılımsaldır ve otomatik makro netlemesi bulunmaz.",
      "scoreOverview": {
        "night": 7.2,
        "portrait": 7.8,
        "street": 8.3,
        "macro": 6,
        "landscape": 8,
        "video": 8.2
      },
      "verdictBadge": "Hızlı Sokak & 64MP Hibrit Yakalama",
      "bestShootingScenarioDetails": "Gündüz sokak hareketlerinde 64MP moduna geçerek binaların ve tabelaların en ince yazılarını dahi kayıpsız kaydeder."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Dual Pixel OIS ile Sabit Gece Modu",
        "recommendedLens": "1x Ana Kamera (f/1.8 Diyafram)",
        "isoShutterEv": "Gece Modu 2s | EV: -0.5 | ISO 250",
        "hardwareAdvantage": "Dual Pixel faz algılama teknolojisi loş ışıkta dahi anında kilitlenir; OIS sarsıntıyı önler.",
        "stepByStepTip": "Kamera modlarından 'Gece'ye geçin. 1x kamerayı seçip sarı halka dolana kadar telefonu sabit tutun.",
        "secretTrick": "Pro moduna geçip deklanşör hızını 4 saniyeye sabitleyerek akan araba ışıklarını yakalayın.",
        "commonTrap": "Karanlıkta 30x Space Zoom yapmaya çalışmak; pikseller dağılır."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "64MP Modu ile Yüksek Detaylı Sokak Kırpması",
        "recommendedLens": "64MP Modu (3:4 64MP)",
        "isoShutterEv": "1/500s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "64MP çözünürlük sokak sahnesini çektikten sonra istediğiniz insanı kırpıp öne çıkarmanızı sağlar.",
        "stepByStepTip": "Üst menüden en-boy oranını '3:4 64MP' yapın. Geniş sokağı çekip galeriye giderek süjeyi kırpın.",
        "secretTrick": "Tek Çekim (Single Take) modunu kullanarak koşan evcil hayvanın en iyi 10 fotoğraf ve videosunu aynı anda alın.",
        "commonTrap": "Hızlı hareket eden nesnelerde 64MP kullanmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "Ultra Geniş 120° ile Geniş Dağ ve Deniz",
        "recommendedLens": "0.5x Ultra Geniş Lens (13mm)",
        "isoShutterEv": "1/800s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "120 derecelik devasa görüş açısı tüm vadiyi tek kareye sığdırır.",
        "stepByStepTip": "Kılavuz çizgilerini açarak ufku yatay çizgiye hizalayın. Kamerayı yere paralel tutun.",
        "secretTrick": "Ön plana bir taş veya kır çiçeği koyarak geniş açıya üç boyutlu derinlik katın.",
        "commonTrap": "Kadrajın en köşelerine insan koyup kenar bükülmesine maruz bırakmak."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "Portre Modu ile Stüdyo Arka Planı",
        "recommendedLens": "Portre Modu (1x veya 2x Sanal)",
        "isoShutterEv": "1/250s | EV: +0.3 | f/2.0",
        "hardwareAdvantage": "Samsung Derinlik Motoru saç tellerini arka plandan ayırarak canlı bokeh daireleri üretir.",
        "stepByStepTip": "Portre moduna geçin, modelden 1.5 - 2 metre uzakta durun, efekt gücünü 5'e ayarlayın.",
        "secretTrick": "Portre efektlerinden 'Büyük Halka'yı seçerek arka plan ışıklarını stüdyo lambalarına dönüştürün.",
        "commonTrap": "Karanlık odada portre modu açmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "Yiyecek Modu ile Sıcak Renk Doygunluğu",
        "recommendedLens": "1x Yiyecek (Food) Modu",
        "isoShutterEv": "1/125s | EV: +0.3 | ISO 80",
        "hardwareAdvantage": "Yiyecek modu tabağın merkezini odaklar ve kenarları dairesel bulanıklaştırıp renkleri sıcaklaştırır.",
        "stepByStepTip": "Kamera 'Diğer' menüsünden 'Yiyecek' modunu seçin, odak halkasını tatlının üzerine sürükleyin.",
        "secretTrick": "Renk sıcaklığı kaydırıcısını hafif sarıya çekerek et ve ekmekleri fırından yeni çıkmış gibi gösterin.",
        "commonTrap": "Tabağa 5 cm sokulup odak kaçırmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "8K 24fps ve Süper Dengeli (Super Steady) Video",
        "recommendedLens": "1x Ana Kamera veya Süper Dengeli Ultra Geniş",
        "isoShutterEv": "8K 24fps veya FHD 60fps Super Steady",
        "hardwareAdvantage": "Ultra geniş açı ve gelişmiş elektronik stabilizasyon koşarken bile gimbal gibi çalışır.",
        "stepByStepTip": "Video çekerken üstteki el simgesine dokunarak 'Süper Dengeli'yi açın.",
        "secretTrick": "8K videodan izlerken anında 33MP yüksek çözünürlüklü ekran fotoğrafı yakalayın.",
        "commonTrap": "Loş ışıkta Süper Dengeli mod açmak."
      }
    }
  },
  {
    "id": "samsung-s21-plus",
    "brand": "samsung",
    "series": "Galaxy S21",
    "name": "Samsung Galaxy S21+",
    "badge": "64MP Telefoto & Geniş Ekran Vizör",
    "generation": "2021 Plus Amiral Gemisi",
    "releaseYear": 2021,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#3b82f6",
    "bestShootingType": "Manzara & Şehir Mimarisi (64MP Detay)",
    "recommendedSetting": "64MP Modu • 3x Hibrit Zoom • Pro Mod RAW",
    "topFeatureBadge": "64MP Çözünürlük & 4800mAh Pil",
    "hardware": {
      "mainSensor": "12 MP (1/1.76\", f/1.8, 1.8µm, Dual Pixel OIS)",
      "ultraWide": "12 MP (f/2.2, 120°)",
      "telephoto": "64 MP (f/2.0, 3x Hibrit Optik, OIS)",
      "zoomCapabilities": "0.5x, 1x, 3x Hibrit, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.0",
      "rawSupport": "Pro Mod 12MP DNG",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": false,
      "specialTech": [
        "64MP Telefoto Detayı",
        "Geniş 6.7\" Vizör",
        "Yönetmen Bakışı (Director's View)"
      ]
    },
    "evaluation": {
      "strongestSide": "Büyük 6.7 inç Dynamic AMOLED ekran sayesinde vizörde kompozisyonu kusursuz görme ve 64MP detay gücü.",
      "weakestSide": "Optik periskop zoom lensi ve lazer otofokus bulunmaz.",
      "scoreOverview": {
        "night": 7.3,
        "portrait": 7.9,
        "street": 8.3,
        "macro": 6,
        "landscape": 8.2,
        "video": 8.3
      },
      "verdictBadge": "Geniş Vizör & 64MP Şehir Detayı",
      "bestShootingScenarioDetails": "Geniş vizör konforu ile şehir meydanlarını ve tarihi köprüleri 64MP modunda çeker."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Pro Mod ile Gece Şehir Işıkları",
        "recommendedLens": "1x Ana Kamera (f/1.8)",
        "isoShutterEv": "1/4s | EV: -0.7 | ISO 200",
        "hardwareAdvantage": "Geniş f/1.8 diyafram ve optik stabilizasyon gece ışıklarını berrak tutar.",
        "stepByStepTip": "Pro moda geçin, ISO'yu 100-200 arasına alın, deklanşörü 2 saniyeye çekip telefonu duvara dayayın.",
        "secretTrick": "Yönetmen Bakışı (Director's View) ile ön ve arka kamerayı aynı anda kaydederek gece vlogu çekin.",
        "commonTrap": "Gece ultra geniş lense güvenmek."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Hibrit ile Güvenli Mesafeden Sokak Anları",
        "recommendedLens": "3x Telefoto Lens (64MP Sensör)",
        "isoShutterEv": "1/640s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "64MP telefoto sensör 3x yakınlaşmada optik kalitede insan portreleri çeker.",
        "stepByStepTip": "Karşı kaldırıma geçin, 3x butonuna basın, gölge-ışık kontrastını yakalayın.",
        "secretTrick": "Siyah-beyaz filtreyi açık tutarak sokak dokularını daha çekici hale getirin.",
        "commonTrap": "Hareketli nesnede 30x dijital zoom denemek."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "64MP Modu ile Ufuk Çizgisinde Her Detay",
        "recommendedLens": "64MP Ana/Tele Modu",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "64 milyon piksel doğadaki yaprakları ve deniz dalgalarını kristal gibi saklar.",
        "stepByStepTip": "Üst menüden 3:4 64MP seçin, ufku dengeleyip çekin.",
        "secretTrick": "Güneşin batış saatinde HDR'ı açık tutarak tepelerin renklerini canlı tutun.",
        "commonTrap": "Rüzgarda telefonu tek elle sallayarak çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "Doğal Ten Dokusu ve Arka Plan İzolasyonu",
        "recommendedLens": "Portre Modu (f/2.4)",
        "isoShutterEv": "1/250s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Yapay zeka derinlik algoritması insan saçlarını kusursuz ayıklar.",
        "stepByStepTip": "Modelden 2 metre uzakta durun, göz hizasından çekin.",
        "secretTrick": "Renk Noktası efektini seçerek arka planı siyah-beyaz, modeli renkli bırakın.",
        "commonTrap": "Modelin yüzüne çok yaklaşmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "Yiyecek Modu ve 45 Derece Açı",
        "recommendedLens": "1x Yiyecek Modu",
        "isoShutterEv": "1/160s | EV: +0.3 | ISO 100",
        "hardwareAdvantage": "Yiyecek modu otomatik renk sıcaklığı düzeltmesi uygular.",
        "stepByStepTip": "Tabağa 25 cm uzaktan bakın, odak dairesini tatlıya getirin.",
        "secretTrick": "Beyaz peçeteyle tabağın karanlık yüzüne dolgu ışığı verin.",
        "commonTrap": "Tabağın üzerine eğilip gölgenizi düşürmek."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Yönetmen Bakışı (Director's View) ile Çoklu Kamera",
        "recommendedLens": "Tüm Arka Kameralar + Ön Kamera",
        "isoShutterEv": "1080p 30fps Çoklu Kayıt",
        "hardwareAdvantage": "Aynı anda ultra geniş, ana, telefoto ve ön kameranın önizlemesini gösterir.",
        "stepByStepTip": "Kamera 'Diğer' menüsünden 'Yönetmen Bakışı'nı açın, konuşurken arka açılar arasında dokunarak geçin.",
        "secretTrick": "Canlı vlogging yaparken arka plandaki olayı ve kendi tepkinizi tek videoda toplayın.",
        "commonTrap": "Hızlı hareket ederken açı değiştirmek."
      }
    }
  },
  {
    "id": "samsung-s21-ultra",
    "brand": "samsung",
    "series": "Galaxy S21",
    "name": "Samsung Galaxy S21 Ultra",
    "badge": "108MP HM3, Çift Telefoto (3x & 10x) & 100x Space Zoom",
    "generation": "2021 Ultra Efsanesi",
    "releaseYear": 2021,
    "isPro": true,
    "backViewImage": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#6366f1",
    "bestShootingType": "Uzak Detay & Ay/Vahşi Yaşam (10x Optik & 100x Space Zoom)",
    "recommendedSetting": "10x Optik Periskop (240mm) • 108MP Modu • Lazer Otofokus • Expert RAW",
    "topFeatureBadge": "108MP & 10x Optik Periskop",
    "hardware": {
      "mainSensor": "108 MP ISOCELL HM3 (1/1.33\" dev sensör, 0.8µm, f/1.8, OIS, Lazer AF)",
      "ultraWide": "12 MP (f/2.2, Dual Pixel PDAF, Otomatik Makro Odaklama)",
      "telephoto": "Çift Telefoto: 10 MP 3x Optik (70mm f/2.4) + 10 MP 10x Optik Periskop (240mm f/4.9, Dual Pixel OIS)",
      "zoomCapabilities": "0.6x, 1x, 3x Optik, 10x Optik Periskop, 100x Space Zoom (Zoom Lock)",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | 3x: f/2.4 | 10x: f/4.9",
      "rawSupport": "Expert RAW (16-bit DNG) & Pro Mod",
      "macroSupport": true,
      "ois": true,
      "spaceZoom": "100x",
      "expertRawSupport": true,
      "specialTech": [
        "108MP Nona-binning (9 pikselli süper piksel)",
        "Çift Optik Telefoto (3x ve 10x)",
        "100x Space Zoom & Zoom Lock",
        "Lazer Otofokus Modülü",
        "Expert RAW Desteği"
      ]
    },
    "evaluation": {
      "strongestSide": "Çift optik telefoto mimarisi (3x ve 10x) sayesinde 10 metre ile 100 metre arasındaki her mesafede gerçek cam optik yakınlaştırma; 108MP devasa sensör ve lazer odak hızı.",
      "weakestSide": "10x periskop diyaframı f/4.9 olduğu için gece az ışık alır.",
      "scoreOverview": {
        "night": 8.8,
        "portrait": 9.3,
        "street": 9,
        "macro": 9,
        "landscape": 9.6,
        "video": 9.1
      },
      "verdictBadge": "10x Optik Periskop & 100x Space Zoom Öncüsü",
      "bestShootingScenarioDetails": "Stadyum maçlarında, uzaktaki anıtlarda ve ay çekimlerinde 10x periskop lens ve Zoom Lock özelliğiyle hedefe kilitlenip sarsıntısız optik detay alır."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "108MP Nona-Binning ile 12MP Aydınlık Gece",
        "recommendedLens": "1x Ana Kamera (108MP HM3 Nona-Binning)",
        "isoShutterEv": "Gece Modu 2s | EV: -0.7 | ISO 200",
        "hardwareAdvantage": "9 küçük pikseli tek bir 2.4µm devasa süper pikselde birleştirerek zifiri karanlıkta stüdyo berraklığı sağlar.",
        "stepByStepTip": "1x kamerayı kullanın, Lazer AF sayesinde karanlıkta bile 0.1 saniyede netler.",
        "secretTrick": "Tripod takıldığında Expert RAW uygulamasını açarak 30 saniye astrofotografi ile Samanyolu yıldızlarını yakalayın.",
        "commonTrap": "Karanlık sokakta 10x optik zoom denemek."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik (70mm) ile Klasik Portre ve Sokak Kompozisyonu",
        "recommendedLens": "3x Optik Telefoto (70mm f/2.4)",
        "isoShutterEv": "1/800s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "70mm odak uzaklığı karşı kaldırımdaki insanları fark ettirmeden doğal ifadeleriyle yakalar.",
        "stepByStepTip": "3x butonuna basın, kaldırım boyunca yürüyen siluetleri kadrajlayın.",
        "secretTrick": "Lazer AF sayesinde yürüyen insanların gözünü hiç kaçırmadan anında netler.",
        "commonTrap": "Koşan nesneleri 10x ile takip etmeye çalışmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "10x Periskop ile Dağ Zirvelerini Yanınıza Getirin",
        "recommendedLens": "10x Optik Periskop (240mm) & 108MP Ana Lens",
        "isoShutterEv": "1/500s | EV: -0.3 | ISO 50",
        "hardwareAdvantage": "240mm gerçek optik periskop dağları, bulutları ve gölleri inanılmaz bir derinlikle birbirine yapıştırır.",
        "stepByStepTip": "10x butonuna dokunun, sarı Zoom Lock çerçevesi kilitlenene kadar ekranda hedefe dokunun.",
        "secretTrick": "108MP moduna geçip geniş şehir manzarasını çekin; tüm pencereleri inceleyin.",
        "commonTrap": "Rüzgarlı havada 10x çekerken telefonu tek elle tutmak."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Optik Telefoto ile Mükemmel Yüz Oranı",
        "recommendedLens": "3x Portre Modu (70mm f/2.4)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "70mm gerçek lens yüz oranlarını bozmaz, kulakları ve burnu dengede tutar.",
        "stepByStepTip": "Portre moduna geçip 3x'i seçin, modelden 3 metre geride durup göze dokunun.",
        "secretTrick": "Lazer AF modelin göz bebeğini karanlıkta dahi 1 milisaniyede yakalar.",
        "commonTrap": "Portre için 1x kullanıp burnu büyütmek."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "Odak İyileştirici ile Otomatik 2cm Makro",
        "recommendedLens": "Ultra Geniş Makro (Odak İyileştirici Açık)",
        "isoShutterEv": "1/200s | EV: +0.3 | ISO 50",
        "hardwareAdvantage": "Ultra geniş sensörde Dual Pixel PDAF olduğu için 2cm mesafeden otomatik makro netlemesi yapar.",
        "stepByStepTip": "Kamera açıkken tabağa 3 cm yaklaşın. 'Odak İyileştirici' simgesini açık tutun.",
        "secretTrick": "Yemeğin en dokulu yerine (çilek tohumu, et yüzeyi) odaklayıp stüdyo makrosu elde edin.",
        "commonTrap": "Çok yaklaştığınızda telefonun gölgesini yemeğe düşürmek."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Tüm Kameralarda 4K 60fps & 8K Sinematik",
        "recommendedLens": "Tüm Kameralar (0.6x, 1x, 3x, 10x)",
        "isoShutterEv": "4K 60fps veya 8K 24fps",
        "hardwareAdvantage": "Tüm 4 kamerası da 4K 60fps video çekebilir; lensler arası akıcı geçiş sağlanır.",
        "stepByStepTip": "Video ayarlarından 4K 60fps seçin, çekim sırasında 1x'ten 10x'e kadar geçiş yapın.",
        "secretTrick": "Zoom Lock sayesinde 10x videoda uzaktaki kuşu veya gemiyi ekranda sabit tutun.",
        "commonTrap": "Gece iç mekanda 10x video çekmek."
      }
    }
  },
  {
    "id": "samsung-s21-fe",
    "brand": "samsung",
    "series": "Galaxy S21",
    "name": "Samsung Galaxy S21 FE",
    "badge": "3x Gerçek Optik Telefoto & Gece Portresi",
    "generation": "2022 Fan Edition",
    "releaseYear": 2022,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#10b981",
    "bestShootingType": "Portre & Günlük Telefoto Çekimi (3x Optik 76mm)",
    "recommendedSetting": "3x Optik Telefoto • Gece Portre Modu • Çift Kayıt",
    "topFeatureBadge": "3x Gerçek Optik Telefoto & 32MP Selfie",
    "hardware": {
      "mainSensor": "12 MP (1/1.76\", f/1.8, 1.8µm, Dual Pixel OIS)",
      "ultraWide": "12 MP (f/2.2, 123° ultra geniş)",
      "telephoto": "8 MP (3x Optik Telefoto, f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.5x, 1x, 3x Gerçek Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Pro Mod 12MP DNG",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": false,
      "specialTech": [
        "3x Gerçek Optik Telefoto Lens",
        "Gece Portre Algoritması",
        "Çift Kayıt (Dual Recording)"
      ]
    },
    "evaluation": {
      "strongestSide": "Standart S21'den farklı olarak hibrit değil gerçek 3x optik telefoto lense sahip olması; portrelerde gerçek optik bokeh sunar.",
      "weakestSide": "Telefoto sensörün 8MP olması nedeniyle 10x üzeri dijital zoomda detay kaybı başlar.",
      "scoreOverview": {
        "night": 7.5,
        "portrait": 8.2,
        "street": 8.3,
        "macro": 6.2,
        "landscape": 8,
        "video": 8.2
      },
      "verdictBadge": "3x Gerçek Optik & Fan Favorisi",
      "bestShootingScenarioDetails": "3x gerçek optik telefoto lensiyle sokak ve portre çekimlerinde insan yüzünü en doğal oranlarda yakalar."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Dual Pixel OIS ile Hızlı Gece Modu",
        "recommendedLens": "1x Ana Kamera (f/1.8)",
        "isoShutterEv": "Gece Modu 2s | EV: -0.7 | ISO 250",
        "hardwareAdvantage": "1.8µm büyük pikseller gece modunda minimum gürültü ile ışığı toplar.",
        "stepByStepTip": "Gece moduna geçin, 1x kamerayı seçip sarı sayaç bitene kadar telefonu sabit tutun.",
        "secretTrick": "Pozlamayı güneş simgesiyle -0.5 EV düşürün.",
        "commonTrap": "Karanlıkta 3x telefotoyu zorlamak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik Lens ile Fark Edilmeden Sokak Avı",
        "recommendedLens": "3x Optik Telefoto (76mm eşdeğeri)",
        "isoShutterEv": "1/500s | EV: -0.3 | ISO 125",
        "hardwareAdvantage": "Gerçek 3x cam lens optik sıkıştırma yaratarak sokak kompozisyonunu zenginleştirir.",
        "stepByStepTip": "Karşı kaldırıma geçin, 3x'e dokunun, yürüyen siluetleri yakalayın.",
        "secretTrick": "Deklanşöre basılı tutup aşağı kaydırarak seri çekim yapın.",
        "commonTrap": "Hızlı hareket eden araçları çekerken gecikme yaratmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "123 Derece Ultra Geniş ile Doğa Manzarası",
        "recommendedLens": "0.5x Ultra Geniş Lens (123°)",
        "isoShutterEv": "1/800s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "Geniş 123 derecelik açı dağları ve gölleri panoramaya gerek kalmadan tek kareye sığdırır.",
        "stepByStepTip": "Kılavuz çizgilerini açıp ufku yatay çizgiye hizalayın.",
        "secretTrick": "Yere çöküp ön plana taş koyarak derinlik katın.",
        "commonTrap": "Köşelerde bina veya insan bırakıp distorsiyona uğratmak."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Optik Telefoto Portresi (76mm)",
        "recommendedLens": "3x Portre Modu (f/2.4)",
        "isoShutterEv": "1/250s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Gerçek 3x lens kulak ve burun oranını mükemmel dengeler, arka planı eritir.",
        "stepByStepTip": "Portre modunda 3x seçin, modelden 3 metre uzakta durun.",
        "secretTrick": "Stüdyo efektini seçerek yüze profesyonel dolgu ışığı katın.",
        "commonTrap": "Modelin yüzüne 1 metre yaklaşıp 3x açmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "3x ile Masadan Geride Gölgesiz Çekim",
        "recommendedLens": "3x Telefoto Lens",
        "isoShutterEv": "1/160s | EV: +0.3 | ISO 100",
        "hardwareAdvantage": "3x lens sayesinde tabağın üzerine eğilmezsiniz, gölgeniz düşmez.",
        "stepByStepTip": "Masadan 40 cm geride durun, 3x'e geçin.",
        "secretTrick": "Karşıya dik beyaz bir peçete koyarak stüdyo reflektörü yapın.",
        "commonTrap": "Tabağa 15 cm yaklaşıp netlemeyi kaçırmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Çift Kayıt (Dual Recording) ile Vlogger Modu",
        "recommendedLens": "Ön 32MP Kamera + Arka 12MP Ana Kamera",
        "isoShutterEv": "1080p 30fps Eşzamanlı",
        "hardwareAdvantage": "Ön ve arka kamerayı aynı anda ekranda yan yana kaydeder.",
        "stepByStepTip": "Kamera 'Diğer' menüsünden 'Çift Kayıt'ı açın.",
        "secretTrick": "Kendi görüntünüzü küçük kutucuk halinde köşeye sabitleyin.",
        "commonTrap": "Loş ışıkta ön kamerada gren oluşması."
      }
    }
  },
  {
    "id": "samsung-s22",
    "brand": "samsung",
    "series": "Galaxy S22",
    "name": "Samsung Galaxy S22",
    "badge": "50MP GN5 Sensör & Nightography Başlangıcı",
    "generation": "2022 Kompakt Amiral Gemisi",
    "releaseYear": 2022,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#14b8a6",
    "bestShootingType": "Gece Şehri & Sokak (Nightography)",
    "recommendedSetting": "50MP Ana Kamera • 3x Gerçek Optik Zoom • Gece Modu (Nightography)",
    "topFeatureBadge": "Nightography & 50MP GN5",
    "hardware": {
      "mainSensor": "50 MP ISOCELL GN5 (1/1.56\" büyük sensör, 1.0µm, f/1.8, Dual Pixel Pro OIS)",
      "ultraWide": "12 MP (f/2.2, 120°)",
      "telephoto": "10 MP (3x Optik Telefoto, 70mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x, 1x, 3x Gerçek Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Expert RAW (16-bit DNG) & Pro Mod",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": true,
      "specialTech": [
        "Nightography (Düşük Işık Motoru)",
        "50MP Dual Pixel Pro",
        "3x Gerçek Optik Telefoto",
        "Expert RAW"
      ]
    },
    "evaluation": {
      "strongestSide": "%23 daha büyük 50MP sensör ve Nightography sayesinde gece çekimlerinde devrimsel ışık toplama ve 3x gerçek optik zoom.",
      "weakestSide": "Otomatik makro netlemesi ve periskop zoom lensi bulunmaz.",
      "scoreOverview": {
        "night": 8.3,
        "portrait": 8.4,
        "street": 8.6,
        "macro": 6.5,
        "landscape": 8.5,
        "video": 8.5
      },
      "verdictBadge": "Nightography Öncüsü & 50MP Güç",
      "bestShootingScenarioDetails": "Akşam saatlerinde loş sokak lambaları altındaki tarihi mekanlarda ve kafelerde Nightography algoritmasıyla grensiz ve canlı fotoğraflar üretir."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Nightography ile %23 Daha Aydınlık Gece",
        "recommendedLens": "1x Ana Kamera (50MP GN5 f/1.8)",
        "isoShutterEv": "Gece Modu 2s | EV: -0.7 | ISO 320",
        "hardwareAdvantage": "ISOCELL GN5 sensörü önceki nesle göre %23 daha büyüktür ve süper şeffaf cam parlamayı emer.",
        "stepByStepTip": "Gece modunu seçin, sarı simge dolana kadar telefonu sabit tutun.",
        "secretTrick": "Expert RAW uygulamasını indirip 50MP ham gece fotoğraflarını Lightroom'da düzenleyin.",
        "commonTrap": "Karanlıkta ultra geniş lense güvenmek."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik (70mm) ile Sokakta Sıkıştırılmış Perspektif",
        "recommendedLens": "3x Optik Telefoto (70mm)",
        "isoShutterEv": "1/800s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "70mm gerçek optik lens insanları rahatsız etmeden doğal anları yakalar.",
        "stepByStepTip": "3x butonuna basın, gölge ve ışık kontrastına odaklanın.",
        "secretTrick": "Detay İyileştiriciyi (Detail Enhancer) açık tutarak binaların tuğla dokularını keskinleştirin.",
        "commonTrap": "Hızlı hareket eden süjelerde deklanşörü geciktirmek."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Modu ve Detay İyileştirici",
        "recommendedLens": "1x Ana Kamera (50MP Modu Açık)",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "50MP yüksek çözünürlük doğadaki her yaprağı net kaydeder.",
        "stepByStepTip": "Üst menüden 3:4 50MP seçin, sağ alttaki 'Detay İyileştirici' simgesine dokunun.",
        "secretTrick": "Ufku alt 1/3 kılavuz çizgisine hizalayarak gökyüzü bulutlarını öne çıkarın.",
        "commonTrap": "Rüzgarda telefonu sallantılı tutmak."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "Yapay Zeka Destekli Gece Portresi",
        "recommendedLens": "3x Portre Modu (70mm)",
        "isoShutterEv": "1/250s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Yapay Zeka Stereo Derinlik Haritası en ince saç tellerini dahi arka plandan ayırır.",
        "stepByStepTip": "Portre modunda 3x seçin, modelden 2.5 metre geride durun.",
        "secretTrick": "Gece ışıklı bir caddede 3x portre çekin; arka plan lambaları devasa dairesel bokehe dönüşür.",
        "commonTrap": "Modelin yüzüne 1 metre yaklaşıp 3x açmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "3x ile Masadan Gölgesiz Tabak Çekimi",
        "recommendedLens": "3x Telefoto Lens",
        "isoShutterEv": "1/160s | EV: +0.3 | ISO 100",
        "hardwareAdvantage": "70mm açı sayesinde telefonun gölgesi masaya düşmez.",
        "stepByStepTip": "Masadan 40 cm geride durun, tabağın en dokulu yerine dokunun.",
        "secretTrick": "Beyaz peçeteyi tabağın yanına dikip dolgu ışığı verin.",
        "commonTrap": "Tabağa 10 cm yaklaşıp netlemeyi kaybetmek."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Otomatik Kadrajlama (Auto Framing) ile Takip",
        "recommendedLens": "1x Ana Kamera (Otomatik Kadrajlama)",
        "isoShutterEv": "4K 60fps | OIS + VDIS",
        "hardwareAdvantage": "Kamera odadaki insanları algılar ve kadrajı otomatik olarak hareketli kişiye göre zoomlayıp kaydırır.",
        "stepByStepTip": "Video çekerken sağ alttaki küçük insan çerçevesi simgesine dokunun.",
        "secretTrick": "Sunum veya dans videosu çekerken telefonu tripoda koyun, kamera sizi oda içinde takip etsin.",
        "commonTrap": "Çok karanlıkta otomatik kadrajlama açmak."
      }
    }
  },
  {
    "id": "samsung-s22-plus",
    "brand": "samsung",
    "series": "Galaxy S22",
    "name": "Samsung Galaxy S22+",
    "badge": "50MP GN5, 1750 Nit Parlaklık & Nightography",
    "generation": "2022 Plus Amiral Gemisi",
    "releaseYear": 2022,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#14b8a6",
    "bestShootingType": "Manzara & Güneşli Açık Hava (1750 Nit Vizör)",
    "recommendedSetting": "50MP Detay İyileştirici • 3x Optik Zoom • Expert RAW",
    "topFeatureBadge": "1750 Nit Ekran & 50MP Nightography",
    "hardware": {
      "mainSensor": "50 MP ISOCELL GN5 (1/1.56\", f/1.8, Dual Pixel Pro OIS)",
      "ultraWide": "12 MP (f/2.2, 120°)",
      "telephoto": "10 MP (3x Optik, 70mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x, 1x, 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Expert RAW (16-bit DNG) & Pro Mod",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": true,
      "specialTech": [
        "1750 Nit Zirve Ekran Parlaklığı",
        "Nightography",
        "50MP Detay İyileştirici",
        "Expert RAW"
      ]
    },
    "evaluation": {
      "strongestSide": "1750 nit ekran parlaklığı sayesinde en sert öğle güneşinde bile vizörü ayna gibi net görebilme; 50MP Nightography sensörü.",
      "weakestSide": "Periskop lensi ve otomatik makro netlemesi yoktur.",
      "scoreOverview": {
        "night": 8.4,
        "portrait": 8.5,
        "street": 8.7,
        "macro": 6.5,
        "landscape": 8.7,
        "video": 8.6
      },
      "verdictBadge": "Güneş Altında Kristal Vizör & 50MP Güç",
      "bestShootingScenarioDetails": "Kumsalda, karlı dağlarda ve parlak güneş altında 1750 nit ekranıyla kusursuz kadrajlama yapar ve 50MP ile manzarayı kaydeder."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Nightography ile Berrak Akşam Manzarası",
        "recommendedLens": "1x Ana Kamera (50MP GN5)",
        "isoShutterEv": "Gece Modu 2s | EV: -0.7 | ISO 320",
        "hardwareAdvantage": "Gelişmiş NPU motoru loş ışıkta çoklu kareleri birleştirip greni yok eder.",
        "stepByStepTip": "Gece moduna geçin, 1x kamerayı kullanın.",
        "secretTrick": "Expert RAW uygulamasında çoklu pozlama (Multiple Exposure) ile yaratıcı gece sanatı yapın.",
        "commonTrap": "Karanlıkta dijital zoom yapmak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik Telefoto ile Dinamik Şehir Hikayeleri",
        "recommendedLens": "3x Optik Telefoto (70mm)",
        "isoShutterEv": "1/800s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "70mm odak açısı insanları doğal halleriyle kadraja alır.",
        "stepByStepTip": "Karşı kaldırımdan 3x ile çekim yapın.",
        "secretTrick": "Gölge çizgilerini takip edip kontrastı artırın.",
        "commonTrap": "Hızlı koşan süjelerde odak kaçırmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Detay İyileştirici ile Kristal Doğa",
        "recommendedLens": "50MP Ana Kamera",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "Detay İyileştirici yapay zeka ile doku ve kenarları derinleştirir.",
        "stepByStepTip": "3:4 50MP açın, Detay İyileştiriciye dokunun, ufku hizalayın.",
        "secretTrick": "1750 nit ekran sayesinde güneş altında pozlamayı tam görün.",
        "commonTrap": "Aşırı rüzgarda tek elle çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Telefoto ile Stüdyo Alan Derinliği",
        "recommendedLens": "3x Portre Modu (70mm)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "70mm lens kulak ve burun oranını dengeler.",
        "stepByStepTip": "Modelden 2.5 metre geride durup göze odaklayın.",
        "secretTrick": "Büyük Halka bokeh efektini kullanın.",
        "commonTrap": "Yüze 1 metre yaklaşıp 3x açmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "3x ile Masadan Gölgesiz Çekim",
        "recommendedLens": "3x Telefoto Lens",
        "isoShutterEv": "1/160s | EV: +0.3 | ISO 100",
        "hardwareAdvantage": "Telefon gölgesi tabağa düşmez.",
        "stepByStepTip": "Tabağa 40 cm uzaktan 3x ile odaklayın.",
        "secretTrick": "Peçete reflektörüyle dolgu ışığı verin.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Otomatik Kadrajlama & Süper Dengeli Video",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "4K 60fps | OIS Aktif",
        "hardwareAdvantage": "Sarsıntısız video sabitleme koşarken bile akıcı sonuç verir.",
        "stepByStepTip": "Video çekerken el simgesine dokunun.",
        "secretTrick": "Otomatik kadrajlamayla hareketli kişiyi takip edin.",
        "commonTrap": "Karanlıkta Süper Dengeli açmak."
      }
    }
  },
  {
    "id": "samsung-s22-ultra",
    "brand": "samsung",
    "series": "Galaxy S22",
    "name": "Samsung Galaxy S22 Ultra",
    "badge": "Süper Şeffaf Cam Lens, 100x Space Zoom & Expert RAW",
    "generation": "2022 Ultra Zirvesi & S-Pen Entegrasyonu",
    "releaseYear": 2022,
    "isPro": true,
    "backViewImage": "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#8b5cf6",
    "bestShootingType": "Gece Astrofotografi & Uzak Detay (100x Space Zoom)",
    "recommendedSetting": "Expert RAW (Astrofoto Modu) • 10x Optik Periskop • S-Pen Uzaktan Deklanşör",
    "topFeatureBadge": "Süper Şeffaf Cam & S-Pen Deklanşör",
    "hardware": {
      "mainSensor": "108 MP (1/1.33\", Süper Şeffaf Cam Kaplama, f/1.8, OIS, Lazer AF)",
      "ultraWide": "12 MP (f/2.2, Dual Pixel AF, 2cm Makro Odaklama)",
      "telephoto": "Çift Telefoto: 10 MP 3x Optik (70mm f/2.4) + 10 MP 10x Optik Periskop (240mm f/4.9, Dual Pixel OIS)",
      "zoomCapabilities": "0.6x, 1x, 3x Optik, 10x Optik Periskop, 100x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | 3x: f/2.4 | 10x: f/4.9",
      "rawSupport": "Expert RAW (16-bit DNG Çoklu Kare) & Pro Mod",
      "macroSupport": true,
      "ois": true,
      "spaceZoom": "100x",
      "expertRawSupport": true,
      "specialTech": [
        "Süper Şeffaf Cam (Super Clear Glass ile Sıfır Yansıma)",
        "S-Pen ile Uzaktan Titreşimsiz Deklanşör",
        "Astrofotoğrafçılık & Yıldız Kılavuzu",
        "Çift Optik Telefoto (3x ve 10x)",
        "Nightography"
      ]
    },
    "evaluation": {
      "strongestSide": "Süper Şeffaf Cam lensi sayesinde gece sokak lambalarında sıfır parlama (flare), dahili S-Pen ile sıfır titreşimli uzun pozlama ve Expert RAW astrofoto modu.",
      "weakestSide": "10x periskop lens gece f/4.9 diyaframla az ışık alır.",
      "scoreOverview": {
        "night": 9.3,
        "portrait": 9.4,
        "street": 9.3,
        "macro": 9.2,
        "landscape": 9.7,
        "video": 9.3
      },
      "verdictBadge": "Gece Parlamasız Cam & Astrofotografi Ustası",
      "bestShootingScenarioDetails": "Gövdeye entegre S-Pen'i çıkarıp uzaktan deklanşör olarak kullanarak tripoddaki telefona dokunmadan 30 saniyelik yıldız ve samanyolu çekimi yapar."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Süper Şeffaf Cam ile Yansımasız Gece ve Astrofoto",
        "recommendedLens": "1x Ana Kamera (Süper Şeffaf Cam f/1.8)",
        "isoShutterEv": "Gece Modu 2s | EV: -0.7 | ISO 200",
        "hardwareAdvantage": "Özel lens kaplaması gece çekimlerindeki hayalet ışıkları ve yeşil parlamaları tamamen yok eder.",
        "stepByStepTip": "Expert RAW uygulamasını açın, sağ üstteki 'Astrofoto' simgesine dokunun. Gökyüzü kılavuzunu açıp Samanyolu'na yöneltin.",
        "secretTrick": "S-Pen'i gövdeden çıkarıp uzaktan deklanşör tuşuna basarak tripoda titreşimsiz komut verin.",
        "commonTrap": "Karanlıkta 10x zoomu elde sallayarak çekmek."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "S-Pen Gizli Deklanşör ile Doğal Sokak Anları",
        "recommendedLens": "3x Optik (70mm) veya 10x Periskop",
        "isoShutterEv": "1/1000s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "Telefonu göğüs hizanızda tutup cebinizdeki S-Pen düğmesine basarak fark ettirmeden çekim yapın.",
        "stepByStepTip": "Telefonu sabit tutun, eliniz cebinizdeyken S-Pen butonuna basarak geçen insanları doğal halleriyle yakalayın.",
        "secretTrick": "3x optik telefoto ile karşı kaldırımdaki mimari detayları sıkıştırın.",
        "commonTrap": "S-Pen'in Bluetooth menzilini (10 metre) aşmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "10x Optik Periskop ile Uzak Dağ Katmanları",
        "recommendedLens": "10x Optik Periskop (240mm f/4.9)",
        "isoShutterEv": "1/500s | EV: -0.3 | ISO 50",
        "hardwareAdvantage": "240mm gerçek optik periskop dağları ön plana sıkıştırır.",
        "stepByStepTip": "10x'e dokunun, ekrandaki sarı Zoom Lock çerçevesine basarak kadrajı kilitleyin.",
        "secretTrick": "Expert RAW ile 16-bit DNG çekip gökyüzü renklerini Lightroom'da kusursuz düzenleyin.",
        "commonTrap": "Rüzgarda 10x çekerken iki elle tutmamak."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Optik Portre ve Süper Şeffaf Bokeh",
        "recommendedLens": "3x Portre Modu (70mm)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Lazer AF ve 70mm lens insan yüzünü stüdyo oranında çeker.",
        "stepByStepTip": "Portre modunda 3x seçin, modelden 3 metre geride durun, göze odaklayın.",
        "secretTrick": "Gece portresinde arka plan sokak lambaları pürüzsüz yuvarlak bokehlere dönüşür.",
        "commonTrap": "Yüze 1 metre yaklaşıp 3x açmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "Odak İyileştirici ile 2cm Makro Mucizesi",
        "recommendedLens": "Ultra Geniş Makro (Odak İyileştirici)",
        "isoShutterEv": "1/200s | EV: +0.3 | ISO 50",
        "hardwareAdvantage": "Ultra geniş açının Dual Pixel otofokusu 2 cm'den netler.",
        "stepByStepTip": "Tabağa 3 cm yaklaşın, sol alttaki sarı simgeyi açık tutun.",
        "secretTrick": "Işığı 45 derece yandan vererek tatlı dokusunu öne çıkarın.",
        "commonTrap": "Gölgenizi tabağa düşürmek."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Pro Video Modunda 24fps 8K & S-Pen Kayıt",
        "recommendedLens": "1x veya 10x Optik Lens",
        "isoShutterEv": "8K 24fps veya 4K 60fps Pro Video",
        "hardwareAdvantage": "Pro Video modunda mikrofon yönünü seçebilir, S-Pen ile uzaktan kaydı başlatabilirsiniz.",
        "stepByStepTip": "Pro Video moduna geçin, deklanşör hızını 1/50s yapın.",
        "secretTrick": "S-Pen ile kendinizi çekerken uzaktan kayda girip çıkın.",
        "commonTrap": "Loş ışıkta 8K çekmek."
      }
    }
  },
  {
    "id": "samsung-s23",
    "brand": "samsung",
    "series": "Galaxy S23",
    "name": "Samsung Galaxy S23",
    "badge": "Snapdragon 8 Gen 2 for Galaxy & Gelişmiş Nightography",
    "generation": "2023 Kompakt Amiral Gemisi",
    "releaseYear": 2023,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#10b981",
    "bestShootingType": "Sokak & Günlük Hızlı Anlar (Snapdragon ISP)",
    "recommendedSetting": "50MP Ana Kamera • 3x Optik Zoom (70mm) • Expert RAW 50MP",
    "topFeatureBadge": "Snapdragon 8 Gen 2 ISP & 50MP",
    "hardware": {
      "mainSensor": "50 MP ISOCELL GN3 (1/1.56\", f/1.8, Dual Pixel PDAF, OIS)",
      "ultraWide": "12 MP (f/2.2, 120°)",
      "telephoto": "10 MP (3x Optik, 70mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x, 1x, 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Expert RAW (50MP ve 12MP DNG) & Pro Mod",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": true,
      "specialTech": [
        "Snapdragon 8 Gen 2 for Galaxy ISP",
        "50MP Expert RAW",
        "Yapay Zeka Nesne Algılayıcı Motor",
        "Gelişmiş VDIS"
      ]
    },
    "evaluation": {
      "strongestSide": "Özel Snapdragon 8 Gen 2 for Galaxy işlemcisinin getirdiği olağanüstü ISP hızı, sıfır deklanşör gecikmesi ve Expert RAW ile 50MP ham çekim.",
      "weakestSide": "Periskop lensi ve otomatik makro netlemesi bulunmaz.",
      "scoreOverview": {
        "night": 8.7,
        "portrait": 8.8,
        "street": 9,
        "macro": 6.8,
        "landscape": 8.9,
        "video": 8.9
      },
      "verdictBadge": "Yüksek Hızlı ISP & 50MP Expert RAW",
      "bestShootingScenarioDetails": "Gelişmiş yapay zeka ISP motoru saç, yüz, gökyüzü ve kıyafetleri anında ayrı ayrı işleyerek sokak fotoğraflarında jilet gibi renk doğruluğu sunar."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Yapay Zeka Çoklu Kare ile Temiz Gece",
        "recommendedLens": "1x Ana Kamera (f/1.8)",
        "isoShutterEv": "Gece Modu 1-2s | EV: -0.7 | ISO 250",
        "hardwareAdvantage": "Snapdragon 8 Gen 2 ISP'si gece gürültüsünü yapay zekayla piksel seviyesinde siler.",
        "stepByStepTip": "Gece moduna geçin, 1x kamerayı seçip çekin.",
        "secretTrick": "Expert RAW uygulamasında Gece Gökyüzü modunu açıp 50MP yıldız çekimi yapın.",
        "commonTrap": "Karanlıkta 30x Space Zoom yapmak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik ile Sıfır Gecikmeli Sokak Portresi",
        "recommendedLens": "3x Optik Telefoto (70mm)",
        "isoShutterEv": "1/1000s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "Deklanşör gecikmesi kaldırılmıştır; basıldığı milisaniyede kareyi yakalar.",
        "stepByStepTip": "Karşı kaldırımdan 3x ile yürüyen insanları yakalayın.",
        "secretTrick": "Fotoğraf Asistanından 'Hızlı Deklanşör'ü açarak hareketi tam dondurun.",
        "commonTrap": "Hızlı hareket eden süjede odak kaçırmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Expert RAW ile Muazzam Dinamik Aralık",
        "recommendedLens": "1x Ana Kamera (50MP RAW)",
        "isoShutterEv": "1/800s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "50MP çözünürlükte doğrudan 16-bit DNG ham veri kaydeder.",
        "stepByStepTip": "Expert RAW uygulamasını açın, üstten 50MP seçin, manzarayı çekin.",
        "secretTrick": "Lightroom Mobile ile gölgeleri grensiz açın.",
        "commonTrap": "50MP dosyaların 40MB olduğunu unutup hafızayı doldurmak."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "Yapay Zeka Nesne Ayırma ile Doğal Saçlar",
        "recommendedLens": "3x Portre Modu (70mm)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Yapay zeka motoru gözlük ve saç tellerini bağımsız katman olarak tanır.",
        "stepByStepTip": "Modelden 2.5 metre geride durun, 3x ile çekin.",
        "secretTrick": "Portre efektlerinden Stüdyo Işığı seçerek yüzü parlaklaştırın.",
        "commonTrap": "Yüze 1 metre yaklaşıp 3x açmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "3x ile Masadan Gölgesiz Tatlı Çekimi",
        "recommendedLens": "3x Telefoto Lens",
        "isoShutterEv": "1/200s | EV: +0.3 | ISO 80",
        "hardwareAdvantage": "70mm açı sayesinde telefonun gölgesi tabağa düşmez.",
        "stepByStepTip": "Masadan 40 cm geride durun, 3x'e dokunun.",
        "secretTrick": "Peçete reflektörüyle dolgu ışığı verin.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "4K 60fps HDR ve Gelişmiş VDIS Stabilizasyonu",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "4K 60fps HDR10+ | OIS + VDIS",
        "hardwareAdvantage": "Yazılımsal ve optik stabilizasyon birleşerek yürüyüş sarsıntılarını tamamen yutar.",
        "stepByStepTip": "4K 60fps HDR10+ açın, nesnenin etrafında dönerken çekim yapın.",
        "secretTrick": "Pro Video modunda mikrofon kazancını ayarlayın.",
        "commonTrap": "Karanlıkta HDR10+ açık bırakıp gren oluşturmak."
      }
    }
  },
  {
    "id": "samsung-s23-plus",
    "brand": "samsung",
    "series": "Galaxy S23",
    "name": "Samsung Galaxy S23+",
    "badge": "50MP GN3, 4700mAh Pil & 50MP Expert RAW",
    "generation": "2023 Plus Amiral Gemisi",
    "releaseYear": 2023,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#10b981",
    "bestShootingType": "Doğa & Şehir Manzarası (50MP Expert RAW)",
    "recommendedSetting": "50MP Expert RAW • 3x Optik Zoom (70mm) • Geniş Vizör",
    "topFeatureBadge": "50MP Expert RAW & 4700mAh",
    "hardware": {
      "mainSensor": "50 MP ISOCELL GN3 (1/1.56\", f/1.8, Dual Pixel PDAF, OIS)",
      "ultraWide": "12 MP (f/2.2, 120°)",
      "telephoto": "10 MP (3x Optik, 70mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x, 1x, 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Expert RAW (50MP ve 12MP DNG) & Pro Mod",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": true,
      "specialTech": [
        "Snapdragon 8 Gen 2 for Galaxy ISP",
        "50MP Expert RAW",
        "Geniş 6.6\" 1750 Nit Ekran"
      ]
    },
    "evaluation": {
      "strongestSide": "Büyük 4700mAh pil sayesinde gün boyu süren 50MP RAW doğa çekimleri ve 1750 nit geniş vizör konforu.",
      "weakestSide": "Periskop lensi bulunmaz.",
      "scoreOverview": {
        "night": 8.8,
        "portrait": 8.9,
        "street": 9,
        "macro": 6.8,
        "landscape": 9,
        "video": 9
      },
      "verdictBadge": "Uzun Pil Ömrü & 50MP Doğa Ustası",
      "bestShootingScenarioDetails": "Tüm gün süren doğa yürüyüşlerinde geniş ekran vizörü ve 50MP Expert RAW kalitesiyle manzara çeker."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Nightography ile Aydınlık Gece Parkı",
        "recommendedLens": "1x Ana Kamera (f/1.8)",
        "isoShutterEv": "Gece Modu 2s | EV: -0.7 | ISO 250",
        "hardwareAdvantage": "Gelişmiş NPU gürültüyü temizler.",
        "stepByStepTip": "Gece moduna geçip telefonu sabit tutun.",
        "secretTrick": "Expert RAW ile gece şehir çekimi yapın.",
        "commonTrap": "Karanlıkta 30x zoom yapmak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik Lens ile Hızlı Şehir Enstantanesi",
        "recommendedLens": "3x Optik Telefoto (70mm)",
        "isoShutterEv": "1/1000s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "70mm açı doğal insan portresi verir.",
        "stepByStepTip": "Karşı kaldırımdan 3x ile çekim yapın.",
        "secretTrick": "Hızlı deklanşörü açık tutun.",
        "commonTrap": "Koşan nesnede gecikme yaşamak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Expert RAW ile Kristal Ufuk",
        "recommendedLens": "50MP Ana Kamera (Expert RAW)",
        "isoShutterEv": "1/800s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "50 milyon piksel ham ışık verisi kaydeder.",
        "stepByStepTip": "Expert RAW'da 50MP seçip ufku hizalayın.",
        "secretTrick": "Lightroom'da gökyüzünü zenginleştirin.",
        "commonTrap": "Tripodsuz rüzgarda çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Portre ile Kusursuz Yüz Oranı",
        "recommendedLens": "3x Portre Modu (70mm)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Yapay zeka saçları arka plandan ayırır.",
        "stepByStepTip": "Modelden 2.5 metre uzakta durup çekin.",
        "secretTrick": "Stüdyo ışığı efektini kullanın.",
        "commonTrap": "Yüze 1 metre yaklaşıp 3x açmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "3x ile Masadan Gölgesiz Sunum",
        "recommendedLens": "3x Telefoto Lens",
        "isoShutterEv": "1/160s | EV: +0.3 | ISO 100",
        "hardwareAdvantage": "Telefon gölgesi masaya düşmez.",
        "stepByStepTip": "Masadan 40 cm uzaktan 3x ile çekin.",
        "secretTrick": "Peçeteyle dolgu ışığı verin.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "4K 60fps HDR10+ Akıcı Doğa Videosu",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "4K 60fps HDR10+ | OIS Aktif",
        "hardwareAdvantage": "Gelişmiş VDIS sarsıntıyı yok eder.",
        "stepByStepTip": "4K 60fps seçip sabit yürüyüşle çekin.",
        "secretTrick": "HDR10+ ile zengin renkler alın.",
        "commonTrap": "Loş ışıkta hızlı hareket etmek."
      }
    }
  },
  {
    "id": "samsung-s23-ultra",
    "brand": "samsung",
    "series": "Galaxy S23",
    "name": "Samsung Galaxy S23 Ultra",
    "badge": "200MP ISOCELL HP2, Astro-Hyperlapse & 100x Space Zoom",
    "generation": "2023 200MP Devrimi",
    "releaseYear": 2023,
    "isPro": true,
    "backViewImage": "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#f59e0b",
    "bestShootingType": "Astrofotoğrafçılık & Devasa Manzara (200MP HP2 & Astro-Hyperlapse)",
    "recommendedSetting": "200MP Yüksek Çözünürlük • Expert RAW 50MP (Astrofoto 300s) • 10x Optik Periskop (240mm)",
    "topFeatureBadge": "200MP HP2 & Astro-Hyperlapse",
    "hardware": {
      "mainSensor": "200 MP ISOCELL HP2 (1/1.3\" devasa sensör, 0.6µm, f/1.7, 2 kat daha geniş OIS açısı, Lazer AF)",
      "ultraWide": "12 MP (f/2.2, Dual Pixel AF, Otomatik Makro Odaklama)",
      "telephoto": "Çift Telefoto: 10 MP 3x Optik (70mm f/2.4) + 10 MP 10x Optik Periskop (240mm f/4.9, Dual Pixel OIS)",
      "zoomCapabilities": "0.6x, 1x, 3x Optik, 10x Optik Periskop, 100x Space Zoom",
      "apertures": "Ana: f/1.7 | Ultra Geniş: f/2.2 | 3x: f/2.4 | 10x: f/4.9",
      "rawSupport": "Expert RAW (50MP ve 12MP DNG) & Pro Mod 200MP",
      "macroSupport": true,
      "ois": true,
      "spaceZoom": "100x",
      "expertRawSupport": true,
      "specialTech": [
        "200MP ISOCELL HP2 Sensör",
        "16'lı Piksel Birleştirme (16-in-1 Hexa²pixel)",
        "Astro-Hyperlapse 300x Yıldız İzi Kaydı",
        "Genişletilmiş 2x OIS Açısı (3 dereceye kadar sabitleme)",
        "Expert RAW 50MP Desteği"
      ]
    },
    "evaluation": {
      "strongestSide": "200MP çözünürlük devrimi; devasa manzaraları afiş boyutunda baskıya hazır çeker. 2 kat genişletilmiş OIS açısı el titreşimini tamamen siler ve Astro-Hyperlapse yıldız hareketlerini videoya kaydeder.",
      "weakestSide": "200MP fotoğraflar çekildiğinde işleme süresi 1 saniye sürebilir.",
      "scoreOverview": {
        "night": 9.8,
        "portrait": 9.7,
        "street": 9.5,
        "macro": 9.6,
        "landscape": 10,
        "video": 9.6
      },
      "verdictBadge": "200MP Megapiksel Canavarı & Yıldız Avcısı",
      "bestShootingScenarioDetails": "Işıksız yaylalarda ve dağ kamplarında telefonu tripoda sabitleyip Astro-Hyperlapse 300x moduna alarak gökyüzünde dönen yıldız izlerini büyüleyici bir video olarak kaydeder."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "16-in-1 Piksel Birleştirme ile Zifiri Karanlıkta Işık",
        "recommendedLens": "1x Ana Kamera (200MP HP2 f/1.7)",
        "isoShutterEv": "Gece Modu 2s | EV: -0.7 | ISO 200",
        "hardwareAdvantage": "16 piksel tek bir 2.4µm devasa süper pikselde birleşerek 12.5MP stüdyo aydınlığı yaratır.",
        "stepByStepTip": "Gece çekiminde standart modda kalın; telefon 16'lı piksel birleştirmeyi otomatik devreye sokar.",
        "secretTrick": "Expert RAW uygulamasında 'Astrofoto'yu açıp 4-10 dakika arası pozlama ile galaksiyi netleyin.",
        "commonTrap": "Zifiri karanlıkta 200MP tam çözünürlüğü zorlamak; gece 12MP piksel birleştirme çok daha aydınlıktır."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "Genişletilmiş OIS ile Koşarken Bile Jilet Sokak Anları",
        "recommendedLens": "1x Ana Kamera veya 3x Optik (70mm)",
        "isoShutterEv": "1/1000s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "OIS hareket açısı 1.5 dereceden 3 dereceye çıkarıldı; el sarsıntısı donanımsal olarak iki kat daha fazla emilir.",
        "stepByStepTip": "Yürürken Kamera Asistanından 'Hızlı Deklanşör'ü açın, geçen süjeleri anında dondurun.",
        "secretTrick": "3x optik telefoto ile karşı kaldırımdaki sokak lambası ve insan gölgesini sinematik kadrajlayın.",
        "commonTrap": "Hızlı hareket ederken 10x periskopta kadrajı kaçırmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "200MP ile Mikroskobik Detay ve Afiş Baskısı",
        "recommendedLens": "1x Ana Kamera (3:4 200MP Modu)",
        "isoShutterEv": "1/800s | EV: 0.0 | ISO 50 (Tripod Önerilir)",
        "hardwareAdvantage": "200 milyon piksel sayesinde 5 kilometre uzaktaki dağ yamacındaki ağaçlar dahi tek tek sayılabilir.",
        "stepByStepTip": "Üst menüden '3:4 200MP' seçin. Manzarayı çekip galeriye gidin, en uzaktaki eve %500 zoom yapın.",
        "secretTrick": "Expert RAW uygulamasından 50MP RAW çekerek hem yüksek detay hem sınırsız renk düzenleme alanı elde edin.",
        "commonTrap": "Rüzgarlı havada 200MP çekerken telefonu tek elle tutmak."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Optik ve Yapay Zeka Derinlik Stüdyosu",
        "recommendedLens": "3x Portre Modu (70mm f/2.4)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Snapdragon 8 Gen 2 yapay zekası gözbebeğine kadar her detayı algılayıp gerçekçi bokeh daireleri çizer.",
        "stepByStepTip": "Portre modunda 3x seçin, modelden 3 metre geride durun, gözbebeğine dokunun.",
        "secretTrick": "Gece ışıklı caddede çekim yapın; f/1.7 ana sensör ve 3x lens mükemmel yuvarlak bokeh topları üretir.",
        "commonTrap": "Portreyi 1x lenste burnun dibine sokarak çekmek."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "Odak İyileştirici ile 2cm Süper Makro",
        "recommendedLens": "Ultra Geniş Makro (Odak İyileştirici Açık)",
        "isoShutterEv": "1/250s | EV: +0.3 | ISO 50",
        "hardwareAdvantage": "Dual Pixel otofokus 2cm'den kahve köpüğünü veya meyve kabuğunu jilet gibi netler.",
        "stepByStepTip": "Tabağa 2 cm yaklaşın, sol alttaki sarı simgeyi açık tutun.",
        "secretTrick": "Peçete reflektörüyle tabağın karanlık yüzüne dolgu ışığı verin.",
        "commonTrap": "Gölgenizi tabağa düşürmek."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Astro-Hyperlapse 300x & 8K 30fps Geniş Açılı Video",
        "recommendedLens": "1x Ana Kamera veya Hyperlapse Modu",
        "isoShutterEv": "Hyperlapse 300x (Astro) veya 8K 30fps",
        "hardwareAdvantage": "Hyperlapse modunda '300x' hızı ve yıldız izi modu seçildiğinde dönen gece gökyüzünü videoya kaydeder.",
        "stepByStepTip": "Hyperlapse moduna geçin, sağ üstten hızı '300x' yapın, yıldız izi simgesine dokunup telefonu tripoda sabitleyin.",
        "secretTrick": "1 saat kayıt yapın; 12 saniyelik büyüleyici bir Samanyolu dönüş videosu elde edersiniz.",
        "commonTrap": "Astro-Hyperlapse çekerken tripodu rüzgarlı yere koyup sarsıntı yapmak."
      }
    }
  },
  {
    "id": "samsung-s23-fe",
    "brand": "samsung",
    "series": "Galaxy S23",
    "name": "Samsung Galaxy S23 FE",
    "badge": "50MP Ana Kamera & 3x Optik Telefoto",
    "generation": "2023 Fan Edition",
    "releaseYear": 2023,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#06b6d4",
    "bestShootingType": "Sokak Fotoğrafçılığı & Portre (3x Optik 75mm)",
    "recommendedSetting": "50MP Ana Kamera • 3x Optik Telefoto • Gece Portresi",
    "topFeatureBadge": "50MP Sensör & 3x Optik Telefoto",
    "hardware": {
      "mainSensor": "50 MP ISOCELL GN3 (1/1.56\", f/1.8, OIS, Dual Pixel)",
      "ultraWide": "12 MP (f/2.2, 123°)",
      "telephoto": "8 MP (3x Optik Telefoto, 75mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.5x, 1x, 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Pro Mod 12MP DNG",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": false,
      "specialTech": [
        "50MP Amiral Gemisi Sensörü",
        "3x Optik Telefoto",
        "Nightography",
        "Pro Mod"
      ]
    },
    "evaluation": {
      "strongestSide": "S23 serisinin 50MP ana sensörünü daha uygun fiyata sunması; 3x gerçek optik telefoto ile doğal portreler.",
      "weakestSide": "Telefoto lens 8MP'dir ve Expert RAW desteği yoktur.",
      "scoreOverview": {
        "night": 7.9,
        "portrait": 8.4,
        "street": 8.5,
        "macro": 6.3,
        "landscape": 8.3,
        "video": 8.4
      },
      "verdictBadge": "Bütçe Dostu 50MP & 3x Optik Güç",
      "bestShootingScenarioDetails": "50MP ana kamerası ve 3x optik lensiyle günlük sokak anlarını ve portreleri yüksek renk canlılığıyla yakalar."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "50MP Nightography ile Hızlı Gece Modu",
        "recommendedLens": "1x Ana Kamera (f/1.8)",
        "isoShutterEv": "Gece Modu 2s | EV: -0.7 | ISO 250",
        "hardwareAdvantage": "50MP büyük sensör pikselleri birleştirip karanlıkta greni önler.",
        "stepByStepTip": "Gece moduna geçin, 1x kamerayı seçip çekin.",
        "secretTrick": "Pozlamayı güneş simgesiyle -0.5 EV düşürün.",
        "commonTrap": "Karanlıkta 3x telefotoyu zorlamak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik ile Karşı Kaldırımdan Doğal Çekim",
        "recommendedLens": "3x Optik Telefoto (75mm)",
        "isoShutterEv": "1/640s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "Gerçek 3x cam lens sokak perspektifini sıkıştırır.",
        "stepByStepTip": "3x'e dokunun, yürüyen insanları gölge-ışık çizgisinde yakalayın.",
        "secretTrick": "Deklanşöre basılı tutup aşağı kaydırarak seri çekim yapın.",
        "commonTrap": "Hızlı hareket eden arabalarda odak kaçırmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Modu ile Doğa Manzarası",
        "recommendedLens": "1x Ana Kamera (50MP Açık)",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "50MP çözünürlük ağaç ve deniz detaylarını net kaydeder.",
        "stepByStepTip": "Üstten 3:4 50MP seçin, ufku hizalayın.",
        "secretTrick": "Güneşin batış saatinde HDR'ı açık tutun.",
        "commonTrap": "Rüzgarlı havada titrek çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Optik Telefoto Portresi",
        "recommendedLens": "3x Portre Modu (75mm)",
        "isoShutterEv": "1/250s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "75mm lens kulak ve burun oranını dengeler.",
        "stepByStepTip": "Modelden 2.5 metre uzakta durup göze odaklayın.",
        "secretTrick": "Stüdyo ışığı efektini seçin.",
        "commonTrap": "Modelin yüzüne 1 metre yaklaşıp 3x açmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "3x ile Masadan Gölgesiz Çekim",
        "recommendedLens": "3x Telefoto Lens",
        "isoShutterEv": "1/160s | EV: +0.3 | ISO 100",
        "hardwareAdvantage": "Telefon gölgesi yemeğe düşmez.",
        "stepByStepTip": "Masadan 40 cm uzaktan 3x ile çekin.",
        "secretTrick": "Peçeteyle dolgu ışığı verin.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "4K 60fps Akıcı Video Kaydı",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "4K 60fps | OIS Aktif",
        "hardwareAdvantage": "Optik stabilizasyon yürüyüş titreşimlerini azaltır.",
        "stepByStepTip": "4K 60fps seçip kamerayı sabit tutun.",
        "secretTrick": "AE/AF kilidiyle ışık dalgalanmasını engelleyin.",
        "commonTrap": "Loş ışıkta hızlı yürümek."
      }
    }
  },
  {
    "id": "samsung-s24",
    "brand": "samsung",
    "series": "Galaxy S24",
    "name": "Samsung Galaxy S24",
    "badge": "Galaxy AI ProVisual Engine & 50MP Çift Optik Kalite",
    "generation": "2024 AI Devrimi",
    "releaseYear": 2024,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#3b82f6",
    "bestShootingType": "Sokak Fotoğrafçılığı & Galaxy AI Yaratıcı Düzenleme",
    "recommendedSetting": "50MP Ana Kamera • 2x Sensör İçi & 3x Optik Zoom • Üretken Düzenleme (Generative Edit)",
    "topFeatureBadge": "Galaxy AI & ProVisual Engine",
    "hardware": {
      "mainSensor": "50 MP ISOCELL GN3 (1/1.56\", f/1.8, Dual Pixel PDAF, OIS)",
      "ultraWide": "12 MP (f/2.2, 120°)",
      "telephoto": "10 MP (3x Optik, 70mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x, 1x, 2x (Sensör içi optik kalite), 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Expert RAW (50MP ve 12MP DNG) & Pro Mod",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": true,
      "specialTech": [
        "Galaxy AI ProVisual Engine",
        "Üretken Düzenleme (Generative Edit)",
        "Yansıma Silme & Gölge Kaldırma",
        "2x Sensör İçi Kayıpsız Zoom",
        "Anlık Ağır Çekim (Instant Slow-mo)"
      ]
    },
    "evaluation": {
      "strongestSide": "Galaxy AI ve ProVisual Engine motoru sayesinde fotoğraftaki yansımaları, gölgeleri silme; nesnelerin yerini değiştirip arka planı yapay zekayla tamamlama gücü.",
      "weakestSide": "Periskop lensi ve otomatik makro netlemesi bulunmaz.",
      "scoreOverview": {
        "night": 8.9,
        "portrait": 9.1,
        "street": 9.3,
        "macro": 7,
        "landscape": 9,
        "video": 9.2
      },
      "verdictBadge": "Galaxy AI & Akıllı Sokak Kamerası",
      "bestShootingScenarioDetails": "Müzede cam arkasındaki eseri çekerken oluşan flaş/cam yansımasını veya sokakta kadraja giren yabancı insanları Galaxy AI ile tek dokunuşla kusursuz siler."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "ProVisual Engine ile Yapay Zeka Destekli Gece",
        "recommendedLens": "1x Ana Kamera (f/1.8)",
        "isoShutterEv": "Gece Modu 1s | EV: -0.7 | ISO 250",
        "hardwareAdvantage": "ProVisual Engine gece ışıklarını analiz edip renk doğruluğunu yapay zeka ile korur.",
        "stepByStepTip": "Gece moduna geçin, 1x kamerayı seçip çekin.",
        "secretTrick": "Galeriye gidip 'i' bilgi simgesine dokunun; Galaxy AI otomatik olarak 'Yansımaları Sil' önerisi sunar.",
        "commonTrap": "Karanlıkta 30x dijital zoom yapmak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "2x ve 3x Çift Optik Kalite ile Sokak Avı",
        "recommendedLens": "2x (Sensör İçi) veya 3x Optik (70mm)",
        "isoShutterEv": "1/1000s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "50MP sensörün merkez kırpması kayıpsız 2x (48mm) sunar; 3x lens ile birlikte 2 farklı profesyonel odak uzaklığı sağlar.",
        "stepByStepTip": "Sokakta yürürken 2x veya 3x butonuna basın, geçen insanları yakalayın.",
        "secretTrick": "Fotoğrafta kadrajı bozan bir tabelayı veya kişiyi parmağınızla basılı tutup Üretken Düzenleme ile yok edin.",
        "commonTrap": "Koşan nesnede odak kilidi koymayı unutmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP ve Düzeltme Açısı Doldurma",
        "recommendedLens": "1x Ana Kamera (50MP Modu)",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "Yamuk çekilen manzaraları döndürdüğünüzde kenarlarda oluşan boşlukları Galaxy AI üretken zekayla doğal dağ ve ağaç olarak doldurur.",
        "stepByStepTip": "50MP modunda manzarayı çekin. Eğri çıktıysa galeride döndürün ve 'Oluştur' butonuna basın.",
        "secretTrick": "Expert RAW uygulamasında 50MP çekip gökyüzü renklerini geniş dinamik aralıkla saklayın.",
        "commonTrap": "Rüzgarda tek elle çekip mikroskobik titreşim yaratmak."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "AI Portre Stüdyosu ve Doğal Bokeh",
        "recommendedLens": "3x Portre Modu (70mm)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "ProVisual Engine yüzdeki gölgeleri yumuşatır, göz bebeğini parlatır.",
        "stepByStepTip": "Modelden 2.5 metre geride durun, 3x ile çekin.",
        "secretTrick": "Galeride arka plan bulanıklığını (Bokeh) istediğiniz dereceye çekin.",
        "commonTrap": "Yüze 1 metre yaklaşıp 3x açmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "2x ile Gölgesiz Tabak Sunumu",
        "recommendedLens": "2x Sensör İçi Kırpma",
        "isoShutterEv": "1/200s | EV: +0.3 | ISO 80",
        "hardwareAdvantage": "48mm odak uzaklığı telefon gölgesini yemeğin üzerinden çeker.",
        "stepByStepTip": "Masadan 30 cm geride durun, 2x'e dokunun.",
        "secretTrick": "Fotoğraftaki çatal veya bardak gölgesini Galaxy AI 'Gölge Sil' aracıyla kaldırın.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Anlık Ağır Çekim (Instant Slow-Mo) ile Sihirli Anlar",
        "recommendedLens": "1x veya 3x Optik Lens",
        "isoShutterEv": "4K 60fps Video",
        "hardwareAdvantage": "Normal çekilmiş herhangi bir videoya parmağınızı basılı tuttuğunuzda yapay zeka ara kareler üreterek anında sinematik ağır çekim yapar.",
        "stepByStepTip": "Standart 4K 60fps video çekin. Galeride izlerken heyecanlı anda ekrana parmağınızı basılı tutun.",
        "secretTrick": "Yapay zekanın ürettiği pürüzsüz ağır çekim klibi ayrı bir video olarak kaydedin.",
        "commonTrap": "Çok karanlıkta çekilen videoda Instant Slow-mo yapmak."
      }
    }
  },
  {
    "id": "samsung-s24-plus",
    "brand": "samsung",
    "series": "Galaxy S24",
    "name": "Samsung Galaxy S24+",
    "badge": "Galaxy AI, QHD+ 2600 Nit Ekran & 4900mAh Pil",
    "generation": "2024 Plus Amiral Gemisi",
    "releaseYear": 2024,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#3b82f6",
    "bestShootingType": "Doğa Manzarası & Seyahat (2600 Nit Zirve Vizör)",
    "recommendedSetting": "50MP Expert RAW • 3x Optik Zoom • 2600 Nit Güneş Vizörü",
    "topFeatureBadge": "2600 Nit QHD+ & Galaxy AI",
    "hardware": {
      "mainSensor": "50 MP ISOCELL GN3 (1/1.56\", f/1.8, OIS, Dual Pixel)",
      "ultraWide": "12 MP (f/2.2, 120°)",
      "telephoto": "10 MP (3x Optik, 70mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x, 1x, 2x (Sensör içi), 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Expert RAW (50MP ve 12MP DNG) & Pro Mod",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": true,
      "specialTech": [
        "2600 Nit Zirve Ekran Parlaklığı",
        "QHD+ Çözünürlükte Vizör",
        "Galaxy AI ProVisual Engine",
        "4900mAh Devasa Pil"
      ]
    },
    "evaluation": {
      "strongestSide": "2600 nit rekor parlaklıkta QHD+ ekranı sayesinde güneş altında vizör netliği; Galaxy AI üretken düzenleme araçları ve 4900mAh pil.",
      "weakestSide": "Periskop lensi bulunmaz.",
      "scoreOverview": {
        "night": 9,
        "portrait": 9.2,
        "street": 9.3,
        "macro": 7,
        "landscape": 9.2,
        "video": 9.3
      },
      "verdictBadge": "Güneş Altında QHD+ Zirve Vizör",
      "bestShootingScenarioDetails": "Çölde, kumsalda ve yüksek dağlarda 2600 nit ekranıyla parlamadan çekim yapar; Galaxy AI ile seyahat fotoğraflarındaki engelleri temizler."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "ProVisual Engine ile Gürültüsüz Gece Manzarası",
        "recommendedLens": "1x Ana Kamera (f/1.8)",
        "isoShutterEv": "Gece Modu 1-2s | EV: -0.7 | ISO 250",
        "hardwareAdvantage": "NPU gece grenlerini kaldırırken neon ışıklarının detaylarını korur.",
        "stepByStepTip": "Gece modunda çekim yapın.",
        "secretTrick": "Galaxy AI Yansıma Silici ile araba camı parlamalarını yok edin.",
        "commonTrap": "Karanlıkta 30x zoom yapmak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik ile Dinamik Sokak Ruhu",
        "recommendedLens": "3x Optik Telefoto (70mm)",
        "isoShutterEv": "1/1000s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "70mm odak insanları doğal oranlarında yakalar.",
        "stepByStepTip": "Karşı kaldırımdan 3x ile çekim yapın.",
        "secretTrick": "Üretken Düzenleme ile sokaktaki istenmeyen çöp kutularını kaldırın.",
        "commonTrap": "Hızlı koşan nesnede odak kaçırmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Expert RAW ve 2600 Nit Görüş",
        "recommendedLens": "50MP Ana Kamera (Expert RAW)",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "2600 nit parlaklık vizörde en ince bulut gölgelerini gösterir.",
        "stepByStepTip": "Expert RAW'da 50MP açın, ufku hizalayın.",
        "secretTrick": "Lightroom'da 16-bit DNG dosyasını zenginleştirin.",
        "commonTrap": "Tripodsuz rüzgarda çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Portre ve Yapay Zeka Işıklandırması",
        "recommendedLens": "3x Portre Modu (70mm)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Yapay zeka saçları arka plandan pürüzsüz ayırır.",
        "stepByStepTip": "Modelden 2.5 metre uzakta durup çekin.",
        "secretTrick": "Portre Stüdyosu ile yüzü aydınlatın.",
        "commonTrap": "Yüze 1 metre yaklaşmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "2x ile Gölgesiz Sunum Çekimi",
        "recommendedLens": "2x Sensör İçi Kırpma",
        "isoShutterEv": "1/200s | EV: +0.3 | ISO 80",
        "hardwareAdvantage": "Telefon gölgesi masaya düşmez.",
        "stepByStepTip": "Masadan 30 cm uzaktan 2x ile çekin.",
        "secretTrick": "Galaxy AI ile tabağa düşen gölgeleri silin.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Instant Slow-Mo & 4K 60fps Video",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "4K 60fps | OIS Aktif",
        "hardwareAdvantage": "Instant Slow-mo normal videoyu anında yapay zeka ağır çekime çevirir.",
        "stepByStepTip": "4K 60fps video çekin, galeride basılı tutun.",
        "secretTrick": "Ağır çekim anını klip olarak dışa aktarın.",
        "commonTrap": "Loş ışıkta hızlı hareket etmek."
      }
    }
  },
  {
    "id": "samsung-s24-ultra",
    "brand": "samsung",
    "series": "Galaxy S24",
    "name": "Samsung Galaxy S24 Ultra",
    "badge": "200MP HP2, 50MP 5x Quad Tele, Titanyum Kasa & ProVisual Engine",
    "generation": "2024 AI & Optik Zirvesi",
    "releaseYear": 2024,
    "isPro": true,
    "backViewImage": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#eab308",
    "bestShootingType": "Uzak Portre, Konser & Gece Zoom (5x 50MP Quad Tele & 100x AI Zoom)",
    "recommendedSetting": "5x Optik Zoom (50MP Quad Tele) • 200MP Modu • 4K 120fps Video • Expert RAW",
    "topFeatureBadge": "50MP 5x Quad Tele & 4K 120fps",
    "hardware": {
      "mainSensor": "200 MP ISOCELL HP2 (1/1.3\" sensör, f/1.7, 2x OIS açısı, Lazer AF)",
      "ultraWide": "12 MP (f/2.2, Dual Pixel AF, 2cm Makro)",
      "telephoto": "Çift Telefoto: 10 MP 3x Optik (70mm f/2.4) + 50 MP 5x Optik Periskop (115mm f/3.4, 1.4µm piksel, 10x Optik Kalite)",
      "zoomCapabilities": "0.6x, 1x, 2x, 3x, 5x Optik, 10x Optik Kalite (50MP Kırpma), 100x Space Zoom (AI Zoom)",
      "apertures": "Ana: f/1.7 | Ultra Geniş: f/2.2 | 3x: f/2.4 | 5x: f/3.4",
      "rawSupport": "Expert RAW (50MP ve 12MP DNG) & Pro Mod 200MP",
      "macroSupport": true,
      "ois": true,
      "spaceZoom": "100x",
      "expertRawSupport": true,
      "specialTech": [
        "50MP 5x Quad Telefoto (%60 daha büyük pikseller)",
        "AI ProVisual Engine & AI Zoom Çözümleme",
        "4K 120fps Ağır Çekim & ProRes Benzeri Kalite",
        "Corning Gorilla Armor (Yansımayı %75 Azaltan Cam)",
        "Üretken Yapay Zeka Düzenleme"
      ]
    },
    "evaluation": {
      "strongestSide": "50MP 5x Quad Telefoto lensin devasa sensörü sayesinde loş ışıkta dahi 5x ve 10x yakınlaştırmada kristal netlik; Corning Gorilla Armor camı ile sıfır ekran parlaması ve 4K 120fps video.",
      "weakestSide": "Gelişmiş titanyum gövde ve optik donanım nedeniyle ağır ve köşeli amiral gemisi yapısı.",
      "scoreOverview": {
        "night": 9.9,
        "portrait": 9.9,
        "street": 9.7,
        "macro": 9.8,
        "landscape": 10,
        "video": 9.9
      },
      "verdictBadge": "Mobil Zoom & Yapay Zeka Şampiyonu",
      "bestShootingScenarioDetails": "Stadyum konserlerinde, uzak spor müsabakalarında ve vahşi doğada 50MP 5x Quad Telefoto lens ile sahnedeki sanatçının gözündeki pırıltıyı gürültüsüz kaydeder."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "5x Gece Portresi & 1.6 Kat Daha Büyük Pikseller",
        "recommendedLens": "5x Quad Telefoto (50MP f/3.4) veya 1x 200MP",
        "isoShutterEv": "Gece Modu 2s | EV: -0.7 | ISO 250",
        "hardwareAdvantage": "50MP telefoto sensör önceki 10x lensine göre %60 daha büyük piksellere sahiptir; gece 5x zoom artık zifiri karanlıkta bile aydınlık çeker.",
        "stepByStepTip": "Gece konserinde veya sokakta 5x butonuna basın. ProVisual Engine gürültüyü anında temizler.",
        "secretTrick": "Gorilla Armor cam sayesinde sokak lambalarının ekrana yansıması %75 azalır; kadrajı tam görürsünüz.",
        "commonTrap": "Karanlıkta 100x Space Zoom'u elde sallayarak zorlamak; 5x veya 10x optik kalitede kalın."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "5x (115mm) ile Sinematik Sokak İzolasyonu",
        "recommendedLens": "5x Optik Telefoto (115mm 50MP)",
        "isoShutterEv": "1/1200s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "115mm odak uzaklığı sokaktaki süjeyi arka plandaki karmaşadan tamamen izole eder.",
        "stepByStepTip": "Karşı kaldırımdan 5x'e geçin, yürüyen insanları arkadaki binalarla sıkıştırarak çekin.",
        "secretTrick": "Üretken Düzenleme ile kadraja giren elektrik tellerini veya yabancıları tek dokunuşla kaldırın.",
        "commonTrap": "Koşan bir nesneyi 5x ile takip ederken ani sarsıntı yapmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "200MP Modu & 10x Optik Kalite Zirve Detayı",
        "recommendedLens": "1x 200MP veya 5x/10x 50MP Quad Tele",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 32",
        "hardwareAdvantage": "50MP sensörün merkez kırpması sayesinde 10x (230mm) hibrit değil kayıpsız optik kalitede görüntü üretir.",
        "stepByStepTip": "Dağ manzarasında 10x'e gelin, sarı Zoom Lock kilidiyle dağ kulübesine odaklayıp çekin.",
        "secretTrick": "Expert RAW uygulamasında 50MP çekip gökyüzünü Lightroom ile 16-bit işleyin.",
        "commonTrap": "Rüzgarda 10x çekerken telefonu tek elle tutmak."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "5x Optik Portre (115mm) ile Kusursuz Moda Çekimi",
        "recommendedLens": "5x Portre Modu (115mm f/3.4)",
        "isoShutterEv": "1/400s | EV: +0.3 | f/3.4",
        "hardwareAdvantage": "115mm odak uzaklığı yüzde hiçbir eğrilik bırakmaz, saç tellerini ipeksi bokeh ile arka plandan ayırır.",
        "stepByStepTip": "Modelden 4 metre uzakta durun, 5x Portre moduna dokunup gözbebeğine odaklayın.",
        "secretTrick": "Modelin arkasından gelen güneş ışığında saç parıltısını (halo efekti) yakalayın.",
        "commonTrap": "Modelin yüzüne 1 metre yaklaşıp 5x açmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "Odak İyileştirici & Tele-Makro",
        "recommendedLens": "Ultra Geniş Makro veya 5x Tele-Makro",
        "isoShutterEv": "1/250s | EV: +0.3 | ISO 50",
        "hardwareAdvantage": "Ultra geniş sensörün Dual Pixel otofokusu 2cm'den netlerken, 5x lens 30cm'den mikroskobik yemek çeker.",
        "stepByStepTip": "Masadan 40 cm geride durup 5x'e geçin, tatlının çilek gözeneklerini çekin.",
        "secretTrick": "Peçete reflektörüyle yemeğe stüdyo dolgu ışığı verin.",
        "commonTrap": "Gölgenizi tabağa düşürmek."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "4K 120 FPS Sinematik Ağır Çekim & 8K 30fps",
        "recommendedLens": "1x Ana Kamera veya 5x Optik Telefoto",
        "isoShutterEv": "4K 120fps veya 8K 30fps",
        "hardwareAdvantage": "Galaxy tarihinde ilk kez 4K çözünürlükte 120 kare/sn süper akıcı ağır çekim video kaydı.",
        "stepByStepTip": "Pro Video moduna geçin, 4K 120fps seçin. Spor aksiyonunu veya koşan köpeği çekin.",
        "secretTrick": "Instant Slow-Mo ile standart videoları izlerken ekrana basılı tutup anında sinematik ağır çekim yapın.",
        "commonTrap": "Karanlık bir odada 120 fps video çekmek."
      }
    }
  },
  {
    "id": "samsung-s24-fe",
    "brand": "samsung",
    "series": "Galaxy S24",
    "name": "Samsung Galaxy S24 FE",
    "badge": "Galaxy AI, 50MP ProVisual Engine & 6.7\" Büyük Ekran",
    "generation": "2024 Fan Edition AI",
    "releaseYear": 2024,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#0284c7",
    "bestShootingType": "Sokak Fotoğrafçılığı & Galaxy AI Yaratıcı Düzenleme",
    "recommendedSetting": "50MP Ana Kamera • 3x Optik Telefoto (75mm) • Galaxy AI Üretken Düzenleme",
    "topFeatureBadge": "Galaxy AI & 50MP ProVisual Engine",
    "hardware": {
      "mainSensor": "50 MP ISOCELL GN3 (1/1.56\", f/1.8, OIS, Dual Pixel)",
      "ultraWide": "12 MP (f/2.2, 123°)",
      "telephoto": "8 MP (3x Optik Telefoto, 75mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.5x, 1x, 2x (Sensör içi), 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Pro Mod 12MP DNG",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": false,
      "specialTech": [
        "Galaxy AI ProVisual Engine Lite",
        "Üretken Düzenleme (Generative Edit)",
        "3x Optik Telefoto",
        "6.7\" Geniş Dinamik AMOLED 2X Ekran"
      ]
    },
    "evaluation": {
      "strongestSide": "6.7 inç devasa ekranda tam kapsamlı Galaxy AI deneyimi; fotoğraftaki objeleri silme/taşıma ve 50MP ProVisual Engine desteği.",
      "weakestSide": "Telefoto lens 8MP'dir ve 4K 120fps desteği yoktur.",
      "scoreOverview": {
        "night": 8.3,
        "portrait": 8.7,
        "street": 8.9,
        "macro": 6.7,
        "landscape": 8.8,
        "video": 8.8
      },
      "verdictBadge": "Büyük Ekran AI Gücü & 50MP Amiral Gemisi",
      "bestShootingScenarioDetails": "Geniş vizöründe sokak ve manzara karelerini 50MP modunda çeker; Galaxy AI ile yabancı insanları saniyeler içinde temizler."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "ProVisual Engine ile Gece Aydınlatması",
        "recommendedLens": "1x Ana Kamera (f/1.8)",
        "isoShutterEv": "Gece Modu 2s | EV: -0.7 | ISO 250",
        "hardwareAdvantage": "50MP sensör pikselleri birleştirerek loş sokakları aydınlatır.",
        "stepByStepTip": "Gece moduna geçin, 1x kamerayı kullanın.",
        "secretTrick": "Galaxy AI Yansıma Silici ile vitrin camı yansımalarını kaldırın.",
        "commonTrap": "Karanlıkta 3x telefotoyu zorlamak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik Lens ile Sokak Perspektifi",
        "recommendedLens": "3x Optik Telefoto (75mm)",
        "isoShutterEv": "1/800s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "75mm lens insanları doğal ortamlarında fark ettirmeden yakalar.",
        "stepByStepTip": "Karşı kaldırımdan 3x ile çekim yapın.",
        "secretTrick": "Üretken Düzenleme ile sokaktaki istenmeyen nesneleri yok edin.",
        "commonTrap": "Koşan nesnede odak kaçırmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Modu ile Geniş Ufuk",
        "recommendedLens": "50MP Ana Kamera",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "50MP yüksek çözünürlük doğadaki detayları korur.",
        "stepByStepTip": "Üst menüden 3:4 50MP seçin, ufku dengeleyin.",
        "secretTrick": "Yapay zeka eğri ufuk düzeltme ile kenarları otomatik doldurun.",
        "commonTrap": "Rüzgarlı havada titrek çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Portre ile Doğal Yüz Hatları",
        "recommendedLens": "3x Portre Modu (75mm)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "75mm lens yüz oranlarını bozmaz.",
        "stepByStepTip": "Modelden 2.5 metre geride durup göze odaklayın.",
        "secretTrick": "Stüdyo ışığı efektiyle yüzü aydınlatın.",
        "commonTrap": "Modelin yüzüne 1 metre yaklaşmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "3x ile Masadan Gölgesiz Çekim",
        "recommendedLens": "3x Telefoto Lens",
        "isoShutterEv": "1/160s | EV: +0.3 | ISO 100",
        "hardwareAdvantage": "Telefon gölgesi yemeğe düşmez.",
        "stepByStepTip": "Masadan 40 cm geride durun, 3x ile çekin.",
        "secretTrick": "Peçeteyle dolgu ışığı verin.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Instant Slow-Mo & 4K 60fps Akıcı Video",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "4K 60fps | OIS Aktif",
        "hardwareAdvantage": "Instant Slow-mo ile videolara sonradan yapay zeka ağır çekim ekleyin.",
        "stepByStepTip": "4K 60fps video çekin, galeride basılı tutun.",
        "secretTrick": "Ağır çekim anını ayrı video olarak kaydedin.",
        "commonTrap": "Loş ışıkta hızlı yürümek."
      }
    }
  },
  {
    "id": "samsung-s25",
    "brand": "samsung",
    "series": "Galaxy S25",
    "name": "Samsung Galaxy S25",
    "badge": "Snapdragon 8 Elite ISP & Galaxy AI ProVisual 2.0",
    "generation": "2025 Yeni Nesil Amiral Gemisi",
    "releaseYear": 2025,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#38bdf8",
    "bestShootingType": "Sokak Fotoğrafçılığı & Anlık AI İşleme (Snapdragon 8 Elite)",
    "recommendedSetting": "50MP Ana Kamera • 3x Optik Telefoto • ProVisual 2.0 • Expert RAW",
    "topFeatureBadge": "Snapdragon 8 Elite & ProVisual 2.0",
    "hardware": {
      "mainSensor": "50 MP ISOCELL GN3+ (1/1.56\", f/1.8, Dual Pixel PDAF, OIS)",
      "ultraWide": "12 MP (f/2.2, 120°)",
      "telephoto": "10 MP (3x Optik, 70mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x, 1x, 2x (Sensör içi), 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Expert RAW (50MP ve 12MP DNG) & Pro Mod",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": true,
      "specialTech": [
        "Snapdragon 8 Elite 3nm ISP Motoru",
        "Galaxy AI ProVisual Engine 2.0",
        "Gerçek Zamanlı AI Gürültü Azaltma",
        "50MP Expert RAW"
      ]
    },
    "evaluation": {
      "strongestSide": "3nm Snapdragon 8 Elite işlemcisinin getirdiği olağanüstü NPU gücü sayesinde deklanşör gecikmesinin sıfırlanması ve gece çekimlerinde anlık gürültü temizleme.",
      "weakestSide": "Periskop lensi bulunmaz.",
      "scoreOverview": {
        "night": 9.3,
        "portrait": 9.3,
        "street": 9.6,
        "macro": 7.2,
        "landscape": 9.3,
        "video": 9.4
      },
      "verdictBadge": "Snapdragon 8 Elite Gücü & Hızlı AI Çekim",
      "bestShootingScenarioDetails": "Sokakta hızlı yürürken veya koşan çocukları çekerken Snapdragon 8 Elite çipi sayesinde sıfır gecikmeyle jilet gibi net dondurur."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "ProVisual 2.0 ile Anında Gece İşleme",
        "recommendedLens": "1x Ana Kamera (f/1.8)",
        "isoShutterEv": "Gece Modu 1s | EV: -0.7 | ISO 200",
        "hardwareAdvantage": "Snapdragon 8 Elite NPU'su gece modunu 1 saniyede tamamlar.",
        "stepByStepTip": "Gece modunda çekim yapın, anında netleşen kareyi görün.",
        "secretTrick": "Expert RAW ile yıldız gökyüzünü çekin.",
        "commonTrap": "Karanlıkta 30x zoom yapmak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik ve Sıfır Deklanşör Gecikmesi",
        "recommendedLens": "3x Optik Telefoto (70mm)",
        "isoShutterEv": "1/1200s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "3nm çip deklanşöre basıldığı anı milisaniye kaybı olmadan dondurur.",
        "stepByStepTip": "Karşı kaldırımdan 3x ile yürüyen insanları yakalayın.",
        "secretTrick": "Yapay zeka nesne siliciyle arkadaki yabancıları kaldırın.",
        "commonTrap": "Hızlı hareket eden nesnede açı kaçırmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Expert RAW ile Zengin Doğa Katmanları",
        "recommendedLens": "50MP Ana Kamera (Expert RAW)",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 40",
        "hardwareAdvantage": "50 milyon piksel ham ışık verisi kaydeder.",
        "stepByStepTip": "Expert RAW'da 50MP açıp ufku hizalayın.",
        "secretTrick": "Lightroom Mobile'da gökyüzünü zenginleştirin.",
        "commonTrap": "Rüzgarda titrek çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "AI Portre 2.0 ve Doğal Saç Ayrımı",
        "recommendedLens": "3x Portre Modu (70mm)",
        "isoShutterEv": "1/400s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Yeni nesil derinlik motoru her bir saç telini stüdyo kalitesinde ayırır.",
        "stepByStepTip": "Modelden 2.5 metre geride durup çekin.",
        "secretTrick": "Stüdyo ışığı efektiyle yüzü aydınlatın.",
        "commonTrap": "Yüze 1 metre yaklaşmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "2x ile Gölgesiz Kahve ve Masa Çekimi",
        "recommendedLens": "2x Sensör İçi Kırpma",
        "isoShutterEv": "1/200s | EV: +0.3 | ISO 80",
        "hardwareAdvantage": "Telefon gölgesi masaya düşmez.",
        "stepByStepTip": "Masadan 30 cm uzaktan 2x ile çekin.",
        "secretTrick": "Peçeteyle dolgu ışığı verin.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "4K 60fps HDR & Gerçek Zamanlı AI Video Temizleme",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "4K 60fps HDR10+ | OIS Aktif",
        "hardwareAdvantage": "Video kaydederken yapay zeka her kareyi canlı olarak gürültüden arındırır.",
        "stepByStepTip": "4K 60fps seçip sabit adımlarla yürüyün.",
        "secretTrick": "Instant Slow-Mo ile ağır çekim klip oluşturun.",
        "commonTrap": "Loş ışıkta hızlı hareket etmek."
      }
    }
  },
  {
    "id": "samsung-s25-plus",
    "brand": "samsung",
    "series": "Galaxy S25",
    "name": "Samsung Galaxy S25+",
    "badge": "Snapdragon 8 Elite, 50MP Expert RAW & 4900mAh",
    "generation": "2025 Plus Amiral Gemisi",
    "releaseYear": 2025,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#38bdf8",
    "bestShootingType": "Doğa & Şehir Manzarası (50MP Expert RAW)",
    "recommendedSetting": "50MP Expert RAW • 3x Optik Zoom • 2600 Nit Vizör",
    "topFeatureBadge": "Snapdragon 8 Elite & 50MP RAW",
    "hardware": {
      "mainSensor": "50 MP ISOCELL GN3+ (1/1.56\", f/1.8, Dual Pixel PDAF, OIS)",
      "ultraWide": "12 MP (f/2.2, 120°)",
      "telephoto": "10 MP (3x Optik, 70mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x, 1x, 2x (Sensör içi), 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Expert RAW (50MP ve 12MP DNG) & Pro Mod",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": true,
      "specialTech": [
        "Snapdragon 8 Elite ISP",
        "50MP Expert RAW",
        "4900mAh Pil",
        "Galaxy AI 2.0"
      ]
    },
    "evaluation": {
      "strongestSide": "Snapdragon 8 Elite performansı ve 4900mAh büyük pille tüm gün süren yüksek hızlı 50MP RAW çekimleri.",
      "weakestSide": "Periskop zoom lensi bulunmaz.",
      "scoreOverview": {
        "night": 9.3,
        "portrait": 9.4,
        "street": 9.6,
        "macro": 7.2,
        "landscape": 9.4,
        "video": 9.4
      },
      "verdictBadge": "Uzun Pil & 50MP Snapdragon Gücü",
      "bestShootingScenarioDetails": "Seyahatlerde tüm gün süren fotoğraf gezilerinde geniş vizör ve 50MP RAW kalitesiyle manzarayı kaydeder."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "ProVisual 2.0 ile Aydınlık Gece Şehri",
        "recommendedLens": "1x Ana Kamera (f/1.8)",
        "isoShutterEv": "Gece Modu 1s | EV: -0.7 | ISO 200",
        "hardwareAdvantage": "NPU gece gürültüsünü anında siler.",
        "stepByStepTip": "Gece modunda çekim yapın.",
        "secretTrick": "Expert RAW ile gece şehir çekimi yapın.",
        "commonTrap": "Karanlıkta 30x zoom yapmak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik Lens ile Hızlı Şehir Enstantanesi",
        "recommendedLens": "3x Optik Telefoto (70mm)",
        "isoShutterEv": "1/1000s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "70mm açı doğal insan portresi verir.",
        "stepByStepTip": "Karşı kaldırımdan 3x ile çekim yapın.",
        "secretTrick": "Hızlı deklanşörü açık tutun.",
        "commonTrap": "Koşan nesnede gecikme yaşamak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Expert RAW ile Kristal Ufuk",
        "recommendedLens": "50MP Ana Kamera (Expert RAW)",
        "isoShutterEv": "1/800s | EV: 0.0 | ISO 40",
        "hardwareAdvantage": "50 milyon piksel ham ışık verisi kaydeder.",
        "stepByStepTip": "Expert RAW'da 50MP seçip ufku hizalayın.",
        "secretTrick": "Lightroom'da gökyüzünü zenginleştirin.",
        "commonTrap": "Tripodsuz rüzgarda çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Portre ile Kusursuz Yüz Oranı",
        "recommendedLens": "3x Portre Modu (70mm)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Yapay zeka saçları arka plandan ayırır.",
        "stepByStepTip": "Modelden 2.5 metre uzakta durup çekin.",
        "secretTrick": "Stüdyo ışığı efektini kullanın.",
        "commonTrap": "Yüze 1 metre yaklaşıp 3x açmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "2x ile Masadan Gölgesiz Sunum",
        "recommendedLens": "2x Sensör İçi Kırpma",
        "isoShutterEv": "1/160s | EV: +0.3 | ISO 80",
        "hardwareAdvantage": "Telefon gölgesi masaya düşmez.",
        "stepByStepTip": "Masadan 30 cm uzaktan 2x ile çekin.",
        "secretTrick": "Peçeteyle dolgu ışığı verin.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "4K 60fps HDR10+ Akıcı Video",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "4K 60fps HDR10+ | OIS Aktif",
        "hardwareAdvantage": "Gelişmiş VDIS sarsıntıyı yok eder.",
        "stepByStepTip": "4K 60fps seçip sabit adımlarla yürüyün.",
        "secretTrick": "Instant Slow-Mo ile ağır çekim klip oluşturun.",
        "commonTrap": "Loş ışıkta hızlı hareket etmek."
      }
    }
  },
  {
    "id": "samsung-s25-ultra",
    "brand": "samsung",
    "series": "Galaxy S25",
    "name": "Samsung Galaxy S25 Ultra",
    "badge": "Dörtlü Yüksek Çözünürlük (200MP + Üçlü 50MP) & Portrait Studio AI",
    "generation": "2025 Zirve Amiral Gemisi",
    "releaseYear": 2025,
    "isPro": true,
    "backViewImage": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#f59e0b",
    "bestShootingType": "Tüm Senaryolarda Zirve (200MP Ana + 50MP Ultra Geniş + 50MP 5x Periskop + 50MP 3x Telefoto)",
    "recommendedSetting": "Dörtlü 50MP/200MP ProRAW • 5x Periskop (115mm) • 8K 60fps Video • Portrait Studio AI",
    "topFeatureBadge": "Dörtlü 50MP/200MP & 8K 60fps",
    "hardware": {
      "mainSensor": "200 MP ISOCELL HP2+ (1/1.3\" sensör, f/1.7, OIS, Lazer AF)",
      "ultraWide": "50 MP ISOCELL JN3 (1/2.76\", f/2.0, 120°, 2cm Makro - İlk kez 50MP!)",
      "telephoto": "Çift 50MP Telefoto: 50 MP 3x Optik (70mm f/2.4) + 50 MP 5x Optik Periskop (115mm f/3.4, 10x Optik Kalite)",
      "zoomCapabilities": "0.6x (50MP), 1x (200MP), 2x, 3x (50MP), 5x (50MP), 10x Optik Kalite, 100x Space Zoom",
      "apertures": "Ana: f/1.7 | Ultra Geniş: f/2.0 | 3x: f/2.4 | 5x: f/3.4",
      "rawSupport": "Expert RAW (Tüm Kameralarda 50MP DNG) & Pro Mod 200MP",
      "macroSupport": true,
      "ois": true,
      "spaceZoom": "100x",
      "expertRawSupport": true,
      "specialTech": [
        "Tüm 4 Kamerada Yüksek Çözünürlük (200MP + 50MP + 50MP + 50MP)",
        "Portrait Studio AI (Üretken Portre Sanatı)",
        "8K 60fps & 4K 120fps Video",
        "Snapdragon 8 Elite NPU"
      ]
    },
    "evaluation": {
      "strongestSide": "Tüm arka lenslerin (Ultra Geniş, 3x Tele ve 5x Periskop) 50MP'ye yükseltilmesi; hangi açıdan bakarsanız bakın devasa 50MP netlik ve Portrait Studio AI.",
      "weakestSide": "Dörtlü 50MP/200MP RAW dosyaları yüksek depolama alanı ister.",
      "scoreOverview": {
        "night": 10,
        "portrait": 10,
        "street": 9.8,
        "macro": 10,
        "landscape": 10,
        "video": 10
      },
      "verdictBadge": "Dörtlü 50MP/200MP Fotoğraf Devrimi",
      "bestShootingScenarioDetails": "Geniş dağ manzarasından 5x periskop portresine ve 50MP ultra geniş makroya kadar her kadrajı profesyonel stüdyo kamerasını aratmayan 50MP/200MP çözünürlükle çeker."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Tüm Kameralarda 50MP Gece Detayı",
        "recommendedLens": "1x 200MP veya 5x 50MP Periskop",
        "isoShutterEv": "Gece Modu 1s | EV: -0.7 | ISO 200",
        "hardwareAdvantage": "Ultra geniş açı ve telefoto lensler 50MP olduğu için gece şehir çekimlerinde tüm açılar aynı stüdyo berraklığındadır.",
        "stepByStepTip": "5x periskop lense geçip gece uzaktaki ışıklı köprüyü çekin.",
        "secretTrick": "Expert RAW ile Samanyolu astrofotografisinde tüm yıldızları 50MP DNG olarak kaydedin.",
        "commonTrap": "Karanlıkta 100x zoomu elde sallamak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x ve 5x (Tümü 50MP) ile Sokakta Sıkıştırılmış Anlar",
        "recommendedLens": "3x (70mm 50MP) veya 5x (115mm 50MP)",
        "isoShutterEv": "1/1200s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "Hem 70mm hem 115mm lensler 50MP'dir; sokaktaki her insanı kırpma kaybı olmadan yakalar.",
        "stepByStepTip": "3x ile sokak atmosferini, 5x ile uzaktaki yüz ifadelerini yakalayın.",
        "secretTrick": "Portrait Studio AI ile sokak portrelerini çizgi roman veya yağlı boya sanatına dönüştürün.",
        "commonTrap": "Hızlı hareket eden süjelerde deklanşörü geciktirmek."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Ultra Geniş ve 200MP Ana Sensör",
        "recommendedLens": "0.6x (50MP) veya 1x (200MP)",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 32",
        "hardwareAdvantage": "Ultra geniş sensörün 50MP'ye çıkmasıyla kanyon ve dağ manzaralarının kenarlarındaki yumuşama sıfırlandı.",
        "stepByStepTip": "0.6x'te 50MP modunu açıp dev kanyon manzarasını çekin.",
        "secretTrick": "10x optik kalitede 50MP periskop ile uzaktaki şelaleyi dondurun.",
        "commonTrap": "Rüzgarda telefonu tek elle sallayarak çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "50MP 5x Periskop Portresi & Portrait Studio",
        "recommendedLens": "5x Telefoto (115mm 50MP)",
        "isoShutterEv": "1/500s | EV: +0.3 | f/3.4",
        "hardwareAdvantage": "115mm 50MP lens saç tellerini ve kıyafet dokularını afiş kalitesinde kaydeder.",
        "stepByStepTip": "Modelden 4 metre uzakta durun, 5x ile gözbebeğine odaklayın.",
        "secretTrick": "Portrait Studio ile çektiğiniz kişiye sanatsal stüdyo eskizleri oluşturun.",
        "commonTrap": "Yüze 1 metre yaklaşmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "50MP Ultra Geniş Makro ile Mikroskobik Evren",
        "recommendedLens": "50MP Ultra Geniş Makro (2cm)",
        "isoShutterEv": "1/250s | EV: +0.3 | ISO 50",
        "hardwareAdvantage": "50MP ultra geniş lens 2cm makro çekimlerinde kristal çözünürlük verir.",
        "stepByStepTip": "Tabağa 2 cm yaklaşın, 50MP makroyu açın.",
        "secretTrick": "Peçete reflektörüyle dolgu ışığı verin.",
        "commonTrap": "Gölgenizi tabağa düşürmek."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "8K 60fps & 4K 120fps Tüm Kameralarda Video",
        "recommendedLens": "Tüm Kameralar (Tümü 50MP/200MP)",
        "isoShutterEv": "8K 60fps veya 4K 120fps",
        "hardwareAdvantage": "Dünyada tüm arka kameralarıyla 8K video kaydedebilen ilk telefon serisi.",
        "stepByStepTip": "8K 60fps seçip sinematik pan hareketleri yapın.",
        "secretTrick": "4K 120fps ağır çekim ile su damlası ve spor aksiyonlarını yakalayın.",
        "commonTrap": "Tripodsuz 8K videoda sarsıntı yapmak."
      }
    }
  },
  {
    "id": "samsung-s25-edge",
    "brand": "samsung",
    "series": "Galaxy S25",
    "name": "Samsung Galaxy S25 Edge",
    "badge": "Ultra İnce Kavisli Tasarım & 200MP Ana Sensör",
    "generation": "2025 İnce Amiral Gemisi",
    "releaseYear": 2025,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#06b6d4",
    "bestShootingType": "Sokak Fotoğrafçılığı & Minimalist Mimari",
    "recommendedSetting": "200MP Ana Kamera • 50MP Ultra Geniş • Kavisli Vizör",
    "topFeatureBadge": "200MP Sensör & Ultra İnce Edge",
    "hardware": {
      "mainSensor": "200 MP ISOCELL HP2 (1/1.3\", f/1.7, OIS)",
      "ultraWide": "50 MP (f/2.0, 120°, 2cm Makro)",
      "telephoto": "2x ve 4x Sensör İçi Kayıpsız Zoom (200MP Kırpma)",
      "zoomCapabilities": "0.6x (50MP), 1x (200MP), 2x, 4x Sensör İçi Optik Kalite",
      "apertures": "Ana: f/1.7 | Ultra Geniş: f/2.0",
      "rawSupport": "Expert RAW & Pro Mod 200MP",
      "macroSupport": true,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": true,
      "specialTech": [
        "Ultra İnce Kavisli Edge Tasarım",
        "200MP Çözünürlük",
        "50MP Ultra Geniş Açılı Sensör",
        "Galaxy AI 2.0"
      ]
    },
    "evaluation": {
      "strongestSide": "Ultra ince ve kavisli gövdede devasa 200MP ana sensör ve 50MP ultra geniş açının birleşimi; cepte hissedilmeyen konfor.",
      "weakestSide": "Fiziki periskop lensi yoktur, zoom sensör içi kırpmadır.",
      "scoreOverview": {
        "night": 9.4,
        "portrait": 9.3,
        "street": 9.7,
        "macro": 9.4,
        "landscape": 9.7,
        "video": 9.3
      },
      "verdictBadge": "İnce Kavisli Şıklık & 200MP Güç",
      "bestShootingScenarioDetails": "Hafif ve ince gövdesiyle şehir sokaklarında gezerken 200MP modunda binaların mimari detaylarını çeker."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "200MP Sensör ile Aydınlık Gece Sokakları",
        "recommendedLens": "1x Ana Kamera (f/1.7)",
        "isoShutterEv": "Gece Modu 1s | EV: -0.7 | ISO 200",
        "hardwareAdvantage": "16'lı piksel birleştirme gece karanlığını stüdyo gibi aydınlatır.",
        "stepByStepTip": "Gece modunda çekim yapın.",
        "secretTrick": "Yansıma Silici ile vitrin camı parlamasını kaldırın.",
        "commonTrap": "Karanlıkta aşırı dijital zoom yapmak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "Kavisli Ekran Vizöründe Çevik Sokak Avı",
        "recommendedLens": "2x Sensör İçi Kırpma (48mm)",
        "isoShutterEv": "1/1000s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "200MP sensörün merkezi kayıpsız 48mm klasik sokak açısı üretir.",
        "stepByStepTip": "2x'e dokunup yürüyen insanları yakalayın.",
        "secretTrick": "Hafif gövde sayesinde tek elle sarsıntısız çekim yapın.",
        "commonTrap": "Hızlı hareket ederken telefonu kaydırmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "200MP ile Afiş Baskı Netliği",
        "recommendedLens": "1x Ana Kamera (200MP)",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 32",
        "hardwareAdvantage": "200 milyon piksel doğadaki her detayı saklar.",
        "stepByStepTip": "200MP modunu açıp ufku hizalayın.",
        "secretTrick": "50MP ultra geniş lens ile kanyon panoraması alın.",
        "commonTrap": "Rüzgarda titrek çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "2x Sensör İçi Portre ve Doğal Bokeh",
        "recommendedLens": "2x Portre Modu (48mm f/1.7)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.0",
        "hardwareAdvantage": "f/1.7 diyafram gerçek optik arka plan bulanıklığı sağlar.",
        "stepByStepTip": "Modelden 2 metre uzakta durup çekin.",
        "secretTrick": "Portrait Studio ile sanatsal efektler uygulayın.",
        "commonTrap": "Yüze çok yaklaşmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "50MP Ultra Geniş Makro (2cm)",
        "recommendedLens": "50MP Ultra Geniş Makro",
        "isoShutterEv": "1/200s | EV: +0.3 | ISO 50",
        "hardwareAdvantage": "50MP çözünürlük 2cm'den yemek dokularını mikroskop gibi çeker.",
        "stepByStepTip": "Tabağa 2 cm yaklaşın.",
        "secretTrick": "Peçeteyle dolgu ışığı verin.",
        "commonTrap": "Gölgenizi tabağa düşürmek."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "8K 30fps ve Süper İnce Kasa Vlogu",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "8K 30fps veya 4K 60fps",
        "hardwareAdvantage": "Hafif gövde uzun süreli el çekimlerinde yormaz.",
        "stepByStepTip": "4K 60fps seçip yürüyüşle çekin.",
        "secretTrick": "Instant Slow-Mo ile ağır çekim anı yakalayın.",
        "commonTrap": "Loş ışıkta hızlı hareket etmek."
      }
    }
  },
  {
    "id": "samsung-s25-fe",
    "brand": "samsung",
    "series": "Galaxy S25",
    "name": "Samsung Galaxy S25 FE",
    "badge": "Galaxy AI Foto Asistanı, 50MP & 3x Optik Telefoto",
    "generation": "2025 Fan Edition AI",
    "releaseYear": 2025,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#14b8a6",
    "bestShootingType": "Portre & Günlük Telefoto Çekimi (3x Optik 70mm)",
    "recommendedSetting": "50MP Ana Kamera • 3x Optik Telefoto • Galaxy AI Foto Asistanı",
    "topFeatureBadge": "Galaxy AI Foto Asistanı & 50MP",
    "hardware": {
      "mainSensor": "50 MP (1/1.56\", f/1.8, OIS, Dual Pixel)",
      "ultraWide": "12 MP (f/2.2, 120°)",
      "telephoto": "10 MP (3x Optik, 70mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x, 1x, 2x (Sensör içi), 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.8 | Ultra Geniş: f/2.2 | Tele: f/2.4",
      "rawSupport": "Pro Mod 12MP DNG",
      "macroSupport": false,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": false,
      "specialTech": [
        "Galaxy AI Foto Asistanı",
        "3x Optik Telefoto",
        "50MP Ana Sensör",
        "ProVisual Engine"
      ]
    },
    "evaluation": {
      "strongestSide": "Galaxy AI Foto Asistanı ve 3x gerçek optik telefoto lensin bütçe dostu amiral gemisi deneyiminde buluşması.",
      "weakestSide": "Periskop lensi bulunmaz.",
      "scoreOverview": {
        "night": 8.6,
        "portrait": 8.9,
        "street": 9,
        "macro": 6.8,
        "landscape": 8.9,
        "video": 8.9
      },
      "verdictBadge": "Bütçe Dostu AI Asistanı & 3x Optik",
      "bestShootingScenarioDetails": "Foto Asistanı sayesinde çekim anında pozlama ve kompozisyon önerileri alır; 3x optik lensiyle insan portrelerini doğal çeker."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Foto Asistanı ile Optimize Gece Modu",
        "recommendedLens": "1x Ana Kamera (f/1.8)",
        "isoShutterEv": "Gece Modu 2s | EV: -0.7 | ISO 250",
        "hardwareAdvantage": "Yapay zeka gece modunun en doğru süresini otomatik belirler.",
        "stepByStepTip": "Gece moduna geçip telefonu sabit tutun.",
        "secretTrick": "Yansımaları AI ile silin.",
        "commonTrap": "Karanlıkta 3x telefotoyu zorlamak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik ile Karşı Kaldırımdan Hızlı Anlar",
        "recommendedLens": "3x Optik Telefoto (70mm)",
        "isoShutterEv": "1/800s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "70mm gerçek lens sokak kompozisyonunu sıkıştırır.",
        "stepByStepTip": "3x ile yürüyen insanları yakalayın.",
        "secretTrick": "Üretken Düzenleme ile istenmeyen süjeleri kaldırın.",
        "commonTrap": "Hızlı koşan nesnede gecikme yaşamak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Modu ile Doğa Manzarası",
        "recommendedLens": "50MP Ana Kamera",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "50MP çözünürlük doğadaki detayları korur.",
        "stepByStepTip": "50MP açıp ufku hizalayın.",
        "secretTrick": "Güneşin batışında HDR'ı açık tutun.",
        "commonTrap": "Rüzgarda titrek çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Portre ile Kusursuz Yüz Oranı",
        "recommendedLens": "3x Portre Modu (70mm)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "70mm lens kulak ve burun oranını dengeler.",
        "stepByStepTip": "Modelden 2.5 metre geride durun, göze odaklayın.",
        "secretTrick": "Stüdyo ışığı efektiyle yüzü aydınlatın.",
        "commonTrap": "Modelin yüzüne 1 metre yaklaşmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "3x ile Masadan Gölgesiz Çekim",
        "recommendedLens": "3x Telefoto Lens",
        "isoShutterEv": "1/160s | EV: +0.3 | ISO 100",
        "hardwareAdvantage": "Telefon gölgesi yemeğe düşmez.",
        "stepByStepTip": "Masadan 40 cm geride durun, 3x ile çekin.",
        "secretTrick": "Peçeteyle dolgu ışığı verin.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Instant Slow-Mo & 4K 60fps Akıcı Video",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "4K 60fps | OIS Aktif",
        "hardwareAdvantage": "Videolara sonradan yapay zeka ağır çekim ekleyin.",
        "stepByStepTip": "4K 60fps video çekin, galeride basılı tutun.",
        "secretTrick": "Ağır çekim anını klip olarak kaydedin.",
        "commonTrap": "Loş ışıkta hızlı yürümek."
      }
    }
  },
  {
    "id": "samsung-s26",
    "brand": "samsung",
    "series": "Galaxy S26",
    "name": "Samsung Galaxy S26",
    "badge": "50MP Yeni Nesil Çift Sensör & Kuantum AI ISP",
    "generation": "2026 Gelecek Nesil Amiral Gemisi",
    "releaseYear": 2026,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#6366f1",
    "bestShootingType": "Sokak Fotoğrafçılığı & Kuantum AI Hızlı Yakalama",
    "recommendedSetting": "50MP Ana Kamera • 50MP Ultra Geniş • 3x Optik Telefoto (12MP) • Kuantum AI",
    "topFeatureBadge": "Kuantum AI ISP & Çift 50MP",
    "hardware": {
      "mainSensor": "50 MP Yeni Nesil 1/1.4\" Sensör (f/1.6, Dual Pixel Pro OIS)",
      "ultraWide": "50 MP (f/2.0, 120°, 2cm Makro)",
      "telephoto": "12 MP (3x Optik, 75mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x (50MP), 1x (50MP), 2x (Sensör içi), 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.6 | Ultra Geniş: f/2.0 | Tele: f/2.4",
      "rawSupport": "Expert RAW 2.0 (50MP 16-bit DNG) & Pro Mod",
      "macroSupport": true,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": true,
      "specialTech": [
        "Kuantum AI Nöral ISP",
        "Çift 50MP Sensör Dizilimi",
        "Gerçek Zamanlı AI Işık Takibi",
        "50MP 2cm Otomatik Makro"
      ]
    },
    "evaluation": {
      "strongestSide": "Yeni nesil 1/1.4 inç büyük 50MP sensör ve Kuantum AI motoru sayesinde gece ve sokak çekimlerinde gürültüsüz anlık kare yakalama.",
      "weakestSide": "Periskop lensi bulunmaz.",
      "scoreOverview": {
        "night": 9.6,
        "portrait": 9.6,
        "street": 9.8,
        "macro": 9.5,
        "landscape": 9.6,
        "video": 9.6
      },
      "verdictBadge": "Kuantum AI & Çift 50MP Geleceği",
      "bestShootingScenarioDetails": "Kuantum AI motoru sayesinde en hızlı sokak sahnelerinde ve loş akşam yürüyüşlerinde sıfır bulanıklıkla stüdyo dengesinde fotoğraflar çeker."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Kuantum AI ile 0.5 Saniyede Gece Modu",
        "recommendedLens": "1x Ana Kamera (f/1.6)",
        "isoShutterEv": "Gece Modu 0.5s | EV: -0.7 | ISO 200",
        "hardwareAdvantage": "1/1.4 inç dev sensör ve Kuantum AI gece modunun süresini yarı yarıya düşürür.",
        "stepByStepTip": "Gece moduna geçin, tek elle basıp anında biten gece çekimini görün.",
        "secretTrick": "Yıldız ve Samanyolu çekimlerinde 10 saniyede stüdyo netliği yakalayın.",
        "commonTrap": "Karanlıkta 30x dijital zoom yapmak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "Kuantum Nöral Deklanşör ile Anlık Sokak Avı",
        "recommendedLens": "3x Optik Telefoto (75mm)",
        "isoShutterEv": "1/2000s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "Gecikme süresi 0.001 saniyeye indirilmiştir; koşan herkesi dondurur.",
        "stepByStepTip": "3x ile karşı kaldırımdaki insanları yakalayın.",
        "secretTrick": "Yapay zeka nesne siliciyle kadrajdaki yabancıları anında temizleyin.",
        "commonTrap": "Süjeyi takip ederken telefonu ani savurmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "Çift 50MP ile Kanyon ve Dağ Manzarası",
        "recommendedLens": "0.6x (50MP) veya 1x (50MP)",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 32",
        "hardwareAdvantage": "Ultra geniş açı 50MP olduğu için manzara köşelerindeki bulanıklık sıfırlanmıştır.",
        "stepByStepTip": "0.6x'te 50MP modunu açıp dev kanyon manzarasını çekin.",
        "secretTrick": "Expert RAW 2.0 ile gökyüzünü 16-bit DNG olarak işleyin.",
        "commonTrap": "Rüzgarda titrek çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Portre & Kuantum Bokeh Efekti",
        "recommendedLens": "3x Portre Modu (75mm)",
        "isoShutterEv": "1/400s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Kuantum derinlik haritası her bir saç telini stüdyo hassasiyetinde ayırır.",
        "stepByStepTip": "Modelden 2.5 metre geride durup göze odaklayın.",
        "secretTrick": "Portrait Studio AI ile sanatsal portreler oluşturun.",
        "commonTrap": "Yüze 1 metre yaklaşmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "50MP Ultra Geniş Makro ile 2cm Yakınlaşma",
        "recommendedLens": "50MP Ultra Geniş Makro (2cm)",
        "isoShutterEv": "1/250s | EV: +0.3 | ISO 50",
        "hardwareAdvantage": "50MP çözünürlük 2cm'den yemek dokularını mikroskop gibi çeker.",
        "stepByStepTip": "Tabağa 2 cm yaklaşın, 50MP makroyu açın.",
        "secretTrick": "Peçete reflektörüyle dolgu ışığı verin.",
        "commonTrap": "Gölgenizi tabağa düşürmek."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "8K 30fps & 4K 120fps Canlı AI Video Temizleme",
        "recommendedLens": "1x Ana Kamera veya 3x Optik",
        "isoShutterEv": "8K 30fps veya 4K 120fps",
        "hardwareAdvantage": "Kuantum AI video kaydı sırasında canlı gürültü temizleme ve alan derinliği uygular.",
        "stepByStepTip": "4K 120fps seçip sinematik spor videoları çekin.",
        "secretTrick": "Instant Slow-Mo 2.0 ile videoları ağır çekime dönüştürün.",
        "commonTrap": "Loş ışıkta hızlı hareket etmek."
      }
    }
  },
  {
    "id": "samsung-s26-plus",
    "brand": "samsung",
    "series": "Galaxy S26",
    "name": "Samsung Galaxy S26+",
    "badge": "50MP Çift Sensör, Kuantum AI & 5000mAh Pil",
    "generation": "2026 Plus Amiral Gemisi",
    "releaseYear": 2026,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#6366f1",
    "bestShootingType": "Doğa Manzarası & Seyahat (50MP Expert RAW 2.0)",
    "recommendedSetting": "50MP Expert RAW • 3x Optik Zoom (75mm) • 3000 Nit Zirve Vizör",
    "topFeatureBadge": "3000 Nit Vizör & Kuantum AI",
    "hardware": {
      "mainSensor": "50 MP Yeni Nesil 1/1.4\" Sensör (f/1.6, OIS)",
      "ultraWide": "50 MP (f/2.0, 120°, 2cm Makro)",
      "telephoto": "12 MP (3x Optik, 75mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x (50MP), 1x (50MP), 2x (Sensör içi), 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.6 | Ultra Geniş: f/2.0 | Tele: f/2.4",
      "rawSupport": "Expert RAW 2.0 & Pro Mod",
      "macroSupport": true,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": true,
      "specialTech": [
        "3000 Nit Zirve Ekran Parlaklığı",
        "5000mAh Devasa Pil",
        "Kuantum AI ISP",
        "Çift 50MP Sensör"
      ]
    },
    "evaluation": {
      "strongestSide": "3000 nit rekor ekran parlaklığı ile karlı zirvelerde veya sahilde ayna berraklığında vizör; 5000mAh pille gün boyu kesintisiz 50MP RAW çekimi.",
      "weakestSide": "Periskop lensi bulunmaz.",
      "scoreOverview": {
        "night": 9.6,
        "portrait": 9.6,
        "street": 9.8,
        "macro": 9.5,
        "landscape": 9.8,
        "video": 9.6
      },
      "verdictBadge": "3000 Nit Zirve Vizör & Kuantum Gücü",
      "bestShootingScenarioDetails": "Güneşin en dik olduğu anlarda bile 3000 nit vizörüyle manzarayı parlamadan görür ve çift 50MP sensörüyle doğayı kaydeder."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Kuantum AI ile Aydınlık Gece Parkı",
        "recommendedLens": "1x Ana Kamera (f/1.6)",
        "isoShutterEv": "Gece Modu 1s | EV: -0.7 | ISO 200",
        "hardwareAdvantage": "Nöral ISP gece grenlerini anında siler.",
        "stepByStepTip": "Gece modunda çekim yapın.",
        "secretTrick": "Expert RAW ile gece şehir çekimi yapın.",
        "commonTrap": "Karanlıkta 30x zoom yapmak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik Lens ile Hızlı Şehir Enstantanesi",
        "recommendedLens": "3x Optik Telefoto (75mm)",
        "isoShutterEv": "1/1200s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "75mm açı doğal insan portresi verir.",
        "stepByStepTip": "Karşı kaldırımdan 3x ile çekim yapın.",
        "secretTrick": "Hızlı deklanşörü açık tutun.",
        "commonTrap": "Koşan nesnede gecikme yaşamak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Expert RAW ve 3000 Nit Görüş",
        "recommendedLens": "50MP Ana Kamera (Expert RAW)",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 32",
        "hardwareAdvantage": "3000 nit parlaklık vizörde en ince bulut gölgelerini gösterir.",
        "stepByStepTip": "Expert RAW'da 50MP açıp ufku hizalayın.",
        "secretTrick": "Lightroom'da 16-bit DNG dosyasını zenginleştirin.",
        "commonTrap": "Tripodsuz rüzgarda çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Portre ve Yapay Zeka Işıklandırması",
        "recommendedLens": "3x Portre Modu (75mm)",
        "isoShutterEv": "1/400s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "Yapay zeka saçları arka plandan pürüzsüz ayırır.",
        "stepByStepTip": "Modelden 2.5 metre uzakta durup çekin.",
        "secretTrick": "Portre Stüdyosu ile yüzü aydınlatın.",
        "commonTrap": "Yüze 1 metre yaklaşmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "50MP Ultra Geniş ile 2cm Makro",
        "recommendedLens": "50MP Ultra Geniş Makro",
        "isoShutterEv": "1/250s | EV: +0.3 | ISO 50",
        "hardwareAdvantage": "50MP çözünürlük 2cm'den yemek dokularını mikroskop gibi çeker.",
        "stepByStepTip": "Tabağa 2 cm yaklaşın.",
        "secretTrick": "Peçeteyle dolgu ışığı verin.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "8K 30fps & 4K 120fps Akıcı Video",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "4K 60fps | OIS Aktif",
        "hardwareAdvantage": "Instant Slow-mo normal videoyu anında yapay zeka ağır çekime çevirir.",
        "stepByStepTip": "4K 60fps video çekin, galeride basılı tutun.",
        "secretTrick": "Ağır çekim anını klip olarak dışa aktarın.",
        "commonTrap": "Loş ışıkta hızlı hareket etmek."
      }
    }
  },
  {
    "id": "samsung-s26-ultra",
    "brand": "samsung",
    "series": "Galaxy S26",
    "name": "Samsung Galaxy S26 Ultra",
    "badge": "200MP 1\" ISOCELL HP5, f/1.4-f/2.4 Mekanik Diyafram & Çift 50MP Kesintisiz Zoom (3x-10x)",
    "generation": "2026 Mobil Fotoğrafçılığın Zirvesi",
    "releaseYear": 2026,
    "isPro": true,
    "backViewImage": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#ec4899",
    "bestShootingType": "Tüm Kategorilerde Zirve & 150x Space Zoom (Mekanik Diyafram f/1.4)",
    "recommendedSetting": "Mekanik Diyafram f/1.4 • 3x-10x Kesintisiz Optik Zoom • 200MP 1\" HP5 • 8K 60fps Log",
    "topFeatureBadge": "1\" 200MP HP5 & Mekanik Diyafram",
    "hardware": {
      "mainSensor": "200 MP 1 inç eşdeğeri ISOCELL HP5 (f/1.4 - f/2.4 Mekanik Değişken Diyafram bıçaklı, Genişletilmiş OIS, Lazer AF)",
      "ultraWide": "50 MP (f/1.8, 122°, 2cm Makro)",
      "telephoto": "Çift 50MP Hareketli Periskop: 50 MP 3x-10x Kesintisiz Optik Zum (70mm - 240mm f/2.4 - f/4.0, Dual OIS)",
      "zoomCapabilities": "0.6x (50MP), 1x (200MP Mekanik f/1.4-f/2.4), 2x, 3x-10x Kesintisiz Optik Zoom, 150x Space Zoom",
      "apertures": "Ana: f/1.4 - f/2.4 Mekanik | Ultra Geniş: f/1.8 | Telefoto: f/2.4 - f/4.0",
      "rawSupport": "Expert RAW 2.0 (16-bit Ham DNG) & Pro Mod 200MP",
      "macroSupport": true,
      "ois": true,
      "spaceZoom": "150x",
      "expertRawSupport": true,
      "specialTech": [
        "1 inç Eşdeğeri 200MP ISOCELL HP5 Sensör",
        "Mekanik Değişken Fiziksel Diyafram Bıçakları (f/1.4 - f/2.4)",
        "3x ile 10x Arası Kesintisiz Hareketli Optik Zoom Mekanizması",
        "Kuantum AI Nöral Görüntü İşleme Motoru",
        "150x Space Zoom (Yapay Zeka Destekli Netleme)",
        "8K 60fps HDR & Pro Video Log Profili"
      ]
    },
    "evaluation": {
      "strongestSide": "1 inç dev sensörde gerçek fiziksel mekanik diyafram bıçakları (f/1.4-f/2.4), 3x'ten 10x'e kadar hareketli merceklerle kesintisiz optik zoom ve 150x Space Zoom.",
      "weakestSide": "En büyük kamera adası ve amiral gemisi ağırlığı.",
      "scoreOverview": {
        "night": 10,
        "portrait": 10,
        "street": 10,
        "macro": 10,
        "landscape": 10,
        "video": 10
      },
      "verdictBadge": "Mobil Kameraların Mutlak Kralı & 150x Zoom",
      "bestShootingScenarioDetails": "f/1.4 mekanik diyaframıyla zifiri karanlıkta gürültüsüz gece portresi ve Samanyolu astrofotografisi çeker; 3x-10x kesintisiz optik zoom ile stadyum konserlerinden vahşi doğaya kadar her mesafede cam netliği sunar."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "f/1.4 Mekanik Diyafram & 1 inç HP5 ile Zifiri Gece",
        "recommendedLens": "1x Ana Kamera (Mekanik Diyafram f/1.4 Açık)",
        "isoShutterEv": "Gece Modu 0.3s | EV: -1.0 | ISO 100",
        "hardwareAdvantage": "1 inçlik devasa 200MP sensör ve f/1.4 mekanik açıklık gece karanlığını yapay zekaya ihtiyaç duymadan emer.",
        "stepByStepTip": "Pro modunda diyaframı f/1.4'e getirin. En loş sokakta bile 0.3 saniyede sıfır grensiz kare çeker.",
        "secretTrick": "Expert RAW 2.0 Astro modunda f/1.4 diyaframla 15 saniyede binlerce yıldızı kristal netlikte dondurun.",
        "commonTrap": "Grup fotoğraflarında f/1.4 açık bırakıp arkadaki kişileri bulanıklaştırmak; grupta diyaframı f/2.4'e kısın."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x-10x Kesintisiz Optik Zoom ile Sokakta Av",
        "recommendedLens": "3x ile 10x Arası Kesintisiz Periskop (Tümü 50MP)",
        "isoShutterEv": "1/2000s | EV: -0.3 | ISO 80",
        "hardwareAdvantage": "3x ile 10x arasındaki her kademede mercekler fiziksel hareket eder; sıfır piksel kaybı ile optik yakınlaşır.",
        "stepByStepTip": "Sokakta yürürken parmağınızı zoom halkasında kaydırın, merceklerin akıcı optik hareketini hissedin.",
        "secretTrick": "f/2.4 diyaframa kısarak gündüz sokak mimarisini önden arkaya jilet gibi netleyin.",
        "commonTrap": "Öğle güneşinde f/1.4 açık bırakıp aşırı pozlamaya yol açmak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "200MP & 10x Kesintisiz Optik ile Dağ Katmanları",
        "recommendedLens": "1x 200MP veya 10x Periskop (50MP)",
        "isoShutterEv": "1/1000s | EV: -0.3 | ISO 32",
        "hardwareAdvantage": "f/2.4 mekanik diyaframa kısıldığında köşelerdeki yumuşama tamamen sıfırlanır.",
        "stepByStepTip": "Gündüz manzarasında diyaframı f/2.4 yapın; profesyonel DSLR lensi gibi tüm dağlar netlenir.",
        "secretTrick": "150x Space Zoom ile 5 kilometre uzaktaki tarihi kaleyi Zoom Lock ile sabitleyip çekin.",
        "commonTrap": "Geniş manzarada açık f/1.4 kullanmak."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "Gerçek Fiziksel Optik Bokeh (Yapay Zekasız)",
        "recommendedLens": "1x (Mekanik f/1.4) veya 5x-10x Periskop",
        "isoShutterEv": "1/500s | EV: +0.3 | f/1.4",
        "hardwareAdvantage": "Portre modunun yapay bulanıklığına gerek kalmadan, lensin kendi dev 1 inç sensörü ve f/1.4 diyaframı gerçek optik bokeh üretir.",
        "stepByStepTip": "Standart Fotoğraf modunda f/1.4 diyafram seçin. Kulak ve saç telleri yapay zeka olmadan %100 doğal erir.",
        "secretTrick": "Modelin arkasındaki şehir ışıkları prizmatik gerçek daireler oluşturur.",
        "commonTrap": "Açık diyaframda göz yerine burnun ucuna odaklayıp gözü bulanık bırakmak; mutlaka gözbebeğine kilitleyin."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "50MP Ultra Geniş Makro & Tele-Makro",
        "recommendedLens": "50MP Ultra Geniş Makro veya 5x Tele-Makro",
        "isoShutterEv": "1/250s | EV: +0.3 | ISO 50",
        "hardwareAdvantage": "Mekanik diyaframı f/2.0'a kısarak tatlının sadece istenen süsünü netleyin.",
        "stepByStepTip": "Tabağa 2 cm yaklaşın, diyaframı ayarlayın.",
        "secretTrick": "Pencereye 45° açı, karşı tarafa beyaz peçete yansıtıcı yerleştirin.",
        "commonTrap": "Karanlık mekanda flaş açmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "8K 60fps ProRes / Log & Kesintisiz Optik Zoom Video",
        "recommendedLens": "Tüm Kameralar (Tümü 50MP/200MP)",
        "isoShutterEv": "8K 60fps Log | 4K 120fps HDR",
        "hardwareAdvantage": "Video kaydı sırasında 3x'ten 10x'e kadar mercekler fiziksel hareket ederek kesintisiz optik zoom yapar.",
        "stepByStepTip": "Video çekerken parmağınızı zoom halkasında kaydırarak Hollywood kalitesinde optik zoom yapın.",
        "secretTrick": "f/1.4'ten f/2.4'e akıcı mekanik diyafram geçişiyle video çekerken arka plan bulanıklığını açıp kapatın.",
        "commonTrap": "Tripodsuz 10x videoda ani sarsıntılar yapmak."
      }
    }
  },
  {
    "id": "samsung-s26-fe",
    "brand": "samsung",
    "series": "Galaxy S26",
    "name": "Samsung Galaxy S26 FE",
    "badge": "50MP Yeni Nesil Çift Sensör & Kuantum AI",
    "generation": "2026 Fan Edition Geleceği",
    "releaseYear": 2026,
    "isPro": false,
    "backViewImage": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop",
    "accentColor": "#14b8a6",
    "bestShootingType": "Sokak Fotoğrafçılığı & Kuantum AI Portre",
    "recommendedSetting": "50MP Ana Kamera • 3x Optik Telefoto (75mm) • Kuantum AI Foto Asistanı",
    "topFeatureBadge": "Kuantum AI & Çift 50MP Sensör",
    "hardware": {
      "mainSensor": "50 MP Yeni Nesil Sensör (1/1.56\", f/1.7, OIS, Dual Pixel)",
      "ultraWide": "50 MP (f/2.0, 120°, 2cm Makro)",
      "telephoto": "12 MP (3x Optik, 75mm f/2.4, OIS, 30x Space Zoom)",
      "zoomCapabilities": "0.6x (50MP), 1x (50MP), 2x (Sensör içi), 3x Optik, 30x Space Zoom",
      "apertures": "Ana: f/1.7 | Ultra Geniş: f/2.0 | Tele: f/2.4",
      "rawSupport": "Pro Mod 12MP DNG",
      "macroSupport": true,
      "ois": true,
      "spaceZoom": "30x",
      "expertRawSupport": false,
      "specialTech": [
        "Kuantum AI Foto Asistanı",
        "Çift 50MP Sensör Dizilimi",
        "3x Optik Telefoto",
        "50MP 2cm Makro"
      ]
    },
    "evaluation": {
      "strongestSide": "Bütçe dostu segmentte çift 50MP sensör dizilimi ve Kuantum AI işlem hızı; 50MP ultra geniş açıyla 2cm makro.",
      "weakestSide": "Periskop lensi bulunmaz.",
      "scoreOverview": {
        "night": 9,
        "portrait": 9.2,
        "street": 9.4,
        "macro": 9.2,
        "landscape": 9.3,
        "video": 9.2
      },
      "verdictBadge": "Kuantum AI Destekli Bütçe Şampiyonu",
      "bestShootingScenarioDetails": "Kuantum AI Foto Asistanı ile sokakta ve portrelerde en doğru ışık açısını önerir; çift 50MP sensörüyle yüksek netlik sunar."
    },
    "recipes": {
      "night": {
        "categoryName": "Gece Fotoğrafçılığı",
        "title": "Kuantum AI Gece Modu",
        "recommendedLens": "1x Ana Kamera (f/1.7)",
        "isoShutterEv": "Gece Modu 1s | EV: -0.7 | ISO 250",
        "hardwareAdvantage": "Nöral ISP gece grenini anında temizler.",
        "stepByStepTip": "Gece moduna geçip telefonu sabit tutun.",
        "secretTrick": "Yansımaları AI ile silin.",
        "commonTrap": "Karanlıkta 3x telefotoyu zorlamak."
      },
      "street": {
        "categoryName": "Sokak Fotoğrafçılığı",
        "title": "3x Optik ile Karşı Kaldırımdan Hızlı Anlar",
        "recommendedLens": "3x Optik Telefoto (75mm)",
        "isoShutterEv": "1/1000s | EV: -0.3 | ISO 100",
        "hardwareAdvantage": "75mm gerçek lens sokak kompozisyonunu sıkıştırır.",
        "stepByStepTip": "3x ile yürüyen insanları yakalayın.",
        "secretTrick": "Üretken Düzenleme ile istenmeyen süjeleri kaldırın.",
        "commonTrap": "Hızlı koşan nesnede gecikme yaşamak."
      },
      "landscape": {
        "categoryName": "Manzara Fotoğrafçılığı",
        "title": "50MP Modu ile Doğa Manzarası",
        "recommendedLens": "50MP Ana Kamera",
        "isoShutterEv": "1/1000s | EV: 0.0 | ISO 50",
        "hardwareAdvantage": "50MP çözünürlük doğadaki detayları korur.",
        "stepByStepTip": "50MP açıp ufku hizalayın.",
        "secretTrick": "50MP ultra geniş ile panoramik kanyon çekin.",
        "commonTrap": "Rüzgarda titrek çekmek."
      },
      "portrait": {
        "categoryName": "Portre Fotoğrafçılığı",
        "title": "3x Portre ile Kusursuz Yüz Oranı",
        "recommendedLens": "3x Portre Modu (75mm)",
        "isoShutterEv": "1/320s | EV: +0.3 | f/2.4",
        "hardwareAdvantage": "75mm lens kulak ve burun oranını dengeler.",
        "stepByStepTip": "Modelden 2.5 metre geride durun, göze odaklayın.",
        "secretTrick": "Stüdyo ışığı efektiyle yüzü aydınlatın.",
        "commonTrap": "Modelin yüzüne 1 metre yaklaşmak."
      },
      "foodMacro": {
        "categoryName": "Yemek / Ürün Fotoğrafçılığı",
        "title": "50MP Ultra Geniş Makro (2cm)",
        "recommendedLens": "50MP Ultra Geniş Makro",
        "isoShutterEv": "1/200s | EV: +0.3 | ISO 50",
        "hardwareAdvantage": "50MP çözünürlük 2cm'den yemek dokularını mikroskop gibi çeker.",
        "stepByStepTip": "Tabağa 2 cm yaklaşın.",
        "secretTrick": "Peçeteyle dolgu ışığı verin.",
        "commonTrap": "Tabağa 10 cm yaklaşmak."
      },
      "video": {
        "categoryName": "Video & Sinematik",
        "title": "Instant Slow-Mo 2.0 & 4K 60fps Video",
        "recommendedLens": "1x Ana Kamera",
        "isoShutterEv": "4K 60fps | OIS Aktif",
        "hardwareAdvantage": "Videolara sonradan yapay zeka ağır çekim ekleyin.",
        "stepByStepTip": "4K 60fps video çekin, galeride basılı tutun.",
        "secretTrick": "Ağır çekim anını klip olarak kaydedin.",
        "commonTrap": "Loş ışıkta hızlı yürümek."
      }
    }
  }
];
