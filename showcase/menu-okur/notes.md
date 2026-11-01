# Menü Okur — tasarım notları

**Fiziksel dünya:** Tokyo'da bir izakaya: kapıda lacivert noren perdesi (yarıklı), içeride duvara asılmış hinoki tahta şeritlerde dikey el yazısı menü (o-shinagaki), fiyatlar ¥; kırmızı fener, koyu ahşap duvar, tezgâh.
**Geliş → çıkış:** Menüyü okuyamayan, helal ve yer fıstığı alerjisi yüzünden 7-Eleven sandviçine mahkûm hisseden gezgin → maceracı ama güvende ("yeni bir şey denedim, içinde ne olduğunu biliyordum").

## Taslaklar
**A. Noren ve duvar menüsü** — washi #F3EFE7, noren laciverdi #22355A, fener kırmızısı #C7372F, hinoki #D2AE84, mürekkep #1B1A1D; durum renkleri uygun yeşil / sor amber / uygun değil kırmızı. Instrument Sans (Türkçe arayüz, nötr ve çağdaş) + Noto Serif JP (menünün kendi dili, dikey yazım). Hero: noren bandı başlık, hemen altında gerçek duvar menüsü; her şeridin altında AR etiketi. An: profil (helal, fıstık, glütensiz, vejetaryen) değiştikçe 7 şeridin etiketi değişir; seçili yemeğin nedeni ve garsona gösterilecek Japonca cümle yeniden kurulur. Ses: "sen", meraklı, yemek bilen bir arkadaş.
**B. Neon Shinjuku** — gece, neon pembe/mavi, kalabalık tabelalar; heyecan var, güvende hissi yok; "siyah zemin + neon" varsayılanı.
**C. Pasaport / seyahat belgesi** — krem kâğıt, damgalar, alerji kartı; güvenli ama yemeğin iştahı ve maceranın yeri yok.

| Ölçüt | A | B | C |
|---|---|---|---|
| Tanınabilirlik | 5 | 4 | 3 |
| Geliş hali | 5 | 3 | 4 |
| Yolculuk | 4 | 3 | 4 |
| Palet/doku | 5 | 3 | 3 |
| Ses | 4 | 4 | 4 |
| Varsayılan | 4 | 2 | 3 |
| **Toplam** | **27** | 19 | 21 |

Seçim A. C'nin "garsona göster" kartı fener kırmızısı kart olarak alındı.

## Sayfa puanı — v1 (revizyon sonrası)
1 Tanınabilirlik: 5 — noren yarıkları, dikey Japonca tahta şeritler ve ¥ fiyatlar: Japon lokantası menüsü + çeviri etiketi.
2 Geliş hali: 5 — ilk ekranda menü ve profil; seçili yemek için "Helal: uygun değil, domuz kemiği suyu" ve hazır Japonca soru.
3 Yolculuk: 4 — duvar menüsü → ne olduğunu anlatır (tantanmen fıstık uyarısı) → bodrum katta internetsiz → okuyabildikleri → alıntı → fiyat → SSS (alerji sorumluluğu açık).
4 Palet/doku: 5 — noren laciverdi, hinoki, fener kırmızısı; başka bir çeviri uygulamasına giydirilemez.
5 Ses: 4 — "Bulanık beyaz rengi tavuk suyuna benzer, ama değildir", "katsuobushi nashi de"; bazı bölümler nötr.
6 Varsayılan: 4 — krem zemin + kırmızı aksan klişeye yakın, ama washi ve fener kaynaklı; serif yalnız Japonca için.
Toplam 27/30. En düşük: yolculuk / ses / varsayılan (4).

## Revizyonlar
- Şeritlerdeki ¥ fiyatlar AR etiketinin altında kalıyordu → alt dolgu.
- Fiyat kartında iç içe kutu (genel `div` seçicisi) → `> div`.
- Mobilde 3 sütun 7 şeridi dağınık bırakıyordu → 4 sütun, küçük yazı.
- Hero'ya mağaza düğmeleri eklendi; masaüstünde şerit yüksekliği azaltıldı (etiketler ilk ekrana yaklaştı).
- Hiyayakko helal durumu "uygun" → "sor" (bazı soya soslarında alkol).
