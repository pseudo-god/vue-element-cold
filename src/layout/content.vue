<template>
  <el-container class="main-container" :style="flexibleObj.mainStyle">
    <el-header>
      <el-row>
        <el-col :span="24">
          <div class="header-left">
            <div class="flexible" @click="collapse">
              <i class="el-icon-s-fold"></i>
            </div>
          </div>
          <div class="header-right">
            <div class="right-user">
              <div class="user-info">
                <div class="info-name">握不住的流沙</div>
                <div class="info-other">
                  <i class="el-icon-edit"></i>
                  <i class="el-icon-share"></i>
                  <i class="el-icon-delete"></i>
                </div>
              </div>
              <div class="user-avatar">
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-main>Main </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Content",
  computed: {
    ...mapState({
      flexibleObj: (state) => state.app.flexibleObj,
    }),
  },
  methods: {
    ...mapActions({
      setFlexible: "app/setFlexible",
    }),
    collapse() {
      if (!this.flexibleObj.isCollapse) {
        this.setFlexible({
          isCollapse: true,
          mainStyle: {
            marginLeft: "65px",
          },
          elAside: "100%",
        });
      } else {
        this.setFlexible({
          isCollapse: false,
          mainStyle: {
            marginLeft: "195px",
          },
          elAside: "194px",
        });
      }
    },
  },
};
</script>
