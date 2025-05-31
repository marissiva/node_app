const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hey Welcome to the Node World');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});