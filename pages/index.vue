<template>
  <div class="container">
    <div>
      <h1 class="title">pauljlee3</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
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