import Button from './button/button.vue';
import Icon from './icon/icon.vue';
import ButtonGroup from './button/button-group.vue';
import Row from './layout/row.vue';
import Col from './layout/col.vue';

const install = (Vue) => {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
}

//如果通过script标签引入的话，则自动执行install任务
if(typeof window.Vue !== 'undefined') {
    install(Vue); 
}

export default {
    install
}