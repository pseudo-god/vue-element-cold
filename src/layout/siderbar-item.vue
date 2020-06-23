<template>
  <el-col>
    <template v-for="(item, index) in routers">
      <el-menu-item :index="item.path" :key="index" v-if="!item.children" @click="click(item)">
        <i :class="`el-icon-${item.meta.icon}`"></i>
        <span slot="title"> {{ item.meta.title }}</span>
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
