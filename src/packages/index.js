import Button from './button/button.vue';
import Icon from './icon/icon.vue';
import ButtonGroup from './button/button-group.vue';
import Row from './layout/row.vue';
import Col from './layout/col.vue';

import Aside from './container/aside.vue';
import Container from './container/container.vue';
import Footer from './container/footer.vue';
import Main from './container/main.vue';
import Header from './container/header.vue';

import Input from './input/input.vue';

const install = (Vue) => {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
    Vue.component(ButtonGroup.name, ButtonGroup);

    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);

    Vue.component(Input.name, Input);

    Vue.component(Aside.name, Aside);
    Vue.component(Container.name, Container);
    Vue.component(Footer.name, Footer);
    Vue.component(Main.name, Main);
    Vue.component(Header.name, Header);
}

//如果通过script标签引入的话，则自动执行install任务
if(typeof window.Vue !== 'undefined') {
    install(Vue); 
}

export default {
    install
}