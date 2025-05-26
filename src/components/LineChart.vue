<template>
  <v-chart
    class="chart"
    :option="option"
    :autoresize="true"
  />
</template>

<script>
import { computed } from 'vue';
import * as echarts from 'echarts/core'; // Импортируем ядро
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import {
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import VChart from 'vue-echarts';

// Регистрируем необходимые компоненты
echarts.use([
  CanvasRenderer,
  PieChart,
  TooltipComponent,
  LegendComponent
]);

export default {
  components: {
    VChart
  },
  props: {
    optionSkills: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const option = computed(() => ({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: props.optionSkills.map(item => item.name)
      },
      series: [{
        name: 'Skills',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: props.optionSkills
      }]
    }));

    return {
      option
    };
  }
};
</script>

<style scoped>
.chart {
  height: 400px;
  width: 100%;
}
</style>