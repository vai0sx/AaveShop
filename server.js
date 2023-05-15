const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { ErrorHandler, handleError } = require("./src/utils/errorHandler");
const shopRoutes = require("./src/routes/shopRoutes");
const userRoutes = require("./src/routes/userRoutes");

dotenv.config();
const app = express();

app.use(express.json());

// Conectar a la base de datos
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Rutas
app.use("/api/shops", shopRoutes);
app.use("/api/users", userRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    handleError(err, res);
  } else {
    handleError(new ErrorHandler(500, "Internal Server Error"), res);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
