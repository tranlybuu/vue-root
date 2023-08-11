<template>
    <nav class="bg-main/60 dark:bg-opmain/60 fixed top-0 w-screen shadow-md backdrop-blur-xl text-gray-700 hover:text-gray-500 dark:text-white">
        <div class="mx-auto container px-4 md:px-0">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
              <!-- Mobile menu button-->
              <label class="bg-transparent hover:bg-gray-200/30 rounded-lg swap swap-rotate p-2 transition-all duration-200">
                <input type="checkbox" />
                <svg @click="isOpenMenu = !isOpenMenu" class="swap-off h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg @click="isOpenMenu = !isOpenMenu" class="swap-on h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </div>

            <!-- Logo and Desktop menu -->
            <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <img class="h-8 w-auto drop-shadow-sm" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
              </div>
              <div class="hidden md:ml-6 md:block">
                <div class="flex space-x-4">
                    <div v-for="(item, index) in menu" :key="'menu'+index">
                        <a v-if="item.path == currentPage" href="#" class="text-red-800 dark:text-red-400 block rounded-md px-3 py-2 text-base font-medium" aria-current="page">{{item.name}}</a>
                        <a v-else href="#" class="text-black dark:text-white hover:text-red-900 dark:hover:text-red-300 block rounded-md px-3 py-2 text-base font-medium">{{item.name}}</a>
                    </div>
                </div>
              </div>
            </div>

            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <!-- Change Light/Dark mode -->
                <div @click="toggleDarkMode" class="cursor-pointer">
                    <svg v-show="isDarkmode" class="fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    <svg v-show="!isDarkmode" class="fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                </div>
      
              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                  <button @click="isOpenUserProfile = !isOpenUserProfile" type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </button>
                </div>
                <div v-show="isOpenUserProfile" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <a href="#" class="block px-4 py-2 text-sm text-black" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm text-black" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                  <a href="#" class="block px-4 py-2 text-sm text-black" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <!-- Mobile menu, show/hide based on menu state. -->
        <div v-show="isOpenMenu" class="md:hidden border-t-[1px] border-gray-300 dark:border-gray-800" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <div v-for="(item, index) in menu" :key="'menu'+index">
                <a v-if="item.path == currentPage" href="#" class="text-red-800 dark:text-red-400 block rounded-md px-3 py-2 text-base font-medium" aria-current="page">{{item.name}}</a>
                <a v-else href="#" class="text-black dark:text-white hover:text-red-900 dark:hover:text-red-300  block rounded-md px-3 py-2 text-base font-medium">{{item.name}}</a>
            </div>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isOpenMenu: false,
            isOpenUserProfile: false,
            isDarkmode: false,
            menu: [
                {name: 'Trang chủ', path: 'example-page'},
                {name: 'Giới thiệu', path: 'product'},
                {name: 'Sản phẩm', path: 'product'},
                {name: 'Liên hệ', path: 'product'},
            ]
        }
    },
    methods: {
        toggleDarkMode() {
            if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark')
            }
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
            this.isDarkmode = localStorage.getItem('color-theme') === 'light' ? true : false
        }
    },
    computed: {
        currentPage() {
            return this.$route.path.replace('/', '')
        }
    },
    created() {
        this.toggleDarkMode()
    }
}
</script>