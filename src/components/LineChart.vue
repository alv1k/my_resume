<template>
  <v-chart  
    class="chart"
    :autoresize="true"
  />
</template>

<script>
import { defineComponent } from 'vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import VChart from 'vue-echarts';

export default defineComponent({
  components: { VChart }
});

</script>

<style scoped>
.chart {
  height: 400px;
  width: 100%;
}
</style>