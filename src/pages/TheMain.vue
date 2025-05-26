<script setup> 
  import { ref } from 'vue';
  import { useStore } from '@/stores/index.js'
  import { Cake } from 'lucide-vue-next';
  import { Baby } from 'lucide-vue-next';
  import { Keyboard } from 'lucide-vue-next';
  import { User } from 'lucide-vue-next';
  // import PieChart from '@/components/PieChart.vue';
  import LineChart from '@/components/LineChart.vue';
  import { onMounted } from 'vue';

  const { user } = useStore()
  let dataUserStore = user;
  let isSecondName = false;

  const isVisible = ref(false);

  onMounted(() => {
    isVisible.value = true;
  });

  function handleNameClick() {
    isSecondName = !isSecondName
    console.log(isSecondName, 'click here');
  }

  const softSkillsOptions = ref({
    title: {
      text: 'Soft skills',
      left: 'top',
      textStyle: {
        color: "white"
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      textStyle: {
        color: "white"
      }
    },
    series: [
      {
        name: 'Данные',
        type: 'pie',
        radius: '70%',
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
        },
        label: {
          show: false,
        },
      }
    ],
  });
  const hardSkillsOption = ref({
    title: {
      text: 'Hard skills',
      left: 'top',
      textStyle: {
        color: "white"
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      textStyle: {
        color: "white"
      }
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
        },
        label: {
          show: false,
        },
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
  <div class="lg:p-14 p-3">
    <div class="lg:flex-row flex flex-col justify-around lg:gap-15 gap-6">      
      <Transition name="fade">
        <div v-show="isVisible">
          <img class="rounded-full lg:w-25 w-18 lg:mx-0 mx-auto" src="@/assets/images/photo.jpg" alt="photo">
        </div>
      </Transition>
      <div>
        <p class="text-base flex gap-2" @click="handleNameClick()">
          <User />
          {{ dataUserStore.userData.name + ' ' + dataUserStore.userData.last_name }}
          {{ isSecondName ? dataUserStore.userData.second_name : '' }}
        </p>
        <p class="flex gap-2"><Cake />Дата рождения: {{ dataUserStore.userData.date_of_birth.split('-').reverse().join('.') }}</p>
        <p class="flex gap-2"><Baby />Возраст: {{ ((new Date()).getFullYear() - (new Date(dataUserStore.userData.date_of_birth.split('-').join(','))).getFullYear()) }}</p>
        <p class="flex gap-2"><Keyboard />Должность: front-end разработчик</p>
      </div>
      <div class="lg:text-start text-center">
        <p>HTML/CSS</p>
        <p>JS(Vue2/React)</p>
        <p>PHP/MySQL</p>
        <a href="https://github.com/alv1k/" target="_blank">github</a>
      </div>
    </div>
    
    <h2 class="mt-20 lg:text-start text-center">О себе</h2>
    <Transition name="fade">
      <div v-show="isVisible" class="grid lg:grid-cols-2 grid-cols-1 py-10 gap-5">
        <section class="flex flex-col gap-6">
          <div class="flex flex-col gap-5 bg-gray-700 p-5 rounded-sm">
            <h3>Образование</h3>
            <p>2020-2022 магистратура СВФУ им. М.К. Аммосова, "Культурология"</p>
            <p>2013-2016 аспирантура РГПУ им. А.И. Герцена, "Культурология"</p>
            <p>2008-2013 специалитет РГПУ им. А.И. Герцена, "Культурология"</p>
            <p>2003-2008 ФТЛ им. В.П. Ларионова</p>
          </div>
          <div class="flex flex-col gap-5 bg-gray-700 p-5 rounded-sm">
            <h3>Опыт работы</h3>
            <div class="" v-for="(item, index) in dataUserStore.userData.experience" :key="index">
              <p>{{ index + 1 }}. {{ item.organization }} </p>
              <p><span>Должность: </span>{{ item.position }}</p>
              <p>c {{ item.start_date }} по {{ item.end_date ?? 'сег.день' }}</p>
            </div>
          </div>
          <a href="https://github.com/alv1k/my_resume/raw/main/alvik.pdf" target="_blank">
            <button class="w-full">
              Скачать в формате
              <br class="lg:hidden block" />
              PDF (1 лист)
            </button>
          </a>
        </section>
        <section class=" flex flex-col gap-5">
          <!-- <PieChart class="bg-gray-700 p-5 rounded-sm" :option="softSkillsOptions" /> -->
          <LineChart class="bg-gray-700 p-5 rounded-sm" :option="hardSkillsOption" />
        </section>
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