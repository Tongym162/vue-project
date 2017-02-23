import './ArrayPollyfill'
var dpr = window.devicePixelRatio;
if (window.devicePixelRatio >= 1.5) {
	dpr = 2;
}
document.documentElement.setAttribute('data-dpr', dpr);

let width = document.documentElement.clientWidth;
document.documentElement.style.fontSize = width/6.4 + 'px';
