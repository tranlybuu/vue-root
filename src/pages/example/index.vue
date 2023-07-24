<template>
  <div class="container py-4 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2">
    <div class="flex flex-col gap-4">
      <h1 class="font-extrabold text-2xl">Vue Example Page</h1>
      <ul>
        <li><a class="text-lg" target="_blank" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap 5</a></li>
        <li><a class="text-lg" target="_blank" href="https://tailwindcss.com/">TailwindCss</a></li>
        <li><a class="text-lg" target="_blank" href="https://router.vuejs.org/">VueRouter</a></li>
        <li><a class="text-lg" target="_blank" href="https://www.npmjs.com/package/axios">Axios</a></li>
        <li><a class="text-lg" target="_blank" href="https://vuex.vuejs.org/">VueX</a></li>
        <li><a class="text-lg" target="_blank" href="https://sweetalert2.github.io/">SweetAlert2</a></li>
        <li><a class="text-lg" target="_blank" href="https://github.com/mirari/v-viewer/tree/v3">VueViewer</a></li>
        <li><a class="text-lg" target="_blank" href="https://www.npmjs.com/package/vue-page-transition">VuePageTransition</a></li>
        <li><a class="text-lg" target="_blank" href="https://vue-multiselect.js.org/">VueMultiselect</a></li>
        <li><a class="text-lg" target="_blank" href="https://naver.github.io/egjs-flicking/">Vue3-flicking</a></li>
      </ul>
    </div>
    
    <div class="flex flex-col gap-6 md:col-span-2">
      <h1 class="text-blue-500 text-xl font-semibold">Example</h1>

      <div>
        <p class="text-lg">Bootstrap 5 - TailwindCss</p>
        
      </div>
  
      <button class="btn btn-info w-fit" @click="showAlert">Show Sweet Alert 2</button>
  
      <div class="flex gap-4" v-viewer>
        <p class="my-auto">Vue Viewer: </p>
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
          <div class="relative panel w-full h-64 bg-red-700">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">1</p>
          </div>
          <div class="relative panel w-full h-64 bg-blue-700">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">2</p>
          </div>
          <div class="relative panel w-full h-64 bg-green-700">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">3</p>
          </div>
          <div class="relative panel w-full h-64 bg-slate-700">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">4</p>
          </div>
          <div class="relative panel w-full h-64 bg-yellow-700">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">5</p>
          </div>
          <div class="relative panel w-full h-64 bg-amber-700">
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">6</p>
          </div>
          <template #viewport>
            <!-- <span class="flicking-arrow-prev is-thin is-circle"></span>
            <span class="flicking-arrow-next is-thin is-circle"></span> -->
            <div class="flicking-pagination"></div>
          </template>
        </Flicking>
        <div class="flex gap-2 justify-center">
          <button class="btn btn-outline-dark" @click="clickToBackSlide">Back slide</button>
          <button class="btn btn-outline-dark" @click="clickToNextSlide">Next slide</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Flicking from "@egjs/vue3-flicking";
import { Fade, AutoPlay, Pagination, Perspective } from "@egjs/flicking-plugins";
import VueMultiselect from 'vue-multiselect'

// import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/flicking-plugins/dist/pagination.css";

const plugins = [
  new Perspective({ rotate: -1, scale: 2, perspective: 600 }),
  new Pagination({  type: 'scroll' }), 
  new Fade(), 
  new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: false })
]

export default {
  name: "example-page",
  components: {
    VueMultiselect,
    Flicking,
  },
  data () {
    return {
      selected: null,
      options: ['list', 'of', 'options'],
      isOpen: false,
      flickingOptions: { 
        circular: true, 
        moveType: 'freeScroll',
        panelsPerView: 3
      },
      plugins
    }
  },
  methods: {
    ...mapActions('test', ['testVueX']),
    getEntry() {
      return this.testVueX()
    },
    showAlert() {
      this.$swal('Hello Vue world!!!');
    },
    clickToBackSlide() {
      this.$refs.flicking.prev();
    },
    clickToNextSlide() {
      this.$refs.flicking.next();
    }
  },
  created() {
    console.log(this.getEntry())
  }
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}
</style>