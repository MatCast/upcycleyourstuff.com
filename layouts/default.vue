<template>
  <body>
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </body>
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
