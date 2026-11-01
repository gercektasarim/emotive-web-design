# Tarla Gözü — tasarım notları

**Fiziksel dünya:** Kumluca/Mavikent plastik ve cam seraları; naylonun süt beyazı dağınık ışığı, dikiş çizgileri, sarı yapışkan tuzaklar, koyu domates yaprağı, ilaç etiketi, öğle sıcağı (38 °C).
**Geliş → çıkış:** Kıvrık yaprağa bakıp "virüs mü, sökeyim mi?" diye endişelenen, mühendise ulaşamayan üretici → teşhisi elinde, ne yapacağını bilen, mahsulü kurtarmış.

## Taslaklar
**A. Sera içi teşhis fişi** — naylon beyazı #EEF1E7, yaprak #1E3A1F, tuzak sarısı #F2D21B, domates #B8321C, toprak #5E4C33. Barlow Condensed (ilaç/tohum etiketi dili) + Barlow. Sıkı tempo, düz yüzey, köşe 4-10px. Hero: kamera vizörü + teşhis sonucu; an: "başka bir yaprak dene" ile 3 hastalık. Ses: "Bu bitkiyi sök. Virüsün ilacı yok." Sıra: teşhis → çekim yok → ilaçlama saati → sınırlar → üretici hikâyesi → ücretsiz → SSS.
**B. İmece bülteni** (STK ağırlıklı) — kraft kâğıt, yeşil-turuncu, Nunito benzeri yuvarlak sans; hero bir üreticinin hikâyesi + "kooperatifin ücretsiz dağıttığı uygulama". Sıra: hikâye → etki sayısı → nasıl → indir.
**C. Sera defteri** — kareli defter, kurşun kalem, el yazısı; hero bir defter sayfası üzerinde teşhis notu.

| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Toplam |
|---|---|---|---|---|---|---|---|
| A | 5 tuzak sarısı + vizörde yaprak | 5 teşhis ilk ekranda | 4 | 5 naylon/tuzak | 5 | 4 sağda ürün ekranı | **28** |
| B | 3 STK de olabilir | 2 teşhis aşağıda | 4 | 3 kraft genel | 4 | 3 | 19 |
| C | 3 | 3 | 3 | 3 | 4 | 3 defter yaygın | 19 |

Seçim: **A**. STK'nın (B) "tek insan hikâyesi" ve "ücretsiz, masrafı birlik karşılar" fikri A'ya eklendi. En düşük ölçüt: varsayılan (iki kolonlu hero).

## Sayfa puanı — v1
1 Tanınabilirlik: 4 — vizör + tuzak sarısı tarım diyor; ama yapraklar söğüt gibi düz, domates olduğu anlaşılmıyor
2 Geliş hali: 5 — "Mühendis perşembe gelir. Teşhis şimdi." + ilk ekranda teşhis ve 3 adım
3 Yolculuk: 4 — teşhis → çekim yok → saat → sınırlar → hasat hikâyesi → ücret; ücret bölümü biraz kart
4 Palet/doku: 5 — naylon dikiş çizgisi, tuzak sarısı bant (tuzak delikleri deseni), yaprak yeşili
5 Ses: 5 — "Ağustosta herkes 'virüs, sök' dedi. Telefon 'sıcaktan, sökme' dedi."
6 Varsayılan: 4 — sol metin/sağ ürün hero kalıbı kaldı
Toplam 27/30. Revizyon (doku): yaprakçıklara loblu kenar ve damar eklendi.

## Sayfa puanı — v2
1 Tanınabilirlik: 5 — loblu, damarlı domates yaprakçıkları + sarı tuzak; başka bir ürün olamaz
2 Geliş hali: 5 — aynı
3 Yolculuk: 4 — aynı
4 Palet/doku: 5
5 Ses: 5
6 Varsayılan: 4 — iki kolon hero
**Toplam 28/30**, en düşük: varsayılan kokusu (4) / yolculuk (4).

Kontrol: 390px iframe ölçümünde scrollWidth = 390 (taşma yok). shot.sh mobil PNG'si headless Chrome'un ~500px pencere alt sınırı nedeniyle sağdan kesik görünür; gerçek taşma değildir.
