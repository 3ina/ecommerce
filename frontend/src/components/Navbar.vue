<template>
    <header class=" flex justify-between items-center py-4 h-14 shadow bg-white">
        <button @click="emit('toggle-sidebar')" class="flex items-center justify-center w-8 h-8 rounded text-gray-700 hover:bg-black/10">
                <Bars3Icon class="w-6" />
        </button>

            <div class="px-4" >
                <Menu as="div" class="relative inline-block text-left">
                    <div>
                        <MenuButton
                            class="flex items-center"
                        >
                            <img src="https://randomuser.me/api/portraits/men/10.jpg" class="rounded-full w-7 mt-1 mr-2">
                            <small>sinaroydel</small>
                            <ChevronDownIcon
                                class=" ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                                aria-hidden="true"
                            />
                        </MenuButton>
                    </div>

                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <MenuItems
                            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                        >
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                    <button
                                        :class="[
                  active ? 'bg-indigo-200 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                                    >
                                        <PencilIcon
                                            :active="active"
                                            class="mr-2 h-5 w-5 text-violet-400"
                                            aria-hidden="true"
                                        />
                                        Profile
                                    </button>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <button
                                        :class="[
                  active ? 'bg-indigo-200 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                                    >
                                        <ArrowLeftIcon
                                            :active="active"
                                            class="mr-2 h-5 w-5 text-violet-400"
                                            aria-hidden="true"
                                        />
                                        Logout
                                    </button>
                                </MenuItem>
                            </div>


                        </MenuItems>
                    </transition>
                </Menu>
            </div>

    </header>
</template>

<script setup>

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon,ArrowLeftIcon,PencilIcon,Bars3Icon, } from '@heroicons/vue/20/solid'

const emit = defineEmits(['toggle-sidebar'])
</script>


<style scoped>

</style>
