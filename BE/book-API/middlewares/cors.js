const cors = require("cors");
const config = require("../config.js");

const corsOptions = {
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  optionSuccessStatus: 200,
  origin: (origin, callback) => {
    if (config.whitelist_cors.indexOf(origin) === -1 || !origin) {
      return callback(null, true);
    }
    return callback(new Error(`${origin} Not allowed by CORS`));
  },
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
