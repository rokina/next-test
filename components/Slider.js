import Link from "next/link";
import styles from '../styles/Slider.module.scss'
import { format } from 'date-fns';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay])

const Slider = (props) => {

  // 日付フォーマット
  const dateFormat = (date, format_type) => {
    return format(new Date(date), format_type);
  };

  return (
    <div className={styles.slider}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={1300}
        loop={true}
        autoplay={{ delay: 3000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.slider.map(slider => (
          <SwiperSlide key={slider.id}>
            <Link href={`/news/${slider.id}`}>
              <a className={styles.slider__item}>
                <img src={slider.mainVisual.url} alt="" />
                <div className={styles.slider__block}>
                  <time className={styles.slider__date} dateTime={dateFormat(slider.publishedAt, 'yyyy-MM-dd')}>
                    {dateFormat(slider.publishedAt, 'yyyy.MM.dd')}
                  </time>
                  <p className={styles.slider__title}>{slider.title}</p>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div slot="pagination" className="swiper-pagination" />
    </div>
  );
}

export default Slider
