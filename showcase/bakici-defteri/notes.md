# Bakıcı Defteri — tasarım notları

**Fiziksel dünya:** Eskişehir'de bir mutfak tezgâhı: ilaç kutuları, tansiyon aleti, buzdolabına mıknatısla tutturulmuş randevu kâğıdı. Poliklinikte manila hasta dosyası, sıra numarası, 7 dakikalık muayene.
**Geliş → çıkış:** Babasına bakan, doktorun karşısında "iyiydi, idare ediyor" deyip arabada hatırlayan yorgun kız → "yalnız değilim: defter hatırlıyor, kardeşim görüyor, doktor dinliyor."

## Taslaklar
**A — Hasta dosyası ve tek sayfa özet.** Palet: manila dosya #E6D3A3, masa #F3EFE6, mürekkep #262626, belirti kırmızısı #A3352A, ilaç mavisi #235C8E, ruh hali yeşili #3B7240 (üç renk = defterin üç sekmesi). Tipografi: Source Serif 4 (belge başlıkları) + Source Sans 3 (form gövdesi) — hastane formu ciddiyeti. Tempo: orta, sola hizalı. Doku: dosya sekmesi, hafif eğik A4, damga. Hareket: yalnız sesli notun ayrışması. Ses: "Doktorun karşısında aklınızdan uçanlar, burada." Bölümler: dosya+A4 hero → sesli not ayrışır (an) → gece ikide yalnız değilsiniz → dosya sizin çekmecenizde → alıntı → fiyat → SSS.
**B — Spiral bakım defteri.** Kareli defter sayfası, el yazısı (Caveat) notlar, yapışkan not kâğıtları. Sıcak ama doktor karşısındaki ciddiyeti zayıf, el yazısı yaşlı/yorgun gözle okunaksız.
**C — Destek çemberi.** Yorgun bakım verene odaklanan sıcak STK dili: turuncu, yuvarlak sans, "bakım verenler topluluğu". Duyguda güçlü, ürünün ne yaptığı geç anlaşılıyor.

| Ölçüt | A | B | C |
|---|---|---|---|
| Tanınabilirlik | 5 dosya + doktor özeti | 4 | 2 |
| Geliş hali | 5 "unutuyorum" derdine A4 cevap | 4 | 3 |
| Yolculuk | 4 | 4 | 4 |
| Palet/doku | 4 | 4 | 3 |
| Ses | 5 | 4 | 4 |
| Varsayılan | 4 | 3 el yazısı + krem | 3 |
| **Toplam** | **27** | 23 | 19 |

Seçim: A; C'nin "bakım verenin kendisi" fikri "Gece ikide…" bölümüne taşındı.

## Sayfa puanı — sayfa v1
1 Tanınabilirlik: 5 — manila dosya sekmesi "BABAM · Mehmet Yılmaz" ve hafif eğik A4 doktor özeti; bakım günlüğü olduğu metin okunmadan anlaşılıyor.
2 Geliş hali: 5 — ilk ekran doğrudan doktora verilecek tek sayfa: öne çıkanlar, ilaçlar, sorulacaklar.
3 Yolculuk: 4 — not → ayrışma → yalnız değilsiniz → gizlilik → alıntı → fiyat; gizlilik bölümü biraz sıradan bir ara.
4 Palet/doku: 4 — manila ve üç sekme rengi konudan; sayfa zemini genel kâğıt tonu.
5 Ses: 5 — "Tansiyon on beşe dokuz çıktı… radyoda Zeki Müren çalınca eşlik etti", Levodopa 100/25 3×1, ALO 183.
6 Varsayılan: 4 — iki fiyat kartı kalıbı.
Toplam: 27/30. En düşük: palet/doku (4).

Revizyon: A4 içindeki `<footer>` sayfa footer stilini (çizgi + boşluk) miras alıyordu, sıfırlandı. JS'deki kesme işareti hatası düzeltildi. Mobil 390: taşma yok.
Kanıt anı: "Babanızın dosyası, sizin çekmecenizde"; "Hasta bilgisi telefondan çıkmaz" damgası; poliklinik bodrumunda çekim olmasa da açılır.
