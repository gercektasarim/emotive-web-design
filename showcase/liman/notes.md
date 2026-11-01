# Liman — tasarım notları

**Fiziksel dünya:** M2 metrosu akşam 18:41, kalabalık vagon, tünelde sinyal yok; bilekte titreşen bileklik. Karşılığında liman: akşam suyu, fener beyazı, şamandıra turuncusu, durgun dalga çizgisi.
**Geliş → çıkış:** Metroda panik atak geçirmiş, bir daha olur diye korkan kişi → güvenli bir liman var. Ziyaretçi bu sayfaya atak sırasında da gelebilir: ilk ekran çalışan bir rehber olmalı.

## Yön taslakları

**A · Fener ve rehber** (seçildi)
- Palet: #0F3B3E liman suyu · #9CCBC3 köpük · #F7F5EF fener beyazı · #EFE7D8 rıhtım taşı · #E0602F / #B4461D şamandıra
- Tipografi: Lexend (okuma kolaylığı için tasarlanmış, panikte okunur) + Source Sans 3; büyük gövde (19px)
- Tempo: ferah, öngörülebilir, sağlık kategorisinin düzeni
- Doku: yumuşak köşe, dalga çizgisi, metro hat diyagramı
- Hareket: yalnız uyarı noktasının yavaş nabzı
- Ses: "sen", kısa cümle, korkuyu adlandırıp küçültür ("Bu his geçecek")
- Bölümler: hero (çalışan 5-4-3-2-1) → M2'de dakika dakika → tünelde sinyal yok → 14/14 her biri geçti → tanı aracı değildir + sözler → fiyat + SSS
- An: hero'daki 5-4-3-2-1 topraklanma rehberi, gerçekten kullanılabilir
```
Liman                                     [Metroda][Sinyal yokken][İndir]
Bir dahaki sefere       | ● Nabzın 128. Buradayım.          |
yalnız değilsin.        | [5][4][3][2][1]                    |
[iPhone] [Android]      | Etrafında gördüğün 5 şey.  ○○○○○    |
                        | [Bir tane gördüm]  [Baştan]         |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

**B · Klinik güven** — beyaz/teal, uzman ekibi, randevu dili; güven verir ama atak anındaki kişiye uzak.

**C · Metro haritası** — tüm site bir hat diyagramı; tanınır ama metroyu (korkunun yerini) baskın kılar, liman hissini zayıflatır.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Toplam |
|---|---|---|---|---|---|---|---|
| A Fener ve rehber | 4 | 5 | 5 | 4 | 5 | 4 | 27 |
| B Klinik güven | 3 | 3 | 4 | 2 | 4 | 3 | 19 |
| C Metro haritası | 4 | 4 | 3 | 4 | 4 | 4 | 23 |

Seçim A, C'den metro zaman çizelgesi ve hat diyagramı alındı.

## Sayfa puanı v1 (ayrı değerlendirici ajan, ekran görüntülerinden): 27/30
```
1 Tanınabilirlik: 4 — fener, dalga, petrol yeşili, 5-4-3-2-1 kartı
2 Geliş hali: 5 — hero'da çalışan rehber; mobilde başlıktan önce
3 Yolculuk: 5 — M2 zaman çizelgesi → sinyal yok → 14/14 → 112
4 Palet/doku: 4 — krem kutular ve chip'ler genel wellness
5 Ses: 5 — "Vagon dolu. Nabız 84'ten 104'e."
6 Varsayılan: 4 — iki eşit yorum kartı, koyu tablo
```

## Revizyonlar
- Palet/doku: "Son altı ay" chip'leri metro hat diyagramına döndü; her atak bir durak, süresiyle.
- Hero altına durgun su çizgisi eklendi; tanı uyarısı tam genişliğe alındı.
- Varsayılan: iki yorum kartı tek psikiyatrist alıntısına indirildi.

## Sayfa puanı v2 (aynı değerlendirici): 28/30
1 Tanınabilirlik: 4 · 2 Geliş: 5 · 3 Yolculuk: 5 · 4 Palet/doku: 5 · 5 Ses: 5 · 6 Varsayılan: 4 → 28/30. Kanıt: "durak durak" hat diyagramı metro çizgi dilini tekrar ediyor; koyu sinyal tablosu kaldı.

En düşük ölçüt: Tanınabilirlik. Eşik (≥24, hiçbir ölçüt <3) geçildi.
