/**
 * @usage
 * increment by 1 (default)
 * node cli.js INCREMENT
 *
 * increment by 3
 * node cli.js INCREMENT 3
 *
 * decrement by 1 (default)
 * node cli.js DECREMENT
 *
 * decrement by 5
 * node cli.js DECREMENT 5
 */

const axios = require("axios");
const URL = "http://localhost:5001/update-count";

const validActions = ["INCREMENT", "DECREMENT"];

const args = process.argv.slice(2);
console.log("args: ", args);

const [roomName, action, count] = args;

if (!roomName) {
  console.log("Please provide roomName");
  process.exit(1);
}

if (!action) {
  console.log("Please provide action");
  process.exit(1);
}

if (!validActions.includes(action)) {
  console.log(
    "Please provide correct action. Supported actions are: " + validActions
  );
  process.exit(1);
}

const actionDto = {
  roomName,
  action,
};

if (count) {
  actionDto.count = parseInt(count, 10) || 1;
}

console.log(actionDto);

axios
  .put(URL, actionDto)
  .then((result) => {
    console.log("result ok");
  })
  .catch((err) => {
    console.log(err);
  });
