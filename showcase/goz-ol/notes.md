# Göz Ol — tasarım notları

**Fiziksel dünya:** kaldırım asfaltı, sarı hissedilebilir kılavuz yüzey (nokta ve çizgi), beyaz baston, metro çıkışı, trafik sesi; tempo yürüyüş adımı.
**Geliş → çıkış:** Yeni bir şehirde her gün yol sormak zorunda kalan görme engelli genç → "kimseye sormadan gidebilirim" diyen **bağımsız** biri.

## Taslaklar

**A. Sarı kılavuz yolu** — asfalt #1C1D1A, kılavuz sarısı #F2C200, yol çizgisi beyazı #F5F3EC, bordür #2A2B27. Atkinson Hyperlegible (az gören okur için tasarlandı) + Archivo Black (sokak tabelası ağırlığı). Sıkı, sola hizalı. Doku: noktalı kılavuz şerit bölücü, başka süs yok. An: sahne seç → saat kadranı radarı + öncelik sırasıyla cümleler + "Sesli oku". Ses: kısa, "sen", adım/saat yönü. Sıra: hero demo → ilk hafta → nasıl konuşur (3 kural) → internetsiz (metro tüneli) → ekran okuyucu hareketleri → ücret + bağış → söz → SSS.
```
[Göz Ol]                         Nasıl konuşur · İnternetsiz · Ücret
Sağında boş bir sandalye.        ┌ sahne: [Kafe][Durak][Metro][Market]
ÖNÜNDE İKİ BASAMAK. (sarı)       │ (saat radarı)  | İki basamak... (tehlike)
lede: önce tehlike, sonra yol    │                | Kapı açık...
[Android için indir][iPhone]     └ ● uçak modu · 0,4 sn   [Sesli oku]
:::::::::::::: sarı kılavuz şerit ::::::::::::::
```
**B. Dernekten bir arkadaş** — STK sıcaklığı: turuncu-kahve, Nunito; gönüllü + kullanıcı hikâyesi hero'da, bağış ikinci CTA. Ses: "biz". Sıra: hikâye → ne yapıyoruz → etki → indir/bağış.
**C. Şehir defteri** — açık zemin, harita çizgileri, keşif tonu; hero bir şehir haritası üzerinde rota, "bugün nereye?".

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top. |
|---|---|---|---|---|---|---|---|
| A | 4 | 5 | 4 | 5 | 5 | 4 | **27** |
| B | 2 | 3 | 4 | 3 | 4 | 3 | 19 |
| C | 3 | 3 | 3 | 3 | 4 | 4 | 20 |
Seçim: **A**. B'den yalnız bağış bloğu ve şeffaflık satırı alındı (ref2 nonprofit). A'nın en düşüğü: tanınabilirlik (asfalt+sarı inşaat sitesine de gidebilir) → radar ve hissedilebilir nokta deseni bunu taşımalı.

## Sayfa puanı — v1 (ekran görüntüsünden)
```
1 Tanınabilirlik: 4 — kanıt: sarı noktalı kılavuz şerit + saat kadranı radarı "görme engelli yönlenme" diyor; metinsiz bakışta inşaat/trafik de okunabilir
2 Geliş hali:     5 — kanıt: ilk ekranda ne söylediği (gerçek cümleler), ücretsiz, TalkBack/VoiceOver ile sesli kurulum
3 Yolculuk:       4 — kanıt: demo → ilk hafta → kurallar → tünel kanıtı → hareketler → ücret; hafta ve kurallar biraz örtüşüyor
4 Palet/doku:     5 — kanıt: asfalt + kılavuz sarısı doğrudan kaldırımdan; noktalı şerit gerçek uyarı yüzeyi
5 Ses:            5 — kanıt: "Saat 1 yönünde cam kapı, yaklaşık 6 adım. Kapı itmeli." / "Sormadıkça susar."
6 Varsayılan:     4 — kanıt: tek tell: her bölümde küçük sarı üst etiket (kicker)
Toplam: 27/30 → eşik geçildi. En düşük: tanınabilirlik / yolculuk (4).
```
Revizyon: mobilde grid taşması için `min-width:0` ve iç boşluk 1rem; içerik değişmedi.

## Erişilebilirlik
Atla bağlantısı, landmark'lar, sahne düğmeleri `aria-pressed`, anlatım listesi `aria-live="polite"`, radar `aria-hidden` (metin asıl içerik), 48-56px dokunma alanı, 4px sarı odak çerçevesi, `prefers-reduced-motion`, kontrast: sarı/asfalt 10:1, gövde 15:1, ikincil 10:1.
