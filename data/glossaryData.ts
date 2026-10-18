export interface GlossaryTerm {
  term: string;
  pronunciation?: string;
  category: "Pozlama" | "Optik" | "Format & Kalite" | "Video";
  shortDef: string;
  detailedExpl: string;
  phoneImpact: string;
  recommendedRule: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "ISO (Işık Hassasiyeti)",
    category: "Pozlama",
    shortDef: "Kamera sensörünün gelen ışığı dijital olarak ne kadar yükselttiği.",
    detailedExpl: "Düşük ISO (50-100) temiz, kristal netliğinde pürüzsüz görüntü üretir. Yüksek ISO (1600-6400) karanlıkta parlaklık sağlar ancak fotoğrafa renkli gren (kumlanma/noise) ekler.",
    phoneImpact: "Telefon sensörleri küçük olduğu için ISO 800'ün üzerine çıktığında yapay zeka aşırı yumuşatma (oil painting effect) yaparak detayları yok eder.",
    recommendedRule: "Gündüz her zaman ISO 50-100. Gece ise maksimum ISO 400-800'e izin verin, ışığı uzun pozlamayla alın."
  },
  {
    term: "Dekanşör Hızı (Shutter Speed)",
    category: "Pozlama",
    shortDef: "Sensörün ışığa ne kadar süre maruz kaldığı (perde hızı).",
    detailedExpl: "1/1000s gibi yüksek hızlar koşan bir çocuğu havada çivi gibi dondurur. 1/4s veya 2s gibi yavaş hızlar akan suyu ipeksi beyazlığa dönüştürür ancak elde titremeye yol açar.",
    phoneImpact: "Telefon otomatik modda titremeyi önlemek için shutter'ı hızlandırır ve ISO'yu yükseltir; bu da gece kumlanmasına yol açar.",
    recommendedRule: "İnsan ve sokak için en az 1/250s. Şelale veya ışık izi için 2s-5s (telefonu sabitleyin)."
  },
  {
    term: "Diyafram (Aperture / f-değeri)",
    category: "Optik",
    shortDef: "Lensin içine ışık giren deliğin büyüklüğü ve alan derinliği.",
    detailedExpl: "Küçük f-sayısı (f/1.6) devasa bir delik açar ve arka planı bulanıklaştırır (bokeh). Büyük f-sayısı (f/8) her yeri önden arkaya jilet gibi net yapar.",
    phoneImpact: "Çoğu telefonda fiziksel diyafram sabittir (f/1.6 - f/1.8). Telefonlar portre modunda çift lens derinlik haritası ve yapay zeka ile sanal diyafram oluşturur.",
    recommendedRule: "Portre modunda f/1.4 yerine f/2.8 - f/3.5 seçin; kulak kenarları ve saç telleri doğal kalsın."
  },
  {
    term: "Pozlama Telafisi (EV / Exposure Value)",
    category: "Pozlama",
    shortDef: "Fotoğrafın genel aydınlık/karanlık seviyesini manuel olarak artırma veya kısma ayarı.",
    detailedExpl: "Kamera otomatik ölçüm yaparken ortalama %18 griye ulaşmaya çalışır. Bu yüzden geceyi gündüze çevirir, karlı bembeyaz sahneleri ise kirli gri yapar.",
    phoneImpact: "Ekrandaki sarı güneş simgesidir. Güneşi aşağı kaydırmak pozlamayı -EV yapar ve renk doygunluğunu kurtarır.",
    recommendedRule: "Gece neon çekimlerinde ve gün batımında her zaman -0.7 EV ile -1.0 EV kısın."
  },
  {
    term: "RAW / ProRAW",
    category: "Format & Kalite",
    shortDef: "Sensörden gelen ham, işlenmemiş ve sıkıştırılmamış saf görüntü verisi.",
    detailedExpl: "JPEG telefonun yapay zekası tarafından keskinleştirilmiş ve sıkıştırılmıştır. RAW ise 12-14 bit renk derinliği saklar, gölgeleri ve patlayan gökyüzünü düzenleme programında kurtarmanızı sağlar.",
    phoneImpact: "Standart JPEG 3 MB iken ProRAW dosya boyutu 25-75 MB arasındadır.",
    recommendedRule: "Instagram anlık hikayeleri için JPEG; duvara asılacak veya portfolyo manzara/portreleri için RAW."
  },
  {
    term: "24 FPS (Frames Per Second)",
    category: "Video",
    shortDef: "Saniyede kaydedilen kare sayısı ve sinematik hareket hissi.",
    detailedExpl: "Sinema filmleri 100 yılı aşkın süredir 24 FPS kaydedilir. İnsan beyni 24 karede oluşan hareket bulanıklığını (motion blur) doğal ve sinematik algılar.",
    phoneImpact: "Telefonlar varsayılan olarak 30 veya 60 FPS çeker. 60 FPS canlı yayın veya haber bülteni hissi verir.",
    recommendedRule: "Hikaye anlatan sinematik videolar için 4K 24 FPS; ağır çekim aksiyon için 4K 60/120 FPS."
  }
];
