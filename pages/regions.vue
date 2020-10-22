<template>
  <div>
    <h3 class="mb-4 font-bold text-2xl uppercase text-center">Regions</h3>
    <ul class="flex flex-wrap mb-4 text-center">
      <li
        v-for="region of regions"
        :key="region.slug"
        class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
      >
        <NuxtLink :to="`/region/${region.slug}`" class="">
          <p class="font-bold text-gray-600 uppercase tracking-wider text-ss">
            {{ region.name }}
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
    const regions = await $content('regions', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      regions
    }
  }
}
</script>
