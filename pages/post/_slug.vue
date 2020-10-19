<template>
  <article>
    <div v-if="article.feature">
      <div class="py-8 text-center">
        <img :src="article.img" :alt="article.alt" class="" />

        <h1 class="beforeafter text-4xl md:text-6xl font-bold">
          {{ article.title }}
        </h1>
        <span v-for="(tag, id) in article.tags" :key="id">
          <NuxtLink :to="`/tag/${tags[tag].slug}`">
            <span
              class="truncate uppercase tracking-wider font-medium text-sm px-2 py-1 rounded mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
            >
              {{ tags[tag].name }}
            </span>
          </NuxtLink>
        </span>
        <p class="font-spectral py-2 text-lg">{{ article.description }}</p>
        <div class="mx-24 h-1 bg-gradient-to-r from-blue-800 to-red-800"></div>
        <div class="text-center mt-8 uppercase text-sm text-red-800">
          <span class="mr-3">
            {{ formatDate(article.updatedAt) }}
          </span>
          <span class="mr-3">•</span>
          <NuxtLink :to="`/author/${article.author.name}`">
            <span>{{ article.author.name }}</span>
          </NuxtLink>
        </div>
      </div>
      <div class="max-w-2xl mx-auto h-full px-6">
        <!-- table of contents -->
        <nav class="hidden pb-6">
          <ul>
            <li
              v-for="link of article.toc"
              :key="link.id"
              :class="{
                'font-semibold': link.depth === 2
              }"
            >
              <nuxtLink
                :to="`#${link.id}`"
                class="hover:underline"
                :class="{
                  'py-2': link.depth === 2,
                  'ml-2 pb-2': link.depth === 3
                }"
                >{{ link.text }}</nuxtLink
              >
            </li>
          </ul>
        </nav>
        <!-- content from markdown -->
        <nuxt-content :document="article" max-w-2xl />
        <p class="pb-4 font-spectral">
          Post last updated: {{ formatDate(article.updatedAt) }}
        </p>
        <!-- content author component -->
        <author class="hidden" :author="article.author" />
        <!-- prevNext component -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
    </div>
    <div
      v-if="!article.feature"
      class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
    >
      <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
        <img
          :src="article.img"
          :alt="article.alt"
          class="absolute h-full w-full object-cover"
        />
        <div class="overlay"></div>
        <div class="absolute top-32 left-32 text-white">
          <NuxtLink to="/"><Logo /></NuxtLink>
          <div class="mt-16 -mb-3 flex uppercase text-sm">
            <p class="mr-3">
              {{ formatDate(article.updatedAt) }}
            </p>
            <span class="mr-3">•</span>
            <p>{{ article.author.name }}</p>
          </div>
          <h1 class="text-6xl font-bold">{{ article.title }}</h1>
          <span v-for="(tag, id) in article.tags" :key="id">
            <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
              <span
                class="truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
              >
                {{ tags[tag].name }}
              </span>
            </NuxtLink>
          </span>
        </div>
        <div class="flex absolute top-3rem right-3rem">
          <NuxtLink
            to="/"
            class="mr-8 self-center text-white font-bold hover:underline"
          >
            All articles
          </NuxtLink>
          <a
            href="https://nuxtjs.org/blog/creating-blog-with-nuxt-content"
            class="mr-8 self-center text-white font-bold hover:underline"
          >
            Tutorial
          </a>
          <AppSearchInput />
        </div>
      </div>
      <div
        class="relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
      >
        <h1 class="font-bold text-4xl">{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <p class="pb-4">
          Post last updated: {{ formatDate(article.updatedAt) }}
        </p>
        <!-- table of contents -->
        <nav class="pb-6">
          <ul>
            <li
              v-for="link of article.toc"
              :key="link.id"
              :class="{
                'font-semibold': link.depth === 2
              }"
            >
              <nuxtLink
                :to="`#${link.id}`"
                class="hover:underline"
                :class="{
                  'py-2': link.depth === 2,
                  'ml-2 pb-2': link.depth === 3
                }"
                >{{ link.text }}</nuxtLink
              >
            </li>
          </ul>
        </nav>
        <!-- content from markdown -->
        <nuxt-content :document="article" />
        <!-- content author component -->
        <author :author="article.author" />
        <!-- prevNext component -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
    </div>
  </article>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
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
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
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
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : ''
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: this.article.author },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : ''
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
.beforeafter {
  border: 1px solid red;
}

.beforeafter::before {
  position: absolute;
  top: -6px;
  right: -6px;
  bottom: -6px;
  left: -6px;
  border: 3px solid red;
}
.beforeafter::after {
  width: 1px;
  height: 400px;
  content: '\0020';
  display: block;
  pointer-events: none;
  position: absolute;
  top: 100%;
  left: 50%;
  background: red;
}

.nuxt-content p {
  margin-bottom: 20px;
  font-family: spectral, serif;
}

.nuxt-content a {
  color: red;
}

.nuxt-content a:hover {
  color: aqua;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
