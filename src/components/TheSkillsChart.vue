<template>
  <VChart 
    class="chart" 
    :option="option" 
    :autoresize="true" 
  />
</template>

<script setup>
import { ref } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, LineChart } from 'echarts/charts';
import { computed, defineProps } from 'vue';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import VChart from 'vue-echarts';

const props = defineProps({
  optionSkills: Array
});

const option = computed(() => ({
  series: [{
    type: 'pie',
    data: props.optionSkills || [] // Защита от undefined
  }]
}));

// Регистрация необходимых компонентов
use([
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