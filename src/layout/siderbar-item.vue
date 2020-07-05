<template>
  <el-col class="siderbar-item">
    <template v-for="(item, index) in routers">
      <el-menu-item v-if="!item.children" :key="index" :index="resolvePath(item.path)" @click="handleClick(item.path)">
        <i :class="`el-icon-${item.meta.icon}`" />
        <span slot="title"> {{ item.meta.title }}</span>
      </el-menu-item>

      <el-menu-item
        v-else-if="item.children.length === 1"
        :key="index"
        :index="resolvePath(item.children[0].path,item.path)"
        @click="handleClick(item.children[0].path,item.path)"
      >
        <i :class="`el-icon-${item.children[0].meta.icon}`" />
        <span slot="title"> {{ item.children[0].meta.title }}</span>
      </el-menu-item>

      <!-- 渲染子级菜单 -->
      <el-submenu v-else :key="index" :index="resolvePath(item.path)">
        <template slot="title">
          <i :class="`el-icon-${item.meta && item.meta.icon}`" />
          <span slot="title">{{ item.meta && item.meta.title }}</span>
        </template>
        <SiderbarItem :routers="item.children" :base-path="item.path" />
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
      default: ''
    }
  },
  computed: {

  },
  created() {
    console.log(this.basePath)
  },
  updated() {},
  methods: {
    handleClick(path, onePath) {
      console.log('click -> path', path)
      const newPath = this.resolvePath(path, onePath)

      this.$router.push({ path: newPath })
    },
    resolvePath(path, onePath) {
      var newPath = ''
      if (onePath) {
        newPath = (onePath === '/' ? '/' : onePath + '/') + path
      } else {
        newPath = this.basePath + '/' + path
      }

      return newPath
    }
  }
}
</script>
<style scoped lang="scss">
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
<style lang="scss">
.el-menu--collapse {
  .el-submenu__icon-arrow {
    display: none;
  }
}
</style>
