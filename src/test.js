
let demo = document.querySelector("#demo")
const string = '大家好，我是渣渣辉'
let n = 1
demo.innerHTML = n;

setInterval(()=> {
    n += 1
    demo.innerHTML = string.substring(0,n);
},1000)