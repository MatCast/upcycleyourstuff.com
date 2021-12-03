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
p {
  @apply font-base leading-6 text-sm tracking-wide;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-heading uppercase;
}
</style>
