<template>
  <div class="container grid md:grid-cols-12 mb-2 mx-auto">
    <div class="md:col-span-8">
      <NuxtLink
        :to="{ name: 'post-slug', params: { slug: post.slug } }"
        class="col-span-3 transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md"
      >
        <img class="" :src="post.img" :alt="post.title" />
      </NuxtLink>
    </div>
    <div class="mx-8 px-5 md:col-span-4 py-5">
      <NuxtLink :to="{ name: 'post-slug', params: { slug: post.slug } }">
        <h2 class="sm:text-2xl lg:text-4xl font-extrabold">
          {{ post.title }}
        </h2>
        <span class="mr-3">
          <!-- {{ formatDate(post.createdAt) }} -->
        </span>
        <p class="text-sm font-spectral text-red-900">
          by {{ post.author.name }}
        </p>
        <p class="font-spectral text-md py-5">
          {{ post.description }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
