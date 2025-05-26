<template>
  <VChart 
    class="chart"
    :autoresize="true" 
  />
</template>

<script setup>
import * as echarts from 'echarts/core';
import { ref } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import VChart from 'vue-echarts';

// Регистрация необходимых компонентов
echarts.use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
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