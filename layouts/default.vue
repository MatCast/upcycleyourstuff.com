<template>
  <main class="bg-gray-100">
    <TheHeader />
    <div id="content" >
      <Nuxt class="w-full"/>
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
