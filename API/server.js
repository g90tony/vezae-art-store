import express from "express";

const server = express();
const PORT = process.env.PORT || 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => {
  console.log(`App running on Port number ${PORT}`);
});
