<template>
    <button class="cz-button" :class="btnClass" :disabled="loading" @click="$emit('click', $event)">
        <!-- 非loading的icon -->
        <cz-icon v-if="icon && !loading" :icon="icon" class="icon"></cz-icon>
        <!-- loading的icon -->
        <cz-icon v-if="loading" icon="dengdai-" class="icon"></cz-icon>
        <!-- 文本内容 -->
        <span v-if="this.$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'cz-button',
    props: {
        type: {
            type: String,
            default: '',
            validator(type) {
                if(type && !['warning', 'success', 'danger', 'info', 'primary'].includes(type)) {
                    console.error('type的类型必须为warging、success、danger、info、primary其中的一种');
                }
                return true;
            }
        },
        icon: {
            type: String,
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(iconPosition) {
                if(!['left', 'right'].includes(iconPosition)) {
                    console.error('iconPosition属性必须为left、right其中的一种');
                }
                return true;
            }
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        btnClass() {
            let classes = [];
            if(this.type) {
                classes.push(`cz-button-${this.type}`);
            }
            if(this.iconPosition) {
                classes.push(`cz-button-${this.iconPosition}`);
            }
            return classes;
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/_var.scss';
    $height: 42px;
    $font-size: 16px;
    $color: #606266;
    $border-color: #dcdfe6;
    $background: #ecf5ff;
    $active-color: #3a8ee6;
    .cz-button {
        border-radius: $border-radius;
        border: 1px solid $border-color;
        height: $height;
        font-size: $font-size;
        cursor: pointer;
        padding: 0 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
        outline: none;
        &:hover, &:focus {
            border-color: $border-color;
            background-color: $background;
        }
        &:active {
            color: $active-color;
            background-color: $background;
            border: 1px solid $active-color;
            
        }
        // 非disabled状态下按钮样式
        @each $type, $color in (primary: $primary, success: $success, 
            info: $info, warning: $warning, danger: $danger) {
            &-#{$type} {
                color: #fff;
                background-color: #{$color};
                border: 1px solid #{$color};
            }
        }
        @each $type, $color in (primary: $primary-hover, success: $success-hover, 
            info: $info-hover, warning: $warning-hover, danger: $danger-hover) {
                &-#{$type}:hover, &-#{$type}:focus{
                    color: #fff;
                    background-color: #{$color};
                    border: 1px solid #{$color};
                }
            }
        @each $type, $color in (primary: $primary-active, success: $success-active, 
            info: $info-active, warning: $warning-active, danger: $danger-active) {
                &-#{$type}:active {
                    color: #fff;
                    background-color: #{$color};
                    border: 1px solid #{$color};
                }
            }
        // disabled状态下按钮样式
        &[disabled], [disabled]:active {
            cursor: not-allowed;
            border: 1px solid $border-color;
            background-color: #eee;
            color: rgba(16, 16, 16, 0.3);
        }
        @each $type, $color in (primary: $primary-disabled, success: $success-disabled, 
        info: $info-disabled, warning: $warning-disabled, danger: $danger-disabled) {
            &-#{$type}[disabled], &-#{$type}[disabled]:active{
                cursor: not-allowed;
                color: #fff;
                background-color: #{$color};
                border: 1px solid #{$color};
            }
        }
        .icon {
            width: 16px;
            height: 16px;
        }
        &-left {
            span {order: 2; margin-left: 3px; margin-right: 0;};
            svg {order: 1};
        }
        &-right {
            span {order: 1; margin-left: 0; margin-right: 3px;};
            svg {order: 2};
        }
    }
</style>