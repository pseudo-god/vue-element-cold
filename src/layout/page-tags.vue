<template>
  <div class="page-tags">
    <div
      class="left-page"
      @click="handleTabScroll('left')"
    >
      <i class="el-icon-d-arrow-left"></i>
    </div>
    <div
      class="right-page"
      @click="handleTabScroll('right')"
    >
      <i class="el-icon-d-arrow-right"></i>
    </div>
    <div
      ref="tagsPageBox"
      class="tags-page-box"
    >
      <div
        ref="tagsBox"
        class="tags-box"
        :style="navStyle"
      >
        <div
          v-for="(item, index) in getTags"
          :key="index"
          :class="{ 'page-item': true, active: isActive(item) }"
          @click="active(item)"
        >
          <span class="title">{{ item.title }}</span>
          <i
            v-if="item.affix"
            class="el-icon-circle-close"
            @click.stop="del(item)"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'PageTags',
  data: () => ({
    navOffset: 0
  }),
  computed: {
    ...mapState({
      getTags: (state) => state.tags.tags
    }),
    navStyle() {
      return {
        transform: `translateX(-${this.navOffset}px)`
      };
    }
  },
  watch: {
    $route(val) {
      this.addTag(val);
    }
  },
  created() {
    this.initTag();
  },
  methods: {
    ...mapActions({
      setTag: 'tags/setTag',
      delTag: 'tags/delTag'
    }),
    initTag() {
      const { name, meta } = this.$route;
      if (name) {
        if (!this.isActive(name)) {
          const tagsInfo = {
            name,
            meta: {
              title: meta.title,
              affix: meta.affix
            }
          };
          this.addTag(tagsInfo);
        }
      }
    },
    addTag(val) {
      this.setTag({
        name: val.name,
        title: val.meta.title,
        affix: val.meta.affix
      });
    },
    del(tag) {
      console.log('delTag -> tag', tag);
      this.$store.dispatch('tags/delTag', tag).then((tags) => {
        if (tags.length) {
          const tag = tags.slice(-1)[0];
          this.$router.push({ name: tag.name });
          this.isActive(tag);
        }
      });
    },
    active(item) {
      console.log('active -> item', item);
      if (!this.isActive(item)) {
        this.$router.push({ name: item.name });
      }
    },
    // 是否为当前选中的路由
    isActive(tag) {
      return tag.name === this.$route.name;
    },
    handleTabScroll(direction) {
      const tagsBoxWidth = this.$refs.tagsBox.offsetWidth;
      const tagsPageBoxWidth = this.$refs.tagsPageBox.offsetWidth;
      const currentOffset = this.navOffset;
      if (direction === 'left') {
        const newOffset = currentOffset > tagsPageBoxWidth ? currentOffset - tagsPageBoxWidth : 0;

        this.navOffset = newOffset;
      } else {
        if (tagsBoxWidth - currentOffset <= tagsPageBoxWidth) return;

        const newOffset = tagsBoxWidth - currentOffset > tagsPageBoxWidth * 2 ? currentOffset + tagsPageBoxWidth : tagsBoxWidth - tagsPageBoxWidth;

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
      i {
        margin-left: 10px;
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
