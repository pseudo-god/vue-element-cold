<template>
  <div class="material-chart-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品统计</span>
      </div>
      <div class="material-box">
        <div ref="materialDom"></div>
      </div>
    </el-card>
  </div>
</template>
<script>
import echarts from 'echarts';
export default {
  name: 'MaterialChart',
  components: {},
  props: {
    goodsType: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    chart: null,
    chartData: []
  }),
  computed: {},
  watch: {
    goodsType: {
      handler: function (val) {
        if (this.chart) {
          this.featData();
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.chartInit();
      window.addEventListener('resize', () => {
        this.chart.resize();
      });
    });
  },
  methods: {
    chartInit() {
      this.chart = echarts.init(this.$refs.materialDom, 'light', { height: '330' });
      this.setOption();
      this.chart.showLoading();
    },
    featData() {
      if (this.goodsType) {
        this.chartData = this.goodsType.map((item) => ({
          value: item.totalNumber,
          name: item.type
        }));

        console.log("featData ->         this.chartData",         this.chartData)

        this.setOption();
        this.chart.hideLoading();
      }
    },
    setOption() {
      this.chart.setOption({
        color: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        toolbox: {
          show: true
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          left: '1%',
          align: 'left',
          top: 'top',
          textStyle: {
            color: '#8C8C8C'
          },
          height: 150
        },
        series: [
          {
            name: '素材统计',
            type: 'pie',
            radius: [0, 150],
            center: ['50%', '52%'],
            data: this.chartData,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: '{b} : {c} ({d}%)'
                }
              }
            }
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.material-chart-container {
  .material-box {
    min-height: 310px;
  }
}
</style>
