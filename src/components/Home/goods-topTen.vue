<template>
  <div class="program-top-ten-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Top10</span>
        <span style="float: right; padding: 3px 0; font-size: 12px;">销量</span>
      </div>
      <div class="chart-program-list">
        <div v-for="(item, index) in topTen" :key="index" class="program-item" :title="item.goodsName">
          <span class="index">{{ index + 1 }}</span>
          <span class="name">{{ item.goodsName }}</span>
          <span class="play-num">{{ item.sales }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'ProgramTopTenContainer',
  components: {},
  props: {
    topTen: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.program-top-ten-container {
  .chart-program-list {
    margin: 10px 0;
    min-height: 310px;
    .program-item {
      margin-bottom: 10px;
      line-height: 20px;
      display: flex;
      &:nth-child(-n + 3) .index {
        background-color: #314659;
        color: #fff;
      }
      .index {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-top: 1.5px;
        margin-right: 16px;
        font-weight: 600;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        background-color: #fafafa;
        border-radius: 20px;
      }
      .name {
        margin-left: 6px;
        flex: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        line-height: 22px;
      }
      .play-num {
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
}
</style>
