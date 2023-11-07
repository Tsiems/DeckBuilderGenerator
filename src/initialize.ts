import { basename } from "path";
import * as PIXI from "pixi.js";
import { onFontsLoaded } from "src/styles/fonts";

// MAKE THESE THE SAME
require.context("../resources/card-images", true, /\.png$/)
require.context("../resources/images", true, /\.png$/)
const r = require.context("../resources/card-templates", true, /\.png$/)

const wrapper: any = {
    fontsLoaded: false,
    pixiLoaded: false,
    callback: false,
};

function checkIfInitialized(): void {
    if (wrapper.fontsLoaded && wrapper.pixiLoaded && wrapper.callback) {
        wrapper.callback();
    }
}

const textures: {[key: string]: string} = {};

function requireAll(r: __WebpackModuleApi.RequireContext): void {
    

    for (const key of r.keys()) {
        const textureName: string = basename(key, ".png");
        // requiring an image here, which will return a string
        const texturePath: string = r(key);
        console.log('path', texturePath, key)
        console.log(r)

        // textures[textureName] = (texturePath as any) ["default"];
        textures[textureName] = texturePath;
    }
}

// require all the images in the templates folder
requireAll(r);

/** The key/value mapping of initial textures loaded for all cards */
export const initialTextures = textures;

/** A reverse key/value mapping of texture to key for initialTextures */
export const initialTexturesToKey = new Map<PIXI.Texture, string>();

/**
 * Initializes textures and fonts required for this application to function
 *
 * @param callback the callback to invoke once all resources are initialized
 */
export async function initialize(callback: () => void): Promise<void> {
    wrapper.callback = callback;

    PIXI.utils.skipHello();
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;

    // for (const key of Object.keys(initialTextures)) {
    //     PIXI.Loader.shared.add(key, initialTextures[key]);
    //     // PIXI.Assets.add(key, initialTextures[key]);
    //     // console.log(key,initialTextures )

    //     console.log(key, initialTextures[key])
    //     // await PIXI.Assets.load(initialTextures[key]);
    // }
    // console.log("DONE")

    // PIXI.Loader.shared.load(() => {
    // // PIXI.Assets.loader.load(() => {
    //     wrapper.pixiLoaded = true;
    //     for (const key of Object.keys(initialTextures)) {
    //         initialTexturesToKey.set(PIXI.Loader.shared.resources[key].texture!, key);
    //         // initialTexturesToKey.set(PIXI.Assets.loader.resources[key].texture, key);
    //     }
    //     checkIfInitialized();
    // });
    wrapper.callback();

    // require all the images in the templates folder
    requireAll(r);
}

onFontsLoaded((error) => {
    if (error) {
        /* tslint:disable:no-console */
        console.error(error);
        /* tslint:enable:no-console */
    }
    else {
        wrapper.fontsLoaded = true;
        checkIfInitialized();
    }
});
