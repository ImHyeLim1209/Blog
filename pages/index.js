import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

// getStaticProps : 빌드될 때만 실행되는 함수
// Static Generation : 정적페이지를 생성하여 보여준다. getStaticProps()는 이에 필요한 데이터를 미리 가져온다.
//  - 모든 유저에게 같은 페이지를 보여주는 경우 주로 사용된다.
// page 에서만 export 할 수 있다.
// static generation은 사용자 요청 전에 페이지를 미리 렌더링할 수 있는 경우에 유용하다.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'

// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>[Your Self Introduction]</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   )
// }