const KeyAction = require("./KeyAction")
const sleep = require("./sleep")
const emu = require("robotjs");


class HoldKey extends KeyAction {
    constructor(keyCode, duration) {
        super(keyCode);
        this.duration = duration;
    }

    async _run(discordMessage, discordClient) {
        //emu.keyToggle(this.keycode, "down");
        console.log(`${this.keycode} for ${this.duration}ms`);
        await sleep(this.duration);

        //emu.keyToggle(this.keycode, "up");

    }
}

module.exports = HoldKey;
