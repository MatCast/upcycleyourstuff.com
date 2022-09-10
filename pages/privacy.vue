<template>
  <div>
    <nuxt-content class="max-w-2xl px-7" :document="privacyPolicy" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let privacyPolicy
    try {
      privacyPolicy = await $content('privacy_policy', 'privacy').fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return { privacyPolicy }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Privacy Policy',
    }
  },
}
</script>

<style scoped>
* >>> h1 {
  @apply text-4xl mb-5 pt-7 font-semibold capitalize;
}

* >>> h2 {
  @apply text-3xl mb-5 pt-7 font-semibold capitalize;
}

* >>> p {
  @apply mb-5 text-sm;
}
</style>
