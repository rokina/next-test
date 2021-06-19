import Link from 'next/link';
import Layout from '../components/MyLayout';
import Slider from "../components/Slider";
import Pickup from "../components/Pickup";
import MainConts from "../components/MainConts";
import styles from '../styles/Index.module.scss';

export default function Home({ news }) {
  return (
    <Layout>
      <main>
        <Slider />
        <Pickup />
        <div className={styles.container}>
          <MainConts news="aaa" />
        </div>
      </main>
      {/* <ul>
        {news.map(news => (
          <li key={news.id}>
            <Link href={`news/${news.id}`}>
              <a>{news.title}</a>
            </Link>
            <p>{news.body}</p>
          </li>
        ))}
      </ul> */}
    </Layout>
  );
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://headless-test.microcms.io/api/v1/news', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      news: data.contents,
    },
  };
};
