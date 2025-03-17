"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false
});

const getLast12Months = () => {
    const months = [];
    const date = new Date();

    // Move to the previous month
    date.setMonth(date.getMonth() - 1);

    for (let i = 0; i < 12; i++) {
        const month = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();
        months.unshift(`${month} ${year}`);
        date.setMonth(date.getMonth() - 1);
    }

    return months;
};

export default function MonthlySalesChart() {
    const months = getLast12Months();
    const options: ApexOptions = {
        colors: ["#465fff"],
        chart: {
            fontFamily: "Outfit, sans-serif",
            type: "bar",
            height: 180,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "39%",
                borderRadius: 5,
                borderRadiusApplication: "end"
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 4,
            colors: ["transparent"]
        },
        xaxis: {
            categories: months,
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: "left",
            fontFamily: "Outfit"
        },
        yaxis: {
            title: {
                text: undefined
            }
        },
        grid: {
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        fill: {
            opacity: 1
        },

        tooltip: {
            x: {
                show: false
            },
            y: {
                formatter: (val: number) =>
                    `$${new Intl.NumberFormat("en-US").format(val)}`
            }
        }
    };
    const series = [
        {
            name: "Sales",
            data: [
                168242, 385542, 206421, 224298, 175387, 198655, 235391, 123510,
                265435, 365590, 282350, 116432
            ]
        }
    ];

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Monthly Sales Last 12 Months
                </h3>
            </div>

            <div className="custom-scrollbar max-w-full overflow-x-auto">
                <div className="-ml-5 min-w-[650px] pl-2 xl:min-w-full">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="bar"
                        height={180}
                    />
                </div>
            </div>
        </div>
    );
}
