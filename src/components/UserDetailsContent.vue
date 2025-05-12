<template>
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
</template>


<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import { IconDotsVertical } from '@tabler/icons-vue'

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