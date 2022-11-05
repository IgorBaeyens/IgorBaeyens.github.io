const prices = {
    startingPrice: "<mark>750 EU</mark>",
    accessory: "<mark>30 EU</mark>",
    expression: "<mark>20 EU</mark>",
    outfit: "<mark>300 EU</mark>"
}

const text = {
    infoAndPrices: `
        <h1>Prices</h1>
        <p>The starting price for a commission is ${prices.startingPrice}. This includes:</p>
        <ul>
            <li>character in VRM format for use as a Vtuber</li>
            <li>character in FBX format as a normal 3D model</li>
            <li>character base model (SFW version of character without clothes) in FBX format</li>
            <li>The blender file and textures</li>
            <li>5 expressions (neutral, happy, angry, sad, smug)</li>
            <li>52 ARkit blendshapes for expressive facial tracking </li>
            <li>spring bones used for physics (used to move hair, ears, clothing or tails)</li>
        </ul>
        <br><br>   
        <p>It’s also possible to ask for the following things:</p>
        <ul>
            <li>extra toggleable accessories  (glasses, hat, jacket, ...) for ${prices.accessory} each</li>
            <li>extra expressions for ${prices.expression} each</li>
            <li>extra outfits for ${prices.outfit} each</li>
        </ul>
        <br><br><br>
        <h1>Info</h1>
        <p><b>Commissioning process</b></p>
        <p>
            Commissioning me is quite easy! I will likely have only one slot open for now, since i'm just starting out. 
            First you fill in my <mark>Google Form</mark> and submit it. If i choose you, you will receive a message from me, 
            either through mail or Twitter, saying that i've accepted your commission and will begin working on it once you've sent 50% of the price amount.
        </p>
        <br><br>
        <p><b>My work process</b></p>
        <p>
            Everything will be done by me in a period of 1 to 2 months. This means <mark>modelling</mark> the character, 
            <mark>UV unwrapping</mark> it which allows for the texturing of the character, then <mark>texturing</mark> itself which is 
            giving the character color, <mark>rigging</mark> the character so it can move, <mark>shape keys</mark> for the expressions 
            and finally converting the character so it can be used as a Vtuber model.
        </p>
        <br><br>
        <p>I will send updates when I finish:</p>
        <ul>
            <li>modelling the base</li>
            <li>modelling the outfit and hair</li>
            <li>texturing</li>
            <li>the expressions</li>
            <li>converting to vrm</li>
        </ul>
        <br><br>
        <p><b>Important</b></p>
        <p>
            In order to accurately model your character i need a <mark>reference sheet</mark>. The reference sheet 
            should have a front view and a back view of your character. a side view and more views of detailed or ambigious spots are very welcome.
        </p>
        <br><br>
        <p>
            Revisions are free unless you want changes that differ from the original given reference. In that
             case the price of a revision depends on which part of the character you want revised.
        </p>
        <br><br>
        <button>Commission me</button>
    `,
    portfolio: `
        <div id="info-screen_left">
            <h1>Zel Kanis</h1>
            <p>Zel is my persona. I came up with the design myself hence why they aren't as detailed.</p>
            <br><br>
            <p>Some new things i tried with Zel are the floating arms they have, their tail and the art style reminiscent of Guilty Gear. I also learned about ARkit blendshapes, which makes my characters more expressive than before.</p>
            <br><br>
            <video src="assets/images/zel_showcase.mp4" width="100%" loop autoplay></video>
        </div>
        <div id="info-screen_right">
            <img id="zel_gif" src="assets/images/rest.gif" alt="">
        </div>
    `,
    about: `
        <h1>About me</h1>
        <p>Hi. Name's Zel,</p>
        <p>an artist in heart and soul.</p>
        <br><br>
        <p>I started my 3D journey about 4 years ago, in a course for game graphics. There i mostly learned how to model objects, cars and houses. It didn’t have anything to do with characters just yet. But that’s when my love for 3D sparked. It’s a great midway between the artistic side and the technical side. fitting for someone like me.</p>
        <br><br>
        <p>After that first year spent in a course, i had switched into a different course that didn’t have 3D but nevertheless continued to improve my skills throught self study. Which brings me at the level I am now.</p>
        <br><br>
        <p>Entertainment is my life and I’m always striving to become just as good as the artists from my favorite media.</p>
    `,
    tos: `
        <h1>Terms Of Service</h1>
        <p>By commissioning me you agree to the following terms:</p>
        <br>
        <p><b>General</b></p>
        <Ul>
            <li>a commission is finished when the client has received a zip file containing a vrm file of the character, an fbx file of the character, an fbx file of the base model, a blender file and a folder with textures of the character</li>
            <li>a commission can take up to 2 months time (62 days)</li>
            <li>I will send updates after completing following stages of the commission: modelling the base, modelling the outfit and hair, texturing the character, creating all of the expressions and converting the character to vrm format </li>
            <li>re-selling of the commission files or it’s contents is not allowed by either me or the client</li>
            <li>after the commission is finished i am allowed to post the result on social media and my portfolio., unless the client specifies through the Google Form they want me to wait until they themselves reveal the 3D model.
                <br><br>
                If the client wants me to wait they get another 62 day period to reveal the model after the commission is finished. When this period ends or the client has revealed the 3D model, I am allowed to post the result on social media and my portfolio
            </li>
        </Ul>
        <br><br>
        <p><b>Payment</b></p>
        <ul>
            <li>payment is through Paypal invoice</li>
            <li>50% of the payment will be paid upfront</li>
            <li>the final files will be given to the client after they paid the other 50%</li>
        </ul>
        <br><br>
        <p><b>Refunding</b></p>
        <ul>
            <li>if I cancel the commission the client will be fully refunded</li>
            <li>if the 62 day period has passed and the commission is not finished the client will be fully refunded</li>
            <li>if the client cancels within 21 days of accepting the commission they will be fully refunded minus the Paypal fee amount (usually around 3%)</li>
            <li>if the client cancels after the 21 day period they will not be refunded</li>
            <li>no refunds will be issued after the commission is finished</li>
        </ul>
    `,
    faq: `
        <h1>Frequently Asked Questions</h1>
        <p>empty for now</p>
    `
}

export { text }