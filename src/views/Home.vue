<template>
  <div class="home-view">
    <ProfileHeader />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <EducationSection />
    <PortfolioSection />
  </div>
</template>

<script>
import ProfileHeader from '@/components/sections/ProfileHeader.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
import EducationSection from '@/components/sections/EducationSection.vue';
import PortfolioSection from '@/components/sections/PortfolioSection.vue';

export default {
  name: 'Home',
  components: {
    ProfileHeader,
    AboutSection,
    SkillsSection,
    ExperienceSection,
    EducationSection,
    PortfolioSection,
  },
};
</script>

<style scoped>
.home-view {
  flex: 1;
}
</style>
