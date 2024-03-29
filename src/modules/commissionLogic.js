import gsap from "gsap"

let commTabs = document.getElementsByClassName("comm__tabs")[0]
let commHtmlText = document.getElementsByClassName("comm__content")[0]
let selectedTab

const addCommissionLogic = () => {
    commHtmlText.innerHTML = text.prices

    commTabs.addEventListener('change', (event) => {

        // if radio value and object property name are same, add property value
        if (text.hasOwnProperty(event.target.value)) {
            
            selectedTab = event.target.value
            // commHtmlText.innerHTML = text[event.target.value]
            
            slideUpAnimationTmln.restart()
        }

    })

}

let slideUpAnimationTmln = gsap.timeline()
slideUpAnimationTmln.to(commHtmlText, {opacity: 0, translateY: 100, duration: 0.2, ease: "Power1.easeIn", onComplete: () => {
    commHtmlText.innerHTML = text[selectedTab]
}})
slideUpAnimationTmln.to(commHtmlText, {opacity: 1, translateY: 0, duration: 0.8, delay: 0.4, ease: "Power1.easeInOut"})
slideUpAnimationTmln.paused(true)

const prices = {
    startingPriceMin: "1200 EU",
    startingPriceMax: "1800 EU",
    vrm: "150 EU",
    vsf: "200 EU",
    baseModel: "200 EU",
    ARKit: "150 EU",
    expressionMin: "20 EU",
    expressionMax: "40 EU",
    outfitMin: "200 EU",
    outfitMax: "400 EU",
    NDA: "10%",
    commercialUse: "40%"
}

const text = {
    prices: `
        <h1>Character model</h1>
        <p>The starting price for a character model ranges from <mark>${prices.startingPriceMin} to ${prices.startingPriceMax}</mark> this includes:</p>
        <ul>
            <li>Character in FBX format</li>
            <li>The Blender file included with animation rig</li>
            <li>folder with textures</li>
            <li>6 blendshape expressions (neutral, happy, angry, sad and 2 custom ones)</li>
            <li>viseme blendshapes for audio based mouth movement</li>
        </ul>
        <br>
        <p>Add-ons:</p>
        <ul>
            <li>VRM format for vtubing: <mark>${prices.vrm}</mark</li>
            <li>VSF format for vtubing (better quality than VRM but is supported less): <mark>${prices.vsf}</mark></li>
            <li>textured and rigged base model (makes it easier for artists to add future outfits): <mark>${prices.baseModel}</mark></li>
            <li>ARkit blendshapes: <mark>${prices.ARKit}</mark></li>
            <li>extra expressions: <mark>${prices.expressionMin}~${prices.expressionMax} each</mark></li>
            <li>extra outfits: <mark>${prices.outfitMin}~${prices.outfitMax} each</mark></li>
            <li>Non Disclosure Agreement: <mark>${prices.NDA} of the commission price</mark></li>
            <li>Commercial Use: <mark>${prices.commercialUse} of the commission price</mark></li>
        </ul>
        <br>
        <p>Be sure to add more reference if you want an extra outfit or accessory. Otherwise I cannot accurately create what you want me to.
        <h1>Others</h1>
        <p>For other kinds of commissions please send me an e-mail at zelkanisdayo@gmail.com</p>
    `,
    process: `
        <p>Making a character in 3D comes in a few stages. I will send out an update when i am done with: <mark>1.</mark>modelling the body <mark>2.</mark>modelling the hair <mark>3.</mark>modelling the clothing <mark>4.</mark>texturing the model <mark>5.</mark>rigging the model <mark>6.</mark>creating the blendshapes <mark>7.</mark>vtuber conversion. Detailed here is my general work process!</p>
        <br>
        <div class="comm__content__process">
            <div class="process__text" style="order: 1;">
                <h1>Modelling the body, hair and clothing</h1>
                <p>the body of the character will be sculpted in Zbrush either from scratch or from a base. When the client is happy with the result this is afterwards cleaned up through retopology in Blender. The outfit is done in a similar way.</p>    
                <br>
                <p>Hair is done through a combination of sculpting and curves depending on the design and reference.</p>
                <br>
            </div>
            <div class="process__image-container" style="order: 1;">
                <video class="process__image" src="assets/images/process_sculpting.mp4" type="video/mp4" autoplay loop></video>
            </div>
            <div class="process__image-container process__image-container__left" style="order: 2;">
                <video class="process__image" src="assets/images/process_rigging.mp4" type="video/mp4" autoplay loop></video>
            </div>
            <div class="process__text process__text__right" style="order: 3;">
                <h1>Texturing the character</h1>
                <p>When the sculpting and modelling is done. The texturing process can begin! First all meshes are UV unwrapped. Then they are imported in Substance Painter for baking and texturing.</p>
                <br>
                <h1>Rigging the character</h1>
                <p>With the use of a 'skeleton' called a rig, the character is able to move. Each mesh is weight painted to the bones of this rig. I use an auto rigger which has the added feature of making a rig that is easy to animate.</p>
                <br>
            </div>
            <div class="process__text" style="order: 4;">
                <h1>Character blendshapes</h1>
                <p>After the rigging i make the blendshapes in Blender through the use of a facial rig, the edit mode and the sculpt mode. Starting with the viseme blendshapes used for audio based tracking, the expression blendshapes and the basic vrm blendshapes. ARkit blendshapes can be added on top as an add-on!</p>    
                <br>
                <h1>Unity conversion</h1>
                <p>Lastly the model is imported into Unity. Here, physics, constraints and colliders will be added. When this is done the model is exported as a vrm/vsf file and then tested.</p>
                <br>
            </div>
            <div class="process__image-container" style="order: 4;">
                <video class="process__image" src="assets/images/process_unity.mp4" type="video/mp4" autoplay loop></video>
            </div>
            <div class="process__text process__text--last" style="order: 4;">
                <h1>And done!</h1>
                <p>Your model is finished and ready for use! All the files will be sent to you after payment and if you run into any problems within the first week of delivery i'll try to fix them free of charge!</p>        
            </div>
        </div>
    `,
    tos: `
        <p>By commissioning me you agree to the following terms:</p>
        <h1>GENERAL</h1>
        <ul>
            <li>The client is 18+ and legally able to commit to an agreement or has a legal guardian to make this agreement on their behalf.</li>
            <li>The client grants to the artist non-exclusive rights to replicate client's own character design, reference materials or assets for the commission.</li>
            <li>The client warrants that the character design, reference material and other intellectual property provided to the artist are legally obtained and authorised for use by the client.</li>
            <li>The artist warrants that they will not copy or heavily reference unauthorised materials.</li>
            <li>A commission is considered started when the client has paid 50% of the invoice price.</li>
            <li>A commission is considered finished when the client has received the final files.</li>
            <li>Communication will be held either via Twitter DM or Discord</li>
        </ul>
        <br>
        <h1>TIMELINE AND PROCESS</h1>
        <ul>
            <li>A commission can take up to 2 months (62 days) time.</li>
            <li>A commission consists of several possible stages: modelling the body, modelling the hair and outfit, texturing the character, rigging the character, creating the blendshapes, and vtuber conversion. After each stage the artist will send an update.</li>
            <li>If a stage takes more than a week the client will be given an update, regardless of whether the stage is finished or not.</li>
            <li>If the client does not respond after 2 days of being given an update the artist is within their right to move on to the next stage.</li>
        </ul>
        <br>
        <h1>REVISIONS</h1>
        <ul>
            <li>After each update the client can give feedback and is allowed to ask for revisions.</li>
            <li>There is no set limit on revisions. But it is not unlimited and changes that deviate from the originally agreed upon design are not seen as a revision.</li>
            <li>If the client does request a change that wasn't originally planned, a fee will be proposed by the artist that represents the time and effort needed for that change.</li>
        </ul>
        <br>
        <h1>DELIVERY</h1>
        <ul>
            <li>The client acknowledges that the deliverables are digital and that there are no physically shipped goods to receive.</li>
            <li>The final files will be delivered after the last 50% of the invoice is paid.</li>
            <li>The final files will be delivered as a .RAR file via mail. If the file size is too big it will be uploaded on WeTransfer and a private link for download will be sent via mail instead.</li>
            <li>The artist is not in any way held responsible if the client loses their final files after the commission is finished.</li>
            <li>After the commission is finished the client has one week to ask for one more free revision. this revision is only to resolve potential bugs and problems that the artist might have initially overlooked.</li>
        </ul>
        <br>
        <h1>PAYMENTS</h1>
        <ul>
            <li>Prices are in EU (euro), and paid via Paypal invoice.</li>
            <li>The client warrants they will not issue chargebacks and that they will follow the refund policy mentioned in the Terms Of Service.</li>
        </ul>
        <br>
        <h1>INTELLECTUAL PROPERTY RIGHTS</h1>
        <ul>
            <li>The artist retains copyright, ownership and intellectual property rights. Which includes but is not limited to the display and advertising of the commission on websites and social media.</li>
            <li>If the client wants an NDA, a 10% fee will be added on top of the initial invoice price. After the client has revealed the commission contents, the NDA comes to a close and the artist is once more allowed to display and use the commission as advertising.</li>
            <li>The client receives exclusive, non-transferable usage rights.</li>
            <li>The client does not hold commercial rights unless given by the artist. If the client want's commercial rights, a 40% fee will be added on top of the initial invoice price.</li>
            <li>The client is allowed to use the commission for monetized streaming. The client is not allowed to sell the commission contents, use the contents for merchandise or make the contents publicly available unless given commercial rights.</li>
        </ul>
        <br>
        <h1>REFUNDS</h1>
        <ul>
            <li>A commission may take up to 2 months(62 days) time. If these 2 months have passed the client has the right to a full refund if requested.</li>
            <li>If the artist cancels the commission the client will be fully refunded.</li>
            <li>If the client cancels after the commission has started they will be refunded based on the amount of work completed. At least a minimum of 100 euro will be kept by the artist as reimbursement.</li>
            <li>No refunds will be issued after the commission is finished.</li>
        </ul>
    `,
    form:`
        <p>Have you read everything and want to commission me? Thank you! Just fill in the form down below and submit. If everything goes well you'll be contacted within one week.</p>
        <p><a href="https://forms.gle/ZyPk4XVTiTTNDV1U8" target="_blank" class="commission-button">Commission Zel</a></p> 
    `
}



export { addCommissionLogic }