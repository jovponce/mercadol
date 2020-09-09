'use strict'

const https = require('https');
const app = require('./app');
//const cors = require('cors');
//app.use(cors());
// Options
const port = 3000;

// Settings
app.set('port', port);

// Starting the server
app.listen(app.get('port'), () => {
	console.log(`HTTPS Server running on port ${app.get('port')}`);
});