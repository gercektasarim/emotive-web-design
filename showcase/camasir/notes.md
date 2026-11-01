# Çamaşır Kâhyası — tasarım notları

**Fiziksel dünya:** Apartman bodrumundaki çamaşırhane ya da banyo köşesi: saten bakım etiketi ve sembolleri, makine program düğmesi, su mavisi, deterjan kokusu; kurutma makinesinden küçülmüş çıkan lacivert-kırmızı yün kazak.
**Geliş → çıkış:** Kızının ilk yün kazağını çektirmiş, mahcup baba → etiketi okuyabilen, ustalaşmış.

## Taslaklar
### A — Bakım etiketi (seçildi)
- Dünya: saten etiket, dikiş izi, zikzak kesik kenar; makine düğmesi; su
- Palet: #DCE8EC yıkama suyu · #FFFFFF saten etiket · #17222B etiket mürekkebi · #A3302B yün kazak kırmızısı · #F2E3DF yün açık · #3D7686 makine camı
- Tipografi: Barlow Condensed (etiket ve makine paneli dar harfi, büyük harf başlık) + Barlow (gövde)
- Tempo: orta; etiket asimetrik solda, sonuç kartı sağda
- Doku: saten çizgi dokusu, dikiş, zikzak kenar; kumaş dokulu leke kartları
- Hareket: etiket üstünde tarama çizgisi + program düğmesinin dönmesi (an)
- Ses: suçluluğu hafifleten, usta-çırak: "İlk yün kazak çekti. İkincisi çekmeyecek." · "Lekenin ilk on dakikası." · "Kazağı bu sefer siz yıkayın."
- Bölümler: hero (etiket + okuma sonucu) → program bulucu (döner düğme) → leke rehberi (e-ticaret ürün kartı mantığı: malzeme + yapmayın) → sembol sözlüğü (ustalaşma) → bodrum çamaşırhanesi kanıtı → alıntı + fiyat → SSS
- An: kıyafet seçilince makine düğmesi programa döner, ekranda derece/devir değişir
```
┌etiket┐   İLK YÜN KAZAK ÇEKTİ.
│%80   │   İKİNCİSİ ÇEKMEYECEK.
│◫ ⨯ ⊠ │   ┌Elif'in lacivert kazağı──────┐
│▭ ⌐ Ⓟ │   │ Yün │ 30° │ 600 │ ◇ kurutma yok│
└vvvvvv┘   [iPhone] [Android]
```
### B — Deterjan rafı (e-ticaret ağırlıklı)
- Raf gibi ürün kartları, parlak renkler; dikkat leke ürünlerine kayıyor, uygulama satıcı gibi görünür.
### C — Babanın defteri
- Kareli defter, el yazısı notlar, sıcak; ustalaşma iyi ama makine/etiket dünyası zayıf, "ev ekonomisi blogu" gibi.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top |
|---|---|---|---|---|---|---|---|
| A Bakım etiketi | 5 | 4 | 5 | 4 | 5 | 4 | 27 |
| B Deterjan rafı | 3 | 3 | 3 | 3 | 3 | 2 | 17 |
| C Babanın defteri | 3 | 4 | 4 | 3 | 5 | 3 | 22 |
Seçim: A. En düşük beklenen: geliş hali (mahcup baba için suçluluk cevabı yalnız başlıkta).

## Uyum puanı — sayfa v1
1 Tanınabilirlik: 5 — kanıt: zikzak kenarlı saten etiket + yıkama sembolleri + makine düğmesi; metinsiz bile "çamaşır bakımı".
2 Geliş hali:     4 — kanıt: başlık doğrudan olaya cevap ("ikincisi çekmeyecek"), sonuç kartında "geçen sefer çekmesinin sebebi bu ikisi"; çekmiş kazağı kurtarma sorusu yalnız SSS'te.
3 Yolculuk:       5 — kanıt: ne oldu → bir dahakine program → leke → semboller (ustalaşma) → gizlilik → baba alıntısı.
4 Palet/doku:     4 — kanıt: yıkama suyu mavisi, saten etiket, yün kırmızısı konudan; leke kartları kumaş dokulu.
5 Ses:            5 — kanıt: "Kalorifer üstü yok", "Teneffüs dizi", "evin yeni çamaşır sorumlusu".
6 Varsayılan:     4 — kanıt: leke bölümü 6 eşit kart ızgarası (içerik gerçekten liste); gradient/eyebrow yok.
Toplam: 27/30 → eşik geçildi. En düşük: geliş hali / palet / varsayılan (4).

## Bağımsız değerlendirme (ayrı agent) — sayfa v1
Tanın. 5 · Geliş 5 · Yolculuk 4 · Palet 4 · Ses 5 · Varsayılan 3 = **26/30**. Not: altı eşit leke kartı ve alıntı+fiyat yan yana kalıbı varsayılana yakın; açık mavi-gri zemin daha genel. Ev Güvende ile palet benzerliği bildirildi; o site gece IR paletine taşındığı için bu çakışma giderildi.
Son puan: 26/30 (bağımsız puan esas alındı). En düşük: varsayılan kokusu (3).
