import { DialogApi, LoadingBarApi, MessageApi, NotificationApi } from 'naive-ui';

declare global {
  interface Window {
    $dialog: DialogApi;
    $message: MessageApi;
    $loading: LoadingBarApi,
    $notify: NotificationApi,
  }
}
