require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
    console.log(`My server is Running Now http://localhost:${PORT}`);
})

