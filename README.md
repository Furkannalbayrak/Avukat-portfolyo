## Avukat Portföy Web Sitesi

Modern ve profesyonel bir avukat portföy/tanıtım sitesidir. Ana sayfa vitrini, hakkımda, faaliyet alanları, mevzuat (makaleler) ve iletişim sayfalarından oluşur. Vite ile oluşturuldu, Tailwind CSS ile stillendi ve GitHub Pages üzerinde yayınlanacak şekilde yapılandırıldı.

Canlı Demo: `https://Furkannalbayrak.github.io/Avukat-portfolyo/`


## 🚀 Özellikler

- **Ana sayfa vitrini**: `Header`, `About`, `ConsultancyServices`, `Services`, `Articles` bileşenleri ile genel tanıtım.
- **Hakkımda**: `/about` sayfasında detaylı özgeçmiş ve uzmanlık alanları.
- **Faaliyet alanları**: `/services` sayfasında kategoriler ve yönlendirmeler.
- **Hizmet detayı**: Her hukuk alanı için ayrı rota (örn. `/ceza-hukuku`, `/ticaret-hukuku`, `/yabancilar-hukuku` vb.).
- **Danışmanlık hizmetleri**: Kurumsal ve bireysel danışmanlık rotaları (örn. `/kurumsal-danismanlik`, `/isletme-danismanligi`).
- **Mevzuat/Makaleler**: `/mevzuat` rotasında içerikler.
- **İletişim**: `/contact` sayfası.
- **Yumuşak gezinim**: `ScrollToTop` ile sayfa geçişlerinde en üste kaydırma.
- **Kod bölme**: `React.lazy` + `Suspense` ile route bazlı code-splitting.
- **SEO**: `react-helmet` ile sayfa başlıkları ve meta etiketleri.
- **Hızlı geliştirme**: Vite ile anında yenileme ve optimize build.
- **Responsive tasarım**: Tailwind CSS ile tüm ekran boyutlarında uyumlu.


## 📂 Proje Yapısı

- `src/main.jsx`: Giriş noktası; uygulama `HashRouter` ile sarılır.
- `src/App.jsx`: Uygulama kabuğu; `RouterConfig` ve `Footer` render edilir, global SEO etiketleri `Helmet` ile yönetilir.
- `src/config/RouterConfig.jsx`: Tüm rotaların tanımı (lazy-loaded):
  - `/` → `Header`, `About`, `ConsultancyServices`, `Services`, `Articles`
  - `/about` → `SimpleHeader`, `AboutPage`
  - `/services` → `SimpleHeader`, `ServicesPage`
  - `/mevzuat` → `SimpleHeader`, `ArticlePage`
  - `/contact` → `SimpleHeader`, `ContactPage`
  - Hizmet detayları → örn. `/ceza-hukuku`, `/ticaret-hukuku`, `/yabancilar-hukuku`...
  - Danışmanlık detayları → örn. `/kurumsal-danismanlik`, `/isletme-danismanligi`...
- `src/components/`: `Header.jsx`, `SimpleHeader.jsx`, `Footer.jsx`, `About.jsx`, `Services.jsx`, `Articles.jsx`, `ConsultancyServices.jsx`, `LoadingSpinner.jsx`
- `src/pages/`: `AboutPage.jsx`, `ServicesPage.jsx`, `ArticlePage.jsx`, `ContactPage.jsx`, `ConsultancyServicesPage.jsx`
- `src/services/`: Her hukuk alanı için ayrı bileşenler (örn. `CezaHukuku.jsx`, `TicaretHukuku.jsx` ...)
- `src/consultancyServices/`: Danışmanlık bileşenleri
- `src/scrollSetting/ScrollToTop.jsx`: Sayfa geçişlerinde yukarı kaydırma
- `src/index.css` ve `tailwind.config.js`: Tailwind kurulum ve kapsam tanımı
- `vite.config.js`: GitHub Pages için `base: '/Avukat-portfolyo/'` ayarı


## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- React
- Vite
- JavaScript (ES Modules)
- Tailwind CSS
- React Router DOM (HashRouter)
- React Helmet
- (Projede hazır bulunan: Redux Toolkit, Formik + Yup, React Toastify)


## 🛠 Kurulum ve Kullanım

Yerelde çalıştırmak için:

1. Node.js bilgisayarınızda kurulu olmalı: https://nodejs.org (LTS sürümünü yükleyin)
2. Projeyi indirin/klonlayın
3. Proje klasörüne girin
4. Terminal/Powershell’i bu klasörde açın
5. Bağımlılıkları yükleyin
    ```bash
    npm install
    ```
    
6. Geliştirme sunucusunu başlatın
    ```bash
    npm run dev
    ```
    
7. Tarayıcıda verilen yerel adresi açın (örn. `http://localhost:5173`).

### Build Alma
1. Üretim için optimize build:
    ```bash
    npm run build
    ```
2. Ardından önizleme için:
    ```bash
    npm run preview
    ```


## 🚢 GitHub Pages’e Deploy
Proje, GitHub Pages’e yayınlamak için hazırdır.

- `package.json` içinde `homepage` ve `deploy` komutu tanımlı
- `vite.config.js` içinde `base: '/Avukat-portfolyo/'`
- `HashRouter` kullanıldığı için 404 yönlendirme sorunu yaşanmaz

Yayınlamak için:
```bash
npm run deploy
```


## 📜 License
Bu proje **ISC lisansı** altında sunulmaktadır. Daha fazla bilgi için LICENSE dosyasına göz atabilirsiniz.
