const express = require('express');
const app = express()
function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}
app.get('/', (req, res) => {
	for(var z = 0; z < getRandomInt(9999999); z++){
		i = Math.sqrt(getRandomInt(9999999)).toString();
	}
	console.log(i);
	res.send("version 1 " + i);
})
app.get('/liveness', (req, res) => {
	res.send('live');
})
app.get('/readiness', (req, res) => {
	res.send('ready');
})
app.listen(8080, () => {
	console.log('server start');
})
