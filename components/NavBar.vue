<template>
  <nav class="">
    <button
      class="z-10 absolute right-0 top-0 mr-8 mt-12"
      aria-label="Open Menu"
      @click="drawer"
    >
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="w-8 h-8"
      >
        <path d="M4 6h16M4 12h16M4 18h16" class="dark:text-white"></path>
      </svg>
    </button>

    <div class="flex items-center">
      <div class="hidden md:block md:justify-between md:bg-transparent"></div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="z-20 fixed inset-0 transition-opacity"
        @keydown.esc="isOpen = false"
      >
        <div
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
          @click="isOpen = false"
        ></div>
      </div>
    </transition>
    <aside
      class="transform top-0 right-0 w-64 bg-white dark:bg-darkbg fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? '-translate-x-0' : 'translate-x-full'"
    >
      <ul
        class="mx-auto font-spectral font-semibold text-center uppercase text-red-900 dark:text-darkheading"
      >
        <NuxtLink to="/topics">
          <li class="" @click="isOpen = false">Topics</li></NuxtLink
        >
        <li class="mx-3">•</li>

        <NuxtLink to="/regions"> <li class="">Regions</li> </NuxtLink>
        <li class="mx-3">•</li>

        <NuxtLink to="/archives"> <li class="">Archives</li></NuxtLink>
        <li class="mx-3">•</li>

        <NuxtLink to="/about"> <li class="">About</li></NuxtLink>
        <li class="mx-3">•</li>
      </ul>
      <!-- <span
        class="flex w-full items-center p-4 border-b"
        @click="isOpen = false"
      >
      </span>
      <span
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        @click="isOpen = false"
        ><span class="mr-2"> </span> <span>Home</span></span
      >
      <span
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        @click="isOpen = false"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
        <span>Trending Globally</span></span
      >
      <span
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        @click="isOpen = false"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </span>
        <span>Wishlist</span></span
      >
      <span
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        @click="isOpen = false"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
        <span>About</span></span
      >
      <span
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        @click="isOpen = false"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </span>
        <span>Contact</span></span
      >
      <div class="fixed bottom-0 w-full">
        <button
          class="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="h-6 w-6 mr-2"
          >
            <path
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            ></path>
          </svg>
          <span>Share</span>
        </button>
      </div> -->
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false
    })
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
