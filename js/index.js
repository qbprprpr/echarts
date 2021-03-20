var yearData = [
	{
		year: '2020',
		data: [
			[24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
			[40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
		]
	},
	{
		year: '2021',
		data: [
			[123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
			[143, 131, 165, 123, 178, 21, 82, 64, 34, 60, 19, 34]
		]
	}
];

// 柱状图
(function () {
	let myChart = echarts.init(document.querySelector(".bar .chart"))
	// 指定配置和数据
	let option = {
		color: ["#2f89cf"],
		tooltip: {
			trigger: "axis",
			axisPointer: {
				// 坐标轴指示器，坐标轴触发有效
				type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: "0%",
			top: "10px",
			right: "0%",
			bottom: "4%",
			containLabel: true
		},
		xAxis: [
			{
				type: "category",
				data: [
					"旅游行业",
					"教育培训",
					"游戏行业",
					"医疗行业",
					"电商行业",
					"社交行业",
					"金融行业"
				],
				axisTick: {
					alignWithLabel: true
				},
				axisLabel: {
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: "12"
					}
				},
				axisLine: {
					show: false
				}
			}
		],
		yAxis: [
			{
				type: "value",
				axisLabel: {
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: "12"
					}
				},
				axisLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)"
						// width: 1,
						// type: "solid"
					}
				},
				splitLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)"
					}
				}
			}
		],
		series: [
			{
				name: "直接访问",
				type: "bar",
				barWidth: "35%",
				data: [200, 300, 300, 900, 1500, 1200, 600],
				itemStyle: {
					barBorderRadius: 5
				}
			}
		]
	};
	myChart.setOption(option)
	// 让图表跟随屏幕自动适应
	window.addEventListener("resize", function () {
		myChart.resize()
	})
})();

// 柱状图2
(function () {
	let myColor = ["#1089E7", "#F57474", "#56D0E3", "F8B448", "#8B78F6"];
	let myChart = echarts.init(document.querySelector(".bar2 .chart"));
	let option = {
		title: {
			show: false
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			show: false
		},
		grid: {
			top: '10%',
			left: '20%',
			bottom: '10%',
			// 偏移距离是否考虑标签
			containLabel: false
		},
		xAxis: {
			show: false
		},
		yAxis: [
			{
				type: 'category',
				data: ['Node', 'Vue', 'Jascript', 'CSS', 'HTML'],
				// y轴的线
				axisLine: {
					show: false
				},
				// y轴的刻度
				axisTick: {
					show: false
				},
				// y轴刻度标签
				axisLabel: {
					color: "#fff"
				},
				// 是否翻转数据
				inverse: false
			},
			{
				type: 'category',
				data: ['702', '350', '610', '793', '664'],
				// y轴的线
				axisLine: {
					show: false
				},
				// y轴的刻度
				axisTick: {
					show: false
				},
				// y轴刻度标签
				axisLabel: {
					textStyle: {
						fontSize: 12,
						color: "#fff"
					}
				},
				inverse: true
			}
		],
		series: [
			// 第一组柱子的配置
			{
				name: '条',
				type: 'bar',
				// 柱子设置为圆角
				itemStyle: {
					normal: {
						barBorderRadius: 20,
						// 此时的color可以修改柱子的颜色
						color: function (params) {
							return myColor[params.dataIndex];
						}
					}
				},
				// 柱子之间的距离
				barCategoryGap: 50,
				// 柱子的宽度,粗细程度
				barWidth: 10,
				// 显示柱子内的文字
				label: {
					show: true,
					position: "inside",
					formatter: "{c}%"
				},
				yAxisIndex: 0,
				data: [70, 34, 60, 78, 69]
			},
			// 第二组柱子的配置
			{
				name: '框',
				type: 'bar',
				// 柱子之间的距离
				barCategoryGap: 50,
				// 柱子的宽度,粗细程度
				barWidth: 15,
				itemStyle: {
					color: "none",
					borderColor: "#00c1de",
					borderWidth: 3,
					barBorderRadius: 15
				},
				yAxisIndex: 1,
				data: [100, 100, 100, 100, 100]
			}
		]
	};
	myChart.setOption(option);
	// 让图表跟随屏幕自动适应
	window.addEventListener("resize", function () {
		myChart.resize()
	})
})();

// 折线图1
(function () {
	let myChart = echarts.init(document.querySelector(".line .chart"))
	let option = {
		// 修改折线颜色
		color: ['#00f2f1', '#ed3f35'],
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			// 如果series 对象有name 值， 则 legend可以不添加data
			// data: ['新增粉丝', '新增游客'],
			// 修改 图例组件 文字颜色
			textStyle: {
				color: '#4c9bfd'
			},
			right: '10%'
		},
		// 设置网格样式
		grid: {
			top: '20%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			// 展示边框
			show: true,
			// 边框颜色
			borderColor: '#012f4a',
			// 包括刻度文字在内
			containLabel: true
		},
		// toolbox: {
		//     feature: {
		//         saveAsImage: {}
		//     }
		// },
		xAxis: {
			type: 'category',
			// x轴刻度线
			axisTick: {
				show: false
			},
			// 坐标轴标签
			axisLabel: {
				color: '#4c9bfd'
			},
			axisLine: {
				show: false
			},
			// 去除轴内间距
			boundaryGap: false,
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		},
		yAxis: {
			type: 'value',
			// x轴刻度线
			axisTick: {
				show: false
			},
			// 坐标轴标签
			axisLabel: {
				color: '#4c9bfd'
			},
			axisLine: {
				show: false
			},
			splitLine: {
				// 分割线样式
				lineStyle: {
					color: '#012f4a'
				}
			}
		},
		series: [
			{
				name: '新增粉丝',
				type: 'line',
				stack: '总量',
				smooth: true,
				data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
			},
			{
				name: '新增游客',
				type: 'line',
				stack: '总量',
				smooth: true,
				data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
			},
		]
	};
	myChart.setOption(option);
	// 让图表跟随屏幕自动适应
	window.addEventListener("resize", function () {
		myChart.resize()
	})

	// 点击年份切换数据
	let aLine = document.querySelectorAll(".line a");
	for (let i = 0; i < aLine.length; i++) {
		aLine[i].addEventListener("click", function () {
			console.log(this.innerHTML)
			let options = option;
			yearData.forEach((item, index) => {
				if (item.year === this.innerHTML) {
					options.series[0].data = item.data[0];
					options.series[1].data = item.data[1];
					myChart.setOption(options);
				}
			})
		})
	}
})();

// 折线图2
(function () {
	let myChart = echarts.init(document.querySelector(".line2 .chart"))
	let option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#dddc6b'
				}
			}
		},
		legend: {
			top: '0%',
			textStyle: {
				color: 'rgba(255, 255, 255, .5)',
				fontSize: '12'
			}
		},
		grid: {
			left: '10',
			top: '30',
			right: '10',
			bottom: '10',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				axisLabel: {
					color: 'rgba(255, 255, 255, .5)',
					fontSize: 12
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255, 255, 255, .5)'
					}
				},
				data: ['01', '03', '05', '07', '09', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30']
			},
			{
				axisPointer: {
					show: false
				},
				axisLine: {
					show: false
				},
				position: 'bottom',
				offset: 20
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: 'rgba(255, 255, 255, .6)',
						fontSize: 12
					}
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255, 255, 255, .1)'
					}
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(255, 255, 255, .1)'
					}
				},
				axisTick: {
					show: false
				}
			}
		],
		series: [
			{
				name: '播放量',
				type: 'line',
				smooth: true,
				// 拐点
				symbol: 'circle',
				// 拐点大小
				symbolSize: 5,
				// 开始不显示拐点，鼠标经过显示
				showSymbol: false,
				// 单独修改当前线条样式
				lineStyle: {
					color: '#0184d5',
					width: 2
				},
				// 区域填充样式
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0,
							0,
							0,
							1,
							[
								{
									offset: 0,
									color: 'rgba(1, 132, 213, .4)'
								},
								{
									offset: 0.8,
									color: 'rgba(1, 132, 213, .1)'
								}
							],
							false
						),
						shadowColor: 'rgba(0, 0, 0, .1)'
					}
				},
				// 拐点设置样式
				itemStyle: {
					normal: {
						color: '#0184d5',
						borderColor: 'rgba(221, 220, 107, .1)',
						borderWidth: 12
					}
				},
				data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40]
			},
			{
				name: "转发量",
				type: "line",
				smooth: true,
				symbol: "circle",
				symbolSize: 5,
				showSymbol: false,
				lineStyle: {
					normal: {
						color: "#00d887",
						width: 2
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0,
							0,
							0,
							1,
							[
								{
									offset: 0,
									color: "rgba(0, 216, 135, 0.4)"
								},
								{
									offset: 0.8,
									color: "rgba(0, 216, 135, 0.1)"
								}
							],
							false
						),
						shadowColor: "rgba(0, 0, 0, 0.1)"
					}
				},
				itemStyle: {
					normal: {
						color: "#00d887",
						borderColor: "rgba(221, 220, 107, .1)",
						borderWidth: 12
					}
				},
				data: [
					50,
					30,
					50,
					60,
					10,
					50,
					30,
					50,
					60,
					40,
					60,
					40,
					80,
					30,
					50,
					60,
					10,
					50,
					30,
					70,
					20,
					50,
					10,
					40,
					50,
					30,
					70,
					20,
					50,
					10,
					40
				]
			}
		]
	};
	myChart.setOption(option);
	// 让图表跟随屏幕自动适应
	window.addEventListener("resize", function () {
		myChart.resize()
	})
})();

// 饼状图1
(function () {
	let myChart = echarts.init(document.querySelector(".pie .chart"))
	let option = {
		color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
		tooltip: {
			trigger: 'item'
		},
		legend: {
			bottom: '0%',
			itemWidth: 10,
			itemHeight: 10,
			textStyle: {
				color: 'rgba(255, 255, 255, 0.5)',
				fontSize: 12
			}
		},
		series: [
			{
				name: '访问来源',
				type: 'pie',
				// 饼图的位置调整
				center: ['50%', '35%'],
				// 内圆的半径 / 外圆半径
				radius: ['40%', '60%'],
				avoidLabelOverlap: false,
				// 图形上的文字
				label: {
					show: false,
					position: 'center'
				},
				// 连接文字和饼图的线
				labelLine: {
					show: false
				},
				data: [
					{ value: 1, name: '10岁以下' },
					{ value: 4, name: '20-29岁' },
					{ value: 2, name: '30-39岁' },
					{ value: 2, name: '40-49岁' },
					{ value: 1, name: '50岁以上' }
				]
			}
		]
	}
	myChart.setOption(option);
	// 让图表跟随屏幕自动适应
	window.addEventListener("resize", function () {
		myChart.resize()
	})
})();
