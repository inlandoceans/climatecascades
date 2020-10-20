<template>
  <div class="grid md:grid-cols-3 gap-x-12 gap-y-4">
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
            <span
              class="truncate font-spectral lowercase text-sm text-gray-600 my-4"
            >
              {{ tag }}
            </span>
          </span>
          <h2
            class="text-2xl font-crimsonpro font-semibold text-blue-900 dark:text-darkheading"
          >
            {{ article.title }}
          </h2>
          <span
            class="uppercase text-red-900 dark:text-darkhighlight text-sm font-bold"
          >
            {{ $formatDate(article.publishDate) }}
          </span>
          <span class="mx-2 dark:text-darkhighlight">•</span>
          <span class="text-red-900 text-md dark:text-darkhighlight">
            By {{ article.author.name }}
          </span>

          <p class="my-2 font-spectral text-md dark:text-darkcontent">
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
  }
}
</script>
