<template>
<footer>
    <div class="flex bg-secondary py-10 w-full justify-center content-middle">
        <p class="text-center">
          <nuxt-link to="/privacy">privacy</nuxt-link> |
          <nuxt-link to="/">{{ siteDomain }}</nuxt-link>
        </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return { siteDomain: 'upcycleyourstuff.com' }
  },
}
</script>

<style scoped>
p > a {
  @apply no-underline
}
</style>