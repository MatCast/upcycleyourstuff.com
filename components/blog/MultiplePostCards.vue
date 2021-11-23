<template>
  <div id="post-feed" class="max-w-3xl">
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
    <BlogPagination :page-number="pageNumber" :next-page="nextPage" />
  </div>
</template>

<script>
export default {
  props: {
    maxArticles: {
      required: false,
      type: Number,
      default: 5,
    },
    pageNumber: {
      required: false,
      type: Number,
      default: 1,
    },
  },
  data() {
    return { articles: null, nextPage: false }
  },
  async fetch() {
    this.articles = await this.$content('', { deep: true })
      .only(['title', 'image', 'slug', 'description', 'date'])
      .sortBy('createdAt', 'desc')
      .limit(this.maxArticles)
      .skip((this.maxArticles - 1) * (this.pageNumber - 1))
      .fetch()

    // If no posts were retrieved raise error.
    if (!this.articles.length) {
      return this.$error({ statusCode: 404, message: 'No posts found!' })
    }

    // If true it means that there is at least one post more to display.
    this.nextPage = this.articles.length === this.maxArticles
    // Remove last post from articles: this allows to know if there are any
    // more posts available without querying the total number of posts
    this.articles = this.nextPage ? this.articles.slice(0, -1) : this.articles

    this.articles.forEach((article) => {
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
