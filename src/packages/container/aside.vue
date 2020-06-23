<template>
    <aside class="lk-aside" :style="{width}">
        <slot></slot> 
    </aside>
</template>

<script>
export default {
    name: 'lk-aside',
    props: {
        width: {
            type: String,
            default: '300px'
        }
    }
}
</script>

<style lang="scss">

</style>