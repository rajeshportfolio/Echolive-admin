<template>
  <div class="page-content bg-[#fafdff] px-6">
    <div class="h-[70px] flex flex-row items-center">
      <div class="grow">
        <h4 class="font-semibold text-gray800custom text-lg leading-none">Dashboard</h4>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6  mb-6">
      <DashboardCard />
    </div>

    <UserChart />

    <div class="bg-white rounded-[0.3rem] shadow-boxCardShadow text-center mb-6">
      <div class="flex flex-wrap items-center justify-between border-b border-borderLight border-dashed px-6 py-[18px]">
        <h4 class="font-semibold text-gray800custom leading-none text-base mr-auto">Top Users (by revenue)</h4>
      </div>
      <div class="p-6 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
        <TopUsersCard/>
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
import {
  IconArrowRight
} from '@tabler/icons-vue'

import DashboardCard from '../components/DashboardCard.vue'
import UserChart from '../components/UserChart.vue'
import TopUsersCard from '../components/TopUsersCard.vue'
</script>
