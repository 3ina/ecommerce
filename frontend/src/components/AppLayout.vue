<template>
    <div class="flex min-h-full min-w-screen">
        <!--   Side bar -->
        <sidebar/>
        <!--/   Side bar -->
        <div class="flex-1">
            <TopHeader/>

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

    const {title} = defineProps({
        title: String,
    })

    const emit = defineEmits(['submit'])
</script>


<style scoped>

</style>
