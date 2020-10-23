<template>
  <div>
    <h3
      class="mb-4 font-bold text-2xl uppercase text-center dark:text-darktitle"
    >
      Topics
    </h3>
    <ul class="flex flex-wrap mb-4 text-center">
      <li
        v-for="topic of topics"
        :key="topic.slug"
        class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
      >
        <NuxtLink :to="`/topic/${topic.slug}`">
          <p
            class="font-bold text-gray-600 dark:text-darkheading hover:underline uppercase tracking-wider text-ss"
          >
            {{ topic.name }}
          </p>
        </NuxtLink>
      </li>
    </ul>
    <div class="h-screen"></div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const topics = await $content('topics', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      topics
    }
  }
}
</script>
