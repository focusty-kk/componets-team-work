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
          <el-button type="primary" @click="submitForm">注册</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapMutations } from 'vuex';
import ajax from '../../utils/axios';
import { SOME_MUTATION } from '../../vuex/mutations-types';
@Component({
})
export default class Register extends Vue {
  form = {
    name: '',
    password: '',
  };

  submitForm() {
    (this.$refs.validateForm as any).validate((valid: boolean) => {
      if (valid) {
        return ajax.post('/api/register', this.form).then((res: any) => {
          if (res.success) {
            this.$message.success('注册成功');
          } else {
            this.$message.error('注册失败');
          }
        });
      }
      return false;
    });
  }

  resetForm() {
    (this.$refs.validateForm as any).resetFields();
  }
}
</script>
