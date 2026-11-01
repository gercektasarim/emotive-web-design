# Evin Hafızası — tasarım notları

**Fiziksel dünya:** 3+1 bir dairenin sabah 07:40'ı; mutfak tezgâhı, kanepe minderi, antredeki portmanto. Mimari kat planı, meşe mobilya, buzdolabındaki sarı yapışkan not.
**Geliş → çıkış:** Her sabah anahtar, gözlük, kumanda arayan, birbirine söylenen kalabalık aile → zaman kazanmış, gülümseyen.

## Taslaklar
### A — Kat planı (seçildi)
- Dünya: mimari çizim kâğıdı, grafit duvar çizgisi, meşe mobilya, kırmızı harita iğnesi
- Palet: #F6F6F3 çizim kâğıdı · #232528 grafit · #B57D45 meşe · #EBDCCB meşe açık · #F4D35E yapışkan not · #D8452E iğne
- Tipografi: Bricolage Grotesque (iri, sıcak grotesk; aile sesi) + JetBrains Mono (plan etiketleri, defter satırları)
- Tempo: geniş başlık, sıkı plan; sol hizalı; Doku: ince ızgara, düz yüzey, gölge yok denecek kadar az
- Hareket: yalnız iğnenin odaya zıplaması + nabız halkası
- Ses: esprili, aile içi "sen": "Anahtar nerede?" · "Yarın sabah kimse aramasın." · "Kumanda kanepe minderinin altına kaydı, 21:58."
- Bölümler: hero = arama + kat planı → sabah 07:40 (dört kişi dört soru) → defter (kanıt: görüntü değil satır) → kurulum (gerçek sıra) → buzdolabı notu + alıntı → fiyat → SSS → kapanış
- An: eşya çiplerine basınca iğne kat planında o odaya gider, oda boyanır, kamera karesi ve "kim/yer/sonra" değişir
```
Anahtar nerede?                 [iPhone] [Android]
┌[🔍 Ne arıyorsunuz? (Anahtar)(Gözlük)(Kumanda)…]──┐
│ ┌SALON──┬MUTFAK●┬YATAK┐ │ Anahtarı en son      │
│ │ ▭▭▭   │ ▙▄▄   │ ▭   │ │ mutfak tezgâhında…   │
│ └BALKON─┴ANTRE──┴ÇOCUK┘ │ [kamera karesi]      │
```
### B — Aile panosu (mantar pano)
- Mantar pano, iğneli notlar, el yazısı; samimi ama dağınık — "dağınıklığı çözen ürün" dağınık görünür.
### C — Ev müzesi / arşiv
- Müze etiketi gibi eşya kartları ("Anahtar, 2019, mutfak tezgâhı"); zekice ama "zaman kazanma" aciliyetine yavaş.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top |
|---|---|---|---|---|---|---|---|
| A Kat planı | 5 | 5 | 4 | 4 | 5 | 4 | 27 |
| B Aile panosu | 3 | 3 | 4 | 3 | 5 | 3 | 21 |
| C Ev müzesi | 3 | 3 | 3 | 4 | 4 | 4 | 21 |
Seçim: A (ikincil kategori real-estate-architecture: kat planı ve "veri şeffaflığı"). En düşük beklenen: palet (çizim kâğıdı nötr kalabilir).

## Sayfa puanı — v1
Mobil ilk ölçüm hatalı çıktı (ekran görüntüsü aracının pencere genişliği); 390px iframe ile yeniden ölçüldü, taşma 0.

## Uyum puanı — sayfa v1
1 Tanınabilirlik: 5 — kanıt: kat planı + kamera görüş üçgenleri + kırmızı iğne; metinsiz bile "evde bir şeyin yerini gösteriyor".
2 Geliş hali:     5 — kanıt: ilk ekran sorunun kendisi "Anahtar nerede?" ve cevabı (mutfak tezgâhı, 18:42) planda.
3 Yolculuk:       4 — kanıt: arama → sabah telaşının çözülmesi (11 dk) → defter kanıtı → kurulum → gülen aile alıntısı; fiyatın üç kademesi biraz uzun.
4 Palet/doku:     4 — kanıt: grafit plan çizgisi, meşe mobilya, sarı yapışkan not konudan; çizim kâğıdı zemini başka mimari ürüne de uyar.
5 Ses:            5 — kanıt: "Kumanda kanepe minderinin altına kaydı, 21:58", "Hüseyin dede", "üç kuşak, beş kişi, bir anahtarlık".
6 Varsayılan:     4 — kanıt: kurulum bölümü üç eşit kart (ama gerçek sıra); gradient/eyebrow/fade-up yok.
Toplam: 27/30 → eşik geçildi. En düşük: yolculuk/palet/varsayılan (4).

## Bağımsız değerlendirme (ayrı agent) — sayfa v1
Tanın. 4 · Geliş 5 · Yolculuk 4 · Palet 4 · Ses 5 · Varsayılan 4 = **26/30**. Not: mobilde kat planı çok küçülüyor (etiketler okunmuyor); "gülümseyen" çıkış hali sabah sahnesinde kapanmıyor.

## Revizyon 1
- Mobilde kat planı 640px genişlikte, yatay kaydırılabilir kutuda; seçilen eşyanın iğnesine otomatik kaydırılır ("← planı kaydırın →" ipucu).
- Sabah bölümüne kapanış: "07:55. Herkes kapıda, anahtar Kerem'in cebinde… Servis korna çalmadan."
Sayfa v2 tahmini: 27/30 (yolculuk 4→5, palet 4). En düşük: palet/doku (4).
