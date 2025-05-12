<template>
  <header
    class="sticky top-0 z-[1000] w-full shadow-[0px_0px_35px_rgba(104,134,177,0.15)] bg-white min-h-[70px] transition-all duration-300 px-3">
    <div class="flex items-center justify-between px-3">
      <div class="flex items-center gap-3">
        <button @click="toggleSidebar" class="toggle-button flex lg:hidden relative px-3 text-[#6c757d]">
          <IconMenuDeep />
        </button>
        <div
          class="hidden xl:flex items-center gap-3 text-gray500custom cursor-pointer bg-[#f0f3f8] py-[10px] px-3 rounded-[0.3rem] w-[230px]"
          @click="isModalOpen = true">
          <IconSearch width="18" height="18" />
          <span class="text-[13px] mr-2">Search ..</span>
          <span class="ml-auto font-medium text-[13px]">⌘K</span>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button class="flex xl:hidden items-center text-[#6c757d] px-[6px] py-[1px] hover:text-indigo600"
          @click="isModalOpen = true">
          <IconSearch width="22" height="22" />
        </button>

        <div ref="dropdownRef" class="relative flex items-center bg-[#fafafd] h-[70px] border border-[#eef2f7]">
          <div class="flex items-center px-3 cursor-pointer" @click="toggleDropdown($event)">
            <img :src="avatar" class="h-8 w-8 rounded-full mr-0 md:mr-3" alt="User" />
            <div class="hidden md:flex flex-col gap-[5px]">
              <h5 class="text-[0.845rem] text-[#6C757D] font-semibold leading-none">Dhanoo K.</h5>
              <span class="text-[0.690625rem] text-[#6C757D]">Admin</span>
            </div>
            <IconChevronDown class="ml-3 text-[#6C757D] hidden md:flex" width="13px" height="13px" />
          </div>

          <div v-if="dropdownOpen"
            class="absolute right-0 top-[70px] bg-white shadow-osen-dropdown rounded-[0.3rem] overflow-hidden z-[1000] animate-dropdown min-w-[11rem] p-1 border border-[#e7e9eb]">
            <router-link to="" @click.native="closeDropdown"
              class="flex items-center text-gray800custom text-[13px] hover:bg-[#f6f7fb] mb-1 rounded-[0.3rem] py-[7px] px-[18px]">
              <IconSettings width="17px" height="17px" class="mr-[7px]" />
              <span>Settings</span>
            </router-link>
            <div class="border-t border-borderLight my-[6px] mx-[-4px]"></div>
            <router-link to="" @click.native="closeDropdown"
              class="flex items-center text-[#FF6D43] text-[13px] bg-[#f6f7fb] rounded-[0.3rem] py-[7px] px-[18px] font-semibold">
              <IconLogout width="17px" height="17px" class="mr-[7px]" />
              <span>Sign Out</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div v-if="isModalOpen"
    class="transition-opacity duration-150 ease-linear fixed top-0 right-0 left-0 flex justify-center w-full overflow-y-auto overflow-x-hidden bg-[#4c4c5c80] inset-0 z-[1000]">
    <div class="relative w-full max-w-[500px] md:max-w-[800px] max-h-full m-2 xs:m-7">
      <div
        class="searchbar flex items-center relative bg-white px-6 py-3 rounded-[0.3rem] shadow-boxCardShadow text-gray800custom">
        <IconSearch width="22" height="22" />
        <input type="search" class="flex-1 border-none outline-none py-2 px-3 text-[13px]"
          placeholder="Search for actions, people..." />
        <button @click="isModalOpen = false" class="text-[13px]">[esc]</button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import avatar from '../assets/images/avatar-1.jpg'
const isModalOpen = ref(false);

import {
  IconMenuDeep,
  IconSearch,
  IconChevronDown,
  IconLogout,
  IconSettings
} from '@tabler/icons-vue'

const dropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

function toggleDropdown(event: MouseEvent) {
  // Stop the event from propagating to the document click listener
  event.stopPropagation()
  dropdownOpen.value = !dropdownOpen.value
}

function handleClickOutsideModal(event: MouseEvent) {
  if (
    isModalOpen.value &&
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target as Node)
  ) {
    isModalOpen.value = false
  }
}


function handleClickOutside(event: MouseEvent) {
  if (
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target as Node)
  ) {
    dropdownOpen.value = false
  }
}

function closeDropdown() {
  dropdownOpen.value = false
}

function toggleSidebar() {
  document.body.classList.toggle('sidebar-collapsed')
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
   document.addEventListener('mousedown', handleClickOutsideModal)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('mousedown', handleClickOutsideModal)
})
</script>

<style scoped>
.searchbar {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-1.5rem);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
