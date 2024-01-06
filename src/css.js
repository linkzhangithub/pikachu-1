const string = `.skin * {
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
    /* border-color:上 右 下 左，右和左变透明transparent，去掉下即可实现倒三角*/
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
    /*添加鼻子动画的幅度*/
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
    /* 50%是左右以正中心为基准，100%是上下以最下方为基准，也可写成：transform-origin: center bottom */
    transform-origin: 50% 100%;
    /*重复动画*/
    animation: wave 200ms infinite linear;
  }
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0px 0px;
    /*border-radius: 左上 右上 右下 左下,设置哪个位置，该位置就变圆，该位置设置出了上半个圆弧*/
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
    /*添加伪元素(默认是span，所以要display:block)做眼睛里白色部分，也可加一个元素*/
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
    /*把左上嘴唇倾斜一下*/
    transform: rotate(-15deg) translateX(-53px);
    
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0px;
    /*把右上嘴唇倾斜一下*/
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
    /*用一个伪元素遮住左边嘴唇中间部分*/
    right: -6px;
  }
  .mouth .up .lip.right::before {
    /*用一个伪元素遮住右边嘴唇中间部分*/
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
`;
export default string;
