<script setup>
  import { PhoneIcon } from 'lucide-vue-next';
  import { AtSign } from 'lucide-vue-next';
  import { Navigation } from 'lucide-vue-next';
  import { useStore } from '@/stores/index.js';
  import ECharts from '@/components/ECharts.vue';
  import TheSkillsChart from '@/components/TheSkillsChart.vue';
  import { ref } from 'vue';
  // const ECharts = defineAsyncComponent(() => import('@/components/ECharts.vue'));
  const { user } = useStore()

  const option = ref({
    title: {
      text: 'Пример диаграммы',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Данные',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Поиск' },
          { value: 735, name: 'Почта' },
          { value: 580, name: 'Реклама' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });
  const optionSkills = ref({
    title: {
      text: 'Пример диаграммы',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    xAxis: { data: ['Янв', 'Фев', 'Мар'] },
    yAxis: {},
    series: [
      {
        name: 'Данные',
        type: 'line',
        data: [
          { value: 1048, name: 'Поиск' },
          { value: 735, name: 'Почта' },
          { value: 580, name: 'Реклама' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })
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
    <ECharts class="mt-24" :option="option" />
    <TheSkillsChart :option="optionSkills" />
  </div>
</template>