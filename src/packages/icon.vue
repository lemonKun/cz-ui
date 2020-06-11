<template>
    <svg class="lk-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script>
import '../styles/icon';

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
.lk-icon {
    width: 25px; height: 25px;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
}
</style>