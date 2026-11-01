# Ekran Dengesi — tasarım notları

**Fiziksel dünya:** akşam 20.00, salon; şarjdaki tablet, "kapat şunu" cümlesi, buzdolabı kapağında mıknatısla asılı el yazısı aile kuralları.
**Geliş → çıkış:** tablet yüzünden her akşam kavga eden, kendini polis gibi hisseden aile → barışmış; kuralları birlikte yazan, haftaya birlikte bakan aile.
İkincil kategori admin-app-ui: ilk ekranın veri seçimi = ailenin günlük ritüeli (bugün kaç dakika, hangi türde, anlaşma tuttu mu).

## Taslaklar
**A. Buzdolabındaki aile anlaşması** — buzdolabı emayesi grisi #E8EBEC, beyaz, mürekkep #23211F; üç tür rengi: yaratıcı turuncu #B4541A, öğretici yaprak yeşili #3F7434, pasif gri-leylak #77738F (pasif = soluk). Schibsted Grotesk (ağır, net, panel okunaklılığı) + Kalam (çocuğun el yazısı, imzalar). Hero: alıntılı başlık → "Ela, bugün" paneli (türlere bölünmüş şerit, kalemler, bu akşamın önerisi) + yanında mıknatıslı anlaşma kâğıdı. Sıra: hero → üç tür → haftaya birlikte bakın → anlaşma yaz (an) → ne görülür/görülmez → baba + çocuk alıntısı → fiyat+SSS.
**B. Kum saati / trafik ışığı** — sınırlandırma metaforu; kırmızı-sarı-yeşil. Hızlı anlaşılır ama "kontrol" dili kavgayı büyütüyor.
**C. Masa oyunu jetonları** — ekran süresi jetonla ödenir; oyunsu. Çocuğa sevimli, ebeveyne çözüm gibi gelmiyor.

## Taslak puanları
- A: 4 · 5 · 5 · 4 · 5 · 4 → **27**
- B: 4 · 3 · 3 · 2 (trafik ışığı her uyarı ekranı) · 3 · 3 → 18
- C: 3 · 3 · 4 · 3 · 4 · 3 → 20
Seçim: **A**.

## Sayfa puanı — v1
1 Tanınabilirlik: 4 — kanıt: üç renkli zaman şeridi + el yazısı anlaşma kâğıdı; çocuk ekran süresi okunuyor, "aile" vurgusu kâğıttan geliyor.
2 Geliş hali:     5 — kanıt: "'Kapat şunu' demeden önce, neye baktığını görün." + ilk ekranda 2 sa 11 dk'nın türlere ayrılmış hali ve "Bu akşam" önerisi.
3 Yolculuk:       5 — kanıt: gör → ayır → haftaya birlikte bak → birlikte yaz → çocuk da aynı ekranı görür → baba ve Ela'nın sesi → fiyat.
4 Palet/doku:     4 — kanıt: tür renkleri ve emaye gri konudan; mıknatıs + kâğıt dokusu yalnız iki yerde.
5 Ses:            5 — kanıt: "Yani sayılıyor ama turuncu.", "Yemekte kimsede ekran yok (annem de!)".
6 Varsayılan:     4 — kanıt: her bölümde aynı 900 ağırlıklı başlık ölçeği; eyebrow/gradient/fade-up yok.
Toplam: **27/30**. En düşük: tanınabilirlik ve palet/doku (4).

## Revizyonlar (uygulama)
- Yaratıcı turuncusu #C9621F beyaz yazıyla 4.0:1 kontrast veriyordu → #B4541A (4.97:1).
- Anlaşma formundaki onay kutularının etiketleri sağa yaslanıyordu (space-between); düzeltildi. Mobilde başlık harf aralığı -2px → -1px.
- Çocuk alıntısında marka adı yerine "blok oyunu" kullanıldı (sayfanın geri kalanıyla tutarlı).
