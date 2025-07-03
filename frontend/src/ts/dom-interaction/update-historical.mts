// @ts-nocheck
export function updateHistorica(cleanData: any) {
	createHumidityChart('container', cleanData, 14000)
}

declare const Highcharts: any

function createHumidityChart(
	containerId: string,
	data: [number, number],
	tickIntervalMs: number
) {
	const maxLabels = 15
	const labelStep = Math.ceil(data.length / maxLabels)

	Highcharts.chart(containerId, {
		chart: { type: 'spline', zoomType: 'x' },
		title: { text: '' },

		xAxis: {
			type: 'datetime',
			labels: {
				formatter: function () {
					return Highcharts.dateFormat('%H:%M:%S', this.value)
				},
				rotation: -45,
				align: 'right',
				step: labelStep,
				reserveSpace: true,
				y: 17,
			},
			tickInterval: tickIntervalMs,
			tickPositioner: function () {
				// @ts-ignore
				const pos = [],
					min = this.min,
					max = this.max
				for (let t = min; t <= max; t += tickIntervalMs) {
					pos.push(t)
				}
				return pos
			},
			title: { text: 'Hora (HH:mm:ss)' },
			startOnTick: false,
			endOnTick: false,
			tickPixelInterval: 80,
		},

		yAxis: {
			title: { text: 'Humedad (%)' },
			min: 0,
			max: 100,
		},

		tooltip: {
			headerFormat: '<b>{series.name}</b><br>',
			pointFormat: '{point.x:%H:%M:%S}: {point.y:.2f}%',
		},

		plotOptions: {
			series: {
				marker: { enabled: true, radius: 3, lineWidth: 1 },
			},
		},

		series: [
			{
				name: 'Parcela',
				data: data,
			},
		],

		credits: { enabled: false },
	})
}
