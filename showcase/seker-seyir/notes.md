# Şeker Seyir — tasarım notları

**Fiziksel dünya:** gece 02:14, 8 yaşındaki Defne'nin odasında kehribar gece lambası; kolundaki yuvarlak glukoz sensörü, komodinde meyve suyu kutusu, ebeveynin başucunda titreyen telefon; 70–180 hedef bantlı glukoz eğrisi.
**Giriş → çıkış:** İki yıldır 00:00, 03:00, 05:00'e alarm kuran, tükenmiş ebeveyn → "telefon düşmeden önce bir kez çalar, sahte düşüşte susar; bu gece uyuyabilirim" diyen ebeveyn.

## Taslaklar
### A — Gece lambası (seçildi, B'nin grafiğiyle)
- Sıcak karanlık: mürdüm zemin (yatak odası, lacivert değil), tek ışık kaynağı kehribar gece lambası = uyarı rengi.
- Palet: #211823 gece odası · #2C2130 · #FFB547 gece lambası/tahmin · #6CC59A hedef aralık · #FF8A96 düşük eşiği · #F4EDE6 metin.
- Tipografi: Lexend (yorgun gözle okuma akıcılığı için tasarlanmış) + Red Hat Mono (mg/dL, saatler).
- An: "Aynı gece, iki alarm" — aynı gece eğrisinde Şeker Seyir (1 kalkış, sahte düşüş ayıklandı, 25 dk erken uyarı) ile sensörün kendi alarmı (3 kalkış) arasında geçiş.
- Sıra: hero (kilit ekranı 02:14 + tahmin bildirimi + 30 dk tahmin konisi) → aynı gece iki alarm → tahmin nasıl öğrenir → internet kesilince → ebeveyn alıntısı → fiyat (çocuklara ücretsiz) → SSS.
### B — Şeker hava durumu
- Açık zemin, hava tahmini dili ("02:10–02:40 düşüş bekleniyor"), gökyüzü mavileri. Net ama gecenin duygusunu taşımıyor.
### C — Seyir defteri
- Denizcilik seyir defteri, pusula, rota; isimle oynuyor ama tıbbi ciddiyeti zayıflatır.

| Taslak | Tanın. | Geliş | Yolculuk | Palet/doku | Ses | Varsayılan | Toplam |
|---|---|---|---|---|---|---|---|
| A (+B grafiği) | 4 | 5 | 4 | 4 | 5 | 4 | 26 |
| B | 4 | 4 | 4 | 3 | 4 | 4 | 23 |
| C | 2 | 3 | 3 | 3 | 3 | 3 | 17 |

## Sayfa puanı — v1 (ayrı değerlendirici)
1 Tanınabilirlik: 4 — hedef bantlı eğri + tahmin konisi CGM diyor; palet tek başına uyku uygulamasına da uyar
2 Geliş hali:     5 — "02:14 · Defne uyuyor, 3 metre ötede" + "Meyve suyu verdim / Bakıyorum"
3 Yolculuk:       4 — karşılaştırma kötü geceyle açılıyor; rahatlama anahtarın arkasında
4 Palet/doku:     3 — her kutu aynı yüzey; hedef bandı gri okunuyor; dekoratif ışık lekeleri
5 Ses:            5 — "19:30 makarna, 45 g, 4 ünite", "kolunun üstüne yattığı için oluşan sahte düşüşler"
6 Varsayılan:     3 — radial ışık lekeleri; sol şeritli üçlü kart; aynı köşe/kenarlık
Toplam: 24/30 (eşikte). Ayrıca: aynı id iki kez kullanıldığı için tahmin konisi görünmüyordu (düzeltildi).

## Revizyon 1 (doku kadranı + yolculuk)
- Dekoratif ışık lekeleri kaldırıldı; tek ışık bildirimin arkasındaki kehribar hale (gece ekranın yüzü aydınlatması).
- Hedef bandı yeşile döndü, 70/180 etiketleri her grafikte.
- "Nasıl öğrenir" üçlüsünde şeritler yerine gerçek parçalar: mini eğri, not çipi ("19:30 · makarna 45 g · 4 ü"), "yüzme günü → 02:00 düşüş ×5".
- Karşılaştırma Şeker Seyir haliyle açılıyor (1 kalkış), sensör alarmı ikinci sekme.
- Hero'ya bağlantı durumu satırı (Libre 3 · Bluetooth 3 m · internet yok, sorun değil); mobilde grafik yatay kaydırılır ve "şimdi"ye kaydırılmış açılır; mobil veri yolu şeması yatay; fiyatta çizgili sıfır kaldırıldı.

## Sayfa puanı — v2 (kendi kontrolüm)
1 Tanınabilirlik 4 · 2 Geliş hali 5 · 3 Yolculuk 5 · 4 Palet/doku 4 · 5 Ses 5 · 6 Varsayılan 4 → **27/30**. En düşük: tanınabilirlik / palet (4).
