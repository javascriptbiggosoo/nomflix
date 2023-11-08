# Nomflix

Nomflix는 React와 TypeScript를 사용하여 만든 영화 정보 웹 애플리케이션입니다. 이 프로젝트는 신입 프론트엔드 개발자로서의 기술 역량을 보여주기 위한 포트폴리오 프로젝트입니다.

## 배포

이 프로젝트는 GitHub Pages를 통해 배포되었습니다. [여기](https://javascriptbiggosoo.github.io/nomflix)에서 확인하실 수 있습니다.

## 주요 기능 및 기술

1. **라우트 설정**: `createBrowserRouter`를 사용하여 라우트를 설정하였습니다. 이를 통해 사용자는 웹사이트의 다양한 섹션을 쉽게 탐색할 수 있습니다.

2. **헤더 설정**: 루트 레이아웃에 헤더를 설정하여 사용자에게 일관된 UI를 제공합니다. 이 헤더는 사이트의 모든 페이지에서 보여지며, 사용자가 원하는 섹션으로 쉽게 이동할 수 있도록 도와줍니다.

3. **반응형 디자인**: `useResize`라는 커스텀 훅을 사용하여 반응형 디자인을 구현하였습니다. 이를 통해 웹사이트는 다양한 화면 크기와 디바이스에서도 최적의 사용자 경험을 제공합니다.

4. **유연한 컴포넌트 설계**: 홈페이지와 검색페이지에서 공통으로 사용되는 컴포넌트를 유연하게 설계하였습니다. 이를 통해 코드의 재사용성을 높이고, 유지 보수를 용이하게 하였습니다.

5. **API 페칭**: `useQuery`를 사용하여 TMDB API에서 데이터를 페칭하였습니다. 이를 통해 실시간 영화 및 TV 쇼 정보를 사용자에게 제공합니다.

6. **전역 UI 컴포넌트**: Loader, Error, Overlay 등 전역에서 사용 가능한 UI 컴포넌트를 제작하였습니다. 이를 통해 사용자 경험을 향상시키고, 코드의 재사용성을 높였습니다.

7. **페이지 지연 로딩 최적화**: React의 `Suspense` 컴포넌트를 사용하여 페이지 지연 로딩을 적용함으로써 애플리케이션의 로딩 성능을 최적화했습니다. 이를 통해 데이터가 로드될 때까지 사용자에게 로딩 인디케이터를 보여주며, 사용자 경험을 개선했습니다.

8. **npm CRA에서 yarn Vite로의 전환**: 프로젝트의 빌드 도구를 npm의 Create React App(CRA)에서 Vite로 전환하였습니다. 이를 통해 빌드 속도를 향상시키고, 개발 환경을 더욱 효율적으로 만들었습니다.

## 프로젝트 실행 방법

1. 프로젝트를 클론합니다: `git clone https://github.com/javascriptbiggosoo/nomflix.git`
2. 디렉토리로 이동합니다: `cd nomflix`
3. 필요한 패키지를 설치합니다: `yarn`
4. 프로젝트를 실행합니다: `yarn run dev`

## 맺으며

이 README는 계속 업데이트 될 예정입니다. 프로젝트의 세부적인 코드 구현에 대한 설명이나, 사용한 기술에 대한 깊이 있는 설명 등을 추가할 예정입니다.
