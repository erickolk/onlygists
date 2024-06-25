<script setup lang="ts">
import type { MySelfContextProvider } from '~/modules/users/composables/useMySelf/types';
import { mySelfKey } from '~/modules/users/composables/useMySelf/useMySelf'

const { user } = inject(mySelfKey) as MySelfContextProvider
console.log('user', user)
</script>

<template>{{ user?.name ?? 'Carregando' }}</template>
