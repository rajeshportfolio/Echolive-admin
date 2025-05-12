<template>
    <div class="bg-white rounded-[0.3rem] shadow-boxCardShadow text-center mb-6">
        <div class="border-b-[1px] border-0 border-[#eef2f7] px-6 py-[18px] gap-6 text-start">
            <h4 class="font-semibold text-gray800custom leading-none text-base">Posts
            </h4>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full table-auto border-0 text-nowrap">
                <thead class="bg-[#fbfbfd]">
                    <tr>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] ps-6 py-3 pr-2 text-[13px] text-gray800custom text-start font-semibold">
                            ID</th>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                            Title</th>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                            Date</th>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                            Views</th>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                            Likes</th>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                            Status</th>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 pr-6 text-[13px] text-gray800custom text-end font-semibold">
                            Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] ps-6 py-3 px-2 text-[13px] text-gray800custom text-start">
                            ID3524</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            Summer is here!</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            March 13, 2025</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            1,234</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            56</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            <span
                                class="text-white bg-green800 leading-none text-[10px] font-bold px-2.5 py-1.5 rounded-[0.3rem]">Public</span>
                        </td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 pr-6 text-[13px] text-gray800custom text-end">
                            <div class="flex justify-end items-center gap-1.5">
                                <router-link to=""
                                    class="leading-none bg-[#e3e7ff] text-indigo600 tex rounded-full inline-flex items-center justify-center w-8 h-8 hover:bg-indigo600 hover:text-white transition">
                                    <IconEye width="13" height="13" />
                                </router-link>
                                <router-link to=""
                                    class="leading-none text-green800 bg-bggreen500 tex rounded-full inline-flex items-center justify-center w-8 h-8 hover:bg-green800 hover:text-white transition">
                                    <IconEdit width="16" height="16" />
                                </router-link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] ps-6 py-3 px-2 text-[13px] text-gray800custom text-start">
                            ID3524</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            Summer is here!</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            March 13, 2025</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            1,234</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            56</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            <span
                                class="text-white bg-orange800 leading-none text-[10px] font-bold px-2.5 py-1.5 rounded-[0.3rem]">Public</span>
                        </td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 pr-6 text-[13px] text-gray800custom text-end">
                            <div class="flex justify-end items-center gap-1.5">
                                <router-link to=""
                                    class="leading-none bg-[#e3e7ff] text-indigo600 tex rounded-full inline-flex items-center justify-center w-8 h-8 hover:bg-indigo600 hover:text-white transition">
                                    <IconEye width="13" height="13" />
                                </router-link>
                                <router-link to=""
                                    class="leading-none text-green800 bg-bggreen500 tex rounded-full inline-flex items-center justify-center w-8 h-8 hover:bg-green800 hover:text-white transition">
                                    <IconEdit width="16" height="16" />
                                </router-link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconEye, IconEdit } from '@tabler/icons-vue'
</script>