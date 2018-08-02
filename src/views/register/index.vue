<template>
  <div class="register-container">
    <el-form class="login-form" autoComplete="on" :model="registerForm" :rules="registerRules" ref="registerForm" label-position="left">
      <div class="title-container">
        <h3 class="title">{{$t('login.title')}}</h3>
        <lang-select class="set-language"></lang-select>
      </div>
      <el-row>
        <el-form-item class="no-bg"><span>注册</span></el-form-item>
      </el-row>
      <!--邮箱-->
      <el-row>
        <el-form-item prop="email">
            <span class="svg-container svg-container_login">
              <svg-icon icon-class="email" />
            </span>
          <el-input name="username" type="text" v-model="registerForm.email" autoComplete="off" placeholder="请输入邮箱" />
        </el-form-item>
      </el-row>
      <!--密码-->
      <el-row>
        <el-form-item prop="password">
            <span class="svg-container svg-container_login">
              <svg-icon icon-class="password"/>
            </span>
          <el-input name="password" type="text" v-model="registerForm.password" autoComplete="off" placeholder="请输入密码 " />
        </el-form-item>
      </el-row>
      <!--二次输入密码-->
      <el-row>
        <el-form-item prop="password">
            <span class="svg-container svg-container_login">
              <svg-icon icon-class="password"/>
            </span>
          <el-input name="rePassword" type="text" v-model="registerForm.rePassword" autoComplete="off" placeholder="请再一次输入密码 " />
        </el-form-item>
      </el-row>
      <!--电话-->
      <el-row>
        <el-form-item prop="phone">
          <el-input placeholder="请输入手机号" v-model="registerForm.phone" class="input-with-select">
            <el-select v-model="registerForm.select" slot="prepend" placeholder="请选择">
              <el-option label="+86" value="1"></el-option>
              <el-option label="+97" value="2"></el-option>
            </el-select>
          </el-input>
 <!--         <el-input name="phone" type="text" v-model="registerForm.phone" autoComplete="off" placeholder="请输入手机号 " />-->
        </el-form-item>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item prop="email">
                <span class="svg-container svg-container_login">
                  <svg-icon icon-class="email" />
                </span>
            <el-input name="username" type="text" autoComplete="off" placeholder="验证码" />
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-form-item>
            <el-button plain >获取验证码</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="email" class="no-bg">
            <el-button type="primary">注册</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item class="no-bg text-align-right line-height47">
            <router-link :to="login">使用已有账户登录</router-link>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script>
  import LangSelect from '@/components/LangSelect'
  export default {
    components: { LangSelect },
    name: 'register',
    data() {
      return {
        login: '/login', // 跳往登录页
        registerRules: {// 注册表单验证规则
        },
        registerForm: { // 注册表单所有字段
          select: '', // 手机号码前缀
          email: '', // 邮箱
          password: '', // 密码
          rePassword: '', // 密码二次确认
          phone: '', // 注册电话
          code: '' // 注册码
        }
      }
    },
    methods: {
    },
    created() {

    },
    destroyed() {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg:#2d3a4b;
  $light_gray:#eee;

  /* reset element-ui css */
  .register-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: rgba(0,0,0,.65);
        height: 47px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px #40a9ff inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .el-form-item {
      border: 0px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .el-form-item a{
      color: #409EFF;
    }
    .el-form-item a.svg-icon-three{
      color: #3A3A3A;
    }
    .el-form-item a.svg-icon-three:hover{
      color: #409EFF;
    }
    .el-form-item.no-bg{
      background: transparent;
    }
    .el-form-item.text-align-right{
      text-align: right;
    }
    .el-form-item button{
      padding: 12px 5px 12px 15px;
      height: 47px;
      display: inline-block;
      width: 100%;
    }
    .line-height47 .el-form-item__content {
      line-height: 47px;
    }
    .el-input-group__prepend{
      padding: 0;
    }
    .el-input-group__prepend .el-select {
      margin: 0;
    }
    .el-select .el-input {
      width: 110px;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
      width: 100%;
    }





  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg:#f0f2f5;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  @media screen and (min-width: 760px) {
    .register-container {
      background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
      background-repeat: no-repeat;
      background-position: center 110px;
      background-size: 100%;
    }
  }
  .register-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 380px;
      padding: 15px 15px 5px 15px;
      margin: 120px auto;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 5px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .svg-icon-three{
      padding: 0px 5px 5px 15px;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      font-size: 30px;
    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        font-weight: 400;
        color: rgba(0,0,0,.85);
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
      .set-language {
        //color: #f0f2f5;
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: rgba(0,0,0,.65);
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
