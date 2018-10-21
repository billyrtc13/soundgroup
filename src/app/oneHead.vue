<template>
    <header>
        <img src="../assets/logo.svg" alt="Sound Group">
        <hgroup>
            <h1>Proyecto 1</h1>
            <div>
                <button><i aria-hidden="true" class=""/></button>
                <button><i aria-hidden="true" class=""/></button>
                <button><i aria-hidden="true" class=""/></button>
                <button><i aria-hidden="true" class=""/></button>
                <button><i aria-hidden="true" class=""/></button>
                <button><i aria-hidden="true" class=""/></button>
            </div>
        </hgroup>
    </header>
</template>

<script>
export default {
    name: 'one-head'
}
</script>

<style scoped>
    header {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 10px;
        box-shadow: 0 5px 5px rgba(0,0,0,.2);
    }

    img {
        width: 60px;
        height: 60px;
    }

    hgroup {
        margin: 0 auto 0 20px;
        font-weight: 300;
    }

    h1 {
        margin: 0;
    }


</style>
