# Ev Güvende — tasarım notları

**Fiziksel dünya:** Bahçeli müstakil evin gece kapı önü: kızılötesi kameranın gri-yeşil görüntüsü, bahçe kapısının demir çubukları, duvarda yürüyen kedi, rüzgârda sallanan erik dalı, geçen arabanın farı. Sabah: sakin bir özet.
**Geliş → çıkış:** Kamerası her gece kedi için alarm veren, bildirimleri kapatmış, buluta video göndermekten çekinen ev sahibi → huzurlu, yeniden uyuyan.

## Taslaklar
### A — Sabah özeti + gece kaydı (seçildi)
- Dünya: IR gece görüntüsü + sabah sisinin açık gri-mavisi; alarm kırmızısı yalnız bir kez
- Palet: #E7ECEE sabah sisi · #1A2633 gece laciverti · #1E2422 IR karanlık · #A3ADA8 IR gri · #3D6A86 sakin mavi · #B5382A alarm
- Tipografi: IBM Plex Sans Light (sakin, ince, kurumsal güven) + IBM Plex Mono (kamera OSD, zaman damgası)
- Tempo: geniş, sakin; çizgiyle bölünmüş tablolar, kart az; köşe 2-4px
- Doku: IR görüntü gradyanı, ince çizgiler; dekor yok
- Hareket: yalnız zaman çizelgesi noktaları → kare ve karar değişir
- Ses: alçak sesli, kesin: "Dün gece 23 hareket oldu. Sizi bir kez uyandırmaya değerdi." · "Her hareket alarm değildir." · "Bahçenizin geceleri bir sunucuda izlenmez."
- Bölümler: hero (gece dökümü + IR görüntüleyici) → neden çalmadı (kural tablosu) → görüntü nerede (diyagram) → gerçekten biri gelirse (saniye saniye) → alıntı + fiyat → SSS
- An: gece zaman çizelgesinde 9 olaya dokunmak; kedi, dal, komşu, kurye, yabancı için kare + "neden çalmadı/çaldı"
```
Salı sabahı 07:12 · gece özeti      ┌BAHÇE KAPISI · IR────────┐
Dün gece 23 hareket oldu.           │   ║║║  [Tanınmayan 0.91]│
Sizi bir kez uyandırmaya değerdi.   │   ║█║                   │
kedi 9 sessiz / dal 11 / … / 1 bild.│ ● Bildirim gönderildi    │
                                    │ ·  · ·  ·   ◉  · ·       │
```
### B — Kale (siyah + kırmızı güvenlik)
- Kalkan, kilit, koyu zemin, uyarı kırmızısı; sektör klişesi ve "huzur" yerine tehdit hissi.
### C — Kedi dostu
- Sıcak, esprili, kedi illüstrasyonu ağırlıklı; ilk sorunu yakalıyor ama yabancıya karşı güven zayıf.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top |
|---|---|---|---|---|---|---|---|
| A Sabah özeti + gece kaydı | 4 | 5 | 5 | 4 | 5 | 4 | 27 |
| B Kale | 3 | 3 | 3 | 2 | 3 | 2 | 16 |
| C Kedi dostu | 3 | 4 | 3 | 3 | 4 | 3 | 20 |
Seçim: A (C'nin "Pamuk" karakteri metne taşındı).

## Sayfa puanı — v1 → v1.1
Kişi silueti kutunun altına taşıyordu (konum düzeltildi). Diyagramda "eski telefon / tablet" kutudan taşıyordu; kutu genişletildi.

## Uyum puanı — sayfa v1.1
1 Tanınabilirlik: 4 — kanıt: IR gece karesi, sınır kutusu, OSD zaman damgası: ev güvenlik kamerası; "cihazda" ayrımı metinsiz okunmaz.
2 Geliş hali:     5 — kanıt: ilk ekran hem "kedi için çalmadı" dökümü hem "görüntü evden çıkmaz".
3 Yolculuk:       5 — kanıt: gece özeti → neden çalmadı → görüntü nerede → gerçek tehlikede ne olur → "geceleri yeniden uyuyorum".
4 Palet/doku:     4 — kanıt: sabah sisi grisi + IR tonları + tek kırmızı; güvenlik sektöründe başka ürüne de uyabilir.
5 Ses:            5 — kanıt: "Pamuk", "Ahmet Bey köpeğiyle", "erik dalı", "sabahçı fırının servisi", 155.
6 Varsayılan:     4 — kanıt: kart yok denecek kadar az, çizgili tablo; tek tell: başlıkta "bir kez" kalın.
Toplam: 27/30 → eşik geçildi. En düşük: tanınabilirlik / palet / varsayılan (4).

## Bağımsız değerlendirme (ayrı agent) — sayfa v1.1
Tanın. 4 · Geliş 5 · Yolculuk 5 · Palet 3 · Ses 5 · Varsayılan 3 = **25/30**. Not: "gri-mavi + lacivert + Plex herhangi bir kurumsal güvenlik sitesi; bahçenin gece ışığı yok"; Çamaşır Kâhyası ile palet benzer (açık gri-mavi + lacivert); alıntı+fiyat ve iki sütunlu SSS diğer sitelerle ortak iskelet.

## Revizyon 1 (kadran: sıcaklık — en düşük palet)
- Bütün sayfa **gece kızılötesi tonlarına** alındı: #161B19 IR karanlığı, açık gri-yeşil metin, adaçayı IR vurgusu, alarm somonu. Tek açık bant "Gerçekten biri gelirse" bölümü: ışıklar yanar.
- Diyagram açık bir plan kâğıdı gibi koyu zeminde duruyor.
- Alıntı + fiyat yan yana kalıbı bozuldu: alıntı tek sütun, kenar çizgili; fiyat yatay şerit. SSS soru-solda / cevap-sağda tek sütun.

## Uyum puanı — sayfa v2
1 Tanınabilirlik: 4 — kanıt: bütün sayfa gece kamerası tonunda, IR kare + sınır kutusu.
2 Geliş hali:     5 — kanıt: değişmedi.
3 Yolculuk:       5 — kanıt: gece (koyu) → ışıklar yanar (gerçek tehdit, açık bant) → "geceleri yeniden uyuyorum".
4 Palet/doku:     4 — kanıt: IR gri-yeşili + tek somon alarm; Çamaşır Kâhyası'ndan ve diğer koyu sitelerden (sıcak kehribar Bebek Dili, arduvaz-sarı Tamirci Cebi) ayrışıyor.
5 Ses:            5.
6 Varsayılan:     4 — kanıt: ortak iskelet (alıntı+fiyat, iki sütun SSS) kırıldı; mono etiketler OSD olarak gerekçeli.
Toplam: 27/30. En düşük: tanınabilirlik / palet / varsayılan (4).

## Bağımsız yeniden değerlendirme (ayrı agent) — revizyon sonrası
Tanın. 5 · Geliş 5 · Yolculuk 5 · Palet 4 · Ses 5 · Varsayılan 4 = **28/30**. Not: koyu zemin + mono güvenlik sitelerinde sık; masaüstünde kamera kartının altı boş.
Son puan: 28/30 (bağımsız puan esas). En düşük: Konudan gelen palet/doku.
