import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <Root />, root
    // <Root />
    
  );
});


// const root = function() {
// 
// 
//   render() {
//     <Clock />
//     <Tabls />
//   }
// 
// }
// 
// class Clock () {
// 
//   tick(){}
//   render() {}
// }
