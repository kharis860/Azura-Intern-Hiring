const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

// app.use((req, res, next) => {
//   res.setHeader("Acces-Control-Allow-Origin", "*");
//   res.setHeader("Acces-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Acces-Control-Allow-Header", "Content-Type", "Authorization");
//   next();
// });
app.use(cors());
// app.use(
//   cors({
//     // origin: "http://localhost:3000/book-create",
//     // // "Access-Control-Allow-Origin": "http://localhost:3000/book-create",
//     // methods: "GET,POST,PUT,DELETE,OPTION",
//     // credentials: true,
//     // allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(3100, () => {
  console.log("app running on http://127.0.0.1:3100");
});
