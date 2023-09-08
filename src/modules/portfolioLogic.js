/* eslint-disable no-unused-vars */


let portfolio = document.getElementsByClassName("portfolio__items")[0]

const addPortfolioLogic = () => {
    async function requestData() {
        let response = await fetch("assets/data/portfolio.json")
        let portfolioData = await response.json()
    
        createPortolioItemElems(portfolioData)
    }
    requestData()
    
    const createPortolioItemElems = (portfolioData) => {
        let htmlPortfolioItems = ``
        for (const portfolioItem of portfolioData) {
            htmlPortfolioItems += `
            <div class="portfolio__item">
                <img class="portfolio__item__thumbnail" src="${portfolioItem.thumbnail}" alt="">
                <div class="portfolio__item__info">
                    <h1 class="portfolio__item__title">${portfolioItem.name}</h1>
                    <p class="portfolio__item__type">${portfolioItem.type}</p>
                    <p class="portfolio__item__date">${portfolioItem.date}</p>
                </div>
            </div>
            `
        }
        // addHTMLToDiv(portfolio, htmlPortfolioItems)
    }
    
    const addHTMLToDiv = (div, htmlString) => {
        div.innerHTML = htmlString
    }
}



export { addPortfolioLogic }