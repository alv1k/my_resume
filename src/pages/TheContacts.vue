<script setup>
  import { PhoneIcon } from 'lucide-vue-next';
  import { AtSign } from 'lucide-vue-next';
  import { Navigation } from 'lucide-vue-next';
  import { useStore } from '@/stores/index.js';
  import { ref } from 'vue';
  import { Car } from 'lucide-vue-next';
  import { Mail } from 'lucide-vue-next';
  import { Phone } from 'lucide-vue-next';
  import { onMounted } from 'vue';

  const isVisible = ref(false);

  onMounted(() => {
    isVisible.value = true;
  });
  const { user } = useStore()

 
  let dataUserStore = user;
  
</script>
<template>
  <div class="">
    <Transition name="fade">
      <div v-show="isVisible">
        <div class="p-5 mx-auto w-fit lg:h-50 lg:py-40 lg:text-base text-sm">
          <div class="flex gap-3">
            <PhoneIcon :size="14" class="align-middle mt-1" />
            <a :href="'tel:+7' + dataUserStore.userData.phone_number">+7 {{ dataUserStore.userData.phone_number }}</a>
          </div>
          <div class="flex gap-3">
            <AtSign :size="14" class="align-middle mt-1" />
            <a :href="'mailto:'+dataUserStore.userData.email">{{ dataUserStore.userData.email }}</a>
          </div>
          <div class="flex gap-3 cursor-default">
            <Navigation :size="14" class="align-middle mt-1" />
            <a>{{ dataUserStore.userData.location }}</a>
          </div>
        </div>
        <div class="p-6 pb-50 flex flex-col gap-5 items-center">
          <a  :href="'mailto:' + dataUserStore.userData.email">
            <button class="text-nowrap flex gap-2">
              <Mail />
              Написать письмо
            </button>
          </a>
          <a target="_blank" href=" https://api.whatsapp.com/send?phone=9142364278">
            <button class="text-nowrap flex gap-2">
              <Phone />
              Связаться по whatsapp
            </button>
          </a>
          <a class="flex" target="_blank" href="https://go.2gis.com/gXFkQ">      
            <button class="text-nowrap flex gap-2">
              <Car />
              Направиться по адресу
            </button>
          </a>
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