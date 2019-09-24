<template>
	<div>
		<div style="width: 100%;position: absolute;top: 0;left: 0;z-index: 99;">
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
	              <li class="search"><el-button type="text" @click="open3"><span class="iconfont icon-search"></span></el-button></li>
	              <li><a href="#/mine"><span class="iconfont icon-wode" style="font-size: 24px;"></span></a></li>
	              <li><a href="#/b"><span class="iconfont icon-cart-copy" style="font-size: 24px;"></span></a></li>
	            </ul>
	          </div>
	        </div>
	      </div>
	    </div>
	</div>
</template>

<script>
	export default {
	    methods: {
	      open3() {
	        this.$prompt('搜索',{
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
	          inputErrorMessage: '邮箱格式不正确'
	        }).then(({ value }) => {
	          this.$message({
	            type: 'success',
	            message: '你的邮箱是: ' + value
	          });
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '取消输入'
	          });       
	        });
	      }
	    }
	}
</script>

<style>
	.search span{color: #878787;font-size: 24px;}
</style>