# Sade Ekran — tasarım notları

**Fiziksel dünya:** büyük tuşlu telefonların renkli hızlı arama düğmeleri (yeşil ahize, kırmızı acil), annenin mutfakta duran telefonu; öbür uçta oğlun iş çıkışı baktığı uzaktan yönetim paneli. Akşam 20.00, yine çalan telefon.
**Geliş → çıkış:** Annesine akıllı telefon almış, her akşam telefonla "WhatsApp kayboldu" desteği veren oğul → **rahatlamış**: annesi arayınca artık yalnız sohbet ediyorlar.

## Taslaklar
**A. İki ekran: dört düğme + uzaktan panel** — kutu beyazı #F6F7F5, mürekkep #1D1F21; renk yalnız dört düğmede: ahize yeşili #1E7B45, mesaj moru #7A3FB0, fotoğraf sarısı #F2B705, acil kırmızısı #C62828. Rubik (yuvarlak, büyük düğme yazısı) + DM Mono (panel zaman damgaları, günlük). Sıkı, panel ızgarası (ref2 admin-app-ui: KPI satırı → öneri → grafik). An: panelde "Fotoğraflar üst sıraya çıksın" önerisi → Uygula → annenin ekranındaki düğmeler kayarak yer değiştirir; geri alınabilir. Ses: oğula "sen", akran dili. Sıra: hero konsol → destek araması günlüğü + 11→1 grafiği → bayramda 10 dk kurulum → ne görürsün / hiç görmezsin → yanlışlıkla olamayacaklar → fiyat (tek seferlik / kurulu telefon) → oğulun sözü → SSS.
```
[■■ Sade Ekran]                         Kurulum · Ne görürsün · Fiyat [Annem için kur]
Annenin telefonu dört düğme. Senin telefonun artık her akşam çalmıyor.
┌ Annenin ekranı   │ Annemin telefonu · Gönül Şahin        son eşitleme 4 dk
│ ┌20:04────────┐  │ [23 Ara][9 Mesaj][31 Fotoğraf][0 Acil]
│ │[Ara ][Mesaj]│  │ ┌ Öneri: Fotoğraflar üst sıraya ─ [Uygula][Böyle kalsın]
│ │[Acil][Foto ]│  │ └ akşam 19.30–21.00 ...
└ └─────────────┘  │ ▁▁▂▁▁▂▃▅▇█▅ saatlere göre
```
**B. Torun sevgisi** — sıcak aile fotoğrafları, "anneannemle görüntülü konuşma" duygusu; oğulun asıl derdi olan destek yükünü göstermiyor.
**C. Basit telefon mağazası** — e-ticaret, hazır telefon satışı, kampanya bandı; yapay zekâ ve panel geri planda kalıyor.

## Taslak puanları
| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Top. |
|---|---|---|---|---|---|---|---|
| A | 4 | 5 | 5 | 4 | 5 | 4 | **27** |
| B | 3 | 3 | 3 | 3 | 4 | 3 | 19 |
| C | 3 | 3 | 2 | 2 | 3 | 2 | 15 |
Seçim **A**; C'den "kurulu telefonla gönderelim" seçeneği alındı.

## Sayfa puanı — v1
Annenin ekranındaki düğmeler telefon çerçevesinden taşıyordu ("Torunların fotoğrafları" min-content genişliği); 1280×900'de konsol katın altına iniyordu. → v2: ızgara `minmax(0,1fr)`, etiket "Torun fotoğrafları", başlık küçültüldü.

## Sayfa puanı — v2
```
1 Tanınabilirlik: 4 — kanıt: dört renkli dev düğmeli telefon + yanında yönetim paneli: "yaşlı için sade telefon + aile paneli" okunur
2 Geliş hali:     5 — kanıt: ilk ekranda oğulun asıl istediği: annenin ekranını görmek ve uzaktan düzeltebilmek
3 Yolculuk:       5 — kanıt: destek günlüğü (tanıdık acı) → 10 dk kurulum → mahremiyet sınırı → kilitli şeyler → fiyat; gereksiz bölüm yok
4 Palet/doku:     4 — kanıt: dört düğme rengi büyük tuşlu telefonlardan; sayfanın geri kalanı nötr uygulama beyazı
5 Ses:            5 — kanıt: "“Oğlum, WhatsApp kayboldu” telefonlarına veda" / "Yardım etmek için annenin mesajlarını okuman gerekmiyor."
6 Varsayılan:     4 — kanıt: yuvarlak köşeli kart ızgaraları (adımlar, kilitli şeyler)
Toplam: 27/30 → eşik geçildi. En düşük: tanınabilirlik / palet (4).
```
## Erişilebilirlik
Telefon önizlemesi `role="img"` ve düğme sırasını söyleyen dinamik etiket; öneri sonucu `aria-live`; düğme yer değişimi FLIP animasyonu, reduced-motion'da anlık. Grafik `<title>` ile tüm değerleri metin olarak verir. Düğme renkleri her zaman ikon + etiketle (renge bağlı değil); beyaz/yeşil 5.3:1, beyaz/mor 6.6:1, mürekkep/sarı 9.1:1, beyaz/kırmızı 5.6:1.
