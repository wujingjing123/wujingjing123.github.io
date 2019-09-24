<template>
	<div style="padding-top: 80px;background: #f7f7f7;min-height: 500px;">
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
		<div style="border-top: 1px solid #dadee1;">
			<div v-show="$store.state.name&&sxy.length" class="ts">
				<span style="color: #7a9c59;font-size: 12px;margin-right: 8px;display: inline-block;line-height: 20px;" class="icon iconfont icon-duihao"></span>
				<span style="font-size:16px;color: #7a9c59;">"{{$store.state.name}}" 成功添加进您的购物车.</span>
				<span @click="rtn()" class="gw">继续购物</span>
			</div>
			<div class="gwc" v-if="sxy.length">
				<div class="gwc_l">
					<div class="gwc_title">
						<p style="width: 50%;">商品</p>
						<p style="width: 15%;">价格</p>
						<p style="width: 15%;">数量</p>
						<p style="width:20%;text-align:right;">合计</p>
					</div>
					<div v-for="i in sxy" class="gwc_sbox">
						<div style="width: 50%;float: left;">
							<span class="g_s_del" @click="del(i.title)">×</span>
							<img :src="i.img" alt="">
							<span class="g_s_title">{{i.title}}</span>
						</div>
						<span class="g_s_price">¥{{i.price}}</span>
						<div class="g_s_ipt">
							<span @click="jian(i.title)">-</span>
							<span style="overflow: hidden;">{{i.s}}</span>
							<span @click="jia(i.title)">+</span>
						</div>
						<span class="g_s_z">¥{{i.price*i.s}}</span>
					</div>
				</div>
				<div class="gwc_r">
					<h2>购物车总计</h2>
					<p style="padding:4px 0 12px;">购物车小计 <span>¥{{zh}}</span></p>
					<p style="border-bottom: 1px solid #dddddd;">运费 <span>免费送货</span></p>
					<p style="border-bottom: 2px solid #dddddd; padding: 10px 0;">订单总计 <span>¥{{zh}}</span></p>
					<div class="go">前往收银台</div>
					<h3>优惠券:</h3>
					<input type="text" placeholder="优惠券代码">
					<div class="use">使用优惠券</div>
				</div>
			</div>
			<div class="gwc gwcc" v-else="">
				<p>您的购物车目前是空的。</p>
				<p><a href="#/a"><span >返回购物</span></a></p>
			</div>
		</div>
		<div>
			<my_footer></my_footer>
		</div>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	import my_footer from './component/my_footer.vue'
	export default {
		data(){
			return{				
			}
		},
		computed: {
			...mapGetters(['sxy','zh']),
		},
		methods:{
			...mapActions(['jia']),
			...mapActions(['jian']),
			...mapActions(['del']),
			rtn(){
				location.href='#/a'
			}
		},
		components:{
			my_footer
		}
	}
</script>

<style>
	.gwcc p{
		margin: 0 auto;
		text-align: center;
		font-size: 16px;
		color: #777;
		margin-bottom: 20px;
	}
	.gwcc span{
		display: inline-block;
		    font-size: 16px;
			font-weight: normal;
			color: #ffffff;
			border-color: #519f10;
			background-color: #519f10;
			padding:12px 10px;
			background-image: none;
	}
	.gwcc{
		padding-top: 100px;
	}
	.gwc_r h2,.gwc_r h3{
		font-size: 16px;
		color: #555;
		padding:6px;
		margin-bottom: 10px;
		border-bottom: 3px solid #dddddd;
	}
	.gwc input{
		    padding: 9px 10px 8px 10px;
			width: 95%;
			font-size: 16px;
			border: solid 1px #999999;
			color: #7a7a7a;
			background-color: #fff;
	}
	.go{
		font-size: 16px;
		font-weight: normal;
		color: #ffffff;
		border-color: #519f10;
		background-color: #519f10;
		padding-top: 12px;
		padding-bottom: 12px;
		background-image: none;
		text-align: center;
		margin: 20px 0;
	}
	.use{
		font-size: 16px;
		font-weight: normal;
		color: #ffffff;
		border-color: #90af6b;
		background-color: #90af6b;
		padding-top: 9px;
		padding-bottom: 9px;
		text-align: center;
		margin: 20px 0;
	}
	.gwc_r p{
		font-size: 14px;
		color: #777;
		font-weight: bold;
	}
	.gwc_r p span{
		float: right;
		font-weight: normal;
	}
	.gw{
		font-size: 14px;
		color: #ffffff;
		background-color: #10ac62;
		margin-top: -10px;
		width: 98px;
		height: 40px;
		display: inline-block;
		float: right;
		line-height: 40px;
		text-align: center;
	}
	.ts{
		border: 1px solid #88dfae!important;
		width: 80%;
		padding: 15px 8px;
		margin: 30px auto;
}
	
	.g_s_ipt{
		float: left;
		width: 15%;
		margin: 35px 0;
		/* margin-left: 20px; */
	}
	.g_s_ipt span{
		width:30%;
		height: 40px;
		border: 1px solid #ccc;
		line-height: 40px;
		text-align: center;
	}
	.g_s_price{
		font-size: 14px;
		color: #777;
		width: 15%;
		padding: 0 12px;
		box-sizing: border-box;
		line-height: 112px;
	}
	.g_s_z{
		font-size: 14px;
		color: #777;
		width: 20%;
		text-align: right;
		line-height: 112px;
		font-weight: bold;
	}
	.g_s_title{
		font-size: 14px;
		font-weight: normal;
		color: #519f10;
		padding: 0px 8%;
		line-height: 112px;
	}
	.g_s_del{
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 2px solid #ddd;
		color: #ddd;
		line-height: 18px;
		text-align: center;
		margin: 40px 2%;
	}
	.gwc_sbox img{
		float:left;
		width: 90px;
		height: 90px;
		margin: 10px 8px;
	}
	.gwc_sbox span{
		float:left;
	}
	.gwc_sbox {
		height: 112px;
		border-bottom: 1px dotted #ddd;
	}
	.gwc {
		width: 80%;
		margin: 0 auto;
		overflow: hidden;
	}

	.gwc_l {
		float: left;
		border-right: 1px solid #ccc;
		width: 60%;
		padding-right: 30px;
	}

	.gwc_title p {
		float: left;
		font-size: 16px;
		color: #555;
		padding: 4px 12px;
		font-weight: bold;
		box-sizing: border-box;
	}

	.gwc_title {
		height: 30px;
		border-bottom: 2px solid #ddd;
	}

	.gwc_r {
		float: left;
		width: 35%;
		padding-left: 30px;
		box-sizing: border-box;
	}
</style>
