<template>
  <el-container
    class="main-container"
    :style="flexibleObj.mainStyle"
    direction="vertical"
  >
    <Header />
    <el-container>
      <el-main>
        <PageTags />
        <!-- 内容区域 -->
        <div class="page-body">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapState } from 'vuex';
import Header from './header';
import PageTags from './page-tags';

export default {
  components: { Header, PageTags },
  computed: {
    ...mapState({
      flexibleObj: (state) => state.app.flexibleObj
    })
  },
  created() {},
  methods: {}
};
</script>
