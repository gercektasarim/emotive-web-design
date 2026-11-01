# Araştırma Özeti: ThemeForest Site Templates (Kasım 2026)

Kategori dosyalarının dayandığı bulgular. Taranan: 12 alt kategorinin "popular"
listeleri (~130 öğe) + satış sıralı kategori listeleri (278 tekil öğe, `inventory.md`)
+ ~55 şablonun detay sayfası (içerik, bölüm listesi, demo adları, font, kütüphane).
Toplam 400+ öğe envanter, 55 derin inceleme.

## Pazarın şekli
| Alt kategori | Pay (satış sıralı örneklem) | Not |
|---|---|---|
| Admin Templates | ~21% öğe, ~41% satış hacmi | Metronic 120K, Vuexy 31K, Fuse 26K; en pahalı segment ($24-49) |
| Corporate | ~21% | Canvas 74K, Porto 54K, BeTheme 17K, Crafto 6.6K çok amaçlı; gerisi tek dikey |
| Creative | ~18% | Portfolio + Creative; GSAP/Lenis yeni standart |
| Retail | ~17% | Shopping, Travel (12), Health & Beauty (8), Food, Fashion, Children |
| Technology | ~15% | SaaS 17, Hosting 9, AI 7-9 başlık; Antler 4.3K, TheSaaS 4.9K |
| Specialty, Personal, Mobile, Entertainment, Nonprofit, Wedding | küçük | Coming-soon sayfaları (Gravity/PHLY ~5K) sürpriz büyük |

Başlık anahtar kelime sıklığı (278 öğe): admin/dashboard 67 · multipurpose 38 ·
ecommerce/shop 27 · one page/parallax 25 · portfolio 22 · creative 18 · SaaS 17 ·
agency 16 · landing 13 · travel/hotel 12 · hosting 9 · real estate 8 · startup 8 ·
AI 7 · directory 6 · car/auto 6 · education 5 · architecture/interior 5 ·
photography 5 · medical 3 · construction 3 · restaurant/food 3.

## Çapraz kategori bulgular (skill'in dayandığı 7 gözlem)

1. **Yazar aileleri yapıyı kategoriden daha çok belirler.** Theme-Junction
   (Bexon/Tekmino), AwaikenThemes (Dermix/Plantiva/Dispnsary/Avenix/Greenx/Museon),
   kwst (Zonar/Terris), themesflat (Amerce/Modave/Rosaline), wpoceans aynı iskeleti
   dikeyler arasında yeniden boyar. Dikey "skin"i palet, görsel ve bölüm etiketi
   değiştirir; düzeni değiştirmez. → **Şablon hissinin kaynağı budur**: yapı
   konudan değil, üreticiden geliyor. Skill bunu tersine çevirir: yapı ve dil konudan.

2. **Evrensel bölüm sözlüğü**: hero, logo şeridi, hakkında+sayaç, hizmet/ürün
   ızgarası, portfolyo/galeri, süreç adımları, fiyat, ekip, yorum, SSS, blog, CTA
   bandı, iletişim/harita, bülten. Kategori kümeyi değil **vurguyu ve adlandırmayı**
   değiştirir (projeler / tedaviler / ürünler / turlar).

3. **Üç stil ekseni her kategoride tekrar eder**: (a) görsel-öncelikli vs
   tipografi-öncelikli hero; (b) açık/koyu (artık ikisi birden, toggle); (c) hareket
   katmanı: yok → scroll reveal (WOW/AOS) → GSAP+Lenis sinematik.

4. **Tipografi nişi işaret eder**: geometrik/grotesk sans (Inter, Manrope, DM Sans,
   Outfit, Poppins) = kurumsal/tech/mağaza; serif display (Cormorant, Gilda,
   Playfair) = güzellik/lüks/konaklama/düğün; devasa display sans = ajans; yuvarlak
   humanist (Nunito) + el yazısı vurgu (Caveat) = STK/çocuk; Inter = admin/fatura.

5. **Stil sözlüğü neredeyse anlamsız**: "clean, modern, unique, pixel-perfect"
   her açıklamada var. Ayırt edici olanlar ikincil sıfatlar (spiritual, nature-
   inspired, romantic, vintage, premium/bold-dark, scientific, futuristic, game-like)
   ve **imza bileşen**: bağış ilerleme çubuğu, geri sayım+RSVP, yetenek çubuğu,
   ilan filtresi, rezervasyon formu, menü sekmesi, koltuk planı, canlı oynatıcı,
   fiyat toggle, önce/sonra kaydırıcı. Skill'de her kategori dosyası imza bileşeni
   belirtir.

6. **Demo adlandırma eksenleri**: dikey (Logistics, Green Energy, Elder Care),
   persona (Freelancer, Nail Stylist, Fitness Instructor), hero mekanizması (Slider,
   Video, Parallax), numara (Home 1-15), açık/koyu, onepage/multipage, RTL.
   Persona-adlı demolar kullanıcıya sorulacak "kategori" listesinin kaynağıdır.

7. **2025-26 teknik işaretler**: Bootstrap 5 hâlâ baskın; Tailwind yükseliyor;
   HTML + React/Next ikizleri; vanilla-JS (no jQuery); RTL ve `prefers-reduced-motion`
   kontrol listesine girdi; AI/SaaS ve "AI-ready booking" en hızlı büyüyen başlıklar.

## Kategori başına "ThemeForest varsayılanı" (bilinçli sapmak için)
| Kategori | Varsayılan | Skill'in itirazı |
|---|---|---|
| Kurumsal | mavi + ikon kartlar + 4 sayaç | malzeme rengi, saha fotoğrafı, 1 kanıt bölümü |
| Ajans | siyah + devasa başlık + her yerde GSAP | tek orkestre an, iş konuşsun |
| SaaS | mor-mavi gradient + cam kart + stok dashboard | gerçek ürün ekranı, sorun→çözüm |
| E-ticaret | geri sayım + rozet + 3 promo bandı | ürün rengi, güven bilgisi, az ama büyük |
| Restoran | kiremit + krem + serif + şef stoku | mutfağın paleti, gerçek menü, saat/telefon |
| Otel | altın + merkezli + "paradise" | coğrafyanın malzemesi, tek sessiz an |
| Sağlık | mavi/teal + steteskop ikon | geliş halini karşılayan ilk ekran |
| Güzellik | taş+orkide stok, Cormorant+DM Sans | kullanılan malzeme, süre+fiyat |
| Eğitim | canlı mavi/turuncu + kep atma | takvim/kayıt dönemi, gerçek müfredat |
| STK | gülümseyen çocuk + sayaç | tek insan hikâyesi, şeffaflık |
| Düğün | toz pembe + script + çiçek | çiftin mekânının paleti, pratik bilgi |
| Kişisel | "Hi I'm" + daktilo + parçacık + yetenek % | gerçek işler, tek alışılmadık karar |
