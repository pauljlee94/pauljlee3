<template>
  <div class>
    <header>
      <nav class="fixed flex">
        <nuxt-link to="/work/audioeye">
          <svg
            width="72"
            height="30"
            viewBox="0 0 72 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768158 14.0948 0.0768158 13.3137 0.857864L0.585786 13.5858ZM72 13L2 13V17L72 17V13Z"
              fill="white"
            />
          </svg>
        </nuxt-link>
        <nuxt-link class="homesweethome" to="/">🏠</nuxt-link>
        <nuxt-link to="/work/audioeye">
          <svg
            width="72"
            height="30"
            viewBox="0 0 72 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71.4142 16.4142C72.1953 15.6332 72.1953 14.3668 71.4142 13.5858L58.6863 0.857859C57.9052 0.0768107 56.6389 0.0768108 55.8579 0.857859C55.0768 1.63891 55.0768 2.90524 55.8579 3.68629L67.1716 15L55.8579 26.3137C55.0768 27.0948 55.0768 28.3611 55.8579 29.1421C56.6389 29.9232 57.9052 29.9232 58.6863 29.1421L71.4142 16.4142ZM1.74846e-07 17L70 17L70 13L-1.74846e-07 13L1.74846e-07 17Z"
              fill="white"
            />
          </svg>
        </nuxt-link>
      </nav>
    </header>
    <main class="bg-blue-400">
      <section>
        <h1 class="portfolio-title font-mont font-black">
					<span>Wyze</span>
					<span>Gyde</span>
				</h1>
        <h2 class="font-merr">
          I helped develop an
          <span class="underline">innovative</span> platform for real estate
          agents where they can
          <span class="underline">strategically analyze</span> property leads.
        </h2>
        <hr />
        <p class="summary">
          As a part of the team at Monogram, I helped create a badass platform
          for real estate agents where they can capture leads and opportunities.
          I mainly worked on the backend, connecting the app to Firebase &
          Prismic, dealing with large sets of property data as well as the
          status & details about leads. I also helepd with front end comopnents
          such as draggable components, datpickers, customizable agent home
          pages, etc.
        </p>
        <hr />
        <div id="metrics">
          <h3>Agency:</h3>
          <p>
            <a href="https://www.monogram.io" target="_blank">Monogram</a>
          </p>
          <h3>Tech:</h3>
          <p>
            <span>
              <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>
            </span>
            <span>
              <a href="https://firebase.google.com/" target="_blank"
                >Firebase</a
              >
            </span>
            <span>
              <a href="https://prismic.io/" target="_blank">Prismic</a>
            </span>
            <span>
              <a href="https://sendgrid.com/" target="_blank">SendGrid</a>
            </span>
            <span>
              <a href="https://vercel.com/" target="_blank">Vercel</a>
            </span>
          </p>
          <h3>Team:</h3>
          <p>
            <span>
              <a href="https://www.linkedin.com/in/cfofiu/" target="_blank"
                >Claudio Fofiu</a
              >
            </span>
            <span>
              <a href="https://www.linkedin.com/in/tjkohli/" target="_blank"
                >TJ Kholi</a
              >
            </span>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  layout: "work",
}
</script>

<style lang="scss" scoped>
</style>