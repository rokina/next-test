import Link from 'next/link';
import Layout from '../components/MyLayout';

export default function Home({ news }) {
  return (
    <Layout>
      <ul>
        {news.map(news => (
          <li key={news.id}>
            <Link href={`news/${news.id}`}>
              <a>{news.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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
