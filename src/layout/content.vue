<template>
  <el-container
    class="main-container"
    :style="flexibleObj.mainStyle"
    direction="vertical"
  >
    <Header></Header>
    <el-container>
      <el-main>
        <PageTags />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapState } from "vuex";
import Header from "./header";
import PageTags from "./page-tags";

export default {
  components: { Header, PageTags },
  computed: {
    ...mapState({
      flexibleObj: (state) => state.app.flexibleObj,
    }),
  },
  methods: {},
};
</script>
