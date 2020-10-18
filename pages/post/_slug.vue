<template>
  <article>
    <div v-if="article.feature">
      <div class="py-8 text-center">
        <img :src="article.img" :alt="article.alt" class="" />

        <h1 class="text-4xl md:text-6xl font-bold">{{ article.title }}</h1>
        <span v-for="(tag, id) in article.tags" :key="id">
          <NuxtLink :to="`/tag/${tags[tag].slug}`">
            <span
              class="truncate uppercase tracking-wider font-medium text-sm px-2 py-1 rounded mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
            >
              {{ tags[tag].name }}
            </span>
          </NuxtLink>
        </span>
        <p class="py-2 text-lg">{{ article.description }}</p>
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
        <p class="pb-4">
          Post last updated: {{ formatDate(article.updatedAt) }}
        </p>
        <!-- content author component -->
        <author class="hidden" :author="article.author" />
        <!-- prevNext component -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
    </div>
    <div v-if="!article.feature">
      <p>blabla</p>
    </div>
  </article>
</template>

<script>
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
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
<style>
.nuxt-content p {
  margin-bottom: 20px;
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
