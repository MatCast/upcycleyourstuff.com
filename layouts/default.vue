<template>
  <div id="__main_div" class="w-full flex flex-col">
    <TheHeader />
    <main class="flex-auto pb-5">
      <Nuxt class="w-full flex flex-col items-center"/>
    </main>
    <TheFooter />
  </div>
</template>

<style>
p, ul {
  @apply font-base leading-6 text-base tracking-wide list-none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-heading uppercase;
}
button {
  @apply font-heading uppercase font-bold;
}
p > a {
  @apply underline
}
ul > li {
  @apply mb-0;
}
</style>
