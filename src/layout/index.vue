<template>
  <div class="app-content">
    <Sidebar/>
    <Content/>
  </div>
</template>

<script>
import Content from "./content";
import Sidebar from "./sidebar";

export default {
  components: { Content, Sidebar },
  data: () => ({}),
  methods: {},
};
</script>

<style></style>
