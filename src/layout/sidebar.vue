<template>
  <div class="menu-container">
    <div class="logo-container">
      <svg-icon
        icon-class="logo"
        class-name="logo"
      />
    </div>
    <el-aside :width="flexibleObj.elAside">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-box"
        :collapse="flexibleObj.isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <SideBarItem :routers="routers" />
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
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
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
