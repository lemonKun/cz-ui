<template>
    <section class="lk-container" :class="{isVertical}">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'lk-container',
    mounted() {
        // this.$children是获取子组件的名称(并非原生,比如lk-header)
        this.isVertical = this.$children.some(child => ['lk-header', 'lk-footer'].includes(child.$options.name));
    },
    data() {
        return {
            isVertical: true
        };
    }
}
</script>

<style lang="scss">
    .lk-container {
        display: flex;
        flex-direction: row;
        flex: 1;
    }
    .lk-container.isVertical {
        flex-direction: column;
    }
</style>