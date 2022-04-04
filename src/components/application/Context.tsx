import { defineComponent } from 'vue';
import { useDialog, useMessage, useLoadingBar, useNotification } from 'naive-ui';

export default defineComponent({
  name: 'ApplicationContext',

  setup () {
    window.$dialog = useDialog();
    window.$message = useMessage();
    window.$loading = useLoadingBar();
    window.$notify = useNotification();
  },

  render () {
    return null;
  }
});
