# Tamirci Cebi — tasarım notları

**Fiziksel dünya:** Ocak gecesi 23:40, mutfak balkonundaki kombi dolabı: emaye beyaz kasa, mavi LCD'de yanıp sönen F28, basınç saati, altta sarı kollu gaz vanası; dışarıda −3 °C, ev soğuyor.
**Geliş → çıkış:** Kış gecesi kombisi F28 veren, servise ulaşamayan, çaresiz ev sahibi → elinden iş gelen, "yarım usta".

## Taslaklar
### A — Gece kombi dolabı (seçildi)
- Dünya: kombi ön paneli, LCD, gaz borusunun sarısı, servis fişi
- Palet: #17202A soğuk gece · #EEEFEB kombi emayesi · #F2C230 gaz vanası sarısı · #D2452F "usta çağır" · #0F2E47 LCD · #161B20 mürekkep
- Tipografi: Overpass (otoyol/endüstri tabelası, kalın ve net) + Overpass Mono (hata kodu, fiş)
- Tempo: hero ortalı (cihaz yüzü sahnenin merkezi), geri kalanı sıkı ızgara; köşe 6px
- Doku: emaye kasa, LCD parıltısı, boru renkleri; dekor yok
- Hareket: LCD'de yanıp sönen F28; karar ibresi arıza sekmesine göre kayar (an)
- Ses: usta gibi, kısa ve dürüst: "Önce sarı vanaya bakalım." · "Usta yapar, nokta." · "Usta gelecekse doğru parçayla gelsin."
- Bölümler: hero (kombi + karar) → dört gece arızası (sekme) → kendin yap sınırı → servis fişi + fiyat aralığı → alıntı + fiyat → sorular
- An: arıza sekmesi değişince "Kendin yap ↔ Usta çağır" ibresi kayar, rozet sarıdan kırmızıya döner (priz)
```
        Ocak · 23:40 · ev 17 °C
   Kombi F28 verdi. Önce sarı vanaya bakalım.
 ┌kombi──────────┐   ┌F28 · ateşleme───────────┐
 │ [F28 ▒▒] 1,4b │   │ Gaz gelmiyor. Siz çözersiniz│
 │ ◯  (bar) RESET│   │ ▓▓▓|▓▓▓▓▓▒▒░░  ibre     │
 │ ║ ║ ▌GAZ ║ ║  │   │ 1 sarı vana 2 ocak 3 reset│
```
### B — Hırdavat kataloğu
- Alet resimleri, ürün kartları, turuncu; "tamir" diyor ama gece panikteki kişiye cevap değil, mağaza gibi.
### C — Sakin rehber
- Açık renk, yumuşak illüstrasyon, "endişelenmeyin"; güven var, ama elinden iş gelme hissi ve cihazın kendisi yok.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top |
|---|---|---|---|---|---|---|---|
| A Gece kombi dolabı | 5 | 5 | 4 | 4 | 5 | 4 | 27 |
| B Hırdavat kataloğu | 4 | 2 | 3 | 3 | 3 | 3 | 18 |
| C Sakin rehber | 2 | 4 | 4 | 2 | 4 | 3 | 19 |
Seçim: A.

## Sayfa puanı — v1 → v1.1
Arıza sekmesinde ibre yoktu (karar yalnız rozetteydi); ibre eklendi ve sekmeyle kayıyor. LCD yanıp sönme minimum opaklığı yükseltildi (ekranda soluk kalıyordu). Fiyat dönemi "Ekim 2026" yapıldı.

## Uyum puanı — sayfa v1.1
1 Tanınabilirlik: 5 — kanıt: kombi ön paneli, F28 LCD, basınç saati, sarı gaz borusu; metinsiz "kombi arızası".
2 Geliş hali:     5 — kanıt: ilk ekranda F28'in anlamı ve üç adım + gaz kokusu uyarısı (187).
3 Yolculuk:       4 — kanıt: panik → çözüm → başka arızalar → sınır → usta fişi → "yarım usta" alıntısı; fiyat bloğu araya giriyor.
4 Palet/doku:     4 — kanıt: gaz sarısı, emaye, LCD mavisi cihazdan; koyu gece zemini başka araç uygulamasına da uyar.
5 Ses:            5 — kanıt: "Kapıcı akşam sayaç bakımı için kapatmış", "Usta yapar, nokta", 35 mm kartuş ~280 ₺.
6 Varsayılan:     4 — kanıt: hero ortalı (konu gerekçeli: cihaz yüzü), kart/ikon ızgarası yok.
Toplam: 27/30 → eşik geçildi. En düşük: yolculuk / palet / varsayılan (4).

## Bağımsız değerlendirme (ayrı agent) — sayfa v1.1
Tanın. 5 · Geliş 5 · Yolculuk 5 · Palet 4 · Ses 5 · Varsayılan 3 = **27/30**. Not: ortalanmış hero ve alıntı+fiyat kalıbı. Ortalanmış hero bilinçli bırakıldı: bu 10 site içinde cihaz yüzünü sahnenin merkezine koyan tek kurgu; sola almak Enerji Bekçisi/Masa kurgusuna yaklaştırırdı.
Son puan: 27/30. En düşük: varsayılan kokusu (3).
