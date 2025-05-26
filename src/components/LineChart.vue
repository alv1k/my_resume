<template>
  <VChart 
    class="chart" 
    ref="lineChart"
    :option="option" 
    :autoresize="true" 
  />
</template>

<script>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { computed } from 'vue';
import * as echarts from 'echarts';
export default {
  setup() {
    // 2. Создаем реактивную ссылку на DOM-элемент
    const chartContainer = ref(null);
    let chartInstance = null;

    // 3. Инициализация после монтирования компонента
    onMounted(() => {
      if (chartContainer.value) {
        chartInstance = echarts.init(chartContainer.value);
        chartInstance.setOption({
          xAxis: { type: 'category' },
          yAxis: { type: 'value' },
          series: [{ data: [10, 20, 30], type: 'line' }]
        });
      }
    });

    // 4. Очистка при размонтировании
    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.dispose();
      }
    });

    return { chartContainer };
  }
};
</script>

<style scoped>
.chart {
  height: 400px;
  width: 100%;
}
</style>