<template>
  <div>
    <section
      class="h-screen flex flex-col justify-between pt-40 pb-6 px-6 text-right"
    >
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
    <section class="h-screen flex flex-col justify-center items-center p-6">
      <nuxt-link
        v-for="item in workItems"
        :key="item.id"
        class="portfolio-item blend"
        :to="'/work/' + item.uid"
        v-html="item.data.title[0].text"
      >
      </nuxt-link>
    </section>
    <!-- <section>about</section>
    <section>contact</section> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    const workItems = await $prismic.api
      .query($prismic.predicates.at("document.type", "portfolio"),{ orderings : '[my.portfolio.order]' })
      .then((promise) => {
        return promise.results
      })
    return { workItems: workItems }
  },
}
</script>