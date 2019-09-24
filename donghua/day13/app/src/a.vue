<template>
	<div style="padding-top: 80px;background: #fff;">
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
		<div style='padding:0 50px;box-sizing: border-box;background-color: rgba(244,244,244,0.5);'>
			<span style="display: inline-block;line-height: 80px;font-size: 24px;color: #333;width: 20%;float: left;">茶叶</span>
			<ul class="tea_nav">
				<li @click="index=$index" v-for='(i,$index) in arr' :class="index==$index?'h_t':''">{{i.text}}</li>	
			</ul>
		</div>
			<div style='min-height:600px;'>
				<div v-for="(i,$index) in arr" v-show='index==$index' style='overflow: hidden;padding: 0 30px;box-sizing: border-box;'>				
					<div class='tee' v-for="(a,$index) in i.oarr">
						<a href="#/b">
							<div class="tee_ll">
								<img :src="a.img" alt="">
								<p>{{a.title}}</p>	
							</div>
						</a>
						<span>¥{{a.price}}</span>
						<a href="#/cxq" @click="a_revise(a)" style="cursor: pointer; width: 31px;height: 29px;background: fff;color: #d1d1d1;border: 1px solid #d1d1d1;display: inline-block;line-height: 30px;text-align: center;margin-bottom: 20px;">➡</a>
					</div>
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
		data() {
			return {	
				arr: [{
							text: '全部',
							oarr: [{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYTY5N2NjZmUxNzIwNTg1YjcwM2E2OTk2ZWY3N2U4NmEtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '西湖龙井特级',
									price: '888.0',
									s:0,
									uid: 1,
									t:'绿茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYWNkYWZkYWVmNGVlM2NiNmJlYTFjNWI5MWE2MzQwOGMtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '洞庭碧螺春',
									price: '500.0',
									s:0,
									uid: 1,
									t:'绿茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYzNjYmVkZWE4N2JmNzZjOTUyODdjZWUyYWQ4MjgyM2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '祁门红茶',
									price: '985.0',
									s:0,
									uid: 2,
									t:'红茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjc0Y2E2YTE1Nzc3Mjk4MTFhMDJiOTg0Y2ZlMzliY2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '正山小种',
									price: '799.0',
									s:0,
									uid: 2,
									t:'红茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWNjYjNmZjU3YWU2YjBmMmRiYWZmOTk2MzljY2E4N2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '冻顶乌龙茶',
									price: '620.0',
									s:0,
									uid: 3,
									t:'乌龙茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNDM1OTBkNjFjM2ViOGU2YzUyYWU3ZmM2N2I3YjQwZGMtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '大红袍',
									price: '3480.0',
									s:0,
									uid: 3,
									t:'乌龙茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjhlYTFmMDQ0Y2NhOWI4NWEzYWZkMzExYzczZTY3MjQtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '霍山黄芽蒙洱银针',
									price: '711.0',
									s:0,
									uid: 4,
									t:'黄茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWM4NmNiNjkzOTdjOTM4NWQ4MzI0MDdlZDhhY2EwMmUtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '蒙顶黄芽',
									price: '450.0',
									s:0,
									uid:4,
									t:'黄茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMDMzMjg2Zjc0ZWU4M2ZiM2U5MTllZTgwMDc4MjRjNTAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '云南普洱茶',
									price: '500.0',
									s:0,
									uid: 5,
									t:'黑茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjY1ZjU4NWU5ZmNmYjkxMDBlMzc1YmFkMDQyNTkwMzEtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '湖北老青茶',
									price: '400.0',
									s:0,
									uid:5,
									t:'黑茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvODMxNGZmNmYyYjkyNzcxZmY2N2U5NjdlZjQyNjAzZWItNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '茉莉花茶',
									price: '799.0',
									s:0,
									uid: 6,
									t:'花茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMGFkMzdiZDQwOGNjYWMwYzI0Y2JmNzdiMDZiNDg4ODAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '白牡丹',
									price: '1235.0',
									s:0,
									uid:7,
									t:'白茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvOTc4NTUwMDZjYzA1MDQ1OGVkMDFmZjE2N2I4YjNkOTctNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '白毫银针',
									price: '258.0',
									s:0,
									uid:7,
									t:'白茶'
								},
							]
						},
						{
							text: '花茶',
							oarr: [{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvODMxNGZmNmYyYjkyNzcxZmY2N2U5NjdlZjQyNjAzZWItNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '茉莉花茶',
									price: '799.0',
									s:0,
									uid: 6,
									t:'花茶'
								},
							]
						},
						{
							text: '白茶',
							oarr: [
									{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMGFkMzdiZDQwOGNjYWMwYzI0Y2JmNzdiMDZiNDg4ODAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '白牡丹',
									price: '1235.0',
									s:0,
									uid:7,
									t:'白茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvOTc4NTUwMDZjYzA1MDQ1OGVkMDFmZjE2N2I4YjNkOTctNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '白毫银针',
									price: '258.0',
									s:0,
									uid:7,
									t:'白茶'
								},
							]
						},
						{
							text: '黑茶',
							oarr: [
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMDMzMjg2Zjc0ZWU4M2ZiM2U5MTllZTgwMDc4MjRjNTAtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '云南普洱茶',
									price: '500.0',
									s:0,
									uid: 5,
									t:'黑茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjY1ZjU4NWU5ZmNmYjkxMDBlMzc1YmFkMDQyNTkwMzEtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '湖北老青茶',
									price: '400.0',
									s:0,
									uid:5,
									t:'黑茶'
								},
							]
						},
						{
							text: '黄茶',
							oarr: [
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjhlYTFmMDQ0Y2NhOWI4NWEzYWZkMzExYzczZTY3MjQtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '霍山黄芽蒙洱银针',
									price: '711.0',
									s:0,
									uid: 4,
									t:'黄茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWM4NmNiNjkzOTdjOTM4NWQ4MzI0MDdlZDhhY2EwMmUtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '蒙顶黄芽',
									price: '450.0',
									s:0,
									uid:4,
									t:'黄茶'
								},
							]
						},
						{
							text: '乌龙茶',
							oarr: [{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWNjYjNmZjU3YWU2YjBmMmRiYWZmOTk2MzljY2E4N2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '冻顶乌龙茶',
									price: '620.0',
									s:0,
									uid: 3,
									t:'乌龙茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNDM1OTBkNjFjM2ViOGU2YzUyYWU3ZmM2N2I3YjQwZGMtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '大红袍',
									price: '3480.0',
									s:0,
									uid: 3,
									t:'乌龙茶'
								}
							]
						},
						{
							text: '绿茶',
							oarr: [{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYTY5N2NjZmUxNzIwNTg1YjcwM2E2OTk2ZWY3N2U4NmEtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '西湖龙井特级',
									price: '888.0',
									s:0,
									uid: 1,
									t:'绿茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYWNkYWZkYWVmNGVlM2NiNmJlYTFjNWI5MWE2MzQwOGMtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '洞庭碧螺春',
									price: '500.0',
									s:0,
									uid: 1,
									t:'绿茶'
								},
							]
						},
						{
							text: '红茶',
							oarr: [{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYzNjYmVkZWE4N2JmNzZjOTUyODdjZWUyYWQ4MjgyM2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '祁门红茶',
									price: '985.0',
									s:0,
									uid: 2,
									t:'红茶'
								},
								{
									img: 'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjc0Y2E2YTE1Nzc3Mjk4MTFhMDJiOTg0Y2ZlMzliY2MtNDAweDQwMC5qcGc_p_p100_p_3D.jpg',
									title: '正山小种',
									price: '799.0',
									s:0,
									uid: 2,
									t:'红茶'
								},
							]
						}
						
					],
				index: 0
			}
		},
		computed: {
			...mapGetters(['sxy'])
		},
		methods:{
			...mapActions(['a_revise'])
		},
		components:{
			my_footer
		}
	}
</script>

<style>
	.tea_nav{
		width: 80%;
		overflow: hidden;
		height: 87;
		text-align: right;
		font-size: 16px;
		margin-bottom: 30px;
		padding-bottom: 7px;
		box-sizing: border-box;
			
		}
	.tea_nav li{
		display: inline-block;
		line-height: 80px;
		margin:0 20px;
		color: #878787;
		font-size: 15px;
		cursor: pointer;
	}
	.tee {
		width: 260px;
		float: left;
		margin:0 15px;
	}

	.tee img {
		width: 260px;
		height: 260px;
	}

	.tee p {
		line-height: 50px;
		font-size: 16px;
		
	}
	.tee_ll{
		color: #555;
		position: relative;
		border-bottom: 1px solid #ccc;
	}
	.tee_ll:hover{
		color: #85bf41;
		/* border-bottom: 1px solid #85bf41; */
	}
	.tee_ll::before {
	  position: absolute;
	  content: "";
	  width: 0;
	  height: 1px;
	  background-color: #519f10;
	  left: 0px;
	  bottom: -1px;
	  margin: 0;
	  transition: all 0.6s ease 0s;
	 }
	
	 .tee_ll:hover:before {
	  width: 100%;
	 }
	 .tee_ll:hover img{
	 	transform: scale(1.1);
	 	transition: 0.3s;
	 }
	.tee span{
		display: inline-block;
		/* line-height: 30px; */
		padding-top:10px ;
		padding-bottom: 15px;
		font-size: 16px;
		color: #8e8e8e;
		display: block;
	}

	.h_t {
		color: #85bf41 !important
	}
</style>
