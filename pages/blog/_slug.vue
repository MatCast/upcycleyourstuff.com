<template>
  <article class="content column is-12">
    <!-- <PostAuthor :author="author" />
    <PostTags :tags="article.tags ? article.tags : ''" />
    <img :src="`/blog/${article.image}`" alt="article.img-alt" />
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink
            :to="`#${link.id}`"
            :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
            >{{ link.text }}</NuxtLink
          >
        </li>
      </ul>
    </nav> -->
    <h1>{{ article.title }}</h1>
    <nuxt-content class="max-w-2xl" :document="article" />
    <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let article
    try {
      article = await $content('articles', params.slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return { article }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.article.title,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
  h1 {
    @apply text-4xl font-bold pb-4;
  }
  h2 {
    @apply text-3xl;
  }
</style>
