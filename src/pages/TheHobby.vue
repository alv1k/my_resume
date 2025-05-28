<script setup>
  import { useStore } from '@/stores/index.js'
  const { user } = useStore()
  let dataUserStore = user;  
</script>
<template>
  <div>
    <div class="p-5 flex flex-col gap-5">
      <!-- <h1>Мои увлечения</h1> -->
       <div class="p-5 bg-gray-800/50" v-for="(hobby, index) in dataUserStore.userData.hobby" :key="index">
          <p class="text-xl font-semibold">{{ hobby.name }}</p>
          <p>{{ hobby.description }}</p>
          <p>{{ hobby.tool }}</p>
          <p>{{ hobby.samples }}</p>
          <p>{{ hobby.link }}</p>
       </div>
    </div>
  </div>
</template>