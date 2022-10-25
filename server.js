const app = require("express")()

const port = process.env.PORT || 3000

app.get("*/", (req, res) => {
  res.send(`Listening on ${port}`)
})


app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})