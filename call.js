const io = require("socket.io")(3000);
const redis = require("socket.io-redis");
io.adapter(redis({ host: "localhost", port: 6379 }));