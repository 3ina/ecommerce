<template>
   <guest-layout title="Set new password">

       <div>
           <div class="mt-2">
               <input type="password"
                      name="password"
                      id="new-password"
                      placeholder="New Password"
                      required=""
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
               />
           </div>
       </div>


       <div>
           <div class="mt-2">
               <input type="password"
                      name="password"
                      id="confirm-password"
                      placeholder="Repeat New Password"
                      required=""
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
               />
           </div>
       </div>
       <div class="flex items-center justify-between">

           <div class="text-sm">
               <router-link :to="{name : 'login'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Go back to login</router-link>
           </div>
       </div>
       <div>
           <button type="submit"
                   class="flex w-full justify-center rounded-md
                            !bg-indigo-600 px-3 py-1.5
                             text-sm/6
                             font-semibold text-white shadow-sm
                             !hover:bg-indigo-500
                             focus-visible:outline-2
                             focus-visible:outline-offset-2
                             focus-visible:outline-indigo-600"
           >
               Submit
           </button>
       </div>
   </guest-layout>
</template>

<script setup>
import GuestLayout from "../components/GuestLayout.vue";
</script>

<style scoped>

</style>
