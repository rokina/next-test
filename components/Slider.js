import styles from '../styles/Slider.module.scss'
import Link from "next/link";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Link href="/" className={styles.slider__item}>
        <a>
          <img src="http://placehold.jp/1200x675.png" alt="" />
          <div className={styles.slider__block}>
            <p className={styles.slider__date}>
              2020/02/02
            </p>
            <p className={styles.slider__title}>title</p>
          </div>
        </a>
      </Link>
    </div>
    // <div class="c-slider">
    //   <swiper :options="swiperOption">
    //     <swiper-slide v-for="content in sliderData" :key="content.id">
    //       <nuxt-link :to="`/${content.id}`" class="c-slider__item">
    //         <img :src="content.mainVisual.url" alt="" class="" />
    //         <div class="c-slider__block">
    //           <p class="c-slider__date">
    //             {{ $moment(content.publishedAt).format('YYYY.MM.DD') }}
    //           </p>
    //           <p class="c-slider__title">{{ content.title }}</p>
    //         </div>
    //       </nuxt-link>
    //     </swiper-slide>
    //   </swiper>
    //   <div slot="pagination" class="swiper-pagination" />
    // </div>
  );
}

export default Slider
