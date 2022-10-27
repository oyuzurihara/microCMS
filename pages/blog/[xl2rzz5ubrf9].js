import { client } from "../../libs/client";
import styles from '../../styles/Home.module.scss';

export default function BlogId({ blog }) {

console.log('↓');
console.log(blog.contents[0].body);
console.log(JSON.stringify(blog,null,'\t'));
console.log('↑');

  return (
    <main className={styles.main}>
{/*      <h1 className={styles.title}>{blog.title}</h1>  */}
      <h1 className={styles.title}>{blog.contents[0].title}</h1>
{/*      <p className={styles.publishedAt}>{blog.publishedAt}</p>  */}
      <p className={styles.publishedAt}>{blog.contents[0].publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.contents[0].body}`,
        }}
        className={styles.post}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/xl2rzz5ubrf9`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

