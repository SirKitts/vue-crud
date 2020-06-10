const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.User = require('./api/models/userModel');
const routes = require('./api/routes/userRoutes');

var uristring = process.env.MONGODB_URI || 'mongodb://localhost/testApp';

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
	uristring, 
	{ useNewUrlParser: true, useUnifiedTopology: true },
	function (err, res) {
	  if (err) { 
	    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
	  } else {
	    console.log ('Succeeded connected to: ' + uristring);
	  }
	}
);

const PORT = process.env.PORT || 5000
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(PORT);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${PORT}`);
console.log('CTRL+C to exit');
