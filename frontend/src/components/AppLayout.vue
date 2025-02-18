<template>
    <div class="flex min-h-full">
        <!--   Side bar -->
        <sidebar/>
        <!--/   Side bar -->


        <div>
            <header class="h-8 shadow bg-white">
                Header
            </header>

            <!--Content -->

            <main>
                <router-view>
                </router-view>
            </main>
            <!--/   content -->

        </div>
    </div>
</template>


<script setup>
    import Sidebar from "./Sidebar.vue";

    const {title} = defineProps({
        title: String,
    })

    const emit = defineEmits(['submit'])
</script>


<style scoped>

</style>
