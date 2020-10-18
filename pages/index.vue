<template>
  <div class="mx-5 py-5">
    <div>
      <HeroPost :post="heroPost" />
    </div>
    <div class="mx-4 my-4 h-1 bg-gradient-to-r from-blue-800 to-red-800"></div>

    <div>
      <Articles :articles="articles" />
    </div>
    <h3 class="mb-4 font-bold text-2xl uppercase text-center">Topics</h3>
    <ul class="flex flex-wrap mb-4 text-center">
      <li
        v-for="tag of tags"
        :key="tag.slug"
        class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
      >
        <NuxtLink :to="`/post/tag/${tag.slug}`" class="">
          <p class="font-bold text-gray-600 uppercase tracking-wider text-ss">
            {{ tag.name }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import HeroPost from '../components/HeroPost'
import Articles from '../components/Articles'
export default {
  components: {
    HeroPost,
    Articles
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author', 'feature'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    const heroPost = articles[0]
    return {
      articles,
      heroPost,
      tags
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
