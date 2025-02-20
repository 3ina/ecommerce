<template>
    <div class="w-[200px] transition-all bg-indigo-700 px-2 text-white p-4">
        <router-link :to="{name:'app.dashboard'}"
                     class="flex items-center py-1
                            px-3 rounded transition-colors hover:bg-black/30 font-light mb">
            <span class="mr-4 text-gray-300">
                <div class="w-4">
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>

            </span>
            <span class="text-sm">
                Dashboard
            </span>
        </router-link>


        <router-link :to="{name:'app.dashboard'}"
                     class="flex items-center py-1
                            px-3 rounded transition-colors hover:bg-black/30 font-light mb">
            <span class="mr-4 text-gray-300">
                <div class="w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>

            </span>
            <span class="text-sm">
                Products
            </span>
        </router-link>


        <router-link :to="{name:'app.dashboard'}"
                     class="flex items-center py-1
                            px-3 rounded transition-colors hover:bg-black/30 font-light mb">
            <span class="mr-4 text-gray-300">
                <div class="w-4">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                   </svg>
                </div>

            </span>
            <span class="text-sm">
                Users
            </span>
        </router-link>


        <router-link :to="{name:'app.dashboard'}"
                     class="flex items-center py-1
                            px-3 rounded transition-colors hover:bg-black/30 font-light mb">
            <span class="mr-4 text-gray-300">
                <div class="w-4">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                   </svg>

                </div>
            </span>
            <span class="text-sm">
                Reports
            </span>
        </router-link>


    </div>
</template>
<script>
export default {
    name: "Sidebar",
}
</script>
<style scoped>

</style>
