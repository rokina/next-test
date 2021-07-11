import { Layout, Slider, Pickup, MainConts, Sidebar, Footer, Pager } from '../components/Index';
import styles from '../styles/Index.module.scss';

const Home = ({ news, pickup }) => {
  return (
    <Layout>
      <main>
        <Slider />
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
  return {
    props: {
      news: news.contents,
      pickup: pickup.pickup_post,
    },
  };
};
