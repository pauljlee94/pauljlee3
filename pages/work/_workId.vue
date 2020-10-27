<template>
  <div class="text-white overflow-hidden" :style="'background-color:' + workItem.background">
    <main>
      <!-- Header -->
      <section>
        <h1 v-if="workItem.title[0]" 
          :class="['portfolio-title', $route.params.workId]"
          v-html="workItem.title[0].text"
        ></h1>
      </section>

			<!-- About -->
      <section class="work-about pt-64 px-4">				
				<div class="sm:col-start-2 lg:pr-20 xxl:pr-64">
					<h2 v-if="workItem.tagline[0]" 
						class="font-merr text-3xl leading-tight blend"
						v-html="workItem.tagline[0].text"
					></h2>

					<hr v-if="workItem.tagline[0]" class="my-4 blend" />

					<p v-if="workItem.summary[0]" 
						class="text-lg font-work font-light leading-snug blend"
						v-html="workItem.summary[0].text"
					></p>

					<hr v-if="workItem.summary[0]" class="my-4 blend" />

					<div v-if="workItem.metrics[0]" class="metrics grid grid-cols-2 gap-2 blend font-work font-bold text-lg" v-html="workItem.metrics[0].text"></div>
				</div>
      </section>

			<!-- Hero -->
			<img v-if="workItem.hero.url"  class="hero-img pt-20 pb-40" :src="workItem.hero.url" alt="">

			<!-- Images -->
			<section class="sm:px-8">
				<!-- Image group -->
				<div v-for="imageGroup in workItem.images" :key="imageGroup.key" class="flex flex-col xl:flex-row" :class="imageGroup.multiple ? imageGroup.position : null">
					<!-- Image -->
					<template v-for="(img, index) in imageGroup.images">
						<div  v-if="img.url" :key="img.url" class="imageContainer mb-20 sm:mb-24 lg:mb-40 xl:mb-64 mx-auto">
							<img v-scroll :src="img.url" :alt="imageGroup.key"  :class="['shadow-xxl', Object.keys(imageGroup.images[1]).length > 1 ? index === 0 ? 'left-image' : 'right-image' : null ,imageGroup.decorative ? null : 'relative']"/>
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
						:class="['portfolio-next', nextItem.uid, checkNameLength(nextItem.data.title[0].text) <= 6 ? 'sm:float-right' : null]"
						v-html="nextItem.data.title[0].text"
					></nuxt-link>
				</nav>
			</footer>
    </main>
  </div>
</template>

<script>
export default {
	head() {
		return {
			title: this.$route.params.workId.toUpperCase() + ' - PAUL J. LEE',
			// meta: [
			// 	// hid is used as unique identifier. Do not use `vmid` for it as it will not work
			// 	{
			// 		hid: 'description',
			// 		name: 'description',
			// 		content: 'My custom description'
			// 	}
			// ]
		}
	},
  async asyncData({ $prismic, error, params }) {
		const workItem = (await $prismic.api.getByUID("portfolio", params.workId)).data
    const workItems = await $prismic.api.query($prismic.predicates.at("document.type", "portfolio"),{ orderings : '[my.portfolio.order]' }).then(promise =>{
     return promise.results
		})

		for (const group of workItem.images) {
			group.multiple = group.image2.url ? true : false
			group.images = [group.image, group.image2]
		}

		const nextIndex = workItems.findIndex(item => {
			return item.uid === params.workId
		}) + 1

		const nextItem = workItems[nextIndex] ? workItems[nextIndex] : workItems[0]

		return {  workItem: workItem, workItems: workItems, nextItem: nextItem }
	},

	methods: {
		checkNameLength(text) {
			let length = 0
			length = text.split('</span>')[0].split('>')[1].length + text.split('</span>')[1].split('>')[1].length
			return length
		}
	},

  layout: "workLayout",
}
</script>