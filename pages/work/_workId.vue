<template>
  <div class="text-white overflow-hidden" :style="'background-color:' + workItem.background">
    <main>
      <!-- Header -->
      <section>
        <h1 v-if="workItem.title[0]" 
          class="portfolio-title"
          v-html="workItem.title[0].text"
        ></h1>
      </section>

			<!-- About -->
      <section class="pt-56 px-4">				
        <h2 v-if="workItem.tagline[0]" 
          class="font-merr text-2xl leading-tight blend"
          v-html="workItem.tagline[0].text"
        ></h2>

        <hr v-if="workItem.tagline[0]" class="my-4 blend" />

        <p v-if="workItem.summary[0]" 
          class="text-lg font-work font-light leading-snug blend"
          v-html="workItem.summary[0].text"
        ></p>

        <hr v-if="workItem.summary[0]" class="my-4 blend" />

        <div v-if="workItem.metrics[0]" class="metrics grid grid-cols-2 gap-2 blend font-work font-bold text-lg" v-html="workItem.metrics[0].text"></div>
      </section>

			<!-- Hero -->
			<img v-if="workItem.hero.url"  class="hero-img pt-20 pb-40" :src="workItem.hero.url" alt="">

			<!-- Images -->
			<section class="sm:px-8">
				<!-- Image group -->
				<div v-for="imageGroup in workItem.images" :key="imageGroup.key" class="flex flex-col sm:flex-row">
					<!-- Image -->
					<template v-for="(img, index) in imageGroup.images">
						<div  v-if="img.url" :key="img.url" class="imageContainer mb-20 sm:mb-24 lg:mb-40 xl:mb-64 mx-auto">
							<img :src="img.url" :alt="imageGroup.key"  :class="['shadow-xxl', Object.keys(imageGroup.images[1]).length > 0 ? index === 0 ? 'left-image' : 'right-image' : null, imageGroup.decorative ? null : 'relative']"/>
						</div>
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
export default {
  async asyncData({ $prismic, error, params }) {
		const workItem = (await $prismic.api.getByUID("portfolio", params.workId)).data
    const workItems = await $prismic.api.query($prismic.predicates.at("document.type", "portfolio"),{ orderings : '[my.portfolio.order]' }).then(promise =>{
     return promise.results
		})

		workItem.images.forEach(group => {
			group.images = [group.image, group.image2]
			delete group.image
			delete group.image2
		})

		const nextIndex = workItems.findIndex(item => {
			return item.uid === params.workId
		}) + 1

		const nextItem = workItems[nextIndex] ? workItems[nextIndex] : workItems[0]

		return {  workItem: workItem, workItems: workItems, nextItem: nextItem }
	},

  layout: "work",
}
</script>