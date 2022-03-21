const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('Boo');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening!');
});
