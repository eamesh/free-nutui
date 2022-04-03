import { FreeActionTitle } from 'free-core';
import { NText } from 'naive-ui';
import { defineComponent } from 'vue';

import './style.scss';

export default defineComponent({
  name: 'ImageNav',

  setup () {
    function renderAction () {
      return (
        <>
          <FreeActionTitle title='图片导航' />
          <div class='free-action-form'>
            <NText>功能待完善</NText>
          </div>
        </>
      );
    }

    return {
      renderAction
    };
  },

  render () {
    return (
      <div class='image-nav'>
        <nut-grid>
          <nut-grid-item icon="dongdong" iconSize={20} text="导航一"></nut-grid-item>
          <nut-grid-item icon="dongdong" iconSize={20} text="导航二"></nut-grid-item>
          <nut-grid-item icon="dongdong" iconSize={20} text="导航三"></nut-grid-item>
          <nut-grid-item icon="dongdong" iconSize={20} text="导航四"></nut-grid-item>
        </nut-grid>
      </div>
    );
  }
});
