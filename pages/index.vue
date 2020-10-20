<template>
  <div class="box-border">
    <HeroPost :post="heroPost" />
    <div class="mx-4 sm:mx-8 xl:mx-24 my-8">
      <div class="flex justify-between items-center">
        <NuxtLink to="/reacts">
          <h2 class="text-4xl font-spectral dark:text-darktitle">Reacts</h2>
        </NuxtLink>
        <NuxtLink to="/reacts">
          <h3 class="uppercase mr-6">All Reacts</h3>
        </NuxtLink>
      </div>
      <Articles :articles="articles" />
    </div>
    <div class="box-border bg-red-900 h-16"></div>
    <div class="mx-4 sm:mx-8 xl:mx-24 my-8">
      <div class="flex justify-between items-center">
        <NuxtLink to="/features">
          <h2 class="text-4xl font-spectral dark:text-darktitle">Features</h2>
        </NuxtLink>
        <NuxtLink to="/features">
          <h3 class="uppercase mr-6">All Features</h3>
        </NuxtLink>
      </div>
      <Features :features="features" />
    </div>
    <!-- <h3 class="mb-4 font-bold text-2xl uppercase text-center">Topics</h3>
    <ul class="flex flex-wrap mb-4 text-center">
      <li
        v-for="topic of topics"
        :key="topic.slug"
        class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
      >
        <NuxtLink :to="`/post/topic/${topic.slug}`" class="">
          <p class="font-bold text-gray-600 uppercase tracking-wider text-ss">
            {{ topic.name }}
          </p>
        </NuxtLink>
      </li>
    </ul> -->
    <div class="box-border bg-blue-900 h-16"></div>
  </div>
</template>

<script>
import HeroPost from '../components/HeroPost'
import Articles from '../components/Articles'
import Features from '../components/Features'
export default {
  components: {
    HeroPost,
    Articles,
    Features
  },
  async asyncData({ $content, params }) {
    const allArticles = await $content('articles', params.slug)
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'createdAt',
        'publishDate',
        'category',
        'topics',
        'id'
      ])
      .sortBy('publishDate', 'desc')
      .fetch()
    const topics = await $content('topics', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    const articles = allArticles
      .filter((article) => article.category === 'react')
      .slice(0, 6)
    const allFeatures = allArticles.filter(
      (article) => article.category === 'feature'
    )
    const heroPost = allFeatures[0]
    const features = allFeatures.slice(1, allFeatures.length)

    return {
      articles,
      features,
      heroPost,
      allFeatures,
      topics
    }
  }
}
</script>

<style class="postcss">
.article-card {
  border-radius: 8px;
  font-family: spectral, serif;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
