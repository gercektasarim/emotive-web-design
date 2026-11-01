# Bitki Doktoru — tasarım notları

**Fiziksel dünya:** Kuzey cepheli bir apartman salonu: buğulu pencere ışığı, monsteranın koyu yeşil delikli yaprağı, alttan sararan yapraklar, nemli toprak, kalorifer. Fidanlıkta saksı seçmek.
**Geliş → çıkış:** Üçüncü monsterası ölmek üzere olan, kendini "kara elli" sanan apartman bahçıvanı → yeşil elli, bitkisini okuyan.

## Taslaklar
### A — Yaprak ve reçete (seçildi)
- Dünya: monstera yaprağının kendisi (hero'nun nesnesi) + ikincil kategori food-restaurant'tan "tarif kartı" ve "menü" (nokta çizgili liste)
- Palet: #1D4A3A monstera yeşili · #B6D47C yeni yaprak · #EEF3EC pencere ışığı · #3A2A21 toprak · #D7B03F sararma · #A55A2A kurumuş kenar
- Tipografi: Bitter (tarif kartı slab'ı, sıcak ve dayanıklı) + Karla (gövde)
- Tempo: orta; büyük yaprak sağda taşar, metin solda
- Doku: tarif kartı çizgisi ve kırmızı kenar boşluğu, nokta çizgili menü listesi; fotoğraf yok, yaprak SVG
- Hareket: yalnız yaprak üstündeki belirti noktaları → teşhis kartı
- Ses: suçluluğu kaldıran, bahçıvan dili: "Monsteranız ölmüyor. Fazla seviliyor." · "Bu haftanın bakım menüsü" · "Sarı yaprak yeşile dönmez."
- Bölümler: hero (yaprak + teşhis) → reçete kartı → haftalık bakım menüsü → evin bitki listesi (menü) → toprak zeminde çevrimdışı/gizlilik → alıntı + fiyat → SSS
- An: yaprak üstündeki 1-2-3 belirtiye dokununca teşhis, güven yüzdesi ve ne yapılacağı değişir
```
Monsteranız ölmüyor.      ╭──yaprak──╮
Fazla seviliyor.          │ ③   ②    │
[iPhone] [Android]        │   ①sarı  │[Teşhis kartı %81]
```
### B — Botanik herbaryum
- Kurutulmuş yaprak, Latin adlar, kâğıt; zarif ama telaşlı "ölüyor" haline soğuk, müze gibi.
### C — Bitki kliniği
- Klinik beyaz + nane yeşili, "hasta kartı", reçete; sağlık kategorisine kayar, evin sıcaklığı yok.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top |
|---|---|---|---|---|---|---|---|
| A Yaprak ve reçete | 5 | 5 | 4 | 4 | 5 | 4 | 27 |
| B Herbaryum | 4 | 3 | 3 | 4 | 4 | 4 | 22 |
| C Bitki kliniği | 3 | 4 | 4 | 2 | 4 | 3 | 20 |
Seçim: A. Risk: yeşil palet "her bitki uygulaması" gibi okunabilir → toprak kahvesi bölümü ve sararma okrunu belirgin tut.

## Sayfa puanı — v1 → v1.1
v1'de teşhis kartı 1 numaralı belirtiyi örtüyordu, yaprak hero altında kesiliyordu; yaprak ayrı kutuya alındı, noktalar SVG koordinatına göre konumlandı, kart sağ alta taşındı; mobilde kart yaprağın altına iner. Seçili nokta beyaz yapıldı (sarı üstünde sarı görünmüyordu).

## Uyum puanı — sayfa v1.1
1 Tanınabilirlik: 5 — kanıt: dev monstera yaprağı, sararmış alt kısım, belirti noktaları; metinsiz "bitki sağlığı".
2 Geliş hali:     5 — kanıt: ilk ekranda "fazla sulama" teşhisi ve "sulamayı durdurun" cevabı; ölmek üzere olan bitkiye doğrudan yanıt.
3 Yolculuk:       4 — kanıt: teşhis → reçete → haftalık menü → tüm bitkiler (yeşil eller) → gizlilik → alıntı; bitki listesi ile haftalık menü kısmen örtüşüyor.
4 Palet/doku:     4 — kanıt: yaprak yeşili + toprak + sararma okru konudan; koyu yeşil hero bitki uygulamalarında yaygın.
5 Ses:            5 — kanıt: "Fazla seviliyor", "Toprağı kokla", "komşu çeliğini istedi", "Moda, Kadıköy · kuzey cephe".
6 Varsayılan:     4 — kanıt: haftalık takvimde 7 eşit kart (gerçek takvim); gradient/eyebrow/fade-up yok.
Toplam: 27/30 → eşik geçildi. En düşük: yolculuk / palet / varsayılan (4).

## Bağımsız değerlendirme (ayrı agent) — sayfa v1.1
Tanın. 4 · Geliş 4 · Yolculuk 4 · Palet 3 · Ses 5 · Varsayılan 3 = **23/30 → eşiğin altında.** Not: "koyu orman yeşili + serif her bitki uygulamasına giydirilebilir, apartman salonunun ışığı yok"; mobilde teşhis kartı ilk ekranın altında; iki sütunlu SSS diğer sitelerle ortak iskelet.

## Revizyon 1 (kadran: sıcaklık/doku — en düşük palet)
- Hero zemini koyu yeşilden **kuzey penceresi ışığına** çevrildi: soluk yeşilimsi beyaz, sağ üstten gelen pencere aydınlığı ve pencere kayıtlarının hafif gölgesi. Yeşil artık yalnız yaprakta ve düğmelerde.
- Yaprak yarıkları zemin rengiyle kesiliyor (yaprak pencereye karşı duruyor).
- Mobilde sıra: başlık → yaprak + teşhis kartı → açıklama ve düğmeler; teşhis ilk ekrana girdi.
- SSS iki sütunlu ızgaradan yaprak işaretli akordeona çevrildi.

## Uyum puanı — sayfa v2
1 Tanınabilirlik: 5 — kanıt: pencere ışığına karşı monstera yaprağı, sararma, belirti noktaları.
2 Geliş hali:     5 — kanıt: masaüstünde ve mobilde ilk ekranda "fazla sulama" teşhisi ve ne yapılacağı.
3 Yolculuk:       4 — kanıt: teşhis → reçete → haftalık menü → bitki listesi → toprak/gizlilik → alıntı; menü metaforu iki bölümde tekrar ediyor.
4 Palet/doku:     4 — kanıt: kuzey pencere ışığı + yaprak yeşili + toprak kahvesi + sararma okru; zemin artık salonun ışığı.
5 Ses:            5 — kanıt: değişmedi.
6 Varsayılan:     3 — kanıt: alıntı + fiyat yan yana kalıbı ve kartlı haftalık takvim duruyor.
Toplam: 26/30 → eşik geçildi. En düşük: varsayılan kokusu (3).

## Bağımsız yeniden değerlendirme (ayrı agent) — revizyon sonrası
Tanın. 5 · Geliş 5 · Yolculuk 4 · Palet 4 · Ses 5 · Varsayılan 4 = **27/30**. Not: menü metaforu takvimle örtüşüyor; mobilde indirme düğmeleri yaprağın altında.
Son puan: 27/30 (bağımsız puan esas). En düşük: Duygu yolculuğu.
