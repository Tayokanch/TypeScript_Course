"use strict";
class Logger {
    constructor(fileName) {
        this.fileName = fileName;
    }
    sendMessage(message) {
        console.log(`Writting to ${this.fileName} that: ${message}`);
    }
}
const logger = new Logger("menu.txt");
logger.sendMessage("I want to order a cup of wine");
//# sourceMappingURL=Exercise2.js.map