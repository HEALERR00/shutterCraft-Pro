import { GuideItem } from "@/types";

export const guidesData: GuideItem[] = [
  {
    id: "portrait",
    title: "Portre & İnsan Çekimi",
    subtitle: "Doğal bokeh, doğru yüz anatomisi ve büyüleyici bakışlar",
    tag: "En Popüler Rehber",
    coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    accentColor: "amber",
    difficulty: "Başlangıç",
    duration: "7 dk okuma",
    summary: "Telefonların 1x geniş açılı kamerasıyla yüze çok yaklaşıldığında optik distorsiyon nedeniyle burun büyür, kulaklar geri çekilir ve yüz formu bozulur. 2x veya 3x optik telefoto lense geçerek, modelle araya 2-3 metre mesafe koyarak ve ters ışığı saç parıltısı (halo efekti) olarak kullanarak stüdyo kalitesinde portreler yakalayabilirsiniz.",
    recommendedSettings: {
      lens: "2x veya 3x Optik Telefoto (Portre Modunda f/2.4 - f/3.2 aralığı)",
      iso: "ISO 50 - 125 (Mümkün olan en temiz temel hassasiyet)",
      shutter: "1/250s - 1/500s (Göz kırpma, saç savrulması ve mikro mimikleri dondurmak için)",
      ev: "0.0 ile +0.3 EV (Ten rengini canlı, berrak ve parlak tutmak için)",
      focusMode: "Yakın Göz Bebeğine Kilitli AE/AF (Yüz Takibi Açık)",
      lighting: "45° Yandan Gelen Doğal Pencere Işığı veya Gün Batımı Ters Işığı (Rim Light)"
    },
    rules: [
      {
        title: "2x / 3x Kuralı ile Yüz Anatomisini Koruyun",
        description: "1x ana kamera (24-26mm eşdeğeri) manzara için tasarlanmış geniş açılı bir lenstir. Yüze 40 cm yaklaşıldığında burun ve çene orantısız büyür. 2x veya 3x telefoto lense (50-77mm) geçip 2.5 metre geriye çekildiğinizde yüz hatları doğal ve dengeli görünür."
      },
      {
        title: "Göz Bebeğini Üst Üçte Birlik Çizgiye Yerleştirin",
        description: "Kamera ızgarasını (Rule of Thirds) açın. Modelin izleyiciye en yakın olan ana gözünü üst yatay çizginin sağ veya sol kesişim noktasına hizalayın. Bu kural izleyici ile süje arasında anında psikolojik bağ kurar."
      },
      {
        title: "Ters Işık (Rim Light) ve Saç Parıltısı Hilesi",
        description: "Güneşi modelin tam arkasına değil, 45 derece çapraz arkasına alın. Güneş ışığı saç tellerinde ve omuzlarda altın sarısı ince bir çizgi (halo çizgisi) oluşturarak modeli arka plandan 3 boyutlu şekilde ayırır."
      },
      {
        title: "Aşırı Yapay Bokeh Tuzağından Kaçının",
        description: "Telefonların portre modunda diyaframı f/1.4 gibi ekstrem değerlere çekmek kulak memelerini ve saç tellerini yapay zeka hatasıyla bulanıklaştırır. Diyaframı f/2.8 ile f/4.0 arasına ayarlayarak optik lens doğallığı elde edin."
      },
      {
        title: "Modelin Göz Hizasına İnin",
        description: "Kamerayı kendi göz hizanızdan aşağıya doğru tutarsanız kafa gövdeye göre devasa görünür. Hafifçe eğilerek kamerayı modelin tam göz hizasına getirin; bu duruş fotoğrafa doğrudan saygı ve denge hissi verir."
      }
    ],
    steps: [
      {
        title: "1. Adım: Telefoto Lensi Seçin ve Mesafeyi Ayarlayın",
        description: "Kamera uygulamasında 2x veya 3x optik butona dokunun. Modelinizden yaklaşık 2 ila 2.5 metre geriye çekilin. Kadrajı göğüsten yukarısı (klasik büst portre) olacak şekilde doldurun.",
        proTip: "Geniş açı fıçı bükülmesinden tamamen kurtulmak için asla 1x lenste yakınlaşmayın; daima telefoto kullanıp fiziksel olarak geriye adım atın.",
        commonMistake: "1x lenste burnun dibine kadar girip yüzü balıkgözü gibi eğri çıkarmak."
      },
      {
        title: "2. Adım: Yakın Göz Bebeğine Odak ve Pozlama Kilidi Koyun",
        description: "Ekranda modelin size en yakın göz bebeğinin tam üzerine dokunun ve 1.5 saniye parmağınızı basılı tutun. Üstte sarı renkte 'AE/AF KİLİTLENDİ' uyarısı görünmelidir.",
        proTip: "Kutucuğun sağındaki küçük sarı güneş ikonunu çok hafif (yaklaşık yarım parmak) aşağı kaydırarak yanak ve alın bölgesindeki beyaz parlamaları (highlight patlaması) engelleyin.",
        commonMistake: "Yüz yerine arkadaki parlak ağaca veya duvara odaklayıp modelin yüzünün karanlık kalmasına yol açmak."
      },
      {
        title: "3. Adım: Işık Açısını ve Yüzün Dönüşünü Yönetin",
        description: "Modeli asla doğrudan tepe güneşine baktırmayın; gözlerini kısar ve burun altında çirkin üçgen gölgeler oluşur. Modeli açık gölgeye alın veya güneşi modelin arkasına çapraz konumlandırın.",
        proTip: "Pencere önünde çekim yaparken modeli pencereye 45 derece yan çevirin. Yüzün bir yarısında yumuşak ışık, diğer yarısında hafif gölge (Rembrandt aydınlatması) oluşur.",
        commonMistake: "Göz altlarında siyah torba gölgeleri oluşturan öğle saatinde (saat 12:00-14:00) açık güneşte portre çekmek."
      },
      {
        title: "4. Adım: Doğal Dolgu Reflektörü Kullanımı",
        description: "Gölgede kalan yüz yarısını aydınlatmak için pahalı stüdyo reflektörlerine ihtiyacınız yok. Beyaz bir duvar, açık renkli bir mermer masa veya beyaz bir gazete kağıdı bile harika bir yansıtıcıdır.",
        proTip: "Modelin kucağına beyaz bir ceket veya menü kartı koydurarak çene altındaki sert gölgeleri yumuşacık bir dolguyla yok edebilirsiniz.",
        commonMistake: "Telefonun ön flaşını açıp ten rengini yapay sarı/maviye boyamak ve göz bebeğini kırmızıya çevirmek."
      },
      {
        title: "5. Adım: Doğru Duruş (Posing) ve Çene Açısı",
        description: "Modelinize kameraya tam cepheden dik durmak yerine gövdesini 30 derece yana çevirmesini ve başını hafifçe size doğru eğmesini söyleyin.",
        proTip: "Çift çene (gıdı) görünümünü engellemek için modelden kulaklarını hafifçe ileriye doğru uzatmasını ('kaplumbağa hareketi') isteyin; çene çizgisi jilet gibi belirginleşir.",
        commonMistake: "Modele 'Gülümse' deyip yapay ve gergin bir donuk ifadeye sebep olmak. Bunun yerine sohbet ederek kahkaha attığı anı seri çekimle yakalayın."
      },
      {
        title: "6. Adım: Sanal Diyafram (f-Stop) İnce Ayarı",
        description: "Fotoğrafı çektikten sonra galeride 'Düzenle'ye basıp diyafram değerini kontrol edin. Çoğu telefon varsayılan olarak f/1.4 verir.",
        proTip: "Bu değeri f/2.8 ile f/3.5 seviyesine çekin. Böylece iki göz de net kalırken yalnızca arka plandaki binalar ve sokak yumuşakça erir.",
        commonMistake: "Portre modunu f/1.4'te bırakıp saç tokalarının, küpelerin ve saç uçlarının bulanıklık algoritması tarafından silinmesi."
      }
    ],
    equipmentTips: [
      "Mikrofiber Lens Bezi: Çekim öncesi parmak izlerini mutlaka dairesel hareketle silin.",
      "Kompakt Reflektör veya Beyaz Karton: Yüzdeki gölgeleri doldurmak için çantada taşınabilir en hafif mucize.",
      "Kulaklık / Bluetooth Dekanşör: Titreşimsiz çekim için telefonu oynatmadan fotoğrafı tetikler."
    ],
    proChecklist: [
      "2x veya 3x telefoto lense geçildi mi?",
      "Modelle aranda en az 2 metre mesafe var mı?",
      "Kamerayı modelin göz hizasına indirdin mi?",
      "Göz bebeğine dokunup AE/AF kilitlendi mi?",
      "Arka planda modelin başından çıkan sokak lambası veya tabela var mı?"
    ],
    realWorldCases: [
      {
        scenario: "Öğle Güneşinde Göz Altı Morlukları:",
        solution: "Modeli yakındaki bir kafenin tentesinin veya ağacın açık gölgesine alın. Yüzün doğrudan gökyüzünden gelen yumuşak ışığı görmesini sağlayın."
      },
      {
        scenario: "Gözlük Camında Parlama:",
        solution: "Modelden başını sadece 5 derece yana çevirmesini veya gözlük çerçevesini kulak arkasından 1 milimetre yukarı kaldırmasını isteyin; camdaki yansıma anında yok olur."
      }
    ]
  },
  {
    id: "night",
    title: "Gece & Düşük Işık",
    subtitle: "Grenlerden arınmış, derin siyahlar ve kristal neon yansımaları",
    tag: "Kritik Gece Tekniği",
    coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    accentColor: "cyan",
    difficulty: "Orta",
    duration: "8 dk okuma",
    summary: "Telefonların gece modunda yaptığı en büyük hata, zifiri karanlığı aydınlatmak için ISO'yu 3200'e fırlatıp sokak lambalarını patlatması ve gökyüzünü çirkin bir griye boyamasıdır. Pozlama telafisini (EV) -1.0 seviyesine düşürerek, temizlenmiş lensle ve vücut sabitleme teknikleriyle sinematik karanlıklar ve doygun neonlar yakalayabilirsiniz.",
    recommendedSettings: {
      lens: "1x Ana Kamera Lensi (Telefonun en geniş f/1.6 - f/1.8 fiziksel diyaframı)",
      iso: "ISO 50 - 400 (Manuel modda greni sıfırlamak için kesinlikle düşük tutulmalı)",
      shutter: "Gece Modu Otomatik 2s - 5s veya Tripod ile 10s - 30s",
      ev: "-0.7 EV ile -1.3 EV arası (Siyahları derinleştiren sihirli aralık)",
      focusMode: "En Parlak Neon Işığa veya Vitrin Yazısına Dokunarak Kilitli",
      lighting: "Şehir neonları, vitrin ışıkları, araç stop lambaları, ıslak zemin yansımaları"
    },
    rules: [
      {
        title: "-1.0 EV Kuralı ile Geceyi Gündüze Çevirmeyin",
        description: "Kamera gece ortamında ortalama %18 gri pozlama elde etmek için ışığı yapay olarak açar. Ekrana dokunup sarı güneşi aşağı çekerek -0.7 ile -1.3 EV aralığına indirin. Sokak lambalarındaki patlamalar diner, neon renkleri canlı kırmızı ve maviye döner."
      },
      {
        title: "Lensinizi Tişörtle Değil, Özel Bezle Temizleyin",
        description: "Gece lambalarından sağa sola uzayan kirli yıldız ışık çizgileri (flare) parmak yağlarından kaynaklanır. Lensinizi çekimden hemen önce dairesel hareketle silmek gece netliğini %60 oranında artırır."
      },
      {
        title: "3 Noktalı Vücut Sabitlemesi (Tripodsuz Çözüm)",
        description: "Uzun pozlama sırasında mikro titremeleri önlemek için dirseklerinizi göğüs kafesinize bastırın. Ayaklarınızı omuz genişliğinde açın, nefesinizi verin ve dekanşöre basıp çekim bitene kadar donun."
      },
      {
        title: "Islak Zemin & Su Birikintisi Büyüsü",
        description: "Yağmur sonrası sokak lambaları ve renkli neonların ıslak asfalttaki yansımaları fotoğrafa çift katmanlı sinematik derinlik katar. Kamerayı yere 5 cm yaklaştırarak çekim yapın."
      },
      {
        title: "Dahili Flaş Kullanımını Tamamen Yasaklayın",
        description: "Telefonun arkasındaki minik LED flaş, 1.5 metreden sonrasını aydınlatamaz. Ön plandaki nesneyi düzleştirip patlatırken arka planı zifiri karanlık bir kuyuya dönüştürür."
      }
    ],
    steps: [
      {
        title: "1. Adım: Lens Yüzeyindeki Yağı ve Tozu Temizleyin",
        description: "Cebinizden çıkardığınız telefonun kamerası parmak iziyle kaplıdır. Mikrofiber bez veya pamuklu bir kumaşın temiz kısmıyla lensi dairesel hareketlerle silin.",
        proTip: "Lense hafifçe nefesinizle buğu yapıp ardından dairesel silmek inatçı yağ tabakasını kusursuz temizler.",
        commonMistake: "Lens kirliyken çekim yapıp tüm sokak lambalarında uzayan çizgili ışık kırılmaları (ışık kirliliği) oluşturmak."
      },
      {
        title: "2. Adım: 1x Ana Geniş Açılı Kamerayı Tercih Edin",
        description: "Gece çekimlerinde telefonun 0.5x ultra geniş veya 3x telefoto lensleri küçük sensörleri ve dar diyaframları (f/2.4 - f/2.8) yüzünden çok karanlık kalır. En büyük sensör ve f/1.6 diyafram sadece 1x ana kameradadır.",
        proTip: "Gerekiyorsa konuya ayaklarınızla yaklaşın ama 1x lensten vazgeçmeyin.",
        commonMistake: "Gece karanlığında 3x veya 5x telefotoya geçip çamur gibi grenli fotoğraflar elde etmek."
      },
      {
        title: "3. Adım: Parlak Noktaya Odaklanın ve Güneşi Aşağı Çekin",
        description: "Kadrajdaki en parlak neon tabelaya veya ışıklı vitrine dokunun ve 1 saniye basılı tutun (AE/AF Kilitli). Güneş simgesini en az %40 aşağı kaydırın.",
        proTip: "Neon tabelanın üzerindeki yazı harf harf okunabilir hale gelene kadar pozlamayı kısmaya devam edin.",
        commonMistake: "Karanlık bir gölgeye dokunup telefonun ortamı gündüz sanarak ISO 6400 ile kumlu bir görsel üretmesine yol açmak."
      },
      {
        title: "4. Adım: 2 Saniyelik Zamanlayıcı (Self-Timer) Kurun",
        description: "Ekrana parmağınızla dokunduğunuz milisaniyede telefon sarsılır. Kamera ayarlarından 2s veya 3s zamanlayıcı açın.",
        proTip: "Böylece dekanşöre basar, iki elinizle telefonu sıkıca kilitler ve nefesinizi tutarak çekimin başlamasını beklersiniz.",
        commonMistake: "Dekanşör tuşuna sertçe basıp fotoğrafın ilk 0.5 saniyesinde el titremesi bulanıklığı yaratmak."
      },
      {
        title: "5. Adım: Tripod Algılama ve 30 Saniye Maksimum Pozlama",
        description: "iPhone'larda gece modunu açıp süreyi 'Maksimum'a getirin. Telefonu bir banka veya korkuluğa kıpırdamayacak şekilde dayadığınızda süre otomatik olarak 10 saniyeden 30 saniyeye fırlar.",
        proTip: "Samsung cihazlarda Pro Mod veya Expert RAW astrofotoğrafçılık modunu açarak yıldız hareketlerini ve bulut akışını kaydedebilirsiniz.",
        commonMistake: "Telefonu havada serbest elle tutarken 10 saniyelik pozlama yapmaya çalışıp bulanık görüntü almak."
      },
      {
        title: "6. Adım: RAW / ProRAW Formatında Çekim Yapın",
        description: "Gece sahnelerinde standart JPEG sıkıştırması karanlık alanlardaki ton geçişlerini pikselleştirir. RAW formatı 12 bit renk verisi saklar.",
        proTip: "Fotoğrafı çektikten sonra ücretsiz Lightroom Mobile uygulamasında 'Highlights'ı kısıp 'Shadows'u açarak gürültüsüz detay çıkarabilirsiniz.",
        commonMistake: "JPEG formatında çekip patlayan neon ışıklarının içindeki renk bilgilerini sonsuza dek kaybetmek."
      }
    ],
    equipmentTips: [
      "Ahtapot Mini Tripod (Gorillapod): Sokak korkuluklarına, banklara veya ağaç dallarına sararak 30 saniyelik uzun pozlamalar yapmanızı sağlar.",
      "Kablo Bağlantılı Kulaklık / Bluetooth Kumanda: Telefona dokunmadan dekanşörü tetiklemek için hayati önemdedir.",
      "Powerbank: Uzun gece pozlamaları ve sensör hesaplamaları telefon bataryasını hızla tüketir."
    ],
    proChecklist: [
      "Lens mikrofiber bezle dairesel olarak silindi mi?",
      "1x ana geniş açılı kamera seçili mi?",
      "Pozlama telafisi -1.0 EV seviyesine indirildi mi?",
      "2 saniye gecikmeli çekim (Timer) açık mı?",
      "RAW / ProRAW yüksek dinamik aralık modu devrede mi?"
    ],
    realWorldCases: [
      {
        scenario: "Sokak Lambası Sarı Ampulü Çok Güçlü Patlıyor:",
        solution: "Sokak lambasını doğrudan kadraja almak yerine bir ağaç yaprağının veya bina köşesinin arkasına yarı gizleyin (Yıldız filtresi etkisi)."
      },
      {
        scenario: "Gece Portresinde Modelin Yüzü Karanlık Çıkıyor:",
        solution: "Modeli aydınlık bir kafenin vitrin camının önüne getirin. Vitrinden yansıyan yumuşak mağaza ışığı harika bir doğal stüdyo softbox'ı görevi görür."
      }
    ]
  },
  {
    id: "street",
    title: "Sokak & Aksiyon Fotoğrafçılığı",
    subtitle: "Kritik anı dondurun, sert gölgeleri ve şehir ritmini yakalayın",
    tag: "Yaratıcı Dinamizm",
    coverImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop",
    accentColor: "blue",
    difficulty: "Orta",
    duration: "6 dk okuma",
    summary: "Sokak fotoğrafçılığı şans değil, sabır ve geometri sanatıdır. Hızlı koşan bir bisikletliyi dondurmak veya sert öğle güneşinin oluşturduğu mimari gölgelerin içinden geçen bir silueti yakalamak için Pusu Tekniği (The Trap), Seri Çekim (Burst Mode) ve Bölge Odaklaması (Zone Focusing) prensiplerini kullanın.",
    recommendedSettings: {
      lens: "1x (Doğal insan gözü perspektifi) veya 2x (Fark edilmeden sokak detaylarını yakalamak için)",
      iso: "ISO 100 - 400 (Yüksek perde hızını koruyabilmek için otomatik/dengeli)",
      shutter: "1/500s - 1/2000s (Havadaki adımı ve bisiklet tekerleğini çivi gibi dondurmak için)",
      ev: "-0.3 EV ile -0.7 EV arası (Dramatik yüksek kontrast ve derin gölgeler)",
      focusMode: "Bölgeye Önceden Kilitlenmiş Odak (Zone Focusing) veya Sürekli Takip",
      lighting: "Sert sabah/ikindi güneşi, binaların oluşturduğu ışık şeritleri, grafik siluetler"
    },
    rules: [
      {
        title: "Pusu Tekniği (The Trap Technique)",
        description: "Sürekli yürüyerek an kovalamak yerine, ışık şeridinin düştüğü estetik bir duvar veya kemer bulun. Kadrajınızı kurun, odağınızı zemine kilitleyin ve çerçevenizin içine ilginç bir karakterin (şapkalı biri, koşan çocuk) girmesini sabırla bekleyin."
      },
      {
        title: "Kritik An (The Decisive Moment) ve Seri Çekim",
        description: "Henri Cartier-Bresson'un 'Kritik An' felsefesi: Adım atarken ayağın tam havada asılı kaldığı saliseyi tek tıkla yakalayamazsınız. Dekanşörü kaydırarak saniyede 10-15 kare seri çekim yapın ve mükemmel adımı seçin."
      },
      {
        title: "Yönlendirici Çizgiler (Leading Lines) ile Gözü Yönetin",
        description: "Kaldırım taşları, tramvay rayları, yaya geçidi beyaz çizgileri veya bina gölgeleri izleyicinin gözünü kadrajın köşelerinden alıp doğrudan ana süjenize götürmelidir."
      },
      {
        title: "Siluet & Negatif Alanın Grafik Gücü",
        description: "Güneşe karşı çekim yapıp pozlamayı parlak gökyüzüne göre ayarlarsanız, ön plandan geçen insan simsiyah kusursuz bir grafik siluete dönüşür. Arka plan ne kadar sade olursa siluet o kadar güçlüdür."
      },
      {
        title: "Görünmez Fotoğrafçı Olma Kuralı",
        description: "Telefonu göz hizanıza kaldırıp insanlara doğrultursanız doğal ifadelerini kaybederler. Telefonu göğüs veya bel hizanızda tutarak sanki mesaja bakıyormuş gibi dekanşöre dokunun."
      }
    ],
    steps: [
      {
        title: "1. Adım: Işık ve Geometri Sahnesini Seçin",
        description: "İki gökdelenin arasından süzülen tek bir güneş huzmesi veya renkli bir reklam panosu bulun. Kompozisyonunuzu Üçler Kuralı veya Altın Orana göre inşa edin.",
        proTip: "Öğleden sonra saat 16:00-18:00 arası oluşan uzun insan gölgeleri sokak fotoğraflarında inanılmaz grafik çizgiler yaratır.",
        commonMistake: "Işık yönünü hesaplamadan rastgele sokaklarda yürüyüp düzensiz ve karmaşık kadrajlar çekmek."
      },
      {
        title: "2. Adım: Bölge Odaklaması (Zone Focusing) Yapın",
        description: "İnsanların geçeceği noktadaki kaldırım taşına dokunun ve AE/AF'yi kilitleyin. Pozlamayı -0.5 EV düşürün.",
        proTip: "Böylece biri kadraja girdiği anda kameranın odak aramakla vakit kaybetmesini engeller, dekanşör gecikmesini sıfıra indirirsiniz.",
        commonMistake: "İnsan hızla geçerken ekrana dokunmaya çalışıp kameranın arkadaki duvara odaklanması."
      },
      {
        title: "3. Adım: Seri Çekim (Burst Mode) Mekanizmasını Tetikleyin",
        description: "iPhone'da dekanşör butonuna dokunup hızla sola kaydırın; Samsung ve Xiaomi'de dekanşörü aşağıya doğru çekip basılı tutun.",
        proTip: "Karakter ışık hüzmesine girmeden 1 saniye önce seri çekimi başlatın ve tamamen çıkana kadar parmağınızı çekmeyin.",
        commonMistake: "Tek bir tıkla şansa güvenip göz kırpma veya bacak hareketinin yarım kaldığı kareye yakalanmak."
      },
      {
        title: "4. Adım: Siyah & Beyaz Önizleme Hilesi Uygulayın",
        description: "Kamera filtresini çekim anında 'Monochrome/Siyah-Beyaz'a alın. Gözünüzü karmaşık tabela renklerinden arındırarak saf ışık, gölge ve form geometrisine odaklar.",
        proTip: "Fotoğrafı RAW formatında çekerseniz daha sonra tek tıkla orijinal renkli haline geri dönebilirsiniz.",
        commonMistake: "Arka plandaki parlak sarı bir çöp kutusu veya tabelanın sokaktaki ana süjeyi dikkat olarak yutması."
      },
      {
        title: "5. Adım: Düşük Açı (Low Angle) Perspektifini Kullanın",
        description: "Telefonunuzu ters çevirin (kamera lensi alta gelecek şekilde) ve yere 10 cm mesafede tutun. Kaldırım ve zemin devasa bir perspektif derinliği kazanır.",
        proTip: "Yürüyen insanların adımları ve su birikintisi yansımaları alt açıdan bakıldığında 2 kat daha dramatik görünür.",
        commonMistake: "Her şeyi sadece ayakta durup kendi göz hizanızdan (1.70m) çekerek sıradan bir bakış açısı sunmak."
      },
      {
        title: "6. Adım: En İyi Kareyi Seçin ve Arşivi Temizleyin",
        description: "Çekim bittikten sonra albüme girip 20 karelik seri çekimden ayağın yere en estetik bastığı tek kareyi seçin.",
        proTip: "Seçilen kareyi favorilere ekleyin ve hafızayı boşaltmak için kalan 19 gereksiz kareyi anında silin.",
        commonMistake: "Yüzlerce seri çekimi telefon hafızasında biriktirip depolama alanını doldurmak."
      }
    ],
    equipmentTips: [
      "Bilek İpi (Wrist Strap): Sokakta hızlı hareket ederken telefonun elden kayıp düşmesini engeller.",
      "Mat Ekran Koruyucu: Güneş altında ekrandaki yansımaları keserek kadrajı net görmenizi sağlar.",
      "Koyu Renk Kıyafet: Sokakta vitrin camlarına yansımanızı engeller ve süjelerin dikkatini çekmez."
    ],
    proChecklist: [
      "Seri çekim hareketi (Dekanşörü sola/aşağı kaydırma) hazır mı?",
      "Kaldırıma önceden odak kilitlendi mi?",
      "Pozlama -0.3 EV kısılıp gölgeler derinleştirildi mi?",
      "Yönlendirici çizgiler (raylar/kaldırım) süjeye doğru akıyor mu?",
      "Lens temizlendi mi?"
    ],
    realWorldCases: [
      {
        scenario: "Fotoğrafını Çektiğiniz Kişi Rahatsız Olursa:",
        solution: "Gülümseyerek telefon ekranındaki harika kompozisyonu gösterin ve 'Arkanızdaki mimari ışık o kadar güzeldi ki harika bir siluet oldunuz, isterseniz AirDrop ile göndereyim' deyin. %99 oranında teşekkür edeceklerdir."
      },
      {
        scenario: "Çok Hızlı Geçen Bisikletli Flu Çıkıyor:",
        solution: "Kamerayı tek noktada sabit tutmak yerine bisikletlinin hızına paralel olarak onunla birlikte kaydırın (Panning Tekniği). Bisikletli jilet gibi net çıkarken arka plan hız çizgileriyle akar."
      }
    ]
  },
  {
    id: "macro",
    title: "Yemek & Ürün (Makro)",
    subtitle: "Ağız sulandıran dokular, kusursuz flat-lay ve 45° stüdyo pencere ışığı",
    tag: "Detay & Doku Sanatı",
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    accentColor: "gold",
    difficulty: "Başlangıç",
    duration: "7 dk okuma",
    summary: "Bir fincan latte, gurme bir burger veya el yapımı bir takı çekerken restorandaki sarı tavan spotları fotoğrafı sarartır ve yağlı gösterir. Pencere kenarına geçerek 45 derece doğal yan ışık, beyaz peçete reflektörü, 2x telefoto ve 90° kuş bakışı (Flat-Lay) hizalamasıyla dergi ve menü standartlarına ulaşabilirsiniz.",
    recommendedSettings: {
      lens: "2x Telefoto Lens (Telefon gölgesinin tabağa düşmesini engellemek için) veya Özel Makro Modu",
      iso: "ISO 50 - 200 (Temiz pürüzsüz doku ve sıfır gren)",
      shutter: "1/125s (El titremesini önleyen sabit hız)",
      ev: "+0.3 EV ile +0.7 EV (İştah açıcı, aydınlık, temiz ve taze tonlar)",
      focusMode: "Ürünün En Dokulu Detayına (Kahve kreması, susam taneleri, çilek çekirdeği)",
      lighting: "Pencereden Gelen 45° Yan Işık, Karşı Tarafta Beyaz Peçete Reflektörü"
    },
    rules: [
      {
        title: "Pencere Işığına 45° Açı Kuralı",
        description: "Yemeği pencerenin tam karşısına değil, 45 derecelik açıyla yanına koyun. Yan ışık peynirin gözeneklerinde, etin dokusunda ve kahvenin kremasında ince gölgeler ve parıltılar yaratarak yemeğin lezzet hissini somutlaştırır."
      },
      {
        title: "Beyaz Peçete / Menü Kartı Reflektörü",
        description: "Pencerenin tam karşısına, tabağın gölgede kalan tarafına dik bir beyaz kağıt peçete veya sert beyaz bir menü kartı koyun. Bu basit hile karanlık kalan tarafı aydınlatır ve 5000 dolarlık stüdyo softbox'ı etkisi yapar."
      },
      {
        title: "Kuş Bakışı (Flat-Lay) için + Seviye Kılavuzu",
        description: "Telefonunuzu masaya paralel yukarıdan tuttuğunuzda ekranda beliren beyaz ve sarı '+' işaretlerini üst üste bindirin. İki artı üst üste gelip sarıya döndüğünde açınız kusursuz 90 derecedir."
      },
      {
        title: "Tabağın İçine 1x ile Çok Yaklaşmayın",
        description: "1x geniş açıyla tabağın 15 cm yakınına girerseniz telefon kendi gölgesini yemeğin üzerine düşürür ve tabak kenarları ovalleşir. 2x'e geçip 60 cm uzaktan çekim yapın."
      },
      {
        title: "Üçgen Kompozisyon ve Styling",
        description: "Masada tek bir tabak yerine gözün gezinmesini sağlayacak 3 öge kurgulayın: Ana yemek tabağı + bir bardak içecek + yan garnitür veya keten peçete. Bu üçgen yerleşim fotoğrafa zenginlik katar."
      }
    ],
    steps: [
      {
        title: "1. Adım: Masayı Düzenleyin ve Fazlalıkları Temizleyin",
        description: "Fotoğraf çekmeden önce masadaki buruşuk ıslak mendilleri, araba anahtarlarını ve yarım içilmiş plastik su şişelerini kadrajdan çıkarın.",
        proTip: "Çatal ve bıçağı tabağa paralel veya geometrik bir açıyla yerleştirin; görsel düzen beyne kalite sinyali verir.",
        commonMistake: "Masanın üzerindeki dikkat dağıtıcı çöpleri bırakıp yemeğin cazibesini sıfırlamak."
      },
      {
        title: "2. Adım: Açı Kararı Verin (45 Derece mi, 90 Derece Kuş Bakışı mı?)",
        description: "Katmanları olan yüksek yiyecekler (Burger, pasta, krep kulesi) için 45 derece veya göz hizası; düz ve geometrik yiyecekler (Pizza, meze tepsisi, kahvaltı sofrası) için 90 derece dik Flat-Lay seçin.",
        proTip: "Katmanlı burgeri tepeden çekerseniz sadece üst ekmeği gösterirsiniz; yere inip peynirin akışını gösterin.",
        commonMistake: "Tüm yemek türlerini ayrım yapmadan aynı açıyla çekmek."
      },
      {
        title: "3. Adım: 2x Lensi Seçerek Kendi Gölgenizi Engelleyin",
        description: "Telefonun 2x optik butonuna basın. Masadan 50-70 cm geriye çekilin. Telefonun masaya düşen gölgesi kadrajın dışına çıkar.",
        proTip: "Tabak kenarlarındaki dairesel geometri tamamen düzgün ve simetrik kalır.",
        commonMistake: "1x lenste yakınlaşıp telefonun dikdörtgen gölgesini hamburgerin üzerine düşürmek."
      },
      {
        title: "4. Adım: Tabağın Yıldız Detayına Odaklanın",
        description: "Tabağın en iştah açıcı yerine (Örn: Çileğin üzerindeki pudra şekeri veya etin üzerindeki tuz tanesi) parmağınızla dokunup odaklayın.",
        proTip: "Pozlama kaydırıcısını (güneş simgesini) hafifçe yukarı (+0.3 EV) çekin; yemek fotoğrafları aydınlıkken daha taze ve temiz algılanır.",
        commonMistake: "Arka plandaki boş bardağa odaklayıp tabağın önünü bulanık bırakmak."
      },
      {
        title: "5. Adım: Tazelik Parıltısı Hilesi (Garnitür & Yağ Dokunuşu)",
        description: "Fotoğraf çekilmeden önce yemek bekledikçe kurur. Bir çay kaşığı ucuyla sebzelerin veya etin üzerine minicik zeytinyağı damlatın.",
        proTip: "Pencere ışığı o minik yağ damlasından parıldayarak yemeğin henüz fırından yeni çıktığı hissini verir.",
        commonMistake: "Soğumuş, kurumuş ve sosu kabuk bağlamış yemeği müdahale etmeden çekmek."
      },
      {
        title: "6. Adım: Sıcak İçeceklerde Buhar Yakalama Tekniği",
        description: "Sıcak bir kahve veya çorbanın buharını yakalamak için arkaya koyu renkli bir zemin (ahşap duvar veya koyu bir ceket) denk getirin.",
        proTip: "Işık arkadan veya yandan geldiğinde beyaz buhar tanecikleri parlayarak sinematik bir kış atmosferi yaratır.",
        commonMistake: "Bembeyaz bir arka planda buhar çekmeye çalışıp buharın kaybolmasına sebep olmak."
      }
    ],
    equipmentTips: [
      "Küçük Boy Sert Beyaz Karton: Masada reflektör olarak durur, çantada yer kaplamaz.",
      "Mikrofiber Bez: Tabak kenarına damlayan sos damlalarını temizlemek için.",
      "Yemek Cımbızı / Kürdan: Detayları milimetrik yerleştirmek için profesyonel yemek stilisti aleti."
    ],
    proChecklist: [
      "Masa üzerindeki anahtar ve peçete çöpü kaldırıldı mı?",
      "Pencere ışığı tabağa 45 derece yandan mı geliyor?",
      "2x lense geçilip telefon gölgesi kadrajdan çıkarıldı mı?",
      "Flat-lay için sarı/beyaz + işaretleri üst üste oturtuldu mu?",
      "Tabağın kenarındaki sos lekeleri temizlendi mi?"
    ],
    realWorldCases: [
      {
        scenario: "Restoranın Sarı Tavan Işığı Tabağı Çok Sarı Gösteriyor:",
        solution: "Fotoğrafı çektikten sonra telefonunuzun renk sıcaklığı (White Balance / Tint) ayarını -5 tık sola (maviye) çekin. Sarı ampul etkisi anında kaybolur ve tabak doğal beyazına döner."
      },
      {
        scenario: "Kahve Bardağının Yanındaki Tabak Çok Uzakta Kalıyor:",
        solution: "Üçler Kuralını kullanarak kahveyi ön sol 1/3 noktasına, tatlı tabağını ise arka sağ 1/3 noktasına koyun. Arka tabağın hafif flulaşması harika bir derinlik katar."
      }
    ]
  },
  {
    id: "video",
    title: "Sinematik Video & Hareket",
    subtitle: "24 FPS, Ninja Walk ve Kilitli Pozlama ile Hollywood estetiği",
    tag: "Video Prodüksiyonu",
    coverImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop",
    accentColor: "red",
    difficulty: "İleri Seviye",
    duration: "9 dk okuma",
    summary: "Videolarınızın amatör görünmesinin bir numaralı sebebi kameranın otomatik pozlama ve odağı her adımda değiştirmesidir. 24 FPS sinema standardı, Kilitli AE/AF pozlaması ve dizleri kırarak yapılan 'Ninja Walk' tekniği ile binlerce liralık gimballara ihtiyaç duymadan yağ gibi akan sinematik çekimler yapabilirsiniz.",
    recommendedSettings: {
      lens: "1x Ana Kamera Lensi (En iyi optik stabilizasyon ve düşük ışık performansı)",
      iso: "Sabitlenmiş Manuel ISO 100 - 400 (Flicker / titreme önleme)",
      shutter: "180 Derece Dekanşör Kuralı (24 FPS için tam 1/48s - 1/50s)",
      ev: "-0.3 EV Sabit Kilitli (Patlayan gökyüzü bulutlarını korumak için)",
      focusMode: "Süjeye Basılı Tutularak Kesinlikle Kilitlenmiş AE/AF",
      lighting: "Sürekli yumuşak yönlü ışık, altın saat veya sinematik ters ışık"
    },
    rules: [
      {
        title: "24 FPS vs 60 FPS: Neden 60 FPS Sinematik Değildir?",
        description: "60 FPS aşırı pürüzsüzdür ancak insan beyninde 'televizyon haber bülteni veya pembe dizi' hissi uyandırır. Hollywood filmleri 100 yılı aşkın süredir 24 FPS kaydedilir. İnsan gözünün doğal hareket bulanıklığı (motion blur) 24 FPS ile eşleşir. 60 FPS'i yalnızca sonradan ağır çekim (Slow-Motion) yapacaksanız kullanın!"
      },
      {
        title: "Gimbal Etkisi Veren 'Ninja Walk' Yürüyüşü",
        description: "Yürürken topuktan parmak ucuna yumuşak adımlar atın, dizlerinizi hafifçe bükün ve dirseklerinizi gövdenize yapıştırın. Bacaklarınız amortisör görevi görerek adımlarınızın dikey sarsıntısını tamamen emer."
      },
      {
        title: "Asla Otomatik Pozlama ile Yürümeyin (Flicker Önleme)",
        description: "Yürürken kadraja giren gölgeler yüzünden ekranın birden aydınlanıp kararması profesyonelliği sıfırlar. Çekime başlamadan önce ekrana basılı tutarak AE/AF'yi kesinlikle kilitleyin."
      },
      {
        title: "Paralaks Derinliği (Ön Plan Nesnesi Kullanımı)",
        description: "Kamerayı boşlukta hareket ettirmek yerine bir duvarın, ağaç dalının veya kapı pervazının arkasından kaydırarak süjeye yönelin. Ön plandaki nesne hızla geçerken arkadaki süje yavaş hareket eder ve 3D sinematik derinlik hissi oluşur."
      },
      {
        title: "Her Çekimi En Az 6 Saniye Sabit Tutun",
        description: "Kurguda kullanabilmek için kamerayı aniden sağa sola çevirmeyin. Her hareketi tek bir yönde ve en az 6-8 saniye boyunca kararlı ve pürüzsüz şekilde sürdürün."
      }
    ],
    steps: [
      {
        title: "1. Adım: Çözünürlük ve Kare Hızını Ayarlayın",
        description: "Kamera ayarlarından 'Video Kaydı' sekmesine girin. 4K @ 24 fps seçeneğini işaretleyin.",
        proTip: "Ağır çekim (Slow-Mo) yapacağınız aksiyon sahneleri için 4K @ 60 fps'e geçin; kurguda hızı %40'a düşürdüğünüzde yağ gibi akar.",
        commonMistake: "Standart 30 FPS veya 60 FPS ile sinematik video çekmeye çalışıp yapay video oyunu hissi yaratmak."
      },
      {
        title: "2. Adım: Çekime Başlamadan Önce AE/AF'yi Kilitleyin",
        description: "Süjenizin yüzüne veya yürüyüş hattına parmağınızı basılı tutarak sarı 'AE/AF KİLİTLENDİ' kutucuğunu açın. Güneşi çok hafif aşağı indirin.",
        proTip: "Böylece yürürken kameranın sürekli odak arayarak sahneyi bulanıklaştırmasını (Focus Hunting) tamamen engellersiniz.",
        commonMistake: "Otomatik modda yürüyüp her sokak lambasında ekranın açılıp kapanan ışık titremeleri (flicker) yapması."
      },
      {
        title: "3. Adım: Ninja Walk Yürüyüş Pozisyonunu Alın",
        description: "Telefonu iki elinizle yatay olarak göğüs hizanızda sıkıca kavrayın. Dirseklerinizi kaburgalarınıza yaslayın. Dizlerinizi 20 derece bükün.",
        proTip: "Topuktan parmak ucuna yumuşakça yuvarlanarak adım atın. Gövdenizi yukarı aşağı oynatmadan tek bir yatay çizgide kayarak ilerleyin.",
        commonMistake: "Tek elle yürüyüp her adımda telefonun yukarı aşağı zıplamasına sebep olmak."
      },
      {
        title: "4. Adım: Ön Plan Geçişi (Reveal Shot) Kurgulayın",
        description: "Kamerayı bir ağacın, sütunun veya sokak lambasının tam arkasına gizleyerek kayda başlayın. Yavaşça sağa kayarak arkadaki manzarayı veya karakteri açığa çıkarın.",
        proTip: "Bu geçiş kurguda iki sahneyi birbirine görünmez şekilde bağlamak için en popüler Hollywood yöntemidir.",
        commonMistake: "Sürekli süjeyi merkezde tutup düz bir şekilde ona doğru yürümek."
      },
      {
        title: "5. Adım: Geriye Doğru Yürüme (Lead Shot)",
        description: "Karakterinizin önünde geriye doğru yumuşak adımlarla yürüyün. Karakter size doğru yürürken ortam arkasında genişleyerek akar.",
        proTip: "Arkanızda takılıp düşmemeniz için bir arkadaşınızın omuzunuzdan hafifçe yönlendirmesi harika bir güvenlik yöntemidir.",
        commonMistake: "Hızlı adımlarla koşup kameranın optik dengeleyicisini zorlayarak jöle etkisi (Jello Effect) yaratmak."
      },
      {
        title: "6. Adım: Mikrofon ve Ses Yalıtımı Hilesi",
        description: "Sinemada görsellik kadar ses de atmosferin %50'sidir. Rüzgarlı havalarda telefonun altındaki mikrofon deliğini rüzgar yönünden elinizle siper edin.",
        proTip: "Uygun fiyatlı bir yaka mikrofonu kullanmak veya rüzgar süngeri takmak profesyonellik algısını katlar.",
        commonMistake: "Görüntü 4K iken rüzgardan patlayan ve hiçbir şey duyulmayan amatör telefon mikrofonu sesiyle kayıt yapmak."
      }
    ],
    equipmentTips: [
      "Manyetik Telefon Tutacağı (Magsafe Grip): İki elle dengeli tutuş ve ağırlık merkezi için.",
      "Kablosuz Yaka Mikrofonu (Wireless Lav): Konuşmacının sesini kristal netlikte kaydetmek için.",
      "Değişken ND Filtre (Variable ND): Güneşli havada 1/50s enstantaneyi korumak için lense takılan güneş gözlüğü."
    ],
    proChecklist: [
      "Video formatı 4K @ 24 FPS olarak seçildi mi?",
      "Çekim öncesi ekrana basılı tutularak AE/AF kilitlendi mi?",
      "Dizler bükülerek Ninja Walk amortisör pozisyonu alındı mı?",
      "Telefon iki elle göğüs kafesine sabitlendi mi?",
      "Mikrofon deliği parmakla kapatılmadı mı?"
    ],
    realWorldCases: [
      {
        scenario: "Güneşli Havada 24 FPS Çekim Yaparken Hareketler Titrek Çıkıyor:",
        solution: "Telefon otomatik modda shutter'ı 1/2000s'e fırlattığı için hareket bulanıklığı kaybolur. Telefonun önüne uygun bir ND (Doğal Yoğunluk) filtresi koyarak shutter'ı 1/50s seviyesine indirin."
      },
      {
        scenario: "Yürürken Kadraj Sağa Sola Yalpalıyor:",
        solution: "Telefonu ileri doğru itmek yerine vücudunuzu belden döndürün (Gövde Panning). Ayaklarınızı sabit tutup sadece belden dönerseniz tripod gibi kusursuz dönersiniz."
      }
    ]
  }
];
