<template>
  <div class="articles">
    <el-form :model="form" ref="validateForm" class="demo-ruleForm">
      <div>
        <el-form-item
          prop="input_title"
          :rules="[
          {required:true,message:'请输入标题',trigger:'blur'}
        ]"
        >
          <el-input label="标题" v-model="form.input_title" placeholder="请输入标题"></el-input>
        </el-form-item>
      </div>
      <div class="left-content">
        <el-form-item
          style="width:100%;margin-bottom:0;"
          prop="input_content"
          :rules="[
          {required:true,message:'请输入内容',trigger:'blur'}
        ]"
        >
          <el-input type="textarea" :rows="15" placeholder="请输入内容" v-model="form.input_content"></el-input>
        </el-form-item>
        <el-button class="art-button-submit" @click="submitArticle" type="primary">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.articles {
  background: #f3f3f3;
  padding: 20px;
  height: 100%;

  .left-content {
    padding: 20px 0;
    width: 70rem;
    display: flex;
    justify-content: left;
    align-items: flex-end;

    .art-button-submit {
      margin-left: 20px;
    }
  }
}
</style>

<script>
import { Component, Vue } from "vue-property-decorator";
import ajax from "../../utils/axios";
@Component
export default class Articles extends Vue {
  form = {
    input_title: "",
    input_content: ""
  };

  submitArticle() {
    this.$refs.validateForm.validate((valid) => {
      if (valid) {
        return ajax.post("/api/article", this.form).then((res) => {
            console.log(res.success)
          if (res.success) {
          } else {
            this.$message.error(res.message)
          }
        });
      }
      return false;
    });
  }
}
</script>
