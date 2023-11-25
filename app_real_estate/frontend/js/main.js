/* =================================
------------------------------------
	LERAMIZ - Landing Page Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


var window_w = $(window).innerWidth();


$(window).on('load', function () {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");
});



(async function ($) {
	window.scrollTo({ top: 0, behavior: 'smooth' })

	/*------------------
			DOM
		--------------------*/

	let response = await fetch('http://127.0.0.1:8000/api/v1/main_site/');
	const main_site = await response.json();

	// Header section 

	async function headerTopLeft() {
		let itemElement = document.querySelector(".header-top")
		let topLeft = itemElement.querySelector(".header-top-left")

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
		let topSocial = itemElement.querySelector(".top-social")
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

		links.forEach(function (element, index) {

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

	// Filter form section
	let filterForm = document.querySelector('.filter-form')
	let params = {};

	filterForm.addEventListener('submit', function (e) {
		e.preventDefault();
		let sellRooms = document.querySelector('#sellRooms')
		let city = filterForm.inCity.value
		let state = filterForm.inState.value
		let flatHouse = filterForm.sellFlatHouse.value

		let rentSale = rentSaleFlat.value

		let roomsFlat = filterForm.sellRooms.value

		let rooms = 0;
		if (!sellRooms.disabled) {
			rooms = roomsFlat.at(0)
		};
		params = {
			"city": city,
			"state": state,
			"category": flatHouse,
			"status": rentSale,
			"rooms": +rooms
		}
		for (var key in params) {
			// console.log(params[key], '+---+')

			if (params[key] == null) {
				params[key] = ""
			};

		};
		// console.log(params)
		let page;
		window.scrollTo({ top: 1900, behavior: 'smooth' })
		feturesSection(page = page, params = params)




		//   let page = e.target.href.at(-1);
		//   window.scrollTo({ top: 1900, behavior: 'smooth' })
		//   feturesSection(page=page)
	});


	document.querySelector('#sellFlatHouse').addEventListener('click', function (e) {
		e.preventDefault();
		let sellRooms = document.querySelector('#sellRooms')
		sellRooms.removeAttribute("disabled")
		if (e.target.value == "2") {
			sellRooms.setAttribute("disabled", "disabled")
		}
	});


	// Feature section

	async function feturesSection(page = 1, params = {}) {
		let response;
		if (JSON.stringify(params) === '{}') {
			response = await fetch(`http://127.0.0.1:8000/api/v1/properties/?page=${page}`);
		} else {
			response = await fetch(`http://127.0.0.1:8000/api/v1/properties/?page=${page}&city=${params["city"]}&state=${params["state"]}&category=${params["category"]}&status=${params["status"]}&bedrooms=${params["rooms"]}`);
		};

		const propertyData = await response.json();
		// console.log(propertyData)


		let itemElement = document.querySelector(".feature-section")
		let row = itemElement.querySelector(".row")
		row.innerHTML = ""

		propertyData["items"].forEach(function (element) {
			let divCol = document.createElement("div")
			divCol.classList.add("col-lg-4")
			divCol.classList.add("col-md-6")

			let button = document.createElement("a")
			button.setAttribute("href", `http://127.0.0.1:8000/api/v1/properties/${element["id"]}/static/single-list.html`)


			let divFeature = document.createElement("div")
			divFeature.classList.add("feature-item")

			let divFeaturePic = document.createElement("div")
			divFeaturePic.classList.add("feature-pic")
			divFeaturePic.classList.add("set-bg")
			divFeaturePic.setAttribute("data-setbg", element["photo"])
			divFeaturePic.setAttribute("style", `background-image: url(${element["photo"]});`)

			let divSale = document.createElement("div")
			if (element["status"] == "sale") {
				divSale.classList.add("sale-notic")
				divSale.textContent = "FOR SALE"
			};
			if (element["status"] == "rent") {
				divSale.classList.add("rent-notic")
				divSale.textContent = "FOR RENT"
			};

			divFeaturePic.append(divSale)


			let divFeatureText = document.createElement("div")
			divFeatureText.classList.add("feature-text")

			let divTextCenter = document.createElement("div")
			divTextCenter.classList.add("text-center")
			divTextCenter.classList.add("feature-title")
			let h5 = document.createElement("h5")
			h5.textContent = element["street"]

			let p = document.createElement("p")
			let i = document.createElement("i")
			i.classList.add("fa")
			i.classList.add("fa-map-marker")
			p.textContent = ` ${element["city"]}, ${element["state"]} ${element["postal_code"]}`
			p.prepend(i)
			divTextCenter.append(h5, p)


			let divRoomW = document.createElement("div")
			divRoomW.classList.add("room-info-warp")

			let divRoom1 = document.createElement("div")
			divRoom1.classList.add("room-info")

			let divRfL = document.createElement("div")
			divRfL.classList.add("rf-left")

			let p1 = document.createElement("p")
			let i1 = document.createElement("i")
			i1.classList.add("fa")
			i1.classList.add("fa-th-large")
			p1.textContent = `${element["house_area"]} Square foot`
			p1.prepend(i1)

			let p2 = document.createElement("p")
			let i2 = document.createElement("i")
			i2.classList.add("fa")
			i2.classList.add("fa-bed")
			p2.textContent = `${element["bedrooms"]} Bedrooms`
			p2.prepend(i2)
			divRfL.append(p1, p2)

			let divRfR = document.createElement("div")
			divRfR.classList.add("rf-right")

			let pR1 = document.createElement("p")
			let iR1 = document.createElement("i")
			iR1.classList.add("fa")
			iR1.classList.add("fa-car")
			pR1.textContent = `${element["garages"]} Garages`
			pR1.prepend(iR1)

			let pR2 = document.createElement("p")
			let iR2 = document.createElement("i")
			iR2.classList.add("fa")
			iR2.classList.add("fa-bath")
			pR2.textContent = `${element["bathrooms"]} Bathrooms`
			pR2.prepend(iR2)
			divRfR.append(pR1, pR2)


			let divRoom2 = document.createElement("div")
			divRoom2.classList.add("room-info")

			let divU = document.createElement("div")
			divU.classList.add("rf-left")

			let pU = document.createElement("p")
			let iU = document.createElement("i")
			iU.classList.add("fa")
			iU.classList.add("fa-user")
			let a = document.createElement("a")
			a.setAttribute("href", "#")
			a.textContent = element["agent_id"]
			pU.append(a)
			pU.prepend(iU)

			divU.append(pU)

			let divC = document.createElement("div")
			divC.classList.add("rf-right")

			let pC = document.createElement("p")
			let iC = document.createElement("i")
			iC.classList.add("fa")
			iC.classList.add("fa-clock-o")
			pC.textContent = `${element["time_published"]} days ago`
			pC.prepend(iC)
			divC.append(pC)

			let divPrice = document.createElement("div")

			divPrice.classList.add("room-price")
			divPrice.textContent = element["price"]

			divRoom2.append(divU, divC)
			divRoom1.append(divRfL, divRfR)
			divRoomW.append(divRoom1, divRoom2)


			divFeatureText.append(divTextCenter, divRoomW, divPrice)
			divFeature.append(divFeaturePic, divFeatureText)
			button.append(divFeature)
			divCol.append(button)


			row.append(divCol)
		});

		await pagination(propertyData, page)

	};


	// Gallery section

	async function gallerySection() {
		response = await fetch(`http://127.0.0.1:8000/api/v1/properties/count-sities`);

		const propertyData = await response.json();

		let itemElement = document.querySelector(".gallery-section")
		let container = itemElement.querySelector(".container")

		let divGallery = document.createElement("div")
		divGallery.classList.add("gallery")
		divGallery.setAttribute("style", "position: relative; height: 590px;")

		let divSizer = document.createElement("div")
		divSizer.classList.add("grid-sizer")

		divGallery.append(divSizer)


		propertyData["cities"].forEach(function (element, index) {

			let link = document.createElement("a")
			// link.setAttribute("href", "#")
			link.setAttribute("href", element[0])
			link.setAttribute("data-setbg", `img/gallery/${index + 1}.jpg`)
			link.classList.add("gallery-item")
			link.classList.add("set-bg")
			if (index + 1 == 1) {
				link.classList.add("grid-long")
				link.setAttribute("style", `background-image: url(img/gallery/${index + 1}.jpg); height: 570px; left: 580px; top: 0px;`)
			};
			if (index + 1 == 2) {
				link.classList.add("grid-wide")
				link.setAttribute("style", `background-image: url(img/gallery/${index + 1}.jpg); height: 280px; position: absolute; left: 0px; top: 0px;`)
					;
			}

			if (index + 1 == 3) {
				link.setAttribute("style", `background-image: url(img/gallery/${index + 1}.jpg); height: 270px; position: absolute; left: 0px; top: 300px;`)
			};
			if (index + 1 == 4) {
				link.setAttribute("style", `background-image: url(img/gallery/${index + 1}.jpg); height: 270px; position: absolute; left: 290px; top: 300px;`)
			};

			let divGiinfo = document.createElement("div")
			let h3 = document.createElement("h3")
			let p = document.createElement("p")
			h3.textContent = element[0]
			p.textContent = `${element[1]} Properties`
			divGiinfo.classList.add("gi-info")
			divGiinfo.append(h3, p)

			link.append(divGiinfo)
			divGallery.append(link)
		});

		container.append(divGallery)

		let itemGallery = document.querySelector(".gallery-section");
		let containerGallery = itemGallery.querySelector(".gallery");
		console.log(containerGallery)


		containerGallery.addEventListener('click', function (e) {

			console.log(containerGallery)

			e.preventDefault();

			let cityName = String(e.target.children[0].textContent)
			// console.log(cityName)

			let state = "";
			let flatHouse = 0;
			let rentSale = "";
			let room = 0;
			let page;

			params = {
				"city": cityName,
				"state": state,
				"category": flatHouse,
				"status": rentSale,
				"rooms": +room
			}


			feturesSection(page = page, params = params)
			itemGallery.setAttribute("style", "display: none")
			window.scrollTo({ top: 1000, behavior: 'smooth' })
		});
	};



	// Pagination

	async function pagination(propertyData, currentPage) {
		// console.log(propertyData["pages"], currentPage, '----')

		if (propertyData["pages"] > 0) {

			let divPagina = document.querySelector(".site-pagination")
			divPagina.innerHTML = ""

			let aPreview = document.createElement("a")
			let iLeft = document.createElement("i")

			aPreview.setAttribute("href", `?page=${propertyData["page"] - 1}`)

			iLeft.classList.add("fa")
			iLeft.classList.add("fa-angle-left")

			aPreview.append(iLeft)

			let aNext = document.createElement("a")
			let iRight = document.createElement("i")

			aNext.setAttribute("href", `?page=${propertyData["page"] + 1}`)

			iRight.classList.add("fa")
			iRight.classList.add("fa-angle-right")
			aNext.append(iRight)

			let liNext = document.createElement("li")
			liNext.setAttribute("style", "display: inline-block")
			liNext.append(aNext)
			let ul = document.createElement("ul")
			ul.setAttribute("style", "list-style-type: none")

			let liPreview = document.createElement("li")
			liPreview.setAttribute("style", "display: none")

			if (propertyData["page"] > 1) {
				liPreview.style.display = "inline-block"
				liPreview.append(aPreview)
			};
			ul.append(liPreview)

			for (let element = 1; element <= propertyData["pages"]; element++) {

				let a = document.createElement("a")
				let li = document.createElement("li")
				a.setAttribute("style", "display='none'")
				li.setAttribute("style", "display='none'")


				if (element >= (propertyData["page"] - 2) && element <= (propertyData["page"] + 2)) {
					a.setAttribute("href", `?page=${element}`)
					a.textContent = element
					li.setAttribute("style", "display: inline-block")
					li.append(a)
					ul.append(li)
				};
				if (element == propertyData["page"]) {
					a.removeAttribute("href")
					a.style.color = "#d4d2d2"
				};
			};
			if (currentPage == propertyData["pages"]) {
				liNext.style.display = "none"
			};
			ul.append(liNext)
			divPagina.append(ul)

		};
	};


	document.querySelector('.site-pagination').addEventListener('click', function (e) {
		if (e.target.tagName == "A") {
			e.preventDefault();
			let url = String(e.target.href)
			let page = url.slice(url.length - 3, url.length).match(/\d+/)[0]
			window.scrollTo({ top: 1900, behavior: 'smooth' })
			feturesSection(page = +page, params = params,)
		}
	});


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
		element["serviceItems"].forEach(function (element, idx) {
			let div = document.createElement("div")
			div.classList.add("service-item")
			let i = document.createElement("i")
			i.classList.add("fa")
			if (idx == 0) { i.classList.add("fa-comments") }
			if (idx == 1) { i.classList.add("fa-home") }
			if (idx == 2) { i.classList.add("fa-briefcase") }
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

		element["reviewItems"].forEach(function (elem, idx) {
			let h5 = document.createElement("h5")
			let p = document.createElement("p")
			let span = document.createElement("span")
			let div2 = document.createElement("div")
			let div3 = document.createElement("div")
			div2.classList.add("rating")
			div3.classList.add("review-item")
			div3.classList.add("text-white")

			for (let num = 0; num < 5; num++) {
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

	// Clients section 

	async function clientsSection() {

		let element = main_site["clients"]
		let itemElement = document.querySelector(".clients-section")
		let clientsSlider = itemElement.querySelector(".clients-slider")

		clientsSlider.classList.add("owl-carousel")
		clientsSlider.classList.add("owl-loaded")
		clientsSlider.classList.add("owl-drag")

		element.forEach(function (elem, idx) {
			let link = document.createElement("a")
			link.setAttribute("href", "https://ya.ru")
			let img = document.createElement("img")
			img.setAttribute("src", elem)
			img.setAttribute("alt", "client")
			link.append(img)
			clientsSlider.append(link)
		});
		return clientsSlider
	};

	// Footer section


	async function footerSection() {

		let element = main_site["footer"]

		let itemElement = document.querySelector(".footer-section")
		let rowElement = itemElement.querySelector(".row")

		for (let idx = 0; idx < 4; idx++) {
			let divCol = document.createElement("div")
			divCol.classList.add("col-lg-3")
			divCol.classList.add("col-md-6")
			divCol.classList.add("footer-widget")

			if (idx == 0) {

				let img = document.createElement("img")
				img.setAttribute("src", element["image"])
				img.setAttribute("alt", "logo")

				let p = document.createElement("p")
				p.textContent = element["p"]
				let divLinks = document.createElement("div")
				divLinks.classList.add("social")

				element["socialLinks"].forEach(function (elem, idx) {

					let a = document.createElement("a")
					a.setAttribute("href", elem)
					let i = document.createElement("i")
					i.classList.add("fa")
					if (idx == 0) { i.classList.add("fa-facebook") }
					if (idx == 1) { i.classList.add("fa-twitter") }
					if (idx == 2) { i.classList.add("fa-instagram") }
					if (idx == 3) { i.classList.add("fa-pinterest") }
					if (idx == 4) { i.classList.add("fa-linkedin") }
					a.append(i)
					divLinks.append(a)
				});
				divCol.append(img, p, divLinks)
			};
			rowElement.append(divCol)

			if (idx == 1) {

				let divContact = document.createElement("div")
				divContact.classList.add("contact-widget")

				let h5 = document.createElement("h5")
				h5.classList.add("fw-title")
				h5.textContent = "CONTACT US"
				divContact.append(h5)

				element["contacts"].forEach(function (elem, idx) {
					let p = document.createElement("p");
					let i = document.createElement("i")
					i.classList.add("fa")
					if (idx == 0) {
						p.textContent = elem
						i.classList.add("fa-map-marker")
					};
					if (idx == 1) {
						p.textContent = elem
						i.classList.add("fa-phone")
					};
					if (idx == 2) {
						p.textContent = elem
						i.classList.add("fa-envelope")
					};
					if (idx == 3) {
						p.textContent = elem
						i.classList.add("fa-clock-o")
					};
					p.prepend(i)
					divContact.append(p)
				});
				divCol.prepend(divContact)
			};


			if (idx == 2) {

				let divDouble = document.createElement("div")
				divDouble.classList.add("double-menu-widget")

				let h5 = document.createElement("h5")
				h5.classList.add("fw-title")
				h5.textContent = "POPULAR PLACES"
				divDouble.append(h5)

				let ul = document.createElement("ul")

				element["popularPlacesLinks"][0].forEach(function (elem, idx) {
					let li = document.createElement("li");
					let a = document.createElement("a");
					a.setAttribute("href", "https://ya.ru")
					a.textContent = elem["title"]
					li.append(a)

					ul.append(li)
				});
				divDouble.append(ul)
				let ul2 = document.createElement("ul")

				element["popularPlacesLinks"][1].forEach(function (elem, idx) {
					let li = document.createElement("li");
					let a = document.createElement("a");
					a.setAttribute("href", "https://ya.ru")
					a.textContent = elem["title"]
					li.append(a)

					ul2.append(li)
				});
				divDouble.append(ul2)
				divCol.append(divDouble)
			};
			rowElement.append(divCol)

			if (idx == 3) {

				let divNewslatter = document.createElement("div")
				divNewslatter.classList.add("newslatter-widget")

				let h5 = document.createElement("h5")
				h5.classList.add("fw-title")
				h5.textContent = "NEWSLETTER"

				let p = document.createElement("p")
				p.textContent = "Subscribe your email to get the latest news and new offer also discount"
				let form = document.createElement("form")
				form.classList.add("footer-newslatter-form")
				let input = document.createElement("input")
				input.setAttribute("type", "text")
				input.setAttribute("placeholder", "Email address")
				let button = document.createElement("button")
				let i = document.createElement("i")
				i.classList.add("fa")
				i.classList.add("fa-send")
				button.append(i)
				form.append(input, button)
				divNewslatter.append(h5, p, form)
				divCol.append(divNewslatter)

			};
			rowElement.append(divCol)
		};
	};


	async function footerBbottom() {

		let element = main_site["footer"]


		let itemElement = document.querySelector(".footer-section")
		let containerElement = itemElement.querySelector(".container")


		let divBottom = document.createElement("div")
		divBottom.classList.add("footer-bottom")

		let nav = document.createElement("div")
		nav.classList.add("footer-nav")

		let divCopyright = document.createElement("div")
		divCopyright.classList.add("copyright")

		let p = document.createElement("p")
		p.innerHTML = `Copyright &copy ${new Date().getFullYear()} All rights reserved `
		divCopyright.append(p)
		let ul = document.createElement("ul")

		element["footerBottom"].forEach(function (elem, idx) {
			let li = document.createElement("li");
			let a = document.createElement("a");
			a.setAttribute("href", elem["link"])
			a.textContent = elem["text"]
			li.append(a)
			ul.append(li)
		});
		nav.append(ul)
		divBottom.append(nav, divCopyright)
		containerElement.append(divBottom)
	};



	headerTopLeft()
	headerTopRight()
	mainMenu()
	heroSection()
	servicesSection()
	footerSection()
	footerBbottom()
	feturesSection()
	gallerySection()




	// jQuery


	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function (event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	$('.gallery').find('.gallery-item').each(function () {
		var pi_height1 = $(this).outerWidth(true),
			pi_height2 = pi_height1 / 2;

		if ($(this).hasClass('grid-long') && window_w > 991) {
			$(this).css('height', pi_height2);
		} else {
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


	$('.clients-slider').append(clientsSection())
	$('.clients-slider').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 30,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 2,
				margin: 10
			},
			600: {
				items: 3
			},
			800: {
				items: 3
			},
			1000: {
				items: 5
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
		items: 1,
		slideSpeed: 2000,
		nav: false,
		autoplay: true,
		dots: true,
		loop: true,
		responsiveRefreshRate: 200,
	}).on('changed.owl.carousel', syncPosition);

	sync2.on('initialized.owl.carousel', function () {
		sync2.find(".owl-item").eq(0).addClass("current");
	}).owlCarousel({
		items: slidesPerPage,
		dots: true,
		nav: true,
		margin: 10,
		smartSpeed: 200,
		slideSpeed: 500,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
		responsiveRefreshRate: 100
	}).on('changed.owl.carousel', syncPosition2);

	function syncPosition(el) {
		//if you set loop to false, you have to restore this next line
		var current = el.item.index;
		//if you disable loop you have to comment this block
		var count = el.item.count - 1;
		var current = Math.round(el.item.index - (el.item.count / 2) - .5);

		if (current < 0) {
			current = count;
		}
		if (current > count) {
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
		if (syncedSecondary) {
			var number = el.item.index;
			sync1.data('owl.carousel').to(number, 100, true);
		}
	}

	sync2.on("click", ".owl-item", function (e) {
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








