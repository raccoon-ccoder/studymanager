# studymanager
> 공부 시간을 기록할 수 있는 바닐라 자바스크립트 토이 프로젝트입니다.
  
- 개요
  - 공부할 때 시간을 기록할 수 있는 타이머 서비스를 애용하여 원하는 기능들을 추가하여 개발
  - 일일 공부 시간 기록 및 주간, 월간 기록 확인 기능, 오디오 스트리밍 서비스 추가
  - JavaScript로 개발하며 공부하기 위해 라이브러리 없이 바닐라 자바스크립트로 개발
  - React + TypeScript로 리팩토링 및 업데이트중
- 담당 구현 파트
  - 공부 과목 추가 및 삭제
  - 과목별 스톱 워치 사용 및 시간에 따른 실시간 파이형 차트 생성
  - 일일, 주간, 월간 총 공부 시간 및 과목별 시간 조회
  - 오디오 스트리밍 구현 (음량조절, 재생, 멈춤, 넘기기)
  - Firebase Authentication 활용 google 계정으로 로그인, 로그아웃 
  - Firebase Hosting 활용 프로젝트 배포
- 기간 및 사용 기술
  - 22.02.15 ~ 22.03.05 (약 19일) / HTML, CSS, JavaScript, Firebase
- 프로젝트 둘러보기
  - [studymanager 바로가기](https://studymanager-jy.web.app/)

## 고민 & 구현 방법
1. 라이브러리 없이 CSS와 JavaScript로 스톱 워치 시간에 따른 실시간 파이 차트를 구현하는 방법
  - 고민 : 어떤 방식으로 스톱 워치 시작시 시간에 따른 파이 차트를 생성하고 시간의 흐름에 따라 차트를 실시간으로 보여줄 수 있을까?
  - 해결 : 차트 요소 CSS에 conic-gradient, mask를 활용해 파이 차트를 생성하였고 radial-gradient를 이용해 차트의 모서리를 둥글게 만들었습니다. <br/>그리고 스톱 워치 버튼 클릭시 해당 과목의 공부 시간을 percent라는 CSS 변수값으로 설정하여 시간에 따른 그래프를 나타내었고 setInterval 함수의 콜백 함수로 1분마다 증가하는 공부시간을 percent 값으로 업데이트하는 changeChart() 함수를 전달하여 실시간 파이 차트를 구현하였습니다.  

<br/>

![스크린샷 2022-03-05 오전 6 26 25](https://user-images.githubusercontent.com/77538818/156843907-c4965142-773b-4154-a009-8b6b75721933.png)   
 conic-gradient, mask, radial-gradient를 활용한 파이 차트 CSS   
 
 <br/>
 
<img width="501" alt="스크린샷 2022-03-05 오전 6 33 48" src="https://user-images.githubusercontent.com/77538818/156845135-d263444b-1f27-4e92-a18c-ed57d8d6f27a.png"> <br/>        스톱 워치 시작 버튼 클릭시 실행하는 startTimer 함수와 함수 내부에는 파이 차트에 사용되는 CSS 변수인 percent(--c-p)를 업데이트하는 changeChart 함수를 1분간격으로 실행하기 위해 setInterval 함수를 이용 

2. Lighthouse로 프로젝트 성능 개선하는 방법
  - 고민 : Lighthouse로 웹앱 품질 측정시 수치가 낮은 편인데 각 항목마다 어떻게 성능을 개선할 수 있을까?
  - 해결 : Performance 항목에선 사용하는 구글 폰트, 아이콘을 비동기적으로 요청 후 로드 완료시 CSS 처리, Accessibility 항목에선 배경색과 요소 색의 명암비를 재설정, SEO 항목에선 적절한 타이틀 선정, 사이트 정보 요약, 시멘틱 태그 사용으로 성능을 개선하였습니다.

<br/>

<img width="572" alt="스크린샷 2022-03-06 오후 4 45 54" src="https://user-images.githubusercontent.com/77538818/156944026-203c8203-67f9-4a3e-a0e1-96af6e409297.png"> 

웹사이트에 적절한 타이틀, 정보 요약을 하는 meta description 태그를 추가하였습니다.

<br/>

<img width="762" alt="스크린샷 2022-03-06 오후 4 46 29" src="https://user-images.githubusercontent.com/77538818/156914073-5b0c5829-fae6-4e89-a713-ee65c730ca33.png"> 
   구글 아이콘 link 태그에 preload 설정으로 비동기적으로 요청하였으며, 단순히 preload 설정시 원하는 아이콘이 text 형태로 표현되기에 onload="this.rel = 'stylesheet’" 설정으로 로드 완료시 CSS를 처리하였습니다.

## 스크린샷
### 로그인 & 로그아웃
![login-logout](https://user-images.githubusercontent.com/77538818/156945466-df222e4c-daf6-4cda-b8d8-6ae6666773d3.gif)

### 과목 추가 및 삭제
![subject-add,remove](https://user-images.githubusercontent.com/77538818/156945464-636af5d8-412a-49c1-9836-fb31a032fd5e.gif)

### 타이머
![timer](https://user-images.githubusercontent.com/77538818/156945461-d2b8bea2-aa76-4ea0-82f7-19e1fc6b3c07.gif)

### 기간별 공부 기록 조회
![period](https://user-images.githubusercontent.com/77538818/156945460-2f0224a8-91f0-46b5-adef-aab812817c7c.gif)

### 음악 플레이어
![sound](https://user-images.githubusercontent.com/77538818/156945456-b7abcf8c-afba-4260-96e3-598d55ad8590.gif)

### 모바일
![mobile](https://user-images.githubusercontent.com/77538818/156945926-f35841be-5c13-4634-84b0-f838eb6fb24e.gif)

## 개선 사항
- 기간별로 기록 조회시 로딩 화면 보여주기
- 선택한 날짜에 따른 기간별 설정
- 공부 기록 그래프로 수치화
