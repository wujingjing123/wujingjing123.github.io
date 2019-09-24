<template>
	<div style="width: 100%;">
		<div>
			<my_nav></my_nav>
		</div>
		<div class="new" style="height: 140px;margin-bottom: 100px;padding-top: 60px;">
			<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS85MjBhZGMwYzUzZTg4ZDYxNjQ5YTQzNjAyZjkxZDQ3NC5qcGc_p_p100_p_3D.jpg" alt="">
		</div>
		<div style="width: 90%;min-height:1800px;margin: 0 auto;">
			<ul class="xw" style="width: 15%;height: 160px;float: left;border-top: 2px solid #90AF6B;margin-right: 5%;">
				<li @click="type=item" v-for="(item,index) in type_name" :key="index">{{item | lee}}</li>
			</ul>
			<div style="width: 80%;float: left;">
				<div v-for="(i,index) in arr">
					<div v-show="type==i.list" v-for="(item,index) in i.text" style="height: 180px;border-bottom: 1px solid #ccc;">
						<div style="width: 60%;float: left;margin-right: 10%;">
							<a href="#/read">
								<div style="font-size: 18px;color: #000;padding-top: 20px;margin-bottom: 10px;">{{item.title}}</div>
							</a>
							<p style="color: #999999;font-size: 14px;margin-bottom: 30px;">{{item.center}}</p>
							<a href="#/read">
								<div style="color: #90AF6B;font-size: 14px;">{{item.read}}</div>
							</a>
						</div>
						<a href="#/read">
							<div class="imgbox" style="width: 30%;height:130px;float: left;padding-top: 20px;overflow: hidden;">
								<img class="img" :src="item.img_url" alt="" style="width: 200px;height: 130px;">
							</div>
						</a>
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
		filters:{
			lee:(a,b,c)=>{
				console.log(a,b,c);
				return a;
			}
		},
		components:{
			my_nav,
			my_footer
		},
		data(){
			return{
				type:'全部新闻',
				type_name:['全部新闻','新茶动态','产品新闻'],
				arr:[
					{
						list:'全部新闻',
						text:[
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS81ZDdlNzRkMjc1MTMzYzFmZmRhNWRlMWZjYWI0YWRlNy0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'2019茶叶展-第十六届上海国际茶业交易春季博览会',
								center:'野生种遍见于中国长江以南各省的山区，为小乔木状，叶片较大，常超过10厘米长，长期以来，经广泛栽培，毛被及叶型变化很大。茶叶可作饮品，含有多种有益成分，并有保健功效。',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS83NDAyZmFlMWJhYTc5ODE4MDgxZjAzYjY3ZTBlNTRkMi0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'喝什么茶叶好?春天适合喝什么茶?喝白茶喝什么茶叶好?',
								center:'2017年10月27日，世界卫生组织国际癌症研究机构公布的致癌物清单初步整理参考，茶在3类致癌物清单中。属于对人类致癌性可疑，尚无充分的人体或动物数据的物质类。',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC82NzM1MTJkYjY0YzY3ZTQzN2MyMzE0YzJjNzcyNGYzZi0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'喝茶的好处有哪些 6大好处告诉你',
								center:'中国历史上有很长的饮茶纪录，已经无法确切地查明到底是在什么年代了，但是大致的时代是有说法的。并且也可以找到证据显示，确实在世界上的很多地方饮茶的习惯是从中国传过去的。所以，很多人认为饮茶就是中国人首创...',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS8wZDlhYzFhYTM5Y2ZmYjNjOTg0MTQ2OThjNmZkZDBmNC0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'喝茶也会有危险——茶这样喝真的很危险',
								center:'但是也有人能够找到证据指出，饮茶的习惯不仅仅是中国人发明的，在世界上的其他一些地方也是饮茶的发明地，例如印度、非洲等。1823年，一个英国侵略军的少校在印度发现了野生的大茶树，从而有人开始认定茶的发源...',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC80ZGYwMWE3NGZhMGFlYWI4MjJiYzUxOGFjYzZlYWE5Ni0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'喝什么茶好?如何正确喝茶?',
								center:'中国饮茶起源众说纷纭：追溯中国人饮茶的起源，有的认为起于上古，有的认为起于周，起于秦汉、三国、南北朝、唐代的说法也都有，造成众说纷纭的主要原因是因唐代以前无“茶”字，而只有“荼”字的记载，直到茶经的作...',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9iNzQ1ZThkYTQ1NTQ4MjJhYmMyM2EyYTU0ZDY0MmQzYS0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'喝茶养生好处多 但是喝错茶竟会致丧命',
								center:'唐．陆羽《茶经》：“茶之为饮，发乎神农氏。”，在中国的文化发展史上，往往是把一切与农业、与植物相关的事物起源最终都归结于神农氏。而中国饮茶起源于神农的说法也因民间传说而衍生出不同的观点。有人认为茶是神...',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS8yZmVkNDQ2MDY0MjQ3YWZlYjhhOTRmZDQ0ZGIwNzk3OS0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'服用“阿司匹林”尽量少喝茶',
								center:'晋．常璩《华阳国志．巴志》：“周武王伐纣，实得巴蜀之师，......茶蜜......皆纳贡之。”这一记载表明在周朝的武王伐纣时，巴国就已经以茶与其它珍贵产品纳贡与周武王了。《华阳国志》中还记载，那时并...',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS8xMjVmYzY1OThhYTQ2YWVjYmQ5ZjU0MDNjOTBiMzc4Ny0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'碧螺春茶叶喝第几泡才是最好喝的呢?',
								center:'中国饮茶起于六朝的说法，有人认为起于“孙皓以茶代酒”，有人认为系“王肃茗饮”而始，日本、印度则流传饮茶系起于“达摩禅定”的说法。然而秦汉说具有史料证据确凿可考，因而削弱了六朝说的正确性。',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC80NWEyYmVlMTVmMTkxNzQ5NDY5MjExMGIyM2RhZGJkNS0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'饮用碧螺春茶的几个注意事项',
								center:'市卫计委表示，今年，北京将按照市委十六次全会部署的原则，启动医疗服务价格改革。据悉，改革的总体原则将是“...',
								read:'阅读正文 →'
							},
						]
					},
					{
						list:'新茶动态',
						text:[
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS81ZDdlNzRkMjc1MTMzYzFmZmRhNWRlMWZjYWI0YWRlNy0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'2019茶叶展-第十六届上海国际茶业交易春季博览会',
								center:'野生种遍见于中国长江以南各省的山区，为小乔木状，叶片较大，常超过10厘米长，长期以来，经广泛栽培，毛被及叶型变化很大。茶叶可作饮品，含有多种有益成分，并有保健功效。',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS8wZDlhYzFhYTM5Y2ZmYjNjOTg0MTQ2OThjNmZkZDBmNC0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'喝茶也会有危险——茶这样喝真的很危险',
								center:'但是也有人能够找到证据指出，饮茶的习惯不仅仅是中国人发明的，在世界上的其他一些地方也是饮茶的发明地，例如印度、非洲等。1823年，一个英国侵略军的少校在印度发现了野生的大茶树，从而有人开始认定茶的发源...',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9iNzQ1ZThkYTQ1NTQ4MjJhYmMyM2EyYTU0ZDY0MmQzYS0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'喝茶养生好处多 但是喝错茶竟会致丧命',
								center:'唐．陆羽《茶经》：“茶之为饮，发乎神农氏。”，在中国的文化发展史上，往往是把一切与农业、与植物相关的事物起源最终都归结于神农氏。而中国饮茶起源于神农的说法也因民间传说而衍生出不同的观点。有人认为茶是神...',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS8yZmVkNDQ2MDY0MjQ3YWZlYjhhOTRmZDQ0ZGIwNzk3OS0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'服用“阿司匹林”尽量少喝茶',
								center:'晋．常璩《华阳国志．巴志》：“周武王伐纣，实得巴蜀之师，......茶蜜......皆纳贡之。”这一记载表明在周朝的武王伐纣时，巴国就已经以茶与其它珍贵产品纳贡与周武王了。《华阳国志》中还记载，那时并...',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS8xMjVmYzY1OThhYTQ2YWVjYmQ5ZjU0MDNjOTBiMzc4Ny0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'碧螺春茶叶喝第几泡才是最好喝的呢?',
								center:'中国饮茶起于六朝的说法，有人认为起于“孙皓以茶代酒”，有人认为系“王肃茗饮”而始，日本、印度则流传饮茶系起于“达摩禅定”的说法。然而秦汉说具有史料证据确凿可考，因而削弱了六朝说的正确性。',
								read:'阅读正文 →'
							},
						]
					},
					{
						list:'产品新闻',
						text:[
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS83NDAyZmFlMWJhYTc5ODE4MDgxZjAzYjY3ZTBlNTRkMi0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'喝什么茶叶好?春天适合喝什么茶?喝白茶喝什么茶叶好?',
								center:'2017年10月27日，世界卫生组织国际癌症研究机构公布的致癌物清单初步整理参考，茶在3类致癌物清单中。属于对人类致癌性可疑，尚无充分的人体或动物数据的物质类。',
								read:'阅读正文 →'
							},
							{
								img_url:'https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC80ZGYwMWE3NGZhMGFlYWI4MjJiYzUxOGFjYzZlYWE5Ni0yMDB4MTMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
								title:'喝什么茶好?如何正确喝茶?',
								center:'中国饮茶起源众说纷纭：追溯中国人饮茶的起源，有的认为起于上古，有的认为起于周，起于秦汉、三国、南北朝、唐代的说法也都有，造成众说纷纭的主要原因是因唐代以前无“茶”字，而只有“荼”字的记载，直到茶经的作...',
								read:'阅读正文 →'
							},
						]
					}
				]
			}
		}
	}
</script>

<style>
	.new img{width: 100%;height: 100%;}
	.xw li{height: 34px;border-bottom: 1px solid #ccc;line-height: 34px;padding-left: 20px;}
	.xw li:nth-child(1){padding-top: 30px;}
	.xw li:nth-child(3){border-bottom:none;}
	.xw li:hover{color: #90AF6B;}
	.imgbox img{width: 100%;height: 100%;}
	.imgbox:hover .img{transform: scale(1.1);}
	/*.imgbox img:hover{transform: scale(0);}*/
	.img{transition: 0.3s;transform: scale(1);}
</style>