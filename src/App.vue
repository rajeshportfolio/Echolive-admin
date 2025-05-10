<template>
  <div :class="['flex font-fontInter', !isLoginPage ? 'h-screen overflow-hidden' : '']">
    <Sidebar v-if="!isLoginPage" />
    <main :class="isLoginPage ? 'w-full' : 'relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'">
      <Header v-if="!isLoginPage" />
      <router-view />
      <Footer v-if="!isLoginPage" class="mt-auto"/>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const isLoginPage = computed(() => route.path === '/')
</script>
