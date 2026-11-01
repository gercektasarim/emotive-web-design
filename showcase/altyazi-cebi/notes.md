# Altyazı Cebi — tasarım notları

**Fiziksel dünya:** pazar akşamı aile sofrası; lambanın sarı ışığı, demli çay rengi, ortada sofra bezi, beş kişinin üst üste konuşması; televizyon altyazısının siyah kutusu.
**Geliş → çıkış:** Sofrada esprileri geç yakalayan, "ne dedi?" diye sormaktan yorulmuş, işitme cihazı yetmeyen kişi → **sohbete dahil**, herkesle aynı anda gülen biri.

## Taslaklar
**A. Lamba altındaki sofra** — çay kahvesi #231915, sofra bezi #FBF4EA, lamba amberi #F0B44C; konuşmacı renkleri nane/gök/gül. Red Hat Display (tok, yuvarlak başlık) + Red Hat Text (altyazı okunurluğu). Orta tempo, yumuşak 16-28px köşe. An: yukarıdan sofra + canlı altyazı kutusu, konuşanın koltuğu halkalanır, yazı boyu A/A/A. Ses: "siz", aile içi gerçek cümleler. Sıra: hero sofra demo → kaçan anlar (açık zemin) → masaya koy, 3 adım → mutfakta kalır (gizlilik dökümü) → sofradan sonra → tek seferlik fiyat → söz → SSS.
```
[CC Altyazı Cebi]                         (Fiyat) (14 gün ücretsiz dene)
Sofradaki her cümle,                       (Android için indir)
kimin söylediğiyle birlikte.               (iPhone için indir)
     Dayım ●        ● Efe
 Annem ● (  sofra · telefon  ) ● Selin
 ┌ Annem  Hüsnü, sen de biraz daha dolma al...  ┐
 └ [A][A][A][Durdur]      Wi-Fi kapalı · ses kaydedilmiyor
```
**B. Erişim hakkı kampanyası** — STK dili, "İşitme engelli herkes sohbete dahil olmalı", mavi-sarı, rakam sayaçları, dernek iş birliği önde.
**C. Altyazı stüdyosu** — siyah beyaz yayın altyazısı estetiği, monospace zaman kodu, "SRT" kokusu; teknik ve soğuk.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top. |
|---|---|---|---|---|---|---|---|
| A | 4 | 5 | 4 | 5 | 5 | 4 | **27** |
| B | 2 | 3 | 3 | 2 | 3 | 3 | 16 |
| C | 3 | 4 | 3 | 3 | 3 | 4 | 20 |
Seçim **A**; B'den dernek üyelerine ücretsiz kod satırı alındı (ref2 nonprofit). En düşük beklenen: yolculuk.

## Sayfa puanı — v1
Hero çok uzundu: altyazı kutusu 1280×900'de katın altında kalıyordu (geliş hali 4). → v2: başlık boyu ve sofra çizimi küçültüldü, demo ilk ekrana girdi.

## Sayfa puanı — v2
```
1 Tanınabilirlik: 4 — kanıt: yukarıdan sofra + renkli isimli altyazı satırları "grup sohbeti altyazısı" diyor; metinsiz de okunur
2 Geliş hali:     5 — kanıt: ilk ekranda canlı aile sohbeti, kim konuşuyor halkası, yazı boyu düğmeleri, "Wi-Fi kapalı"
3 Yolculuk:       4 — kanıt: kaçan anlar → nasıl → gizlilik → fiyat iyi; "sofradan kalkınca" kartları ek bilgi, yolculuğa az katkı
4 Palet/doku:     4 — kanıt: çay/lamba/sofra bezi tonları konudan; yuvarlak kart dili biraz genel uygulama
5 Ses:            5 — kanıt: "Mutfakta konuşulan mutfakta kalır.", tartı esprisi, "38 net" — aile sesi
6 Varsayılan:     4 — kanıt: tek tell: hap düğmeler + eşit dört kart satırı
Toplam: 26/30 → eşik geçildi. En düşük: yolculuk / palet / tanınabilirlik (4).
```
## Erişilebilirlik
Altyazı akışı otomatik ilerler ama 2 turdan sonra durur ve "Durdur" düğmesi var (WCAG 2.2.2); ekran okuyucuyu boğmasın diye `aria-live="off"`. Yazı boyu düğmeleri `aria-pressed` + etiket. 48px+ hedefler, 3px amber odak, kontrast gövde 15.7:1, ikincil 8.9:1, konuşmacı renkleri ≥ 9:1.
