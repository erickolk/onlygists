<script setup lang="ts">
import HeadLineEdit from '@/modules/users/components/HeadLineEdit/HeadLineEdit.vue'
import HeadLineEditLoader from '@/modules/users/components/HeadLineEdit/Loader.vue'
import type { MySelfContextProvider } from '~/modules/users/composables/useMySelf/types'
import { mySelfKey } from '~/modules/users/composables/useMySelf/useMySelf'

const { user, loading } = inject(mySelfKey) as MySelfContextProvider
</script>

<template>
  <HeadLineEditLoader :loading="loading">
    <HeadLineEdit
      @share="handleShare"
      @navigate-to-profile="handleNavigateToProfile"
      class="my-10"
      :username="user?.username"
      :avatar-url="user?.avatarUrl"
    />
  </HeadLineEditLoader>
</template>
