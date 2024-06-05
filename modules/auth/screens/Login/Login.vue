<script setup lang="ts">
import { useServices } from '~/composables/useServices/useServices';
import SocialForm from '../../components/SocialForm/SocialForm.vue';

const services = useServices()
const loading = ref<boolean>(false)

const handleGitubLogin = async () => {
    loading.value = true
    await services.auth.signInWithGithub()
}

</script>

<template>
<section class="w-full h-screen flex flex-col items-center justify-center gap-5 bg-gray-500">
    <h1 class="text-3xl">Logo</h1>
    <SocialForm :loading="loading" @wants-login-with-github="handleGitubLogin"/>
</section>
</template>