<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/index.js';
import { useI18nStore } from '@/stores/modules/i18n';
import { Briefcase } from 'lucide-vue-next';
import { GraduationCap } from 'lucide-vue-next';
import { Code } from 'lucide-vue-next';

const { user } = useStore();
const i18n = useI18nStore();
const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>
<template>
  <div class="lg:p-14 p-5">
    <Transition name="fade">
      <div v-show="isVisible" class="flex flex-col gap-10">

        <section>
          <h2 class="flex gap-2 items-center mb-6"><Briefcase /> {{ i18n.t('work_experience') }}</h2>
          <div class="flex flex-col gap-5">
            <div
              v-for="(item, index) in user.experience"
              :key="index"
              class="bg-gray-700 p-5 rounded-sm border-l-4 border-blue-500"
            >
              <div class="flex justify-between items-start flex-wrap gap-2">
                <h3 class="capitalize">{{ item.organization }}</h3>
                <span class="text-sm text-gray-400">{{ item.start_date }} — {{ item.end_date ?? i18n.t('present') }}</span>
              </div>
              <p class="text-blue-400 mt-1">{{ item.position }}</p>
              <p class="mt-2 text-gray-300">{{ item.responsibilities }}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="flex gap-2 items-center mb-6"><Code /> {{ i18n.t('tech_stack') }}</h2>
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div class="bg-gray-700 p-4 rounded-sm">
              <h3 class="text-blue-400 mb-2">{{ i18n.t('frontend') }}</h3>
              <p>HTML5 / CSS3 / Tailwind CSS</p>
              <p>JavaScript / TypeScript</p>
              <p>Vue 2 / Vue 3 / React</p>
              <p>Pinia / Vue Router</p>
              <p>ApexCharts</p>
            </div>
            <div class="bg-gray-700 p-4 rounded-sm">
              <h3 class="text-blue-400 mb-2">{{ i18n.t('backend') }}</h3>
              <p>PHP / RedBean ORM</p>
              <p>MySQL</p>
              <p>Python</p>
            </div>
            <div class="bg-gray-700 p-4 rounded-sm">
              <h3 class="text-blue-400 mb-2">{{ i18n.t('tools') }}</h3>
              <p>Git / GitHub</p>
              <p>Vite</p>
              <p>Vercel</p>
              <p>npm</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="flex gap-2 items-center mb-6"><GraduationCap /> {{ i18n.t('education') }}</h2>
          <div class="flex flex-col gap-4">
            <div class="bg-gray-700 p-4 rounded-sm border-l-4 border-green-500">
              <div class="flex justify-between flex-wrap gap-2">
                <h3>{{ i18n.t('edu_1') }}</h3>
                <span class="text-sm text-gray-400">2020 — 2022</span>
              </div>
            </div>
            <div class="bg-gray-700 p-4 rounded-sm border-l-4 border-green-500">
              <div class="flex justify-between flex-wrap gap-2">
                <h3>{{ i18n.t('edu_2') }}</h3>
                <span class="text-sm text-gray-400">2013 — 2016</span>
              </div>
            </div>
            <div class="bg-gray-700 p-4 rounded-sm border-l-4 border-green-500">
              <div class="flex justify-between flex-wrap gap-2">
                <h3>{{ i18n.t('edu_3') }}</h3>
                <span class="text-sm text-gray-400">2008 — 2013</span>
              </div>
            </div>
            <div class="bg-gray-700 p-4 rounded-sm border-l-4 border-green-500">
              <div class="flex justify-between flex-wrap gap-2">
                <h3>{{ i18n.t('edu_4') }}</h3>
                <span class="text-sm text-gray-400">2003 — 2008</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Transition>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
