<template>
  <main class="bg-light">
    <TheHeader />
    <div id="content" class="relative pb-10">
      <Nuxt class="w-full flex flex-col items-center"/>
    </div>

    <TheFooter />
  </main>
</template>

<style>
p {
  @apply font-base leading-6 text-xs tracking-wide;
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
