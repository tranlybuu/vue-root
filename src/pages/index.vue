<template>
    <div>
      <vue-page-transition name="fade">
        <router-view />
      </vue-page-transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "main"
  };
  </script>
  