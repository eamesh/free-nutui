import { Widget } from 'free-core/lib/types/core/src/interface';
import GoodsCard from './src/GoodsCard';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiGoodsCardWidget: Widget = {
  name: '电梯导航',
  key: 'goods-card',
  thumb: Thumb,
  component: markRaw(GoodsCard),
  allowCount: 10
};

export default NutuiGoodsCardWidget;
