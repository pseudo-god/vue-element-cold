<template>
  <el-container
    class="main-container"
    :style="flexibleObj.mainStyle"
    direction="vertical"
  >
    <Header></Header>
    <el-container>
      <el-main>
        <div class="page-tabs">
          <div class="left-page">
            <i class="el-icon-d-arrow-left"></i>
          </div>
          <div class="right-page">
            <i class="el-icon-d-arrow-right"></i>
          </div>
          <div class="tabs-box">
            <div class="page-item">
              <span class="title">主页1</span>
              <i class="el-icon-circle-close"></i>
            </div>
            <div class="page-item active">
              <span class="title">主页1</span>
              <i class="el-icon-circle-close"></i>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapState } from "vuex";
import Header from "./header";
export default {
  components: { Header },
  computed: {
    ...mapState({
      flexibleObj: (state) => state.app.flexibleObj,
    }),
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.page-tabs {
  border-top: 1px solid #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
  background-color: #fff;
  div {
    display: inline-block;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  .left-page,
  .right-page {
    padding: 4px 10px;
    &:hover {
      background-color: #f6f6f6;
    }
  }
  .left-page {
    float: left;
    border-right: 1px solid #f6f6f6;
  }
  .right-page {
    float: right;
    border-left: 1px solid #f6f6f6;
  }
  .page-item {
    border-right: 1px solid #f6f6f6;
    padding: 4px 10px;
    position: relative;
    .title {
      margin-right: 10px;
    }
    i {
      &:hover {
        color: #f00;
      }
    }
    &:hover {
      background-color: #f6f6f6;
      &::after {
        width: 100%;
      }
    }
    &.active {
      background-color: #f6f6f6;
      &::after {
        display: block;
        width: 100%;
      }
    }
    &::after {
      content: "";
      width: 0;
      height: 2px;
      background-color: #243546;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s;
    }
  }
}
</style>
