<script setup>

import { Monitor } from 'lucide-vue-next';
import { Smartphone } from 'lucide-vue-next';
import { ExternalLink } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>
<template>
  <div>
    <Transition name="fade">
      <div v-show="isVisible" class="p-5 flex flex-col gap-10">    
        <div class="bg-gray-800/50 p-5">
          <h2>1. Сайт. Личный кабинет арендатора</h2>
          <p>HTML/CSS/React</p>
          <div class="flex h-40 overflow-hidden">
            <div class="w-1/2">
              <div class="flex gap-2 my-3">
                <Monitor />
                <p>десктопная версия</p>
              </div>
              <div>
                <a href="">
                  <img class="w-50 rounded-xl" src="@/assets/images/arm-kdm (1).png" alt="">
                </a>
              </div>
            </div>
            <div class="">
              <div class="flex gap-2 my-3">
                <Smartphone />
                <p>мобильная версия</p>
              </div>
              <div>            
                <a href="">
                  <img class="w-30 rounded-xl" src="@/assets/images/arm-kdm-mobile.png" alt="">
                </a>            
              </div>
            </div>
          </div>
          <div class="flex gap-2 mt-10">
            <ExternalLink />
            <a class="" target="_blank" href="https://arenda.aokdm.ru">https://arenda.aokdm.ru</a>
          </div>
        </div>
        <div class="bg-gray-800/50 p-5">
          <h2>2. Внутренний сервис по учету документации, имущества, товара и т.п.</h2>
          <p>HTML/CSS/Vue2</p>
          <div class="flex h-40 overflow-hidden">
            <div class="w-1/2">
              <div class="flex gap-2 my-3">
                <Monitor />
                <p>десктопная версия</p>
              </div>
              <div>
                <a href="">
                  <img class="w-50 rounded-xl" src="@/assets/images/agreements.png" alt="">
                </a>
              </div>
            </div>
            <div class="">
              <div class="flex gap-2 my-3">
                <Smartphone />
                <p>мобильная версия</p>
              </div>
              <div>            
                <a href="">
                  <img class="w-30 rounded-xl" src="@/assets/images/agreements-mobile.png" alt="">
                </a>            
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-800/50 p-5">
          <h2>3. Внутренний сервис по учету документации, имущества, товара и т.п. (backend)</h2>
          <p>PHP/MySQL</p>
          <div class="flex h-40 overflow-hidden pt-3">
            <a href="">
              <img class="w-50 rounded-xl" src="@/assets/images/php-sql.png" alt="">
            </a>
          </div>
        </div>
        <div class="bg-gray-800/50 p-5">
          <h2>4. E-mail рассылка по заказу, офомленному на сайте</h2>
          <p>HTML/CSS - tag table/adaptive/dark theme</p>
          <div class="flex h-50 overflow-hidden">
            <div class="w-1/2">
              <div class="flex gap-2 my-3">
                <Monitor />
                <p>десктопная версия</p>
              </div>
              <div class="flex gap-5">
                <a href="">
                  <img class="w-30 rounded-xl" src="@/assets/images/uc-letter.png" alt="">
                </a>
                <a href="">
                  <img class="w-30 rounded-xl" src="@/assets/images/pe-letter.png" alt="">
                </a>
              </div>
            </div>
            <div class="">
              <div class="flex gap-2 my-3">
                <Smartphone />
                <p>мобильная версия</p>
              </div>
              <div class="flex gap-5">
                <a href="">
                  <img class="w-30 rounded-xl" src="@/assets/images/uc-letter-mobile.png" alt="">
                </a>
                <a href="">
                  <img class="w-30 rounded-xl" src="@/assets/images/pe-letter-mobile.png" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-800/50 p-5">
          <h2>5. E-mail рассылка по передаче показаний счетчиков</h2>
          <p>HTML/CSS - tag table/adaptive/dark theme</p>
          <div class="flex h-40 overflow-hidden">
            <div class="w-1/2">
              <div class="flex gap-2 my-3">
                <Monitor />
                <p>десктопная версия</p>
              </div>
              <div>
                <a href="">
                  <img class="w-30 rounded-xl" src="@/assets/images/arm-kdm-letter.png" alt="">
                </a>
              </div>
            </div>
            <div class="">
              <div class="flex gap-2 my-3">
                <Smartphone />
                <p>мобильная версия</p>
              </div>
              <div>            
                <a href="">
                  <img class="w-30 rounded-xl" src="@/assets/images/arm-kdm-letter-mobile.png" alt="">
                </a>            
              </div>
            </div>
          </div>
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