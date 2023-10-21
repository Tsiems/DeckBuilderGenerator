/** Acts as an interface between css fonts and code that requires it */

import * as FontFaceObserver from "fontfaceobserver";
import "./fonts.scss";

const fonts: {[key: string]: string[]} = {
    // CompactaBT: ["regular", "bold", "italics"],
    // CompactaBdBT: ["regular", "bold"],
    // Arial: ["regular", "bold", "italics"],
    TradeGothic: ["regular", "bold", "italics"],
};

const ready: {[key: string]: boolean} = {};
const onReady: any = {
    callback: null,
};

function checkIfReady(): void {
    let areWeReady = true;
    for (const key of Object.keys(ready)) {
        if (!ready[key]) {
            areWeReady = false;
            break;
        }
    }

    if (areWeReady && onReady.callback) {
        onReady.callback();
    }
}

// for every font, load it then check if we are ready
// once the last font is loaded, we are ready
// TODO: is this needed??
function loadFonts(): void {
    // console.log("FONTS", Array.from(document.fonts).forEach(f => f.load()))

    for (const fontFamily of Object.keys(fonts)) {
        const font = fonts[fontFamily];
        for (const fontType of font) {
            ready[fontFamily + fontType] = false;

            let properties: {[key: string]: any} = {};
            if (fontType !== "regular") {
                properties = fontType === "bold" ?
                    { weight: "bold" } :
                    { style: "italic" };
            }

            console.log('font face', fontFamily, properties)
            new FontFaceObserver(fontFamily, properties).load().then((...args: any[]) => {
                ready[fontFamily + fontType] = true;
                checkIfReady();
            }, (...args: any[]) => {
                console.log(args)
                const message = `${fontFamily} ${fontType} could not be loaded`;
                onReady.callback(new Error(message));
            });

            // new FontFaceObserver(fontFamily).load().then((...args: any[]) => {
            //     ready[fontFamily + fontType] = true;
            //     checkIfReady();
            // }, (...args: any[]) => {
            //     console.log(args)
            //     const message = `${fontFamily} ${fontType} could not be loaded`;
            //     onReady.callback(new Error(message));
            // });
        }
    }
}


/**
 * Attaches a callback to be invoked once all fonts are loaded
 * @param callback the callback to invoke once all fonts are loaded
 */
export function onFontsLoaded(callback: (error: boolean) => void): void {
    onReady.callback = callback;

    document.fonts.ready.then(() => {
        loadFonts();
        checkIfReady();
    });
    // setTimeout(() => checkIfReady(), 1000)
}
