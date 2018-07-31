<template>
  <div style="background:#f0f2f5;height:100%;">
    <navbar></navbar>
    <div class="modals-content modals-content-align">
      <div class="modal-item animated " v-for="item in modals">
        <router-link :to="item.path">
          <div class="modal-item-icon">
            <svg-icon :icon-class="item.icon"></svg-icon>
          </div>
          <div class="modal-item-label">
            <span>{{item.title}}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import img_settings from '@/assets/dashboard/settings.png'
  import { Navbar } from '@/views/layout/components'

  export default {
    name: 'dashboard',
    components: {
      Navbar
    },
    data() {
      return {
        img_settings,
        modals: [
          { title: '文章中心', icon: 'article', path: 'vue' },
          { title: '个人中心', icon: 'personCenter', path: 'my' },
          { title: '系统配置', icon: 'sysConfig', path: 'set' }
        ]
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style rel="stylesheet/css" lang="css" scoped>
  .modals-content{
    width: 1200px;
    margin: 100px auto;
  }
  .modals-content-align{
    text-align: center;
  }
  .modals-content .animated {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @keyframes pulse {
    0% {
      transform: scale(1, 1)

    }
    50% {
      transform: scale(1.05, 1.05)
    }
    100% {
      transform: scale(1.03, 1.03)
    }
  }

  .modals-content .modal-item:hover {
    -webkit-animation-name: pulse;
    animation-name: pulse
  }
  .modals-content:after{
    visibility: hidden;
    content: "";
    display: block;
    clear: both
  }
  .modals-content .modal-item:hover{
    cursor: pointer;
  }
  .modals-content .modal-item .modal-item-icon{
    text-align: center;
    margin-top: 10px
  }
  .modals-content .modal-item .modal-item-label{
    height: 30px;
    position: relative;
    margin-top: 15px
  }
  .modals-content .modal-item .modal-item-label span{
    position:absolute;
    top:0;
    left:0;
    font-size: 20px;
    display:inline-block;
    width:100%;
    text-align: center;
    font-weight: normal
  }
  @media screen and (max-width: 768px) {
    .modals-content{
      width: 400px;
      margin: 20px auto;
      text-align: center;
    }
    .modals-content .modal-item{
      font-size: 50px;
      width: 100px;
      display: inline-block;
      margin: 10px;
      border-radius: 5px;
      -moz-box-shadow: 0 5px 15px 0 #c3c3c3 ;
      -webkit-box-shadow:0 5px 15px 0 #c3c3c3 ;
      box-shadow: 0 5px 15px 0 #c3c3c3;
    }
  }
  @media screen and (min-width: 768px ) and (max-width: 991px) {
    .modals-content{
      width: 700px;
      margin: 100px auto;
    }
    .modals-content .modal-item{
      font-size: 75px;
      width: 150px;
      display: inline-block;
      margin: 15px;
      border-radius: 10px;
      -moz-box-shadow: 0 5px 15px 0 #c3c3c3 ;
      -webkit-box-shadow:0 5px 15px 0 #c3c3c3 ;
      box-shadow: 0 5px 15px 0 #c3c3c3;
    }
  }
  @media screen and (min-width: 992px ) and (max-width: 1199px) {
    .modals-content{
      width: 800px;
      margin: 100px auto;
    }
    .modals-content .modal-item{
      font-size: 75px;
      width: 150px;
      display: inline-block;
      margin: 15px;
      border-radius: 15px;
      -moz-box-shadow: 0 5px 15px 0 #c3c3c3 ;
      -webkit-box-shadow:0 5px 15px 0 #c3c3c3 ;
      box-shadow: 0 5px 15px 0 #c3c3c3;
    }
  }
  @media screen and (min-width: 1200px) {
    .modals-content{
      width: 1200px;
      margin: 100px auto;
    }
    .modals-content .modal-item{
      font-size: 100px;
      width: 200px;
      display: inline-block;
      margin: 20px;
      border-radius: 21px;
      -moz-box-shadow: 0 5px 15px 0 #c3c3c3 ;
      -webkit-box-shadow:0 5px 15px 0 #c3c3c3 ;
      box-shadow: 0 5px 15px 0 #c3c3c3;
    }
  }
</style>
