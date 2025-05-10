<template>
  <div class="flex min-h-screen justify-center items-center bg-gradient-to-br from-custom1 to-custom2 font-fontInter">
    <div class="w-full max-w-[326px] max-md:max-w-full md:p-9 p-6 bg-white rounded-[0.3rem] shadow-xl m-6 xxl:m-4_5rem">
      <div class="text-center mb-9">
        <router-link to="" class="inline-block mb-6">
          <img :src="logo" alt="Logo" class="h-[150px] mx-auto" />
        </router-link>
        <h3 class="text-[22px] font-semibold mb-3 leading-[1.1] text-gray800custom font-fontInter">Login your account
        </h3>
        <p class="text-gray500custom text-[13px] font-fontInter">Enter your user name and password to access admin
          panel.</p>
      </div>
      <form class="space-y-6 text-left">
        <div>
          <label class="block text-[13px] font-medium text-gray800custom mb-1" for="username">Username</label>
          <input id="username" type="email" placeholder="Enter your username"
            class="w-full px-4 py-[0.5rem] text-[0.8125rem] border border-borderGray text-gray800custom rounded-[0.3rem] focus:outline-none" />
        </div>
        <div>
          <label class="block text-[13px] font-medium text-gray800custom mb-1" for="password">Password</label>
          <input id="password" type="password" placeholder="Enter your password"
            class="w-full px-4 py-[0.5rem] text-[0.8125rem] border border-borderGray text-gray800custom rounded-[0.3rem] focus:outline-none" />
        </div>
        <div class="flex justify-between items-center text-sm">
          <label class="flex items-center space-x-2">
            <input type="checkbox" class="form-checkbox w-4 h-4 border-borderGray" />
            <span class="text-gray800custom text-[13px] font-medium">Remember me</span>
          </label>
          <router-link to="" class="text-[13px] text-gray500custom border-b border-dashed border-borderLight">Forget
            Password</router-link>
        </div>
        <button type="submit"
          class="w-full text-[13px] bg-indigo600 hover:bg-indigo700 text-white py-[0.55rem] px-4 rounded-[0.3rem] transition"
          @click="$router.push('/dashboard')">
          Login
        </button>
      </form>

      <p class="text-sm text-red800 text-center mt-6 mb-9">
        Don't have an account?
        <router-link to="" class="font-semibold ml-1 text-gray800 hover:underline">Sign Up !</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logo from '../assets/images/logo-login.png'
</script>