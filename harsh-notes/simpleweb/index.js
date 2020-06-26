const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hi there. THis app is running on Docker YAYY');
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
