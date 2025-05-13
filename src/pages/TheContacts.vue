<script setup>
  import { PhoneIcon } from 'lucide-vue-next';
  import { AtSign } from 'lucide-vue-next';
  import { Navigation } from 'lucide-vue-next';
  import { useStore } from '@/stores/index.js'
  const { user } = useStore()
  let dataUserStore = user;
  
</script>
<template>
  <div class="p-5 mx-auto w-fit">
    <div class="flex gap-3">
      <PhoneIcon :size="14" class="align-middle mt-1" />
      <a href="">+7 {{ dataUserStore.userData.phone_number }}</a>
    </div>
    <div class="flex gap-3">
      <AtSign :size="14" class="align-middle mt-1" />
      <a href="">{{ dataUserStore.userData.email }}</a>
    </div>
    <div class="flex gap-3">
      <Navigation :size="14" class="align-middle mt-1" />
      <a href="">{{ dataUserStore.userData.location }}</a>
    </div>
  </div>
</template>