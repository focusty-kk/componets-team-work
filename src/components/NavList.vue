<template>
  <div class="nav-container">
    <div class="nav-list container-center">
      <el-row>
        <el-col :span="12" class="nav-child-wrap">
          <div class="nav-child" v-for="(item, index) in navData" :key="index">
              <!-- <el-link type="primary" href="/pages/article" >{{item}}</el-link> -->
              {{item}}
          </div>
        </el-col>
        <el-col :span="12">
          <div></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavList extends Vue {
  @Prop()
  private navData!: Array<string>;
}
</script>

<style lang="less" scoped>
.nav-container {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  .nav-list {
    height: @base-box-height;
    line-height: @base-box-height;
    .nav-child-wrap {
      .flex();
      div.nav-child {
        display: inline-block;
        width: 8rem;
        font-size: 2.4rem;
        cursor: pointer;
      }
    }
  }
}
</style>
