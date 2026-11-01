# İzin Bekçisi — tasarım notları

**Fiziksel dünya:** Gece komodinin üstünde ters çevrilmiş telefon; durum çubuğundaki turuncu (mikrofon) ve yeşil (kamera) göstergeler; mahalle bekçisinin nöbet defteri ve resmi tutanak dili; ayarların içinde okunmaz izin adları (ACCESS_FINE_LOCATION).
**Geliş → çıkış:** "Bu uygulama beni dinliyor mu?" şüphesiyle tedirgin kişi → kimin, ne zaman, neye eriştiğini düz bir cümleyle görmüş, izni kendi eliyle daraltmış: mahremiyeti geri almış.

## Taslaklar
**A. Gece nöbet defteri** — gece #0F141C, kâğıt #E8ECF2, mikrofon turuncusu #FF9F0A, kamera yeşili #30D158, konum mavisi #5B9BFF, rehber moru #C49BFF (göstergelerin kendi renkleri veri rengi). Red Hat Display (net, kurumsal) + Red Hat Mono (kayıt/tutanak). Sıkı-orta tempo, ince çizgiler. Hero: "Dün gece mikrofonunu kim açtı?" + 22:00–07:00 dört şeritli nöbet çizelgesi; erişime dokununca resmi tutanak + "düz söylersek" + "ne yapabilirsin". Ses: "Bir not uygulamasının buna ihtiyacı yok." Sıra: kim açtı → telefonun dili / bekçinin dili → bekçinin kapısı yok (internet izni yok) → üç yol → sözler → fiyat → SSS.
**B. Telefon röntgeni** — telefonun şeffaf kesiti, içinde uygulamalar ve oklar; dikkat çekici ama "siber güvenlik" klişesi (kalkan, tarama animasyonu) ve korku dili.
**C. Sabah gazetesi** — gece olanları manşetli bir sabah bülteni gibi anlatan açık zeminli editoryal sayfa; sade dil güçlü ama "dinleniyor muyum" sorusuna veriyle cevap zayıf.

| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Toplam |
|---|---|---|---|---|---|---|---|
| A | 4 | 5 soru başlıkta, cevap çizelgede | 5 | 4 | 5 | 4 | **27** |
| B | 3 | 3 | 3 | 2 | 3 | 2 | 16 |
| C | 3 | 3 | 4 | 3 | 5 | 4 | 22 |

Seçim: **A**; C'nin "düz söylersek" sesi tutanağın sağ yarısına ve "telefonun dili / bekçinin dili" bölümüne taşındı. En düşük: tanınabilirlik (koyu + mono, her güvenlik uygulaması olabilir) ve palet.

## Sayfa puanı — v1
1 Tanınabilirlik: 4 — durum çubuğu renkleri ve tutanak izin takibini söylüyor; koyu + mono güvenlik ürünlerine de giyer
2 Geliş hali: 5 — "Dün gece mikrofonunu kim açtı?" ve ilk ekranda 02:07 mikrofon tutanağı
3 Yolculuk: 5 — şüphe → veri → anlam → güven (kapısı yok) → eylem → kanıt → fiyat
4 Palet/doku: 4 — gösterge renkleri konudan; gece laciverti beklenen
5 Ses: 5 — "Mikrofon değilmiş, konummuş. İkisini de kapattım."
6 Varsayılan: 4 — üçlü kart ("üç yol") ve iki fiyat kartı
Toplam 27. Revizyon (ses/tutarlılık): çizelgedeki erişim sayısı ile metindeki rakamlar eşitlendi (34 konum sorgusu, 6 uygulama / 40 erişim); şerit taşmasına overflow-x: clip.

**Son: 27/30**, en düşük: tanınabilirlik / palet / varsayılan (4).
Etkileşim Chrome'da denendi (Fener Foto → FAZLA, 14 Kasım 03:30). 390px: scrollWidth 390.
