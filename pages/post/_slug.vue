<template>
  <article>
    <!-- Layout for features -->
    <div v-if="template">
      <div>
        <div
          class="heroImage opacity-100 md:h-screen"
          :style="{ backgroundImage: `url(${article.img})` }"
        >
          <div class="pt-16 mt-16 text-center z-10">
            <NuxtLink to="/">
              <span class="text-6xl leading-none text-white">Climate</span>
              <span class="uppercase text-2xl text-white">Cascades</span>
            </NuxtLink>
          </div>
          <NavBar class="text-white z-50" />
          <div class="herobox relative z-10 py-4 my-64">
            <h2
              class="max-w-lg text-4xl font-semibold text-white dark:text-darktitle px-5"
            >
              {{ article.title }}
            </h2>
            <span class="uppercase text-white dark:text-darktitle font-bold">
              {{ $formatDate(article.publishDate) }}
            </span>

            <span class="text-xl text-white"> by {{ article.author }} </span>
          </div>
        </div>
      </div>

      <div class="z-10 max-w-2xl mx-auto h-full px-12 my-4 text-lg sm:text-xl">
        <p class="l mb-4 dark:text-darkcontent font-semibold">
          {{ article.description }}
        </p>
        <!-- content from markdown -->
        <nuxt-content :document="article" class="dark:text-darkcontent z-10" />

        <!-- prevNext component -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
    </div>

    <!-- Layout for non features -->
    <div v-if="!template">
      <TheHeader />
      <div class="max-w-lg items-center mx-auto dark:text-darkcontent">
        <div class="text-center">
          <img :src="article.img" :alt="article.alt" class="" />
          <h1 class="mt-4 mb-2 text-2xl font-bold">{{ article.title }}</h1>
          <span
            class="uppercase text-red-900 dark:text-darkhighlight text-sm font-bold"
          >
            {{ $formatDate(article.publishDate) }}
          </span>
          <span class="mx-2 dark:text-darkhighlight">•</span>
          <span class="text-red-900 text-lg dark:text-darkhighlight">
            By {{ article.author.name }}
          </span>
          <p class="text-lg font-semibold mb-8">{{ article.description }}</p>
        </div>
        <!-- <span v-for="(topic, id) in article.topics" :key="id">
          <NuxtLink :to="`/blog/topic/${topics[topic].slug}`">
            <span
              class="truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
            >
              {{ topics[topic].name }}
            </span>
          </NuxtLink>
        </span> -->

        <!-- content from markdown -->
        <nuxt-content :document="article" class="text-lg sm:text-xl" />

        <!-- prevNext component -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
    </div>
  </article>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  layout: 'feature',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const topicsList = await $content('topics')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.topics } })
      .fetch()
    const topics = Object.assign(
      {},
      ...topicsList.map((s) => ({ [s.name]: s }))
    )
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('publishDate', 'asc')
      .surround(params.slug)
      .fetch()
    const template = article.category === 'feature'

    return {
      article,
      topics,
      prev,
      next,
      template
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        mainImage: this.article.image
      }
      return getSiteMeta(metaData)
    }
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt
        },
        {
          property: 'article:topic',
          content: this.article.topics ? this.article.topics.toString() : ''
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: this.article.author },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.article.topics ? this.article.topics.toString() : ''
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://climatecascades.com/post/${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>
<style>
.heroImage {
  background-position-x: 50%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  box-sizing: border-box;
}
.heroImage::after {
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}

.nuxt-content p {
  margin-bottom: 20px;
}

.nuxt-content a {
  color: #9b2c2c;
  text-decoration: underline;
}

.nuxt-content a:hover {
  color: #742a2a;
  text-decoration: underline;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 24;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 20px;
}
</style>
