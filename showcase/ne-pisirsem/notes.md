# Ne Pişirsem — tasarım notları

**Fiziksel dünya:** Akşam 19:00 karanlık mutfak; açılan buzdolabının soğuk beyaz ışığı, cam raflar, yarım patlıcan, iki yumurta, açılmış yoğurt.

**Giriş → çıkış:** İşten yorgun dönmüş, dolaba bakıp 'hiçbir şey yok' diyen çalışan → iştahlı: üç yemek var, biri 12 dakika.

## Yön taslakları

### A · Buzdolabı ışığı
- **dünya:** karanlık mutfak, buzdolabının LED ışığı, cam raf
- **palet:** #10151E gece · #EEF6FB buzdolabı içi · #F6B323 yumurta sarısı · #5B3466 patlıcan · #A8B4C4 buğu grisi
- **tipografi:** Bricolage Grotesque (iştahlı, karakterli başlık) + Figtree (gövde)
- **tempo:** orta; hero dolu, sonrası sakin
- **doku:** CSS buzdolabı, raflar, SVG malzemeler
- **hareket:** malzemeye dokununca öneriler değişir; ses dalgası
- **ses:** ev aşçısı, 'sen' değil 'siz' ama sıcak: 'Dolapta ne varsa, akşam yemeği o.'
- **bölümler:** hero (dolap) → üç öneri → sesli adımlar → dolabın içi gizli → ev mutfağı gibi → yorum → fiyat → SSS
- **an:** Buzdolabındaki malzemeleri açıp kapatınca üç tarifin anında değişmesi
- **hero eskizi:**
```
[19:00  Başlık    ][ açık buzdolabı | kapak ]
[lede             ][ raf: patlıcan yumurta  ]
[CTA              ][ raf: domates limon     ]
[ öneri 1 ][ öneri 2 ][ öneri 3 ]
```

## Uyum puanı — A · Buzdolabı ışığı (taslak)
1 Tanınabilirlik: 4 — kanıt: buzdolabı ışığı akşam mutfağı diyor
2 Geliş hali: 5 — kanıt: 19:00 ve dolap demosu ilk ekranda
3 Yolculuk: 4 — kanıt: öneri → sesli → gizlilik
4 Palet/doku: 3 — kanıt: koyu zemin + sarı vurgu tek başına genel
5 Ses: 5 — kanıt: çılbır, dünkü pilav
6 Varsayılan: 4 — kanıt: koyu mod riski
Toplam: 25/30 → eşik geçildi. En düşük: Palet/doku

### B · Ocak başı
- **dünya:** tava, alev, tahta kaşık
- **palet:** kömür + alev turuncusu
- **tipografi:** serif başlık
- **bölümler:** hero (tava videosu hissi) → tarifler → fiyat
- **an:** kaynayan tava animasyonu

## Uyum puanı — B · Ocak başı (taslak)
1 Tanınabilirlik: 3 — kanıt: herhangi bir tarif sitesi
2 Geliş hali: 3 — kanıt: yorgun kişiye ürün değil yemek
3 Yolculuk: 3 — kanıt: standart
4 Palet/doku: 2 — kanıt: kömür+turuncu yemek klişesi
5 Ses: 4 — kanıt: sıcak
6 Varsayılan: 3 — kanıt: serif + turuncu
Toplam: 18/30 → eşik altı. En düşük: Palet/doku

### C · Sesli asistan
- **dünya:** tezgâhta duran telefon, ses dalgası
- **palet:** beyaz + mor
- **tipografi:** Inter
- **bölümler:** hero (ses dalgası) → özellikler
- **an:** ses dalgası

## Uyum puanı — C · Sesli asistan (taslak)
1 Tanınabilirlik: 2 — kanıt: herhangi bir ses asistanı
2 Geliş hali: 3 — kanıt: orta
3 Yolculuk: 3 — kanıt: orta
4 Palet/doku: 2 — kanıt: mor varsayılan
5 Ses: 3 — kanıt: nötr
6 Varsayılan: 2 — kanıt: mor gradient riski
Toplam: 15/30 → eşik altı. En düşük: Tanınabilirlik

## Seçim

A seçildi: dolabın ışığı ziyaretçinin tam o anki görüntüsü. C'nin sesli anlatımı ayrı bölüm oldu. Taslak en düşük: palet (koyu zemin + sarı vurgu genel olabilir) → buzdolabı içi soğuk beyazı ve patlıcan moru ile özelleştirildi.

## Sayfa puanı

## Uyum puanı — sayfa v1
1 Tanınabilirlik: 4 — kanıt: buzdolabı + gece; malzemeler küçük ve seyrek
2 Geliş hali: 5 — kanıt: 19:00 rozeti, dolap demosu ilk ekranda
3 Yolculuk: 4 — kanıt: öneri → sesli adım → gizlilik
4 Palet/doku: 4 — kanıt: gece + buzdolabı beyazı + yumurta sarısı
5 Ses: 5 — kanıt: 'Eliniz soğanlıyken ekrana dokunmazsınız', çılbır adımları
6 Varsayılan: 3 — kanıt: ilk öneri 7 dk'lık pilav, patlıcanı kullanmıyordu; koyu+sarı varsayılana yakın
Toplam: 25/30 → eşik geçildi. En düşük: Varsayılan

## Uyum puanı — sayfa v2
1 Tanınabilirlik: 4 — kanıt: malzemeler 1,4 kat büyüdü, dolap dolu görünüyor
2 Geliş hali: 5 — kanıt: aynı
3 Yolculuk: 4 — kanıt: aynı
4 Palet/doku: 4 — kanıt: aynı
5 Ses: 5 — kanıt: aynı
6 Varsayılan: 4 — kanıt: sıralama artanı önce kullanıyor; patlıcan önerileri öne geçti
Toplam: 26/30 → eşik geçildi. En düşük: Tanınabilirlik

## Uyum puanı — bağımsız değerlendirici
1 Tanınabilirlik: 4 — kanıt: açık buzdolabı, rafta yarım patlıcan
2 Geliş hali: 5 — kanıt: dolap + altında üç öneri
3 Yolculuk: 4 — kanıt: 6'lı özellik ızgarası şablon dolgusu
4 Palet/doku: 2 — kanıt: gece laciverdi + buz mavisi bölüm: iştah değil soğuk dolap hissi
5 Ses: 5 — kanıt: nöbetten çıkan hemşire alıntısı
6 Varsayılan: 3 — kanıt: koyu zemin + tek parlak vurgu, 6'lı ızgara
Toplam: 23/30 → eşik altı. En düşük: Palet/doku

## Uyum puanı — sayfa v3 (palet kadranı revizyonu)
1 Tanınabilirlik: 4 — kanıt: aynı
2 Geliş hali: 5 — kanıt: aynı
3 Yolculuk: 5 — kanıt: 6'lı ızgara yerine 'Yok → Yerine → Hangi yemekte' ikame tablosu
4 Palet/doku: 4 — kanıt: zemin isli döküm kahvesi + ocak ışığı; tek soğuk öğe artık buzdolabı, kontrastla iştah; kartlarda yemeğin rengi şeridi
5 Ses: 5 — kanıt: aynı
6 Varsayılan: 4 — kanıt: koyu zemin kaldı ama sporcu-tabagi'nın siyahından ayrıştı
Toplam: 27/30 → eşik geçildi. En düşük: Tanınabilirlik

## Revizyonlar

- v1→v2 (hareket/doku kadranı): malzeme ikonları büyütüldü; öneri sıralaması 'bozulacak olanı önce kullan' kuralına göre değişti (patlıcan, dünkü pilav, domates puan alıyor); kart etiketleri 'n malzeme eksik / Hepsi dolapta' oldu.
- v2→v3 (bağımsız değerlendirme 23/30, palet 2 → eşik altı): yalnız sıcaklık kadranı değişti. Gece laciverdi → isli döküm kahvesi (#1C1612) + sol üstte ocak ışığı; sesli adımlar bölümü buz mavisinden tezgâh beji; öneri kartlarına ana malzemenin rengi üst şerit olarak; 6'lı özellik ızgarası ikame tablosuna çevrildi; fiyat başlığı 'X'ten ucuz' kalıbından çıkarıldı.

## Kontrol listesi (§5)

Ekran görüntüleri: `_shots/ne-pisirsem-desktop.png`, `-mobile.png` (gerçek 390 px; headless Chrome 500 px alt sınırı yüzünden 390 px iframe içinde alındı, yatay taşma ölçüldü: scrollWidth = 390), `-full.png`.

Son puanda eşit en düşük ölçütler arasından iyileştirme önceliği: **Palet/doku**.
