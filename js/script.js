// ____________mobile menu_______________

let iconMenu = document.querySelector('.icon-menu');
let mobileNav = document.querySelector('.mobile-nav');
let list = document.querySelector('.mobile-nav ul');
iconMenu.addEventListener('touchstart', showMenu);

function showMenu (){
	mobileNav.classList.toggle('menu-open');
	iconMenu.classList.toggle('grey');
	list.classList.toggle('block');
}

// _______________________top line______________________
let topLine = document.querySelectorAll('header .navigation li');
topLine.forEach(elem => {
	elem.addEventListener('touchstart', showTopSlider);
	elem.addEventListener('click', showTopLine);
})

function showTopLine() {
	topLine.forEach(elem => {
		// console.log(elem.classList)
		elem.classList.remove('active');
	})
	this.classList.add('active');
}


// ______________________top slider_________________
let topSlider = document.querySelectorAll('.slider .block');
topSlider.forEach(elem => {
	elem.addEventListener('touchstart', showTopSlider);
	elem.addEventListener('click', showTopSlider);
})

function showTopSlider() {
	topSlider.forEach(elem => {
		// console.log(elem.classList)
		elem.classList.remove('active-2');
	})
	this.classList.add('active-2');
}




// ________________block what we do_____________

let blocks = document.querySelectorAll('.block-what-we-do .block-mini-desc');
let blocksWrap = document.querySelectorAll('.block-what-we-do .wrap');
let arrows = document.querySelectorAll('.block-what-we-do i');
blocks.forEach(elem =>{
	elem.addEventListener('touchstart', showDesc);
	elem.addEventListener('click', showDesc);
})

function showDesc (){
	blocksWrap.forEach(elem => {
		elem.classList.remove('active-wrap');
	});
	arrows.forEach(elem => {
		elem.classList.remove('fa-chevron-up');
		elem.classList.add('fa-chevron-down');
	})
	this.childNodes[3].classList.add('active-wrap');
	this.childNodes[1].children[1].classList.remove('fa-chevron-down');
	this.childNodes[1].children[1].classList.add('fa-chevron-up')
}


// __________________slider__________________-
let sliderBlocks = document.querySelectorAll('.mini-slider');
let sliderLine = document.querySelector('.main-block');
let width;
let count = 0;
function init(){
	console.log('resize');
	width = document.querySelector('.wrap-slider').offsetWidth;
	sliderLine.style.width = width * (sliderBlocks.length-1) + 'px';
	sliderBlocks.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.arrow-right i').addEventListener('click', next);
// document.querySelector('.arrow-right i').addEventListener('touchstart', next);
function next () {
    count++;
    if (count >= sliderBlocks.length-1) {
        count = 0;
    }
    rollSlider();
}
document.querySelector('.arrow-left i').addEventListener('click', previous);
// document.querySelector('.arrow-left i').addEventListener('touchstart', previous);
function previous () {
    count--;
    if (count < 0) {
        count = sliderBlocks.length-2;
    }
    rollSlider();
}
function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
