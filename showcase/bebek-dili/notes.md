# Bebek Dili — tasarım notları

**Fiziksel dünya:** 04:00, çocuk odası; tek gece lambasının kehribar ışığı, müslin bezler, bir elde bebek bir elde telefon. Ses: ağlama ve beyaz gürültü.
**Geliş → çıkış:** Gece dörtte ne istediğini bilemeyen, yorgun ve çaresiz yeni baba → "bebeğimin dilini öğreniyorum", yetkin ebeveyn.

## Taslaklar

### A — Gece lambası (seçildi)
- Dünya: karanlık oda, tek sıcak ışık, yavaş nefes. Göz yormayan karanlık zemin, telefonun parlaklığı bebeği uyandırmasın.
- Palet: #13151B gece · #1C1F27 duvar · #EDE3D3 müslin · #F0B46A gece lambası · #9CC3A0 (gaz) · #E9937E (rahatsızlık)
- Tipografi: Young Serif (masal kitabı sıcaklığı, başlık) + Lexend (yorgun gözde okunurluk, gövde)
- Tempo: geniş, sakin; Doku: yumuşak köşe, tek sıcak ışık halesi; Hareket: yalnız "örneği dinlet" spektrogramı
- Ses: sakin, "siz", kısa: "Ağlıyor. Neden ağladığına birlikte bakalım." · CTA "iPhone için indir" · "Bazı ağlamalar uygulamanın işi değil."
- Bölümler: hero (sonuç ekranı) → dört ağlama (etkileşimli) → ses odada kalır (8 sn tampon zaman çizgisi) → gece günlüğü → ne zaman doktor → iki alıntı → fiyat → SSS → kapanış
- An: dört ağlama sekmesi + "Örneği dinlet" spektrogram çizimi ve olasılık sonucu
```
[saat 04:12 · çocuk odası]          ┌────────────┐
Ağlıyor. Neden ağladığına           │  ( Gaz )   │
birlikte bakalım.                   │ ▁▃▆█▆▃▁▃▆  │
[iPhone] [Android]                  │ gaz ███ 72 │
· uçak modunda · 0-6 ay             │ Deneyin: … │
```
### B — Çocuk doktoru muayenehanesi
- Açık bej-mavi klinik, Nunito; hero'da "ağlama rehberi" kartları; güven ama gecenin dünyası yok, 04:00'te parlak beyaz ekran yanlış.
### C — Ebeveyn defteri
- Kâğıt defter, el yazısı notlar, günlük ön planda; yetkinlik vurgusu güçlü ama ilk ekran "şu an ne yapmalıyım" sorusuna geç cevap veriyor.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top |
|---|---|---|---|---|---|---|---|
| A Gece lambası | 4 | 5 | 4 | 5 | 4 | 4 | 26 |
| B Muayenehane | 3 | 4 | 4 | 2 | 4 | 3 | 20 |
| C Ebeveyn defteri | 3 | 3 | 4 | 4 | 4 | 3 | 21 |
Seçim: A. En düşük beklenen: yolculuk/varsayılan (koyu tema + yuvarlak kartlar tekrar edebilir).

## Sayfa puanı — v1 (ekran görüntüsü)
Sorunlar: hero olasılık çubukları dolmuyordu (inline span'e width), mobilde grid taşması. Düzeltildi (v1.1).

## Uyum puanı — sayfa v1.1
1 Tanınabilirlik: 4 — kanıt: karanlık zemin + tek kehribar ışık + ses dalgası + dairesel sonuç "gece dinleyen bir şey" diyor; bebek, metin olmadan yalnız yumuşak serif ve renk kodlu dört kategoriden sezilir.
2 Geliş hali:     5 — kanıt: ilk ekranda doğrudan sonuç ve "Deneyin: bisiklet hareketi, karın masajı" önerisi; ziyaretçinin o anki sorusunun cevabı.
3 Yolculuk:       4 — kanıt: sonuç → dört ağlamayı öğren → ses odada → günlükte örüntü → kırmızı bayraklar → fiyat; "yetkin ebeveyn"e doğru ilerliyor; alıntı bölümü biraz uzun.
4 Palet/doku:     4 — kanıt: gece lambası kehribarı ve müslin metin konudan; koyu tema başka bir gece uygulamasına da giydirilebilir.
5 Ses:            5 — kanıt: "Onun sesi bu odada kalır", "Gece sorulan sorular", 04:12:11,2'de tamponun silinmesi, 149 ₺ tek seferlik.
6 Varsayılan:     4 — kanıt: tek tell: hemen her bölüm yuvarlak kart içinde; fade-up yok, eyebrow yok, gradient yok.
Toplam: 26/30 → eşik geçildi. En düşük: tanınabilirlik/palet/yolculuk (4).

## Bağımsız değerlendirme (ayrı agent) — sayfa v1.1
Tanın. 3 · Geliş 5 · Yolculuk 5 · Palet 3 · Ses 5 · Varsayılan 3 = **24/30** (sınırda). Not: "koyu zemin + amber + serif her gece/uyku uygulamasına giydirilebilir; doku yok, kartlar aynı."

## Revizyon 1 (kadran: doku/sıcaklık)
- Hero'ya bebek beşiği dönencesi (ay, yıldız, bulut, keçe top) çizgi SVG'si; "çocuk odası" metinsiz okunuyor.
- "Sabah, gecenin özeti hazır" bölümü gece → sabaha geçiş: müslin bez dokulu (çapraz gazlı bez deseni) açık zemin, günlük sayfası kartı; kategori renkleri açık zemine göre koyulaştırıldı.
- Dört ağlama bölümüne çok hafif müslin dokusu; küçük gri metinlerin kontrastı yükseltildi.

## Uyum puanı — sayfa v2 (kendi değerlendirmem, revizyon sonrası)
1 Tanınabilirlik: 4 — kanıt: beşik dönencesi + ses dalgası + gece/sabah müslin geçişi "bebek odası, gece" diyor.
2 Geliş hali:     5 — kanıt: ilk ekranda sonuç ve "Deneyin" önerisi.
3 Yolculuk:       5 — kanıt: gece (koyu) → sabah özeti (açık müslin) → kırmızı bayraklar → fiyat; renk de yolculuğu taşıyor.
4 Palet/doku:     4 — kanıt: gece lambası kehribarı + müslin gazlı bez dokusu konudan.
5 Ses:            5 — kanıt: değişmedi.
6 Varsayılan:     3 — kanıt: koyu bölümlerde kartlar hâlâ aynı yarıçapta; serif + koyu zemin varsayılana yakın.
Toplam: 26/30 → eşik geçildi. En düşük: varsayılan kokusu (3).
