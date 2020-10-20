<template>
  <header class="text-center pt-2">
    <NuxtLink to="/">
      <span class="text-6xl leading-none dark:text-darktitle"> Climate</span>
      <span class="uppercase text-2xl dark:text-darktitle">Cascades</span>
    </NuxtLink>
    <NuxtLink to="/"
      ><img src="/logo.png" alt="logo" class="text-center mx-auto mb-4"
    /></NuxtLink>
    <!--  -->

    <!-- <AppSearchInput class="ml-8 items-center" /> -->
    <nav
      class="flex mx-auto text-center my-4 py-4 border-t border-solid border-blue-800 dark:border-white"
    >
      <ul
        class="mx-auto flex font-spectral font-semibold text-center uppercase text-red-900 dark:text-darkheading"
      >
        <NuxtLink to="/topics"> <li class="">Topics</li></NuxtLink>
        <li class="mx-3">•</li>

        <NuxtLink to="/regions"> <li class="">Regions</li> </NuxtLink>
        <li class="mx-3">•</li>

        <NuxtLink to="/archive"> <li class="">Archive</li></NuxtLink>
        <li class="mx-3">•</li>

        <NuxtLink to="/about"> <li class="">About</li></NuxtLink>
        <li class="mx-3">•</li>
        <li>
          <button
            class="uppercase font-spectral font-semibold focus:outline-none"
            @click="toggle"
          >
            Theme
          </button>
        </li>
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
