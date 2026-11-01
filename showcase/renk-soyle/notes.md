# Renk Söyle — tasarım notları

**Fiziksel dünya:** elektrik panosu (RAL 7035 açık gri gövde), buat kutusunda kahverengi/mavi/sarı-yeşil/siyah kablolar, ölçü aletinin yeşilimsi LCD ekranı, turuncu-siyah tehlike şeridi; bir de sabah dolap önü.
**Geliş → çıkış:** Kıyafet seçerken eşine, kabloyu bağlarken çırağına soran renk körü elektrikçi → **emin**: sormadan, ölçü aleti kesinliğinde.

## Taslaklar
**A. Ölçü aleti** — pano grisi #E3E4E0, etiket siyahı #111214, LCD #B9C3A3/#1E2416, tehlike turuncusu #F26B1D (yalnız zemin/halka). IBM Plex Sans Condensed (teknik etiket, dar) + IBM Plex Mono (okuma ekranı). Sıkı, kare köşeler, 2-3px siyah çerçeve. An: vizör — sahne seç (buat/pazar/gömlek), hedef seç, halka kayar, LCD'de ad + anlamı + güven; "Döteranop gözüyle gör" filtresiyle aynı sahnenin onun gözündeki hali. Ses: usta dili, "sen", kısa. Sıra (ref2 specialty tek sayfa landing): hero tek vaat + tek CTA → karıştırılan çiftler (sorun) → üç mod (çözüm) → şantiyede internetsiz + doğruluk tablosu (kanıt) → teklif → söz → SSS → tekrar CTA. Nav yok, yalnız fiyat düğmesi.
```
[⊕ Renk Söyle RS-1]                                   [149 ₺ · indir]
Kameranı tut.                ┌[Buat kutusu][Pazar][Gömlekler]─────┐
Rengin adını söylesin.       │ ⌜  kablolar  ⊕(halka)          ⌝  │
Kahverengi mi yeşil mi...    │[Sol kablo][İkinci][Üçüncü][Sağ]   │
[iPhone ya da Android]       │ LCD: KAHVERENGİ · faz (L1) · %96   │
                             └[Döteranop gözüyle gör]────────────┘
```
**B. Gardırop asistanı** — moda/yaşam tarzı, yumuşak tonlar, kıyafet kombin dili; elektrikçinin dünyasını kaçırır.
**C. Renk bilimi** — CIE diyagramı, spektrum gradyanları, bilimsel ton; gökkuşağı paleti renk körüne hitap etmiyor, klişe.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top. |
|---|---|---|---|---|---|---|---|
| A | 5 | 5 | 4 | 5 | 5 | 4 | **28** |
| B | 3 | 3 | 3 | 3 | 3 | 3 | 18 |
| C | 3 | 3 | 3 | 2 | 3 | 2 | 16 |
Seçim **A**; B'den gömlek sahnesi ve Kıyasla modu alındı.

## Sayfa puanı — v1
```
1 Tanınabilirlik: 5 — kanıt: vizör köşeleri + kablolar + LCD okuma ekranı: "renk tanıma aracı, teknik kullanıcı" metinsiz okunur
2 Geliş hali:     5 — kanıt: ilk ekranda kablonun adı ve anlamı ("faz (L1)"), tek fiyatlı CTA
3 Yolculuk:       4 — kanıt: sorun → çözüm → kanıt → teklif tek sayfa landing kalıbında; mod kartları biraz katalog gibi
4 Palet/doku:     5 — kanıt: pano grisi, LCD yeşili, tehlike şeridi — elektrikçinin malzemesi
5 Ses:            5 — kanıt: "Renge değil ölçü aletine güven, gerilimi her zaman ölç." / çırak alıntısı
6 Varsayılan:     4 — kanıt: iki kez üçlü eşit kart satırı
Toplam: 28/30 → eşik geçildi. En düşük: yolculuk / varsayılan (4).
```
## Erişilebilirlik
Site renk körü kullanıcı için: hiçbir bilgi yalnız renkle verilmez (her renk etiketli, seçili hedef turuncu çerçeve + `aria-pressed`). LCD `aria-live`. Odak: siyah 4px + turuncu halka (iki zeminde de görünür). Kontrast 14.7:1, LCD 10:1, 48-58px hedefler. Simülasyon SVG feColorMatrix ile.
