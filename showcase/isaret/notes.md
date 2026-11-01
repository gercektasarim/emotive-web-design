# İşaret — tasarım notları

**Fiziksel dünya:** banka şubesi ve hastane danışması: sıra fişi, gişe camı, görevlinin aceleci konuşması, sizin elleriniz ve yüzünüz; bekleme salonunun floresan ışığı.
**Geliş → çıkış:** Gişede derdini anlatamayan, yıllarca bir yakınıyla gitmek zorunda kalmış Sağır birey → **duyulmuş**: görevli ona bakıyor, annesine değil.

## Taslaklar
**A. Gişenin iki yanı** — Sağır farkındalık ultramarini #262DB8, mürekkep #13142B, gişe camı lilası #E7E8FF, el eklem domatesi #FF6B4A (yalnız şekil), şeftali #FFD9CF (kurum kartı). Bricolage Grotesque (karakterli, ağır; "sesimizi yükseltiyoruz") + Public Sans (kamu tabelası netliği). Sıkı, sola hizalı. An: iki bölmeli gişe — solda el eklem iskeleti + TİD glos + Türkçe çıktı, camın öbür yanında görevlinin cümlesi ve işaret figürü; "Sonraki cümle" ile 4 adımlı kayıp kart konuşması. Ses: "siz", dürüst, hak bilinçli. Sıra: gişe demo → alan sözlükleri (sekme) → TİD dil bilgisi farkı → Sağır ekip → gizlilik + "neyi yapamaz" → bireysel ücretsiz / kurum gişe tableti → söz → SSS.
```
[İşaret]                              Nerelerde · Ekip · Kurumlar · Sorular
Gişenin iki yanı aynı dili konuşsun.                         ┌A-047┐
┌ Siz · TİD             ║ Gişe görevlisi · konuşma          └Gişe3┘
│ [el eklem iskeleti]   ║ [işaret figürü]
│ KART BENİM KAYIP...   ║ KİMLİK SİZ VERMEK...
└ “Kartımı kaybettim”   ║ “Kimliğinizi alabilir miyim?”
[Sonraki cümle] [Ücretsiz indir]   Adım 1/4
```
**B. Sağır topluluğun sesi** — STK/hak savunusu: büyük manifesto tipografisi, "Tercüman hakkı" kampanyası, gönüllü veri bağışı çağrısı; ürün ikinci planda.
**C. Klinik çevirmen** — hastane odaklı, açık mavi-beyaz, randevu metaforu; bankayı ve gündelik hayatı dışarıda bırakıyor.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top. |
|---|---|---|---|---|---|---|---|
| A | 5 | 5 | 4 | 4 | 5 | 4 | **27** |
| B | 3 | 2 | 4 | 3 | 4 | 3 | 19 |
| C | 3 | 4 | 3 | 2 | 3 | 3 | 18 |
Seçim **A**; B'den "Sağır ekiple" bölümü ve tercüman hakkı cümlesi alındı (ref2 nonprofit: güven ve şeffaflık).

## Sayfa puanı — v1
Kamera kutuları çok yüksekti; çeviri cümlesi ve "Sonraki cümle" 1280×900'de katın altında (geliş 4). Sıra fişindeki maske bozuk tek bir nokta bırakıyordu. → v2: kutu oranı 16/7.5, başlık küçültüldü, fiş sade kesik çizgili.

## Sayfa puanı — v2
```
1 Tanınabilirlik: 5 — kanıt: el eklem noktaları + gişe camı + sıra fişi; metinsiz "gişede işaret dili çevirisi" okunur
2 Geliş hali:     5 — kanıt: ilk ekranda kendi cümlesinin görevliye nasıl ulaştığı ve cevabın nasıl döndüğü
3 Yolculuk:       4 — kanıt: demo → kendi alanın → dil saygısı → ekip → gizlilik/sınırlar → ücret; ekip kartları biraz uzun
4 Palet/doku:     4 — kanıt: ultramarin Sağır farkındalık rengi ve cam çizgisi konudan; yine de mavi zemin teknoloji sitesine de yakın
5 Ses:            5 — kanıt: "Görevli bana baktı, anneme değil." / "Kurumun size tercüman sağlaması yasal hakkınız."
6 Varsayılan:     4 — kanıt: hap sekmeler ve eşit kişi kartları
Toplam: 27/30 → eşik geçildi. En düşük: palet/doku (4).
```
## Erişilebilirlik
Gerçek sekme deseni (ok tuşları, `aria-selected`, roving tabindex), adım sayacı `aria-live`, hareket animasyonu reduced-motion'da anlık, 52-56px hedefler, kontrast: beyaz/ultramarin 9.8:1, mürekkep/lila 15:1, domates yalnız dekoratif. "Sağır" büyük harfle, topluluğun tercih ettiği kullanım.
