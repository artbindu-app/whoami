<template>
  <footer class="footer">
    <div class="container text-center">
      <a
        v-for="social in socialLinks"
        :key="social.name"
        :class="['btn', 'btn-link', social.class]"
        :href="social.url"
        target="_blank"
        :aria-label="social.name"
      >
        <i
          :class="['fa', social.icon, 'fa-2x']"
          aria-hidden="true"
        />
      </a>
    </div>

    <div class="h4 title text-center">
      Biswasindhu
      <img
        src="/images/profile/india.svg"
        style="height: 1.8em; vertical-align: middle"
        alt="India Flag"
      >
      Mandal
    </div>

    <div class="text-center text-muted">
      <p>
        &copy; {{ currentYear }} Creative CV. All rights reserved.<br>
        Design -
        <a
          class="credit"
          href="https://templateflip.com"
          target="_blank"
        >TemplateFlip</a>
      </p>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue';
import { useProfileStore } from '@/store/profile';

export default {
  name: 'AppFooter',
  setup() {
    const profileStore = useProfileStore();
    const currentYear = computed(() => new Date().getFullYear());
    const socialLinks = computed(() => profileStore.socialMedia);

    return {
      currentYear,
      socialLinks,
    };
  },
};
</script>

<style scoped>
.footer {
  padding: 2rem 0;
  margin-top: auto;
}
</style>
