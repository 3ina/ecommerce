<template>
    <div class="flex min-h-full min-w-screen">
        <!--   Side bar -->
        <sidebar :class='{"-ml-[200px]" : !sidebarOpened}'/>
        <!--/   Side bar -->
        <div class="flex-1">
            <Navbar @toggle-sidebar="toggleSidebar">

            </Navbar>

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
    import Navbar from "./Navbar.vue";
    import {onMounted, onUnmounted, ref} from "vue";

    const sidebarOpened = ref(true);

    const {title} = defineProps({
        title: String,
    });

    const emit = defineEmits(['submit']);


    function toggleSidebar() {
       sidebarOpened.value = !sidebarOpened.value;
    }

    onMounted(()=>{
       handleSideBarOpened()
        window.addEventListener("resize", handleSideBarOpened)
    });

    onUnmounted(() => {
        window.removeEventListener("resize", handleSideBarOpened)
    })

    function handleSideBarOpened() {
        sidebarOpened.value = window.outerWidth > 768;
    }
</script>


<style scoped>

</style>
