import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import문과 registerServiceWorker는 자원을 매번 새로 로딩하지 않고 캐시에서 제공해
// 애플리케이션 로딩을 빠르게 만드는 기능을 코드에 추가한다.
import reportWebVitals from './reportWebVitals';


import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // ts에게 어떤 타입인지 알려주기 위해 HTMLElement 구문을 사용한다.
  document.getElementById('root') as HTMLElement
);

reportWebVitals();
