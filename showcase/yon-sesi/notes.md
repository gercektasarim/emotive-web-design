# Yön Sesi — tasarım notları

**Fiziksel dünya:** büyük hastane koridoru: beyaz duvar, gri linolyum, zemindeki yeşil yön çizgisi, lacivert yönlendirme tabelaları, "B-214" kapı numaraları, sıra numaratörü; anonslar ve kalabalık.
**Geliş → çıkış:** Hastane koridorlarında poliklinik arayan, her köşede birine kapı sormak zorunda kalan görme engelli emekli (ve kurulumu yapacak torunu) → **yolunu bilen**.

## Taslaklar
**A. Zemin çizgisi ve tabela** — duvar beyazı, linolyum #E6E8E3, tabela laciverti #0B2545, zemin çizgisi yeşili #00875A (koyusu #006B47 metinde), kat numarası sarısı #FFD23F (yalnız lacivert üstünde). Overpass (otoyol/yönlendirme tabelası yazısından türemiş) + Overpass Mono (sıra no, saat yönü). Büyük gövde 20px, 60px düğmeler, başlıklar tabela levhası gibi oklu. An: kat planında yeşil rota adım adım dolar, baş-üstten çizilmiş kafanın etrafında ses yayı döner ("saat 9 · ses sol kulakta"), son adımda sıra ekranı okunur. Ses: sakin "siz", saat yönü + adım. Sıra: hero rota → yönlü ses → tabela okuma → torun kurulumu → bodrum kat (internetsiz) → ücret → söz → SSS.
```
[Yön Sesi]                       Kurulumda yardım 0 850 000 09 68
════════════ yeşil zemin çizgisi ════════════
Kardiyoloji polikliniği   ┌ Hedef: B-214 Kardiyoloji     Sıra no 37
nerede? Kulağınız         │ [Danışma][Eczane][Asansör][B-210][B-214]
söylesin.                 │ ●━━━━━━━━━┃━━━━━━━━━━━━━━┃
[Telefona indir]          │ (baş+ses yayı) Asansörler solunuzda...
[Kurulumu kim yapar?]     └ [Sonraki adım]          Adım 2/5
```
**B. Bağımsız yaşam hikâyesi** — sıcak, emekli bir postacının günü; fotoğraf benzeri illüstrasyon, nonprofit tonu; ürünün "koridorda yön" işini geç gösteriyor.
**C. Akıllı bina altyapısı** — beacon/haritalama, B2B hastane yönetimine satış dili, koyu mod dashboard; ziyaretçinin kendisine konuşmuyor.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top. |
|---|---|---|---|---|---|---|---|
| A | 5 | 5 | 4 | 5 | 5 | 4 | **28** |
| B | 3 | 3 | 4 | 3 | 4 | 4 | 21 |
| C | 3 | 2 | 3 | 2 | 2 | 3 | 15 |
Seçim **A**; B'den emekli postacı alıntısı. Ref2 health-medical: telefon ilk ekranda, büyük gövde, korkuyu azaltan SSS.

## Sayfa puanı — v1
"Kulak" simgesi (siyah daire + yeşil yay) bomba gibi okunuyordu; hero zeminindeki %70 gri kesim CTA'nın arkasında rastgele bir bant oluşturuyordu. Tanınabilirlik 4, varsayılan 3.
## Sayfa puanı — v2 (simge baş-üstten kafa + kulaklar + yön yayı; hero zemini düz)
```
1 Tanınabilirlik: 5 — kanıt: kat planı, yeşil zemin çizgisi, lacivert tabela levhaları: "hastane içi yönlendirme" metinsiz okunur
2 Geliş hali:     5 — kanıt: üstte kurulum telefonu; ilk ekranda gerçek bir rota ve sesli talimat
3 Yolculuk:       4 — kanıt: rota → ses → tabela → kurulum → bodrum → ücret akıyor; "tabela" ve "rota" kısmen tekrar
4 Palet/doku:     5 — kanıt: renkler hastane yönlendirme sisteminin kendisi; başka sektöre giydirilemez
5 Ses:            5 — kanıt: "MR bodrum katta. Orada telefon çekmez. Yön Sesi çalışır." / "Şu an 34. Sizin numaranız 37."
6 Varsayılan:     4 — kanıt: tabela-başlık her bölümde tekrar ediyor (konu istiyor ama tekdüze); dört eşit pano kartı
Toplam: 28/30 → eşik geçildi. En düşük: yolculuk / varsayılan (4).
```
## Erişilebilirlik
Adım talimatı `aria-live`; "Sonraki adım" tek düğme, döngülü. Odak halkası sarı + lacivert gölge (beyaz ve lacivert zeminde görünür). Gövde 20px, düğmeler 56-60px, SSS özetleri 72px. Kontrast lacivert/beyaz 15.4:1, koyu yeşil 6.6:1; parlak yeşil yalnız şekil.
