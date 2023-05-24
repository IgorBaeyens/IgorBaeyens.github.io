
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
            <div class="portfolio-item__thumbnail">
                <img src="${item.thumbnail}" width="100%" alt="">
            </div>
            <div class="portfolio-item__videos" style="display: none;">
                <p>showcase</p>
                <iframe style="width:100%; aspect-ratio: 16/9; margin: 10px 0px 30px; border-radius: 10px;"  src="${item.showcase}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            
                ${trackingSubContent}
            </div>
            <div class="portfolio-item__toggle-space">
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
    startingPriceMin: "<mark>750 EU</mark>",
    startingPriceMax: "<mark>1000 EU</mark>",
    baseModel: "<mark>125 EU</mark>",
    ARKit: "<mark>75 EU</mark>",
    accessoryMin: "<mark>50 EU</mark>",
    accessoryMax: "<mark>100 EU</mark>",
    expressionMin: "<mark>15 EU</mark>",
    expressionMax: "<mark>30 EU</mark>",
    outfitMin: "<mark>200 EU</mark>",
    outfitMax: "<mark>400 EU</mark>"
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
        <p><b>The starting price for a commission ranges from ${prices.startingPriceMin} to ${prices.startingPriceMax}. This includes:</b></p>
        <ul>
            <li>character in VRM format for use as a Vtuber</li>
            <li>character in VSF format for use as a Vtuber in VSeeFace (better rigging than VRM since VSF allows for bone constraints and magica cloth)</li>
            <li>character in FBX format</li>
            <li>The blender file and textures</li>
            <li>5 expressions (neutral, happy, angry, sad, smug)</li>
            <li>visemes for audio based mouth movement</li>
            <li>spring bones used for physics (used to move hair, ears, clothing or tails)</li>
        </ul>
        <br><br>
        <p><b>Following things can be added on top:</b></p>
        <ul>
            <li>base model for ${prices.baseModel}</li>
            <li>ARkit blendshapes for ${prices.ARKit}</li>
            <li>extra toggleable accessories  (glasses, hat, etc) for ${prices.accessoryMin}~${prices.accessoryMax} each</li>
            <li>extra expressions for ${prices.expressionMin}~${prices.expressionMax} each</li>
            <li>extra outfits for ${prices.outfitMin}~${prices.outfitMax} each</li>
        </ul>
        <p>Be sure to add more references if you want me to add something extra. Otherwise i cannot accurately create what you want me to.</p>
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
            <li>converting to vrm</li>
        </ul>
        <p>After every update you can ask for revisions if you're not satisfied with something. I will send another update after the revisions are done.</p>
        <br><br>
        <p><b>Important</b></p>
        <p>
            In order to accurately model your character i need a <mark>reference sheet</mark>. The reference sheet 
            should have a front view and a back view of your character. a side view and more views of detailed or ambigious spots are very welcome.
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
            <li><mark>a commission is finished when</mark> the client has seen that the product works as advertised and has received a zip file containing a vrm, vsf and fbx file of the character, a blender file and a folder with textures of the character</li>
            <li>a commission can take up to <mark>${termPeriods.commPeriodMonths} months</mark> time (<mark>${termPeriods.commPeriodDays} days</mark>)</li>
            <li>I will send <mark>updates</mark> after completing following stages of the commission: modelling the base, modelling the outfit and hair, texturing the character, creating all of the expressions and converting the character to vrm format </li>
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
            <li>if <mark>I do not finish the commission</mark> in the ${termPeriods.commPeriodDays} day commission deadline the client may choose to be fully refunded but then they will not receive the commission files</li>
            <li>if the <mark>client cancels within ${termPeriods.refundPeriodDays} days</mark> of starting the commission they will be fully refunded minus a cancellation fee of 10%</li>
            <li>if the <mark>client cancels after the ${termPeriods.refundPeriodDays} day period</mark> they will not be refunded</li>
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