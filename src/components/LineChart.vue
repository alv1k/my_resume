<template>
  <VChart 
    class="chart" 
    id="test"
    :autoresize="true" 
    />
    <!-- :option="option"  -->
</template>

<script setup>
import { ref } from 'vue';
// import { use } from 'echarts/core';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, LineChart } from 'echarts/charts';
import { computed } from 'vue';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import VChart from 'vue-echarts';

const props = defineProps({
  optionSkills: Array
});

const chart = echarts.init('#test');
chart.setOption({
  series: [{
    type: 'pie',
    data: props.optionSkills || [] // Защита от undefined
  }],
})
// const option = computed(() => ({
//   series: [{
//     type: 'pie',
//     data: props.optionSkills || [] // Защита от undefined
//   }],
// }));

// Регистрация необходимых компонентов
echarts.use([
  CanvasRenderer,
  BarChart,
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent
]);

</script>

<style scoped>
.chart {
  height: 400px;
  width: 100%;
}
</style>