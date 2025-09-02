import { DEV } from "esm-env";

// Handle service worker for production only
if (!DEV && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// Preload critical resources
function preloadCriticalResources() {
  // Preload hero image
  const heroImage = new Image();
  heroImage.src = "/akseninkoalina.jpg";

  // Preload featured project images
  const projectImages = [
    "/images/arts_center.jpeg",
    "/images/blog_platform.jpeg",
  ];

  projectImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Optimize images on intersection
function setupLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

// Initialize optimizations
document.addEventListener("DOMContentLoaded", () => {
  preloadCriticalResources();
  setupLazyLoading();
});

// Performance monitoring
if (!DEV) {
  // Dynamically import web-vitals to avoid bundling in development
  import("web-vitals")
    .then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(console.log);
      onINP(console.log);
      onFCP(console.log);
      onLCP(console.log);
      onTTFB(console.log);
    })
    .catch(() => {
      // web-vitals not available, continue without monitoring
    });
}
