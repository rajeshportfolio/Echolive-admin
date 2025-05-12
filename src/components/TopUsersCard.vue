<template>
    <div v-for="user in topUsers" :key="user.name" class="bg-[#eef2f780] p-6 rounded-[0.4rem] flex items-center gap-3">
        <img :src="user.image" alt="User image" class="rounded-full object-cover mr-[6px] w-[80px] h-[80px]">
        <div class="text-left">
            <h4 class="text-[16.25px] font-medium text-gray800custom leading-none mb-2">{{ user.name }}</h4>
            <p class="text-gray500custom text-[0.8125rem] mb-4">@{{ user.username }}</p>
            <p class="text-sm flex items-center text-gray800custom gap-1">
                <IconStarFilled width="14" height="14" class="text-[#f9c45c]" />{{ user.revenue }} generated
            </p>
        </div>
    </div>
</template>


<script setup>
import {
    IconStarFilled
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

</script>