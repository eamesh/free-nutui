import { createApp } from 'vue';
import App from './App';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/style.css';
import './style.scss';

createApp(App).use(NutUI).mount('#app');
