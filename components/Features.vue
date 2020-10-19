<template>
  <div class="grid md:grid-cols-3 row-gap-4 col-gap-2">
    <div v-for="article of features" :key="article.slug" class="col-span-1">
      <NuxtLink
        :to="{ name: 'post-slug', params: { slug: article.slug } }"
        class="transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md"
      >
        <div class="">
          <h2 class="font-extrabold text-lg">{{ article.title }}</h2>
          <p class="text-red-900 text-sm font-spectral">
            by {{ article.author.name }}
          </p>

          <p class="font-spectral text-sm">
            {{ article.description }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    features: {
      type: Array,
      default: () => []
    }
  }
}
</script>
