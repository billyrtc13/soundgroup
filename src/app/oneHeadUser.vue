<template>
    <div>
        <button>
            <i aria-hidden="true" class="group"/>
        </button>
        <button>
            <i aria-hidden="true" class="user"/>
            <a media="screen and (min-width:500px)">Billy Teske</a>
        </button>
    </div>
</template>

<script>
export default {
    name: 'one-head-user'
}
</script>

<style scoped>
    div {
        display: flex;
        justify-self: end;
    }

    button {
        display: flex;
        align-items: center;
        background-color: transparent;
    }

    .user {
        margin-right: 5px;
    }

    .user::before {
        content: 'person';
    }

    .group::before {
        content: 'group_work';
    }
</style>
