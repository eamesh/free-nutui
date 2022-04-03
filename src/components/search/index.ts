import { Widget } from 'free-core/lib/types/core/src/interface';
import Search from './src/Search';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiSearchWidget: Widget = {
  name: '搜索',
  key: 'search',
  thumb: Thumb,
  component: markRaw(Search),
  allowCount: 10
};

export default NutuiSearchWidget;
