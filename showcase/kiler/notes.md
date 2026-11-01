# Kiler — tasarım notları

**Fiziksel dünya:** Cumartesi pazar dönüşü: kese kâğıdı (kraft), termal market fişi, buzdolabının sebzeliği; perşembe günü sararıp çöpe giden maydanoz demeti.
**Geliş → çıkış:** Her hafta çürümüş maydanoz atan, israftan utanan çift → tutumlu, vicdanı rahat.

## Taslaklar
### A — Fiş ve raf (seçildi)
- Dünya: kese kâğıdı zemin, termal fiş + son gün damgaları, buzdolabı rafı, akşam tabağı
- Palet: #D6BF98 kese kâğıdı · #FCFCF8 termal fiş · #2A2824 fiş mürekkebi · #356F33 maydanoz · #B83A26 domates / son gün · #EBC93E limon
- Tipografi: Alegreya (ev mutfağı, menü serif'i, kalın) + Alegreya Sans (gövde) + Courier Prime (fiş)
- Tempo: orta; fiş solda eğik, raf + menü sağda
- Doku: kraft kâğıt noktası, fişin zikzak kopma kenarı, damga
- Hareket: yalnız gün seçici: raf çubukları kısalır/renk değişir, kullanılan ürünün üstü çizilir, akşam menüsü değişir
- Ses: mahcubiyeti hafifleten, mutfak dili: "Maydanoz bu hafta çöpe gitmiyor." · "Çöpe giden para da bir fiştir." · "İşte o maydanoz. Bu akşam bitiyor, çöpe değil tencereye."
- Bölümler: hero (fiş + raf + günün menüsü) → nasıl görür (kamera, fiş, dokunuş) → çöp defteri (Ekim → Kasım) → kilerin sırrı (gizlilik) → çift alıntısı + fiyat etiketi → SSS
- An: Pzt→Cum gün seçici; çarşamba "maydanozlu bulgur" çıkar, cuma "çöpe giden: 0 ₺"
```
Maydanoz bu hafta çöpe gitmiyor.        [iPhone][Android]
┌fiş─────────┐ ┌Buzdolabında şu an [Pzt][Sal][Çar]…┐
│MAYDANOZ [Çar]│ │ tavuk ▓▓░ son gün  dereotu ▓▓▓     │
│TAVUK    [Pzt]│ │ ( tabak ) Fırında limonlu tavuk…   │
└vvvvvvvvvvv┘ └────────────────────────────────────┘
```
### B — Buzdolabı içi (soğuk beyaz-mavi)
- Temiz, buz mavisi; tazelik iyi ama "vicdan" ve ev sıcaklığı yok, beyaz eşya markası gibi.
### C — Anneannenin kileri
- Kavanoz etiketleri, el yazısı, ahşap raf; nostaljik ve sıcak, ama bugünün çalışan çifti ve market fişi dünyasıyla uyuşmuyor.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top |
|---|---|---|---|---|---|---|---|
| A Fiş ve raf | 5 | 4 | 5 | 4 | 5 | 3 | 26 |
| B Buzdolabı içi | 3 | 3 | 4 | 3 | 4 | 3 | 20 |
| C Anneannenin kileri | 4 | 3 | 3 | 4 | 4 | 2 | 20 |
Seçim: A. Risk: sıcak zemin + serif "varsayılan AI paleti"ne yaklaşabilir → zemin krem değil kraft kâğıdı, fiş ve damgalar baskın.

## Sayfa puanı — v1 → v1.1
v1'de fiş damgaları fiyatların üstüne biniyordu; damga ayrı sütuna alındı. "Bugün son gün" çubuğu yeşil görünüyordu; renk kuralı düzeltildi (son gün kırmızı, yarı ömür altı turuncu). Veri tutarlılığı: lavaş ve süt son günleri menüyle eşleştirildi.

## Uyum puanı — sayfa v1.1
1 Tanınabilirlik: 5 — kanıt: termal fiş + son gün damgaları + raf çubukları + tabak; metinsiz "mutfak/israf takibi".
2 Geliş hali:     4 — kanıt: başlık utanca doğrudan cevap; ama çiftin "bu hafta ne atacağız" sorusu raf çubuklarında, ilk bakışta değil.
3 Yolculuk:       5 — kanıt: bu hafta → nasıl → geçen ayın çöpü (yüzleşme) → gizlilik → "içimiz rahat" alıntısı.
4 Palet/doku:     4 — kanıt: kese kâğıdı, fiş kâğıdı, maydanoz yeşili, domates kırmızısı; sıcak zemin + serif yine de varsayılana yakın bir aile.
5 Ses:            5 — kanıt: "Semt pazarı + market 822,30", "biri çöpü dökerken öbürü bakmıyordu", "koklamak yine sizin işiniz".
6 Varsayılan:     3 — kanıt: sıcak zemin + serif başlık kombinasyonu ve "nasıl görür" üç eşit sütun.
Toplam: 26/30 → eşik geçildi. En düşük: varsayılan kokusu (3).

## Bağımsız değerlendirme (ayrı agent) — sayfa v1.1
Tanın. 4 · Geliş 4 · Yolculuk 3 · Palet 4 · Ses 5 · Varsayılan 3 = **24/30** (sınırda). Not: "'Kiler üç yerden bakar' gri kutularda jenerik ikonlar, yolculuğa bir şey eklemiyor"; kraft zemindeki küçük yazılar zayıf.

## Revizyon 1 (kadran: tempo — en düşük yolculuk)
"Üç yerden bakar" bölümü kaldırıldı; girdi bilgisi tek satırla fişin altına gömüldü ("Fiş yoksa sesli not ya da tezgâh fotoğrafı…"). Sıra artık: bu hafta → çöp defteri (yüzleşme) → kilerin sırrı → içimiz rahat. Kraft üstündeki küçük metinler mürekkep rengine çekildi.

## Uyum puanı — sayfa v2
1 Tanın. 5 · 2 Geliş 4 · 3 Yolculuk 5 · 4 Palet 4 · 5 Ses 5 · 6 Varsayılan 3 (sıcak zemin + serif, iki sütun SSS)
Toplam: 26/30. En düşük: varsayılan kokusu (3).

## Bağımsız yeniden değerlendirme (ayrı agent) — revizyon sonrası
Tanın. 5 · Geliş 5 · Yolculuk 3 · Palet 4 · Ses 5 · Varsayılan 4 = **26/30**. Not: gizlilik bölümü çiftin derdine doğrudan cevap değil (brifin "kanıt anı" gereği korundu); masaüstü hero sağ üstü boş.
Son puan: 26/30 (bağımsız puan esas). En düşük: Duygu yolculuğu.
