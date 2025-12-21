import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// Import Bootstrap and AOS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Import custom styles
import './assets/styles/main.css';
import './assets/styles/components.css';

// Create Vue app
const app = createApp(App);

// Use Pinia for state management
app.use(createPinia());

// Use Vue Router
app.use(router);

// Mount app
app.mount('#app');

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false,
  mirror: true,
  offset: 100,
});

// Refresh AOS on route change
router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh();
  }, 100);
});

console.log('✅ Vue.js Digital CV initialized successfully!');
