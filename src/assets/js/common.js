document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
// 根据设备不同的宽度来指定大小，仅仅针对移动端 

window.addEventListener('load', function () {    //监控load
  FastClick.attach(document.body);
}, false);

document.documentElement.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) {
  	e.preventDefault();
  }
}, false);