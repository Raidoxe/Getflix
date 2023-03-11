const Jimp = require('jimp');
import Phrases from './data/_phrases';

const getRandomInt = max => { //returns value between 0 and max - 1
    return Math.floor(Math.random() * Math.floor(max));
}

function getBackgroundImage() { //returns random background image
    const imagePath = `./pages/api/photos/backgrounds/${getRandomInt(16)}.jpg`;
    return Jimp.read(imagePath);
}

async function getFaceImage() {//returns random face image
    const imagePath = `./pages/api/photos/faces/${getRandomInt(11)}.png`;
    return Jimp.read(imagePath);
}

async function getLayerMask() {//returns layer mask for the text at the top
    const imagePath = './pages/api/photos/LayerMask.png';
    return Jimp.read(imagePath);
}

async function processImages() {

    //Get background image
    let backgroundImage = await getBackgroundImage().then(image => {return image});

    //Get cropped image of face
    let faceImage = await getFaceImage().then(image => {return image});

    //Get H and W of background image
    let bHeight = backgroundImage.getHeight();
    let bWidth = backgroundImage.getWidth();

    //Resize the faceimage to fit the size of the background image
    faceImage.resize(Math.floor(bWidth), Math.floor(bHeight / 1.5));

    //Place the face image on top of the background image
    backgroundImage.composite(faceImage, 0, bHeight / 3 * 1);
    
    //Then resize the background image to fit the page
    backgroundImage.resize(300, 600);

    //Get Layer Mask
    let layerMask = await getLayerMask();
    //Paste layer mask on top of new image
    backgroundImage.composite(layerMask, 0, 0);

    //Get Phrase
    const phrase = Phrases.getText();

    //Place text on top of new image
    backgroundImage = await pasteText(backgroundImage, phrase);

    return [backgroundImage, phrase];
}

async function pasteText(image, phrase) {
    //Load sans font
    return await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {

        //Paste text at X:0 and Y:10
        image.print(font, 0, 10, {

            //Paste Adjective then Noun
            text: `${phrase}`,

            //Align text to center
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER

        }, 290, 100)

        //return new image
        return image;
    }).catch(err => {throw err});
}

export default async (req, res) => {
    const [image, phraseText] = await processImages();

    //Convert image to a base64 string to be sent to client
    image.getBase64Async(image.getMIME()).then(string64 => {

        //Create an object containing phrases and the base64 string
        const obj = {
            phrase: phraseText,
            base: string64
        }

        //send JSON object to client
        res.send(obj);
    }).catch(err => {throw err});
}
