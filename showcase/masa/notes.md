# Masa — tasarım notları

**Fiziksel dünya:** Akşam mutfak masası: meşe tabla, çantadan çıkan buruşuk duyuru, gezi parası zarfı, buzdolabından düşen sarı not; telefonda dört veli grubu, 47 okunmamış mesaj.
**Geliş → çıkış:** Üç çocuklu, veli gruplarında boğulan çalışan anne → her şey yerli yerinde, sakin.

## Taslaklar
### A — Mutfak masası + aile paneli (seçildi)
- Dünya: ahşap masa üstünde bir tablet gibi duran uygulama; etrafında zarf ve yapışkan not (giriş hali), içinde düzenli takvim (çıkış hali)
- Palet: #E4D3B8 masa meşesi · #F3F2EF mutfak duvarı · #1F2328 mürekkep · #D9472F Elif · #2A62C9 Kaan · #23885A Mira · #FFE58A vurgulayıcı kalem
- Tipografi: Manrope (admin arayüzü netliği, sıkı başlık) + Caveat (öğretmen notu, zarf, el yazısı)
- Tempo: sıkı, panel düzeni (admin-app-ui: gelenler → okuma → takvim); sola hizalı
- Doku: ahşap damar, kâğıt notlar yalnız hero'da; geri kalan düz panel yüzeyleri
- Hareket: "Masaya koy" → mesajdaki kim/ne zaman/ne götürecek işaretlenir, takvime kart düşer
- Ses: yorgun ama esprili anne dili: "47 okunmamış veli mesajı. Takvimde üç satır." · "Kim alıyor, kim götürüyor, artık soru değil."
- Bölümler: hero = canlı panel → 07:00 bildirimi → okuduğu üç kaynak → görev paylaşımı tablosu → gizlilik (telefonda saklanan sayaç) → alıntı + fiyat → SSS
- An: üç kaynak (mesaj, fotoğraf, sesli not) arasında geçip "Masaya koy" ile takvime satır düşürmek
```
47 okunmamış veli mesajı. Takvimde üç satır.      [iPhone][Android]
┌Gelenler─┬ Nuray Öğretmen: "12 Kasım…"  ┬ Pzt│Sal│Çar│Per│Cum ┐
│3-C (47) │ [Masaya koy]                  │ ▌  │ ▌  │ ▌  │ ←● │ ▌  │
└─────────┴───────────────────────────────┴────────────────────┘ ✉ zarf  ▢ not
```
### B — Buzdolabı kapısı
- Mıknatıslı kâğıtlar, el yazısı, renkli; sıcak ama "boğulma" halini büyütüyor, düzen hissi geç geliyor.
### C — Sakin ajanda
- Kâğıt ajanda, serif, geniş boşluk; sakinlik iyi ama ürünün ne yaptığı (mesajı ayrıştırma) görünmüyor.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top |
|---|---|---|---|---|---|---|---|
| A Masa + panel | 4 | 5 | 4 | 4 | 5 | 3 | 25 |
| B Buzdolabı kapısı | 4 | 3 | 3 | 4 | 4 | 3 | 21 |
| C Sakin ajanda | 3 | 3 | 4 | 3 | 4 | 4 | 21 |
Seçim: A. En düşük beklenen: varsayılan kokusu (panel = SaaS ekran görüntüsü).

## Sayfa puanı — v1
Palet/doku 3 (beyaz-gri SaaS zemin, "masa" yok), mobilde gizli alanlar boşluk bırakıyordu, takvim sütunları dar.
## Revizyon 1 (kadran: doku/sıcaklık)
Hero zemini meşe masa damarı oldu; panelin kenarından gezi parası zarfı ve "Mira'ya pijama!! cuma" notu taşar. Ayrıştırılacak ifadeler önceden noktalı altı çizili (ipucu); işlenince sarı vurgulanır. Gizli alanlar display:none, takvim sütunu genişletildi.

## Uyum puanı — sayfa v2
1 Tanınabilirlik: 4 — kanıt: ahşap masa, zarf, öğretmen notu ve üç renkli aile takvimi: "okul/aile organizasyonu" okunuyor.
2 Geliş hali:     5 — kanıt: ilk ekranda 47 okunmamış grup mesajı ve tek tuşla takvime dönüşü.
3 Yolculuk:       4 — kanıt: kaos → sabah tek bildirim → okuduğu kaynaklar → görev paylaşımı → gizlilik → "buzdolabındaki listeyi kaldırdık"; kaynaklar bölümü hero'yu kısmen tekrar ediyor.
4 Palet/doku:     4 — kanıt: meşe masa + kâğıt + üç çocuk rengi; hero dışı bölümler nötr.
5 Ses:            5 — kanıt: "Nuray Öğretmen", "120 TL zarf Salı'ya kadar", "Mira'ya pijama!! cuma".
6 Varsayılan:     3 — kanıt: hero sonrası bölümler beyaz kart + onay ikonlu liste; SaaS ritmine yakın.
Toplam: 25/30 → eşik geçildi. En düşük: varsayılan kokusu (3).

## Bağımsız değerlendirme (ayrı agent) — sayfa v2
Tanın. 4 · Geliş 5 · Yolculuk 4 · Palet 4 · Ses 5 · Varsayılan 3 = **25/30**, kendi puanımla aynı. Not: mobilde gelen kutusu sekmeleri kesik görünüyor, kaydırma ipucu yok.
## Revizyon 2
Mobilde gelen kutusu şeridinin sağ kenarı soluklaştırıldı (kaydırılabilir olduğu belli). Puan değişmedi: 25/30, en düşük varsayılan kokusu.
