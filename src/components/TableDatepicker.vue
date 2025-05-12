<template>
    <div>
        <div class="flex items-stretch overflow-hidden w-full relative">
            <Flatpickr v-model="dateRange" :config="config"
                class="w-full px-3 py-2 text-[13px] text-gray800custom rounded-[0.3rem] border border-borderGray focus:outline-none rounded-r-none"
                placeholder="Select date range" />
            <span
                class="flex items-center justify-center px-3 bg-indigo600 border-l border-primary text-white rounded-[0.3rem] rounded-l-none ml-[-1px]">
                <IconCalendar width="15px" height="15" />
            </span>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { IconCalendar } from '@tabler/icons-vue';
import Flatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
const dateRange = ref(null);
const config = {
    mode: 'range',
    dateFormat: 'd M',
    defaultDate: ['01 May', '31 May'],
};
</script>