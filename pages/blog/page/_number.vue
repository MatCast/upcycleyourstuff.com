<template>
  <div>
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
