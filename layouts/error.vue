<template>
  <section class="flex justify-center align-middle h-full">
    <h1 class="title">{{ message }}</h1>
    <p v-if="statusCode === 404" class="description">
      <a v-if="typeof $route === 'undefined'"
        ><b-button class="has-text-dark" href="/" type="is-primary"
          >Back Home</b-button
        ></a
      >
      <NuxtLink v-else class="has-text-dark" to="/"
        ><b-button type="is-primary" class="has-text-dark"
          >Back Home</b-button
        ></NuxtLink
      >
    </p>
  </section>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.message,
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || 'There was an unexpected error'
    },
  },
}
</script>
