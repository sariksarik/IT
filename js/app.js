const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	centeredSlides: true,
	mousewheel: true,
	parallax: true,
	breakpoints: {
		0: {
			slidesPerView: 2.5,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 60
		}
	}
})
const sliderBg = new Swiper('.slider_bg', {
	centeredSlides: true,
	parallax: true,
	spaceBetween: 60,
	slidesPerView: 3.5
})
sliderMain.controller.control = sliderBg
document.querySelectorAll('.slider__img').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('opening')
	})
})
document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('opened')
	})
})




let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})


const btn = document.querySelector('.title-click button'),
	  sw = document.querySelector('.swiper-wrapper')

	  btn.addEventListener('click', function () {
		  sw.classList.toggle('swiper-active');
		if (btn.innerHTML == 'Узнать болльше') {
			btn.innerHTML = 'Закрыть'
		} else if (btn.innerHTML == 'Закрыть') {
			btn.innerHTML = 'Узнать болльше'
		}

		  
	  })


	  VANTA.GLOBE({
		el: "#bg",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200.00,
		minWidth: 200.00,
		scale: 1.00,
		scaleMobile: 1.00,
		color: 0xcd5f33,
		color2: 0xff9bff,
		size: 1.20,
		backgroundColor: 0x8070f
	  })