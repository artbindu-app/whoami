<template>
  <div class="not-found-page">
    <div
      class="container text-center"
      style="padding: 100px 0;"
    >
      <h1 class="display-1">
        404
      </h1>
      <h2>Page Not Found</h2>
      <p class="lead">
        The page you're looking for doesn't exist.
      </p>
      <router-link
        to="/"
        class="btn btn-primary btn-lg mt-4"
      >
        Go Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found-page {
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.display-1 {
  font-size: 8rem;
  font-weight: bold;
  color: #2ca8ff;
}
</style>
