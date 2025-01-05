import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import productRouter from "./routes/product.route.js";
// inbuilt node js library for working with file paths
import path from "path";

dotenv.config();

connectDb();

// constants
const port = process.env.BACKEND_PORT;

const app = express();

// path.resolve() gives the abosolute path of the current directory where the script is running
// a variable __dirname is assinged that path
// since we are using ES module, we are defining __dirname which otherwise would have come predefined in Node.js
const __dirname = path.resolve();

app.use(express.json());

app.use("/api/products", productRouter);

// NODE_ENV is an environmental variable that you can set while running the app
// it can be in production, developement, and test
// set NODE_ENV = "Production" is the command
// this makes sure that the frontend and backend have the same port only while running in production mode
if (process.env.NODE_ENV === "production") {
  // this makes all the files in the dist folder static, ie available to the client on demand
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  // when any url other than the api/products is visited, the user gets served with the index.html file in the dist folder
  // even tho the front end is dynamic and not really static, the index.html file at the start acts like static, which is served to the user
  // then when loaded, the web js takes over and makes it dynamic again
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
