import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';

const install = (Vue) => {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
    Vue.component(ButtonGroup.name, ButtonGroup);
}

//如果通过script标签引入的话，则自动执行install任务
if(typeof window.Vue !== 'undefined') {
    install(Vue); 
}

export default {
    install
}