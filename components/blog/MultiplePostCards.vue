<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <BlogPostCard
          :article-title="article.title"
          :article-image="article.image"
          :article-slug="article.slug"
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
    .only(['title', 'image', 'slug', 'description'])
      .limit(this.maxArticles)
      .fetch()
  },
}
</script>

<style></style>
