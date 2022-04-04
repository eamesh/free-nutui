import { defineComponent } from 'vue';
import { GlobalThemeOverrides, NConfigProvider } from 'naive-ui';
import { Application } from './components/application';
import FreeNutui from './FreeNutui';

export default defineComponent({
  name: 'App',

  setup () {
    const themeOverrides: GlobalThemeOverrides = {
      common: {
        fontSize: '12px',
        fontSizeSmall: '12px',
        fontSizeMedium: '12px'
      }
    };

    return {
      themeOverrides
    };
  },

  render () {
    return (
      <NConfigProvider
        themeOverrides={this.themeOverrides}
      >
        <Application>
          <FreeNutui />
        </Application>
      </NConfigProvider>
    );
  }
});
