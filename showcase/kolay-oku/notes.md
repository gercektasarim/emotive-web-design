# Kolay Oku — tasarım notları

**Fiziksel dünya:** akşam dokuzda mutfak masası: açık ders kitabı, kareli/çizgili defterin kırmızı kenar çizgisi, sarı şeffaf okuma cetveli (renkli asetat), kurşun kalem, tükenmez mavi; yanında yorgun bir anne.
**Geliş → çıkış:** Ödev okurken ağlayan disleksili ortaokullu ve annesi → **"yapabiliyorum"**: okumayı yine çocuk yapıyor, araç sadece satırı tutuyor.

## Taslaklar
**A. Defter ve okuma cetveli** — defter beyazı #FDFEFF, çizgi mavisi #BCD3EE, kenar kırmızısı #C8372D, cetvel sarısı #FFEE8C, kurşun #24262B, tükenmez #1F5FA8. Lexend (okuma akıcılığı için tasarlandı) + Andika (harf karışmasını azaltan okuma yazı tipi; sayfa metni). Orta tempo, sola hizalı. An: sayfa demosu — satır cetveli, iki renkli hece, sadeleştir, zor kelimeye dokununca sesli tanım. Ses: çocuğa "sen", veliye "siz". Sıra: hero sayfa + araç kutusu → veli (mutfak masası, 11 dk → 4 dk) → çocuğa dört alet → fotoğraf kaynakları → gizlilik (takıldığı kelime) → okul yılı ücreti → çocuk ve anne sözü → SSS.
```
[Kolay Oku]                        Veliler için · Gizlilik · Ücret · Sorular
Ödev paragrafı uzun değil. Sadece satırlar kaçıyor.
[Tablete indir, 14 gün dene]
┌Araçlar────┐ ┌|Fen Bilimleri 6 · s.14 ───────────┐
│▭ Cetvel ✓ │ │| Ge·ze·gen·ler, Gü·neş'in ...       │
│ke·di Hece │ │|███ Ay, Dünya ile Güneş arasına ███│ ← sarı cetvel
│≡ Sadeleştir│ │| ...  (altı noktalı: yörünge)      │
└↑ ↓────────┘ └───────────────────────────────────┘
```
**B. Kahraman çocuk** — canlı turuncu-mor, oyunlaştırma, rozetler, "Okuma süper gücü"; çocuğu motive eder ama anneye ciddiyet vermez, disleksiyi hafife alır.
**C. Uzman önerisi** — özel eğitim kliniği dili, lacivert + serif, araştırma alıntıları; güven var, "yapabiliyorum" hissi yok.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top. |
|---|---|---|---|---|---|---|---|
| A | 5 | 5 | 4 | 5 | 5 | 4 | **28** |
| B | 3 | 3 | 3 | 2 | 3 | 2 | 16 |
| C | 3 | 3 | 4 | 3 | 3 | 4 | 20 |
Seçim **A**; C'den RAM yönlendirmesi ve "tanı koymaz" dürüstlüğü alındı (ref2 education: takvim/okul yılı ücreti güven anı).

## Sayfa puanı — v1
```
1 Tanınabilirlik: 5 — kanıt: defter kenar çizgisi + sarı okuma cetveli + iki renkli heceler: "disleksi okuma desteği" metinsiz anlaşılır
2 Geliş hali:     5 — kanıt: ilk ekranda gerçek ders kitabı paragrafı üzerinde çalışan araçlar
3 Yolculuk:       4 — kanıt: veli → çocuk → kaynak → gizlilik → ücret iyi; "fotoğraf kaynakları" bölümü ince
4 Palet/doku:     5 — kanıt: renkler defter, cetvel asetatı ve öğretmen kaleminden
5 Ses:            5 — kanıt: "Ödev paragrafı uzun değil. Sadece satırlar kaçıyor." / "biz söz vermiyoruz, siz ölçün"
6 Varsayılan:     4 — kanıt: dört eşit kart satırı
Toplam: 28/30 → eşik geçildi. En düşük: yolculuk / varsayılan (4).
```
Revizyon: cetvel dışındaki satırlar opaklıkla soluklaştırılıyordu (kontrast ~2:1). Opaklık yerine gri #6A6F7C (5:1) ve açık hece mavisi #4A78B0 (4.6:1) kullanıldı; odak hissi korunup kontrast eşiği sağlandı.

## Erişilebilirlik
Araç düğmeleri `aria-pressed` + görünür "açık/kapalı" metni; cetvel klavyeyle Yukarı/Aşağı düğmeleriyle taşınır (yalnız fareye bağlı değil); zor kelimeler gerçek `<button>`, tanım `aria-live`. Disleksi dostu yazı tipleri, 1.75-2.05 satır aralığı, 60px araç düğmeleri.
