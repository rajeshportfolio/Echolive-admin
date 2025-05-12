<template>
    <div class="bg-white rounded-[0.3rem] shadow-boxCardShadow text-center mb-6">
        <div
            class="flex flex-wrap items-center justify-between border-b border-borderLight border-dashed px-6 py-[18px] gap-6">
            <h4 class="font-semibold text-gray800custom leading-none text-base mr-auto">User Signups</h4>
            <div class="flex gap-[6px]">
                <button
                    class="py-[6.5px] px-[12.5px] flex items-center justify-center text-[#313a46] text-xs bg-[#eef2f7] rounded-[0.25rem] border border-[#eef2f7] hover:bg-[#DCE0E4] hover:border-[#DCE0E4] transition">
                    All
                </button>
                <button
                    class="py-[6.5px] px-[12.5px] flex items-center justify-center text-[#313a46] text-xs bg-[#DCE0E4] rounded-[0.25rem] border border-[#DCE0E4] hover:bg-[#DCE0E4] hover:border-[#DCE0E4] transition">
                    1M
                </button>
                <button
                    class="py-[6.5px] px-[12.5px] flex items-center justify-center text-[#313a46] text-xs bg-[#eef2f7] rounded-[0.25rem] border border-[#eef2f7] hover:bg-[#DCE0E4] hover:border-[#DCE0E4] transition">
                    6M
                </button>
                <button
                    class="py-[6.5px] px-[12.5px] flex items-center justify-center text-[#313a46] text-xs bg-[#eef2f7] rounded-[0.25rem] border border-[#eef2f7] hover:bg-[#DCE0E4] hover:border-[#DCE0E4] transition">
                    1Y
                </button>
            </div>
        </div>
        <div class="pt-[6px] pb-6 px-6 overflow-x-auto">
            <apexchart height="380" width="100%" type="line" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'

const series = ref([
    {
        name: "Desktops",
        data: [30, 40, 35, 51, 49, 62, 69, 91, 126],
    },
])
const chartOptions = ref({
    chart: {
        id: "basic-line",
        toolbar: {
            show: true,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false
            }
        },
        zoom: {
            enabled: false,
        },
    },
    title: {
        text: 'Product Trends by Month',
        align: 'center',
        style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 900,
            color: '#9ba6b7',
        }
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'],
            opacity: 0.2,
        },
        borderColor: '#f1f3fa',
    },
    yaxis: {
        min: 20,
        max: 140,
        tickAmount: 6,
        labels: {
            formatter: (val) => `${val}`,
        },
        labels: {
            style: {
                colors: '#9ba6b7',
                fontSize: '11px',
                fontFamily: 'Inter, sans-serif',
            },
        },
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
            style: {
                colors: '#9ba6b7',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
            },
        },
    },
    stroke: {
        curve: 'straight',
        width: 4,
    },
    colors: ['rgb(255, 188, 0)'],
    responsive: [
        {
            breakpoint: 768,
            options: {
                chart: {
                    toolbar: {
                        show: true,
                        tools: {
                            download: false
                        }
                    }
                }
            }
        }
    ]
})
</script>