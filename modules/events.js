const Events = require("events");

class Logger extends Events {
  log(a, b) {
    this.emit("calculate", a + b);
  }
}

const logger = new Logger();

logger.on("calculate", (res) => console.log(res));

logger.log(1, 2);
logger.log(2, 2);
logger.log(5, 2);
logger.log(10, 2);
