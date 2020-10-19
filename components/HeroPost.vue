<template>
  <div
    class="heroImage px-16 py-24 opacity-100"
    :style="{ backgroundImage: `url(${post.img})` }"
  >
    <NuxtLink :to="{ name: 'post-slug', params: { slug: post.slug } }" class="">
      <!-- <img
          class="relative items-center text-center"
          :src="post.img"
          :alt="post.title"
        /> -->
    </NuxtLink>

    <div class="relative z-10">
      <NuxtLink :to="{ name: 'post-slug', params: { slug: post.slug } }">
        <h2 class="text-6xl font-extrabold text-white">
          {{ post.title }}
        </h2>
        <span class="mr-3">
          <!-- {{ formatDate(post.createdAt) }} -->
        </span>
        <p class="text-sm font-spectral text-red-900">
          by {{ post.author.name }}
        </p>
        <p class="mx-auto font-spectral text-md py-5">
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
<style scoped>
.heroImage {
  background-position-x: 50%;
  background-position-y: 25%;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;
  position: relative;
  text-align: center;
  box-sizing: border-box;
}
</style>
