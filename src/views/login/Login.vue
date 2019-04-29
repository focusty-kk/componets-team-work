<template>
  <div class="box-wrap">
    <div style="width:600px;">
      <el-form :model="form" ref="validateForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
          label="姓名"
          prop="name"
          :rules="[
          {required:true,message:'请输入姓名',trigger:'blur'}
        ]"
        >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[
      { required: true, message: '密码不能为空'}
    ]"
        >
          <el-input v-model.number="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ajax from '../../utils/axios';

@Component({})
export default class Login extends Vue {
  form = {
    name: '',
    password: '',
  };

  submitForm() {
    (this.$refs.validateForm as any).validate((valid: boolean) => {
      if (valid) {
        return ajax.post('/api/login', this.form).then((res: any) => {
          console.log(res.success);
          if (res.success) {
            this.$message.success('恭喜你，登陆成功');
            this.$router.push('/pages/main');
            /* 设置vuex的数据 */
            this.$store.dispatch({
              type: 'setUsrData',
              payload: res.value,
            });
          } else {
            this.$message.error('登录失败');
          }
        });
      }
      return false;
    });
  }
}
</script>
`
