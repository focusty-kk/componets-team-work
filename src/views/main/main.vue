<template>
  <div class="main">
    <NavList :navData="msg"></NavList>
    <el-button @click="changeNav">重置</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { mapState, mapMutations } from "vuex";
import NavList from "@/components/NavList.vue";
import { Istate } from "@/vuex/stateInterface";

@Component({
  components: {
    NavList
  },
  computed: mapState({
    name: (state: Istate) => state.name,
    nameage: (state: Istate) => {
      return state.name + 25;
    }
  })
})
export default class Main extends Vue {
  private msg = ["首页", "问答", "专栏"];
  changeNav() {
    this.msg = ["首页", "问答", "修改"];
  }
  @Watch("msg", { immediate: true, deep: true })
  onPersonChanged(val:any, oldVal:any) {
      console.log(val,oldVal)
  }
}
</script>
