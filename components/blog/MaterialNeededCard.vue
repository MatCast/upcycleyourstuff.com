<template>
  <div class="flex justify-center">
    <div class="block p-6 shadow-lg w-full">
      <h3
        class="text-lg leading-tight font-medium mb-2 normal-case"
      >
        {{ title }}
      </h3>
      <p class="text-gray-700 text-base mb-0">
        <slot>default</slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
