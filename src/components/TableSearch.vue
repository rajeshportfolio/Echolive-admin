<template>
    <div class="relative w-full">
        <input type="text" placeholder="Search Order"
            class="w-full pl-9 pr-3 py-2 text-[13px] text-gray800custom rounded-[0.3rem] border border-borderGray focus:outline-none" />
        <IconSearch width="13px" height="13px"
            class="ti ti-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray800custom" />
    </div>
</template>

<script setup>
import { IconSearch } from '@tabler/icons-vue';
</script>