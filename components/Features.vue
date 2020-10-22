<template>
  <div class="grid gap-y-2">
    <div
      v-for="article of features"
      :key="article.slug"
      class="my-4 grid grid-cols-5 gap-x-4"
    >
      <NuxtLink
        :to="{ name: 'post-slug', params: { slug: article.slug } }"
        class="col-span-5 md:col-span-3"
      >
        <img
          :src="article.img"
          :alt="article.alt"
          class="w-full h-64 object-cover"
        />
      </NuxtLink>
      <NuxtLink
        :to="{ name: 'post-slug', params: { slug: article.slug } }"
        class="col-span-5 md:col-span-2 border-b-2 border-solid border-blue-800"
      >
        <div class="px-4">
          <h2
            class="pt-4 text-2xl font-crimsonpro font-semibold text-blue-900 dark:text-darkheading"
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

          <p class="my-2 font-crimsonpro text-lg dark:text-darkcontent">
            {{ article.description }}
          </p>
        </div>
      </NuxtLink>
      <div class="w-1/2 mt-2 border-t-4 border-solid border-blue-800"></div>
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
