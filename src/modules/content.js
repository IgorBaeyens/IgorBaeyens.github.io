
let portfolioItems = ``
async function requestData() {
    let response = await fetch("assets/data/portfolio.json")
    let portfolioData = await response.json()

    CreatePortfolioItems(portfolioData)
}
requestData()

function CreatePortfolioItems(portfolioData) {
    
    //sort big to small
    portfolioData = portfolioData.sort((itemOne, itemTwo) => {
        if(itemOne.id > itemTwo.id) {
            return -1
        }
    })

    portfolioData.forEach(item => {
        let trackingSubContent = ``
        let showcaseSubContent = ``

        if (item.showcase != "") {
            showcaseSubContent = `
            <p>showcase</p>
            <iframe style="width:100%; aspect-ratio: 16/9; margin: 10px 0px 30px; border-radius: 10px;"  src="${item.showcase}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            
            `
        }

        if (item.tracking != "") {
            trackingSubContent = `
            <br>
            <p>tracking</p>
            <iframe style="width:100%; aspect-ratio: 16/9; margin-top: 10px; border-radius: 10px;"  src="${item.tracking}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            
            `
        }

        portfolioItems +=`
        <div class="grid-item">
            <div class="portfolio-item__header">
                <div class="portfolio-item__title">
                    <h1>${item.name}</h1>
                    <p><small>${item.type}</small></p>
                </div>
                <p><a href="${item.twitter.link}" target="_blank">${item.twitter.name}</a></p>
            </div>
            <br>
            <div class="portfolio-item__thumbnail-container">
                <img class="portfolio-item__thumbnail" src="${item.thumbnail}" width="100%" alt="">
            </div>
            <div class="portfolio-item__videos-container" style="display: none;">
                ${showcaseSubContent}
                ${trackingSubContent}
            </div>
            <div class="portfolio-item__toggle-container">
                <img class="portfolio-item__toggle __scale interact" src="assets/images/arrow.svg" alt="">
            </div>
        </div>
        `        
    })

    let portfolioContent = `
    <div id="portfolio-content" class="grid">
        <div class="grid-sizer"></div>
        ${portfolioItems}
    </div>
    `

    text.portfolio = portfolioContent
}


const prices = {
    startingPriceMin: "600 EU",
    startingPriceMax: "850 EU",
    vsfAndVrm: "150 EU",
    baseModel: "125 EU",
    ARKit: "75 EU",
    accessoryMin: "50 EU",
    accessoryMax: "100 EU",
    expressionMin: "15 EU",
    expressionMax: "30 EU",
    outfitMin: "200 EU",
    outfitMax: "400 EU"
}

const termPeriods = {
    commPeriodDays: "62",
    commPeriodMonths: "2",
    revealDelayPeriod: "31",
    refundPeriodDays: "21"

}

const text = {
    infoAndPrices: `
        <h1>Prices</h1>
        <p><b>The starting price for a commission ranges from <mark>${prices.startingPriceMin}</mark> to <mark>${prices.startingPriceMax}</mark>. This includes:</b></p>
        <ul>
            <li>character in FBX format (rigged as Unity humanoid when needed)</li>
            <li>The blender file included with animation rig</li>
            <li>Folder with textures</li>
            <li>5 blendshape expressions (neutral, happy, angry, sad, smug)</li>
            <li>viseme blendshapes for audio based mouth movement</li>
        </ul>
        <br><br>
        <p><b>Following things can be added on top:</b></p>
        <ul>
            <li>VRM and VSF format with physics for vtubing: <mark>${prices.vsfAndVrm}</mark></li>
            <li>textured and rigged base model: <mark>${prices.baseModel}</mark></li>
            <li>ARkit blendshapes: <mark>${prices.ARKit}</mark></li>
            <li>extra toggleable accessories  (glasses, hat, etc): <mark>${prices.accessoryMin}</mark>~<mark>${prices.accessoryMax}</mark> each</li>
            <li>extra expressions: <mark>${prices.expressionMin}</mark>~<mark>${prices.expressionMax}</mark> each</li>
            <li>extra outfits: <mark>${prices.outfitMin}</mark>~<mark>${prices.outfitMax}</mark> each</li>
        </ul>
        <p>Be sure to add more references if you want an extra outfit or accessory. Otherwise i cannot accurately create what you want me to.</p>
        <br><br><br>
        <h1>Info</h1>
        <p><b>Commissioning process</b></p>
        <p>
            Commissioning me is quite easy! I will likely have only one slot open for now, since I'm just starting out. 
            First you fill in my <mark>Google Form</mark> and submit it. If i choose you, you will receive a message from me, 
            either through discord or Twitter, saying that i've accepted your commission. Shortly after you will be sent a Paypal invoice
            and if you've payed half of the price I will begin working on your commission!
        </p>
        <br><br>
        <p><b>My work process</b></p>
        <p>
            Everything will be done by me in a period of 1 to 2 months. This means <mark>modelling</mark> the character, 
            <mark>UV unwrapping</mark> it which allows for the texturing of the character, then <mark>texturing</mark> itself which is 
            giving the character color, <mark>rigging</mark> the character so it can move, <mark>shape keys</mark> for the expressions 
            and finally <mark>converting</mark> the character so it can be used as a Vtuber model.
        </p>
        <br><br>
        <p><b>I will send updates when I finish:</b></p>
        <ul>
            <li>modelling the base</li>
            <li>modelling the outfit and hair</li>
            <li>texturing</li>
            <li>rigging</li>
            <li>the expressions</li>
            <li>converting to vrm and vsf</li>
        </ul>
        <p>After every update you can ask for revisions if you're not satisfied with something. I will send another update after the revisions are done.</p>
        <br><br>
        <p><b>Important</b></p>
        <p>
            In order to accurately model your character i need a <mark>reference sheet</mark>. The reference sheet 
            should have a front view and a back view of your character. A side view and more views of detailed or ambigious spots are very welcome.
        </p>
        <br><br>
        <p>
            Please be sure to read my <mark>Terms Of Service</mark> before commissioning me.
        </p>
        <br><br>
        <a href="https://forms.gle/ZyPk4XVTiTTNDV1U8" target="_blank"><button id="button_commission" class="button interact">Commission Zel</button></a>
    `,
    portfolio: ``,
    about: `
        <h1>About me</h1>
        <p>Hi. Zel here,</p>
        <p>an artist in heart and soul.</p>
        <br><br>
        <p>I started my 3D journey about 4 years ago, in a course for game graphics. There i mostly learned how to model objects, cars and houses. It didn’t have anything to do with characters just yet. But that’s when my love for 3D sparked. It’s a great midway between the artistic side and the technical side. fitting for someone like me.</p>
        <br><br>
        <p>After that first year spent in game graphics, I had switched into a different course that didn’t have 3D but nevertheless continued to improve my skills through self study. Which brings me at the level I am now.</p>
        <br><br>
        <p>Entertainment is my life and I’m always striving to become just as good as the artists from my favorite media.</p>
    `,
    tos: `
        <h1>Terms Of Service</h1>
        <p>By commissioning me you agree to the following terms:</p>
        <br>
        <p><b>General</b></p>
        <Ul>
            <li><mark>a commission is considered started when</mark> the client has paid 50% of the Paypal invoice price</li>
            <li><mark>a commission is finished when</mark> the client has seen that the product works as advertised and has received a zip folder containing the agreed upon files of the character</li>
            <li>a commission can take up to <mark>${termPeriods.commPeriodMonths} months</mark> time (<mark>${termPeriods.commPeriodDays} days</mark>)</li>
            <li>I will send <mark>updates</mark> after completing following stages of the commission: modelling the base, modelling the outfit and hair, texturing, rigging, creating all of the blendshapes and converting the character to vrm and vsf format </li>
            <li>there is no set limit on <mark>revisions</mark>. However, i do not see big changes that deviate from the originally given reference as a revision</li>
            <li><mark>re-selling</mark> of the commission files or it’s contents is not allowed by either me or the client</li>
            <li><mark>i am allowed to post updates and make WIP posts</mark> on social media and show the end result on my portfolio., <mark>unless</mark> the client specifies through the Google Form they want me to wait until they themselves reveal the 3D model.
                <br><br>
                If the client wants me to wait they get <mark>another ${termPeriods.revealDelayPeriod} day period</mark> to reveal the model after the commission is finished. When this period ends or the client has revealed the 3D model, I am allowed to post about the commission on social media and my portfolio
            </li>
        </Ul>
        <br><br>
        <p><b>Payment</b></p>
        <ul>
            <li>payment is in euro through <mark>Paypal invoice</mark></li>
            <li>50% of the payment will be paid upfront</li>
            <li>the commission files will be given to the client after they paid the other 50%</li>
        </ul>
        <br><br>
        <p><b>Refunding</b></p>
        <ul>
            <li>if <mark>I cancel the commission</mark> the client will be fully refunded</li>
            <li>if <mark>the client cancels after the commission has started</mark> they will be refunded based on the amount of work completed
            <li>no refunds will be issued <mark>after the commission is finished</mark></li>
        </ul>
    `,
    faq: `
        <h1>Frequently Asked Questions</h1>
        <p>empty for now</p>
        <br>
        <ul>
            <li>-</li><br>
            <li>-</li><br>
            <li>-</li><br>
            <li>-</li><br>
            <li>-</li><br>
            <li>-</li><br>
        </ul>
    `
}




export { text }