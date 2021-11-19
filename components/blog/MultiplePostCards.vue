<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <BlogPostCard
          :article-title="article.title"
          :article-image="article.image"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    maxArticles: {
      required: false,
      type: Number,
      default: 10,
    },
  },
  data() {
    return { articles: null }
  },
  async fetch() {
    this.articles = await this.$content('', { deep: true })
      .limit(this.maxArticles)
      .fetch()
  },
}
</script>

<style></style>
