<template>
  <div class="page-content bg-[#fafdff] px-6">
    <div class="h-[70px] flex flex-row items-center">
      <div class="grow">
        <h4 class="font-semibold text-gray800custom text-lg leading-none">User Details</h4>
      </div>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6">
      <div class="xl:col-span-4">
        <div class="bg-white rounded-[0.3rem] shadow-boxCardShadow text-center mb-6 p-6">
          <div class="flex items-center gap-3">
            <img :src="heroimg" alt="" class="w-20 h-20 rounded-full border-2 border-white">
            <div>
              <h4 class="text-gray800 font-medium text-[16px] text-start mb-2 leading-none">Ernest J. Johnson</h4>
              <p class="m-0 text-gray500custom text-[13px] text-start">@ernestj</p>
            </div>
            <div class="ml-auto">
              <span
                class="text-white bg-green800 leading-none text-[12px] font-bold px-3 py-[4.5px] rounded-[0.3rem]">Active</span>
            </div>
          </div>

          <div class="mt-6">
            <h4 class="text-gray800custom text-start mb-2 font-medium leading-none text-[15px]">User Details :</h4>
            <div class="mt-6">
              <div class="flex items-center gap-2 mb-3">
                <p class="text-gray800 text-start text-[13px] font-semibold">Display Name: <span
                    class="font-normal">Jessica Johnson</span></p>
              </div>
              <div class="flex items-center gap-2 mb-3">
                <p class="text-gray800 text-start text-[13px] font-semibold">About Me: <span class="font-normal">Just a
                    joyful girl here...</span></p>
              </div>
              <div class="flex items-center gap-2">
                <p class="text-gray800 text-start text-[13px] font-semibold">Location: <span
                    class="font-normal">Toronto, Canada</span></p>
              </div>
              <div class="flex items-center gap-2">
                <p class="text-gray800 text-start text-[13px] font-semibold">Website: <span
                    class="font-normal">tester.ca</span></p>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <h4 class="text-gray800custom text-start mb-2 font-medium leading-none text-[15px]">Profile Overview :</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-[18px]">
              <div>
                <h4 class="text-gray800custom text-start font-medium leading-none text-[16.25px]">12</h4>
                <p class="text-gray500custom text-start text-[13px] leading-loose">Photos</p>
              </div>
              <div>
                <h4 class="text-gray800custom text-start font-medium leading-none text-[16.25px]">67</h4>
                <p class="text-gray500custom text-start text-[13px] leading-loose">Likes</p>
              </div>
              <div>
                <h4 class="text-gray800custom text-start font-medium leading-none text-[16.25px]">2,345</h4>
                <p class="text-gray500custom text-start text-[13px] leading-loose">Favourites</p>
              </div>
              <div>
                <h4 class="text-gray800custom text-start font-medium leading-none text-[16.25px]">468</h4>
                <p class="text-gray500custom text-start text-[13px] leading-loose">Comments</p>
              </div>
            </div>
          </div>



        </div>

        <div class="bg-white rounded-[0.3rem] shadow-boxCardShadow text-center mb-6">
          <div class="flex items-center justify-between border-b border-borderLight border-dashed px-6 py-[18px] gap-6">
            <h4 class="font-semibold text-gray800custom leading-none text-base mr-auto text-start">Content Uploaded
            </h4>
            <router-link to=""
              class="leading-none bg-[#e3e7ff] text-indigo600 text-[0.7875rem] rounded-[0.25rem] inline-flex items-center justify- hover:bg-indigo600 hover:text-white transition px-3.5 py-[9px]">View
              All
            </router-link>
          </div>
          <div class="p-6 flex flex-col space-y-3">
            <div v-for="(file, index) in files" :key="index"
              class="flex items-center gap-3 rounded-[0.3rem] border border-dashed bg-[#fbfbfd] p-3 border-borderLight">
              <div class="w-12 h-12 flex items-center justify-center">
                <Icon icon="solar:file-download-bold" width="22" height="22" class="text-indigo600" />
              </div>
              <div class="flex flex-col">
                <router-link to="" class="text-gray800 text-start text-[13px] font-medium">
                  {{ file.name }}
                </router-link>
                <p class="text-gray500custom text-start text-[13px]">{{ file.size }}</p>
              </div>
              <div class="ml-auto text-right relative dropdown-wrapper">
                <button @click="toggleDropdown(index, $event)" class="text-gray-800 hover:text-indigo-600 transition">
                  <IconDotsVertical width="20" height="20" />
                </button>

                <div v-if="activeDropdown === index"
                  class="absolute right-0 top-6 bg-white shadow-osen-dropdown rounded-[0.3rem] overflow-hidden z-[1000] animate-dropdown min-w-[11rem] p-1 border border-[#e7e9eb]">
                  <router-link to="" @click.native="closeDropdown"
                    class="block text-gray-800 text-[13px] hover:bg-[#f6f7fb] mb-1 rounded-[0.3rem] py-[6.5px] px-[18px] text-start">
                    Download
                  </router-link>
                  <router-link to="" @click.native="closeDropdown"
                    class="block text-gray-800 text-[13px] hover:bg-[#f6f7fb] rounded-[0.3rem] py-[6.5px] px-[18px] text-start">
                    Share
                  </router-link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="xl:col-span-8">
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
        <div class="bg-white rounded-[0.3rem] shadow-boxCardShadow text-center mb-6">
          <div class="border-b-[1px] border-0 border-[#eef2f7] px-6 py-[18px] gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="relative w-full">
                  <input type="text" placeholder="Search Order"
                    class="w-full pl-9 pr-3 py-2 text-[13px] text-gray800custom rounded-[0.3rem] border border-borderGray focus:outline-none" />
                  <IconSearch width="13px" height="13px"
                    class="ti ti-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray800custom" />
                </div>
                <div class="flex items-center space-x-3 w-full">
                  <label for="status-select" class="text-[13px] text-gray800custom font-medium">Status</label>
                  <div class="flex-grow">
                    <select id="status-select">
                      <option>Select</option>
                      <option value="Date">All</option>
                      <option value="Name">Cancelled</option>
                      <option value="Revenue">Completed</option>
                      <option value="Employee">Denied</option>
                      <option value="Employee">Pending</option>
                      <option value="Employee">Processing</option>
                      <option value="Employee">Refunded</option>
                    </select>
                  </div>
                </div>
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import { IconChecks, IconEye, IconChevronsRight, IconChevronsLeft, IconDotsVertical, IconSearch, IconCalendar, IconEdit } from '@tabler/icons-vue'
import heroimg from '../assets/images/avatar-5.jpg';

import Flatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

const dateRange = ref(null);

const config = {
  mode: 'range',
  dateFormat: 'd M',
  defaultDate: ['01 May', '31 May'],
};

// File list
const files = ref([
  { name: 'Agreement Meditation.zip', size: '23.2 MB' },
  { name: 'Lab Results Document', size: '2.7 MB' },
  { name: 'ECG Report (2 Page)', size: '6.7 MB' },
  { name: 'Cardio-report.pdf', size: '4.7 MB' },
  { name: 'Cardiology-invoice', size: '1.2 MB' },
])

// Dropdown logic
const activeDropdown = ref<number | null>(null)

function toggleDropdown(index: number, event: MouseEvent) {
  event.stopPropagation()
  activeDropdown.value = activeDropdown.value === index ? null : index
}

function closeDropdown() {
  activeDropdown.value = null
}

function handleClickOutside(event: MouseEvent) {
  const dropdowns = document.querySelectorAll('.dropdown-wrapper')
  let isInsideAny = false

  dropdowns.forEach((dropdown) => {
    if (dropdown.contains(event.target as Node)) {
      isInsideAny = true
    }
  })

  if (!isInsideAny) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.animate-dropdown {
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
