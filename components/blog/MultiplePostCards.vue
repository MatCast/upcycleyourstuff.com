<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.slug">
          <BlogPostCard :article-title="article.title" :article-image="article.image"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { articles: null }
  },
  async fetch() {
    this.articles = await this.$content('', { deep: true }).fetch()
  },
}
</script>

<style></style>
