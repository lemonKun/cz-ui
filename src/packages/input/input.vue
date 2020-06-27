<template>
    <div class="lk-input" :class="inputClass" @mouseenter="enterInput = true" @mouseleave="enterInput = false">
        <lk-icon v-if="prefixIcon" :icon="prefixIcon"></lk-icon>
        <lk-icon v-if="suffixIcon" :icon="suffixIcon"></lk-icon>
        <input :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
            :value="value" 
            :placeholder="placeholder" 
            :name="name"
            :disabled="disabled"
            @focus="inputFocus = true"
            @blur="inputFocus = false"
            @input="$emit('input', $event.target.value)"
            ref="input">
        <!-- 不会失去焦点 -->
        <lk-icon v-if="clearableVisible && !disabled"
            class="icon-hover" 
            icon="ziyuanxhdpi"
            @click.native="$emit('input', '')"
            @mousedown.native.prevent></lk-icon>
        <!-- 失去焦点后再获取焦点 -->
        <lk-icon v-if="showPassword && value && !disabled"
            class="icon-hover" 
            icon="dengdai-"
            @click.native="changePasswordStatus"></lk-icon>
    </div>
</template>

<script>
export default {
    name: 'lk-input',
    props: {
        name: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: '请输入'
        },
        value: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        prefixIcon: {
            type: String,
            default: ''
        },
        suffixIcon: {
            type: String,
            default: ''
        }
    },
    computed: {
        inputClass() {
            let classes = [];
            if(this.clearable || this.showPassword || this.suffixIcon) {
                classes.push("lk-input-suffix-icon");
            }
            if(this.prefixIcon) {
                classes.push("lk-input-prefix-icon");
            }
            return classes;
        },
        clearableVisible() {
            if(this.inputFocus) {
                //获取焦点时图标显示逻辑
                return this.clearable && this.value;
            }else {
                return this.clearable && this.value && this.enterInput;
            }
        }
    },
    data() {
        return {
            enterInput: false,
            inputFocus: false,
            passwordVisible: false
        };
    },
    methods: {
        changePasswordStatus() {
            this.passwordVisible = !this.passwordVisible;
            this.$nextTick(() => this.$refs.input.focus());
        }
    }
}
</script>
<style lang="scss">
@import '@//styles/_var.scss';

.lk-input {
    display: inline-flex;
    position: relative;
    cursor: pointer;
    input {
        cursor: pointer;
        transition: border 0.2s cubic-bezier(.645,.045,.355,1);
        padding: 8px;
        width: 180px;
        height: 40px;
        font-size: 14px;
        border-radius: $border-radius;
        border: 1px solid #dcdfe6;
        &::-webkit-input-placeholder {
            color: #c0c4cc;
        }
        &:hover {
            border: 1px solid #c0c4cc;
        }
        &:focus {
            border: 1px solid $primary;
            outline: none;
            transition: border 0.2s cubic-bezier(.645,.045,.355,1);
        }
        &[disabled] {
            border: 1px solid #dcdfe6;
            cursor: not-allowed;
            background-color: #f5f7fa;
        }
    }
}
.lk-input-suffix-icon {
    .icon-hover {
        position: absolute;
        top: 12px;
        right: 8px;
        width: 16px;
        height: 16px;
        color: #bdc1c5;
        transition: color .2s;
        &:hover {
            color: #808183;
        }
    }
    .lk-icon {
        position: absolute;
        top: 12px;
        right: 8px;
        width: 16px;
        height: 16px;
        color: #bdc1c5;
        transition: color .2s;
    }
    input {
        padding-right: 26px;
    }
}
.lk-input-prefix-icon {
    .lk-icon {
        position: absolute;
        top: 12px;
        left: 8px;
        width: 16px;
        height: 16px;
        color: #bdc1c5;
        transition: color .2s;
    }
    input {
        padding-left: 26px;
    }
}
</style>