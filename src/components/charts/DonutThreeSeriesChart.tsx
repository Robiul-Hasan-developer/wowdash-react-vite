import type { ApexOptions } from "apexcharts";
import Chart from 'react-apexcharts';

interface DonutThreeSeriesChartProps {
    onChartHeight: number;
    chartSeries: number[];
    chartColors: string[];
}

const DonutThreeSeriesChart = ({ onChartHeight, chartSeries, chartColors }: DonutThreeSeriesChartProps) => {
    const chartOptions: ApexOptions = {
        series: chartSeries,
        colors: chartColors,
        labels: ['Active', 'New', 'Total'],
        legend: {
            show: false
        },
        chart: {
            type: 'donut',
            height: onChartHeight,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            width: 0
        },
        dataLabels: {
            enabled: false
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    };

    return (
        <Chart
            options={chartOptions}
            series={chartOptions.series}
            type="donut"
            height={onChartHeight}
        />
    );
};

export default DonutThreeSeriesChart;
