<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
  components: {Footer, Header}
    
}
</script>

<template>
    <div class="pt-14 bg-main dark:bg-opmain text-opmain dark:text-main">
      <Header />
      <router-view class="px-4 md:px-2" />
      <Footer />
    </div>
  </template>
  