<template>
    <div class="bg-white rounded-[0.3rem] shadow-boxCardShadow text-center mb-6">
        <div class="border-b-[1px] border-0 border-[#eef2f7] px-6 py-[18px] gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TableSearch />
                    <TableSelect />
                    <TableDatepicker />
                </div>
            </div>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full table-auto border-0 text-nowrap">
                <thead class="bg-[#fbfbfd]">
                    <tr>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] ps-6 py-3 pr-2 text-[13px] text-gray800custom text-start font-semibold">
                            Order ID </th>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                            Product</th>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                            Total</th>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                            Order Date</th>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                            Payment Status</th>
                        <th
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                            Transaction Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] ps-6 py-3 px-2 text-[13px] text-gray800custom text-start">
                            #BM9708</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            Tip</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            $176.41</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            August 5, 2023
                        </td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            <span
                                class="text-green800 border border-bogreen800 leading-none text-[11px] font-bold px-1.5 py-[5px] rounded-[0.3rem]">Completed</span>
                        </td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            <span
                                class="leading-none bg-[#e8f5fd] text-[#67baf1] text-[11px] font-bold p-1.5 rounded-[0.3rem] inline-flex items-center gap-1.5">
                                <IconChecks width="11px" height="11" />Pending
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] ps-6 py-3 px-2 text-[13px] text-gray800custom text-start">
                            #BM9708</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            Tip</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            $176.41</td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            August 5, 2023
                        </td>
                        <td class="border-0 border-b-[1px] py-3 px-2 text-[13px] text-gray800custom text-start"><span
                                class="text-red800 border border-bored800 leading-none text-[11px] font-bold px-1.5 py-[5px] rounded-[0.3rem]">Failed</span>
                        </td>
                        <td
                            class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                            <span
                                class="leading-none bg-[#e8f5fd] text-[#67baf1] text-[11px] font-bold p-1.5 rounded-[0.3rem] inline-flex items-center gap-1.5">
                                <IconChecks width="11px" height="11" />Pending
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="border-0 px-6 py-[18px] gap-6 flex items-center justify-end">
            <nav aria-label="Page navigation example">
                <ul class="flex items-center -space-x-px text-base">
                    <li>
                        <router-link to=""
                            class="pointer-events-none flex items-center justify-center px-3 py-[9.5px] text-gray500custom bg-white border rounded-l-[0.3rem] border-borderLight hover:bg-gray-100 hover:text-gray-700">
                            <IconChevronsLeft width="13" height="13" />
                        </router-link>
                    </li>
                    <li>
                        <router-link to=""
                            class="flex items-center justify-center px-3 py-[9.5px] text-gray800custom text-[13px] leading-none ml-[-1px] bg-white border border-borderLight hover:bg-[#f6f7fb] hover:text-indigo600">1</router-link>
                    </li>
                    <li>
                        <router-link to="" aria-current="page"
                            class="z-10 flex items-center justify-center px-3 py-[9.5px] leading-none text-[13px] text-white border border-indigo600 bg-indigo600">2</router-link>
                    </li>
                    <li>
                        <router-link to=""
                            class="flex items-center justify-center px-3 py-[9.5px] text-gray800custom text-[13px] leading-none mr-[-1px] bg-white border border-borderLight hover:bg-[#f6f7fb] hover:text-indigo600">3</router-link>
                    </li>
                    <li>
                        <router-link to=""
                            class="flex items-center justify-center px-3 py-[9.5px] text-gray800custom bg-white border rounded-r-[0.3rem] border-borderLight hover:bg-[#f6f7fb] hover:text-indigo600">
                            <IconChevronsRight width="13" height="13" />
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>


<script setup lang="ts">
import { IconChecks, IconChevronsRight, IconChevronsLeft } from '@tabler/icons-vue'

import TableSearch from '../components/TableSearch.vue'
import TableSelect from '../components/TableSelect.vue'
import TableDatepicker from '../components/TableDatepicker.vue'
</script>