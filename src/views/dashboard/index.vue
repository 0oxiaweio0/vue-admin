<template>
  <div style="background:#f0f2f5;height:100%;">
    <navbar></navbar>
    <div class="modals-content">
      <div class="modal-item" v-for="item in modals">
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
  import { Navbar} from '@/views/layout/components'

  export default {
    name: 'dashboard',
    components:{
      Navbar
    },
    data() {
      return {
        img_settings,
        modals:[
          {title:"文章中心",icon:"article",path:"vue"},
          {title:"个人中心",icon:"personCenter",path:"my"},
          {title:"系统配置",icon:"sysConfig",path:"set"}
        ]
      }
    },
    computed: {

    }
  }
</script>

<style rel="stylesheet/css" lang="css" scoped>
  .modals-content{
    width: 1200px;
    margin: 100px auto;
  }
  .modals-content .modal-item{
    font-size: 100px;
    width: 200px;
    float: left;
    margin: 20px;
    border-radius: 21px;
    -moz-box-shadow: 0 5px 15px 0 #c3c3c3 ;
    -webkit-box-shadow:0 5px 15px 0 #c3c3c3 ;
    box-shadow: 0 5px 15px 0 #c3c3c3;}
  .modals-content:after{visibility: hidden;content: "";display: block;clear: both}
  .modals-content .modal-item:hover{cursor: pointer;}
  .modals-content .modal-item .modal-item-icon{text-align: center;margin-top: 10px}
  .modals-content .modal-item .modal-item-label{ height: 30px;position: relative;margin-top: 15px}
  .modals-content .modal-item .modal-item-label span{position:absolute;top:0;font-size: 20px;display:inline-block;width:100%;text-align: center;font-weight: normal}
</style>
