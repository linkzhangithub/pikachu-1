const u=`.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.skin *::before,
.skin *::after {
    box-sizing: border-box;
}
.skin {
    background: #ffe600;
    min-height: 50vh;
    position: relative;
  }
  .nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    /* border-color:\u{4E0A} \u{53F3} \u{4E0B} \u{5DE6}\u{FF0C}\u{53F3}\u{548C}\u{5DE6}\u{53D8}\u{900F}\u{660E}transparent\u{FF0C}\u{53BB}\u{6389}\u{4E0B}\u{5373}\u{53EF}\u{5B9E}\u{73B0}\u{5012}\u{4E09}\u{89D2}*/
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
  }
  @keyframes wave {
    /*\u{6DFB}\u{52A0}\u{9F3B}\u{5B50}\u{52A8}\u{753B}\u{7684}\u{5E45}\u{5EA6}*/
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    /* 50%\u{662F}\u{5DE6}\u{53F3}\u{4EE5}\u{6B63}\u{4E2D}\u{5FC3}\u{4E3A}\u{57FA}\u{51C6}\u{FF0C}100%\u{662F}\u{4E0A}\u{4E0B}\u{4EE5}\u{6700}\u{4E0B}\u{65B9}\u{4E3A}\u{57FA}\u{51C6}\u{FF0C}\u{4E5F}\u{53EF}\u{5199}\u{6210}\u{FF1A}transform-origin: center bottom */
    transform-origin: 50% 100%;
    /*\u{91CD}\u{590D}\u{52A8}\u{753B}*/
    animation: wave 200ms infinite linear;
  }
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0px 0px;
    /*border-radius: \u{5DE6}\u{4E0A} \u{53F3}\u{4E0A} \u{53F3}\u{4E0B} \u{5DE6}\u{4E0B},\u{8BBE}\u{7F6E}\u{54EA}\u{4E2A}\u{4F4D}\u{7F6E}\u{FF0C}\u{8BE5}\u{4F4D}\u{7F6E}\u{5C31}\u{53D8}\u{5706}\u{FF0C}\u{8BE5}\u{4F4D}\u{7F6E}\u{8BBE}\u{7F6E}\u{51FA}\u{4E86}\u{4E0A}\u{534A}\u{4E2A}\u{5706}\u{5F27}*/
    background: black;
  }
  .eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    /*\u{6DFB}\u{52A0}\u{4F2A}\u{5143}\u{7D20}(\u{9ED8}\u{8BA4}\u{662F}span\u{FF0C}\u{6240}\u{4EE5}\u{8981}display:block)\u{505A}\u{773C}\u{775B}\u{91CC}\u{767D}\u{8272}\u{90E8}\u{5206}\u{FF0C}\u{4E5F}\u{53EF}\u{52A0}\u{4E00}\u{4E2A}\u{5143}\u{7D20}*/
    content: "";
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 2px;
  }
  .eye.left {
    transform: translateX(-130px);
  }
  .eye.right {
    transform: translateX(130px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
  }
  .mouth .up .lip {
    border: 2px solid black;
    height: 30px;
    width: 100px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    /*\u{628A}\u{5DE6}\u{4E0A}\u{5634}\u{5507}\u{503E}\u{659C}\u{4E00}\u{4E0B}*/
    transform: rotate(-15deg) translateX(-53px);
    
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0px;
    /*\u{628A}\u{53F3}\u{4E0A}\u{5634}\u{5507}\u{503E}\u{659C}\u{4E00}\u{4E0B}*/
    transform: rotate(15deg) translateX(53px);
  }
  .mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
  .mouth .up .lip.left::before {
    /*\u{7528}\u{4E00}\u{4E2A}\u{4F2A}\u{5143}\u{7D20}\u{906E}\u{4F4F}\u{5DE6}\u{8FB9}\u{5634}\u{5507}\u{4E2D}\u{95F4}\u{90E8}\u{5206}*/
    right: -6px;
  }
  .mouth .up .lip.right::before {
    /*\u{7528}\u{4E00}\u{4E2A}\u{4F2A}\u{5143}\u{7D20}\u{906E}\u{4F4F}\u{53F3}\u{8FB9}\u{5634}\u{5507}\u{4E2D}\u{95F4}\u{90E8}\u{5206}*/
    left: -6px;
  }
  .mouth .down {
    height: 150px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/330px;
    background: #990513;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 268px;
    background: #fc4a62;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 216px;
    margin-left: -44px;
    z-index: 3;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .face.left {
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  .face.right {
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
  }
`,e={id:void 0,time:100,ui:{demo:document.querySelector("#demo"),demo2:document.querySelector("#demo2")},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},n:1,init:()=>{e.ui.demo.innerText=u.substr(0,e.n),e.ui.demo2.innerHTML=u.substr(0,e.n),e.bindEvents(),e.play()},bindEvents:()=>{for(let u in e.events)if(e.events.hasOwnProperty(u)){let t=e.events[u];document.querySelector(u).onclick=e[t]}},run:()=>{if(e.n+=1,e.n>u.length){window.clearInterval(e.id);return}e.ui.demo.innerText=u.substr(0,e.n),e.ui.demo2.innerHTML=u.substr(0,e.n),e.ui.demo.scrollTop=e.ui.demo.scrollHeight},play:()=>{window.clearInterval(e.id),e.id=setInterval(e.run,e.time)},pause:()=>{window.clearInterval(e.id)},slow:()=>{e.pause(),e.time=300,e.play()},normal:()=>{e.pause(),e.time=100,e.play()},fast:()=>{e.pause(),e.time=0,e.play()}};e.init();
//# sourceMappingURL=test.1f457b93.js.map
