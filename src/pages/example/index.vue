<template>
  <div class="mx-auto container py-4 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2">
    <div class="flex flex-col gap-4">
      <h1 class="font-extrabold text-2xl">Vue Example Page</h1>
      <ul>
        <li><a class="text-lg" target="_blank" href="https://tailwindcss.com/">TailwindCss</a></li>
        <li><a class="text-lg" target="_blank" href="https://daisyui.com/">DaisyUI</a></li>
        <li><a class="text-lg" target="_blank" href="https://router.vuejs.org/">VueRouter</a></li>
        <li><a class="text-lg" target="_blank" href="https://www.npmjs.com/package/axios">Axios</a></li>
        <li><a class="text-lg" target="_blank" href="https://pinia.vuejs.org/">Pinia</a></li>
        <li><a class="text-lg" target="_blank" href="https://sweetalert2.github.io/">SweetAlert2</a></li>
        <li><a class="text-lg" target="_blank" href="https://github.com/mirari/v-viewer/tree/v3">VueViewer</a></li>
        <li><a class="text-lg" target="_blank" href="https://www.npmjs.com/package/vue-page-transition">VuePageTransition</a></li>
        <li><a class="text-lg" target="_blank" href="https://vue-multiselect.js.org/">VueMultiselect</a></li>
        <li><a class="text-lg" target="_blank" href="https://naver.github.io/egjs-flicking/">Vue3-flicking</a></li>
      </ul>
    </div>
    
    <div class="flex flex-col gap-6 md:col-span-2">
      <h1 class="text-primary text-xl font-semibold">Example</h1>

      <div>
        <p class="text-lg">TailwindCss - DaisyUI</p>
        <div class="flex gap-1 mb-1 flex-wrap">
          <button v-for="(item, index) in themes" :key="'theme'+index" class="btn" @click="changeTheme(item.value)">
            {{item.value}}
          </button>
        </div>
        <p class="font-semibold">Current Theme: {{currentTheme}} - DaisyUI</p>
      </div>

      <div>
        <p class="text-lg">Store - Pinia</p>
        <div class="flex gap-2">
          <p class="text-lg font-semibold my-auto">Count: {{store.count}}</p>
          <p class="text-lg font-semibold my-auto">DoubleCount: {{store.doubleCount}}</p>
          <button class="btn btn-primary" @click="store.decrement">-1</button>
          <button class="btn btn-primary" @click="store.increment">+1</button>
          <button class="btn btn-primary" @click="store.resetCount">Reset</button>
        </div>
      </div>
  
      <button class="btn btn-info w-fit" @click="showAlert">Show Sweet Alert 2</button>
  
      <div class="flex gap-4" v-viewer>
        <p class="my-auto text-lg">Vue Viewer: </p>
        <img class="rounded-full w-10 h-10 object-cover" src="@/assets/img/avt.jpg" alt="avt">
      </div>
  
      <div>
        <p class="text-lg">Vue Multiselect:</p>
        <VueMultiselect
          v-model="selected"
          :options="options">
        </VueMultiselect>
        <p>Selected: {{selected}}</p>
      </div>
      
      <div>
        <Flicking ref="flicking" 
          :options="flickingOptions"
          :viewportTag="'div'"
          :cameraTag="'div'"
          :cameraClass="''"
          :plugins="plugins"
          @move-end="onMoveEnd">
          <div class="relative panel w-full drop-shadow-2xl h-64 bg-primary">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">1</p>
          </div>
          <div class="relative panel w-full drop-shadow-2xl h-64 bg-secondary">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">2</p>
          </div>
          <div class="relative panel w-full drop-shadow-2xl h-64 bg-accent">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">3</p>
          </div>
          <div class="relative panel w-full drop-shadow-2xl h-64 bg-info">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">4</p>
          </div>
          <div class="relative panel w-full drop-shadow-2xl h-64 bg-success">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">5</p>
          </div>
          <div class="relative panel w-full drop-shadow-2xl h-64 bg-warning">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">6</p>
          </div>
          <template #viewport>
            <div class="flicking-pagination"></div>
            <span class="flicking-arrow-prev"></span>
            <span class="flicking-arrow-next"></span>
          </template>
        </Flicking>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useExampleStore } from '@/stores/examStore'
import Flicking from "@egjs/vue3-flicking";
import { Fade, AutoPlay, Pagination, Perspective, Arrow } from "@egjs/flicking-plugins";
import VueMultiselect from 'vue-multiselect'
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking-plugins/dist/arrow.css";

export default {
  name: "example-page",
  components: {
    VueMultiselect,
    Flicking,
  },
  setup() {
    const store = useExampleStore()
    const selected = ref(null)
    const options = ref(['list', 'of', 'options'])
    const flickingOptions = { 
      circular: true,
      panelsPerView: 5
    }
    const plugins = [
      new Perspective({ rotate: -1, scale: 2, perspective: 300 }),
      new Pagination({  type: 'scroll' }),
      new Fade(),
      new Arrow(),
      new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: false })
    ]
    const themes = [
      {value: "light"},
      {value: "dark"},
      {value: "cupcake"},
      {value: "bumblebee"},
      {value: "emerald"},
      {value: "corporate"},
      {value: "synthwave"},
      {value: "retro"},
      {value: "cyberpunk"},
      {value: "valentine"},
      {value: "halloween"},
      {value: "garden"},
      {value: "forest"},
      {value: "aqua"},
      {value: "lofi"},
      {value: "pastel"},
      {value: "fantasy"},
      {value: "wireframe"},
      {value: "black"},
      {value: "luxury"},
      {value: "dracula"},
      {value: "cmyk"},
      {value: "autumn"},
      {value: "business"},
      {value: "acid"},
      {value: "lemonade"},
      {value: "night"},
      {value: "coffee"},
      {value: "winter"},
    ]
    const currentTheme = ref("cupcake")
    const changeTheme = (theme) => {
      if (currentTheme.value != theme) { 
        const element = document.querySelector('[data-theme="' + currentTheme.value + '"]');
        currentTheme.value = theme
        element.setAttribute('data-theme', theme);
      }
    }
    return {
      plugins, selected, options, flickingOptions, store, themes, currentTheme, changeTheme
    }
  },
  methods: {
    showAlert() {
      this.$swal('Hello Vue world!!!');
    },
  },
};
</script>