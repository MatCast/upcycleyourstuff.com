<template>
  <div
    class="
      mt-14
      py-12
      px-7
      md:mt-0 md:ml-0
      bg-secondary
      relative
      outline-solid
      text-black
      max-w-2xl
    "
  >
      <h1 class="text-4xl font-bold uppercase font-heading py-3 text-center">
        {{ articleTitle }}
      </h1>
      <p v-if="articleDate.length" class="text-center">{{ articleDate }}</p>
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
      required: false,
      default: ''
    },
  },
}
</script>

<style></style>