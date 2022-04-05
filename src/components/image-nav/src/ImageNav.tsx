import { widgetDataProps } from 'free-core';
import { defineComponent } from 'vue';
import { useAction } from './action';

import './style.scss';

export type ImageNavType = 'image' | 'text';
export type ImageNavImageType = 'fixed' | 'slide';
export type ImageNavImageDirection = 'horizontal' | 'vertical';

export interface ImageNavStyle {
  backgroundColor: string;
  color: string;
  borderColor: string;
}

export interface ImageNavItem {
  title: string;
  thumb?: string;
  redirect: any;
}

export interface NutuiImageNavProps {
  type: ImageNavType;
  imageType: ImageNavImageType;
  direction: ImageNavImageDirection;
  style: ImageNavStyle;
  navs: ImageNavItem[];
  max: number;
  columnNum: number;
  reverse: boolean;
}

const nutuiImageNavProps = widgetDataProps<NutuiImageNavProps>({
  type: 'image',
  imageType: 'fixed',
  direction: 'horizontal',
  style: {
    backgroundColor: '#FFFFFF',
    color: '#333333',
    borderColor: '#f5f6f7'
  },
  max: 12,
  columnNum: 3,
  reverse: false,
  navs: [
    {
      title: '导航一',
      thumb: '',
      redirect: {}
    },
    {
      title: '导航二',
      thumb: '',
      redirect: {}
    },
    {
      title: '导航三',
      thumb: '',
      redirect: {}
    },
    {
      title: '导航四',
      thumb: '',
      redirect: {}
    }
  ]
});

export default defineComponent({
  name: 'ImageNav',

  props: nutuiImageNavProps,

  setup (props) {
    const {
      model,
      renderAction
    } = useAction(props);

    return {
      model,
      renderAction
    };
  },

  render () {
    const {
      model
    } = this;
    return (
      <div class='image-nav'>
        <nut-grid
          style={`--border-color: ${model.style.borderColor}`}
          direction={model.direction}
          columnNum={model.columnNum}
          reverse={model.reverse}
        >
          {
            model.type === 'image'
              ? model.navs.map(item => (
              <nut-grid-item style={model.style} icon={item.thumb} iconSize={20} text={item.title}></nut-grid-item>
              ))
              : model.navs.map(item => (
                  <nut-grid-item style={model.style}>
                    <div class='nut-grid-item__text'>
                      {item.title}
                    </div>
                  </nut-grid-item>
              ))
          }
        </nut-grid>
      </div>
    );
  }
});
