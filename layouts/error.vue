<template>
  <section class="flex justify-center align-middle h-full">
    <h1 class="pb-5 text-2xl">{{ message }}</h1>
    <p v-if="statusCode === 404">
      <a v-if="typeof $route === 'undefined'" href="/"
        ><PrimaryButton :button-text="'Back Home'"
      /></a>
      <NuxtLink v-else to="/"
        ><PrimaryButton :button-text="'Back Home'"
      /></NuxtLink>
    </p>
  </section>
</template>

<script>
import PrimaryButton from '../components/PrimaryButton.vue'
export default {
  name: 'NuxtError',
  components: { PrimaryButton },
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
