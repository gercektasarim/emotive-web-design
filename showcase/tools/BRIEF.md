# 100 cihaz-içi yapay zekâ uygulaması — site üretim brifi

Her uygulama için **ayrı, tek sayfalık bir tanıtım sitesi** (landing page) üretilecek.
Ortak şablon YOK. Her site, `emotive-web-design` skill'inin akışı o uygulamaya
**baştan** uygulanarak tasarlanır: konunun fiziksel dünyası, ziyaretçinin geliş hali,
hedef çıkış duygusu. İki site aynı palet, aynı font eşleşmesi, aynı hero kurgusu
ya da aynı bölüm sırasıyla çıkmamalı.

## Kaynaklar (oku)
- Skill akışı: `/Users/turkeraktas/.claude/skills/emotive-web-design/SKILL.md`
- Duygu çerçevesi: `.../references/emotion-framework.md`
- Puan kartı: `.../references/fit-scorecard.md`
- Ana kategori: `.../references/categories/technology-saas.md` (uygulama landing)
- İkincil kategori: her uygulamanın `ref2` alanındaki dosya
  (`.../references/categories/<ref2>.md`). Duygu ve doku için çoğu zaman ikincil
  kategori baskındır: kalp ritmi uygulaması bir SaaS'tan çok bir kardiyoloji
  kliniği gibi güven vermeli.
- Katalog: `showcase/apps.json` (does = ne yapar, visitor = geliş hali, exit = çıkış duygusu)

## Ortak tema (içerik, tasarım değil)
Hepsi **cihaz üzerinde çalışan yapay zekâ** ile hayatı kolaylaştıran/iyileştiren uygulamalar.
"Veri telefondan çıkmaz / internetsiz çalışır" her sitede bir **kanıt anı** olarak geçmeli,
ama her seferinde o konunun diliyle (bebek ağlaması sesi saklanmaz; şantiyede kapsama yok;
avukatın müvekkil gizliliği). Klişe "kilit ikonu + Gizliliğiniz önemli" kartı yerine.

## Akış (her uygulama için ayrı)
1. Konunun fiziksel dünyası, geliş hali → çıkış hali cümlesi.
2. **2-3 yön taslağı** (skill'deki 10 satırlık format, kısa) + puan kartıyla puanla, seç.
3. Gerçekçi Türkçe içerik: gerçekçi ekran verileri, fiyat (₺, uygunsa ücretsiz/tek seferlik),
   SSS, kullanıcı alıntısı (inandırıcı ad + şehir + rol). Lorem yok, "Şirket Adı" yok.
   Var olmayan şirket logolarıyla "bize güvenenler" şeridi yok.
4. **Kodla**: `showcase/<slug>/index.html` tek dosya, CSS gömülü, gerekirse küçük vanilla JS.
   - Harici bağımlılık yalnız Google Fonts (Türkçe karakter için `latin-ext` destekli aileler).
   - Fotoğraf yok (harici görsel URL'si yok). Hero'da **uygulamanın gerçek ekranı/çıktısı**
     HTML/CSS/SVG ile kurulur, konunun alanından inandırıcı verilerle (ör. Nabız: EKG şeridi
     ve "Salı 03:12 – 14 sn düzensiz ritim" kartı). İllüstrasyon gerekiyorsa inline SVG.
   - `<html lang="tr">`, anlamlı `<title>` ve `meta description`, mobil uyum (390px'te
     yatay kaydırma yok), görünür klavye odağı, `prefers-reduced-motion`, kontrast ≥ 4.5:1.
   - Tek bir "hatırlanacak an" (genelde canlı/sahte etkileşimli ürün demosu). Geri kalanı sessiz.
   - Footer'ın en altında küçük, sitenin kendi stiline uyan bir satır:
     `<a href="../">emotive-web-design · 100 cihaz-içi yapay zekâ örneği</a>`
   - Mağaza düğmeleri gerekiyorsa gerçek App Store/Google Play logolarını taklit etme;
     metin düğme kullan ("iPhone için indir").
5. **Gör + puanla**: `showcase/tools/shot.sh <slug>` → desktop/mobile/full PNG üretir
   (`showcase/_shots/`). Read ile görüntülere bak, planı unutmuş biri gibi puanla.
   Eşik: toplam ≥ 24/30, hiçbir ölçüt < 3. Altındaysa en düşük kadranı düzelt (≤ 2 tur),
   tutmazsa ikinci taslağa geç.
6. `showcase/<slug>/notes.md`: 2-3 taslak (kısa), taslak puanları, seçim, sayfa puan
   raporu (kart formatında), revizyonlar.
7. `showcase/<slug>/meta.json`:
   `{"slug","name","interpretation":"seçilen yorum adı","world":"fiziksel dünya, 1 cümle",
   "palette":["#hex",...4-6],"fonts":["Aile 1","Aile 2"],"score":26,"lowest":"ölçüt adı",
   "moment":"hatırlanacak an, 1 cümle"}`

## Varsayılan kokusundan kaçın (100 sitede tekrar ederse hepsi şablon olur)
- Mor-mavi gradient hero, soyut bloblar, her kartta cam/blur, "Hayatınızı devrimleştirin".
- Krem zemin + terracotta + serif; siyah zemin + asit yeşili — konu istemiyorsa.
- Her bölümde fade-up; her başlıkta tek renkli/italik kelime; "01/02/03" ve büyük harfli
  eyebrow etiketler (gerçek sıra yoksa).
- Hep Inter / hep ortalanmış hero + sağda telefon. Telefon çerçevesi şart değil:
  ürün bir saat ekranı, bir kâğıt rapor, bir kulaklık bildirimi, bir tezgâh üstü ekranı,
  bir ses dalgası olabilir — konunun nesnesi neyse.
- Aynı grup içindeki 10 uygulama arasında palet ve tipografiyi bilinçli olarak ayrıştır;
  her biri için `meta.json`'u yazmadan önce önceki uygulamalarınla karşılaştır.
