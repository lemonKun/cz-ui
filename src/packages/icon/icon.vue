<template>
    <svg class="lk-icon" :class="{active: icon === 'dengdai-' ? true : false}" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script>
import '@/styles/icon';

export default {
    name: 'lk-icon',
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="css">
@keyframes changDeg{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.active {
    animation:changDeg 2s linear 0.2s infinite;
}
.lk-icon {
    width: 25px; height: 25px;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
}
</style>