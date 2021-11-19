<template>
  <div>
      <h3>{{articleTitle}}</h3>
      <img :src="`/${articleImage}`" :alt="articleTitle">
      <p>{{articleDescription}}</p>
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
    articleDescription: {
      type: String,
      required: false,
      default:'',
    },
  },
}
</script>

<style></style>
