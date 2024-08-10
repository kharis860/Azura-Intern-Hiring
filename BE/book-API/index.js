const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
// const corsMiddleware = require("./middlewares/cors");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
};

// app.use(corsMiddleware);
// app.option("*", cors(corsMiddleware));

app.use(cors(corsOptions));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(3100, () => {
  console.log("app running on http://127.0.0.1:3100");
});
