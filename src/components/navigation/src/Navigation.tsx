import { FreeActionTitle, widgetDataProps } from 'free-core';
import { NText } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import './style.scss';

export interface NutuiNavigationProps {
  keyword: string;
}

const nutuiNavigationProps = widgetDataProps<NutuiNavigationProps>({
  keyword: ''
});

export default defineComponent({
  name: 'Navigation',

  props: nutuiNavigationProps,

  setup () {
    const model = ref({
      tableValue: '0'
    });

    function renderAction () {
      return (
        <>
          <FreeActionTitle title='电梯导航' />
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
      <div class='navigation'>
        <nut-tabs v-model={this.model.tableValue} type="smile">
          <nut-tabpane title="导航一">
          </nut-tabpane>
          <nut-tabpane title="导航二">
          </nut-tabpane>
          <nut-tabpane title="导航三">
          </nut-tabpane>
          <nut-tabpane title="导航四">
          </nut-tabpane>
        </nut-tabs>
      </div>
    );
  }
});
