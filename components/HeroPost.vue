<template>
  <div>
    <NuxtLink :to="{ name: 'post-slug', params: { slug: post.slug } }" class="">
      <div
        class="heroImage sm:px-8 sm:py-12 md:px-16 md:py-24 opacity-100"
        :style="{ backgroundImage: `url(${post.img})` }"
      >
        <div class="herobox relative z-10 py-4">
          <h2 class="text-6xl font-bold text-white">
            {{ post.title }}
          </h2>
          <span class="mr-3 text-white font-bold">
            {{ formatDate(post.createdAt) }}
          </span>
          <!-- <p class="text-sm font-spectral text-white">
            by {{ post.author.name }}
          </p> -->
          <p
            class="max-w-md mx-auto my-5 text-white text-xl font-bold font-spectral text-md"
          >
            {{ post.description }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
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
<style scoped>
.heroImage {
  background-position-x: 50%;
  background-position-y: 50%;
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
.heroImage::after {
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.herobox {
  border: 3px solid white;
}

.herobox:hover {
  border: 3px solid rgb(67, 67, 102);
}

.herobox::before {
  content: '';
  position: absolute;
  top: -6px;
  right: -6px;
  bottom: -6px;
  left: -6px;
  border: 1px solid white;
}
</style>
