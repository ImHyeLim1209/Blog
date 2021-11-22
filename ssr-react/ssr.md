## SSR : 서버에서 리액트 코드를 실행하여 렌더링한다.
 - 검색엔진 최적화
 - 빠른 첫 페이지 렌더링

## SSR 직접 구현하기
 - React 제공 함수
   - renderToString() : 상태 변화에 따라 화면 갱신
   - renderToNodeStream() : 상태 변화에 따라 화면 갱신
   - renderToStaticMarkup() : 정적 페이지 렌더링
   - renderToStaticNodeStream() : 정적 페이지 렌더링
 - React의 hydrate 함수
 - 서버에서 생성된 데이터의 클라이언트로의 전달 
 - styled-components로 작성된 스타일의 처리
 - 서버용 번들 파일 작성
 