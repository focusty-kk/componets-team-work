<template>
  <div class="home">
    <img alt="Vue logo" @click="clickImg" src="../assets/logo.png">
    <el-button type="primary">主要按钮</el-button>
    <p>{{msg}}</p>
    <HelloWorld :msg="msg" @getmessage="showMsg"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public msg = 'Welcome to Your Vue.js + TypeScript App';

  clickImg() {
    console.log(this.msg);
  }

  showMsg(str:any) {
    console.log(str + this.msg);
  }
}
</script>
