<template>
    <div id="app">
        <!-- 默认按钮  -->
        <lk-button>默认按钮</lk-button>
        <!-- 带类型的按钮 -->
        <lk-button type="primary">主要按钮</lk-button>
        <lk-button type="warning">警告按钮</lk-button>
        <lk-button type="danger">危险按钮</lk-button>
        <lk-button type="success">成功按钮</lk-button>
        <lk-button type="info">信息按钮</lk-button>
        <br><br>
        <!-- 带icon的按钮 -->
        <lk-button type="primary" icon="sousuo" @click="onBtnClick($event)">带图标</lk-button>
        <!-- loading状态按钮 -->
        <lk-button type="danger" loading>加载中</lk-button>
        <br><br>
        <!-- 按钮组 组件 -->
        <lk-button-group>
            <lk-button icon="houtuishangyige">上一页</lk-button>
            <lk-button icon="qianjinxiayige" icon-position="right">下一页</lk-button>
            <lk-button icon="qianjinxiayige" icon-position="right">下一页</lk-button>
            <lk-button icon="qianjinxiayige" icon-position="right">下一页</lk-button>
        </lk-button-group>
        <br><br>
        <!-- icon组件 -->
        <lk-icon icon="houtuishangyige"></lk-icon>
        <lk-icon icon="qianjinxiayige"></lk-icon>
        <lk-icon icon="sousuo"></lk-icon>
        <lk-icon icon="dengdai-"></lk-icon>
    </div>
</template>

<script>
export default {
    methods: {
        onBtnClick(e) {
            console.log(e)
        }
    }
};
</script>

<style lang="scss">
</style>
