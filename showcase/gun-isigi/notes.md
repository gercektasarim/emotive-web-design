# Gün Işığı — tasarım notları

**Fiziksel dünya:** Antalya'da bir salon, akşamüstü 16:30–18:00: perdeden giren turuncu ışık, uzayan gölgeler, pencere camındaki yansıma, abajurlu lamba, mor kadife koltuk, radyo. Bir anne çantasını alıp "eve gideceğim" diyor; kızı mutfakta.
**Geliş → çıkış:** Her akşamüstü gelen huzursuzluğa hazırlanan, yorgun ve çaresiz bakım veren → "sakin akşamlar: ev annemden önce yumuşuyor, bazı akşamlar hiç sormuyor."

## Taslaklar
**A — Pencereden giren günün eğrisi.** Palet: kireç badana #F4F2EE, alacakaranlık mürdümü #4A3550, akşam bakırı #A85A1A, sabah sarısı #F2C14E, mürekkep #2A2329; hero zemini saatle değişen bir ton (sabah serin, akşam sıcak). Tipografi: Fraunces (yumuşak, sıcak serif başlık) + Karla (sakin gövde). Tempo: geniş, wellness yavaşlığı. Doku: düz SVG oda, ışık parıltısı, renk örnekleri (Kelvin). Hareket: yalnız saat kaydırıcısı. Ses: "Saat beşe doğru, ev annenizden önce sakinleşir." Bölümler: pencere + saat → bir akşamüstü (15:30–21:30) → önceden sezer (14 günlük grafik) → sizin için notlar → veri evde → Nilgün Hanım → fiyat + SSS.
**B — Bakım evi sakinliği (wellness spa).** Adaçayı-kum, büyük boşluk, taş-su metaforu, "huzur". Sakin ama ürünün ışıkla ne yaptığı görünmüyor; spa klişesi.
**C — Akıllı ev otomasyonu.** Koyu panel, lamba kartları, otomasyon kuralları ("eğer… ise"). Netlik var, ama demanslı bir anne ve yorgun kız için soğuk ve teknik.

| Ölçüt | A | B | C |
|---|---|---|---|
| Tanınabilirlik | 4 ışık + saat | 2 | 3 |
| Geliş hali | 4 | 3 | 3 |
| Yolculuk | 5 | 4 | 3 |
| Palet/doku | 4 | 3 | 2 |
| Ses | 5 | 4 | 3 |
| Varsayılan | 4 | 2 | 3 |
| **Toplam** | **26** | 18 | 17 |

Seçim: A. Riskini not ettim: akşam tonunda hero kremleşip "krem + serif" varsayılanına kayabilir; vurgu terracotta değil mürdüm tutuldu, krem yalnızca 17:30 ışığı olarak geliyor.

## Sayfa puanı — sayfa v2
1 Tanınabilirlik: 4 — pencere, lamba ve saat kaydırıcısı ev ışığı kontrolü diyor; demans/bakım bağı metinden geliyor.
2 Geliş hali: 4 — başlık doğrudan "saat beş" anını adlandırıyor ve durum kutusu "Koridorda gidip gelme başladı. Işık 20 dakika erken yumuşadı"; ancak bakım verene ilk ekranda doğrudan bir şey söylenmiyor.
3 Yolculuk: 5 — ışık → bir akşamüstü adım adım → önceden sezme kanıtı → bakım verenin kendisi → veri evde → "o akşamlar bana yetiyor".
4 Palet/doku: 4 — Kelvin renk örnekleri ve saatle değişen gökyüzü konudan; açık bölümler genel.
5 Ses: 5 — "Bu akşam sakin geçti. Sen de dinlen.", "Her akşam değil, ama o akşamlar bana yetiyor", 690 ₺, Philips Hue/IKEA/Matter.
6 Varsayılan: 4 — krem + serif hero'ya yakınlık (yalnız 17:30 ışığında); başka tell yok.
Toplam: 26/30. En düşük: tanınabilirlik (4) — eşit 4'lerden en kritik olanı.

Revizyon (v1→v2): SVG'de `fill="var(--…)"` öznitelikleri `style`'a taşındı (renk değişimi çalışsın); lambanın düz sarı elipsi "blob" gibi duruyordu, ışınsal parıltıya çevrildi.
Kanıt anı: "Annenizin evdeki adımları evde kalır" — tahmin ev merkezinde, internet kesilse de ışık düzeni sürer. Tıbbi dürüstlük: "bazı kişilerde hafifletebilir, herkeste değil".
