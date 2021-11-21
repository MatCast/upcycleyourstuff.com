<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <BlogPostCard
          :article-title="article.title"
          :article-image="article.image"
          :article-slug="article.slug"
          :article-description="article.description"
          :article-date="article.date"
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
      .only(['title', 'image', 'slug', 'description', 'date'])
      .limit(this.maxArticles)
      .fetch()
    this.articles.forEach(article => {
      if (typeof article.description === 'undefined') {
      article.description = ''
    }
    let date = new Date(article.date)
    if (isNaN(date)) {
      date = new Date('2021-01-01 00:00:00 +0300')
    }
    article.date = date
    })
  },
}
</script>

<style></style>
