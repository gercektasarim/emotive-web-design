# Hece — tasarım notları

**Fiziksel dünya:** akşam 20.30, mutfak masası, kılavuz çizgili birinci sınıf defteri ve okuma kitabı; kırmızı kenar çizgisi, kurşun kalem, yıldız çıkartması.
**Geliş → çıkış:** sabrı tükenmiş, "yine mi yanlış" demekten yorulmuş ebeveyn → çocuğunun okuduğunu duyup gurur duyan ebeveyn.

## Taslaklar
**A. Kılavuz çizgili defter** — kâğıt beyazı #FBFBF7, kılavuz mavisi #9DB8DE, mürekkep mavisi #2B5DA6, kenar kırmızısı #C3343C, grafit #2C2C31, yıldız sarısı #E9B524. Andika (ilk okuma için tasarlanmış, a/ı/l ayrımı net) tek aile. Orta tempo, sola hizalı. Doku: defter çizgileri, delikler. Hareket: yalnız okuma demosu. Ses: "siz", sakin, ebeveyni suçlamayan. Sıra: hero+defter demo → bir okuma akşamı (saatler) → ses grupları → haftalık karne → ses kaydı kanıtı → veli alıntısı → fiyat → SSS.
Hero: `[H1 O okusun, Hece sabırla dinlesin | lead + 2 düğme] / [tam genişlik defter: cümle, heceler, balon, yıldız]`
**B. Masa lambası** — koyu lacivert oda, sarı lamba ışığı halkası, kitap; sıcak, sakin. Hero: lamba altında açık kitap.
**C. Okuma karnesi** — gurur odaklı; karne/yıldız çizelgesi hero, haftalık ilerleme önde.

## Taslak puanları
- A: 1 Tanın. 5 (çizgili defter = ilk okuma) · 2 Geliş 4 · 3 Yolculuk 4 · 4 Palet 5 · 5 Ses 5 · 6 Varsayılan 4 → **27**
- B: 3 (her "akşam" uygulaması olabilir) · 4 · 4 · 3 · 4 · 3 → 21
- C: 4 · 3 (sabırsızlığa cevap geç geliyor) · 3 · 4 · 4 · 4 → 22
Seçim: **A**; C'nin karnesi yolculuğun gurur adımı olarak eklendi.

## Sayfa puanı — v1 (ekran görüntüsünden)
1 Tanınabilirlik: 5 — kanıt: kılavuz çizgili defter, kırmızı kenar çizgisi, heceye ayrılmış "ha va lan dı"; metinsiz de ilk okuma.
2 Geliş hali:     4 — kanıt: başlık doğrudan sabır sorununa cevap; demo ilk ekranda. Fiyat/"kızmadan" kanıtı ikinci ekranda.
3 Yolculuk:       4 — kanıt: akşam saatleri (eskiden/şimdi) → yöntem → karne (gurur) → gizlilik → alıntı → fiyat; ses grupları bölümü biraz teknik.
4 Palet/doku:     4 — kanıt: defter mavisi/kırmızısı konudan; koyu gizlilik bandı defterden kopuyor ama fiş satırı defter çizgili.
5 Ses:            5 — kanıt: "Saat 20.30. Kitap açık, sabır az.", "Eskiden: 'Bunu dün de okumuştuk!'", 449 ₺ tek seferlik.
6 Varsayılan:     4 — kanıt: iki sütunlu hero + dolu/boş düğme çifti tek kalıp; eyebrow, gradient, fade-up yok.
Toplam: **26/30** → eşik geçildi. En düşük: geliş hali (4).

## Revizyonlar
- v1 → v1.1 (uygulama hatası, kadran değil): `.hero` kısayol padding'i `.wrap` iç boşluğunu sıfırlıyordu; mobilde metin kenara yapışıyordu. Defter başlığı mobilde iki satıra kırılınca mikrofon etiketi metnin üstüne biniyordu; satır yüksekliği kılavuz çizgisine bağlandı.
- Not: `tools/shot.sh` eşzamanlı Chrome oturumlarında ve headless pencerenin 390px altına inmemesi nedeniyle mobil görüntüyü ~485px genişlikte çiziyor; mobil kontrol 390px iframe ile yapıldı (taşma: yok).
