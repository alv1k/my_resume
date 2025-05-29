<script setup>
  import { useStore } from '@/stores/index.js'
  import { ref, onMounted } from 'vue';
  const { user } = useStore()
  let dataUserStore = user;  
  
  const isVisible = ref(false);

  onMounted(() => {
    isVisible.value = true;
  });
  console.log(isVisible.value, 'ooo');
</script>
<template>
  <div>
    <Transition name="fade">
      <div v-show="isVisible" class="p-5 flex flex-col gap-5">
        <!-- <h1>Мои увлечения</h1> -->
         <div class="p-5 bg-gray-800/50" v-for="(hobby, index) in dataUserStore.userData.hobby" :key="index">
            <p class="text-xl font-semibold">{{ hobby.name }}</p>
            <p>{{ hobby.description }}</p>
            <p>{{ hobby.tool }}</p>
            <p>{{ hobby.samples }}</p>
            <p>{{ hobby.link }}</p>
         </div>
      </div>
    </Transition>
  </div>
</template>
<style scoped>
/* Анимация появления/исчезновения */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>