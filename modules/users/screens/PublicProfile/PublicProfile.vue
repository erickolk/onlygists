<script setup lang="ts">
import PublicHeadLine from '@/modules/users/components/PublicHeadLine/PublicHeadLine.vue'
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
import WidgetGroupLoader from '@/modules/reports/components/Widget/Group/Loader.vue'
import GistCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
import GistCardGroupLoader from '@/modules/gists/components/Card/Group/Loader.vue'
import GistCardItem from '@/modules/gists/components/Card/Item/Item.vue'

const route = useRoute()
const router = useRouter()

const handleNavigateToDatail = (id: string) => {
  const { username } = route.params

  router.push(`/${username}/gist/${id}`)
}
</script>

<template>
  <PublicHeadLine />
  <WidgetGroup>
    <WidgetGroupLoader :loading="false" :amount="3">
      <WidgetCondensed :value="10" label="Gists do total" />
      <WidgetCondensed :value="5" label="Gists gratuitos" />
      <WidgetCondensed :value="5" label="Gists pagos" />
    </WidgetGroupLoader>
  </WidgetGroup>

  <WidgetDefault title="Todos os gists">
    <GistCardGroup>
      <GistCardGroupLoader :loading="false">
        <GistCardItem
        v-for="n in 10"
        key="n"
        @tap="handleNavigateToDatail"
        id="123"
        title="useCurrentUser.ts"
        description="Hook para controlar a **store** do usuário"
        :price="10"
        lang="typescript"
        />
      </GistCardGroupLoader>
    </GistCardGroup>
  </WidgetDefault>
</template>
