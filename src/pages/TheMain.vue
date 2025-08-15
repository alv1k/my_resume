<script setup> 
  import { ref, onMounted } from 'vue';
  import { useStore } from '@/stores/index.js'
  import { Cake } from 'lucide-vue-next';
  import { Baby } from 'lucide-vue-next';
  import { Keyboard } from 'lucide-vue-next';
  import { User } from 'lucide-vue-next';
  import ApexCharts from 'apexcharts'

  const { user } = useStore()
  let dataUserStore = user;
  let isSecondName = false;

  onMounted(() => {
    isVisible.value = true;    
  });
  
  const isVisible = ref(false);

  function handleNameClick() {
    isSecondName = !isSecondName
    console.log(isSecondName, 'click here');
  }

  const apexChart = ref(null);
  const pieChartDOM = ref(null);
  onMounted(() => {
    
    var lineOptions = {
      chart: {
        type: 'line',
        width: '100%',
        height: '50%',
        animations: {
          enabled: true,
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      }
      },
      theme: {
          mode: 'dark', 
          palette: 'palette1', 
          monochrome: {
              enabled: false,
              color: '#255aee',
              shadeTo: 'light',
              shadeIntensity: 0.65
          },
      },
      
      series:[
        {
          name: 'HTML',
          data: [
            { x: 1, y: 5, info: 'базовые теги и стили' },
            { x: 2, y: 15, info: 'использование шаблонов' },
            { x: 3, y: 12, info: 'перерыв' },
            { x: 4, y: 45, info: 'семантическая, адаптивная верстка' },
            { x: 5, y: 66, info: 'анимации' },
            { x: 6, y: 86, info: 'кросс-браузерная верстка' }          
          ],
        },
        {
          name: 'CSS',
          data: [
            { x: 1, y: 7, info: "инлайновые стили" },
            { x: 2, y: 10, info: "flex-box контейнеры" },
            { x: 3, y: 12, info: "перерыв" },
            { x: 4, y: 55, info: "сематическая, адаптивная верстка" },
            { x: 5, y: 76, info: "grid-сетки" },
            { x: 6, y: 83, info: "кросс-браузерная верстка" }
          ],
        },
        {
          name: 'JS',
          data: [
            { x: 1,y: 0, info: 'не использовался' },
            { x: 2,y: 0, info: 'не использовался' },
            { x: 3,y: 0, info: 'не использовался' },
            { x: 4,y: 10, info: 'DOM-дерево, анимации' },
            { x: 5,y: 55, info: 'фрейворк vue2/vue3' },
            { x: 6,y: 76, info: 'react' },
          ],
        },
        {
          name: 'PHP/MySQL',
          data: [
            { x: 1, y: 0, info: 'не использовался' },
            { x: 2, y: 0, info: 'не использовался' },
            { x: 3, y: 0, info: 'не использовался' },
            { x: 4, y: 0, info: 'не использовался' },
            { x: 5, y: 40, info: 'auth, cookies, SELECT * FROM' },
            { x: 6, y: 75, info: 'вложенные запросы' },
          ],
        }
      ],
      xaxis: {
        type: 'category',
        categories: ['2007', '2013', '2016', '2020', '2024', 'now'] 
      },
      tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          const data = w.config.series[seriesIndex].data[dataPointIndex];
          const seriesName = w.config.series[seriesIndex].name;
          
          return `
            <div class="apexcharts-tooltip-custom">
              <div><strong>${seriesName + ': ' + data.info}</strong></div>
            </div>
          `;
        }
      }
    }

    var pieOptions = {
      chart: {
        type: 'pie',
        width: '100%',
        animations: {
          enabled: true,
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      }
      },
      theme: {
          mode: 'dark', 
          palette: 'palette1', 
          monochrome: {
              enabled: false,
              color: '#255aee',
              shadeTo: 'light',
              shadeIntensity: 0.65
          },
      },
      
      series:[1,2,3
          //  { value: 30, name: 'Ответственность' },
          // { value: 30, name: 'Коммуникабельность' },
          // { value: 40, name: 'Пунктуальность' }
  
        // {
        //   name: 'Ответственность',
        //   data: 30,
        // },
        
      ],
      
    }

    var lineChart = new ApexCharts(apexChart.value, lineOptions);
    var pieChart = new ApexCharts(pieChartDOM.value, pieOptions);
  
    lineChart.render();
    pieChart.render();
  });


  
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
        <a href="https://github.com/alv1k/" target="_blank">github link</a>
      </div>
    </div>
    
    <h2 class="mt-20 lg:text-start text-center">О себе</h2>
    <Transition name="fade">
      <div v-show="isVisible" class="grid lg:grid-cols-2 grid-cols-1 py-10 gap-5">
        <section class="flex flex-col gap-6">
          <div class="flex flex-col gap-5 bg-gray-700 p-5 rounded-sm">
            <h3>Опыт работы</h3>
            <div class="" v-for="(item, index) in dataUserStore.userData.experience" :key="index">
              <p>{{ index + 1 }}. {{ item.organization }} </p>
              <p><span>Должность: </span>{{ item.position }}</p>
              <p>c {{ item.start_date }} по {{ item.end_date ?? 'сег.день' }}</p>
            </div>
          </div>
          <div class="flex flex-col gap-5 bg-gray-700 p-5 rounded-sm">
            <h3>Образование</h3>
            <p>2020-2022 магистратура СВФУ им. М.К. Аммосова</p>
            <p>2013-2016 аспирантура РГПУ им. А.И. Герцена</p>
            <p>2008-2013 специалитет РГПУ им. А.И. Герцена</p>
            <p>2003-2008 ФТЛ им. В.П. Ларионова</p>
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
          <div ref="apexChart" class="bg-gray-700 rounded-sm"></div>
          <div ref="pieChartDOM" class="bg-gray-700 rounded-sm"></div>
            <!-- :option="hardSkillsOption" -->
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