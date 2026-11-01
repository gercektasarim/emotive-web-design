# Duygusal Uyum Puan Kartı (Fit Scorecard)

Hem yön taslaklarını (adım 3) hem bitmiş sayfayı (adım 6) aynı kartla puanla.
Aynı kart iki kez kullanıldığı için taslakta vaat edilenle ekranda çıkan
karşılaştırılabilir: taslak 27/30 alıp sayfa 20/30 alıyorsa sorun uygulamadadır,
yön doğrudur.

## Puanlama kuralları

- Altı ölçüt, her biri 1-5. Toplam 30.
- **Her puan bir kanıt cümlesiyle gelir**: ekranda hangi somut öğe bu puanı
  veriyor/düşürüyor. Kanıtsız puan geçersizdir ("iyi görünüyor" kabul değil).
- Puanı mümkünse **sayfayı yapmayan** biri versin: `Agent` aracı varsa ayrı bir
  değerlendirici agent'a yalnız şunları ver: ekran görüntüsü (ya da HTML), kategori
  dosyası, duygu planındaki "giriş hali → çıkış hali" cümlesi ve bu kart. Tasarım
  gerekçelerini verme; gerekçe bilen değerlendirici gerekçeyi puanlar, sayfayı değil.
  Agent yoksa kendin puanla — başka bir yol (CLI oturumu, harici araç) arama,
  bu adım ucuz olmalı. Önce sayfayı ekran görüntüsünden (Playwright/Chrome varsa)
  ya da en azından HTML'i yeniden okuyarak, planı hatırlamadan, "ilk kez gören
  biri" gibi bak.
- Eşik: **toplam ≥ 24 ve hiçbir ölçüt < 3**. Altındaysa revize et.
- Revizyon kadran kadran yapılır: en düşük ölçütün kadranını (sıcaklık/ağırlık/
  tempo/doku/hareket/ses) değiştir, diğerlerine dokunma, yeniden puanla.
  En fazla 2 revizyon turu; hâlâ eşiğin altındaysa yön yanlıştır, adım 3'e dön ve
  ikinci sıradaki taslağı dene.

## Ölçütler

| # | Ölçüt | 1 | 3 | 5 |
|---|---|---|---|---|
| 1 | **Tanınabilirlik** — logo ve tüm metin kapatılsa bu sitenin *ne iş* yaptığı palet, doku ve tipografiden anlaşılır mı? | Herhangi bir iş olabilir | Sektör anlaşılır (bir restoran) | Niş anlaşılır (mahalle lokantası, fine dining değil) |
| 2 | **Geliş haline cevap** — ziyaretçinin geldiği haldeki ilk ihtiyacı ilk ekranda karşılanıyor mu? | İlk ekran pazarlama sloganı | İhtiyaç sayfada var ama ilk ekranda değil | İlk ekran doğrudan o ihtiyaca cevap (aç → saat/telefon; endişeli → randevu/güven) |
| 3 | **Duygu yolculuğu** — bölüm sırası giriş halinden hedef duyguya bir yol kuruyor mu? | Sektör şablonunun sırası aynen | Sıra mantıklı ama gereksiz bölümler var | Her bölüm yolculukta bir adım; gereksiz bölüm yok |
| 4 | **Konudan gelen palet/doku** — renkler ve yüzeyler konunun fiziksel dünyasından mı? | Varsayılan AI paleti ya da sektör klişesi | Konuya uyuyor ama aynı sektördeki herkese de uyar | Bu işletmenin malzemesi/ışığı; başka bir rakibe giydirilemez |
| 5 | **Ses** — metin o işi yapan insan gibi mi konuşuyor; içerik gerçekçi mi? | Lorem/jenerik slogan | Gerçekçi ama nötr "web metni" | Kişi/işletme sesi duyuluyor; isimler, fiyatlar, saatler inandırıcı |
| 6 | **Varsayılan kokusu** — emotion-framework §4 ve frontend-design tell listesindeki kalıplardan kaç tanesi *konu istemeden* kaldı? | 4+ tell | 2-3 | 0-1 |

## Rapor formatı

```
## Uyum puanı — [taslak adı | sayfa v1 | sayfa v2]
1 Tanınabilirlik: 4 — kanıt: fayans dokusu + tahta menü lokanta diyor; fine/mahalle ayrımı belirsiz
2 Geliş hali:     5 — kanıt: yapışkan çubukta "şu an açık, 21:00'e kadar" + telefon
3 Yolculuk:       4 — kanıt: tahta → ilk defa geliyorsanız → hafta → aile; "haftanın yemekleri" uzatıyor
4 Palet/doku:     3 — kanıt: salça kırmızısı iyi; zemin hâlâ genel krem, fayans dokusu belli belirsiz
5 Ses:            5 — kanıt: "Ekmek ve çay bizden. Kart geçer."
6 Varsayılan:     4 — kanıt: tek tell: her bölümde sol hizalı aynı başlık ölçeği
Toplam: 25/30 → eşik geçildi. En düşük: palet/doku → revizyon önerisi: zemini fayans
çizgisiyle belirginleştir, krem yerine duvar beyazı (#EFEDE6 → #F2F0EA + 1px ızgara).
```

## Yön taslaklarını puanlarken (adım 3)

Taslaklar henüz sayfa değil: her biri bir token seti + bölüm sırası + tek hero
eskizi. Ölçüt 1, 4, 6 taslaktan puanlanabilir; 2, 3 bölüm sırasından; 5 örnek
başlık ve 2-3 metin parçasından. Üç taslak için üç puan satırı yaz, en yükseği seç;
iki taslak yakınsa güçlü kadranlarını birleştir ve bunun yeni bir taslak olduğunu
söyle (ör. "A'nın paleti + B'nin bölüm sırası").
