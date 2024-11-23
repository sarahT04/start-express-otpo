var express = require('express');

var app = express();

const maxImageNum = 536;

// GET random image from public/images
app.get('/', function (req, res, next) {
  const randomNum = Math.floor(Math.random() * maxImageNum) + 1;
  res.sendFile(`public/images/${randomNum}.jpg`, { root: '.' });
});

// GET a single image from ID
app.get("/:id", function (req, res, next) {
  const id = req.params.id;
  if (id < 1 || id > maxImageNum) {
    res.status(404).send("Image not found");
  } else {
    res.sendFile(`public/images/${id}.jpg`, { root: '.' });
  }
});

app.listen(9000, () => {
    console.log('start success.');
}).on('error', (e) => {
    console.error(e.code, e.message)
})
