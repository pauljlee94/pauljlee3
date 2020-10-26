<template>
  <div class="bg-black text-white font-work">
    <header class="fixed p-6 md:p-12 z-10 blend">
      <nav class="flex flex-col">
        <nuxt-link class="main-nav-item" to="/#about">
          <span class="underline">About</span>
          <!-- <span :class="[$route.hash.includes('about') ? 'active' : null, 'fade-in']">•</span> -->
        </nuxt-link>
        <nuxt-link class="main-nav-item" to="/#work">
          <span class="underline">Work</span> 
          <!-- <span :class="[$route.hash.includes('work') ? 'active' : null, 'fade-in']">•</span> -->
        </nuxt-link>
        <nuxt-link class="main-nav-item" to="/#contact">
          <span class="underline">Contact</span>
          <!-- <span :class="[$route.hash.includes('contact') ? 'active' : null, 'fade-in']">•</span> -->
        </nuxt-link>
      </nav>
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

