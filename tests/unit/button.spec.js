import {shallowMount} from '@vue/test-utils';
import {expect} from 'chai';

import Button from '@/packages/button.vue';
import Icon from '@/packages/icon.vue';

describe('button.vue', () => {
    // TDD测试方式
    it('1.测试button能否正常传入slot', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'test-lk-ui-span-name'
            }
        })
        expect(wrapper.text()).to.eq('test-lk-ui-span-name');
    })
    it('2.测试icon传入是否能正常显示', () => {
        const wrapper = shallowMount(Button, {
            stubs: {
                'lk-icon': Icon
            },
            propsData: {
                icon: 'sousuo'
            }
        })
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-sousuo')
    })
    it('3.测试loading时，icon按钮是禁用状态', () => {
        const wrapper = shallowMount(Button, {
            stubs: {
                'lk-icon': Icon
            },
            propsData: {
                loading: true
            }
        })
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-dengdai-');
        expect(wrapper.find('button').attributes('disabled')).to.eq('disabled')
    })
    it('4.测试按钮能否正常点击', () => {
        const wrapper = shallowMount(Button, {
            stubs: ['lk-icon'] //不去渲染icon 如果打印wrapper.vm.$el则可以看到生成虚拟的lk-icon-stub标签
        })
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted('click').length).to.eq(1);
    })
    it('5.按钮传入iconPosition能否正常显示', async () => {
        const wrapper = shallowMount(Button, {
            attachTo: document.body,
            stubs: {
                'lk-icon': Icon
            },
            slots: {
                default: 'have-icon-position-attribute-span-name'
            },
            propsData: {
                iconPosition: 'right',
                icon: 'sousuo'
            }
        })
        let element = wrapper.vm.$el.getElementsByTagName('span')[0];
        expect(getComputedStyle(element).order).to.eq('1');
        wrapper.setProps({iconPosition: 'left'});
        //因为是异步的修改数据，所以在设置props的时候，需要使用$nextTick，在下一个事件环中取值
        await wrapper.vm.$nextTick();
        expect(getComputedStyle(element).order).to.eq('2');
    })
})