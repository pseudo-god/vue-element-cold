<template>
  <el-header class="ves-header-container fixed" height="auto">
    <el-row>
      <el-col :span="24" class="header-box">
        <div class="header-left">
          <div class="flexible" @click="collapse">
            <i class="el-icon-s-fold"></i>
          </div>
        </div>
        <div class="right-menus">
          <svg-icon icon-class="full-screen" />
        </div>
        <div class="header-right">
          <div class="right-user">
            <div class="user-info">
              <div class="info-name">握不住的流沙</div>
            </div>
            <div class="user-avatar">
              <el-dropdown trigger="click" @command="handleCommand">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-user" command="userInfo">个人资料</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-lock" command="lock">锁屏</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-setting" command="setting">设置</el-dropdown-item>
                  <el-dropdown-item divided icon="el-icon-switch-button">登出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="24">
        <PageTags />
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import PageTags from './page-tags';

export default {
  name: 'Header',
  components: { PageTags },
  computed: {
    ...mapState({
      flexibleObj: (state) => state.app.flexibleObj
    })
  },
  methods: {
    ...mapActions({
      setFlexible: 'app/setFlexible'
    }),
    collapse() {
      if (!this.flexibleObj.isCollapse) {
        this.setFlexible({
          isCollapse: true,
          mainStyle: {
            marginLeft: '64px'
          },
          elAside: '100%'
        });
      } else {
        this.setFlexible({
          isCollapse: false,
          mainStyle: {
            marginLeft: '194px'
          },
          elAside: '194px'
        });
      }
    },
    handleCommand(command) {
      console.log('handleCommand -> command', command);
      this.$message('click on item ' + command);
    }
  }
};
</script>
<style lang="scss" scoped>
.ves-header-container {
  background-color: $ves-navigateTopBgColor;
  color: #fff;
  padding: 0;
  &.fixed{
    position: fixed;
    top: 0;
    width: 100%;
  }
  .header-box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }
  .header-left {
    line-height: 60px;
    flex: 1;
    .flexible {
      cursor: pointer;
      margin-left: -20px;
      width: 35px;
      text-align: center;
      color: #000;
      &:hover {
        opacity: 0.5;
      }
      i {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }

  .right-menus {
    margin: 0 15px;
    flex: 1;

    text-align: right;
    .svg-icon {
      width: 22px;
      height: 22px;
      cursor: pointer;
      &:hover {
        color: #02a388;
      }
    }
  }

  .header-right {
    .right-user {
      display: flex;
      justify-content: center;
      align-items: center;
      .user-info {
        margin-right: 6px;
        flex: 1;
        .info-name {
          font-size: 10px;
          color: #989898;
          line-height: 25px;
          word-break: keep-all;
        }
      }
      .user-avatar {
        flex: 1;
        cursor: pointer;
 
      }
    }
  }
}
</style>
