import { FreeActionTitle } from 'free-core';
import { NText } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import './style.scss';

export default defineComponent({
  name: 'Search',

  setup () {
    const model = ref({
    });

    function renderAction () {
      return (
        <>
          <FreeActionTitle title='公告' />
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
      <div class='notice-bar'>
        <nut-noticebar
          text='请填写内容，如果过长，将会在手机上滚动显示'
          background={'rgba(255, 248, 233)'}
          color={'rgb(100, 101, 102)'}
        >

        </nut-noticebar>
      </div>
    );
  }
});
