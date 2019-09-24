<template>
	<div id="vacNum">
		<div class="vacN_item">
			<p>{{y_num}}</p>
			<p>历史悠久</p>
		</div>
		<div class="vacN_item">
			<p>{{e_num}}</p>
			<p>冲泡温度</p>
		</div>
		<div class="vacN_item">
			<p>{{s_num}}</p>
			<p>碧螺春等级</p>
		</div>
		<div class="vacN_item">
			<p>{{si_num}}</p>
			<p>茶园面积</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				y_num: 0,
				e_num:0,
				s_num:0,
				si_num:0,
				timerone: null,
				timertwo: null,
				timerthree: null,
				timerfour: null,
				vac_arr: [{
						title: '历史悠久',
						num: 138
					},
					{
						title: '冲泡温度',
						num: 423
					},
					{
						title: '碧螺春等级',
						num: 89
					},
					{
						title: '茶园面积',
						num: 567
					},
				]
			}
		},	
		created() {
			this.timerone = setInterval(()=>{
				this.y_num++;
				if(this.y_num==this.vac_arr[0].num){
					clearInterval(this.timerone)
				}
			},15);
			this.timertwo = setInterval(()=>{
				this.e_num++;
				if(this.e_num==this.vac_arr[1].num){
					clearInterval(this.timertwo)
				}
			},7);
			this.timerthree = setInterval(()=>{
				this.s_num++;
				if(this.s_num==this.vac_arr[2].num){
					clearInterval(this.timerthree)
				}
			},15);
			this.timerfour = setInterval(()=>{
				this.si_num++;
				if(this.si_num==this.vac_arr[3].num){
					clearInterval(this.timerfour)
				}
			},5);
		},
		beforeDestroy() {
			if (this.timerone) { //如果定时器还在运行 或者直接关闭，不用判断
				clearInterval(this.timerone); //关闭
			}
			if (this.timertwo) { //如果定时器还在运行 或者直接关闭，不用判断
				clearInterval(this.timertwo); //关闭
			}
			if (this.timerthree) { //如果定时器还在运行 或者直接关闭，不用判断
				clearInterval(this.timerthree); //关闭
			}
			if (this.timerfour) { //如果定时器还在运行 或者直接关闭，不用判断
				clearInterval(this.timerfour); //关闭
			}
		}
	}
</script>

<style>
	#vacNum {
		overflow: hidden;
	}

	.vacN_item {
		float: left;
		width: 25%;
		text-align: center;
		border-left: 1px solid rgba(228, 228, 228, 1);
		box-sizing: border-box;
	}

	.vacN_item:nth-of-type(1) {
		border-left: none;
	}

	.vacN_item>p:nth-of-type(1) {
		font-size: 60px;
		font-family: courier new;
		color: #3c3c3c;
	}

	.vacN_item>p:nth-of-type(2) {
		color: rgb(147, 147, 150);
		font-size: 14px;
		text-align: center;
	}
</style>
