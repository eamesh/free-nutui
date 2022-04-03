import { defineComponent } from 'vue';
import { GlobalThemeOverrides, NConfigProvider, NLayout, NLayoutHeader, NLayoutSider } from 'naive-ui';
import { Free, FreeLayout, FreeTitleTextWidget, FreeWhiteHeightWidget } from 'free-core';
import { AsideGroup } from 'free-core/lib/types/core/src/interface';
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
    const themeOverrides: GlobalThemeOverrides = {
      common: {
        fontSize: '12px',
        fontSizeSmall: '12px',
        fontSizeMedium: '12px'
      }
    };

    return {
      themeOverrides
    };
  },

  render () {
    return (
      <NConfigProvider
        themeOverrides={this.themeOverrides}
      >
        <NLayout
          position='absolute'
          hasSider
        >
          <NLayoutHeader style={{
            height: '55px'
          }}>
            header
          </NLayoutHeader>
          <NLayoutSider
            width={76}
          >
            sider
          </NLayoutSider>
          <FreeLayout asideGroup />
        </NLayout>
      </NConfigProvider>
    );
  }
});
