<template>
    <header>
        <img src="../assets/logo.svg" alt="Sound Group"
            draggable="false" :style="{
                gridColumn: 1,
                gridRow: '1/span 2'
            }">
        <h1>Proyecto 1</h1>
        <one-head-control :style="{
            gridColumn: 2,
            gridRow:2
        }"/>
        <one-head-user :style="{
            gridColumn: 3,
            gridRow: '1/span 2'
        }"/>
    </header>
</template>

<script>
export default {
    name: 'one-head',

    components: {
        oneHeadControl: () => import('./oneHeadControl'),
        oneHeadUser: () => import('./oneHeadUser')
    }
}
</script>

<style scoped>
    header {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 10;
        background-color: #fff;
        display: grid;
        grid-template-columns: 60px auto auto;
        align-items: center;
        padding: 0 10px;
        box-shadow: 0 5px 5px rgba(0,0,0,.2);
    }

    img {
        width: 60px;
        height: 60px;
    }

    h1 {
        margin: 3px 0 0 0;
        font-weight: 500;
        font-size: 12pt;
        color: #777;
        padding: 0 10px;
    }




</style>
