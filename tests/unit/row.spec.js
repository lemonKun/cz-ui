import {shallowMount} from '@vue/test-utils';
import {expect} from 'chai';
import Row from '@/packages/layout/row.vue';
import Col from '@/packages/layout/col.vue';

describe('row.vue', () => {
    it('1.测试gutter是否生效', async () => {
        const wrapper = shallowMount(Row, {
            attachTo: document.body,
            stubs: {
                'lk-col': Col
            },
            slots: {
                default: '<lk-col></lk-col>'
            },
            propsData: {
                gutter: 20
            }
        });
        expect(wrapper.vm.$el.querySelector('.lk-row').style.marginRight).to.eq('-10px');       
        expect(wrapper.vm.$el.querySelector('.lk-row').style.marginLeft).to.eq('-10px');  
        // 还需要等待父组件(lk-row)渲染完毕后，再测试子组件(lk-col)
        await wrapper.vm.$nextTick();
        let col = wrapper.vm.$el.getElementsByClassName('lk-col')[0];
        expect(col.style.paddingLeft).to.eq('10px');
        expect(col.style.paddingRight).to.eq('10px');
    })
    it('2.测试justify属性', async () => {
        const wrapper = shallowMount(Row, {
            attachTo: document.body,
            stubs: {
                'lk-col': Col
            },
            slots: {
                default: '<lk-col></lk-col>'
            },
            propsData: {
                justify: 'start'
            }
        })
        let row = wrapper.vm.$el.querySelector('.lk-row');
        expect(row.style.justifyContent).to.eq('flex-start');
        wrapper.setProps({justify: 'center'});
        await wrapper.vm.$nextTick();
        expect(row.style.justifyContent).to.eq('center');
        wrapper.setProps({justify: 'end'});
        await wrapper.vm.$nextTick();
        expect(row.style.justifyContent).to.eq('flex-end');
        wrapper.setProps({justify: 'space-between'});
        await wrapper.vm.$nextTick();
        expect(row.style.justifyContent).to.eq('space-between');
        wrapper.setProps({justify: 'space-around'});
        await wrapper.vm.$nextTick();
        expect(row.style.justifyContent).to.eq('space-around');
})
})