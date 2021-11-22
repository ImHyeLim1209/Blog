## SSR : 서버에서 리액트 코드를 실행하여 렌더링한다.
 - 검색엔진 최적화
 - 빠른 첫 페이지 렌더링

## SSR 직접 구현하기
 - React 제공 함수
   - renderToString() : 상태 변화에 따라 화면 갱신
   - renderToNodeStream() : 상태 변화에 따라 화면 갱신
   - renderToStaticMarkup() : 정적 페이지 렌더링
   - renderToStaticNodeStream() : 정적 페이지 렌더링
   - hydrate() : SSR 결과로 만들어진 DOM 요소에 이벤트 처리 함수를 연결한다.
 - 서버에서 생성된 데이터의 클라이언트로의 전달 
 - styled-components로 작성된 스타일의 처리
 - 서버용 번들 파일 작성
 
## package
 - @babel/cli : SSR을 위해 서버에서 리액트 JSX 문법을 해석
 - @babel/plutin-transform-modules-commonjs : module -> commonJS

## babel plugin/preset
 - Client : @babel/preset-react, @babel/preset-env(구 브라우저 지원)
 - Server : @babel/preset-react, @babel/plugin-transform-moduels/commonjs

## Style in SSR
 - CSS 파일을 별도로 작성 후 HTML 파일에 연결 하면 특별히 고려할 것은 없음
 - css-module, css-in-js 는 JS 코드가 실행되면서 스타일 코드가 돔에 삽입되므로 별도 처리 필요
   - 서버에는 돔이 없으므로 별도의 작업이 필요하다.

## 이미지 모듈
 - file-loader : 리소스 파일을 전달하면 output 설정에 지정된 폴더로 복사한다.
                 JS 코드에서는 복사된 파일의 경로가 반환된다.
  - Client 코드에서 file-loader로 처리되었다면, 서버 코드에서도 file-load로 처리
  - 서버 코드에서 file-loader를 실행하려면 서버 코드도 웹팩으로 번들링 해야한다.
