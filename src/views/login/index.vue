<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <div class="title-container">
        <h3 class="title">{{$t('login.title')}}</h3>
        <lang-select class="set-language"></lang-select>
      </div>
      <el-tabs v-model="activeTabs" type="card">
        <!--账户密码登录-->
        <el-tab-pane label="账户密码登录" name="first">
          <el-form-item prop="username">
            <span class="svg-container svg-container_login">
              <svg-icon icon-class="user" />
            </span>
            <el-input name="username" type="text" v-model="loginForm.username" autoComplete="off" placeholder="用户名" />
          </el-form-item>

          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="off" placeholder="密码" />
            <span class="show-pwd" @click="showPwd">
              <svg-icon icon-class="eye" />
            </span>
          </el-form-item>
        </el-tab-pane>
        <!--手机号登录-->
        <el-tab-pane label="手机号登录" name="second">
          <el-form-item prop="phone">
            <span class="svg-container svg-container_login">
              <svg-icon icon-class="user" />
            </span>
            <el-input name="phone" type="text" v-model="loginForm.phone" autoComplete="off" placeholder="手机号" />
          </el-form-item>
          <el-row>
            <el-col :span="16">
              <el-form-item prop="email">
                <span class="svg-container svg-container_login">
                  <svg-icon icon-class="email" />
                </span>
                <el-input name="username" type="text" v-model="loginForm.code" autoComplete="off" placeholder="验证码" />
              </el-form-item>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-form-item>
                <el-button plain @click.native.prevent="handleGetCode">获取验证码</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <!--账号记住以及密码修改-->
      <el-row>
        <el-col :span="12">
          <el-form-item class="no-bg">
            <el-checkbox v-model="loginForm.remember">记住账号</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item class="no-bg text-align-right">
            <a>忘记密码？</a>
          </el-form-item>
        </el-col>
      </el-row>
      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">{{$t('login.logIn')}}</el-button>
      <!--第三方登录和账号注册-->
      <el-row>
        <el-col :span="6">
          <el-form-item class="no-bg">
            <span>其他登录方式</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item class="no-bg">
            <a class="svg-icon-three">
             <svg-icon icon-class="qq" />
            </a>
            <a class="svg-icon-three">
             <svg-icon icon-class="wechat" />
            </a>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item class="no-bg text-align-right">
            <router-link :to="register">注册账户</router-link>
          </el-form-item>
        </el-col>
      </el-row>
     <!-- <el-button type="primary" style="width: 100%;margin-left: 0" @click="showDialog=true">{{$t('login.thirdparty')}}</el-button>-->
    </el-form>

   <!-- <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog" append-to-body>
      {{$t('login.thirdpartyTips')}}
      <br/>
      <br/>
      <br/>
      <social-sign />
    </el-dialog>-->

  </div>
</template>

<script>
import { isvalidUsername, validatePhone } from '@/utils/validate'
import { getRember, setRember, removeRember } from '@/utils/auth'
import LangSelect from '@/components/LangSelect'
import SocialSign from './socialsignin'

export default {
  components: { LangSelect, SocialSign },
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      activeTabs: 'first', // 用于登录功能切换
      register: '/register',
      loginForm: {
        remember: false, // 记住账号标识
        username: '', // 用户名
        password: '', // 密码
        phone: '', // 电话号码
        code: '' // 验证码
      },
      loginRules: {// 表单规则
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false
    }
  },
  methods: {
    rememberAccount() {
      if (this.loginForm.remember) {
        setRember({ name: this.loginForm.username })
      } else {
        removeRember()
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleGetCode() {
      if (this.loginForm.phone === '' || this.loginForm.phone === null) {
        this.$message({
          message: '请先填写手机号',
          type: 'error'
        })
      } else {
        if (!validatePhone(this.loginForm.phone)) {
          this.$message({
            message: '手机号格式不正确',
            type: 'error'
          })
        }
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
            this.rememberAccount()
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1)
      // const hashObj = getQueryObject(hash)
      // const originUrl = window.location.origin
      // history.replaceState({}, '', originUrl)
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // }
      // const codeName = hashObj[codeMap[this.auth_type]]
      // if (!codeName) {
      //   alert('第三方登录失败')
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' })
      //   })
      // }
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
    if (getRember()) {
      const RemberInfo = JSON.parse(getRember())
      this.loginForm.username = RemberInfo.name
      this.loginForm.remember = true
    }
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
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
  .el-tabs__header{
    margin-bottom: 24px;
  }
  .el-tabs--card>.el-tabs__header{
    border-bottom: 0;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav{
    border: 0;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item{
    border-bottom: 0;
    border-left:0;
  }
  .el-tabs>.el-tabs__header .el-tabs__item{
    border-bottom: 0 !important;
  }
  .el-tabs__item{
    border-bottom: 0 !important;
    font-size: 16px;
  }
  .el-form-item button{
    padding: 12px 5px 12px 15px;
    height: 47px;
    display: inline-block;
    width: 100%;

  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border-bottom:2px solid #409EFF!important;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#f0f2f5;
$dark_gray:#889aa4;
$light_gray:#eee;

@media screen and (min-width: 760px) {
  .login-container {
    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
  }
}
.login-container {
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
