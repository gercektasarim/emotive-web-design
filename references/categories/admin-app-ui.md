# Admin Panel / Dashboard / Uygulama Arayüzü

ThemeForest "Admin Templates" ve "Mobile" alt kategorilerinin kalıbı. Bu kategori en çok
satan HTML kategorisidir (Metronic 8.1K, Vuexy ~1K, Velzon, Fuse, Acorn, Eyris, SmartHR,
DreamsPOS, PreSkool, SportHub). Site değil **ürün içi arayüz**; duygu hedefi
"kontrol bende, hiçbir şey beni şaşırtmayacak".

## Ziyaretçi hali → hedef duygu
Geliş: günde saatlerce aynı ekranda çalışan, yorulmaya açık, hızlı tarama yapan
operatör/yönetici. Hedef: **yetkin sakinlik** — her şey yerinde, hiyerarşi anında
okunuyor, göz yorulmuyor.

## Yapı kalıbı
Dikey kenar menü (daraltılabilir, ikon+etiket, gruplar) · üst çubuk (arama, bildirim,
dil, tema anahtarı, profil) · içerik alanı: **KPI kart satırı → ana grafik + yan liste
→ tablo**. Çok sayıda hazır sayfa: analitik, CRM, e-ticaret, proje, HR, POS, takvim,
chat, e-posta, kanban, fatura, form sihirbazı, tablo varyantları, auth ekranları.

Sektöre özel dashboard'lar (okul/ERP, POS/stok, HR/bordro, spor skor) giderek artıyor:
niş veri tipi (öğrenci, ürün, çalışan, maç) ana ekranda doğrudan görünür.

## Görsel dil
- **Sıcaklık**: nötr gri/beyaz zemin, tek marka vurgu rengi (mavi/mor/indigo yaygın);
  koyu mod standart. Semantik renkler (başarı/uyarı/hata) marka renginden ayrı.
- **Ağırlık**: okunaklı sans (Inter, Public Sans benzeri), 13-14px gövde, net ağırlık
  kademeleri; rakamlar için tabular lining.
- **Tempo**: sıkı ama düzenli; 8px ızgara; yoğunluk anahtarı sunmak iyi fikir.
- **Doku**: düz yüzeyler, hafif kenarlık, minimal gölge; kartlar burada **meşru**
  çünkü her kart ayrı bir veri birimidir.
- **Hareket**: yalnız durum değişimi (yüklenme iskeleti, toast, açılır menü).
- **Ses**: kısa etiketler, fiil odaklı butonlar ("Faturayı gönder"), hata mesajları
  ne olduğunu ve nasıl düzeleceğini söyler.

## İçeriğe yakınlık nasıl kurulur
Generic admin ile niş admin arasındaki fark **ilk ekranın veri seçimidir**. Bir
veteriner kliniği paneli "Bugünkü randevular, aşı hatırlatmaları, stok biten ilaçlar"
gösterir; e-ticaret paneli "sipariş, iade, kargo" gösterir. Sektörün günlük ritüelini
ilk ekrana koy; genel "satış grafiği" ile açma.

Mobil uygulama kitleri (AppKit, Mobilekit, Framework7 kitleri): alt sekme çubuğu,
kart listeleri, tam genişlik butonlar, 44px dokunma hedefi; finans/cüzdan ve iş
bulma gibi nişler var.

## Kaçın
Her kartta gradient; dekoratif 3D illüstrasyon; aynı anda 6 vurgu rengi; grafiklerde
gerçek olmayan rastgele veri (sayılar tutarlı olsun: toplam = parçaların toplamı).
