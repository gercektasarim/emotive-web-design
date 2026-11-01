---
name: emotive-web-design
description: >-
  İçeriğine duygusal olarak yakın hissettiren web sitesi tasarımı. ThemeForest'in en çok
  satan 300+ HTML şablonunun incelenmesinden çıkarılmış kategori bazlı sayfa yapıları,
  görsel dil ve duygu profilleri içerir. Kullanıcı bir web sitesi, landing page, kurumsal
  site, portfolyo, e-ticaret vitrini, restoran/otel/klinik/düğün/STK/SaaS sitesi, "site
  tasarla", "web sayfası yap", "homepage", "anasayfa", "website design" dediğinde — ya da
  bir işletme/konu için herhangi bir sayfa istediğinde — mutlaka bu skill'i kullan;
  kullanıcı "tasarım" kelimesini kullanmasa bile. Skill önce kategoriyi, kitleyi ve hedef
  duyguyu sorar, sonra o kategorinin referans dosyasına göre içeriğin dünyasını yansıtan
  bir tasarım üretir. (EN: Use for any website / landing page / homepage design request;
  asks category + audience + target feeling first, then designs for emotional fit.)
---

# Duygusal Uyumlu Web Tasarımı

Bir web sitesinin ilk işi doğru görünmek değil, **içeriğinin dünyasından gelmiş
hissettirmektir**. Bir fırının sitesi fırın gibi, bir hukuk bürosunun sitesi hukuk
bürosu gibi hissettirmeli. Bu skill, ThemeForest'teki en çok satan 300+ şablonun
kategori kategori incelenmesiyle çıkarılmış sayfa yapılarını ve görsel dilleri,
bir duygu çeviri modeliyle birleştirir.

Varsayılan "profesyonel şablon"u her konuya giydirmek, her konuyu yabancılaştırır.
Buradaki süreç bunu engellemek için önce **sorar**, sonra **kategori referansını
okur**, sonra **2-3 yön taslağı çıkarıp puanlar**, seçileni kodlar, bitmiş sayfayı
**yeniden puanlar** ve eşiğin altındaysa düzeltir. İki puanlama da aynı kartla
(`references/fit-scorecard.md`) yapılır; böylece "taslakta vaat edilen" ile
"ekranda çıkan" karşılaştırılabilir.

```
1 Sor → 2 Referans oku → 3 Taslaklar (2-3) → puanla → seç
      → 4 İçerik → 5 Kodla → 6 Gör + puanla → eşik? ─ hayır → kadranı düzelt (≤2 tur)
                                                 └ evet → teslim
```

## Akış

### 1. Sor (kısa, tek seferde)

Tasarıma başlamadan önce şu bilgileri topla. `AskUserQuestion` varsa onunla, yoksa
tek bir mesajda sor. Kullanıcı mesajında zaten verdiği cevapları **tekrar sorma**;
yalnız eksikleri sor. Hepsi yoksa bile 2 kritik olanı (kategori, hedef duygu) al.

1. **Kategori** — aşağıdaki listeden (birden fazla seçilebilir, ilki baskın):
   kurumsal/hizmet · ajans/portfolyo · teknoloji/SaaS/uygulama · e-ticaret ·
   yemek/restoran/kafe · otel/seyahat · sağlık/klinik · güzellik/spa/fitness ·
   eğitim/kurs · emlak/mimarlık/iç mimarlık · STK/bağış/dini · düğün/etkinlik ·
   eğlence/müzik/oyun/medya · kişisel/blog/CV · özel sayfa (yakında/404/tek sayfa) ·
   admin paneli/uygulama arayüzü
2. **İşletme ne yapıyor, ne satıyor?** (Bir cümle. Niş ne kadar net, tasarım o kadar
   yakın olur: "restoran" değil "Beyoğlu'nda 12 masalı ev yemekleri lokantası".)
3. **Ziyaretçi kim ve hangi halde geliyor?** (endişeli hasta, karşılaştıran CFO,
   heyecanlı çift, meraklı sanat direktörü...)
4. **Siteden çıkarken ne hissetmeli?** (tek kelime: güvende, iştahlı, ilham almış,
   sakin, heyecanlı, ait...)
5. **Eldeki malzeme** — logo/renk/font var mı, fotoğraf var mı, gerçek metin var mı?
6. **Sayfalar** — yalnız anasayfa mı, hangi alt sayfalar? Dil?

Kullanıcı "sen karar ver" derse: kategori referansındaki varsayılan duygu profilini
kullan ve ilk teslimde hangi varsayımı yaptığını bir satırla söyle.

### 2. Referansı oku

Kategoriye göre `references/categories/<kategori>.md` dosyasını oku. Her dosyada:
hedef duygu ve ziyaretçi hali, anasayfa bölüm sırası (ThemeForest kalıbı), görsel
dil (sıcaklık/ağırlık/tempo/doku/hareket/ses), tipik alt sayfalar, CTA'lar, görsel
türleri, kaçınılacaklar ve kategoriye özgü "hatırlanacak an" fikirleri var.

| Kategori | Dosya |
|---|---|
| Kurumsal, danışmanlık, hukuk, finans, inşaat, IT hizmet | `corporate.md` |
| Ajans, portfolyo, fotoğraf, mimarlık stüdyosu, tasarımcı | `creative-portfolio.md` |
| SaaS, yazılım, AI, uygulama landing, hosting | `technology-saas.md` |
| E-ticaret, mağaza, moda, elektronik, mobilya | `ecommerce.md` |
| Restoran, kafe, fırın, catering, gıda markası | `food-restaurant.md` |
| Otel, pansiyon, tur, seyahat acentesi | `hospitality-travel.md` |
| Klinik, hastane, diş, veteriner, psikolog | `health-medical.md` |
| Spa, kuaför, kozmetik, yoga, spor salonu | `beauty-wellness-fitness.md` |
| Okul, kurs, online eğitim, eğitmen | `education.md` |
| Emlak, gayrimenkul, mimarlık ofisi, iç mimarlık | `real-estate-architecture.md` |
| STK, bağış, cami/kilise, siyasi kampanya | `nonprofit.md` |
| Düğün, davet, doğum günü, konferans/etkinlik | `wedding-events.md` |
| Müzik, radyo, film, oyun, podcast, dergi | `entertainment-media.md` |
| Kişisel site, blog, CV/özgeçmiş, yazar | `personal-blog.md` |
| Yakında, 404, bakımda, tek sayfalık landing | `specialty-pages.md` |
| Admin panel, dashboard, uygulama arayüzü | `admin-app-ui.md` |

Niş listede yoksa en yakın iki dosyayı oku ve `references/emotion-framework.md`
ile boşluğu doldur. Araştırmanın kendisi (pazar payları, çapraz bulgular, her
kategorinin "ThemeForest varsayılanı" tablosu) `references/research-summary.md`'de;
278 öğelik ham envanter `references/inventory.md`'de — bunlar normal akışta
okunmaz, yalnız kullanıcı "sektörde ne yaygın?" diye sorduğunda ya da bir kalıbın
nereden geldiğini açıklamak gerektiğinde.

Kullanıcı sıra dışı bir duygu hedefi verdiyse (ör. "hukuk bürosu ama samimi") yine
framework'e git: kategori dosyası **yapı** için, framework **duygu** için kullanılır;
çatıştıklarında kullanıcının duygu hedefi kazanır.

### 3. Yön taslakları çıkar ve puanla (kodlamadan önce)

Tek bir plan yazıp onu savunmak yerine **2-3 farklı duygusal yorum** taslağı çıkar.
Aynı lokanta "sıcak aile mutfağı" da olabilir, "esnafın hızlı öğle durağı" da,
"39 yıllık mahalle kurumu" da; her yorum farklı palet, tempo ve bölüm sırası ister.
Üç taslağı yan yana görmek, ilk akla geleni (çoğu zaman sektör varsayılanı)
seçmekten korur.

Her taslak kısa olsun, her biri aynı 10 satırla:

- **Yorum adı** (2-4 kelime) ve **fiziksel dünya**: malzeme, ışık, tempo
- **Giriş hali → Çıkış hali**: tek cümle
- **Palet** (4-6 hex, her birinin konudaki kaynağı: "kiremit = fırının tuğlası")
- **Tipografi**: 1-2 aile, rol ve neden
- **Tempo**: geniş/orta/sıkı; hizalama
- **Doku**: fotoğraf türü, köşe, gölge, grain
- **Hareket**: tek "an" neresi
- **Ses**: ton + 2-3 örnek cümle (başlık, bir CTA, bir menü/hizmet kalemi)
- **Bölüm sırası**: kategori kalıbından başla, duygu yolculuğuna göre düzenle
- **Hatırlanacak an**: tek unsur
- **Hero eskizi**: 5-8 satırlık ASCII wireframe

Sonra üçünü `references/fit-scorecard.md` ile puanla (kanıt cümleleriyle) ve
en yükseğini seç; iki taslak yakınsa güçlü kadranlarını birleştir. Seçtiğin
taslağın en düşük ölçütünü not et: üretimde ilk dikkat edeceğin yer orası.

Kullanıcı "taslakları görmek istiyorum" dediyse ya da proje büyükse (çok sayfalı
site, marka yeniden tasarımı) üç taslağı ve puanlarını kullanıcıya göster, seçimi
ona bırak. Aksi halde seçimi kendin yap; teslimde bir satırla hangi yorumu seçtiğini
ve elenen iki yorumun adını söyle — kullanıcı "öbürü daha iyiydi" diyebilsin.

Son kontrol: "Aynı kategoride başka bir müşteri için de aynı taslağı yazar mıydım?"
Evet ise o kısım varsayılandır; konudan gelen bir karara çevir.

### 4. İçeriği gerçek yap

Gerçek metin yoksa konunun dünyasından **inandırıcı** içerik yaz: gerçekçi menü
kalemleri, hizmet adları, proje isimleri, fiyat aralıkları, ekip rolleri, konum.
"Lorem ipsum", "Company Name", "Your Tagline Here" kullanma. Metin, o işi yapan
insan gibi konuşsun (aşçı, avukat, fotoğrafçı). Yer tutucu görseller için konunun
nesnesini anlatan `alt` ve açıklayıcı başlık yaz; gerçek fotoğraf gelince neyi
değiştireceğini belirgin tut.

### 5. Üret

Oturumda `frontend-design` skill'i varsa onu da yükle: oradaki tipografi ölçeği,
"AI tasarım tell'leri" listesi ve iki geçişli (plan → eleştir → kodla) süreç bu
skill'le uyumludur; bu skill **neyi** (konuya yakınlık), o **nasıl**ı (uygulama
kalitesi) güçlendirir.

Çıktı türü oturuma göre:
- Artifact araçları ve Design tipi varsa → kullanıcı dosya istemedikçe Design/HTML
  artifact.
- Dosya istendiyse → tek `index.html` (CSS gömülü), gerekiyorsa alt sayfalar; harici
  bağımlılık yalnız Google Fonts.
- Kod tabanı varsa (Next/Vue vb.) → projenin bileşen yapısına uy.

Kalite tabanı (söylemeden sağla): mobil uyum, klavye odağı görünür, `prefers-reduced-
motion`, kontrast ≥ 4.5:1, satır uzunluğu < 80 karakter, görsellere `alt`, CSS
özgüllük çakışması yok. Tek bir yerde cesur ol; geri kalanı disiplinli tut.

### 6. Bitmiş sayfayı puanla, eşiğin altındaysa revize et

Sayfa yazıldıktan sonra teslim etme; önce **gör ve puanla**. Planı yazarken
"uygun" denen şey ekranda başka hissettirebilir; bu adım o farkı yakalamak için var.

1. **Gör**: Playwright/Chrome varsa masaüstü (1280) ve mobil (390) ekran görüntüsü
   al ve kendin bak. Yoksa HTML'i baştan, planı hatırlamadan, ilk kez gören biri
   gibi oku.
2. **Puanla**: `references/fit-scorecard.md` ile, her ölçüte kanıt cümlesi.
   `Agent` aracı varsa puanı **sayfayı yapmayan ayrı bir agent** versin — ona
   yalnız ekran görüntüsünü/HTML'i, kategori dosyasını, "giriş → çıkış hali"
   cümlesini ve puan kartını ver; tasarım gerekçelerini verme.
3. **Karşılaştır**: taslak puanı ile sayfa puanını yan yana koy. Sayfa belirgin
   düşükse yön değil uygulama kaçmıştır: en düşük ölçütün kadranını düzelt.
4. **Eşik**: toplam ≥ 24 ve hiçbir ölçüt < 3. Altındaysa revize et, yeniden puanla.
   En fazla 2 revizyon turu; hâlâ altındaysa yön yanlıştır → adım 3'teki ikinci
   taslağa geç. Bunu kullanıcıya söyle ("ilk yorum ekranda tutmadı, X yorumuna
   geçtim").
5. Son olarak `references/emotion-framework.md` bölüm 5'teki 8 soruyu hızlıca tara.

Teslimde 3-4 cümle: seçilen yorum ve elenenler, hatırlanacak an, son puan (ör.
26/30) ve en düşük ölçüt, yapılan varsayım. Kullanıcı sonraki turda duyguyu
değiştirirse (ör. "daha lüks") paleti komple değil, kadran kadran ayarla ve
neyi değiştirdiğini söyle; yeniden puanla.

## Bu skill ne değildir

- Kategori dosyalarındaki bölüm sırası bir kanun değil, sektörün alışkanlığıdır;
  ziyaretçinin yolculuğu başka sıra istiyorsa değiştir ve nedenini bil.
- "AI gibi görünmesin" tek başına hedef değildir; içeriğe yakınlık sağlandığında
  şablon hissi zaten kaybolur. Yakınlık ölçütü, kontrol listesindeki 1. sorudur.
