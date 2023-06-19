// Bar Chart
document.addEventListener("DOMContentLoaded", function() {
    var barChartOptions = {
        series: [{
            data: [20000, 30000, 50000, 15000, 25000, 41000, 12000, 19000, 20000, 45000, 25000, 30000],
            name: "Income",
        }],
        chart: {
            type: "bar",
            height: 250,
            toolbar: {
                show: false,
            },
        },
        colors: [
            "#6d7ca8",
            "#5994b9",
            "#5272a2",
            "#4d6ad9",
            "#47419b",
        ],
        plotOptions: {
            bar: {
                distributed: true,
                borderRadius: 3,
                horizontal: false,
                columnWidth: "40%",
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1,
        },
        grid: {
            borderColor: "#656669",
            yaxis: {
                lines: {
                    show: true,
                },
            },
            xaxis: {
                lines: {
                    show: true,
                },
            },
        },
        legend: {
            labels: {
                colors: "#656669",
            },
            show: true,
            position: "top",
        },
        stroke: {
            colors: ["transparent"],
            show: true,
            width: 2
        },
        tooltip: {
            shared: true,
            intersect: false,
            theme: "dark",
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            title: {
                style: {
                    color: "#f5f7ff",
                },
            },
            axisBorder: {
                show: true,
                color: "#656669",
            },
            axisTicks: {
                show: true,
                color: "#55596e",
            },
            labels: {
                style: {
                    colors: "#656669",
                },
            },
        },
        yaxis: {
            title: {
                text: "Income",
                style: {
                    color: "#656669",
                },
            },
            axisBorder: {
                color: "#55596e",
                show: true,
            },
            axisTicks: {
                color: "#55596e",
                show: true,
            },
            labels: {
                style: {
                    colors: "#656669",
                },
            },
        }
    };

    var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
    barChart.render();

// Area Chart
    var areaChartOptions = {
        series: [{
            name: "Purchase Orders",
            data: [31, 40, 28, 51, 42, 109, 100, 40, 50, 70, 60, 30],
        }, {
            name: "Sales Orders",
            data: [11, 32, 45, 32, 34, 52, 41, 52, 36, 63, 50, 40],
        }],
        chart: {
            type: "area",
            height: 250,
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        colors: ["#819cc7", "#123c85"],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dataLabels: {
            enabled: false,
        },
        fill: {
            gradient: {
                opacityFrom: 0.4,
                opacityTo: 0.1,
                shadeIntensity: 1,
                stops: [0, 100],
                type: "vertical",
            },
            type: "gradient",
        },
        grid: {
            borderColor: "#656669",
            yaxis: {
                lines: {
                    show: true,
                },
            },
            xaxis: {
                lines: {
                    show: true,
                },
            },
        },
        legend: {
            labels: {
                colors: "#656669",
            },
            show: true,
            position: "top",
        },
        markers: {
            size: 6,
            strokeColors: "#ffffff",
            strokeWidth: 2,
            colors: ["#819cc7", "#123c85"],
            strokeOpacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 8,
            }
        },
        stroke: {
            colors: ["#819cc7", "#123c85"],
            show: true,
            width: 2
        },
        tooltip: {
            shared: true,
            intersect: false,
            theme: "dark",
        },
        xaxis: {
            axisBorder: {
                show: true,
                color: "#656669",
            },
            axisTicks: {
                show: true,
                color: "#55596e",
            },
            labels: {
                style: {
                    colors: "#656669",
                },
            },
        },
        yaxis: {
            axisBorder: {
                color: "#55596e",
                show: true,
            },
            axisTicks: {
                color: "#55596e",
                show: true,
            },
            labels: {
                style: {
                    colors: "#656669",
                },
            },
        }
    };

    var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
    areaChart.render();
});

