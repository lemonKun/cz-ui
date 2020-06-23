<template>
    <div class="lk-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'lk-button-group',
    mounted() {
        //里边只能存放button组件校验内部子节点是不是button，否则会报错
        // this.$el.children为获取其内部原生节点的名称
        let children = this.$el.children;
        for(let i = 0; i < children.length; i++) {
            console.assert(children[i].tagName === 'BUTTON', '子元素必须为lk-button')
        }
    }
}
</script>
<style lang="scss">
@import '@/styles/_var.scss';

.lk-button-group {
    display: inline-flex;
    vertical-align: middle;
    button {
        border-radius: 0;
        // 从第二个button开始向左合并1px的边框距离
        border: none;
        &:hover, &:active, &:focus {
            border: none;
        }
        &:not(:first-child) {
            margin-left: 1px;
        }
        &:first-child {
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
        }
        &:last-child {
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
    }
}
</style>