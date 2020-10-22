<template>
  <div>
    <HeroPost :post="heroPost" />
    <div class="mx-4 sm:mx-8 xl:mx-24 my-8">
      <div class="flex justify-between items-center">
        <NuxtLink to="/reacts">
          <h2 class="postList text-4xl dark:text-darktitle">Reacts</h2>
        </NuxtLink>
        <NuxtLink to="/archives/#reacts">
          <h3
            id="reacts"
            class="uppercase mr-6 border-b-2 border-solid font-semibold border-red-800"
          >
            All Reacts
          </h3>
        </NuxtLink>
      </div>
      <Articles :articles="articles" />
    </div>
    <div class="bg-red-900 h-8"></div>
    <div class="mx-4 sm:mx-8 xl:mx-24 my-8">
      <div class="flex justify-between items-center">
        <NuxtLink to="/features">
          <h2 class="featureList text-4xl dark:text-darktitle">Features</h2>
        </NuxtLink>
        <NuxtLink to="/archives/#features">
          <h3
            id="features"
            class="uppercase mr-6 border-b-2 border-solid font-semibold border-blue-800"
          >
            All Features
          </h3>
        </NuxtLink>
      </div>
      <Features :features="features" />
    </div>
    <div class="bg-blue-900 h-8"></div>
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
<style scoped>
.postList {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  letter-spacing: 3px;
  line-height: 1.273;
}

.postList::before {
  background: #9b2c2c;
  content: '';
  display: block;
  -webkit-flex: 0 0 5px;
  -ms-flex: 0 0 5px;
  flex: 0 0 5px;
  margin-bottom: 6px;
  margin-right: 20px;
  margin-top: 5px;
  position: relative;
}

.featureList {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  letter-spacing: 3px;
  line-height: 1.273;
}
.featureList::before {
  background: #2c5282;
  content: '';
  display: block;
  -webkit-flex: 0 0 5px;
  -ms-flex: 0 0 5px;
  flex: 0 0 5px;
  margin-bottom: 6px;
  margin-right: 20px;
  margin-top: 5px;
  position: relative;
}
</style>
