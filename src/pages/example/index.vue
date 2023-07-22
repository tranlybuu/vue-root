<template>
    <div class="container py-4 flex flex-col gap-4">
      <h1 class="text-blue-500 text-lg font-semibold">Example</h1>

      <button class="btn btn-info w-40" @click="showAlert">Show Swal</button>

      <div class="flex gap-4" v-viewer>
        <p>Image: </p>
        <img class="rounded-full w-10 h-10 object-cover" src="@/assets/img/avt.jpg" alt="avt">
      </div>

      <div>
        <VueMultiselect
          v-model="selected"
          :options="options">
        </VueMultiselect>
        <p>Selected: {{selected}}</p>
      </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
import VueMultiselect from 'vue-multiselect'
export default {
  name: "example-page",
  components: {
    VueMultiselect,
  },
  data () {
    return {
      selected: null,
      options: ['list', 'of', 'options'],
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