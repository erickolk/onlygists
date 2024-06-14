<script setup lang="ts">
import PublicHeadLine from '@/modules/users/components/PublicHeadLine/PublicHeadLine.vue'
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
import WidgetGroupLoader from '@/modules/reports/components/Widget/Group/Loader.vue'
import GistCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
import GistCardItem from '@/modules/gists/components/Card/Item/Item.vue'
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
      <GistCardItem />
      <GistCardItem />
      <GistCardItem />
      <GistCardItem />
    </GistCardGroup>
  </WidgetDefault>
</template>
