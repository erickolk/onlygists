<script setup lang="ts">

const visible = defineModel<boolean>('visible')
</script>

<template>
  <Dialog v-model:visible="visible" header="Compra efetuada com sucesso!" :style="{ width: '400px' }">
    <div class="flex flex-col items-center m-0 justify-center w-full">
      <i class="pi pi-check-circle text-primary-500 text-6xl my-5"></i>
      <p class="font-[Inter] text-gray-700 text-center">
        Parabéns pela compra! Você receberá no email fornecido no checkout o seu gist 🤩
      </p>
    </div>

    <template #footer>
        <div class="flex justify-center w-full">
            <Button label="Voltar" icon="pi pi-arrow-left" @click="visible = false" autofocus/>
        </div>
    </template>
  </Dialog>
</template>
