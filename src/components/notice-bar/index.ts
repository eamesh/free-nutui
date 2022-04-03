import { Widget } from 'free-core/lib/types/core/src/interface';
import NoticeBar from './src/NoticeBar';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiNoticeBarWidget: Widget = {
  name: '公告栏',
  key: 'search',
  thumb: Thumb,
  component: markRaw(NoticeBar),
  allowCount: 10
};

export default NutuiNoticeBarWidget;
