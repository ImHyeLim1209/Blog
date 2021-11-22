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

// ServerSideRendering : 
// getStaticProps() 대신 getServerSideProps(context) 을 사용하여 데이터를 가져온다.
// 빌드할 때가 아니라, 요청을 받을 때마다 호출된다. 
// 미리 데이터를 불러와서 페이지에 렌더링해야하는 경우 사용한다.
// 미리 데이터를 불러올 필요가 없다면 Client Side Rendering을 쓰는 것이 낫다.
// 추가 구성 없이는 데이터 캐싱이 안된다.

// Client Sie Rendering + Pre rendering
// 외부 데이터가 필요하지 않은 페이지 부분을 정적으로 렌더링한 후,
// 페이지가 로드되면 클라이언트에서 데이터를 가져와서 채운다. 
// Client에서 데이터를 가져오기 위해 SWR이라는 Hook을 제공한다. (캐싱, 재검증, 간격에 따라 다시 가져오기 등 제공)

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

// create-next-app
// 1. 컴파일과 번들링이 자동으로 된다.
// 2. 자동 리프레시
// 3. 서버사이드 렌더링
// 4. static 파일 지원


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