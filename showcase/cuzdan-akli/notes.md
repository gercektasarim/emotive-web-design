# Cüzdan Aklı — tasarım notları

**Fiziksel dünya:** Telefona düşen banka SMS'leri ("Kartınızdan ... harcama yapılmıştır"), cepte buruşmuş termal market fişi, fosforlu kalem, ay sonu kira günü; gri gün ışığında sıradan bir masa. Ritüel: SMS'i görmezden gelmek, sonra ay sonunda şaşırmak.
**Geliş → çıkış:** Maaştan on gün sonra parası biten, bankaya verisini vermek istemeyen, biraz utanan genç → suçlanmadan nedeni görmüş, "kontrol bende".

## Taslaklar
**A. Termal fiş + sakin muhasebeci** — masa grisi #ECEDE9, fiş kâğıdı #FAFAF7, mürekkep #1C1E22, petrol #13605F, eksi bakiye #B5432F, fosfor #EFE06A. Schibsted Grotesk (kurumsal, net) + IBM Plex Mono (fiş/SMS). Orta tempo, düzenli ızgara, kart az. Hero: büyük cümle + SMS'lerden basılan ay fişi; tek fosforlu satır "YEMEK SİPARİŞİ ×23". An: "Ay sonunu kendin kaydır" — sipariş sayısı kaydırıcısı ve abonelik kutusu, bakiyenin sıfırlandığı gün grafikte kayar. Ses: "Market bu yılın en düşüğü; o tarafta bir sorun yok." Sıra: fiş → kaydır → sakin dil → neden banka değil (tablo) → üç adım → söz → fiyat → SSS.
**B. Ay sonu mektubu** — serif, mektup kâğıdı, "Sevgili Deniz" diye başlayan aylık rapor. Sıcak ama finansın "düzen" tonunu kaybediyor; fiş verisi göremiyor.
**C. SMS kutusu** — sohbet balonları, koyu tema, balonların renkle kategorilenmesi. Tanıdık ama sıradan fintech.

| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Toplam |
|---|---|---|---|---|---|---|---|
| A | 5 fiş+SMS | 5 neden ilk ekranda | 5 | 4 | 5 | 4 | **28** |
| B | 3 | 4 | 4 | 3 | 5 | 4 | 23 |
| C | 4 | 3 | 3 | 2 | 3 | 2 | 17 |

Seçim: **A** (B'nin suçlamayan mektup sesi A'nın yorum satırına taşındı). En düşük: palet (gri + petrol fintech'e yakın).

## Sayfa puanı — v1
1 Tanınabilirlik: 5 — SMS balonları ve dişli kenarlı termal fiş; harcama takibi olduğu bir bakışta belli
2 Geliş hali: 5 — "Maaş yattıktan on iki gün sonra hesap sıfır. Nedeni şu fişte." + fişte fosforlu neden
3 Yolculuk: 5 — neden → kendi elinle değiştir (kontrol) → sakin dil → güven → kolay başlangıç → kanıt → fiyat
4 Palet/doku: 4 — fiş ve fosfor konudan; zemin grisi + petrol başka bir fintech'e de giyer
5 Ses: 5 — "Abonelik satmıyoruz. Abonelikleri bulduruyoruz."
6 Varsayılan: 4 — karşılaştırma tablosu ve iki fiyat kartı kalıp
Toplam 28. Hata: Schibsted Grotesk ₺ işaretini eski "₤" biçiminde çiziyordu → yalnız U+20BA için sistem fontuna düşen @font-face eklendi (unicode-range). Puan değişmedi.

**Son: 28/30**, en düşük: palet/doku (4) / varsayılan (4).
390px iframe: scrollWidth 390. JS sözdizimi denetlendi; başlangıç modeli fişle tutarlı (açık 2.650 ₺, 12. gün).
