<template>
  <header class="top-0 z-50 w-full bg-secondary">
    <nav class="main-header flex justify-center">
      <ul class="inline-flex w-full space-x-8 justify-center p-5 uppercase font-bold bg-secondary border-black border-b-2 shadow-xl">
        <li v-for="(item, key) of items" :key="key" :to="item.to">
          <NuxtLink :to="item.to">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Blog',
          icon: 'blog',
          to: { name: 'blog' },
        },
      ],
    }
  },
}
</script>

<style>
nav.main-header a.nuxt-link-exact-active {
  @apply border-b-2 border-accent;
  /* font-weight: bold; */
}
</style>
