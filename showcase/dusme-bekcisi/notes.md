# Düşme Bekçisi — tasarım notları

**Fiziksel dünya:** Karşıyaka'da iki odalı ev; adaçayı boyalı koridor, halı, banyo karosu, duvarda sabun kalıbı büyüklüğünde beyaz sensör. Öteki uçta: İzmir'de bir muhasebe ofisi, masada ters çevrilmiş telefon.
**Geliş → çıkış:** Annesini her saat arayan, aklı evde kalan kız → "içim rahat; aramasam da biliyorum, düşerse haber gelir."

## Taslaklar
**A — Annenin evinden canlı durum satırı.** Palet: adaçayı duvar #EEF1EC, gece mürekkebi #17252A, "yolunda" yeşili #2A7554, uyarı turuncusu #B04B17, radar halkası #9CB4AC. Tipografi: Lexend (okunabilirlik için tasarlanmış, büyük gövde) + IBM Plex Mono (sensör saatleri). Tempo: orta, sola hizalı. Doku: ince çizgili kat planı, düz beyaz paneller. Hareket: yalnız radar taraması + tek düşme canlandırması. Ses: "Annen evde, salonda oturuyor. Her şey yolunda." Bölümler: canlı durum hero → ne görür/görmez → ilk bir dakika (an) → onur → kurulum → kızın alıntısı → fiyat fişi → SSS. Hero eskizi: sol büyük durum cümlesi + iki düğme; sağ kat planı paneli + gün özeti.
**B — Gece lambası.** Koyu lacivert zemin, sıcak lamba sarısı; gece 03:00'te koridor ışığı metaforu; Fraunces + Work Sans. Hero: karanlıkta tek lamba ve "Bu gece de uyuyabilirsiniz." Bölüm sırası duygu ağırlıklı, ürün geç görünüyor.
**C — Klinik alarm sistemi.** Beyaz + kırmızı acil şerit, sağlık güvencesi dili, sertifikalar önde. Kalp ritmi gibi ciddi; ama "anne izleniyor" hissini artırıyor.

| Ölçüt | A | B | C |
|---|---|---|---|
| Tanınabilirlik | 4 kat planı + radar ev izleme diyor | 2 lamba her şey olabilir | 3 sağlık alarmı, niş belirsiz |
| Geliş hali | 5 ilk satır "annen iyi" cevabı | 3 duygu var, bilgi yok | 4 güven var, cevap yok |
| Yolculuk | 5 | 3 | 3 |
| Palet/doku | 4 | 3 gece mavisi varsayılana yakın | 2 klinik kırmızı-beyaz klişe |
| Ses | 5 | 4 | 3 |
| Varsayılan | 4 | 3 | 3 |
| **Toplam** | **27** | 18 | 18 |

Seçim: A. Taslaktaki en düşük: palet/doku — üretimde paleti "duvar boyası + durum ışığı" ile sınırladım.

## Sayfa puanı — sayfa v1 (ekran görüntüsünden)
1 Tanınabilirlik: 4 — kat planı, radar taraması ve "ayakta/oturuyor/yerde" nokta figürleri evde yaşlı izleme diyor; yine de genel akıllı ev uygulaması da olabilir.
2 Geliş hali: 5 — ilk ekranın başlığı uygulamanın kendi durum cümlesi: "Annen evde, salonda oturuyor. Her şey yolunda." + gün özeti.
3 Yolculuk: 5 — "kamera yok" kaygısı → düşünce ne olur → onur (namaz düşme sayılmaz) → kurulum → alıntı → fiyat; gereksiz bölüm yok.
4 Palet/doku: 4 — adaçayı duvar ve durum yeşili/turuncusu konudan; beyaz paneller biraz genel.
5 Ses: 5 — "Nermin Hanım, iyi misiniz? 'İyiyim' derseniz kimseyi aramayacağım.", 3.490 ₺, Karşıyaka, 0850 hattı.
6 Varsayılan: 4 — tek tell: her panelde aynı yuvarlak köşe/çerçeve.
Toplam: 27/30 → eşik geçildi. En düşük: palet/doku (4).

Kanıt anı: "Görüntü olmadığı için banyoya da takılabilir"; internet kesilse SIM ile arar.
Revizyon: banyo planındaki "lavabo karşısı" etiketi taşıyordu, kaydırıldı. Mobil 390px (iframe ile ölçüldü) yatay taşma yok.
Not: Headless Chrome pencereyi en az 500px açtığı için `-mobile.png` sağdan kırpılmış görünür; gerçek 390 kontrolü `-m390.png` ile yapıldı.
