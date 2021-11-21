<template>
  <div>
      <NuxtLink :to="`/blog/${articleSlug}`">
      <p>{{ formatDate(articleDate) }}</p>
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
    articleDate: {
      type: Date,
      required: true,
    },
    articleDescription: {
      type: String,
      required: false,
      default:'',
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
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
