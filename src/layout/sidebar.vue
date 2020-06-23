<template>
  <div class="menu-container">
    <div class="logo-container">
      <img src="../assets/svg/logo.svg" alt="" />
    </div>
    <el-aside :width="flexibleObj.elAside">
      <el-menu
        class="el-menu-vertical-box"
        @open="handleOpen"
        @close="handleClose"
        :collapse="flexibleObj.isCollapse"
      >
        <SideBarItem :routers="routers" />
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
import { mapState } from "vuex";
import SideBarItem from "./siderbar-item";
export default {
  name: "Sidebar",
  components: { SideBarItem },
  computed: {
    ...mapState({
      flexibleObj: (state) => state.app.flexibleObj
    }),
    routers() {
      return this.$router.options.routes;
    },
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
