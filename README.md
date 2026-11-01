# emotive-web-design

İçeriğine duygusal olarak yakın hissettiren web sitesi tasarımı için bir Claude skill'i.
*A Claude skill for designing websites that feel like they belong to their subject.*

Bir fırının sitesi fırın gibi, bir diş kliniğinin sitesi diş kliniği gibi hissettirmeli.
Bu skill, ThemeForest'in en çok satan HTML şablonlarının (400+ öğe envanter, 55 derin
inceleme) kategori kategori analizinden çıkan sayfa yapılarını bir **duygu → tasarım
çeviri modeli** ve **puanlı taslak/revizyon döngüsü** ile birleştirir.

## Kurulum

```bash
npx skills add gercektasarim/emotive-web-design
```

Claude.ai'de: bu depodaki `SKILL.md` dosyasını ya da paketlenmiş `.skill` dosyasını
**Save skill** ile profiline ekle.

## Nasıl çalışır

```
1 Sor → 2 Referans oku → 3 Taslaklar (2-3) → puanla → seç
      → 4 İçerik → 5 Kodla → 6 Gör + puanla → eşik? ─ hayır → kadranı düzelt (≤2 tur)
                                                 └ evet → teslim
```

1. **Sorar**: kategori, işletme, ziyaretçinin geliş hali, hedef duygu, eldeki malzeme.
2. **Kategori referansını okur** (`references/categories/`): 16 kategori; her birinde
   ziyaretçi hali, ThemeForest bölüm sırası, görsel dil, imza bileşen, CTA'lar ve o
   kategorinin bilinçli reddedilecek "varsayılanı".
3. **2-3 yön taslağı** çıkarır, `references/fit-scorecard.md` ile puanlar, en uygununu seçer.
4. Gerçekçi içerik yazar (lorem yok), kodlar.
5. Bitmiş sayfanın ekran görüntüsünü alıp **aynı puan kartıyla** yeniden değerlendirir;
   eşiğin (24/30, hiçbir ölçüt < 3) altındaysa yalnız zayıf kadranı düzeltir, en fazla
   2 tur; tutmazsa ikinci taslağa döner.

## Dosyalar

| Dosya | İçerik |
|---|---|
| `SKILL.md` | Akış ve kurallar |
| `references/emotion-framework.md` | Duygu → sıcaklık/ağırlık/tempo/doku/hareket/ses çevirisi, 9 duygu profili, varsayılan uyarıları |
| `references/fit-scorecard.md` | 6 ölçütlü puan kartı, eşik ve revizyon kuralı |
| `references/categories/*.md` | 16 kategori referansı |
| `references/research-summary.md` | Araştırma bulguları ve kategori varsayılanları tablosu |
| `references/inventory.md` | 278 öğelik ham şablon envanteri |
| `evals/` | Test istemleri |

## Örnek istem

> Kadıköy'de iki hekimli küçük bir diş kliniği için anasayfa tasarla. Hastaların çoğu
> diş hekiminden korkan yetişkinler ve çocuklarını getiren anneler.

Skill önce eksik bilgileri sorar (ya da "sormadan üret" denirse varsayımlarını söyler),
üç yorum taslağı çıkarıp puanlar, seçileni kodlar, ekran görüntüsünden yeniden puanlar
ve teslimde seçilen yorumu, elenenleri, son puanı ve varsayımları bir paragrafla söyler.

## Lisans

MIT
