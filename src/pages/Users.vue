<template>
  <div class="page-content bg-[#fafdff] px-6 h-full">
    <div class="h-[70px] flex flex-row items-center">
      <div class="grow">
        <h4 class="font-semibold text-gray800custom text-lg leading-none">Users</h4>
      </div>
    </div>

    <div class="bg-white rounded-[0.3rem] shadow-boxCardShadow text-center mb-6">
      <div class="border-b-[1px] border-0 border-[#eef2f7] px-6 py-[18px] gap-6 text-start">
        <h4 class="font-semibold text-gray800custom leading-none text-base">Manage Users
        </h4>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full table-auto border-0 text-nowrap">
          <thead class="bg-[#fbfbfd]">
            <tr>
              <th
                class="border-0 border-b-[1px] border-[#eef2f7] ps-6 py-3 pr-2 text-[13px] text-gray800custom text-start font-semibold">
                User</th>
              <th
                class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                Username</th>
              <th
                class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                Status</th>
              <th
                class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                Revenue</th>
              <th
                class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start font-semibold">
                Registration Date</th>
              <th
                class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 pr-6 text-[13px] text-gray800custom text-end font-semibold">
                Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                class="border-0 border-b-[1px] border-[#eef2f7] ps-6 py-3 px-2 text-[13px] text-gray800custom text-start">
                <div class="flex items-center gap-2.5 min-w-0">
                  <img :src="heroimg" alt="Avatar" class="rounded-full object-cover shrink-0 h-8 w-8" />
                  <router-link to="" class="text-[#313a46] font-medium block truncate max-w-[120px] sm:max-w-full">
                    Emily Davis
                  </router-link>
                </div>
              </td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                @emily</td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                <span
                  class="text-green800 bg-bggreen500 leading-none text-[10px] font-bold px-2.5 py-[5px] rounded-[0.3rem]">Active</span>
              </td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                $532.75</td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                January 23, 2025</td>
              <td
                class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 pr-6 text-[13px] text-gray800custom text-end">
                <router-link to="/userDetails"
                  class="leading-none bg-[#e3e7ff] text-indigo600 tex rounded-full inline-flex items-center justify-center w-8 h-8 hover:bg-indigo600 hover:text-white transition">
                  <IconEye width="13" height="13" />
                </router-link>
              </td>
            </tr>
            <tr>
              <td
                class="border-0 border-b-[1px] border-[#eef2f7] ps-6 py-3 px-2 text-[13px] text-gray800custom text-start">
                <div class="flex items-center gap-2.5 min-w-0">
                  <img :src="heroimg" alt="Avatar" class="rounded-full object-cover shrink-0 h-8 w-8" />
                  <router-link to="" class="text-[#313a46] font-medium block truncate max-w-[120px] sm:max-w-full">
                    Emily Clark
                  </router-link>
                </div>
              </td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                @emilyc
              </td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                <span
                  class="text-green800 bg-bggreen500 leading-none text-[10px] font-bold px-2.5 py-[5px] rounded-[0.3rem]">Active</span>
              </td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                $532.75</td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                January 23, 2025</td>
              <td
                class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 pr-6 text-[13px] text-gray800custom text-end">
                <router-link to="/userDetails"
                  class="leading-none bg-[#e3e7ff] text-indigo600 tex rounded-full inline-flex items-center justify-center w-8 h-8 hover:bg-indigo600 hover:text-white transition">
                  <IconEye width="13" height="13" />
                </router-link>
              </td>
            </tr>
            <tr>
              <td
                class="border-0 border-b-[1px] border-[#eef2f7] ps-6 py-3 px-2 text-[13px] text-gray800custom text-start">
                <div class="flex items-center gap-2.5 min-w-0">
                  <img :src="heroimg" alt="Avatar" class="rounded-full object-cover shrink-0 h-8 w-8" />
                  <router-link to="" class="text-[#313a46] font-medium block truncate max-w-[120px] sm:max-w-full">
                    Maria Davis
                  </router-link>
                </div>
              </td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                @mariad </td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                <span
                  class="text-orange800 bg-bgorange500 leading-none text-[10px] font-bold px-2.5 py-[5px] rounded-[0.3rem]">Pending</span>
              </td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                $532.75</td>
              <td class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 text-[13px] text-gray800custom text-start">
                January 23, 2025</td>
              <td
                class="border-0 border-b-[1px] border-[#eef2f7] py-3 px-2 pr-6 text-[13px] text-gray800custom text-end">
                <router-link to="/userDetails"
                  class="leading-none bg-[#e3e7ff] text-indigo600 tex rounded-full inline-flex items-center justify-center w-8 h-8 hover:bg-indigo600 hover:text-white transition">
                  <IconEye width="13" height="13" />
                </router-link>
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
  </div>
</template>

<script setup>
import { IconEye, IconChevronsRight, IconChevronsLeft } from '@tabler/icons-vue';
import heroimg from '../assets/images/avatar-8.jpg';
</script>
