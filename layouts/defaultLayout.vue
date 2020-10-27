<template>
  <div class="bg-black text-white font-work">
    <header class="fixed p-6 md:p-32 z-10 blend">
      <nav class="flex flex-col">
        <a class="main-nav-item" v-scroll-to="'#about'" href="#about" @click.prevent>
          <span class="underline ">About</span>
          <!-- <span :class="[$route.hash.includes('about') ? 'active' : null, 'fade-in']">•</span> -->
        </a>
        <a class="main-nav-item" v-scroll-to="'#work'" href="#work" @click.prevent>
          <span class="underline">Work</span> 
          <!-- <span :class="[$route.hash.includes('work') ? 'active' : null, 'fade-in']">•</span> -->
        </a>
        <a class="main-nav-item" v-scroll-to="'#contact'" href="#contact" @click.prevent>
          <span class="underline">Contact</span>
          <!-- <span :class="[$route.hash.includes('contact') ? 'active' : null, 'fade-in']">•</span> -->
        </a>
      </nav>
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

