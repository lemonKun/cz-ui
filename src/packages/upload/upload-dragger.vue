<template>
    <div class="upload-dragger"
        @drop.prevent="onDrop"
        @dragover.prevent
        @dragleave.prevent>
        <lk-icon icon="bianji"></lk-icon>
        <span>将文件拖拽到此区域即可</span>
    </div>
</template>
<script>
export default {
    methods: {
        onDrop(e) {
            this.$emit('file', e.dataTransfer.files);
        }
    }
}
</script>

<style lang="scss">
.upload-dragger {
    background-color: #eee;
    border: 1px solid dashed;
    width: 240px;
    height: 120px;
    line-height: 120px;
    border-radius: 10px;
    .lk-icon {
        height: 30px;
        width: 30px;
        // margin: 20px;
    }
}
</style>