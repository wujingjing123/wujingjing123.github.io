<template>
	<div style="width: 100%;">
		<div>
			<my_nav></my_nav>
		</div>
		<div class="lx" style="width: 100%;height: 140px;padding-top: 60px;">
			<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS81NjM0YjlkMWViYWQ3MGRjYWVmYzU0MzQxYTRjM2RhYS5qcGc_p_p100_p_3D.jpg" alt="">
		</div>
		<div style="width: 70%;height: 125px;margin: 0 auto;margin-bottom: 40px;">
			<p style="color: #808080;font-size: 14px;margin: 0 auto;padding-top: 80px;">中国历史上有很长的饮茶纪录，已经无法确切地查明到底是在什么年代了，但是大致的时代是有说法的。并且也可以找到证据显示，确实在世界上的很多地方饮茶的习惯是从中国传过去的。</p>
		</div>
		<div class="dr" style="width: 80%;height: 165px;margin: 0 auto;">
			<div style="width: 33%;height: 165px;float: left;border-right: 1px solid #ccc;text-align: center;">
				<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9mYzdmNmQ5NzgzM2NiOTlkOWJjZjU1ZDMyY2M2MWI0Ni04MHg4MC5qcGc_p_p100_p_3D.jpg" alt="">
				<p style="font-size: 20px;color: #333333;margin-top: 20px;margin-bottom: 10px;">邮箱</p>
				<p style="font-size: 14px;color: #BFBFBF;">info@email.com</p>
			</div>
			<div style="width: 33%;height: 165px;float: left;border-right: 1px solid #ccc;text-align: center;">
				<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9kNjhkMWVhYWNmODIyZDE4ZDE5MjYzYzdlMTljZjc1YS04MHg4MC5qcGc_p_p100_p_3D.jpg" alt="">
				<p style="font-size: 20px;color: #333333;margin-top: 20px;margin-bottom: 10px;">手机</p>
				<p style="font-size: 14px;color: #BFBFBF;">13725415481/010 6888 6888</p>
			</div>
			<div style="width: 33%;height: 165px;float: left;text-align: center;">
				<img src="https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cDovLzVjZGQzYWE1YzQ2ZWEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC82ZmQ5NDYwYjYzMzVmNTM2ZjUzNjQ1MWJiYmEyMDlkZC04MHg4MC5qcGc_p_p100_p_3D.jpg" alt="">
				<p style="font-size: 20px;color: #333333;margin-top: 20px;margin-bottom: 10px;">地址</p>
				<p style="font-size: 14px;color: #BFBFBF;">苏州市建外SOHO东区2号楼</p>
			</div>
		</div>
		<div style="width: 90%;height: 550px;margin: 0 auto;padding-top: 80px;">
			<ditu_api></ditu_api>
		</div>
		<div>
			<my_footer></my_footer>
		</div>
	</div>
</template>

<script>
	import my_nav from '../component/my_nav.vue'
	import ditu_api from '../component/ditu.vue'
	import my_footer from '../component/my_footer.vue'
	export default{
		components:{
			ditu_api,
			my_nav,
			my_footer
		}
	}
</script>

<style>
	.lx img{width: 100%;height: 100%;}
</style>