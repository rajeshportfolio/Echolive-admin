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
            <UserDetailsContent/>
          </div>

        </div>
      </div>

      <div class="xl:col-span-8">
        <UserPost/>
        <UserTransactions/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import heroimg from '../assets/images/avatar-5.jpg';

import UserDetailsContent from '../components/UserDetailsContent.vue'
import UserPost from '../components/UserPost.vue'
import UserTransactions from '../components/UserTransactions.vue'
</script>

