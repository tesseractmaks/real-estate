/* =================================
------------------------------------
	LERAMIZ - Landing Page Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/
import Navigo from "navigo";


// import { jsonToData, setStorageData, deleteStorageData } from "./utils.js"
import { getHeader } from "./js/components/header.js"
import { heroSection } from "./js/components/hero.js"
import { heroSectionDetail } from "./js/components/hero-detail.js"
// import { filterFormSection } from './components/filter-form.js'
// import { gallerySection } from './components/gallery.js'
// import { feturesSection } from "./components/fetures-section.js"
// import { reviewSection } from "./components/review-slider.js"
import { getOneProperty } from "./js/components/list-properties.js"
import { getOneProfile } from "./js/components/list-profiles.js"
import { registrationForm, loginForm } from "./js/components/form-reg-login.js"

import { detailProfile } from "./js/pages/detail-profile.js"
import { kabinet } from "./js/pages/lk.js"
import { slDetailFeatures } from "./js/pages/detail-property.js"
import { detailNew } from "./js/pages/detail-property-edit.js"
import { profileNew } from "./js/pages/detail-profile-edit.js"

import { mainContainer  } from "./js/pages/main-page.js"

import { footerSection } from "./js/components/footer-section.js"


export const router = new Navigo('/');
// export let myHeaders;

// var window_w = $(window).innerWidth();
// $(window).on('load', function () {
// 	/*------------------
// 		Preloder
// 	--------------------*/
// 	$(".loader").fadeOut();
// 	$("#preloder").delay(400).fadeOut("slow");
// });


	/*------------------
			DOM
		--------------------*/

export async function mainSiteData() {

	let response = await fetch('http://127.0.0.1:8000/api/v1/main_site/')
	const mainData = await response.json();
	window.scrollTo({ top: 0, behavior: 'smooth'})

	return mainData
};

const mainSite = await mainSiteData()
// console.log(mainSite)



const app = document.querySelector("#app")

export function getPageContainer() {
	const page = document.createElement("container")
	page.classList.add("container")
	
	// if (pages) {
	// 	page.append(pages)
	// 	console.log(page,"==")

	// 	app.append(
	// 		headerSection, 
	// 		page,
	// 		pageContainer,
	// 		footerBlock,
	// 		)
	// }
	return page
}
export const pageContainer =  getPageContainer()
// pageContainer.innerHTML = ""
// Header section 
export const headerSection = await getHeader(mainSite)

// Hero section
export const heroBlock = heroSection(mainSite)
// Hero section Detail
export const heroBlockDetail =await heroSectionDetail()

// Filter form section
// const filterForm = filterFormSection()
// 
// Gallery section
// const galleryBlock = await gallerySection()

// Feature section
const mainPage = await mainContainer()

// Chat 


// console.log(chatBlock)





// // Review section
// const reviewBlock = await reviewSection()

// Services section
// const servicesBlock = await servicesSection(main_site)

// Clients section
// const clientsBlock = await clientsSection(main_site)

// Footer section
export const footerBlock = await footerSection(mainSite)

// export const detailBlockEdit = detailNew()

// main.append(feturesBlock, servicesBlock, reviewBlock, footerBlock)

// pageContainer.innerHTML = ""
// pageContainer.append(detailBlock)
// pageContainer.append(detailBlockEdit)
// pageContainer.append(heroBlockDetail, detailBlock)

const mainContaner = document.createElement("contaner")
router.on('/', function () {
	mainContaner.innerHTML = ""
	pageContainer.innerHTML = ""
	if (mainPage !="undefined") {
		pageContainer.append(mainPage)}
		mainContaner.append(heroBlock, pageContainer)
	});


// Property

router.on('/detail/:id', async function (e) {

	let ca = document.cookie;
		
		// myHeaders = `Bearer ${token.access_token}`;
	console.log(ca, "=-")

	mainContaner.innerHTML = ""
	pageContainer.innerHTML = ""
	const detailData = await getOneProperty(e.data.id)
	const detailBlock = await slDetailFeatures(detailData)
	pageContainer.append(detailBlock)
	mainContaner.append(heroBlockDetail, pageContainer)
  });

router.on('/edit/property/:id', async function (e) {
	// console.log(e.data.id)
	mainContaner.innerHTML = ""
	pageContainer.innerHTML = ""
	const detailData = await getOneProperty(e.data.id)

	let sectionNewDetail = await detailNew(detailData)
	pageContainer.innerHTML = ""
	
	pageContainer.append(sectionNewDetail)
	
	mainContaner.append(heroBlockDetail, pageContainer)
  });


// Profiles

router.on('/profile/:id', async function (e) {
	// console.log(e.data.id)

	mainContaner.innerHTML = ""
	pageContainer.innerHTML = ""
	const profileData = await getOneProfile(e.data.id)

	const detailBlock = await detailProfile(profileData)
	pageContainer.append(detailBlock)
	mainContaner.append(heroBlockDetail, pageContainer)
  });

router.on('/edit/profile/:id', async function (e) {
	// console.log(e.data.id)
	mainContaner.innerHTML = ""
	pageContainer.innerHTML = ""
	const profileData = await getOneProfile(e.data.id)

	let sectionNewDetail = await profileNew(profileData)
	pageContainer.innerHTML = ""
	
	pageContainer.append(sectionNewDetail)
	mainContaner.append(heroBlockDetail, pageContainer)
  });

//  Lk

router.on('/kabinet/:id', async function (e) {
	// console.log(e.data.id)
	mainContaner.innerHTML = ""
	pageContainer.innerHTML = ""
	const profileData = await getOneProfile(e.data.id)

	const detailBlock = await kabinet(profileData)
	pageContainer.append(detailBlock)
	mainContaner.append(heroBlockDetail, pageContainer)
  });

//   Registration/login

router.on('/registration', async function (e) {
	// console.log(e.data.id)
	mainContaner.innerHTML = ""
	pageContainer.innerHTML = ""
	const reg = await registrationForm()
	// let authModal = headerSection.querySelector(".modal")
	reg.classList.add("open")
	// authModal.classList.add("open")
	pageContainer.append(reg)
	mainContaner.append(heroBlock, pageContainer)

	let regForm = document.querySelector(".modal form")

	regForm.addEventListener("submit", async function (elem) {
	let modalElem = document.querySelector(".modal")
	modalElem.classList.remove("open")
	elem.preventDefault();

	let regUsername = document.querySelectorAll(".modal #reg-username")
	let regPassword = document.querySelectorAll(".modal #reg-password")

	//  one@mail.ru1
	//  qwerty

	// Array.from(regForm).forEach(async function (e) {

	console.log(regUsername[0].value, regPassword[0].value)

	let formData = new FormData()
	
	
    formData.append('email', regUsername[0].value);
    formData.append('password', regPassword[0].value)
    formData.append('is_active', true)


	const response = await fetch('http://127.0.0.1:8000/api/v1/users/',
		{
			method: 'POST',
			body: formData,
			// headers: {'Content-Type': 'multipart/form-data'},
            })
        const data = await response.json();
		console.log(data)
		// let ca = document.cookie;
		
		// // myHeaders = `Bearer ${token.access_token}`;
		// console.log(ca, "=-")

	
	
	router.navigate("/")
});
  });

router.on('/login', async function (e) {
	// console.log(e.data.id)
	// mainContaner.innerHTML = ""
	// pageContainer.innerHTML = ""
	const login = await loginForm()
	login.classList.add("open")
	pageContainer.append(login)
	mainContaner.append(heroBlock, pageContainer)


	// let regBtn = document.querySelector("#reg-Btn")

	regBtn.addEventListener("click", async function (elem) {
		let modalElem = document.querySelector(".modal")
		modalElem.classList.remove("open")
		elem.preventDefault();
		
		let loginUsername = document.querySelectorAll(".modal #login-username")
		let loginPassword = document.querySelectorAll(".modal #login-password")

		//  one@mail.ru1
		//  qwerty

		// Array.from(regForm).forEach(async function (e) {

		console.log(loginUsername[0].value, loginPassword[0].value)

		let formData = new FormData()
		formData.append('username', loginUsername[0].value);
		formData.append('password', loginPassword[0].value)
		
		const response = await fetch('http://127.0.0.1:8000/token',
			{
				method: 'POST',
				body: formData,
				headers: {"Authorization": "Bearer fgh" },
				credentials: 'include'
				})
			const token = await response.json();
			console.log(token.access_token)
			router.navigate("/")

		});
  });

router.resolve();

window.addEventListener("keydown", (e)=>{
	if (e.key === "Escape") {
		let modalObj = document.querySelector(".modal")
		modalObj.classList.remove("open")
	}
})






// app.innerHTML = ""
// app.append(
	// headerSection, 
// 	heroBlockDetail,
	
// 	// filterForm,
// 	pageContainer,
// 	footerBlock,
// 	)





app.innerHTML = ""
app.append(
	headerSection, 
	
	// filterForm,
	mainContaner,
	
	footerBlock,
	)




// router.resolve();
// let seconds = 1000 * 3
// let timerImg = setInterval(() =>slowSlider(), seconds);


let counterPointsSlow = 0;
// let counterSlow = 0;

// pointsSlider()

function slowSlider() {
	let points = document.querySelectorAll(".point")
	let images = document.querySelectorAll(".img-item")
	if(points[0]) {

	
		points[0].classList.add("active-image")
		images[0].classList.add("active-image")
		
		for(let i = 0; i < images.length; i++) {
			for(let p = 0; p < points.length; p++) {
				points[p].classList.remove("active-image")
			};
			images[i].classList.remove("active-image")
		};
		counterSlow++
		if (counterSlow >= images.length) {
			counterSlow =  0
		}
		
		if (counterPointsSlow > points.length-1) {
			counterPointsSlow = 0
		}

		points[counterPointsSlow].classList.add("active-image")
		counterPointsSlow++
		
		images[counterSlow].classList.add("active-image")
	};
};

// slowSlider()


// let seconds = 1000 * 30
// let timerImg = setInterval(() =>slowSlider(), seconds);


// let counterPointsSlow = 0;
let counterSlow = 0;

function slowSlider2() {
	// let points = document.querySelectorAll(".point")
	let images = document.querySelectorAll(".review-item")
	// if(points[0]) {
	
		// points[0].classList.add("active-image")
		images[0].classList.add("active-image")
		

		for(let i = 0; i < images.length; i++) {
			// for(let p = 0; p < points.length; p++) {
			// 	points[p].classList.remove("active-image")
			// };
			images[i].classList.remove("active-image")
		};
		counterSlow++
		if (counterSlow >= images.length) {
			counterSlow =  0
		}
		
		// if (counterPointsSlow > points.length-1) {
		// 	counterPointsSlow = 0
		// }

		// points[counterPointsSlow].classList.add("active-image")
		// counterPointsSlow++
		
		images[counterSlow].classList.add("active-image")
	// };
};

slowSlider2()


// let seconds = 1000 * 3
// let timerImg = setInterval(() =>slowSliderclients(), seconds);
let counterSlowclients = 0;

function slowSliderclients() {
	// let points = document.querySelectorAll(".point")
	let images = document.querySelectorAll(".clients-slider")
	// let images = document.querySelectorAll(".clients-item")
	// if(points[0]) {
	
		// points[0].classList.add("active-image")
		images[0].classList.add("active-clients")
		// console.log(images)
		

		for(let i = 0; i < images.length; i++) {
			// for(let p = 0; p < points.length; p++) {
			// 	points[p].classList.remove("active-image")
			// };
			images[i].classList.remove("active-clients")
		};
		counterSlowclients++
		if (counterSlowclients >= images.length) {
			counterSlowclients =  0
		}
		
		// if (counterPointsSlow > points.length-1) {
		// 	counterPointsSlow = 0
		// }

		// points[counterPointsSlow].classList.add("active-image")
		// counterPointsSlow++
		
		images[counterSlowclients].classList.add("active-clients")
	// };
	
};

