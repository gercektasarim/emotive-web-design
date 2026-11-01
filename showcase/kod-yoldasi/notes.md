# Kod Yoldaşı — notlar

**Fiziksel dünya:** bankanın yazılım katı: kurum imajlı dizüstü, açık temalı IDE, VPN ve proxy, kapalı dış ağ, denetim raporları, BDDK ve iç politika belgeleri; Java/Spring ödeme servisleri ve 20 yıllık PL/SQL.
**Geliş → çıkış:** bulut yapay zekâ yasak olduğu için asistansız çalışan banka yazılımcısı → hızlı ve uyumlu (hem verimli hem bilgi güvenliğiyle barışık).

## Taslaklar
**A. Kablo çekili IDE (seçilen)** — açık IDE grisi #EEF0F2, mürekkep #1B1F24, banka laciverti #0F3D63, öneri amberi #B87503 / #FFF1D6, onay yeşili #1F7A4D. JetBrains Mono (kod, logo, rakamlar) + IBM Plex Sans (kurumsal, mühendislik dili). Hero: sola başlık "kablo çekili" mono vurgulu, sağda kısa açıklama; altta tam genişlik IDE: dosya ağacı, EFT limit doğrulayıcı Java kodu, amber gölge öneri, sağ panelde "giden veri 0 B", altta lacivert durum çubuğu. Sıra: IDE → bilgi güvenliği denetim çıktısı → hız → ne yapar (açıklama/test/inceleme/kurum kuralları) → geliştirici alıntısı → kurum lisansı (pilot + kurum) → SSS.
**B. Koyu terminal / hacker** — siyah zemin + yeşil; "siyah + asit yeşili" varsayılanı ve banka uyumuna aykırı, "yasak işler yapan" hissi.
**C. Kurumsal uyum broşürü** — beyaz + lacivert, kalkan ikonları, sertifika şeridi; BG ekibine konuşur ama geliştiricinin "hızlı" ihtiyacına değil.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Toplam |
|---|---|---|---|---|---|---|---|
| A | 5 | 5 | 4 | 4 | 5 | 4 | 27 |
| B | 4 | 3 | 3 | 2 | 3 | 2 | 17 |
| C | 3 | 3 | 4 | 3 | 3 | 2 | 18 |

## Uyum puanı — sayfa v1.1
1 Tanınabilirlik: 5 — kanıt: tam genişlik IDE, EFT/GUNLUK_LIMIT kodu, "çevrimdışı" sekmesi: kurum içi kod asistanı, banka bağlamı.
2 Geliş hali:     5 — kanıt: ilk ekranda öneri + "giden veri 0 B" paneli ve durum çubuğu; yasak sorununa doğrudan cevap.
3 Yolculuk:       4 — kanıt: IDE → BG denetimi → hız → kullanım → alıntı → pilot; "hız" bölümü ile durum çubuğu mesajı kısmen tekrar.
4 Palet/doku:     4 — kanıt: açık IDE grisi + banka laciverti kurumsal ve konuya uygun; amber öneri vurgusu ürüne özgü ama palet tek başına "banka" demiyor.
5 Ses:            5 — kanıt: "para için double kullanma", "Loglarda TCKN maskele", "bir toplantıda geçti".
6 Varsayılan:     4 — kanıt: üçlü istatistik şeridi (140 ms / ~8 sn / 0) SaaS sayaç kalıbına yakın.
Toplam: 27/30 → eşik geçildi. En düşük: palet/doku ve yolculuk (4).

## Revizyon
- v1.1: `pre` içindeki satır sonları blok satırların arasına boş satır ekliyordu (çift aralıklı kod) → `pre{white-space:normal}`, satırlar kendi `white-space:pre`'sini koruyor. Gölge öneri satırlarındaki renkli sözdizimi griye çekildi ki "henüz kabul edilmemiş" okunsun; dosya ağacı taşması kesildi.
