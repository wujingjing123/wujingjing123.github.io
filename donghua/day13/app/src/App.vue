<template>
  <div id="app">
    <!-- <div style="width: 100%;position: absolute;top: 0;left: 0;z-index: 99;">
      <div style="width: 80%;height: 60px;margin: 0 auto;">
        <div style="width: 100%;">
          <div class="logo" style="width: 20%;float: left;">
            <img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9mNzQxMjQwMWIwNmNmN2NiYjg5ODkxMGMxMTZjNmU3Ni5wbmc_p_p100_p_3D.png" alt="">
          </div>
          <div style="width: 50%;height: 60px;float: left;line-height: 60px;">
            <div style="width:100%;font-size: 16px;text-align: center;">
              <ul class="tea">
                <li><a href="#/">首页</a></li>
                <li><a href="#/about">关于</a></li>
                <li><a href="#/a">茶叶</a></li>
                <li><a href="#/base">基地</a></li>
                <li><a href="#/news">新闻</a></li>
                <li><a href="#/contact">联系</a></li>
              </ul>
            </div>
          </div>
          <div style="width: 30%;float: right;line-height: 60px;">
            <ul class="tb" style="float: right;">
              <li><span class="iconfont">&#xe617;</span></li>
              <li><a href="#/mine"><span class="iconfont">&#xe600;</span></a></li>
              <li><a href="#/b"><span class="iconfont">&#xe601;</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
    <div class="app_center">
      <router-view></router-view>
    </div>
    <!-- <div class="app_footer" style="width:100%;height: 280px;background: #F3F3F3;">
      <div style="width:100%;height: 192px;padding-top: 40px;">
        <div style="width: 70%;float: left;margin-top: 20px;">
          <div style="width: 20%;float: left;">
            <p style="color: #666666;font-size: 26px;">联系</p>
            <p style="color: #969696;font-size: 14px;">Contact</p>
          </div>
          <div style="width: 30%;float: left;">
            <p style="#5D5D5D;font-size: 16px;margin-bottom: 15px;">关注我们</p>
            <ul class="icon">
               <li style="background-position: -0 -96px" ></li>
               <li style="background-position: -24px -96px" ></li>
            </ul>
          </div>
          <div class="fly" style="width: 50%;float: left;">
            <div style="color: #5D5D5D;font-size: 16px;margin-bottom: 30px;">起飞页自助建站平台</div>
            <p>地址：苏州市建外SOHO东区2号楼</p>
            <p>邮编：100000</p>
            <p>电话：010-69557550</p>
          </div>
        </div>
        <div style="width: 30%;float: left;margin-top: 20px;">
          <div style="float: right;">
            <div class="pt" style="width: 100px;height: 132px;float: left;margin-right: 10px;">
              <img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC82MWM1NDU1YWZjYzI0ZWIyZmNjZWQ5OTdiYzAxYTYwYy0xMDB4MTAwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="">
              <p style="width: 100px;font-size: 14px;text-align: center;">微信</p>
            </div>
            <div class="pt" style="width: 100px;height: 132px;float: left;">
              <img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC82MWM1NDU1YWZjYzI0ZWIyZmNjZWQ5OTdiYzAxYTYwYy0xMDB4MTAwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="">
              <p style="width: 100px;font-size: 14px;text-align: center;">微博</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {''
    return {
      
    }
  }
}
</script>

<style>
  @font-face {
    font-family: 'iconfont';  /* project id 1426600 */
    src: url('//at.alicdn.com/t/font_1426600_3j3b6j539wf.eot');
    src: url('//at.alicdn.com/t/font_1426600_3j3b6j539wf.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1426600_3j3b6j539wf.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1426600_3j3b6j539wf.woff') format('woff'),
    url('//at.alicdn.com/t/font_1426600_3j3b6j539wf.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1426600_3j3b6j539wf.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    /*font-size:16px;*/font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
  *{margin: 0;padding: 0;list-style: none;}
  a{color: #878787;text-decoration: none;}
  .app_center{width:100%;min-height: 1000px;overflow: hidden;}
  .app_footer .icon li{
    background-image: url('https://fast.qifeiye.com/FeiEditor/images/icon/social_icon_24x24.png');
    background-repeat: no-repeat;
    height: 24px;
    width:24px;
    margin: 0 3px;
    display: inline-block;
    overflow: hidden;

  }
  .tea a:hover{
    color: #519F10;
    border-bottom: 1px solid #519F10;
  }
  .logo img{width: 80px;height: 50px;}
  .tea li{width: 16%;text-align: center;float: left;color: #878787;}
  .tb li{width: 50px;height: 60px;text-align: center;float: left;color: #878787;font-size: 24px;line-height: 60px;}
  .fly p{color: #969696;font-size: 14px;}
  .pt img{width: 100%;height: 100px;}
</style>
