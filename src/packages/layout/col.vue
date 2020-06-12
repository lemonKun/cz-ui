<template>
    <div class="lk-col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'lk-col',
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        },
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object]
    },
    computed: {
        colClass() {
            //统一管理样式
            let classes = [];
            classes.push(`lk-col-${this.span}`);

            if(this.offset) {
                classes.push(`lk-col-offset-${this.offset}`);
            }
            //实现响应式变化
            ['xs', 'sm', 'md', 'lg', 'xl'].forEach(type => {
                if(typeof this[type] === 'object') {
                    let {span, offset} = this[type];
                    span && classes.push(`lk-col-${type}-${span}`); //lk-col-xs-1
                    offset && classes.push(`lk-col-${type}-offset-${offset}`);//lk-col-xs-offset-1
                }else {
                    this[type] && classes.push(`lk-col-${type}-${this[type]}`);
                }
            })
            return classes;
        },
        colStyle() {
            let style = {};
            if(this.gutter) {
                style = {
                    ...style,
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            }
            return style;
        }
    },
    data() {
        return {
            gutter: 0
        };
    }
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';
//循环24次
.lk-col {
    @for $i from 1 through 24 {
        &-#{$i} {
            width: $i / 24 * 100%;
        }
    }
}
.lk-col-offset {
    @for $i from 1 through 24 {
        &-#{$i} {
            margin-left: $i / 24 * 100%;
        }
    }
}
@include res(xs) {
    @for $i from 1 through 24 {
        // lk-col-xs-1
        .lk-col-xs-#{$i} {
            width: $i / 24 * 100%;
        }
        // lk-col-xs-offset-1
        .lk-col-xs-offset-#{$i} {
            width: $i / 24 * 100%;
        }
    }
}
@include res(sm) {
    @for $i from 1 through 24 {
        // lk-col-sm-1
        .lk-col-sm-#{$i} {
            width: $i / 24 * 100%;
        }
        // lk-col-sm-offset-1
        .lk-col-sm-offset-#{$i} {
            width: $i / 24 * 100%;
        }
    }
}
@include res(md) {
    @for $i from 1 through 24 {
        // lk-col-md-1
        .lk-col-md-#{$i} {
            width: $i / 24 * 100%;
        }
        // lk-col-md-offset-1
        .lk-col-md-offset-#{$i} {
            width: $i / 24 * 100%;
        }
    }
}
@include res(lg) {
    @for $i from 1 through 24 {
        // lk-col-lg-1
        .lk-col-lg-#{$i} {
            width: $i / 24 * 100%;
        }
        // lk-col-lg-offset-1
        .lk-col-lg-offset-#{$i} {
            width: $i / 24 * 100%;
        }
    }
}
@include res(xl) {
    @for $i from 1 through 24 {
        // lk-col-xl-1
        .lk-col-xl-#{$i} {
            width: $i / 24 * 100%;
        }
        // lk-col-xl-offset-1
        .lk-col-xl-offset-#{$i} {
            width: $i / 24 * 100%;
        }
    }
}


</style>