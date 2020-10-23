<template>
  <div class="bg-black text-white font-work">
    <header class="fixed p-6">
      <nav class="flex flex-col">
        <a class="main-nav-item" href="#">Work</a>
        <a class="main-nav-item" href="#">Contact</a>
      </nav>
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
  export default {
    methods: {
      poop(evt,el) {
        console.log('test');
      }
    },
  }
</script>
