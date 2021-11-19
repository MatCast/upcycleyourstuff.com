<template>
  <header>
    <ul>
      <li v-for="(item, key) of items" :key="key" :to="item.to">
        <NuxtLink :to="item.to">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
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
