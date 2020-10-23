<template>
  <div class="text-white overflow-y-hidden" :style="'background-color:' + workItem.background">
    <!-- <WorkNav /> -->
    <main>
      <!-- Header -->
      <section>
        <h1 v-if="workItem.title[0].text" 
          class="portfolio-title"
          v-html="workItem.title[0].text"
        ></h1>
      </section>

			<!-- About -->
      <section class="pt-56 px-4">				
        <h2 v-if="workItem.tagline[0].text" 
          class="font-merr text-2xl leading-tight blend"
          v-html="workItem.tagline[0].text"
        ></h2>

        <hr class="my-4 blend" />

        <p v-if="workItem.summary[0].text" 
          class="text-lg font-work font-light leading-snug blend"
          v-html="workItem.summary[0].text"
        ></p>

        <hr class="my-4 blend" />

        <div class="metrics grid grid-cols-2 gap-2 blend font-work font-bold text-lg" v-html="workItem.metrics[0].text"></div>
      </section>

			<!-- Hero -->
			<img v-if="workItem.hero.url"  class="hero-img py-20" :src="workItem.hero.url" alt="">

			<!-- Images -->
			<section>
				<!-- Image group -->
				<div v-for="imageGroup in workItem.images" :key="imageGroup.key">
					<template v-for="img in imageGroup" >
						<img :key="img.url" v-if="img && img.url" :src="img.url" :alt="imageGroup.key" class="mb-20" :class="imageGroup.decorative ? null : 'relative'" />
					</template>
				</div>
			</section>

			<!-- Footer Banner -->
			<img v-if="workItem.footerimg.url"  class="hero-img py-20" :src="workItem.footerimg.url" alt="">

			<!-- Footer -->
			<footer>
				<nav aria-label="footer">
					<nuxt-link
						to="/"
						class="portfolio-home"
					>Home</nuxt-link>
					<nuxt-link
						:to="'/work/' + nextItem.uid"
						class="portfolio-next"
						v-html="nextItem.data.title[0].text"
					></nuxt-link>
				</nav>
			</footer>
    </main>
  </div>
</template>

<script>
// import WorkNav from "@/components/WorkNav"

export default {
  async asyncData({ $prismic, error, params }) {
		const workItem = (await $prismic.api.getByUID("portfolio", params.workId)).data
    const workItems = await $prismic.api.query($prismic.predicates.at("document.type", "portfolio"),{ orderings : '[my.portfolio.order]' }).then(promise =>{
     return promise.results
		})

		const nextIndex = workItems.findIndex(item => {
			return item.uid === params.workId
		}) + 1

		const nextItem = workItems[nextIndex] ? workItems[nextIndex] : workItems[0]

		console.log(nextItem);

		return {  workItem: workItem, workItems: workItems, nextItem: nextItem }
	},
	
	mounted () {
		// itemIndex = this.workItems.findIndex(item => {
		// 	return item.uid === this.$route.params.workId
		// }) + 1
	},
  layout: "work",
}
</script>