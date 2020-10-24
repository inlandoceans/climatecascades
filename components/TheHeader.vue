<template>
  <header class="sm:text-center items-center pt-2 pl-2 sm:pl-0 mx-auto">
    <NuxtLink to="/">
      <span class="text-4xl md:text-6xl leading-none dark:text-darktitle"
        >Climate</span
      >
      <span class="text-xl md:text-2xl uppercase dark:text-darktitle"
        >Cascades</span
      >
    </NuxtLink>
    <NavBar />

    <img
      src="/logo.png"
      alt="logo"
      class="sm:pl-2 h-2 w-1/3 sm:text-center sm:mx-auto mb-8"
    />
    <div>
      <!-- <AppSearchInput class="ml-8 items-center" /> -->
    </div>
    <nav
      class="hidden md:flex mx-auto text-center my-4 py-4 border-t border-solid border-blue-800 dark:border-white"
    >
      <ul
        class="mx-auto flex font-crimsonpro text-lg font-semibold text-center uppercase text-red-900 dark:text-darkheading"
      >
        <NuxtLink to="/topics"> <li class="">Topics</li></NuxtLink>
        <li class="mx-3">•</li>

        <NuxtLink to="/regions"> <li class="">Regions</li> </NuxtLink>
        <li class="mx-3">•</li>

        <NuxtLink to="/archives"> <li class="">Archives</li></NuxtLink>
        <li class="mx-3">•</li>

        <NuxtLink to="/about"> <li class="">About</li></NuxtLink>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    }
  }
}
</script>
