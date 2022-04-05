import { Widget } from 'free-core/lib/types/core/src/interface';
import ImageNav, { NutuiImageNavProps } from './src/ImageNav';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiImageNavWidget: Widget<NutuiImageNavProps> = {
  name: '图文导航',
  key: 'image-nav',
  thumb: Thumb,
  component: markRaw(ImageNav),
  allowCount: 10,
  data: {
    type: 'image',
    imageType: 'fixed',
    direction: 'horizontal',
    style: {
      backgroundColor: '#FFFFFF',
      color: '#333333',
      borderColor: '#f5f6f7'
    },
    max: 12,
    columnNum: 3,
    reverse: false,
    navs: [
      {
        title: '导航一',
        thumb: 'dongdong',
        redirect: {}
      },
      {
        title: '导航二',
        thumb: 'dongdong',
        redirect: {}
      },
      {
        title: '导航三',
        thumb: 'dongdong',
        redirect: {}
      },
      {
        title: '导航四',
        thumb: 'dongdong',
        redirect: {}
      }
    ]
  }
};

export default NutuiImageNavWidget;
