import { Widget } from 'free-core/lib/types/core/src/interface';
import ImageNav from './src/ImageNav';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiImageNavWidget: Widget<any> = {
  name: '图文导航',
  key: 'image-nav',
  thumb: Thumb,
  component: markRaw(ImageNav),
  allowCount: 10
};

export default NutuiImageNavWidget;
