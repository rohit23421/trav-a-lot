const app = require("./app");
const connectwithDB = require("./config/db");

connectwithDB();

app.listen(process.env.PORT, () => {
  console.log(`SERVER UP AND RUNNING ON PORT ${process.env.PORT}`);
});
