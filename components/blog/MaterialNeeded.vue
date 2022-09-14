<template>
  <div
    class="
      flex flex-col
      bg-secondary bg-opacity-50
      -mx-5
      p-5
      shadow-md
      outline-solid
    "
  >
    <div class="flex flex-col ">
      <h2 class="text-3xl mb-5 pt-4 font-semibold capitalize justify-self-start">{{ title }}</h2>
      <p><slot>default</slot></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: false, default: 'What You Need' },
  },
}
</script>

<style></style>
