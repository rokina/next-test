import styles from '/styles/Home.module.scss'
import { Layout, Sidebar, Footer, MainConts, Pager } from '/components/Index';

const PER_PAGE = 4;

const newsPageId = ({ news, totalCount, current_id }) => {
  return (
    <Layout>
      <main>
        <div className={styles.container}>
          <MainConts news={news} />
          <Sidebar />
        </div>
        <Pager totalCount={totalCount} current_id={current_id} />
      </main>
      <Footer />
    </Layout>
  );
}

export default newsPageId

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  };
  const res = await fetch('https://headless-test.microcms.io/api/v1/news', key)
  const repos = await res.json();
  const pageNumbers = [];
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/news/page/${repo}`)
  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = parseInt(context.params.id);
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  };
  const data = await fetch(
    `https://headless-test.microcms.io/api/v1/news/?offset=${(id - 1) * 4}&limit=4`,
    key
  ).then(res => res.json()).catch(() => null)
  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
      current_id: id,
    }
  };
};
