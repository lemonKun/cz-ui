<template>
    <svg class="cz-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script>
import '../styles/icon';

export default {
    name: 'cz-icon',
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="css">
.cz-icon {
    width: 25px; height: 25px;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
}
</style>