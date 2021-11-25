<template>
  <div
    class="
      mt-14
      -ml-24
      py-5
      px-7
      md:mt-0 md:ml-0
      bg-secondary
      relative
      outline-solid
      text-black
    "
  >
    <NuxtLink :to="`/blog/${articleSlug}`">
      <h3 class="text-lg font-bold uppercase font-heading pb-1.5">
        {{ articleTitle }}
      </h3>
    </NuxtLink>
    <div ><p>{{ articleDate }}</p></div>
  </div>
</template>

<script>
export default {
  props: {
    articleTitle: {
      type: String,
      required: true,
    },
    articleDate: {
      type: String,
      required: true,
    },
    articleSlug: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
