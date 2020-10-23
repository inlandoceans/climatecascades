<template>
  <div class="grid md:grid-cols-3 gap-x-12 gap-y-8">
    <div
      v-for="article of articles"
      :key="article.slug"
      class="col-span-3 md:col-span-1 grid grid-cols-3 gap-2 md:my-4 md:block"
    >
      <NuxtLink
        :to="{ name: 'post-slug', params: { slug: article.slug } }"
        class="col-span-1"
      >
        <img
          :src="article.img"
          :alt="article.alt"
          class="object-cover w-full h-full md:h-48 md:block"
        />
      </NuxtLink>

      <div class="col-span-2 md:block">
        <span v-for="topic in article.topics" :key="topic">
          <span
            class="dark:text-darkhighlight truncate lowercase text-sm text-blue-900 my-4"
          >
            {{ topic }}
          </span>
        </span>
        <NuxtLink :to="{ name: 'post-slug', params: { slug: article.slug } }">
          <h2
            class="text-xl font-semibold text-blue-900 hover:text-blue-700 dark:text-darkheading"
          >
            {{ article.title }}
          </h2>
        </NuxtLink>
        <NuxtLink :to="{ name: 'post-slug', params: { slug: article.slug } }">
          <span
            class="uppercase text-red-900 hover:text-red-700 dark:text-darkhighlight text-sm font-bold"
          >
            {{ $formatDate(article.publishDate) }}
          </span></NuxtLink
        >
        <span class="mx-1 dark:text-darkhighlight">•</span>
        <span
          class="text-red-900 font-semibold text-md dark:text-darkhighlight"
        >
          By {{ article.author.name }}
        </span>
        <NuxtLink :to="{ name: 'post-slug', params: { slug: article.slug } }">
          <p class="my-2 text-lg dark:text-darkcontent">
            {{ article.description }}
          </p></NuxtLink
        >
      </div>
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
