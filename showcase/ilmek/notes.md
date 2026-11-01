# İlmek — tasarım notları

**Fiziksel dünya:** Akşam salonu, dizi açık; kucakta yarım hırka, kayın şişler, vişne ve lacivert yün yumakları, örgü sepeti, dergiden kesilmiş desen şeması, yünün banderolü (etiketi). Tempo: yavaş, tekrar eden, sayma.
**Geliş → çıkış:** Torununa hırka örerken sırayı kaçıran anneanne ve ilk kazağında ters ilmekte bocalayan genç → sayma yükünden kurtulmuş, hatayı erken yakalamış, sabırlı keyif.

## Taslaklar
**A. Örgü tezgâhı** — angora #F7EEF0, vişne yün #A3324F, lacivert yün #26355E, kayın şiş #D9B98C, metin #33232A. Young Serif (70'lerin örgü kitapçığı kapağı) + Atkinson Hyperlegible (az gören okur için tasarlanmış gövde, 20px). Rahat tempo, yuvarlak köşe (yün yumuşaklığı). Hero: uygulama ekranı üç bölmeli: dev sıra sayacı, şişte asılı örgü parçası, desen şeması. An: "Bir sıra ör" → kumaş büyür, sayı sesli söylenir; 48. sırada ters ilmek yakalanır, "Bu sırayı sök". Ses: "Sen ör. Sırayı İlmek saysın." Sıra: tezgâh → iki kişi (anneanne / yeni başlayan) → kamera yalnız şişi görür → el işi defteri (yün banderolleri) → sözler → fiyat → SSS.
**B. Desen kitapçığı** — kareli şema kâğıdı, el yazısı notlar, portfolyo gibi bitmiş işler galerisi; "işler" güzel ama sayma derdine ilk ekranda cevap vermiyor.
**C. Örgü sepeti** — hasır dokusu, yumak illüstrasyonları, sıcak kahve-krem; sevimli ama krem+serif varsayılanına kayıyor ve okunurluk zayıf.

| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Toplam |
|---|---|---|---|---|---|---|---|
| A | 5 kumaş + şema | 5 sayaç ilk ekranda | 4 | 4 | 5 | 4 | **27** |
| B | 4 | 3 | 4 | 4 | 4 | 3 | 22 |
| C | 4 | 3 | 3 | 3 | 4 | 2 | 19 |

Seçim: **A**; B'nin "işler" fikri yün banderolü biçiminde el işi defterine taşındı. En düşük: yolculuk/palet.

## Sayfa puanı — v1
1 Tanınabilirlik: 4 — şişte örgü var ama ilmekler kalp gibi okunuyor; kumaş değil kalp ızgarası
2 Geliş hali: 5 — dev "47" sayacı ve sesli söyleme ilk ekranda
3 Yolculuk: 4 — iki kişi kartları biraz kalıp; gerisi akıyor
4 Palet/doku: 4 — yün renkleri konudan; angora pembe zemin yumuşak
5 Ses: 5 — "Torunum telefonu koydu; şimdi o sayıyor, ben çay içiyorum."
6 Varsayılan: 3 — `hidden` düğme görünüyordu (uygulama hatası), iki fiyat kartı, yuvarlak kartlar
Toplam 25. Revizyon (doku + hata): ilmekler dar, iç içe geçen V'lere çevrildi (jarse dokusu, 17 sıra); `[hidden]` kuralı eklendi; mobilde sayaç başlığı tam satır.

## Sayfa puanı — v2
1: 5 — gerçek jarse kumaşı, lacivert şerit, burgu ilmekleri · 2: 5 · 3: 4 · 4: 4 · 5: 5 · 6: 4
**Toplam 27/30**, en düşük: yolculuk / palet / varsayılan (4).
Etkileşim Chrome'da tıklanarak denendi: 48. sırada uyarı çıkıyor, "Bu sırayı sök" sonrası 48 temiz örülüyor, hata hücresi siliniyor. 390px: scrollWidth 390.
