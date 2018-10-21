<template>
    <main>
        <one-head/>
        <router-view/>
    </main>
</template>

<script>
export default {
    name: 'app',

    components: {
        oneHead: () => import('./oneHead')
    }
}
</script>

<style scoped>

</style>