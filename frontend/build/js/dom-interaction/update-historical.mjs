export function updateHistorica(data) {
    const array = pacerInformation(data);
    const cleanData = removeDuplicates(array);
    createHumidityChart('container', cleanData, 14000);
}
function pacerInformation(data) {
    let porcentaje;
    let time;
    const arry = [];
    for (let i = 0; i < data.length; i++) {
        porcentaje = data[i].porcentaje;
        time = new Date(data[i].timestamp).getTime();
        arry.push([time, porcentaje]);
    }
    return arry;
}
function removeDuplicates(data) {
    const map = new Map(data.map((pt) => [pt[0], pt]));
    return Array.from(map.values()).sort((a, b) => a[0] - b[0]);
}
function createHumidityChart(containerId, data, tickIntervalMs) {
    const maxLabels = 15;
    const labelStep = Math.ceil(data.length / maxLabels);
    Highcharts.chart(containerId, {
        chart: { type: 'spline', zoomType: 'x' },
        title: { text: '' },
        xAxis: {
            type: 'datetime',
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%H:%M:%S', this.value);
                },
                rotation: -45,
                align: 'right',
                step: labelStep,
                reserveSpace: true,
                y: 17,
            },
            tickInterval: tickIntervalMs,
            tickPositioner: function () {
                const pos = [], min = this.min, max = this.max;
                for (let t = min; t <= max; t += tickIntervalMs) {
                    pos.push(t);
                }
                return pos;
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
    });
}
