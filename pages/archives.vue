<template>
  <div class="mx-auto h-screen-full">
    <div class="overflow-hidden px-4 col-span-1">
      <table class="table-auto mx-auto">
        <thead>
          <tr>
            <h1
              class="pl-8 font-bold text-lg text-red-900 dark:text-darkhighlight"
            >
              Features
            </h1>
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          <tr v-for="article of features" :key="article.slug">
            <td class="px-4">
              <p class="dark:text-darkcontent">
                {{ $formatDate(article.publishDate) }}
              </p>
            </td>
            <td class="pl-4 px-6">
              <NuxtLink
                :to="{ name: 'post-slug', params: { slug: article.slug } }"
              >
                <span class="dark:text-darkcontent">{{ article.title }}</span>
              </NuxtLink>

              <span
                class="text-sm font-spectral text-red-900 dark:text-darkheading"
              >
                by
                {{ article.author.name }}
              </span>
            </td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <h1
              class="pl-8 font-bold text-lg text-red-900 dark:text-darkhighlight"
            >
              Articles
            </h1>
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          <tr v-for="article of articles" :key="article.slug">
            <td class="px-4">
              <p class="dark:text-darkcontent">
                {{ $formatDate(article.publishDate) }}
              </p>
            </td>
            <td class="pl-4 px-6">
              <NuxtLink
                :to="{ name: 'post-slug', params: { slug: article.slug } }"
              >
                <span class="dark:text-darkcontent">{{ article.title }}</span>
              </NuxtLink>

              <span
                class="text-sm font-spectral text-red-900 dark:text-darkheading"
              >
                by
                {{ article.author.name }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .where({ category: { $contains: 'react' } })
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'publishDate',
        'createdAt'
      ])
      .sortBy('publishDate', 'desc')
      .fetch()
    const features = await $content('articles', params.slug)
      .where({ category: { $contains: 'feature' } })
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'publishDate',
        'createdAt'
      ])
      .sortBy('publishDate', 'desc')
      .fetch()

    return {
      articles,
      features
    }
  }
}
</script>

<style class="postcss">
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
