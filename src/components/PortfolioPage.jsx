import { useEffect } from 'react';
import Loader from './Loader';
import ThemeSwitcher from './ThemeSwitcher';
import Decorations from './Decorations';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import BlogSection from './BlogSection';
import Sidebar from './Sidebar';
import ScrollToTop from './ScrollToTop';

const scriptSources = [
  '/js/jquery-1.12.4.min.js',
  '/js/bootstrap.min.js',
  '/js/jquery.easytabs.min.js',
  '/js/jquery.easing.1.3.js',
  '/js/smooth-scroll.js',
  '/js/venobox.js',
  '/js/owl.carousel.js',
  '/js/placeholders.min.js',
  '/js/parallax.js',
  '/js/morphext.min.js',
  '/js/switcher.js',
  '/js/script.js',
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-vite-src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.viteSrc = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export default function PortfolioPage() {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      for (const src of scriptSources) {
        await loadScript(src);
      }

      if (!cancelled) {
        window.dispatchEvent(new Event('load'));
        document.body.classList.add('react-vite-ready');
      }
    })().catch((error) => {
      console.error('Failed to initialize portfolio scripts', error);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Loader />
      <div id="wrapper" className="wrapper home">
        <ThemeSwitcher />
        <Decorations />
        <div className="blurred-content" />
        <div className="container spacer-xlg">
          <div className="row">
            <div className="col-lg-9 my-order-switch-1">
              <HomeSection />
              <AboutSection />
              <BlogSection />
            </div>
            <Sidebar />
          </div>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}