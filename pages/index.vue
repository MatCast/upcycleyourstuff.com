<template>
  <div>
    <TheHero/>
    <!-- <div><h1 class="text-8xl font-bold text-center">Hero Section</h1></div> -->
    <BlogMultiplePostCards :max-articles="maxArticles" />
  </div>
</template>

<script>
export default {
  data() {
    return { maxArticles: 5 }
  },
}
</script>

<style scoped></style>
