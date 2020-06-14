<template>
  <div class="app-content">
    <el-container>
      <el-header>
       <el-row>
         <el-col :span="3">
           <img src="../assets/svg/logo.svg" alt="" >
         </el-col>
                  <el-col :span="12"  :offset="9">
           logo22
         </el-col>
         
       </el-row>
        </el-header>
      <el-container>
        <el-aside width="100px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
  }),
};
</script>

<style>

</style>
