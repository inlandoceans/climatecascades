<template>
  <div>
    <h1 class="font-bold text-lg text-red-900">Features</h1>

    <tbody class="ml-8">
      <tr v-for="article of features" :key="article.slug" class="flex">
        <NuxtLink
          :to="{ name: 'post-slug', params: { slug: article.slug } }"
          class="inline-block"
        >
          <td class="">
            <p>{{ $formatDate(article.publishDate) }}</p>
          </td>
          <td class="">
            <p>{{ article.title }}</p>
          </td>
          <td>
            <p class="text-sm font-spectral text-red-900">
              by {{ article.author.name }}
            </p>
          </td>
        </NuxtLink>
      </tr>
    </tbody>
    <h1 class="font-bold text-lg text-red-900">Articles</h1>
    <ul class="ml-8">
      <li v-for="article of articles" :key="article.slug" class="flex">
        <NuxtLink
          :to="{ name: 'post-slug', params: { slug: article.slug } }"
          class=""
        >
          <span class="mr-3"> {{ $formatDate(article.publishDate) }}</span>
          <span class="">{{ article.title }}</span>
          <span class="text-sm font-spectral text-red-900">
            by {{ article.author.name }}
          </span>
        </NuxtLink>
      </li>
    </ul>
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
