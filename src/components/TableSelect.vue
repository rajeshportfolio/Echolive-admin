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