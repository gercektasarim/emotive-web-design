# Sesim — tasarım notları

**Fiziksel dünya:** evde sabah saatleri: aynı sandalye, bir bardak ılık su, telefonun mikrofonu, ekrandan okunan cümleler; yanında eş. Akşamüstü ışığının mor-gri tonu, sesin sıcak dalgası.
**Geliş → çıkış:** Yeni ALS / gırtlak kanseri tanısı almış, "sesim ne olacak?" korkusuyla gelen hasta ve eşi → **"kendim kalabileceğim"**: sesi bir emanet gibi korunacak, plan belli.

## Taslaklar
**A. Sesin emanet defteri** — akşam ışığı #F4F1F6, çivit-mürdüm #2A2340, sesin safranı #B8661A (yalnız dalga), lavanta #E6E0EE. Literata (kitap okuma serifi: okunan cümleler, kişisel) + Nunito Sans (büyük, yumuşak gövde). Geniş tempo, az hareket. An: "Murat'ın sesi" oynatıcısı — cümle seç, okurken kelime kelime vurgulanır, dalga dolar. Ses: sakin "siz", korkuyu adlandıran, abartmayan. Sıra: hero (oynatıcı + danışman telefonu) → acele değil düzen (kayıt planı hesaplayıcı) → 3 adım → eş için → sesiniz kopyalanamaz (gizlilik) → raporla ücretsiz → eşin sözü → SSS (dürüst sınırlar).
```
[Sesim]                          Ses bankası danışmanı 0 850 000 07 37
Sesiniz değişmeden kaydedin.     ┌ M  Murat'ın sesi · 1.412 cümle · bu telefonda
Yazdıklarınızı yıllarca          │ (Torununa)(Doktora)(Nurten'e)
kendi sesiniz okusun.            │ Deniz, doğum günün kutlu olsun...
[Kayda bugün başlayın][Plan]     │ ▁▃▅▇▅▃▁▃▆ dalga
Tanı raporuyla ücretsiz.         └ [Murat'ın sesiyle oku]
```
**B. Klinik ses laboratuvarı** — beyaz/teal, kayıt stüdyosu, teknik grafikler, "MOS 4.3" metrikleri; güven verir ama soğuk ve korkutucu.
**C. Aile ses arşivi** — sıcak albüm, eski kasetler, nostalji; hastalığı geri plana atıyor, ama "veda" tonu riskli.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top. |
|---|---|---|---|---|---|---|---|
| A | 4 | 5 | 5 | 4 | 5 | 4 | **27** |
| B | 3 | 3 | 3 | 2 | 3 | 3 | 17 |
| C | 3 | 3 | 4 | 4 | 3 | 4 | 21 |
Seçim **A**; C'den "eski kayıtlar da işe yarar" fikri alındı. Ref2 health-medical: telefon ilk ekranda, korkuyu adlandıran SSS, tedavi vaadi yok.

## Sayfa puanı — v1
```
1 Tanınabilirlik: 4 — kanıt: dalga formu + "Murat'ın sesi · 1.412 cümle" ses/konuşma diyor; serif ve akşam tonları kişisel sağlık; metinsiz ALS'ye özgülük sınırlı
2 Geliş hali:     5 — kanıt: üstte danışman telefonu, "tanı raporuyla ücretsiz", "günde 15 dakika"
3 Yolculuk:       5 — kanıt: korku → plan → nasıl → eş → sahiplik → ücret → bir eşin sözü; gereksiz bölüm yok
4 Palet/doku:     4 — kanıt: akşam ışığı + safran ses dalgası konudan; lavanta zemin wellness sitesine de gidebilir
5 Ses:            5 — kanıt: "Acele değil, düzen gerekiyor." / "Bazı uzun kelimelerde makine tınısı duyulabilir."
6 Varsayılan:     4 — kanıt: gölgeli beyaz kart + hap düğmeler
Toplam: 27/30 → eşik geçildi. En düşük: tanınabilirlik / palet (4).
```
Küçük düzeltme: başlık 6 satırdan 4-5 satıra (max-width 20ch), durağan dalga biraz koyulaştırıldı.

## Erişilebilirlik
Oynatıcı düğmesi aç/durdur, cümle seçimi `aria-pressed`, metin `aria-live`; hesaplayıcı `<input type=range>` + `<output aria-live>`, 44px yükseklik. Gövde 19px, kontrast 13:1 / ikincil 6.4:1; safran yalnız dalga, metin bağlantıları koyu safran 5.9:1.
