<template>
  <button class="border-2 border-black px-4 py-2 bg-secondary text-black uppercase">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      required: true,
      type: String,
    },
  },
}
</script>
