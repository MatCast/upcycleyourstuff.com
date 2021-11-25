<template>
  <nav id="pagination" class="mx-5">
    <ul class="inline-flex w-full justify-between">
      <!-- <li><button class="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">1</button></li>
    <li><button class="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">2</button></li>
    <li><button class="w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline">3</button></li> -->

      <li>
        <nuxt-link v-if="pageNumber >= 2" :to="prevLink"
          ><button
            :class="`
              flex
              items-center
              justify-center
              w-10
              h-10
              ${textColor}
              transition-colors
              ${bgColor}
              duration-150
              rounded-full
              focus:shadow-outline
              ${hoverColor}
              outline-solid
              hover:outline-none
            `"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg></button
        ></nuxt-link>
      </li>
      <li>
        <nuxt-link v-if="nextPage" :to="`/blog/page/${pageNumber + 1}`">
          <button
            :class="`
              flex
              items-center
              justify-center
              w-10
              h-10
              ${textColor}
              transition-colors
              duration-150
              ${bgColor}
              rounded-full
              focus:shadow-outline
              ${hoverColor}
              outline-solid
              hover:outline-none
            `"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
    nextPage: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return { bgColor: 'bg-primary',
    textColor: 'text-black',
    hoverColor: 'hover:bg-primary' }
  },
  computed: {
    prevLink() {
      return `/blog/page/${this.pageNumber - 1}`
    },
  },
}
</script>

<style></style>
