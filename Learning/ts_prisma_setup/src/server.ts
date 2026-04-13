import app from "./app";

const startServer = async () => {
  const PORT = process.env.PORT;
  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
};

startServer();
