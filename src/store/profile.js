import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  // State
  const profile = ref({
    name: 'Biswasindhu Mandal',
    title: 'Full Stack & OTT Front End Developer',
    email: 'sindhu.online.24x7@gmail.com',
    location: 'Kolkata, West Bengal, India',
    image: 'images/profile/profile.jpg',
    languages: [
      { name: 'English', level: 'Professional working proficiency' },
      { name: 'বাংলা', level: 'Full professional proficiency' },
      { name: 'हिंदी', level: 'Limited working proficiency' },
      { name: 'ଓଡ଼ିଆ', level: 'Limited working proficiency' },
    ],
  });

  const socialLinks = ref([
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/10850045/art-bindu',
      icon: 'fa-stack-overflow',
      class: 'cc-stackoverflow',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@artbindu',
      icon: 'fa-medium',
      class: 'cc-medium',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/artbindu',
      icon: 'fa-github',
      class: 'cc-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/in/artbindu',
      icon: 'fa-linkedin',
      class: 'cc-linkedin',
    },
    {
      name: 'Skype',
      url: 'skype:artbindu.mca?chat',
      icon: 'fa-skype',
      class: 'cc-skype',
    },
  ]);

  const workExperience = ref(null);
  const stackoverflowReputation = ref(null);
  const mediumBlogCount = ref(null);

  // Getters
  const fullProfile = computed(() => profile.value);
  const socialMedia = computed(() => socialLinks.value);

  // Actions
  function updateProfile(data) {
    profile.value = { ...profile.value, ...data };
  }

  function setWorkExperience(years) {
    workExperience.value = years;
  }

  function setStackOverflowReputation(rep) {
    stackoverflowReputation.value = rep;
  }

  function setMediumBlogCount(count) {
    mediumBlogCount.value = count;
  }

  return {
    // State
    profile,
    socialLinks,
    workExperience,
    stackoverflowReputation,
    mediumBlogCount,
    // Getters
    fullProfile,
    socialMedia,
    // Actions
    updateProfile,
    setWorkExperience,
    setStackOverflowReputation,
    setMediumBlogCount,
  };
});
