<template>
    <div class="lk-progress">
        <div class="bar">
            <div class="bar-outside" :style="{height: strokeWidth + 'px'}">
                <div class="bar-inside" :style="barStyle"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lk-progress',
    props: {
        strokeWidth: {
            type: Number,
            default: 6
        },
        percentage: {
            type: Number,
            default: 0,
            required: true
        },
        color: {
            type: String,
            default: '#409EFF'
        }
    },
    computed: {
        barStyle() {
            let style = {};
            style.width = this.percentage + '%';
            style.backgroundColor = this.color;
            return style;
        }
    }
}
</script>

<style lang="scss">
    .bar-outside {
        border-radius: 100px;
        background-color: #eee;
        position: relative;
        vertical-align: middle;
    }
    .bar-inside {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        transition: width .6s ease;
    }
</style>