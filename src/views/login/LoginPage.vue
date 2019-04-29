<template>
<div class="box-wrap">
    <el-tabs type="border-card" style="width:600px;">
        <el-tab-pane label="注册">
            <Register />
        </el-tab-pane>
        <el-tab-pane label="登录">
            <Login />
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<style lang="less">
.box-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 50px 50px 20px 0;
}
</style>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';
import Login from '@/views/login/Login.vue';
import Register from '@/views/login/Register.vue';

@Component({
    components: {
        Login,
        Register
    }
})
export default class LoginPage extends Vue {}
</script>
`
