<template>
  <article>
      <!-- <BlogPostCardHeader :article-title="articleTitle" :article-date="formatDate(articleDate)"/>
      <img :src="`/${articleImage}`" :alt="articleTitle">
      <p>{{articleDescription}}</p> -->
      <BlogPostCardContainer
        :article-title="articleTitle"
        :article-date="formatDate(articleDate)"
        :article-image="articleImage"
        :article-slug="articleSlug"
      />
  </article>
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
      required: true,
    },
    articleDate: {
      type: Date,
      required: true,
    },
    articleDescription: {
      type: String,
      required: false,
      default: '',
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
* >>> img {
  @apply max-w-xs;
}
* >>> p {
  @apply max-w-xs text-xs;
}
</style>
