<template>
    <main class="lk-main">
        <slot></slot>
    </main>
</template>

<script>
export default {
    name: 'lk-main'
}
</script>

<style lang="scss">
.lk-main {
    flex: 1;
    padding: 20px;
}
</style>