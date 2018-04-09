const     express = require("express"),
           	 path = require("path"),
		       fs = require("fs"),
		      app = express()
		     port = 3000;

app.use(express.static(path.join(__dirname, "app/static")));
app.use(function (req, res, next) {
	console.log(`time : ${new Date().toLocaleString()}`);
	next();
});

app.get('/app/users', function(req, res, next) {
	console.log("static data was sent");
	next();
}, function (req, res, next) {	
   	let a =	fs.readFileSync("app/users/users.json", "utf-8");
   	console.log(a);
 	res.json(a);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});