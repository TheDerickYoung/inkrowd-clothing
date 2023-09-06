import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

const PORT = process.env.PORT || 3050;

connectDB();

const app = express();

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send(`API is working.`);
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
