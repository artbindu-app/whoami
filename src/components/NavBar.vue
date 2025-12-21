<template>
  <header>
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary-static"
      :class="{ 'scrolled': isScrolled }"
    >
      <div class="container">
        <div class="navbar-translate">
          <router-link
            class="navbar-brand"
            to="/"
            rel="tooltip"
          >
            <img
              src="/images/profile/artbindu_ico.png"
              height="50px"
              alt="Logo"
            >
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            :aria-expanded="menuOpen"
            @click="toggleMenu"
          >
            <span class="navbar-toggler-bar bar1" />
            <span class="navbar-toggler-bar bar2" />
            <span class="navbar-toggler-bar bar3" />
          </button>
        </div>
        <div
          class="collapse navbar-collapse justify-content-end"
          :class="{ show: menuOpen }"
        >
          <ul class="navbar-nav">
            <li
              v-for="link in navLinks"
              :key="link.path"
              class="nav-item"
            >
              <router-link
                class="nav-link"
                :to="link.path"
                @click="closeMenu"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    const menuOpen = ref(false);
    const isScrolled = ref(false);

    const navLinks = [
      { name: 'About', path: '/#about' },
      { name: 'Skills', path: '/#skill' },
      { name: 'Experience', path: '/#experience' },
      { name: 'Education', path: '/#education' },
      { name: 'Portfolio', path: '/#portfolio' },
    ];

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const closeMenu = () => {
      menuOpen.value = false;
    };

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      menuOpen,
      isScrolled,
      navLinks,
      toggleMenu,
      closeMenu,
    };
  },
};
</script>

<style scoped>
.navbar.scrolled {
  background-color: rgba(0, 0, 0, 0.9) !important;
  transition: background-color 0.3s ease;
}
</style>
