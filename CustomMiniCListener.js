import MiniCListener from "./generated/MiniCListener.js";

export class CustomMiniCListener extends MiniCListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}