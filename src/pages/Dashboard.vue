<template>
  <div class="page-content bg-[#fafdff] px-6">
    <!-- Header -->
    <div class="h-[70px] flex flex-row items-center">
      <div class="grow">
        <h4 class="font-semibold text-gray800custom text-lg leading-none">Dashboard</h4>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6  mb-6">
      <div v-for="(stat, index) in stats" :key="index"
        class="bg-white rounded-[0.3rem] shadow-boxCardShadow p-6 text-center">
        <h5 class="text-gray500custom font-medium uppercase text-[13px] leading-none mb-2">{{ stat.title }}</h5>
        <div class="flex justify-center items-center gap-3 my-3 py-[6px]">
          <div class="w-[42px] h-[42px] shrink-0">
            <span class="bg-indigo600 text-white rounded-full flex items-center justify-center size-full">
              <Icon :icon="stat.icon" width="22" height="22" />
            </span>
          </div>
          <h3 class="text-[1.3928565625rem] font-bold text-gray800custom">{{ stat.value }}</h3>
        </div>
      </div>
    </div>

    <!-- Line Chart -->
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

    <!-- Top Users -->
    <div class="bg-white rounded-[0.3rem] shadow-boxCardShadow text-center mb-6">
      <div class="flex flex-wrap items-center justify-between border-b border-borderLight border-dashed px-6 py-[18px]">
        <h4 class="font-semibold text-gray800custom leading-none text-base mr-auto">Top Users (by revenue)</h4>
      </div>

      <div class="p-6 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
        <div v-for="user in topUsers" :key="user.name"
          class="bg-[#eef2f780] p-6 rounded-[0.4rem] flex items-center gap-3">
          <img :src="user.image" alt="User image" class="rounded-full object-cover mr-[6px] w-[80px] h-[80px]">
          <div class="text-left">
            <h4 class="text-[16.25px] font-medium text-gray800custom leading-none mb-2">{{ user.name }}</h4>
            <p class="text-gray500custom text-[0.8125rem] mb-4">@{{ user.username }}</p>
            <p class="text-sm flex items-center text-gray800custom gap-1">
              <IconStarFilled width="14" height="14" class="text-[#f9c45c]" />{{ user.revenue }} generated
            </p>
          </div>
        </div>
      </div>

      <div class="text-center pb-6">
        <router-link to=""
          class="text-[12.6px] rounded border border-bluelight bg-bluelight text-white px-[13px] py-[5px] inline-flex items-center justify-center hover:bg-[#6d35e7] transition">
          See All Users
          <IconArrowRight class="ml-[6px]" width="12" height="12" />
        </router-link>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import {
  IconStarFilled,
  IconArrowRight
} from '@tabler/icons-vue'

import img1 from '../assets/images/dr-one.jpg'
import img2 from '../assets/images/dr-four.jpg'
import img3 from '../assets/images/dr-two.jpg'
import img4 from '../assets/images/dr-five.jpg'
import img5 from '../assets/images/dr-three.jpg'
import img6 from '../assets/images/dr-six.jpg'

const topUsers = [
  { name: 'Bruno M', username: 'bruno', image: img1, revenue: '$45,670' },
  { name: 'Dr. David Wilson', username: 'bruno', image: img2, revenue: '$45,670' },
  { name: 'Dr. Robert Brown', username: 'bruno', image: img3, revenue: '$45,670' },
  { name: 'Dr. Michael Johnson', username: 'bruno', image: img4, revenue: '$45,670' },
  { name: 'Dr. Emily Davis', username: 'bruno', image: img5, revenue: '$45,670' },
  { name: 'Dr. Alice Smith', username: 'bruno', image: img6, revenue: '$45,670' },
]

const stats = [
  { title: 'Total Revenue', value: '687.3k', icon: 'solar:case-minimalistic-bold-duotone' },
  { title: 'Total Transactions', value: '9.62k', icon: 'solar:bill-list-bold-duotone' },
  { title: 'Number of Users', value: '12,490', icon: 'solar:wallet-money-bold-duotone' },
  { title: 'Number of Content Creators', value: '4,560', icon: 'solar:eye-bold-duotone' },
]

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
