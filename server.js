/** Server for cats. */
const app = require("./app");

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server starting on port 5000`);
});