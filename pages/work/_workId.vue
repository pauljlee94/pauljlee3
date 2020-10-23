<template>
  <div class="text-white" :style="'background-color:' + workItem.background">
    <!-- <WorkNav /> -->
    <main>
      <!-- Header -->
      <section>
        <h1 v-if="workItem.title[0].text" 
          class="flex flex-col portfolio-title"
          v-html="workItem.title[0].text"
        ></h1>
      </section>
			<!-- About -->
      <section class="pt-56 pr-6">				
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
			<section class="py-20">
				<img v-if="workItem.hero.url" class="hero-img" :src="workItem.hero.url" alt="">
			</section>
    </main>
  </div>
</template>

<script>
import WorkNav from "@/components/WorkNav"
export default {
  async asyncData({ $prismic, error, params }) {
    console.log(params)
    try {
      const workItem = (await $prismic.api.getByUID("portfolio", params.workId))
        .data
      return {
        workItem,
      }
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" })
    }
  },
  layout: "work",
}
</script>