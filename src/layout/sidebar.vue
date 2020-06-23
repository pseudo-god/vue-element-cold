<template>
  <div class="menu-container">
    <div class="logo-container">
      <img src="../assets/svg/logo.svg" alt="" />
    </div>
    <el-aside :width="flexibleObj.elAside">
      <el-menu default-active="2-1" class="el-menu-vertical-box" @open="handleOpen" @close="handleClose" :collapse="flexibleObj.isCollapse">
        <SideBarItem :routers="routers" />

        <!-- <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页 {{item.name}}</span>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">工作台</span>
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>

        <el-menu-item index="3">
          <i class="el-icon-help"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import SideBarItem from './siderbar-item';
export default {
  name: 'Sidebar',
  components: { SideBarItem },
  computed: {
    ...mapState({
      flexibleObj: (state) => state.app.flexibleObj
    }),
    routers() {
      return this.$router.options.routes;
    }
  },
  data: () => ({}),
  created() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
