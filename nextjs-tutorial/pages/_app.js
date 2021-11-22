// App은 다른 모든 페이지에서 공통으로 사용될 최상위 구성 요소이다.
// App을 이용하여 페이지 사이에서의 상태를 공유 가능하다.

// 페이지를 추가한 경우 개발서버를 다시 시작한다.
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps}/>
}