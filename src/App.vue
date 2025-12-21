<template>
  <div id="app">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <AppFooter />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter,
  },
  setup() {
    onMounted(() => {
      // Smooth scroll behavior
      document.documentElement.style.scrollBehavior = 'smooth';
    });

    return {};
  },
};
</script>

<style>
/* Global transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure proper layout */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
