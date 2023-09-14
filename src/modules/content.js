
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
    startingPriceMin: "800 EU",
    startingPriceMax: "1200 EU",
    vrm: "150 EU",
    vsf: "200 EU",
    baseModel: "150 EU",
    ARKit: "100 EU",
    expressionMin: "20 EU",
    expressionMax: "40 EU",
    outfitMin: "200 EU",
    outfitMax: "400 EU",
    NDA: "10%",
    commercialUse: "40%"
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
            <li>character in FBX format (rigged as humanoid for tracking when needed)</li>
            <li>The blender file included with animation rig</li>
            <li>Folder with textures</li>
            <li>6 blendshape expressions (neutral, happy, angry, sad and 2 custom ones)</li>
            <li>viseme blendshapes for audio based mouth movement</li>
        </ul>
        <br><br>
        <p><b>Following things can be added on top:</b></p>
        <ul>
            <li>VRM format for vtubing (more used but less quality and features): <mark>${prices.vrm}</mark></li>
            <li>VSF format for vtubing (less used but more quality and features): <mark>${prices.vsf}</mark></li>
            <li>textured and rigged base model (makes it easier to add future outfits): <mark>${prices.baseModel}</mark></li>
            <li>ARkit blendshapes: <mark>${prices.ARKit}</mark></li>
            <li>extra expressions: <mark>${prices.expressionMin}</mark>~<mark>${prices.expressionMax}</mark> each</li>
            <li>extra outfits: <mark>${prices.outfitMin}</mark>~<mark>${prices.outfitMax}</mark> each</li>
            <li>Non Disclosure Agreement: <mark>${prices.NDA}</mark> of the commission price</li>
            <li>Commercial Use: <mark>${prices.commercialUse}</mark> of the commission price</li>
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
            should have a front view and a back view of your character. A side view and more views of detailed or ambigious spots are very welcome. I do not do NSFW work of any kind.
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
        <p><b>GENERAL</b></p>
        <ul>
            <li><mark>The client is 18+</mark> and legally able to commit to an agreement <mark>or has a legal guardian</mark> to make this agreement on their behalf.</li>
            <li>The client grants to the artist <mark>non-exclusive rights to replicate</mark> Client's own character design, reference materials or assets for the commission.</li>
            <li>The client warrants that the character design, reference material and other intellectual property provided to the artist are <mark>legally obtained and authorised</mark> for use by the Client.</li>
            <li>The artist warrants that they will <mark>not copy or heavily reference</mark> unauthorised materials.</li>
            <li>A commission is <mark>considered started</mark> when the client has paid 50% of the invoice price.</li>
            <li>A commission is <mark>considered finished</mark> when the client has received the final files.</li>
            <li><mark>Communication</mark> will be held either via Twitter DM or Discord</li>
        </ul>
        <br>
        <p><b>TIMELINE AND PROCESS</b></p>
        <ul>
            <li>A commission can take up to <mark>2 months(62 days)</mark> time</li>
            <li>A commission consists of <mark>several possible stages:</mark> modelling the body, modelling the hair, modelling the outfit, texturing the character, rigging the character, creating the blendshapes, and vtuber conversion. <mark>After each stage</mark> the artist will send an update.</li>
            <li>If a stage <mark>takes more than a week</mark> the client will be given an update, regardless of whether the stage is finished or not.</li>
            <li>If the client <mark>does not respond after 2 days</mark> of being given an update the artist is within their right to move on to the next stage.</li>
        </ul>
        <br>
        <p><b>REVISIONS</b></p>
        <ul>
            <li>After each update the client can give feedback and is <mark>allowed to ask for revisions.</mark></li>
            <li>There is no set limit on revisions. But it is <mark>not unlimited</mark> and changes that deviate from the originally agreed upon design are <mark>not seen as a revision.</mark></li>
            <li>If the client does request <mark>a change that wasn't originally planned,</mark> a fee will be proposed by the artist that represents the time and effort needed for that change.</li>
        </ul>
        <br>
        <p><b>DELIVERY</b></p>
        <ul>
            <li>the client acknowledges that <mark>the deliverables are digital</mark> and that there are no physically shipped goods to receive.</li>
            <li>The final files will be <mark>delivered after the last 50%</mark> of the invoice is paid.</li>
            <li>The final files will be <mark>delivered as a .RAR file via mail.</mark> If the file size is too big it will be uploaded on WeTransfer and a private link for download will be sent via mail instead.</li>
            <li>The artist is not in any way held responsible <mark>if the client loses their final files</mark> after the commission is finished.</li>
            <li><mark>After the commission</mark> is finished the client has one week to ask for one more free revision. this revision is <mark>only to resolve potential bugs and problems</mark> that the artist might have initially overlooked.</li>
        </ul>
        <br>
        <p><b>PAYMENTS</b></p>
        <ul>
            <li>Prices are <mark>in EU(euro)</mark>, and paid via Paypal invoice.</li>
            <li>The client warrants they will not issue chargebacks and that they <mark>will follow the refund policy</mark> mentioned in the Terms Of Service.</li>
        </ul>
        <br>
        <p><b>INTELLECTUAL PROPERTY RIGHTS</b></p>
        <ul>
            <li><mark>The artist retains</mark> copyright, ownership and intellectual property rights. Which includes but is not limited to the display and advertising of the commission on websites and social media.</li>
            <li><mark>If the client want's an NDA,</mark> a 10% fee will be added on top of the initial invoice price. After the client has revealed the commission contents, the NDA comes to a close and the artist is once more allowed to display and advertise the commission.</li>
            <li>The client receives exclusive, non-transferable usage rights.</li>
            <li>The client does not hold commercial rights unless given by the artist. <mark>If the client want's commercial rights,</mark> a 40% fee will be added on top of the initial invoice price.</li>
            <li>The client is <mark>allowed to</mark> use the commission for monetized streaming. The client is <mark>not allowed to</mark> sell the commission contents, use the contents for merchandise or make the contents publicly available unless given commercial rights.</li>
        </ul>
        <br>
        <p><b>REFUNDS</b></p>
        <ul>
            <li>A commission may take up to 2 months(62 days) time. <mark>If these 2 months have passed</mark> the client has the right to a full refund if requested.</li>
            <li><mark>If the artist cancels</mark> the commission the client will be fully refunded.</li>
            <li><mark>If the client cancels</mark> after the commission has started they will be refunded based on the amount of work completed. At least a minimum of 100 euro will be kept by the artist as reimbursement.</li>
            <li>No refunds will be issued <mark>after the commission</mark> is finished.</li>
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