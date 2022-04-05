import { defineComponent, onMounted, ref } from 'vue';
import { MenuOption, NButton, NLayout, NLayoutHeader, NLayoutSider, NMenu, NSpace, useDialog } from 'naive-ui';
import { Free, FreeLayout, FreePageWidget, FreeTitleTextWidget, FreeWhiteHeightWidget, FreeWidgetsManageWidget } from 'free-core';
import { AsideGroup, PageDataSchemas } from 'free-core/lib/types/core/src/interface';
import NutuiImageAdWidget from './components/image-ad';
import NutuiImageNavWidget from './components/image-nav';
import NutuiSearchWidget from './components/search';
import NutuiNoticeBarhWidget from './components/notice-bar';
import NutuiVideoPlayerWidget from './components/video-player';
import NutuiNavigationWidget from './components/navigation';
import NutuiGoodsCardWidget from './components/goods-card';

import 'free-core/lib/style.css';

const asideGroups: AsideGroup[] = [
  {
    title: '基础组件',
    key: 'base',
    children: [
      FreeTitleTextWidget,
      FreeWhiteHeightWidget,
      NutuiImageAdWidget,
      NutuiImageNavWidget,
      NutuiSearchWidget,
      NutuiNoticeBarhWidget,
      NutuiVideoPlayerWidget,
      NutuiNavigationWidget
    ]
  },
  {
    title: '营销组件',
    key: 'func',
    children: [
      NutuiGoodsCardWidget
    ]
  }
];

Free.widgets = asideGroups;

export default defineComponent({
  name: 'App',

  setup () {
    const freeRef = ref();
    const dialog = useDialog();

    const menus: MenuOption[] = [
      {
        label: '装修',
        key: 'diy'
      }
    ];

    function handleClick () {
      dialog.success({
        title: '提示',
        content: '请打开console预览数据',
        positiveText: '预览',
        onPositiveClick: () => {
          console.info('%c=====> getPageData:', 'color: #43bb88;font-size: 12px;font-weight: bold;text-decoration: underline;', freeRef.value.getPageData());
          const datas = freeRef.value.getPageData() as any;
          const page = datas.page.map((item: any) => {
            return {
              key: item.widgetKey,
              data: item.model
            };
          });
          const pageData: any = {
            page
          };
          Object.values(datas.core).forEach((item: any) => {
            pageData[item.widgetKey] = item.model || {};
          });

          console.log(JSON.stringify(pageData));
        }
      });
      console.log(freeRef.value);
    }

    function handleSetDefaultPageData () {
      const data: PageDataSchemas = {
        page: [
          {
            id: 1,
            ...NutuiSearchWidget,
            data: {}
          },
          {
            id: 2,
            ...NutuiNavigationWidget,
            data: {}
          },
          {
            id: 3,
            ...NutuiNoticeBarhWidget,
            data: {}
          },
          {
            id: 4,
            ...NutuiImageAdWidget,
            data: {}
          },
          {
            id: 5,
            ...NutuiImageNavWidget,
            data: {}
          },
          {
            id: 6,
            ...FreeWhiteHeightWidget,
            data: {
              type: 'empty',
              empty: {
                height: 8
              },
              line: {
                style: 'solid',
                padding: '0',
                color: '#e5e5e5'
              }
            }
          },
          {
            id: 7,
            ...FreeTitleTextWidget,
            data: {
              bottomDivider: false,
              style: {
                backgroundColor: '#fff'
              },
              title: {
                text: '默认标题',
                aligin: 'left',
                style: {
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#323233'
                }
              },
              description: {
                text: '默认描述',
                style: {
                  fontSize: '12px',
                  fontWeight: '400',
                  color: '#969799'
                }
              }
            }
          },
          {
            id: 8,
            ...FreeWhiteHeightWidget,
            data: {
              type: 'empty',
              empty: {
                height: 8
              },
              line: {
                style: 'solid',
                padding: '0',
                color: '#e5e5e5'
              }
            }
          },
          {
            id: 9,
            ...NutuiVideoPlayerWidget,
            data: {}
          },
          {
            id: 10,
            ...FreeWhiteHeightWidget,
            data: {
              type: 'empty',
              empty: {
                height: 8
              },
              line: {
                style: 'solid',
                padding: '0',
                color: '#e5e5e5'
              }
            }
          },
          {
            id: 11,
            ...FreeTitleTextWidget,
            data: {
              bottomDivider: false,
              style: {
                backgroundColor: '#fff'
              },
              title: {
                text: '推荐商品',
                aligin: 'left',
                style: {
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#323233'
                }
              },
              description: {
                text: '',
                style: {
                  fontSize: '12px',
                  fontWeight: '400',
                  color: '#969799'
                }
              }
            }
          },
          {
            id: 12,
            ...NutuiGoodsCardWidget,
            data: {}
          },
          {
            id: 13,
            ...NutuiGoodsCardWidget,
            data: {}
          }
        ],
        core: [
          {
            ...FreePageWidget,
            data: {
              title: '默认页面',
              description: '',
              backgroundColor: '#f7f8fa'
            }
          },
          {
            ...FreeWidgetsManageWidget,
            data: {
              title: '默认页面',
              description: '',
              backgroundColor: '#f7f8fa'
            }
          }
        ]
      };

      console.log(freeRef.value);
      freeRef.value.setPageData(data);
    }

    onMounted(() => {
      // handleSetDefaultPageData();
    });

    return {
      menus,
      freeRef,
      handleClick,
      handleSetDefaultPageData
    };
  },

  render () {
    const {
      handleClick,
      handleSetDefaultPageData
    } = this;

    return (
      <NLayout position="absolute">
        <NLayoutHeader style="height: 56px; padding: 0 24px;" bordered>
          <NSpace justify='center' align='center' style={{ height: '100%' }}>
            <NSpace size={[50, 0]}>
              <NButton type='info' ghost style={{ padding: '0 40px' }} onClick={handleSetDefaultPageData}>默认</NButton>
              <NButton type='primary' secondary style={{ padding: '0 40px' }} onClick={handleClick}>预览</NButton>
              <NButton type='primary' style={{ padding: '0 40px' }} onClick={handleClick}>保存</NButton>
            </NSpace>
          </NSpace>
        </NLayoutHeader>
        <NLayout has-sider position="absolute" style="top: 52px;">
          <NLayoutSider
            width={76}
            bordered
          >
            <NMenu
              defaultValue={'diy'}
              options={this.menus}
              collapsed-width={76}
              rootIndent={24}
            >
            </NMenu>
          </NLayoutSider>
          <NLayout>
            <FreeLayout ref="freeRef" asideGroup />
          </NLayout>
        </NLayout>
      </NLayout>
    );
  }
});
