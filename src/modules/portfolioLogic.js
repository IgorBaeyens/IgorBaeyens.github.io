/* eslint-disable no-unused-vars */

import gsap from "gsap"

let portfolio = document.getElementsByClassName("portfolio__items")[0]
let imageViewer = document.getElementsByClassName("portfolio-image-viewer")[0]
let imageViewerClose = document.getElementsByClassName("portfolio-image-viewer__close-button")[0]
let imageViewerInfo = document.getElementsByClassName("portfolio-image-viewer__info")[0]
let carouselSlider = document.getElementsByClassName("carousel__slider")[0]
let carouselDots = document.getElementsByClassName("image-viewer__dots")[0]
let portfolioItems
let carouselSlideWidth

const addPortfolioLogic = () => {
    async function requestData() {
        let response = await fetch("assets/data/portfolio.json")
        let portfolioData = await response.json()
    
        

        portfolioData = sortData(portfolioData)

        addPortfolioItemElems(portfolioData)
        
    }
    requestData()

    const sortData = (data) => {

        // newest to oldest
        data = data.sort((itemOne, itemTwo) => {
            if(itemOne.id > itemTwo.id) {
                return -1
            }
        })

        return data
    }
    
    const addPortfolioItemElems = (portfolioData) => {
        let htmlPortfolioItems = ``
        for (const portfolioItem of portfolioData) {
            htmlPortfolioItems += `
            <div class="portfolio__item item">
                <img class="portfolio__item__thumbnail item__thumbnail" src="${portfolioItem.images.image1}" alt="">
                <div class="portfolio__item__info item__info">
                    <h1 class="portfolio__item__title">${portfolioItem.title}</h1>
                    <p class="portfolio__item__type">${portfolioItem.type}</p>
                    <p class="portfolio__item__date">${portfolioItem.date}</p>
                </div>
            </div>
            `
        }
        portfolio.innerHTML = htmlPortfolioItems

        addImageViewer(portfolioData)
    }

    const addImageViewer = (portfolioData) => {
        portfolioItems = document.getElementsByClassName("portfolio__item")
        
        for (const portfolioItemElem of portfolioItems) {
            portfolioItemElem.addEventListener('click', (event) => {
                let itemElementTitle = event.currentTarget.getElementsByClassName("portfolio__item__title")[0].textContent
                for (const portfolioItem of portfolioData) {
                    if (itemElementTitle == portfolioItem.title) {
                        slideUpAnimationTmln.play()

                        addCarouselImages(portfolioItem)
                        
                        addItemViewerInfo(portfolioItem)
                        
                        addCarouselLogic()
                    }
                }
                
            })
        }

       imageViewerClose.addEventListener('click', () => {
            slideUpAnimationTmln.reverse()
       })
    }

    let slideUpAnimationTmln = gsap.timeline()
    slideUpAnimationTmln.to(portfolio, {opacity: 0, duration: 0.2, ease: "Power1.easeInOut"})
    slideUpAnimationTmln.to(portfolio, {display: "none", duration: 0})
    slideUpAnimationTmln.to(imageViewer, {display: "block", duration: 0})
    slideUpAnimationTmln.fromTo(imageViewer, {opacity: 0, translateY: 100, duration: 0.8, ease: "Power1.easeInOut"}, {opacity: 1, translateY: 0})
    slideUpAnimationTmln.paused(true)

    const addCarouselImages = (portfolioItem) => {
        let htmlItemSlides = ``
        let htmlCarouselDots = ``
        let i = 1
        let itemImages = Object.values(portfolioItem.images)
        itemImages.forEach((image) => {
            let htmlSlide
            if (image.includes(".mp4")) {
                htmlSlide = `
                    <video class="portfolio-image" src="${image}" type="video/mp4" loop controls></video>
                `
            } else {
                htmlSlide = `
                    <img class="portfolio-image" src="${image}" alt="">
                `
            }
            htmlItemSlides += `
                <div class="carousel__slide">
                    ${htmlSlide}
                </div>
            `
            htmlCarouselDots += `
                <input type="radio" class="image-viewer__dot" name="images" value="image-${i}">
            `
            i++
        })
        carouselSlider.innerHTML = htmlItemSlides
        carouselDots.innerHTML = htmlCarouselDots
    }

    const addCarouselLogic = () => {
        let carouselDotElems = document.getElementsByClassName("image-viewer__dot")
        let carouselSlide = document.getElementsByClassName("carousel__slide")[0]
        for (const dotElem of carouselDotElems) {
            if (dotElem.value == "image-1") {
                dotElem.checked = true
                gsap.to(carouselSlider, {translateX: 0, duration: 0.05})
            }
            dotElem.addEventListener('change', (event) => {
                carouselSlideWidth = parseInt(window.getComputedStyle(carouselSlide).width) 

                if (event.target.value == "image-1") {
                    gsap.to(carouselSlider, {translateX: 0})
                } else {
                    gsap.to(carouselSlider, {translateX: -carouselSlideWidth * (dotElem.value.replace(/\D/g,'') - 1)})
                }
            })
        }
    }

    

    const addItemViewerInfo = (portfolioItem) => {
        let htmlItemViewerInfo = ``
        htmlItemViewerInfo = `
            <h1 class="portfolio-image-viewer__title">${portfolioItem.title}</h1>
            <a href="${portfolioItem.twitter.link}"target="_blank"><p class="portfolio-image-viewer__link">${portfolioItem.twitter.name}</p></a>
            <p class="portfolio-image-viewer__date">${portfolioItem.date}</p>
        `
        imageViewerInfo.innerHTML = htmlItemViewerInfo 
    }
    
}



export { addPortfolioLogic }