# Park Nerede — tasarım notları

**Fiziksel dünya:** AVM bodrum otoparkı: ham beton sütunlar, sütuna boyanmış dev kat harfi (B2) ve sütun kodu (C14), sarı-siyah tehlike şeritleri, zemin oku boyası, flüoresan ışık; elde poşetler, çıkışta fiş.
**Geliş → çıkış:** 20 dakikadır arabasını arayan, poşetlerle yorgun ve sinirli kişi → "tek hamlede buldum".

## Taslaklar
**A. Boyalı sütun** — beton #C7C6C1 (gürültü dokusu), kat sarısı #F4C400, mürekkep #151515, kat kodları B1 yeşil #2E8B57 / B3 mavi #2B6FC2. Big Shoulders Display (otopark işaret boyası gibi sıkışık, ağır) + Public Sans (kamu tabelası nötrlüğü). Hero: başlık cevabın kendisi "Arabanız B2'de, C14 sütununun yanında" + yanında boyalı sütun. Tek sayfa landing (specialty): az bölüm, tek eylem. An: kat planında asansörden arabaya sarı rota çizilir; kat tahmini oyunu.
**B. Otopark fişi** — termal fiş kâğıdı, barkod, mono font; zekice ama ürünün işi (bulmak) değil, süre/ücret öne çıkıyor.
**C. Harita uygulaması** — beyaz zemin, mavi nokta, "Bul" düğmesi; jenerik navigasyon, bodrum katın dünyası yok.

| Ölçüt | A | B | C |
|---|---|---|---|
| Tanınabilirlik | 5 | 4 | 2 |
| Geliş hali | 5 | 3 | 4 |
| Yolculuk | 4 | 3 | 3 |
| Palet/doku | 5 | 4 | 2 |
| Ses | 4 | 4 | 3 |
| Varsayılan | 4 | 4 | 2 |
| **Toplam** | **27** | 22 | 16 |

Seçim A. B'den yalnız alıntının yanındaki otopark fişi alındı.

## Sayfa puanı — v1 (revizyon sonrası)
1 Tanınabilirlik: 5 — boyalı B2 sütunu, tehlike şeridi, beton dokusu: otopark, metinsiz de.
2 Geliş hali: 5 — başlık sorunun cevabı; altında gerçek bildirim "3 numaralı asansör, sağa 40 m".
3 Yolculuk: 4 — hiçbir şeye basmazsınız → poşetler elinizde (demo) → bodrumda çekmez → alıntı → fiyat → SSS; kısa ve tek yönlü.
4 Palet/doku: 5 — beton grisi + kat boyası sarısı + kat renk kodları.
5 Ses: 4 — "İki çocuk, altı poşet, bir bebek arabası"; bazı açıklamalar teknik (hPa) ama kanıt olarak yerinde.
6 Varsayılan: 4 — sarı-siyah tehlike şeridi beklenen bir işaret; burada gerçekten otoparkta var.
Toplam 27/30. En düşük: yolculuk / ses / varsayılan (4).

## Revizyonlar
- Bölüm ortasından geçen şerit çizgisi metni kesiyordu → kaldırıldı, bölüm üstüne tehlike şeridi.
- Büyük harf Türkçe noktalı harfler (İ, Ü, Ş) üst satıra çarpıyordu → başlık satır yüksekliği .9 → 1.
- Sütundaki bulanık "leke" sarı lekeye dönüşüyordu → kaldırıldı.
- Rota, plan görünür olunca kendiliğinden çizilir (statik görüntüde de anlaşılır).
