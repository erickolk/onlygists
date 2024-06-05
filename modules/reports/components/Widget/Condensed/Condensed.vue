<script setup lang="ts">

const props = defineProps<{
    value: number | string,
    label: string
}>()
</script>

<template>

    <div class="flex flex-1 flex-col bg-white p-5 rounded-xl">
        <span class="font-[inter] text-4xl text-primary-500 font-bold">{{ props.value }}</span>
        <p class="font-[Inter] text-xl text-gray-700">{{ props.label }}</p>
    </div>

</template>