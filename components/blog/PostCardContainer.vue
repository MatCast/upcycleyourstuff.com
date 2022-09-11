<template>
  <div class="flex flex-col bg-white m-5 shadow-md">
    <div class="flex md:flex-col items-center">
      <div class="w-full m-5 flex justify-center">
        <NuxtLink :to="`/blog/${articleSlug}`">
          <img
            width="400"
            height="560"
            :src="`/${articleImage}`"
            :alt="articleTitle"
          />
        </NuxtLink>
      </div>

      <div class="w-full mx-5">
        <BlogPostCardHeader
          :article-title="articleTitle"
          :article-date="articleDate"
          :article-slug="articleSlug"
        />
        <div class="my-5 text-xs">
          <p>
            {{ articleDescription }}
          </p>
        </div>
      </div>
    </div>
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
      required: true,
    },
    articleDate: {
      type: String,
      required: true,
    },
    articleDescription: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style></style>
