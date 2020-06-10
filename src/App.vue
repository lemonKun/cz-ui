<template>
    <div id="app">
        <!-- 默认按钮  -->
        <cz-button>默认按钮</cz-button>
        <!-- 带类型的按钮 -->
        <cz-button type="primary">主要按钮</cz-button>
        <cz-button type="warning">警告按钮</cz-button>
        <cz-button type="danger">危险按钮</cz-button>
        <cz-button type="success">成功按钮</cz-button>
        <cz-button type="info">信息按钮</cz-button>
        <br><br>
        <!-- 带icon的按钮 -->
        <cz-button type="primary" icon="sousuo" @click="onBtnClick($event)">带图标</cz-button>
        <!-- loading状态按钮 -->
        <cz-button type="danger" loading>加载中</cz-button>
        <br><br>
        <!-- 按钮组 组件 -->
        <cz-button-group>
            <cz-button type="primary" icon="houtuishangyige">上一页</cz-button>
            <cz-button type="primary" icon="qianjinxiayige" icon-position="right">下一页</cz-button>
        </cz-button-group>
        <br><br>
        <!-- icon组件 -->
        <cz-icon icon="houtuishangyige"></cz-icon>
        <cz-icon icon="qianjinxiayige"></cz-icon>
        <cz-icon icon="sousuo"></cz-icon>
        <cz-icon icon="dengdai-"></cz-icon>
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
