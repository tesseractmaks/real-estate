/* =================================
------------------------------------
	LERAMIZ - Landing Page Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


var window_w = $(window).innerWidth();


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});



(async function($) {

/*------------------
		DOM
	--------------------*/

let  response = await fetch('http://127.0.0.1:8000/api/v1/main_site/');
const main_site = await response.json();

// Header section 

async function headerTopLeft() {
	let itemElement = document.querySelector(".header-top")
	let topLeft  = itemElement.querySelector(".header-top-left")
	
	for (let i = 0; i < 2; i++) {
		let div = document.createElement("div")
		let iElem = document.createElement("i")
		div.classList.add("top-info")
		div.append(iElem)
		topLeft.append(div)
	}

	topLeft.children[0].append(main_site["header"]["phone"])
	topLeft.children[0].children[0].classList.add("fa")
	topLeft.children[0].children[0].classList.add("fa-phone")

	topLeft.children[1].append(main_site["header"]["email"])
	topLeft.children[1].children[0].classList.add("fa")
	topLeft.children[1].children[0].classList.add("fa-envelope")
}


async function headerTopRight() {
	let itemElement = document.querySelector(".header-top")
	let topSocial  = itemElement.querySelector(".top-social")
	let links = main_site["header"]["socialLinks"]
	let elemenTopSocial = topSocial.children

	let i = -1;
	for (let element of elemenTopSocial) {
		i++
		element.href = links[i]
		}
}

async function mainMenu() {
	let itemElement = document.querySelector(".main-menu")

	let links = main_site["header"]["mainMenu"]

	links.forEach(function(element, index) {
	
		let li = document.createElement("li")
		let a = document.createElement("a")
		a.setAttribute("href", element["link"])
		a.textContent = element["text"]
		li.append(a)
		itemElement.append(li)
		
});
};

// Hero section

async function heroSection() {
	let itemElement = document.querySelector(".hero-section")
	let container = itemElement.querySelector(".container")

	let h2 = document.createElement("h2")
	let p = document.createElement("p")
	let link = document.createElement("a")
	
	let element = main_site["hero"]
	h2.textContent = element["h2"]
	p.textContent = element["p"]
	link.classList.add("site-btn")
	link.setAttribute("href", element["button"]["link"])
	link.textContent = element["button"]["text"]
	container.append(h2, p, link)
};

// Services section

async function servicesSection() {
	let itemElement = document.querySelector(".services-section")
	let container = itemElement.querySelector(".col-lg-6")

	let element = main_site["servicesSection"]
	let img = document.createElement("img")
	img.setAttribute("src", element["image"])
	img.setAttribute("alt", "service")
	container.append(img)

	let sectionTitle = itemElement.querySelector(".section-title")
	let h3 = document.createElement("h3")
	let p = document.createElement("p")
	h3.textContent = element["h3"]
	p.textContent = element["p"]
	sectionTitle.append(h3, p)

	let services = itemElement.querySelector(".services")
	element["serviceItems"].forEach(function(element, idx) {
		let div = document.createElement("div")
		div.classList.add("service-item")
		let i = document.createElement("i")
		i.classList.add("fa")
		if (idx == 0){i.classList.add("fa-comments")}
		if (idx == 1){i.classList.add("fa-home")}
		if (idx == 2){i.classList.add("fa-briefcase")}
		div.append(i)
		let div2 = document.createElement("div")
		let h5 = document.createElement("h5")
		let p = document.createElement("p")

		h5.textContent = element["h5"]
		p.textContent = element["p"]
		div2.classList.add("service-text")
		div2.append(h5, p)
		div.append(div2)
		services.append(div)
	});
};

// Review section

async function reviewSection() {

	let element = main_site["review"]
	let itemElement = document.querySelector(".review-section")
	let reviewSlider = itemElement.querySelector(".review-slider")

	reviewSlider.classList.add("owl-carousel")
	reviewSlider.classList.add("owl-item")
	reviewSlider.classList.add("owl-drag")
	reviewSlider.classList.add("owl-loaded")

	element["reviewItems"].forEach(function(elem, idx) {
		let h5 = document.createElement("h5")
		let p = document.createElement("p")
		let span = document.createElement("span")
		let div2 = document.createElement("div")
		let div3 = document.createElement("div")
		div2.classList.add("rating")
		div3.classList.add("review-item")
		div3.classList.add("text-white")

		for (let num = 0; num < 5; num++){
			let i = document.createElement("i")
			i.classList.add("fa")
			i.classList.add("fa-star")
			div2.append(i)
		}

		p.textContent = elem["p"]
		h5.textContent = elem["h5"]
		span.textContent = elem["span"]
		let div = document.createElement("div")
	

		div.classList.add("clint-pic")
		div.classList.add("set-bg")
		div.setAttribute("data-setbg", `${elem["image"]}`)
		div.setAttribute("style", `background-image: url(${elem["image"]});`)
		div3.append(p, h5, span, div, div2)
		
		reviewSlider.append(div3)
	});
	return reviewSlider

};

headerTopLeft()
headerTopRight()
mainMenu()
heroSection()
servicesSection()



// jQuery


/*------------------
	Navigation
--------------------*/
$('.nav-switch').on('click', function(event) {
	$('.main-menu').slideToggle(400);
	event.preventDefault();
});


/*------------------
	Background set
--------------------*/
$('.set-bg').each(function() {
	var bg = $(this).data('setbg');
	$(this).css('background-image', 'url(' + bg + ')');
});



$('.gallery').find('.gallery-item').each(function() {
	var pi_height1 = $(this).outerWidth(true),
	pi_height2 = pi_height1/2;
	
	if($(this).hasClass('grid-long') && window_w > 991){
		$(this).css('height', pi_height2);
	}else{
		$(this).css('height', Math.abs(pi_height1));
	}
});



$('.gallery').masonry({
	itemSelector: '.gallery-item',
	columnWidth: '.grid-sizer',
	gutter: 20
});


/*------------------
	Review Slider
--------------------*/



$('.review-slider').append(reviewSection())


$('.review-slider').owlCarousel({
	loop: true,
	margin: 0,
	nav: false,
	items: 1,
	dots: true,
	autoplay: true,
});


$('.clients-slider').owlCarousel({
	loop:true,
	autoplay:true,
	margin:30,
	nav:false,
	dots: true,
	responsive:{
		0:{
			items:2,
			margin:10
		},
		600:{
			items:3
		},
		800:{
			items:3
		},
		1000:{
			items:5
		}
	}
});


// // /*------------------
// // 	Review Slider
// // --------------------*/
var sync1 = $("#sl-slider");
var sync2 = $("#sl-slider-thumb");
var slidesPerPage = 4; //globaly define number of elements per page
var syncedSecondary = true;

sync1.owlCarousel({
	items : 1,
	slideSpeed : 2000,
	nav: false,
	autoplay: true,
	dots: true,
	loop: true,
	responsiveRefreshRate : 200,
}).on('changed.owl.carousel', syncPosition);

sync2.on('initialized.owl.carousel', function () {
	sync2.find(".owl-item").eq(0).addClass("current");
}).owlCarousel({
	items : slidesPerPage,
	dots: true,
	nav: true,
	margin: 10,
	smartSpeed: 200,
	slideSpeed : 500,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	responsiveRefreshRate : 100
}).on('changed.owl.carousel', syncPosition2);

function syncPosition(el) {
	//if you set loop to false, you have to restore this next line
	var current = el.item.index;
	//if you disable loop you have to comment this block
	var count = el.item.count-1;
	var current = Math.round(el.item.index - (el.item.count/2) - .5);

	if(current < 0) {
		current = count;
	}
	if(current > count) {
		current = 0;
	}

	//end block
	sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
	var onscreen = sync2.find('.owl-item.active').length - 1;
	var start = sync2.find('.owl-item.active').first().index();
	var end = sync2.find('.owl-item.active').last().index();

	if (current > end) {
		sync2.data('owl.carousel').to(current, 100, true);
	}
	if (current < start) {
		sync2.data('owl.carousel').to(current - onscreen, 100, true);
	}
}

function syncPosition2(el) {
	if(syncedSecondary) {
		var number = el.item.index;
		sync1.data('owl.carousel').to(number, 100, true);
	}
}

sync2.on("click", ".owl-item", function(e){
	e.preventDefault();
	var number = $(this).index();
	sync1.data('owl.carousel').to(number, 300, true);
});

/*------------------
	Accordions
--------------------*/
$('.panel-link').on('click', function (e) {
	$('.panel-link').removeClass('active');
	var $this = $(this);
	if (!$this.hasClass('active')) {
		$this.addClass('active');
	}
	e.preventDefault();
});

$('.video-link').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,

});

})(jQuery);








