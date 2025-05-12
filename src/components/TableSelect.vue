<script setup>
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import '../assets/css/select2.min.css'
import '../assets/js/jquery.min.js'
import '../assets/js/select2.min.js'

// Get current route to watch for changes
const route = useRoute()

// Function to initialize select2
const initSelect2 = () => {
  const $ = window.$ || window.jQuery
  if ($) {
    $('#status-select').select2({
      width: '100%' // optional
    })
  }
}

onMounted(() => {
  initSelect2()
})

// Re-initialize on route change
watch(() => route.fullPath, () => {
  // Delay to allow DOM update
  setTimeout(() => {
    initSelect2()
  }, 0)
})

// Optional: clean up if needed
onBeforeUnmount(() => {
  const $ = window.$ || window.jQuery
  $('#status-select').select2('destroy')
})
</script>
<template>
    <div class="flex items-center space-x-3 w-full">
        <label for="status-select" class="text-[13px] text-gray800custom font-medium">Status</label>
        <div class="flex-grow relative">
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
</template>