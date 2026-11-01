# Olta — tasarım notları

**Fiziksel dünya:** Galata Köprüsü'nde sabah: Haliç'in sisli gri-mavisi, derin suyun lacivert yeşili, istavrit gümüşü, kırmızı-turuncu şamandıra, ahşap balık cetveli, kova, martı beyazı; ufukta Galata Kulesi, köprü lambaları, kubbeler. Kıyıda ve kayalıkta çekim yok.
**Geliş → çıkış:** Minik balığı denize geri bırakmak isteyen ama boyunu, kuralı bilmeyen amatör → ne yapacağını bilen, balığı doğru bırakmış, denize saygılı.

## Taslaklar
**A. Balık cetveli** — sis #DCE5E8, derin su #0E2F44, gümüş #A9BAC2, şamandıra #C93A1F, martı #F7F9F9 (+ cetvel tahtası #E9DEC6). Archivo, tek aile: geniş (wdth 125) başlıklar iskele/vapur tabelası gibi, normal gövde. Hero: tam genişlik deniz bandı, Galata silüeti, cetvel üstünde balık; tür + boy → DENİZE / KOVAYA. Ses: "Tuttun. Ölç. Küçükse denize." Sıra: cetvel → yer gizli (balıkçı sırrı) → nasıl bırakılır (4 adım) → bu ay köprüde → usta sözü → ücretsiz → SSS.
**B. İskele tabelası** — dev tipografik kurallar listesi, beyaz zemin, kırmızı yasak işaretleri; net ama "yasak" tonu, saygı yerine ceza hissi.
**C. Kıyı rehberi** — seyahat rehberi gibi mekân kartları ve av noktaları haritası; konum paylaşımı balıkçının sırrıyla ve gizlilik vaadiyle çelişiyor.

| | Tanın. | Geliş | Yolculuk | Palet | Ses | Varsayılan | Toplam |
|---|---|---|---|---|---|---|---|
| A | 5 | 5 hüküm ilk ekranda | 5 | 4 | 5 | 4 | **28** |
| B | 3 | 4 | 3 | 3 | 3 | 3 | 19 |
| C | 4 | 2 | 3 | 4 | 4 | 3 | 20 |

Seçim: **A**; C'nin "yerin ve ayın balığı" fikri "Kasımda köprüde ne var?" bölümü oldu. En düşük: palet (deniz mavisi + turuncu beklenen).

## Sayfa puanı — v1
1 Tanınabilirlik: 5 — cetvel tahtası, gümüş balık, Galata silüeti
2 Geliş hali: 4 — masaüstünde hüküm ilk ekranda; mobilde kontrol satırı ve hüküm kartı sağdan kırpılıyor, cetvel okunmuyor
3 Yolculuk: 5 — ölç → güven (yer gizli) → bırakma tekniği (saygı) → bu ay → kanıt → ücretsiz
4 Palet/doku: 4 — Haliç sisi ve cetvel tahtası özgün; deniz mavisi + turuncu tek başına beklenen
5 Ses: 5 — "Otuz yıl bu köprüde cetvel taşıdım..."
6 Varsayılan: 4 — iki kutulu fiyat; başka tell yok
Toplam 27. Revizyon (tempo/mobil): grid çocuklarına min-width:0, mobilde cetvel 620px ve kendi içinde kayar, boy etiketi kırılır. Balık derinlik oranları türlere göre (istavrit ince, çipura derin) ve yüksekliğe tavan.

## Sayfa puanı — v2
1: 5 · 2: 5 · 3: 5 · 4: 4 · 5: 5 · 6: 4
**Toplam 28/30**, en düşük: palet/doku (4) / varsayılan (4).
Etkileşim Chrome'da denendi (çipura 22 cm → KOVAYA, 17 cm → DENİZE). 390px: scrollWidth 390. Asgari boylar örnek olarak verildi ve sayfada bu açıkça yazıyor.
