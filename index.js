const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
let bot = '...';

var os = require('os');
const ip = require("ip");
let saya = ip.address();

client.on('ready', () => {
    console.log('Running for', client.user.username);
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: `Outplayed.`,
            assets: {
                large_image: "147b9d3929b5ab07540b34c81f716431",
                large_text: "trying to keep up.", //os.version().toString()
                small_image: "5",
                small_text: "crot"
            },
            buttons: [{
                label: "Summary",
                url: "site"
            }, {
                label: "Docs",
                url: "site2"
            }],
            timestamps: {start: Date.now()},
            instance: true
        }
    })
})
client.login({ clientId: bot }).catch(console.error);
