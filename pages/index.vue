<template>
  <div>
    <section class="flex flex-col justify-between pt-40 pb-6 px-6 text-right">
      <h1 class="text-6xl font-bold flex flex-col text-2xl leading-tight blend">
        <span>Self-motivated,</span>
        <span>Passionate</span>
        <span>Web Developer</span>
      </h1>
      <p class="flex flex-col text-lg blend">
        <span> PAUL J. LEE</span>
        <span>{{ new Date().getFullYear() }} PORTFOLIO</span>
      </p>
    </section>
    <section class="flex flex-col justify-center items-center p-6">
      <nuxt-link class="portfolio-item blend" to="/work/wyzegyde"
        >WyzeGyde</nuxt-link
      >
      <nuxt-link class="portfolio-item blend" to="/work/audioeye"
        >AudioEye</nuxt-link
      >
    </section>
    <!-- <section>about</section>
    <section>contact</section> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle("portfolio")).data
      return {
        document,
      }
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" })
    }
  },
}
</script>