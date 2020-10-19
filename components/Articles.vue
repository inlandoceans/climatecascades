<template>
  <div class="grid md:grid-cols-3 gap-8">
    <div
      v-for="article of articles"
      :key="article.slug"
      class="my-4 col-span-1"
    >
      <NuxtLink
        :to="{ name: 'post-slug', params: { slug: article.slug } }"
        class=""
      >
        <img
          :src="article.img"
          :alt="article.alt"
          class="h-48 object-cover w-full"
        />
      </NuxtLink>
      <NuxtLink
        :to="{ name: 'post-slug', params: { slug: article.slug } }"
        class=""
      >
        <div class="">
          <span v-for="tag in article.tags" :key="tag">
            <NuxtLink :to="`/post/tag/${tag}`">
              <span
                class="truncate font-spectral lowercase text-sm text-gray-600 my-4"
              >
                {{ tag }}
              </span>
            </NuxtLink>
          </span>
          <h2 class="text-2xl font-spectral text-blue-900">
            {{ article.title }}
          </h2>
          <span class="uppercase text-red-900 text-sm font-bold">
            {{ formatDate(article.createdAt) }}
          </span>
          <span class="mx-3">•</span>
          <span class="uppercase text-red-900 text-sm">
            {{ article.author.name }}
          </span>

          <p class="my-4 font-spectral text-sm dark:text-gains">
            {{ article.description }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
