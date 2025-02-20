<template>
    <div class="flex min-h-full min-w-screen">
        <!--   Side bar -->
        <sidebar :class='{"-ml-[200px]" : !sidebarOpened}'/>
        <!--/   Side bar -->
        <div class="flex-1">
            <TopHeader @toggle-sidebar="toggleSidebar">

            </TopHeader>

            <!--Content -->
                <main>
                    <div class="p-6">
                        <router-view></router-view>
                    </div>
                </main>
            <!--/   content -->
        </div>



    </div>
</template>


<script setup>
    import Sidebar from "./Sidebar.vue";
    import TopHeader from "./TopHeader.vue";
    import {ref} from "vue";

    const sidebarOpened = ref(true);

    const {title} = defineProps({
        title: String,
    })

    const emit = defineEmits(['submit'])


    function toggleSidebar() {
       sidebarOpened.value = !sidebarOpened.value;
    }
</script>


<style scoped>

</style>
