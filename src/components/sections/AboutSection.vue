<template>
  <div
    id="about"
    class="section"
  >
    <div class="container">
      <div
        class="card"
        data-aos="fade-up"
        data-aos-offset="10"
      >
        <div class="row">
          <div class="col-lg-7 col-md-12">
            <div class="card-body">
              <div class="h4 mt-0 title">
                About
              </div>
              <p class="text-justify">
                👋, I am {{ profile.name }}. {{ profile.title }}.
              </p>
              <p class="text-justify">
                Completed graduation in Mathematics, masters in Computer Application and having
                <span id="expYear">{{ workExp }}</span> years of experience in Frontend and Media Streaming technologies.
              </p>
              <p class="text-justify">
                Now back to work as an OTT Front-End developer✊.
              </p>
              <p class="text-justify">
                Specialized in Vanilla JavaScript, TypeScript, and Node.js. Have experience in Web Media Player
                development with OTT streaming protocols:
                <span title="Dynamic Adaptive Streaming over HTTP">MPEG-DASH</span>,
                <span title="HTTP live streaming">HLS</span>, Bitmovin, RxPlayer.<br>
                Known Front-end framework: Angular, React, Vue.js Framework. Have experience to worked as a Back-end
                developer with Multiple RDBMS & NoSQL(MongoDB) Databases, RestAPI configuration & have good knowledge
                on Regular Expression.<br>
                Also, have experience in a Test Automation Engineer on Selenium WebDriver with Java Cucumber framework
                and have knowledge on CI/CD with Jenkins.<br>
                Trying to help developer community in
                <a href="https://stackoverflow.com/users/10850045/artbindu?tab=profile">
                  <img
                    src="https://stackoverflow.com/Content/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a"
                    width="20px"
                    alt="StackOverflow"
                  >StackOverflow</a>.
              </p>
            </div>
          </div>
          <div class="col-lg-5 col-md-12">
            <div class="card-body">
              <div class="h4 mt-0 title">
                Basic Information
              </div>
              <div class="row mt-3">
                <div class="col-sm-4">
                  <strong class="text-uppercase">Email:</strong>
                </div>
                <div class="col-sm-8">
                  {{ profile.email }}
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4">
                  <strong class="text-uppercase">Address:</strong>
                </div>
                <div class="col-sm-8">
                  {{ profile.location }}
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-4">
                  <strong class="text-uppercase">Language:</strong>
                </div>
                <div class="col-sm-8">
                  <span
                    v-for="(lang, index) in profile.languages"
                    :key="index"
                    :title="lang.level"
                  >
                    {{ lang.name }}<span v-if="index < profile.languages.length - 1">, </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useProfileStore } from '@/store/profile';
import { getWorkExperience } from '@/utils/helpers';

export default {
  name: 'AboutSection',
  setup() {
    const profileStore = useProfileStore();
    const profile = computed(() => profileStore.fullProfile);
    const workExp = computed(() => profileStore.workExperience || '0');

    onMounted(() => {
      // Calculate work experience
      const exp = getWorkExperience('06-15-2019');
      profileStore.setWorkExperience(exp);
    });

    return {
      profile,
      workExp,
    };
  },
};
</script>
