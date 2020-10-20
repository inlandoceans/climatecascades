<template>
  <div class="grid gap-y-8">
    <div
      v-for="article of features"
      :key="article.slug"
      class="my-4 grid grid-cols-5 gap-4"
    >
      <NuxtLink
        :to="{ name: 'post-slug', params: { slug: article.slug } }"
        class="col-span-3"
      >
        <img
          :src="article.img"
          :alt="article.alt"
          class="w-full md:h-48 lg:h-64 object-cover"
        />
      </NuxtLink>
      <NuxtLink
        :to="{ name: 'post-slug', params: { slug: article.slug } }"
        class="col-span-2 border-b border-solid border-blue-800"
      >
        <div class="px-4">
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
    features: {
      type: Array,
      default: () => []
    }
  }
}
</script>
