import { Widget } from 'free-core/lib/types/core/src/interface';
import ImageAd from './src/ImageAd';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiImageAdWidget: Widget<any> = {
  name: '图片广告',
  key: 'image-ad',
  thumb: Thumb,
  component: markRaw(ImageAd),
  allowCount: 300
};

export default NutuiImageAdWidget;
