import { Widget } from 'free-core/lib/types/core/src/interface';
import Navigation from './src/Navigation';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiNavigationWidget: Widget<any> = {
  name: '电梯导航',
  key: 'navigation',
  thumb: Thumb,
  component: markRaw(Navigation),
  allowCount: 10
};

export default NutuiNavigationWidget;
