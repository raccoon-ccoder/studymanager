import { Helmet } from "react-helmet";

function MetaTag() {
  return (
    <Helmet>
      <title>Studymanager</title>
      <meta name="keywords" content="study, timer, timetrack, planner" />
      <meta name="author" content="jybaek96" />
      <meta
        name="description"
        content="타이머로 공부시간을 기록하자, studymanager"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://studymanager-jy.web.app" />
      <meta property="og:title" content="Studymanager" />
      <meta property="og:site_name" content="Studymanager" />
      <meta property="og:image" content="../images/logo-mark.png" />
      <meta
        property="og:description"
        content="타이머로 공부시간을 기록하자, studymanager"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Studymanager" />
      <meta
        name="twitter:description"
        content="타이머로 공부시간을 기록하자, studymanager"
      />
      <meta name="twitter:image" content="../images/logo.png" />
      <link rel="shortcut icon" href="/images/logo.png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default MetaTag;
