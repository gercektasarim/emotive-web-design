# Engelsiz Rota — tasarım notları

**Fiziksel dünya:** Kadıköy sokakları: Moda Caddesi, Bahariye, Muvakkithane; arnavut kaldırımı ve yüksek bordür taşları, alçaltılmış bordürler, rampalar, metro asansörü; sokak haritası. Kaygı değil, şehirde kendi yolunu bilen birinin özgüveni.
**Geliş → çıkış:** Bir kafeye gitmek için yarım saat plan yapan, çoğu zaman vazgeçen tekerlekli sandalye kullanıcısı → "şehir benim de".

## Taslaklar
**A. Harita senin (özgüvenli sokak)** — beyaz #FFFFFF, kaldırım taşı #E4E1DC / #CFCBC6, mürekkep #17151A, cesur fuşya #C2255C (rota çizgisi, "ben de buradayım"), erişim mavisi #2457C5, onay yeşili #1F7A4D. Lexend (okuma kolaylığı için tasarlanmış; erişilebilirlik ürünün özü) tek aile, 300–800. Hero haritanın kendisi: sol %65 Kadıköy haritası, "Engelsiz / En kısa" anahtarı, sağda başlık ve kafenin erişim kartı. An: anahtarla en kısa yol (18 cm kaldırım, merdiven) ve engelsiz yol (rampa %6, alçaltılmış bordür) karşılaştırılır. Ses: "siz", düz, acımasız olmayan, topluluk; acındırma yok.
**B. Topluluk / STK** — sıcak turuncu, gönüllü fotoğrafları, bağış/katılım çağrısı; nonprofit kalıbına uygun ama kullanıcıyı "yardım edilen" konumuna koyuyor.
**C. Erişilebilirlik standardı** — siyah-beyaz, yüksek kontrast, uluslararası mavi sembol; doğru ama kurumsal ve soğuk, "şehir benim de" coşkusu yok.

| Ölçüt | A | B | C |
|---|---|---|---|
| Tanınabilirlik | 5 | 3 | 4 |
| Geliş hali | 5 | 3 | 4 |
| Yolculuk | 4 | 4 | 3 |
| Palet/doku | 4 | 3 | 3 |
| Ses | 5 | 3 | 3 |
| Varsayılan | 4 | 3 | 4 |
| **Toplam** | **27** | 19 | 21 |

Seçim A. B'den topluluk ve "katıl" bölümü alındı, ama kullanıcının kendisi katkı veren olarak.

## Sayfa puanı — v1 (revizyon sonrası)
1 Tanınabilirlik: 5 — sokak haritası, geçilemez kaldırım çarpıları ve onaylı rampalar: erişilebilir rota.
2 Geliş hali: 5 — ilk ekranda "11 dakika, sıfır basamak" ve kafenin giriş/kapı/tuvalet ölçüleri.
3 Yolculuk: 4 — eskiden 32 dk / şimdi 1 dokunuş → fotoğraf telefonda kalır → takip edilen üç şey → Deniz → katıl → SSS.
4 Palet/doku: 4 — kaldırım taşı grisi ve harita konudan; fuşya bir tavır rengi, fiziksel dünyadan değil.
5 Ses: 5 — "Bir kafeye gitmek, bir proje olmamalı", "ertesi gün başka biri takılmıyor"; ölçüler ve eşikler gerçekçi.
6 Varsayılan: 4 — hap düğmeler ve beyaz kartlar SaaS'a yakın.
Toplam 27/30. En düşük: yolculuk / palet / varsayılan (4).

## Revizyonlar
- Haritada "M4 Kadıköy" etiketi "Rampa %6" ile çakışıyordu → iki satıra bölünüp nokta altına alındı; anahtar sağ üste.
- Mobilde başlıktaki "Ücretsiz indir" iki satıra kırılıyordu → nowrap, küçük boyut.
- Ölçüm fotoğrafındaki "yüz bulanık" yer tutucusu anlaşılmıyordu → gerçekten bulanık insan silueti + "yüz silindi".
