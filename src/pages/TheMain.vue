<template>
  <div>    
    <h1 class="text-base" @click="handleNameClick()">
      {{ dataUserStore.userData.name + ' ' + dataUserStore.userData.last_name }}
      {{ isSecondName ? dataUserStore.userData.second_name : '' }}
    </h1>
  </div>
</template>
<script> 
  import { useStore } from '@/stores/index.js'
  export default {
    setup() {
      const { user } = useStore()
      let dataUserStore = user;
      let isSecondName = false;
    
      function handleNameClick() {
        isSecondName = !isSecondName
        console.log(isSecondName, 'click here');
      }
      return { dataUserStore, isSecondName, handleNameClick };

    }
  }
</script>