<script setup>
import { useI18nStore } from '@/stores/modules/i18n';
const i18n = useI18nStore();
</script>
<template>
  <div class="bg-gray-800 shadow-xl sticky top-0 z-20">
    <div class="flex items-center mx-auto lg:w-2/3 w-5/6 bg-gray-700">
      <ul class="flex justify-around flex-1 lg:text-base text-sm overflow-auto">
        <router-link active-class="outline-1 outline-slate-400" class="p-5 rounded-sm" to="/">{{ i18n.t('nav_main') }}</router-link>
        <router-link active-class="outline-1 outline-slate-400" class="p-5 rounded-sm" to="/experience">{{ i18n.t('nav_experience') }}</router-link>
        <router-link active-class="outline-1 outline-slate-400" class="p-5 rounded-sm" to="/portfolio">{{ i18n.t('nav_portfolio') }}</router-link>
        <router-link active-class="outline-1 outline-slate-400" class="p-5 rounded-sm" to="/hobby">{{ i18n.t('nav_hobby') }}</router-link>
        <router-link active-class="outline-1 outline-slate-400" class="p-5 rounded-sm" to="/contacts">{{ i18n.t('nav_contacts') }}</router-link>
      </ul>
      <button
        class="lang-toggle"
        @click="i18n.toggleLocale()"
      >
        {{ i18n.locale === 'ru' ? 'EN' : 'RU' }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.lang-toggle {
  padding: 6px 12px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 6px;
  background: rgba(96, 165, 250, 0.15);
  color: rgb(147, 197, 253);
  border: 1px solid rgba(96, 165, 250, 0.3);
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  white-space: nowrap;
}
.lang-toggle:hover {
  background: rgba(96, 165, 250, 0.25);
  border-color: rgba(96, 165, 250, 0.5);
}
</style>
