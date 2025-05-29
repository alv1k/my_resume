<template>
  <div class="bg-gray-800 shadow-xl sticky top-0 z-20">
    <ul class="flex justify-around lg:text-base text-sm mx-auto lg:w-2/3 w-5/6 bg-gray-700 overflow-auto">
      <router-link active-class="outline-1 outline-slate-400" class="p-5 rounded-sm" to="/">Главная</router-link>
      <!-- <router-link to="/experience">Релевантный опыт</router-link> -->
      <router-link active-class="outline-1 outline-slate-400" class="p-5 rounded-sm" to="/portfolio">Портфолио</router-link>
      <router-link active-class="outline-1 outline-slate-400" class="p-5 rounded-sm" to="/hobby">Хобби</router-link>
      <router-link active-class="outline-1 outline-slate-400" class="p-5 rounded-sm" to="/contacts">Контакты</router-link>
    </ul>
  </div>
</template>