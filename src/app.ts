import express from "express";
import routes from "./routes";
import db from "./db";

const app = express();
app.use(express.json());

db.connectToDatabase();
app.use("/v1", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
