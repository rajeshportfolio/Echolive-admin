<template>
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
</template>


<script setup>
import { Icon } from '@iconify/vue'

const stats = [
  { title: 'Total Revenue', value: '687.3k', icon: 'solar:case-minimalistic-bold-duotone' },
  { title: 'Total Transactions', value: '9.62k', icon: 'solar:bill-list-bold-duotone' },
  { title: 'Number of Users', value: '12,490', icon: 'solar:wallet-money-bold-duotone' },
  { title: 'Number of Content Creators', value: '4,560', icon: 'solar:eye-bold-duotone' },
]
</script>