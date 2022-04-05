import { widgetDataProps } from 'free-core';
import { defineComponent } from 'vue';
import Ad from '../assets/ad.png';
import { useAction } from './action';

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
    const {
      model,
      renderAction
    } = useAction();

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
