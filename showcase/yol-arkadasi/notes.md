# Yol Arkadaşı — tasarım notları

**Fiziksel dünya:** Bayram gecesi D650, Afyon–Antalya arası. Sodyum lamba turuncusu, asfalt, şerit boyası, otoyol yeşili tabela, mavi "dinlenme tesisi" levhası; arka koltukta uyuyan çocuklar, susmuş radyo.
**Geliş → çıkış:** Gece direksiyonda yorgunluğunu küçümseyen, ailesinin sorumluluğunu taşıyan baba → "ailemi sağ salim götürürüm, yanımda uyanık biri var".

## Taslaklar
**A. Ön camdan gece** — asfalt #0D1117, sodyum #F2A33A, şerit beyazı #ECEEEA, otoyol yeşili #0F6B3B, servis mavisi #1C5FA8. Overpass (otoyol tabelası "Highway Gothic" akrabası) + Overpass Mono (gösterge). Hero: perspektif yol + gerçek tabela + telefonun HUD'u. An: canlı göz kapağı demosu. Ses: sakin yol arkadaşı, "siz". Sıra: hero → 03.00 eğrisi → demo → kamera kanıtı → mola tabelaları → alıntı → fiyat → SSS.
**B. Aile arabası** — sıcak iç mekân: koltuk kumaşı grisi, emniyet kemeri kırmızısı, sabah güneşi; hero'da arka koltuk illüstrasyonu ve "Sabah Kaş'tasınız". Duygu güçlü ama ürünün ne yaptığını geç söylüyor.
**C. Gösterge paneli** — tamamen bir araç kümesi (kadranlar, kırmızı uyarı lambaları), sıkı bilgi yoğun. Teknik, ama korku/alarm tonuna kayma riski yüksek.

| Ölçüt | A | B | C |
|---|---|---|---|
| Tanınabilirlik | 5 | 3 | 4 |
| Geliş hali | 4 | 3 | 4 |
| Yolculuk | 4 | 4 | 3 |
| Palet/doku | 5 | 4 | 4 |
| Ses | 4 | 5 | 3 |
| Varsayılan | 4 | 4 | 3 |
| **Toplam** | **26** | 23 | 21 |

Seçim: A. B'den ses ödünç alındı (başlık "Arka koltukta herkes uyurken…" ve alıntı). En düşük beklenen: ses/yolculuk.

## Sayfa puanı — v1
1 Tanınabilirlik: 5 — perspektif şerit, yeşil mesafe tabelası ve mavi tesis levhası metinsiz de "gece otoyolu, sürücü" diyor.
2 Geliş hali: 4 — ilk ekranda göz takibi HUD'u, "görüntü kaydedilmez" ve 14 km tesis; ama kurulum/uyumluluk ancak SSS'de.
3 Yolculuk: 4 — riskli saat → kendin gör → kamera kaygısı → nerede durulur → aile alıntısı → fiyat; makul.
4 Palet/doku: 5 — sodyum lamba + otoyol tabelası renkleri, başka bir ürüne giydirilemez.
5 Ses: 4 — "Camı biraz aralayalım mı?", D650, Dinar çıkışı inandırıcı; bazı bölüm metinleri hâlâ nötr.
6 Varsayılan: 4 — koyu zemin + turuncu ve her bölümde mono kicker hafif kalıp.
Toplam 26/30 → eşik geçildi. En düşük: geliş hali / yolculuk / ses / varsayılan (4).

## Revizyonlar
- Hero yol çizgileri CTA'ların üstünden geçiyordu → kaçış noktası sağa (x≈880) kaydırıldı.
- Mobilde `.wrap` dolgusu hero üst boşluğunu eziyordu → yalnız yatay dolgu.
- Hero `100vh` tam sayfa görüntüsünde devleşiyordu → clamp(760px,100vh,940px).
- Mobilde yolculuk grafiği kendi kutusunda yatay kayar (sayfa kaymaz).
