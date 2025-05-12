<template>
  <aside
    class="sidebar w-[260px] h-screen bg-darkBlue text-white shadow-lg top-0 left-0 z-9999 flex flex-col overflow-y-auto transition-all duration-300 relative">
    <!-- Logo -->
    <router-link to="/dashboard" class="block px-[22px] sticky top-0 h-[70px] text-left">
      <span class="logo-light hidden dark:block">
        <span class="logo-lg h-[70px] flex items-center">
          <img :src="logo" alt="logo" class="h-[50px]" />
        </span>
        <span class="logo-sm hidden h-[70px] items-center">
          <img :src="logoSm" alt="small logo" class="w-[30px]" />
        </span>
      </span>
    </router-link>

    <!-- Collapse Toggle Button -->
    <button @click="toggleSidebar"
      class="toggle-button text-gray-400 hover:text-white absolute right-3 top-0 h-[72px] px-[6px] z-50">
      <IconCircleDot width="20" height="20" />
    </button>
    <button @click="toggleSidebar" class="border-0 close-toggle text-gray-400 hover:text-white absolute right-3 top-0 h-[72px] px-[6px] hidden">
      <IconX width="20" height="20" />
    </button>

    <!-- Sidebar Content -->
    <div class="flex-1 overflow-y-auto">
      <ul class="flex flex-col gap-1 mb-4">
        <li class="text-[10px] tracking-wider font-bold py-2 px-[26px] uppercase text-gray-400">Dash</li>

        <li class="px-[10px]">
          <router-link to="/dashboard" v-slot="{ isActive }"
          :class="[
            'flex items-center text-sm px-[15px] py-[8px] rounded font-medium gap-[12px]',
            $route.path === '/dashboard' ? 'bg-[#2f3a5f] text-[#e2eeff]' : 'text-[#97aac1] hover:bg-[#2f3a5f] hover:text-white'
          ]">
            <IconDashboard width="20" height="20" />
            <span class="sidebar-label">Dashboard</span>
          </router-link>
        </li>

        <li class="px-[10px]">
          <router-link to="/users"
            :class="[
            'flex items-center text-sm px-[15px] py-[8px] rounded font-medium gap-[12px]',
            ($route.path === '/users' || $route.path === '/userDetails') ? 'bg-[#2f3a5f] text-[#e2eeff]' : 'text-[#97aac1] hover:bg-[#2f3a5f] hover:text-white'
          ]">
            <IconUserHexagon width="20" height="20" />
            <span class="sidebar-label">Users</span>
          </router-link>
        </li>

        <li class="px-[10px]">
          <router-link to="/transactions"
            :class="[
            'flex items-center text-sm px-[15px] py-[8px] rounded font-medium gap-[12px]',
            $route.path === '/transactions' ? 'bg-[#2f3a5f] text-[#e2eeff]' : 'text-[#97aac1] hover:bg-[#2f3a5f] hover:text-white'
          ]">
            <IconBasket width="20" height="20" />
            <span class="sidebar-label">Transactions</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import logo from '../assets/images/logo.png'
import logoSm from '../assets/images/logo-sm.png'
import {
  IconCircleDot,
  IconX,
  IconBasket,
  IconUserHexagon,
  IconDashboard
} from '@tabler/icons-vue'

function toggleSidebar() {
  document.body.classList.toggle('sidebar-collapsed')
}
</script>

<style>
body.sidebar-collapsed .sidebar {
  width: 70px !important;
}

body.sidebar-collapsed .sidebar:hover {
  width: 260px !important;
}

body.sidebar-collapsed .sidebar ul li:first-child,
body.sidebar-collapsed .sidebar:hover .logo-sm,
body.sidebar-collapsed .sidebar .toggle-button,
body.sidebar-collapsed .sidebar .logo-lg,
body.sidebar-collapsed .sidebar .sidebar-label {
  display: none;
}

body.sidebar-collapsed .sidebar:hover ul li:first-child,
body.sidebar-collapsed .sidebar:hover .sidebar-label,
body.sidebar-collapsed .sidebar:hover .toggle-button {
  display: block;
}

body.sidebar-collapsed .sidebar .logo-sm,
body.sidebar-collapsed .sidebar:hover .logo-lg {
  display: flex;
}

@media (max-width: 1139.98px) {
  .sidebar {
    width: 70px !important;
  }

  body .sidebar ul li:first-child,
  body .sidebar .toggle-button,
  body .sidebar .logo-lg,
  body .sidebar .sidebar-label {
    display: none;
  }

  body .sidebar .logo-sm {
    display: flex;
  }

  body.sidebar-collapsed .sidebar {
    width: 260px !important;
  }

  body.sidebar-collapsed .sidebar .logo-lg {
    display: flex;
  }

  body.sidebar-collapsed .sidebar ul li:first-child,
  body.sidebar-collapsed .sidebar .sidebar-label,
  body.sidebar-collapsed .sidebar .toggle-button {
    display: block;
  }

  body.sidebar-collapsed .sidebar .logo-sm {
    display: none;
  }
}

@media (max-width: 767.98px) {
  .sidebar {
    margin-left: calc(70px * -1);
    opacity: 0;
  }

  body.sidebar-collapsed .sidebar {
    opacity: 1;
    margin: 0;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1002;
  }

  body.sidebar-collapsed {
    position: relative;
    overflow: hidden;
  }

  body.sidebar-collapsed:after {
    transition: opacity 0.15s linear;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    content: '';
    background: rgb(76 76 92 / 50%);
    z-index: 1001;
  }

  body .sidebar .toggle-button,
  body.sidebar-collapsed .sidebar .toggle-button {
    display: none;
  }

  body .sidebar .close-toggle,
  body.sidebar-collapsed .sidebar .close-toggle {
    display: block;
  }
}
</style>
