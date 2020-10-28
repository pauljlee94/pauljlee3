<template>
  <div class="bg-black text-white font-work">
    <main>
      <!-- Intro -->
      <section
        class="h-screen flex flex-col justify-between pt-40 pb-6 px-6 text-right md:px-32"
      >
        <h1 v-scroll class="intro-title"></h1>
        <p class="branding">
          <span> PAUL J. LEE</span>
          <span>{{ new Date().getFullYear() }} PORTFOLIO</span>
        </p>
      </section>

      <!-- About -->
      <section
        ref="about_section"
        id="about"
        class="py-40 lg:py-64 max-w-6xl mx-auto px-6 lg:text-lg lg:flex lg:space-x-20 lg:items-center"
      >
        <div
          v-scroll
          class="box p-6 blend fade-up lg:w-2/3"
          v-html="home.about[0].text"
        ></div>
        <div class="mt-12 text-2xl lg:text-3xl flex flex-col space-y-10 lg:mt-0">
          <div
            v-scroll
            class="fade-up flex justify-between items-center space-x-20 type"
          >
            <h3>GitHub contributions in the last year</h3>
            <p v-if="contributions">
              {{
                contributions.contributionsCollection.contributionCalendar
                  .totalContributions
              }}
            </p>
          </div>
          <div
            v-for="metric in home.metrics"
            :key="metric.title[0].text"
            v-scroll
            class="fade-up flex justify-between type"
          >
            <h3>{{ metric.title[0].text }}</h3>
            <p>{{ metric.metric[0].text }}</p>
          </div>
          <!-- TODO: TECH EXPERTISE HERE? -->
          <!-- <div
            v-scroll
            class="fade-up flex justify-between items-center space-x-4 type"
          >
            <h3>GitHub contributions in the last year</h3>
            <p v-if="contributions">
              {{
                contributions.contributionsCollection.contributionCalendar
                  .totalContributions
              }}
            </p>
          </div> -->
        </div>
      </section>

      <!-- Work -->
      <section
        ref="work_section"
        id="work"
        class="h-screen flex flex-col justify-center items-center px-6"
      >
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
      <section
        ref="contact_section"
        id="contact"
        class="pt-48 pb-20 px-6 max-w-2xl mx-auto"
      >
        <form
          action="https://formspree.io/f/xgepkrjg"
          method="POST"
          class="flex flex-col justify-between"
        >
          <div>
            <label for="name" class="block text-lg"> Name </label>
            <div class="mt-2 border-2 border-white p-2">
              <input
                id="name"
                name="name"
                required
                class="bg-black block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div class="mt-3">
            <label for="email" class="block text-lg"> Email </label>
            <div class="mt-2 border-2 border-white p-2">
              <input
                id="email"
                name="email"
                required
                class="bg-black block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div class="mt-3">
            <label for="message" class="block text-lg"> Message </label>
            <div class="mt-2 border-2 border-white p-2">
              <textarea
                id="message"
                name="message"
                required
                class="h-64 bg-black resize-none block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div class="mt-6">
            <button
              class="border-2 p-4 w-full text-lg transition duration-00 hover:bg-white hover:text-black active:bg-white active:text-black"
            >
              Send
            </button>
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
        <p>
          Made with<span class="text-red-600 text-xl"> ♡ </span>by Paul J. Lee
        </p>
      </footer>
    </main>
  </div>
</template>

<script>
import gql from "graphql-tag"
import Typed from "typed.js"

export default {
  head() {
    return {
      title: "PAUL J. LEE",
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
    const home = (await $prismic.api.getSingle("home")).data
    const workItems = await $prismic.api
      .query($prismic.predicates.at("document.type", "portfolio"), {
        orderings: "[my.portfolio.order]",
      })
      .then((promise) => {
        return promise.results
      })
    // dateSince
    const startingDate = new Date("3/9/2019")
    const today = new Date()

    var diff = Math.floor(today.getTime() - startingDate.getTime())
    var lengthOfDayInSeconds = 1000 * 60 * 60 * 24,
      lengthOfMonthInSeconds = lengthOfDayInSeconds * 31,
      lengthOfYearInSeconds = lengthOfDayInSeconds * 365

    var yearsBetween = Math.floor(diff / lengthOfYearInSeconds)
    diff -= yearsBetween * lengthOfYearInSeconds

    var monthsBetween = Math.floor(diff / lengthOfMonthInSeconds)
    diff -= monthsBetween * lengthOfMonthInSeconds

    var daysBetween = Math.floor(diff / lengthOfDayInSeconds)

    let dateSince =
      yearsBetween +
      (yearsBetween === 1 ? " year " : " years ") +
      monthsBetween +
      (monthsBetween === 1 ? " month and " : " months and ") +
      daysBetween +
      (monthsBetween === 1 ? " day" : " days")

    home.about[0].text = home.about[0].text.replace("{{dateSince}}", dateSince)

    return { home: home, workItems: workItems }
  },

  apollo: {
    contributions: gql`
      query {
        contributions: user(login: "pauljlee94") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `,
  },

  mounted() {
    new Typed(".intro-title", {
      strings: [this.home.tagline[0].text],
      typeSpeed: 50,
      showCursor: false,
    })
  },

  layout: "defaultLayout",
}
</script>