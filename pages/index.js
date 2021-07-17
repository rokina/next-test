import { Layout, Slider, Pickup, MainConts, Sidebar, Footer, Pager } from '../components/Index';
import styles from '../styles/Index.module.scss';

const Home = ({ news, pickup, slider }) => {
  return (
    <Layout>
      <main>
        <Slider slider={slider} />
        <Pickup pickup={pickup} />
        <div className={styles.container}>
          <MainConts news={news} />
          <Sidebar />
        </div>
        <Pager />
      </main>
      <Footer />
    </Layout>
  );
}

export default Home

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const news = await fetch('https://headless-test.microcms.io/api/v1/news', key)
    .then(res => res.json())
    .catch(() => null);
  const pickup = await fetch('https://headless-test.microcms.io/api/v1/pickup/99ggpm7e16?depth=2', key)
    .then(res => res.json())
    .catch(() => null);
  const slider = await fetch('https://headless-test.microcms.io/api/v1/slider/5z3nkburtu?depth=2', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      news: news.contents,
      pickup: pickup.pickup_post,
      slider: slider.slider_post,
    },
  };
};
