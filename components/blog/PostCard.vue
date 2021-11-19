<template>
  <div>
      <NuxtLink :to="`/blog/${articleSlug}`">
      <h3>{{articleTitle}}</h3>
      <img :src="`/${articleImage}`" :alt="articleTitle">
      <p>{{articleDescription}}</p>
      </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    articleTitle: {
      type: String,
      required: true,
    },
    articleImage: {
      type: String,
      required: true,
    },
    articleSlug: {
      type: String,
      required: false,
      default:'',
    },
    articleDescription: {
      type: String,
      required: false,
      default:'',
    },
  },
}
</script>

<style scoped>
h3{
    @apply text-xl
}
img {
    @apply max-w-xs
}
p {
    @apply max-w-xs
}
</style>
