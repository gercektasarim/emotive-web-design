# Enerji Bekçisi — tasarım notları

**Fiziksel dünya:** Apartman koridorundaki sayaç dolabı: gri sac panel, yeşilimsi LCD, her watt-saatte yanıp sönen kırmızı ışık; elde Aralık faturası. Kış, elektrikli ısınan 1+1 kiralık daire.
**Geliş → çıkış:** Kış faturasını görüp şok olmuş, "neden bu kadar?" diyen kiracı → faturayı cihaz cihaz bilen, kontrolde.

## Taslaklar
### A — Fatura söküm (seçildi)
- Dünya: sayaç panosu grisi, LCD yeşili, faturanın rakamları, termostatın testere dişi
- Palet: #E3E5E0 pano grisi · #1B1E1D mürekkep · #C5D2B2 sayaç LCD · #D9531E uyarı/ısıtıcı · #2F6A4C kontrol yeşili · #B7832A termosifon
- Tipografi: Chivo 900 (sert, kurumsal grotesk başlık) + Chivo Mono (sayaç ve fatura rakamları)
- Tempo: bilgi yoğun ama ızgaralı; köşe 4-6px; gölge yok
- Hareket: yalnız simülatör anahtarları ile LCD'deki tahmini fatura
- Ses: rakamla konuşan, net, "siz": "2.185 ₺'lik faturanın 931 ₺'si tek bir cihazdan." · "Ocak faturasını şimdiden yeniden yazın." · "Kiracı dostu: sayaca yapışır, mühüre dokunmaz."
- Bölümler: hero = faturanın cihazlara ayrılmış hali → sayaç ne duyar (LCD dalga) → simülatör → veri kimde (saatlik grafik ne anlatır) → okuyucu → alıntı + fiyat → SSS
- An: alışkanlık anahtarları açıldıkça LCD'de Ocak tahmini ve aylık fark değişir
```
Aralık faturası · Keçiören · 683 kWh
2.185 ₺'lik faturanın 931 ₺'si tek bir cihazdan.
┌──────────────────────────────────────────────┐
│█████████ ısıtıcı ███ termosifon █ █ █ █ ▌    │
│ radyatör 931₺ | termosifon 499₺ | …          │
│ Toplam 2.185,60 ₺ | İlk öneri… | [Hesapla]   │
```
### B — Tasarruf koçu
- Yeşil, yaprak ikonlu, "dünyayı kurtar" tonu; şoktaki kiracı ahlak dersi değil rakam istiyor. Sektör klişesi.
### C — Sayaç dolabı (endüstriyel)
- Tamamen koyu sac + LCD; güçlü dünya ama ilk ekranda faturanın cevabı yerine cihaz anlatıyor.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top |
|---|---|---|---|---|---|---|---|
| A Fatura söküm | 4 | 5 | 5 | 4 | 5 | 4 | 27 |
| B Tasarruf koçu | 3 | 3 | 3 | 2 | 3 | 2 | 16 |
| C Sayaç dolabı | 4 | 3 | 4 | 5 | 4 | 4 | 24 |
Seçim: A, C'nin LCD dokusu sayaç ve simülatör bölümlerine alındı (A + C dokusu).

## Uyum puanı — sayfa v1
1 Tanınabilirlik: 4 — kanıt: yığılmış fatura çubuğu, LCD sayaç ekranı, sayaç çizimi; enerji/fatura net, "kiracı" nişi metinsiz okunmaz.
2 Geliş hali:     5 — kanıt: ilk ekranın kendisi "neden bu kadar?" sorusunun cevabı: hangi cihaz kaç ₺.
3 Yolculuk:       5 — kanıt: şok → nedeni gör → nasıl ölçülüyor → kendin değiştir (kontrol) → veri sende → cihaz → fiyat.
4 Palet/doku:     4 — kanıt: pano grisi + LCD yeşili + uyarı turuncusu sayaçtan; yine de enerji sektöründe başkasına da uyar.
5 Ses:            5 — kanıt: "Radyatör gece 02:00'den sonra boş salonu ısıtıyor", "Çok zamanlı tarife", "mühüre dokunmaz".
6 Varsayılan:     4 — kanıt: başlıkta renkli ifade (ama anlamlı veri, 931 ₺); kart/eyebrow/gradient yok.
Toplam: 27/30 → eşik geçildi. En düşük: tanınabilirlik/palet/varsayılan (4). Revizyon: footer telefonu gerçekçi numarayla değiştirildi.

## Bağımsız değerlendirme (ayrı agent) — sayfa v1
Tanın. 4 · Geliş 5 · Yolculuk 5 · Palet 4 · Ses 5 · Varsayılan 4 = **27/30**, kendi puanımla aynı. Öneri: hero'da kiracının ilk adımı netleşsin (okuyucu fiyatı).
## Revizyon 1
- Hero sonucunun altına "Okuyucu 690 ₺ · uygulama ücretsiz" satırı eklendi.
