<script setup> 
  import { ref } from 'vue';
  import { useStore } from '@/stores/index.js'
  import ECharts from '@/components/ECharts.vue';
  import TheSkillsChart from '@/components/TheSkillsChart.vue';

  const { user } = useStore()
  let dataUserStore = user;
  let isSecondName = false;

  function handleNameClick() {
    isSecondName = !isSecondName
    console.log(isSecondName, 'click here');
  }

  const option = ref({
    title: {
      text: 'Soft skills',
      left: 'top'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right'
    },
    series: [
      {
        name: 'Данные',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 30, name: 'Ответственность' },
          { value: 30, name: 'Коммуникабельность' },
          { value: 40, name: 'Пунктуальность' }
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
      text: 'Hard skills',
      left: 'top'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right'
    },
    xAxis: { data: ['2007', '2013', '2016', '2020', '2024', 'now'] },
    yAxis: {},
    series: [
      {
        name: 'HTML',
        type: 'line',
        data: [
          { value: 5, name: 'базовые теги и стили' },
          { value: 15, name: 'использование шаблонов' },
          { value: 12, name: 'перерыв' },
          { value: 45, name: 'сематическая, адаптивная верстка' },
          { value: 66, name: 'анимации' },
          { value: 86, name: 'кросс-браузерная верстка' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      {
        name: 'CSS',
        type: 'line',
        data: [
          { value: 7, name: 'инлайновые стили' },
          { value: 10, name: 'flex-box контейнеры' },
          { value: 12, name: 'перерыв' },
          { value: 55, name: 'сематическая, адаптивная верстка' },
          { value: 76, name: 'grid-сетки' },
          { value: 83, name: 'кросс-браузерная верстка' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      {
        name: 'JS',
        type: 'line',
        data: [
          { value: 0, name: 'не использовался' },
          { value: 0, name: 'не использовался' },
          { value: 0, name: 'не использовался' },
          { value: 10, name: 'DOM-дерево, анимации' },
          { value: 55, name: 'фрейворк vue2/vue3' },
          { value: 76, name: 'react' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      {
        name: 'PHP/MySQL',
        type: 'line',
        data: [
          { value: 0, name: 'не использовался' },
          { value: 0, name: 'не использовался' },
          { value: 0, name: 'не использовался' },
          { value: 0, name: 'не использовался' },
          { value: 40, name: 'auth, cookies, SELECT * FROM' },
          { value: 75, name: 'вложенные запросы' },
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
  // return { dataUserStore, isSecondName, handleNameClick, option };
  
</script>
<template>
  <div class="p-14">
    <div>
      <p class="text-base text-center" @click="handleNameClick()">
        {{ dataUserStore.userData.name + ' ' + dataUserStore.userData.last_name }}
        {{ isSecondName ? dataUserStore.userData.second_name : '' }}
      </p>
      <p>Дата рождения: {{ dataUserStore.userData.date_of_birth.split('-').reverse().join('.') }}</p>
      <p>Возраст: {{ ((new Date()).getFullYear() - (new Date(dataUserStore.userData.date_of_birth.split('-').join(','))).getFullYear()) }}</p>
      <p>Должность: front-end разработчик</p>
    </div>
    
    <ECharts class="mt-24" :option="option" />
    <TheSkillsChart :option="optionSkills" />
  </div>
</template>