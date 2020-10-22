<template>
  <div>
    <h3 class="mb-4 font-bold text-2xl uppercase text-center">Topics</h3>
    <ul class="flex flex-wrap mb-4 text-center">
      <li
        v-for="topic of topics"
        :key="topic.slug"
        class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
      >
        <NuxtLink :to="`/post/topic/${topic.slug}`" class="">
          <p class="font-bold text-gray-600 uppercase tracking-wider text-ss">
            {{ topic.name }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
