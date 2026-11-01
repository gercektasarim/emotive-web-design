# Hatırla Beni — tasarım notları

**Fiziksel dünya:** annenin evi: girişteki boyalı duvar, ceviz büfe, dantel örtü, pirinç kapı tokmağı ve duvardaki yaprak takvim (kırmızı rakamlı gün, altında güneş/akşam saatleri); kapıda bir fısıltı.
**Geliş → çıkış:** Annesinin kendisini tanımadığı günler başlamış, kırgın ve suçluluk içinde gelen kızı → **onurunu koruyan bir yardım** bulduğunu hisseden; annesi "hanımefendi" değil "Ayşe'ciğim" diyecek, kimse onu sınamayacak.

## Taslaklar
**A. Kapı önü fısıltısı** — duvar #E9E4DE, takvim yaprağı #F7F4F0, ceviz-mürdüm #3B2A2F, takvim kırmızısı #B3261E (yalnız tarih), pirinç #7A5C2E, dantel gölgesi #D9C3C0. Crimson Pro (eski kitap/takvim serifi, yumuşak italik fısıltı) + Figtree (büyük, sakin gövde). Geniş tempo, asimetrik: hero'da solda takvim, sağda metin. An: "Kapıyı çal" → Kapı çalındı → Yüz tanındı → fısıltı kartında "Bu kızın Ayşe. Bugün Salı." (3 farklı ziyaretçi). Ses: kızına "siz", hemşire sabrı. Sıra: hero → **söyler / asla söylemez** (onur ilkeleri, sayfanın kalbi) → aile kimin tanınacağına karar verir → ev içinde kalır (izleme değil) → set ve fiyat → kızın sözü → SSS (dürüst sınırlar, ileri evre).
```
[🚪 Hatırla Beni]                     Ailelerle konuşan danışman 0 850 000 04 28
   ┌ KASIM 2026 ┐        Kapıyı açtığında,
   │     3      │        kulağına sizin adınızı fısıldar.
   │    Salı    │        lede...
   └────────────┘        [Seti inceleyin] [Ne söyler, ne söylemez]
 (" Bu kızın Ayşe. Bugün Salı. Seni görmeye geldi. ")
 (Kapı çalındı)(Yüz tanındı)(Fısıldandı)   [Kapıyı çal]
```
**B. Bakım teknolojisi** — beyaz-mavi sağlık, "akıllı ev", sensör paneli, aileye bildirim akışı; izleme/gözetleme hissi verir, onuru zedeler.
**C. Aile albümü** — fotoğraf albümü, polaroid çerçeveler, nostalji; sıcak ama hatırlayamamanın acısını kaşıyabilir ve ürünün ne yaptığını geç söyler.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top. |
|---|---|---|---|---|---|---|---|
| A | 4 | 5 | 5 | 5 | 5 | 4 | **28** |
| B | 3 | 3 | 3 | 2 | 2 | 3 | 16 |
| C | 3 | 3 | 3 | 4 | 4 | 3 | 20 |
Seçim **A**; C'den "fısıltıyı kendi sesinizle okuyun" fikri alındı. Ref2 health-medical: danışman telefonu ilk ekranda, "tedavi değildir" açıkça, ileri evre için dürüst SSS.

## Sayfa puanı — v1
```
1 Tanınabilirlik: 4 — kanıt: yaprak takvim + fısıltı balonu "yaşlı/hafıza" diyor; demans özgülüğü metinle tamamlanıyor
2 Geliş hali:     5 — kanıt: ilk ekranda tam da kızın istediği an: annenin onu adıyla karşılaması; danışman telefonu üstte
3 Yolculuk:       5 — kanıt: an → ilkeler (onur) → aile kontrolü → mahremiyet → set → kızın sözü; her bölüm bir kaygıyı kapatıyor
4 Palet/doku:     5 — kanıt: duvar boyası, takvim kırmızısı, pirinç halka: annenin evinin eşyası
5 Ses:            5 — kanıt: "Bir yardımın onuru, ne söylemediğinde başlar." / "Yanlış bir isim söylemektense susmayı seçer."
6 Varsayılan:     4 — kanıt: aşama hapları; koyu bant + liste kalıbı diğer bölümlerle benzer
Toplam: 28/30 → eşik geçildi. En düşük: tanınabilirlik / varsayılan (4).
```
## Erişilebilirlik
Fısıltı kartı `aria-live`, "Kapıyı çal" tek düğme; aşama hapları görsel (`aria-hidden`) — durum metni zaten canlı bölgede. "Asla söylemez" maddeleri üstü çizili + başlıkla bağlamlı (yalnız çizgiye bağlı değil). Kontrast 10.7-12.3:1, ikincil 5.1:1, kırmızı tarih 6:1. 56px düğmeler, 68px SSS satırları.
