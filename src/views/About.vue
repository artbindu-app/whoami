<template>
  <div class="about-page">
    <section class="section">
      <div class="container">
        <div
          class="section-header"
          data-aos="fade-up"
        >
          <h2 class="section-title">
            About Me
          </h2>
          <p class="section-description">
            Get to know more about my background and expertise
          </p>
        </div>

        <div
          class="row"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">
                  Who I Am
                </h3>
                <p class="card-text">
                  <!-- Add your about content here -->
                  I am a passionate developer with expertise in building modern web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  setup() {
    return {};
  },
};
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  padding-top: 80px;
}
</style>
