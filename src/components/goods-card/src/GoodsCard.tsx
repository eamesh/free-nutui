import { FreeActionTitle, widgetDataProps } from 'free-core';
import { NText } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import './style.scss';

export interface NutuiSearchProps {
  title: string;
}

const nutuiSearchProps = widgetDataProps<NutuiSearchProps>({
  title: ''
});

export default defineComponent({
  name: 'GoodsCard',

  props: nutuiSearchProps,

  setup () {
    const model = ref({
      imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
      price: '388',
      vipPrice: '378',
      shopDesc: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>'
    });

    function renderAction () {
      return (
        <>
          <FreeActionTitle title='商品卡片' />
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
      <div class='goods-card'>
        <nut-card
          imgUrl={this.model.imgUrl}
          title={this.model.title}
          price={this.model.price}
          vipPrice={this.model.vipPrice}
          shopDesc={this.model.shopDesc}
          delivery={this.model.delivery}
          shopName={this.model.shopName}
        >
        </nut-card>
      </div>
    );
  }
});
