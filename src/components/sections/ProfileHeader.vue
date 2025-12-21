<template>
  <div class="profile-page">
    <div class="wrapper">
      <div
        class="page-header page-header-small"
        filter-color="green"
      >
        <div
          class="page-header-image"
          data-parallax="true"
          :style="{ backgroundImage: `url(${headerBg})` }"
        />
        <div class="container">
          <div class="content-center">
            <div
              class="cc-profile-image"
              data-aos="zoom-in"
            >
              <a href="#">
                <img
                  :src="profile.image"
                  alt="Profile Image"
                >
              </a>
            </div>
            <div
              class="h2 title"
              data-aos="fade-up"
            >
              {{ profile.name }}
            </div>
            <p
              class="category text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {{ profile.title }}
            </p>
          </div>
        </div>

        <div class="section">
          <div class="container">
            <div
              class="button-container"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :class="['btn', 'btn-default', 'btn-round', 'btn-lg', 'btn-icon', social.class]"
                :href="social.url"
                target="_blank"
                rel="tooltip"
                :title="`Follow me on ${social.name}`"
              >
                <i :class="['fa', social.icon]" />
                <span
                  v-if="social.badge"
                  :id="social.badge"
                  class="badge badge-success"
                >
                  {{ getBadgeValue(social.badge) }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useProfileStore } from '@/store/profile';

export default {
  name: 'ProfileHeader',
  setup() {
    const profileStore = useProfileStore();

    const headerBg = 'images/profile/cc-bg-1.jpg';
    const profile = computed(() => profileStore.fullProfile);
    const socialLinks = computed(() => [
      {
        ...profileStore.socialMedia[0],
        badge: 'stackoverflowReputation',
      },
      {
        ...profileStore.socialMedia[1],
        badge: 'mediumBlogCounts',
      },
      ...profileStore.socialMedia.slice(2),
    ]);

    const getBadgeValue = (badgeId) => {
      if (badgeId === 'stackoverflowReputation') {
        return profileStore.stackoverflowReputation || '';
      }
      if (badgeId === 'mediumBlogCounts') {
        return profileStore.mediumBlogCount || '';
      }
      return '';
    };

    return {
      headerBg,
      profile,
      socialLinks,
      getBadgeValue,
    };
  },
};
</script>

<style scoped>
.badge {
  position: absolute;
  z-index: 0;
  top: 52px;
}
</style>
