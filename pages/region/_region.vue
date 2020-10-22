<template>
  <div class="px-8 pt-4">
    <div class="text-center">
      <h1 class="text-4xl font-bold">
        {{ region.name }}
      </h1>
      <p class="">{{ region.description }}</p>

      <nuxt-content :document="region" />
    </div>
    <h3 class="border-b-2 border-solid border-blue-800">
      Features tagged {{ region.name }}:
    </h3>
    <div class="grid md:grid-cols-3 gap-x-12 gap-y-8">
      <div
        v-for="article of features"
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
        <NuxtLink
          :to="{ name: 'post-slug', params: { slug: article.slug } }"
          class="col-span-2"
        >
          <div class="md:block">
            <span v-for="topic in article.topics" :key="topic">
              <span class="truncate lowercase text-sm text-blue-900 my-4">
                {{ topic }}
              </span>
            </span>
            <h2
              class="text-xl md:text-2xl font-semibold text-blue-900 hover:text-blue-700 dark:text-darkheading"
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

            <p class="my-2 text-md dark:text-darkcontent">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <h3 class="border-b-2 border-solid border-blue-800">
      Reacts tagged {{ region.name }}:
    </h3>
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
        <NuxtLink
          :to="{ name: 'post-slug', params: { slug: article.slug } }"
          class="col-span-2"
        >
          <div class="md:block">
            <span v-for="topic in article.topics" :key="topic">
              <span class="truncate lowercase text-sm text-blue-900 my-4">
                {{ topic }}
              </span>
            </span>
            <h2
              class="text-xl md:text-2xl font-semibold text-blue-900 hover:text-blue-700 dark:text-darkheading"
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

            <p class="my-2 text-md dark:text-darkcontent">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const regions = await $content('regions')
      .where({ slug: { $contains: params.region } })
      .limit(1)
      .fetch()
    const region = regions.length > 0 ? regions[0] : {}

    const allArticles = await $content('articles', params.slug)
      .where({ regions: { $contains: region.name } })
      .sortBy('publishDate', 'desc')
      .fetch()

    const articles = allArticles
      .filter((article) => article.category === 'react')
      .slice(0, 6)

    const features = allArticles.filter(
      (article) => article.category === 'feature'
    )
    return {
      region,
      regions,
      articles,
      features
    }
  }
}
</script>
