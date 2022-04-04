import { FreeActionTitle, widgetDataProps } from 'free-core';
import { NText } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import './style.scss';

export interface NutuiVideoPlayerProps {
  keyword: string;
}

const nutuiVideoPlayerProps = widgetDataProps<NutuiVideoPlayerProps>({
  keyword: ''
});

export default defineComponent({
  name: 'Search',

  props: nutuiVideoPlayerProps,

  setup () {
    const model = ref({
      source: {
        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
        type: 'video/mp4'
      },
      options: {
        controls: true
      }
    });

    function renderAction () {
      return (
        <>
          <FreeActionTitle title='视频' />
          <div class='free-action-form'>
            <NText>功能待完善</NText>
          </div>
        </>
      );
    }

    return {
      model,
      renderAction
    };
  },

  render () {
    return (
      <div class='video-player'>
        <nut-video
          source={this.model.source}
          options={this.model.options}
         >
        </nut-video>
      </div>
    );
  }
});
