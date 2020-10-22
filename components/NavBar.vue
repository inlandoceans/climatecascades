<template>
  <nav class="z-10 absolute right-0 top-0 mr-4 mt-6 md:mr-8 md:mt-12">
    <ul class="flex items-center">
      <li class="mr-4">
        <ColorModePicker class="dark:text-white" />
      </li>
      <li>
        <button class="outline-none" aria-label="Open Menu" @click="drawer">
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
      </li>
    </ul>
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
      class="transform top-0 right-0 w-64 bg-white dark:bg-darkbg fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50"
      :class="isOpen ? '-translate-x-0' : 'translate-x-full'"
    >
      <NuxtLink to="/">
        <h2 class="mt-6 dark:text-darktitle">
          <span class="text-4xl">Climate</span>
          <span class="uppercase text-lg">Cascades</span>
        </h2>

        <img src="/logo.png" alt="logo" class="pl-6 pr-6 object-contain" />
      </NuxtLink>
      <AppSearchInput class="mt-8 my-2 px-2 text-md normal-case text-red-900" />
      <ul
        class="mx-auto my-8 px-8 font-semibold text-lg text-left uppercase text-blue-900 dark:text-darkheading"
      >
        <li
          class="mt-4 border-b border-blue-900 hover:bg-gray-100"
          @click="isOpen = false"
        >
          Articles
        </li>
        <NuxtLink to="/#reacts">
          <li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            Reacts
          </li></NuxtLink
        >
        <NuxtLink to="/#features"
          ><li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            Features
          </li></NuxtLink
        >
        <li
          class="mt-4 border-b border-blue-900 hover:bg-gray-100"
          @click="isOpen = false"
        >
          Topics
        </li>
        <!-- <NuxtLink to="/post/topic/nuxtjs">
          <li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            Geopolitics
          </li></NuxtLink
        >
        <NuxtLink to="/topics"
          ><li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            Technology
          </li></NuxtLink
        >
        <NuxtLink to="/topics"
          ><li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            Mitigation
          </li></NuxtLink
        >
        <NuxtLink to="/topics"
          ><li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            Adaptation
          </li></NuxtLink
        >
        <NuxtLink to="/topics"
          ><li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            Disasters
          </li></NuxtLink
        >
        <NuxtLink to="/topics"
          ><li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            Terrestrial
          </li></NuxtLink
        >
        <NuxtLink to="/topics"
          ><li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            Oceans
          </li></NuxtLink
        > -->

        <NuxtLink to="/regions">
          <li
            class="mt-4 border-b border-blue-900 hover:bg-gray-100"
            @click="isOpen = false"
          >
            Regions
          </li>
        </NuxtLink>
        <NuxtLink to="/region/global">
          <li class="pl-4 hover:bg-gray-100" @click="isOpen = false">Global</li>
        </NuxtLink>
        <NuxtLink to="/region/Africa">
          <li class="pl-4 hover:bg-gray-100" @click="isOpen = false">Africa</li>
        </NuxtLink>
        <NuxtLink to="/region/arctics">
          <li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            Arctics
          </li>
        </NuxtLink>
        <NuxtLink to="/region/asia">
          <li class="pl-4 hover:bg-gray-100" @click="isOpen = false">Asia</li>
        </NuxtLink>
        <NuxtLink to="/region/europe">
          <li class="pl-4 hover:bg-gray-100" @click="isOpen = false">Europe</li>
        </NuxtLink>
        <NuxtLink to="/region/n-america">
          <li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            North America
          </li>
        </NuxtLink>
        <NuxtLink to="/region/oceania">
          <li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            Oceania
          </li></NuxtLink
        >
        <NuxtLink to="/region/s-america">
          <li class="pl-4 hover:bg-gray-100" @click="isOpen = false">
            South America
          </li></NuxtLink
        >
        <NuxtLink to="/archives">
          <li class="mt-4 border-t border-blue-900 hover:bg-gray-100">
            Archives
          </li></NuxtLink
        >
        <NuxtLink to="/about">
          <li class="hover:bg-gray-100">About</li></NuxtLink
        >
      </ul>
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
