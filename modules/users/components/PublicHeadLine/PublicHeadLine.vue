<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string
  avatarUrl: string
  bio: string
  city: string
  state: string
}>(), {
  name: 'Erick Oliveira',
  avatarUrl: 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg',
  bio: 'lorem32',
  city: 'Coité do Nóia',
  state: 'Alagoas'
})
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center gap-2">
    <div class="w-24 md:w-32 rounded-full overflow-hidden">
        <img class="w-full" :src="props.avatarUrl" alt="foto do usuário">
    </div>
    <h1 class="font-[Inter] text-gray-700 text-center font-bold text-2xl md:text-3xl">{{  props.name }}</h1>
    <p class="font-[Inter] text-center text-gray-700 md:text-lg" v-if="props.bio">{{ props.bio }}</p>
    <p class="font-[Inter] text-center text-gray-500 text-sm md:text-base" v-if="props.city && props.state">
        <i class="pi pi-map-marker"></i>
        {{ props.city }}, {{ props.state }}</p>
  </div>
</template>
