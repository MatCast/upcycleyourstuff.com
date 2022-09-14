<template>
  <article class="">

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
    <!-- <div class="w-full flex justify-center my-4">
      <BlogPostHeading :article-title="article.title" />
    </div> -->

    <div :style="styleObject" class="w-full flex justify-center items-center mb-10 h-96">
      <BlogPostHeading :article-title="article.title" :article-date="formatDate(article.updatedAt)"/>
    </div>
    <nuxt-content class="max-w-2xl px-7" :document="article" />
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
      meta: [{ hid: 'description', name: 'description', content: this.article.description }],

    }
  },
  computed: {
    styleObject() {
      return {
        backgroundImage: `url('/${this.article.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
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

<style >
.nuxt-content h2 {
  @apply text-3xl mb-5 pt-4 font-semibold capitalize;
}

.nuxt-content h3 {
  @apply text-2xl mb-5 pt-1 normal-case;
}

.nuxt-content p {
  @apply mb-4;
}
.nuxt-content ul {
  @apply list-disc list-inside;
}

.nuxt-content img {
 @apply mt-4;
}
</style>
