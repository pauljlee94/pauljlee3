<template>
  <div>
    <!-- Intro -->
    <section class="h-screen flex flex-col justify-between pt-40 pb-6 px-6 text-right md:px-32">
      <h1 class="intro-title" v-html="home.tagline[0].text"></h1>
      <p class="branding">
        <span> PAUL J. LEE</span>
        <span>{{ new Date().getFullYear() }} PORTFOLIO</span>
      </p>
    </section>

    <pre v-if="contributions">{{contributions.contributionsCollection.contributionCalendar.totalContributions}}</pre>

    <!-- About -->
    <section id="about" class="h-screen max-w-2xl mx-auto px-6 pt-48">
      <div  v-scroll class="box p-6 blend fade-up" v-html="home.about[0].text"></div>
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
    <section id="contact" class="pt-48 pb-20 px-6 max-w-2xl mx-auto">
      <form action="https://formspree.io/f/xgepkrjg"  method="POST" class="flex flex-col justify-between">
        <div>
          <label for="name" class="block text-lg">
            Name
          </label>
          <div class="mt-2 border-2 border-white p-2">
            <input id="name" name="name" required class="bg-black block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
          </div>
        </div>
        <div class="mt-3">
          <label for="email" class="block text-lg">
            Email
          </label>
          <div class="mt-2 border-2 border-white p-2">
            <input id="email" name="email" required class="bg-black block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
          </div>
        </div>
        <div class="mt-3">
          <label for="message" class="block text-lg">
            Message
          </label>
          <div class="mt-2 border-2 border-white p-2">
            <textarea id="message" name="message" required class="h-64 bg-black resize-none block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
          </div>
        </div>
        <div class="mt-6">
          <button class="border-2 p-4 w-full text-lg transition duration-00 hover:bg-white hover:text-black active:bg-white active:text-black">Send</button>
        </div>
      </form>
      <div class="mt-16">
        <div class="border-2 p-4 w-full text-lg grid grid-cols-2 gap-y-3">
          <a class="underline" href="">GitHub</a>
          <a class="underline" href="">LinkedIn</a>
          <a class="underline" href="">Email</a>
          <a class="underline" href="">Phone</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="flex justify-center py-10">
       <p>Made with<span class="pl-1 pr-2">❤️</span>by Paul J. Lee</p>
    </footer>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  head() {
		return {
			title: 'PAUL J. LEE',
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
  async asyncData({ $prismic, error }) {
    const home = (await $prismic.api.getSingle('home')).data
    const workItems = await $prismic.api
      .query($prismic.predicates.at("document.type", "portfolio"),{ orderings : '[my.portfolio.order]' })
      .then((promise) => {
        return promise.results
      })
    return { home: home, workItems: workItems }
  },
  
  apollo: {
    contributions: gql `
      query {
        contributions: user(login: "pauljlee94") {
          contributionsCollection {
            contributionCalendar  {
             totalContributions
            }
          }
        }
      }
    `
  },
  layout: "defaultLayout"
}
</script>