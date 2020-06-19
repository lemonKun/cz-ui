<template>
    <div class="lk-row-wrap">
        <div class="lk-row" :style="rowStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lk-row',
    props: {
        gutter: {
            type: Number,
            default: 0
        },
        justify: {
            type: String,
            default: '',
            validator(type) {
                if(type && !['start', 'end', 'center', 'space-around', 'space-between'].includes(type)) {
                    console.error('传入的类型必须为start、end、center、space-around、space-between中的一种!');
                }
                return true;
            }
        }
    },
    mounted() {
        this.$children && this.$children.forEach(child => {
            child.gutter = this.gutter;
        })
    },
    computed: {
        rowStyle() {
            let style = {};
            if(this.gutter) {
                style = {
                    ...style,
                    marginLeft: -this.gutter / 2 + 'px',
                    marginRight: -this.gutter / 2 + 'px'
                }
            }
            if(this.justify) {
                let key = ['start', 'end'].includes(this.justify) ? 'flex-' + this.justify : this.justify;
                style = {
                    ...style,
                    justifyContent: key
                }
            }
            return style;
        }
    }
}
</script>

<style lang="scss">
.lk-row-wrap {
    width: 100%;
    overflow: hidden;
}
.lk-row {
    display: flex;
    flex-wrap: wrap;
}
</style>