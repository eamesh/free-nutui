import { Widget } from 'free-core/lib/types/core/src/interface';
import VideoPlayer from './src/VideoPlayer';
import Thumb from './assets/thumb.png';
import { markRaw } from 'vue';

const NutuiVideoPlayerWidget: Widget = {
  name: '视频播放器',
  key: 'video-player',
  thumb: Thumb,
  component: markRaw(VideoPlayer),
  allowCount: 10
};

export default NutuiVideoPlayerWidget;
