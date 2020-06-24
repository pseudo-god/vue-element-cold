<template>
  <div class="page-tags">
    <div class="left-page" @click="handleTabScroll('left')">
      <i class="el-icon-d-arrow-left"></i>
    </div>
    <div class="right-page" @click="handleTabScroll('right')">
      <i class="el-icon-d-arrow-right"></i>
    </div>
    <div class="tags-page-box" ref="tagsPageBox">
      <div class="tags-box" ref="tagsBox" :style="navStyle">
        <div class="page-item" v-for="(index, item) in 25" :key="index">
          <span class="title">主页 - {{ item }}</span>
          <i class="el-icon-circle-close"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageTags',
  data: () => ({
    navOffset: 0
  }),
  computed: {
    navStyle() {
      return {
        transform: `translateX(-${this.navOffset}px)`
      };
    }
  },
  methods: {
    handleTabScroll(direction) {
      let tagsBoxWidth = this.$refs.tagsBox.offsetWidth;
      let tagsPageBoxWidth = this.$refs.tagsPageBox.offsetWidth;
      const currentOffset = this.navOffset;
      console.log('handleTabScroll -> tagsPageBoxWidth', tagsBoxWidth);
      console.log('handleTabScroll -> tagsBoxWidth', tagsPageBoxWidth);
      console.log('handleTabScroll -> currentOffset', currentOffset);

      if (direction === 'left') {
        let newOffset = currentOffset > tagsPageBoxWidth ? currentOffset - tagsPageBoxWidth : 0;

        this.navOffset = newOffset;
      } else {
        if (tagsBoxWidth - currentOffset <= tagsPageBoxWidth) return;

        let newOffset = tagsBoxWidth - currentOffset > tagsPageBoxWidth * 2 ? currentOffset + tagsPageBoxWidth : tagsBoxWidth - tagsPageBoxWidth;

        this.navOffset = newOffset;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.page-tags {
  border-top: 1px solid #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
  background-color: #fff;
  width: 100%;
  height: 50px;
  white-space: nowrap;
  padding: 0 35px 0 35px;
  overflow: hidden;
  .left-page,
  .right-page {
    padding: 4px 10px;
    position: absolute;
    cursor: pointer;
    line-height: 40px;
    &:hover {
      background-color: #f6f6f6;
    }
  }
  .left-page {
    left: 0;
    border-right: 1px solid #f6f6f6;
  }
  .right-page {
    right: 0;
    border-left: 1px solid #f6f6f6;
  }
  .tags-page-box {
    width: 100%;
    overflow: hidden;
  }
  .tags-box {
    position: relative;
    transition: transform 0.5s;
    float: left;
    .page-item {
      display: inline-block;
      cursor: pointer;
      line-height: 40px;
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
        content: '';
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
}
</style>
