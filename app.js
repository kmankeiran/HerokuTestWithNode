const express = require('express');
const path = require('path'); // path lets us navigate the file system / folders

// heroku assigns a port when it  deploys via the process (environment variables - coming)
// locally this will run @ port 300; remotely it'll run wherever heroku tells it to run
const port = process.env.PORT || 3000; // a double pipe - || - means "or"

const app =express();

app.use(express.static('public'));

// a forward slash is the home route (same as index.html)
app.get('/', (req, res) => {
  console.log('at the home route')
  res.sendFile(path.join(__dirname + '/views/index.html'));
  // this builds localhost:3000/views/index.html
})

app.get('/contact', (req, res) => {
  console.log('at the contact route')
  res.sendFile(path.join(__dirname + '/views/contact.html'));
})

app.get('/portfolio', (req, res) => {
  console.log('at the portfolio route')
  res.send('on the portfolio page!');
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});