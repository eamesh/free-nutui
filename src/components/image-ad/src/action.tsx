import { FreeActionTitle } from 'free-core';
import { NButton, NDivider, NForm, NFormItem, NIcon, NInput, NRadioButton, NRadioGroup, NSlider, NSpace, NText, NThing } from 'naive-ui';
import { ref, unref } from 'vue';
import { Add16Regular, AppRecent20Regular, Copy20Regular, BorderOutside24Regular, Circle24Regular } from '@vicons/fluent';

export const useAction = () => {
  const model = ref({
    type: 'default',
    imageType: 'regular',
    radioType: 'square',
    pagePadding: 0,
    imagePadding: 0
  });
  const modelUnref = unref(model);

  function renderAction () {
    return (
      <div>
        <FreeActionTitle title='图片广告' />
        <div class='image-ad-render'>
          <NForm>
            <div class='free-action-render'>
              <NFormItem label='选择模板'>
                {{
                  label: () => (
                    <NSpace>
                      <NText depth={3}>选择模板</NText>

                      <NText>默认</NText>
                    </NSpace>
                  ),
                  default: () => (
                    <>
                      <NRadioGroup size='small' v-model:value={modelUnref.type}>
                        <NRadioButton class="type-button" key="default" value="default">
                          <NIcon size={24}>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M168.76 220.88h684.95v420H168.76v-420z m-1 490.17h684.95v80.41H167.76v-80.41z m395.86-358.5l-153.4 178.37h246.8l-153.4-178.37zM327 321.5c-29.55 0-53.5 23.95-53.5 53.5s23.95 53.5 53.5 53.5 53.5-23.95 53.5-53.5-23.95-53.5-53.5-53.5z" />
                            </svg>
                          </NIcon>
                        </NRadioButton>
                        <NRadioButton class="type-button" key="dot" value="dot">
                          <NIcon size={24}>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M168.86 265.88h682.86v359.93H168.86V265.88z m115.37 423.58c20.92 0 37.88 17.01 37.88 37.99s-16.96 37.99-37.88 37.99-37.88-17.01-37.88-37.99 16.96-37.99 37.88-37.99z m143.63 0c20.92 0 37.88 17.01 37.88 37.99s-16.96 37.99-37.88 37.99-37.88-17.01-37.88-37.99 16.96-37.99 37.88-37.99z m152.52-0.06c20.92 0 37.88 17.01 37.88 37.99s-16.96 37.99-37.88 37.99-37.88-17.01-37.88-37.99 16.96-37.99 37.88-37.99z m152.13-0.03c20.92 0 37.88 17.01 37.88 37.99s-16.96 37.99-37.88 37.99-37.88-17.01-37.88-37.99 16.96-37.99 37.88-37.99zM562.52 367.53L409.59 545.87h305.86L562.52 367.53zM327 336c-29.27 0-53 23.73-53 53s23.73 53 53 53 53-23.73 53-53-23.73-53-53-53z" />
                            </svg>
                          </NIcon>
                        </NRadioButton>
                        <NRadioButton class="type-button" key="small" value="small">
                          <NIcon size={24}>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M125.39 298.59h631.38v428.43H125.39V298.59z m404.75 154.46L372.3 633.86h315.69L530.14 453.05z m294.48-154.12h72.65v428.43h-72.65V298.93zM275.5 400.05c-29.27 0-53 23.73-53 53s23.73 53 53 53 53-23.73 53-53-23.73-53-53-53z" />
                              </svg>

                          </NIcon>
                        </NRadioButton>
                        <NRadioButton class="type-button" key="block" value="block">
                          <NIcon size={24}>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M142.38 350.53h319.1v334.72h-319.1zM548.76 350.53h152.75v334.72H548.76zM791.64 350.53h86.34v334.72h-86.34z" />
                            </svg>
                          </NIcon>
                        </NRadioButton>
                        <NRadioButton class="type-button" key="rectangle" value="rectangle">
                          <NIcon size={24}>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M920.95 675.29h-791.4V344.92h791.4v330.37zM364.54 485.47h-158.9v52.47h158.9v-52.47z m236.77 0h-158.9v52.47h158.9v-52.47z m231.69 0H674.1v52.47H833v-52.47z" />
                            </svg>
                          </NIcon>
                        </NRadioButton>
                      </NRadioGroup>
                    </>
                  )
                }}
              </NFormItem>
              <NDivider style={{ marginTop: 0 }} />
              <NThing>
                {{
                  header: () => '添加图片',
                  description: () => (
                    <NSpace vertical>
                      <NText>支持长按识别企微/个人二维码，不配置跳转链接时生效。小程序版本更新后支持(微商城v2.81.4，零售v3.34.5)</NText>
                      <NText depth={3}>最多添加 10 个广告，鼠标拖拽调整广告顺序，建议宽度750像素</NText>
                    </NSpace>
                  )
                }}
              </NThing>
            </div>

            <NSpace vertical class='carousel-container'>
              <NButton type='primary' class='carousel-add' ghost>{{
                icon: () => (
                  <NIcon>
                    <Add16Regular />
                  </NIcon>
                ),
                default: () => '添加背景图'
              }}</NButton>
            </NSpace>

            <div class='free-action-render'>
              <NDivider />
              <NFormItem label='图片样式' labelPlacement='left'>
                <NSpace align='center' justify='space-between' class='carousel-image-type' style={{ width: '100%' }}>
                  <NText class='action-item-label' strong style={{ marginBottom: 0 }}>{ modelUnref.imageType === 'regular' ? '常规' : '投影' }</NText>
                  <NRadioGroup size='small' v-model:value={modelUnref.imageType}>
                    <NRadioButton key='regular' value='regular'>
                      <NIcon size={16}>
                        <AppRecent20Regular />
                      </NIcon>
                    </NRadioButton>
                    <NRadioButton key='shadow' value='shadow'>
                      <NIcon size={16}>
                        <Copy20Regular />
                      </NIcon>
                    </NRadioButton>
                  </NRadioGroup>
                </NSpace>
              </NFormItem>
              <NFormItem label='图片倒角' labelPlacement='left'>
                <NSpace align='center' justify='space-between' class='carousel-image-type' style={{ width: '100%' }}>
                  <NText class='action-item-label' strong style={{ marginBottom: 0 }}>{ modelUnref.radioType === 'square' ? '直角' : '圆角' }</NText>
                  <NRadioGroup size='small' v-model:value={modelUnref.radioType}>
                    <NRadioButton key='square' value='square'>
                      <NIcon size={16}>
                        <BorderOutside24Regular />
                      </NIcon>
                    </NRadioButton>
                    <NRadioButton key='round' value='round'>
                      <NIcon size={16}>
                        <Circle24Regular />
                      </NIcon>
                    </NRadioButton>
                  </NRadioGroup>
                </NSpace>
              </NFormItem>
              <NFormItem label='页面边距' labelPlacement='left'>
                <NSpace align='center' justify='space-between' class='carousel-image-type' style={{ width: '100%' }}>
                  <NSlider min={0} style={{ width: '160px' }} v-model:value={modelUnref.pagePadding} />
                  <NInput style={{ width: '80px' }} placeholder={''} v-model:value={modelUnref.pagePadding} />
                </NSpace>
              </NFormItem>
              <NFormItem label='页面边距' labelPlacement='left'>
                <NSpace align='center' justify='space-between' class='carousel-image-type' style={{ width: '100%' }}>
                  <NSlider min={0} style={{ width: '160px' }} v-model:value={modelUnref.imagePadding} />
                  <NInput style={{ width: '80px' }} placeholder={''} v-model:value={modelUnref.imagePadding} />
                </NSpace>
              </NFormItem>
            </div>
          </NForm>
        </div>
      </div>
    );
  }

  return {
    model,
    renderAction
  };
};
