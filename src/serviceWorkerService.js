// serviceWorkerRegistration.js

// Check if service workers are supported in the current browser
export function register() {
  if ('serviceWorker' in navigator) {
    // When the window is loaded, register the service worker
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`; // Service worker file location

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log('Service Worker registered: ', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed: ', error);
        });
    });
  }
}

// Optional: unregister the service worker for testing or debugging purposes
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.log('Error during unregistration: ', error);
      });
  }
}
