# Okuma Gözlüğü — tasarım notları

**Fiziksel dünya:** Konya Meram'da mutfak masası: dört kez katlanmış prospektüs, 7 punto, iki sütun; elektrik faturası; çekmecedeki büyüteç; gelinin "dur ben okuyayım" demesi. Fosforlu kalem ve eczacının altını çizdiği satır.
**Geliş → çıkış:** Gözlüğü olduğu halde prospektüsü okuyamayan, her seferinde birine sormaktan mahcup olan teyze (ziyaretçi kendisi) → "bağımsız: kendim okudum, kimseye sormadım."

## Taslaklar
**A — Büyüteç ve fosforlu kalem.** Palet: kâğıt beyazı #FFFFFF, mürekkep siyahı #111111, fosforlu sarı #FFE04A, bağlantı mavisi #1B4FA0, masa grisi #ECEEF1 — en yüksek kontrast, az renk. Tipografi: Atkinson Hyperlegible (az gören okur için tasarlanmış) + Noto Serif (yalnız prospektüs taklidi). Tempo: geniş, çok büyük gövde (22-28px). Doku: kâğıt, kat izi, büyüteç çerçevesi. Hareket: yalnız büyüteç. Ses: "Greyfurt yemeyin, suyunu da içmeyin." Bölümler: büyüteç + sade kart hero → evdeki kâğıtlar (fatura/menü/banka) → ilk gün üç adım (eğitim kategorisinin "ilk ders"i) → kimse bilmez → terzi Saniye Hanım → ücretsiz + SSS.
**B — Okuma dersi (eğitim).** Defter çizgisi, kalem, harf harf öğrenme; "okumayı yeniden keşfedin". Okuma yazma bilmeyenle karışıyor; teyzenin onurunu zedeler.
**C — Eczane güveni.** Yeşil artı, eczane vitrini, "ilaçlarınızı doğru kullanın". Sağlık iddiası ağır, fatura/menü dışarıda kalıyor.

| Ölçüt | A | B | C |
|---|---|---|---|
| Tanınabilirlik | 5 küçük yazı + büyüteç | 3 | 3 |
| Geliş hali | 5 | 3 | 4 |
| Yolculuk | 4 | 4 | 3 |
| Palet/doku | 4 | 3 | 2 eczane yeşili klişe |
| Ses | 5 | 3 | 4 |
| Varsayılan | 4 | 3 | 3 |
| **Toplam** | **27** | 19 | 19 |

Seçim: A; B'den yalnızca "ilk gün, üç adım" ders yapısı.

## Sayfa puanı — sayfa v1
1 Tanınabilirlik: 5 — gerçek boyda iki sütunlu prospektüs ve üstündeki büyüteç: küçük yazıyı okuma aracı olduğu anında belli.
2 Geliş hali: 5 — ilk ekran teyzenin asıl derdine cevap: "Bu ilaç ne diyor?" 27px'lik beş cümle + sesli oku; üstte yazı boyu düğmesi.
3 Yolculuk: 4 — prospektüs → diğer kâğıtlar → ilk gün → gizlilik → terzi → ücretsiz; sekmeli kâğıtlar ikinci bir etkileşim, biraz dağıtıyor.
4 Palet/doku: 4 — fosforlu sarı + siyah-beyaz kâğıdın kendisi; masa grisi genel.
5 Ses: 5 — "Bu ay elektriğe 724 lira 96 kuruş ödeyeceksiniz. Son gün: 18 Kasım Çarşamba.", "iğneye iplik geçirirdim".
6 Varsayılan: 4 — başlıktaki vurgulu kelimeler bir tell gibi okunabilir (burada fosforlu kalemin kendisi, konudan).
Toplam: 27/30. En düşük: palet/doku (4).

Revizyon: mobilde logo iki satıra kırılıyordu, küçültüldü. Mobil 390: sayfa genişliği 390, taşma yalnızca büyütecin kendi (overflow:hidden) içinde.
Kanıt anı: "Hangi ilacı kullandığınızı, ne kadar fatura ödediğinizi telefonunuzdan başka kimse bilmez." — görüntü yüklenmez, eczane kuyruğunda internetsiz okur. İlaç adı (Tansilar) uydurmadır; etkin madde ve uyarılar amlodipin prospektüslerindeki genel bilgidir.
