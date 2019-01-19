<template>
    <div>
        <button><i aria-hidden="true" class="play"/></button>
        <button><i aria-hidden="true" class="stop"/></button>
        <button><i aria-hidden="true" class="rec"/></button>
        <button><i aria-hidden="true" class="repeat"/></button>
    </div>
</template>

<script>
export default {
    name: 'one-head-control'
}
</script>

<style scoped>
    div {
        display: flex;
    }

    button {
        background-color: transparent;
        padding: 5px;
    }

    button {
        width: 34px;
    }

    button:active i {
        display: none;
    }

    button:focus i,
    button:active i,
    button:hover i {
        color: var(--color-app);
    }

    i {
        animation: crecer .1s ease;
    }

    @keyframes crecer {
        from {
            transform: scale(.7,.7);
            opacity: .5;
        }
    }

    .play::before {
        content: 'play_arrow';
    }

    .pause::before {
        content: 'pause';
    }

    .stop::before {
        content: 'stop';
    }

    .rec::before {
        content: 'fiber_manual_record';
    }

    .repeat::before {
        content: 'replay';
    }
</style>
