const popup= document.getElementById('popup')
const popupBtn= document.getElementById('popupBtn')
popupBtn.addEventListener('click',function(){
	popup.classList.add('open')
})
document.getElementById('popup-close-btn').addEventListener('click',function(){popup.classList.remove('open')})
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
    slidesPerView: 6,
  	spaceBetween: 0,
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 3,
		  spaceBetween: 0
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 5,
		  spaceBetween: 20
		},
		576: {
		  slidesPerView: 4,
		  spaceBetween: 20
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 4,
		  spaceBetween: 40
		},
		950: {
		  slidesPerView: 6,
		  spaceBetween: 40
		}
	  }
  
	// And if we need scrollbar
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
  });
  const swiper1 = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
// swiper1.slideNext();
let allLinks=document.querySelectorAll('li[href^="#"')
let slider = document.querySelector('.slider')
function scrollTo(){
	// e.preventDefault();
	console.log(this.getAttribute('href'));
	let href = this.getAttribute('href').substring(1);
	const scrollTarget = document.getElementById(href);
	const topOffset = document.querySelector('.scrollto').offsetHeight;
	// const topOffset = 0; // если не нужен отступ сверху 
	const elementPosition = scrollTarget.getBoundingClientRect().bottom-100;
	const offsetPosition = elementPosition - topOffset;
	// console.log(offsetPosition);
	window.scrollBy({
		top: offsetPosition,
		behavior: 'smooth'
	});
}
function scroll(){
	allLinks.forEach(link => {
		link.addEventListener('click', scrollTo);
	});
}
scroll()
const foodBtnSub = document.querySelectorAll('.food-btn.bgcr')

foodBtnSub.forEach(btn => {
	let c=0
	btn.addEventListener('click',function(){
		let am= +btn.parentElement.nextElementSibling.innerHTML
		console.log(am);
		if (am>0){
			am=+am-1
		}else return
		btn.parentElement.nextElementSibling.innerHTML=am
	})

})
const foodBtnPlus = document.querySelectorAll('.food-btn.bgcg')

foodBtnPlus.forEach(btn => {
	let c=0
	btn.addEventListener('click',function(){
		let am= +btn.parentElement.previousElementSibling.innerHTML
		console.log(am);
		am=+am+1
		btn.parentElement.previousElementSibling.innerHTML=am
		console.log(1);
	})

})

console.log(foodBtnPlus);

