<template>
  <div>
    <!-- Intro -->
    <section class="h-screen flex flex-col justify-between pt-40 pb-6 px-6 text-right">
      <h1 class="text-6xl font-bold flex flex-col text-2xl leading-tight blend" v-html="home.tagline[0].text"></h1>
      <p class="flex flex-col text-lg blend">
        <span> PAUL J. LEE</span>
        <span>{{ new Date().getFullYear() }} PORTFOLIO</span>
      </p>
    </section>

    <!-- About -->
    <section id="about" class="h-screen px-6 pt-40">
      <div class="box blend" v-html="home.about[0].text">
      </div>
    </section>

    <!-- Work -->
    <section id="work" class="h-screen flex flex-col justify-center items-center px-6">
      <nuxt-link
        v-scroll
        v-for="item in workItems"
        :key="item.id"
        class="portfolio-item fade-up"
        :to="'/work/' + item.uid"
        v-html="item.data.title[0].text"
      >
      </nuxt-link>
    </section>

    <!-- Contact -->
    <section id="contact" class="h-screen pt-40 px-6">
      <div>contact</div>
    </section>

    <!-- Footer -->
    <footer class="flex justify-center py-10">
       <p>Made with<span class="pl-1 pr-2">❤️</span>by Paul J. Lee</p>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    const home = (await $prismic.api.getSingle('home')).data
    const workItems = await $prismic.api
      .query($prismic.predicates.at("document.type", "portfolio"),{ orderings : '[my.portfolio.order]' })
      .then((promise) => {
        return promise.results
      })
    return { home: home, workItems: workItems }
  },
}
</script>