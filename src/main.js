import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/select2.min.css'
import './assets/js/jquery.min.js'
import './assets/js/select2.min.js'
import './assets/css/style.css'
import 'flowbite'

// 👉 Import and use ApexCharts
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

// Register router and ApexCharts
app.use(router)
app.use(VueApexCharts)
app.component('apexchart', VueApexCharts)

app.mount('#app')

$(document).ready(function () {
  $('#status-select').select2();
});

