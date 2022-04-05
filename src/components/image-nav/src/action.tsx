import {
  Add16Regular
  // Pin24Regular,
  // SlideMultiple24Regular
} from '@vicons/fluent';
import { FreeActionTitle } from 'free-core';
import { NButton, NColorPicker, NDivider, NFormItem, NIcon, NRadio, NRadioGroup, NSelect, NSpace, NSwitch, NText } from 'naive-ui';
import { ref, unref } from 'vue';
import NavItem from './component/NavItem';
import { NutuiImageNavProps } from './ImageNav';

export const useAction = (props: any) => {
  const model = ref<NutuiImageNavProps>(props.data);

  const modelUnref = unref(model);

  function handleAddNav () {
    modelUnref.navs.push({
      title: '',
      thumb: '',
      redirect: {}
    });
  }

  function renderAction () {
    return (
      <>
        <FreeActionTitle title='图片导航' />
        <div class='image-nav-render'>
          <div class='free-action-render'>
            <NText depth={3}>最多添加 {modelUnref.max} 个导航，拖动选中的导航可对其排序</NText>
          </div>
          <NSpace vertical class='secondary-container nav-container'>
            {
              modelUnref.navs.map((item) => {
                return <NavItem type={modelUnref.type} v-model:data={item} />;
              })
            }
            {
              modelUnref.navs.length < modelUnref.max
                ? (
                    <NButton type='primary' class='nav-add' ghost onClick={handleAddNav}>{{
                      icon: () => (
                        <NIcon>
                          <Add16Regular />
                        </NIcon>
                      ),
                      default: () => '添加图文导航'
                    }}</NButton>
                  )
                : null
            }
          </NSpace>
          <div class='free-action-form free-action-render'>
            <NDivider />
            <NFormItem label='内容翻转' labelPlacement='left'>
              <NSpace align='center' justify='space-between' style={{ width: '100%' }}>
                <NText class='action-item-label' strong style={{ marginBottom: 0 }}></NText>
                <NSwitch v-model:value={modelUnref.reverse} />
              </NSpace>
            </NFormItem>
            <NFormItem label='图片样式' labelPlacement='left'>
              <NSpace align='center' justify='space-between' style={{ width: '100%' }}>
                <NText class='action-item-label' strong style={{ marginBottom: 0 }}>{ modelUnref.type === 'image' ? '图片导航' : '文字导航' }</NText>
                <NRadioGroup v-model:value={modelUnref.type} name='type'>
                  <NSpace>
                    <NRadio key='image' value='image'>
                      <NText>图文导航</NText>
                    </NRadio>
                    <NRadio key='text' value='text'>
                      <NText>文字导航</NText>
                    </NRadio>
                  </NSpace>
                </NRadioGroup>
              </NSpace>
            </NFormItem>
            <NFormItem label='列数' labelPlacement='left'>
              <NSpace align='center' justify='space-between' style={{ width: '100%' }}>
                <NText class='action-item-label' strong style={{ marginBottom: 0 }}></NText>
                <NSelect v-model:value={modelUnref.columnNum} style={{ width: '240px' }} options={[...Array(4)].map((_, i) => {
                  const num = i + 3;
                  return {
                    label: `${num}个导航`,
                    value: num
                  };
                })} />
              </NSpace>
            </NFormItem>
            {
              modelUnref.type === 'image'
                ? (
                    <NFormItem label='排列方向' labelPlacement='left'>
                      <NSpace align='center' justify='space-between' style={{ width: '100%' }}>
                        <NText class='action-item-label' strong style={{ marginBottom: 0 }}>{ modelUnref.direction === 'horizontal' ? '横向' : '纵向' }</NText>
                        <NRadioGroup v-model:value={modelUnref.direction} name='direction'>
                          <NSpace>
                            <NRadio key='horizontal' value='horizontal'>
                              <NText>横向</NText>
                            </NRadio>
                            <NRadio key='vertical' value='text'>
                              <NText>纵向</NText>
                            </NRadio>
                          </NSpace>
                        </NRadioGroup>
                      </NSpace>
                    </NFormItem>
                  )
                : null
            }
            {/* <NFormItem label='图片样式' labelPlacement='left'>
              <NSpace align='center' justify='space-between' class='nav-image-type' style={{ width: '100%' }}>
                <NText class='action-item-label' strong style={{ marginBottom: 0 }}>{ modelUnref.imageType === 'fixed' ? '固定' : '横向滑动' }</NText>
                <NRadioGroup size='small' v-model:value={modelUnref.imageType}>
                  <NRadioButton key='fixed' value='fixed'>
                    <NIcon size={16}>
                      <Pin24Regular />
                    </NIcon>
                  </NRadioButton>
                  <NRadioButton key='slide' value='slide'>
                    <NIcon size={16}>
                      <SlideMultiple24Regular />
                    </NIcon>
                  </NRadioButton>
                </NRadioGroup>
              </NSpace>
            </NFormItem> */}
            <NFormItem label='背景颜色' labelPlacement='left'>
              <NSpace align='center' justify='space-between' class='nav-image-type' style={{ width: '100%' }}>
                <NText>{modelUnref.style.backgroundColor}</NText>
                <NSpace>
                  <NButton quaternary size='small'>重置</NButton>
                  <NColorPicker size='small' style={{ width: '80px' }} v-model:value={modelUnref.style.backgroundColor} />
                </NSpace>
              </NSpace>
            </NFormItem>
            <NFormItem label='文字颜色' labelPlacement='left'>
              <NSpace align='center' justify='space-between' class='nav-image-type' style={{ width: '100%' }}>
                <NText>{modelUnref.style.color}</NText>
                <NSpace>
                  <NButton quaternary size='small'>重置</NButton>
                  <NColorPicker size='small' style={{ width: '80px' }} v-model:value={modelUnref.style.color} />
                </NSpace>
              </NSpace>
            </NFormItem>
            <NFormItem label='边框颜色' labelPlacement='left'>
              <NSpace align='center' justify='space-between' class='nav-image-type' style={{ width: '100%' }}>
                <NText>{modelUnref.style.borderColor}</NText>
                <NSpace>
                  <NButton quaternary size='small'>重置</NButton>
                  <NColorPicker size='small' style={{ width: '80px' }} v-model:value={modelUnref.style.borderColor} />
                </NSpace>
              </NSpace>
            </NFormItem>
          </div>
        </div>
      </>
    );
  }

  return {
    model,
    renderAction
  };
};
