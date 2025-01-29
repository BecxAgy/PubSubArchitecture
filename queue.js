import redis from 'redis';
const client = redis.createClient({ url: process.env.REDIS_URL });

client.connect()

client.on("error", (error) => {
    console.error(error);
});
 
async function publish(channel, value) {
    console.log('Message sent!');
    return client.publish(channel, JSON.stringify(value));
}
 
async function subscribe(channelSubscribed, callback) {
    client.subscribe(channelSubscribed, (channel, message) => {
        console.log('Message arrived!');
        console.log(message);
        callback(message);
    });
}
 
export{
    publish,
    subscribe
}