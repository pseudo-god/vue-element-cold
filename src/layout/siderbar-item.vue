<template>
  <el-col>
    <template v-for="(item, index) in routers">
      <el-menu-item :index="item.path" :key="index" v-if="!item.children" @click="click(item)">
        <i :class="`el-icon-${item.meta.icon}`"></i>
        <span slot="title"> {{ item.meta.title }}</span>
      </el-menu-item>

      <el-menu-item :index="item.children[0].path" :key="index" v-else-if="item.children.length === 1" @click="click(item)">
        <i :class="`el-icon-${item.children[0].meta.icon}`"></i>
        <span slot="title"> {{ item.children[0].meta.title }}</span>
      </el-menu-item>

      <el-submenu :index="item.path" v-else :key="index">
        <template slot="title">
          <i :class="`el-icon-${item.meta.icon}`"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </template>
        <SiderbarItem :routers="item.children" :basePath="item.path"> </SiderbarItem>
      </el-submenu>
    </template>
  </el-col>
</template>

<script>
export default {
  name: 'SiderbarItem',
  props: {
    routers: {
      type: Array,
      required: true
    },
    basePath: {
      type: String,
      required: false
    }
  },
  computed: {},
  methods: {
    click(item) {
      console.log('click -> item', item);
      console.log(this.basePath);
      this.$router.push({ name: item.name });
    }
  }
};
</script>
<style scoped lang="scss">
/deep/ .el-submenu {
  overflow: hidden;
  & > .el-submenu__title {
    .el-submenu__icon-arrow {
      display: none;
    }
  }
}

.el-menu--collapse {
  .el-submenu {
    & > .el-submenu__title {
      & > span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
    }
  }
}
</style>
