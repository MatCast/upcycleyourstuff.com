<template>
  <div>
    <BlogPostHeading article-title="Our Latest Stories" />
    <BlogMultiplePostCards :page-number="pageNumber" />
  </div>
</template>

<script>
export default {
    data() {
        const pageNumber = parseInt(this.$route.params.number)
    return { pageNumber }
  },
}
</script>

<style></style>
