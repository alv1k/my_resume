<script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useStore } from '@/stores/index.js'
  import { useI18nStore } from '@/stores/modules/i18n'
  import { Cake } from 'lucide-vue-next';
  import { Baby } from 'lucide-vue-next';
  import { Keyboard } from 'lucide-vue-next';
  import { User } from 'lucide-vue-next';
  import ApexCharts from 'apexcharts'

  const { user } = useStore()
  const i18n = useI18nStore()
  let dataUserStore = user;
  let isSecondName = false;

  onMounted(() => {
    isVisible.value = true;
  });

  const isVisible = ref(false);

  function handleNameClick() {
    isSecondName = !isSecondName
  }

  function getChartSeries() {
    const t = (key) => i18n.t(key);
    const nu = t('chart_not_used');
    return [
      {
        name: 'HTML',
        data: [
          { x: 1, y: 5, info: t('chart_html_1') },
          { x: 2, y: 15, info: t('chart_html_2') },
          { x: 3, y: 12, info: t('chart_html_3') },
          { x: 4, y: 45, info: t('chart_html_4') },
          { x: 5, y: 66, info: t('chart_html_5') },
          { x: 6, y: 86, info: t('chart_html_6') },
          { x: 7, y: 90, info: t('chart_html_7') }
        ],
      },
      {
        name: 'CSS',
        data: [
          { x: 1, y: 7, info: t('chart_css_1') },
          { x: 2, y: 10, info: t('chart_css_2') },
          { x: 3, y: 12, info: t('chart_css_3') },
          { x: 4, y: 55, info: t('chart_css_4') },
          { x: 5, y: 76, info: t('chart_css_5') },
          { x: 6, y: 83, info: t('chart_css_6') },
          { x: 7, y: 88, info: t('chart_css_7') }
        ],
      },
      {
        name: 'JS',
        data: [
          { x: 1, y: 0, info: nu },
          { x: 2, y: 0, info: nu },
          { x: 3, y: 0, info: nu },
          { x: 4, y: 10, info: t('chart_js_4') },
          { x: 5, y: 55, info: t('chart_js_5') },
          { x: 6, y: 76, info: t('chart_js_6') },
          { x: 7, y: 82, info: t('chart_js_7') }
        ],
      },
      {
        name: 'TypeScript',
        data: [
          { x: 1, y: 0, info: nu },
          { x: 2, y: 0, info: nu },
          { x: 3, y: 0, info: nu },
          { x: 4, y: 0, info: nu },
          { x: 5, y: 0, info: nu },
          { x: 6, y: 20, info: t('chart_ts_6') },
          { x: 7, y: 50, info: t('chart_ts_7') }
        ],
      },
      {
        name: 'PHP/MySQL',
        data: [
          { x: 1, y: 0, info: nu },
          { x: 2, y: 0, info: nu },
          { x: 3, y: 0, info: nu },
          { x: 4, y: 0, info: nu },
          { x: 5, y: 40, info: t('chart_php_5') },
          { x: 6, y: 75, info: t('chart_php_6') },
          { x: 7, y: 75, info: t('chart_php_7') }
        ],
      },
      {
        name: 'Python',
        data: [
          { x: 1, y: 0, info: nu },
          { x: 2, y: 0, info: nu },
          { x: 3, y: 0, info: nu },
          { x: 4, y: 0, info: nu },
          { x: 5, y: 0, info: nu },
          { x: 6, y: 0, info: nu },
          { x: 7, y: 35, info: t('chart_py_7') }
        ],
      }
    ];
  }

  let lineChartInstance = null;

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

      series: getChartSeries(),
      xaxis: {
        type: 'category',
        categories: ['2007', '2013', '2016', '2020', '2024', '2025', '2026']
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

      series: [35, 25, 15, 10, 10, 5],
      labels: ['HTML/CSS', 'JavaScript', 'TypeScript', 'PHP/MySQL', 'Vue/React', 'Python'],
    }

    lineChartInstance = new ApexCharts(apexChart.value, lineOptions);
    var pieChart = new ApexCharts(pieChartDOM.value, pieOptions);

    lineChartInstance.render();
    pieChart.render();
  });

  watch(() => i18n.locale, () => {
    if (lineChartInstance) {
      lineChartInstance.updateOptions({ series: getChartSeries() });
    }
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
          {{ user.displayName }}
          {{ isSecondName ? dataUserStore.userData.second_name : '' }}
        </p>
        <p class="flex gap-2"><Cake />{{ i18n.t('date_of_birth') }}: {{ dataUserStore.userData.date_of_birth.split('-').reverse().join('.') }}</p>
        <p class="flex gap-2"><Baby />{{ i18n.t('age') }}: {{ ((new Date()).getFullYear() - (new Date(dataUserStore.userData.date_of_birth.split('-').join(','))).getFullYear()) }}</p>
        <p class="flex gap-2"><Keyboard />{{ i18n.t('position') }}: {{ i18n.t('position_value') }}</p>
      </div>
      <div class="lg:text-start text-center">
        <p>HTML/CSS/Tailwind</p>
        <p>JS/TS (Vue2/Vue3/React)</p>
        <p>PHP/MySQL</p>
        <p>Python</p>
        <a href="https://github.com/alv1k/" target="_blank">github link</a>
      </div>
    </div>

    <h2 class="mt-20 lg:text-start text-center">{{ i18n.t('about_me') }}</h2>
    <Transition name="fade">
      <div v-show="isVisible" class="grid lg:grid-cols-2 grid-cols-1 py-10 gap-5">
        <section class="flex flex-col gap-6">
          <div class="flex flex-col gap-5 bg-gray-700 p-5 rounded-sm">
            <h3>{{ i18n.t('work_experience') }}</h3>
            <div v-for="(item, index) in user.experience" :key="index">
              <p>{{ index + 1 }}. {{ item.organization }} </p>
              <p><span>{{ i18n.t('job_title') }}: </span>{{ item.position }}</p>
              <p>{{ i18n.t('from') }} {{ item.start_date }} {{ i18n.t('to') }} {{ item.end_date ?? i18n.t('present') }}</p>
            </div>
          </div>
          <div class="flex flex-col gap-5 bg-gray-700 p-5 rounded-sm">
            <h3>{{ i18n.t('education') }}</h3>
            <p>2020-2022 {{ i18n.t('edu_1') }}</p>
            <p>2013-2016 {{ i18n.t('edu_2') }}</p>
            <p>2008-2013 {{ i18n.t('edu_3') }}</p>
            <p>2003-2008 {{ i18n.t('edu_4') }}</p>
          </div>
          <a href="https://github.com/alv1k/my_resume/raw/main/alvik.pdf" target="_blank">
            <button class="w-full">
              {{ i18n.t('download_pdf') }}
            </button>
          </a>
        </section>
        <section class=" flex flex-col gap-5">
          <div ref="apexChart" class="bg-gray-700 rounded-sm"></div>
          <div ref="pieChartDOM" class="bg-gray-700 rounded-sm"></div>
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
