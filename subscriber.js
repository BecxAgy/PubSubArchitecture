console.log("Worker started");
import { subscribe } from "./queue.js";

subscribe("channel1", message => {
    console.log("processing");
    console.log(message);
})
 