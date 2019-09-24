<template>
	<div>
		<!-- <img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvYTMxNGNjMzEzM2JhMGRkOTE2NTA0NmYwYTZjMDlmZjcuanBn.jpg" alt=""> -->
		<div>
			<my_nav></my_nav>
		</div>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide">
		      	<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS81OTE2NjgzNjA1NzgxOWEwNWM0ZmY2ZDk1YWMzNTQ4Yi5qcGc_p_p100_p_3D.jpg" alt="">
		      </div>
		      <div class="swiper-slide">
		      	<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS82MWE3MmU5YWE1OGE3NWFmNjRkYWUyODNhMDMwNDU0MC5qcGc_p_p100_p_3D.jpg" alt="">
		      </div>
		    </div>
		    <!-- Add Pagination -->
		    <div class="swiper-pagination swiper-pagination-white"></div>
		    <!-- Add Arrows -->
		    <!-- <div class="swiper-button-next swiper-button-white"></div>
		    <div class="swiper-button-prev swiper-button-white"></div> -->
		</div>
		
		<div style="width: 100%;min-height:1500px;background: #f7f7f7;padding-top: 520px;">
			<div style="height: 54px;padding-top: 80px;">
				<p style="font-size: 24px;color: #232323;text-align: center;">新茶上市</p>
				<p style="font-size: 14px;color: 999999;text-align: center;">Tea Leave</p>
			</div>
			<div style="width: 80%;min-height: 800px;margin: 0 auto;">
				<div style="width: 100%;">
					<div class="lean" style="width: 30%;height: 366px;float: left;margin-right: 5%;">
						<div class="teaimg" style="width: 233px;height: 233px;margin: 0 auto;margin-bottom: 10px;">
							<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC84MzE0ZmY2ZjJiOTI3NzFmZjY3ZTk2N2VmNDI2MDNlYi00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" style="width: 100%;height: 100%;">
						</div>
						<div style="height: 35px;color: #555555;font-size: 16px;text-align: center;border-bottom: 1px solid #ccc;">茉莉花茶</div>
						<p class="cy" style="border-width: 0 0 1px 0;border-style: solid;border-color: #ededed;"></p>
						<p style="color: #555555;font-size: 16px;text-align: center;padding-top: 15px;">¥223.0</p>
					</div>
					<div style="width: 30%;height: 366px;float: left;margin-right: 5%;">
						<div class="teaimg" style="width: 233px;height: 233px;margin: 0 auto;margin-bottom: 10px;">
							<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC8wYWQzN2JkNDA4Y2NhYzBjMjRjYmY3N2IwNmI0ODg4MC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" style="width: 100%;height: 100%;">
						</div>
						<div class="cy" style="height: 35px;color: #555555;font-size: 16px;text-align: center;border-bottom: 1px solid #ccc;">白牡丹</div>
						<p style="color: #555555;font-size: 16px;text-align: center;padding-top: 15px;">¥1,235.0</p>
					</div>
					<div style="width: 30%;height: 366px;float: left;">
						<div class="teaimg" style="width: 233px;height: 233px;margin: 0 auto;margin-bottom: 10px;">
							<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC85Nzg1NTAwNmNjMDUwNDU4ZWQwMWZmMTY3YjhiM2Q5Ny00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" style="width: 100%;height: 100%;">
						</div>
						<div class="cy" style="height: 35px;color: #555555;font-size: 16px;text-align: center;border-bottom: 1px solid #ccc;">白毫银针</div>
						<p style="color: #555555;font-size: 16px;text-align: center;padding-top: 15px;">¥258.0</p>
					</div>
				</div>
				<div style="width: 100%;">
					<div style="width: 30%;height: 366px;float: left;margin-right: 5%;">
						<div class="teaimg" style="width: 233px;height: 233px;margin: 0 auto;margin-bottom: 10px;">
							<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC8wMzMyODZmNzRlZTgzZmIzZTkxOWVlODAwNzgyNGM1MC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" style="width: 100%;height: 100%;">
						</div>
						<div class="cy" style="height: 35px;color: #555555;font-size: 16px;text-align: center;border-bottom: 1px solid #ccc;">云南普洱茶</div>
						<p style="color: #555555;font-size: 16px;text-align: center;padding-top: 15px;">¥500.0</p>
					</div>
					<div style="width: 30%;height: 366px;float: left;margin-right: 5%;">
						<div class="teaimg" style="width: 233px;height: 233px;margin: 0 auto;margin-bottom: 10px;">
							<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC8yNjVmNTg1ZTlmY2ZiOTEwMGUzNzViYWQwNDI1OTAzMS00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" style="width: 100%;height: 100%;">
						</div>
						<div class="cy" style="height: 35px;color: #555555;font-size: 16px;text-align: center;border-bottom: 1px solid #ccc;">湖北老青茶</div>
						<p style="color: #555555;font-size: 16px;text-align: center;padding-top: 15px;">¥400.0</p>
					</div>
					<div style="width: 30%;height: 366px;float: left;">
						<div class="teaimg" style="width: 233px;height: 233px;margin: 0 auto;margin-bottom: 10px;">
							<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC8yOGVhMWYwNDRjY2E5Yjg1YTNhZmQzMTFjNzNlNjcyNC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" style="width: 100%;height: 100%;">
						</div>
						<div class="cy" style="height: 35px;color: #555555;font-size: 16px;text-align: center;border-bottom: 1px solid #ccc;">霍山黄芽蒙洱银针</div>
						<p style="color: #555555;font-size: 16px;text-align: center;padding-top: 15px;">¥711.0</p>
					</div>
				</div>
			</div>
			<div style="width: 80%;margin: 0 auto;">
				<a href="#/a">
					<div style="width: 84px;height: 46px;background: #90AF6B;text-align: center;line-height: 46px;color: #fff;font-size: 30px;margin: 0 auto;">→</div>
				</a>
			</div>
				
			<div style="width: 100%;height: 700px;overflow: hidden;margin-top: 50px;background-image: url(https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvYTMxNGNjMzEzM2JhMGRkOTE2NTA0NmYwYTZjMDlmZjcuanBn.jpg);background-repeat:no-repeat; background-size:cover; background-attachment:fixed; background-position:center center;">
				<div style="width: 90%;height: 500px;margin: 70px 70px;float: left;">
					<div style="width: 100%;height: 83px;">
						<div style="margin: 0 auto;width: 96px;height: 83px;">
							<div style="width: 96px;height: 36px;padding: 0 0 5px 0;text-align: center;line-height: 36px;font-size: 22px;">
								<span style="color: white;">关于我们</span>
							</div>
							<div style="width: 96px;height: 42px;text-align: center;line-height: 20px;color: #999;">
								<span style="color: white;">About</span>
							</div>
						</div>
					</div>
					<div style="width: 100%-20px;height: 280px;margin-top: 117px;padding: 10px 10px 10px 10px;overflow: hidden;background: white;">
						<div style="width: 45%;height: 280px;float: left;">
							<img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvOGJiMjZlNDUwZjY0NjBkNWNiMmE4NTg4YjBhYTY5ZmMtNTQweDI4MC5qcGc_p_p100_p_3D.jpg" alt="" />
						</div>
						<div style="width: 45%;height: 280px;float: left;margin-left: 50px;">
							<div style="width: 100%;height: 140px;margin-top: 50px;line-height: 30px;font-size: 14px;color: #808080;">
								<span>
茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。饮茶始于中国。
							</span>
							</div>
							<a href="#">
								<div style="width: 100px;height: 40px;background: #90af6b;text-align: center;line-height: 40px;">
									<a href="#/about" style="color: #fff;">了解更多</a>
								</div>
							</a>

						</div>
					</div>
				</div>
			</div>
			<div style="width: 100%;height: 100px;padding-top: 50px;background: white;">
					<div style="width: 1190px;height: 70px;margin: 0 auto;overflow: hidden;">
						<div style="width: 160px;height: 60px;float: left;padding: 0 15px;">
							<img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjMwZTdjYTlmNmIwNjRhYjM2NzIzZGZiYTViMzU2MjQtMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="" />
						</div>
						<div style="width: 160px;height: 60px;float: left;padding: 0 15px;">
							<img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYzU0OGUxMmQwM2FhMTE4MmE1ZmM5YWY4YjBlZDNhODMtMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="" />
						</div>
						<div style="width: 160px;height: 60px;float: left;padding: 0 15px;">
							<img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvZmE3YjM1YzA3Mzg5Mjg4ODVjOTY3NDRjYTNkZjAzNDQtMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="" />
						</div>
						<div style="width: 160px;height: 60px;float: left;padding: 0 15px;">
							<img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMTdlYWNiYTc0ZmU4MDZkMTk1NGI5MWY0MTdhMzUzZDgtMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="" />
						</div>
						<div style="width: 160px;height: 60px;float: left;padding: 0 15px;">
							<img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMDFjMDE4YjAwYzA0MWMwYmQ3MTIzYTkzZjVhMTkyOTgtMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="" />
						</div>
						<div style="width: 160px;height: 60px;float: left;padding: 0 15px;">
							<img style="width: 100%;height: 100%;" src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMWQyNGZhYmI0ZWRiODk1MGUxMmI3MzkxOGU3OTY1ZDktMTUweDYwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		<div>
			<my_footer></my_footer>
		</div>
	</div>
</template>

<script>
	import my_nav from '../component/my_nav.vue'
	import my_footer from '../component/my_footer.vue'
	export default{
		data(){
			return{

			}
		},
		components:{
			my_nav,
			my_footer
		},
		mounted(){
	 		var swiper = new Swiper('.swiper-container', {
		      spaceBetween: 30,
		      effect: 'fade',
		      loop: true, // 循环模式选项
			  speed: 300, //动画的执行事件
			  autoplay: {
				delay: 3000
			  },
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		      // navigation: {
		      //   nextEl: '.swiper-button-next',
		      //   prevEl: '.swiper-button-prev',
		      // },
		    });
		}
	}
</script>

<style>
	 html, body {
      position: relative;
      height: 100%;
    }
    body {
      /*background: #eee;*/
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 520px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
    }
    .swiper-slide img{
    	width: 100%;
    	height: 100%;
    }
    .swiper-pagination-white span{
    	width: 50px;
    	height: 5px;
    	background: #85BF41;
    	border-radius: 0;
    }
    .teaimg:hover{transform: scale(1.1);transition: 0.3s;}
    /*.cy:hover{color: #519F10;border-bottom: 1px solid #519F10;transition: 0.4s;}*/
    .lean{position: relative;}
    .lean:after{transition: 0.3s;content: "";width: 0;height:1px;position: absolute;bottom: 0;left: 0;background: #519F10;}
 	.lean:hover .cy:after{width: 100%;}
</style>