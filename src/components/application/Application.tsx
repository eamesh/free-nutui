import { defineComponent } from 'vue';
import { NDialogProvider, NMessageProvider, NLoadingBarProvider, NNotificationProvider } from 'naive-ui';
import Context from './Context';

export default defineComponent({
  name: 'Application',

  render () {
    const {
      $slots
    } = this;

    return (
      <>
        <NLoadingBarProvider>
          <NDialogProvider>
            <NNotificationProvider>
              <NMessageProvider>
                <Context />
                { $slots.default ? $slots.default() : null }
              </NMessageProvider>
            </NNotificationProvider>
          </NDialogProvider>
        </NLoadingBarProvider>
      </>
    );
  }
});
