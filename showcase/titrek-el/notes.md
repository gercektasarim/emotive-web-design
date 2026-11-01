# Sakin El — tasarım notları

**Fiziksel dünya:** emekli öğretmenin masası: çizgili mektup kâğıdı, okul dolma kaleminin turkuaz mürekkebi, kırmızı düzeltme kalemi; bugünse tablet, WhatsApp ve harfleri kaçıran parmak.
**Geliş → çıkış:** Torununa mesaj yazarken harfleri kaçıran, yanlışlarından utanan emekli öğretmen → **saygın, rahat**: yazan yine o, yazım kuralı yerinde.

## Taslaklar
**A. Öğretmenin mektubu** — çizgili kâğıt #EDF2F1, turkuaz mürekkep #0F5260, metin #21242C, kurşun #3A3F4B, kırmızı kalem #B42318 (yalnız titreme dokunuşu ve hata). Alegreya (kalemle yazılmış hissi, edebî) + Alegreya Sans (büyük gövde, 21px). Geniş tempo. An: torunla sohbet ekranı + klavye — kırmızı titrek dokunuş noktaları tuşların çevresine düşer, "Sakin El" anahtarı açıkken mesaj temiz, kapalıyken dalgalı kırmızı altı çizili hatalı kelimelerle yeniden yazılır. Ses: "siz", saygılı, acıma yok. Sıra (ref2 admin-app-ui): hero demo → ayar ekranı (gerçek ayar paneli) → 3 günde elinizi tanır → gizlilik (klavye ezberlemez) + çalıştığı uygulamalar → üç seçenekli ücret → mektup kâğıdında öğretmenin notu → SSS.
```
[Sakin El]                               Ayarlar · Nasıl öğrenir · Ücret · Sorular
═══ çizgili kâğıt ═══════════════════════════════════════════════
Eliniz titreyebilir.          ┌ D  Defne · torunum
Yazdığınız titremez.          │  Babaanneciğim, kitap geldi mi?
lede...                       │           Geldi canım, çok sevindim...|
[7 gün ücretsiz] [Ayarlar]    │ [q][w][e•][r]...  (kırmızı dokunuş noktaları)
                              └ (●) Sakin El açık      Süzülen dokunuş: 35
```
**B. Sağlık cihazı** — klinik beyaz-mavi, nöroloji dili, titreme grafikleri (Hz), doktor tavsiyesi; güven verir ama "hasta" kimliğini öne koyar, saygınlık zayıf.
**C. Büyük yazı, büyük tuş** — yaşlılara yönelik basitleştirilmiş, kocaman düğmeler; öğretmenin yetkinliğini küçümseyebilir.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top. |
|---|---|---|---|---|---|---|---|
| A | 4 | 5 | 4 | 4 | 5 | 4 | **26** |
| B | 3 | 3 | 3 | 2 | 3 | 3 | 17 |
| C | 3 | 4 | 3 | 3 | 2 | 3 | 18 |
Seçim **A**; B'den "sabah ilaç saati ayarı" alındı.

## Sayfa puanı — v1
İlk renk kraliyet mavisi #1F3A8A + lila-gri kâğıttı; ekranda İşaret (#262DB8) ve Sesim (lavanta) ile aynı aileye düştü ve genel uygulama sitesi gibi duruyordu.
```
4 Palet/doku: 3 — kanıt: mavi-lila genel bir mesajlaşma uygulaması; mektup/öğretmen dünyası görünmüyor
Toplam: 25/30
```
## Sayfa puanı — v2 (palet kadranı: turkuaz okul mürekkebi + çizgili mektup kâğıdı dokusu hero'da)
```
1 Tanınabilirlik: 4 — kanıt: klavye çevresine saçılan kırmızı dokunuş noktaları "titreme/dokunma" diyor; öğretmen kimliği metinden geliyor
2 Geliş hali:     5 — kanıt: ilk ekranda torunla gerçek mesaj, aç/kapat ile farkı kendi gözüyle görüyor
3 Yolculuk:       4 — kanıt: demo → ayarlar → öğrenme → gizlilik → ücret → öğretmenin notu; uygulama listesi kısa bir mola
4 Palet/doku:     4 — kanıt: turkuaz mürekkep + çizgili kâğıt + kırmızı kalem öğretmenin dünyası; klavye yine genel
5 Ses:            5 — kanıt: "Otuz sekiz yıl çocuklara yazım kuralı öğrettim." / "Klavyeniz konuşmalarınızı ezberlemez."
6 Varsayılan:     4 — kanıt: üç sütunlu fiyat kartı, gölgeli tablet
Toplam: 26/30 → eşik geçildi. En düşük: tanınabilirlik / palet / yolculuk (4).
```
## Erişilebilirlik
Anahtar `role="switch"` + `aria-checked`; demo harf harf ekran okuyucuya okunmaz, bitince tek cümleyle duyurulur (`aria-live` gizli bölge). Kırmızı hata altı çizgisi + dalga deseniyle (renge bağlı değil). Gövde 21px, düğmeler 56-60px, SSS özetleri 72px; kontrast metin 13.6:1, mürekkep 7.8:1.
