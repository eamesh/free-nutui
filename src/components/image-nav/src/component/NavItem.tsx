import { NButton, NCard, NDropdown, NIcon, NInput, NSpace, NText, NUpload } from 'naive-ui';
import { defineComponent, PropType, ref, watch } from 'vue';
import { ChevronDown20Regular, ChevronUp20Regular } from '@vicons/fluent';
import { ImageNavType } from '../ImageNav';

export interface NavItemData {
  title: string;
}

const navItemProps = {
  type: String as PropType<ImageNavType>,
  data: {
    type: Object as PropType<NavItemData>,
    default: () => {}
  }
};

export default defineComponent({
  name: 'NavItem',

  props: navItemProps,

  emits: ['onUpdate:data'],

  setup (props, { emit }) {
    const model = ref(props.data);
    const hoverState = ref(false);

    const dropdownOptions = ref([
      {
        label: '微页面',
        key: '1',
        children: [
          {
            label: '微页面及分类',
            key: '2'
          },
          {
            label: '店铺主页',
            key: '3'
          },
          {
            label: '个人中心',
            key: ' 4'
          }
        ]
      },
      {
        label: '商品',
        key: '5',
        children: [
          {
            label: '全部商品',
            key: '6'
          },
          {
            label: '商品及分组',
            key: '7'
          },
          {
            label: '购物车',
            key: ' 8'
          }
        ]
      }
    ]);

    watch(
      () => model.value,
      () => {
        emit('onUpdate:data', model.value);
      }
    );

    return {
      model,
      hoverState,
      dropdownOptions
    };
  },

  render () {
    const {
      type,
      model,
      hoverState,
      dropdownOptions
    } = this;

    return (
      <NCard size='small'>
        <NSpace>
          {
            type === 'image' ? <NUpload class='nav-upload' max={1} listType='image-card' /> : null
          }
          <NSpace vertical>
            <NSpace align='center'>
              <NText>标题</NText>
              <NInput size='small' v-model:value={model.title} placeholder={''} />
            </NSpace>
            <NSpace align='center'>
              <NText>链接</NText>
              <NDropdown options={dropdownOptions} trigger='click'>
                <NButton size='tiny' quaternary type='primary' {...{
                  onMouseoverCapture: () => {
                    console.log('over');
                    this.hoverState = true;
                  },
                  onMouseoutCapture: () => {
                    this.hoverState = false;
                  }
                }}>
                  选择跳转到页面
                  <NIcon>
                    { hoverState ? <ChevronUp20Regular /> : <ChevronDown20Regular /> }
                  </NIcon>
                </NButton>
              </NDropdown>
            </NSpace>
          </NSpace>
        </NSpace>
      </NCard>
    );
  }
});
