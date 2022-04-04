import { FreeActionTitle, widgetDataProps } from 'free-core';
import { NText } from 'naive-ui';
import { defineComponent, ref } from 'vue';
import Ad from '../assets/ad.png';

import './style.scss';

export interface NutuiImageAdProps {
  title: string;
}

const nutuiImageAdProps = widgetDataProps<NutuiImageAdProps>({
  title: '测试'
});

export default defineComponent({
  name: 'ImageAd',

  props: nutuiImageAdProps,

  setup () {
    const model = ref({
    });
    function renderAction () {
      return (
        <>
          <FreeActionTitle title='图片广告' />
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
      <div class='image-ad'>
        <nut-swiper width={375} height={200} initPage={0} paginationVisible={true} paginationColor="#426543" autoPlay="3000">
          <nut-swiper-item>
            <img src={Ad} alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src={Ad} alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src={Ad} alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src={Ad} alt="" />
          </nut-swiper-item>
        </nut-swiper>
      </div>
    );
  }
});
