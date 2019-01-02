"use strict";

let express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	twitter = require("twitter"),
	passport = require("passport"),
	FacebookStrategy = require("passport-facebook").Strategy,
	cookieParser = require("cookie-parser"),
	expressSession = require("express-session"),
	random = require("./modules/module");



//sets where the views are
app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static("resources"));

app.use(cookieParser());

app.use(expressSession({
	secret: "beards",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// facebook login
passport.use(new FacebookStrategy( {

	clientID: 181833322339443,

	clientSecret: "60772ca015adeae98a2256c5246f229b",

	callbackURL: "http://localhost:3000/auth/facebook/callback"
},

	function(accessToken, refreshToken, profile, cb) {
		return cb(null, profile);
	}));

passport.serializeUser(function(user, cb) {
	cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
	cb(null, obj);
});

app.get("/auth/facebook",
	passport.authenticate("facebook"));
app.get("/auth/facebook/callback",
	passport.authenticate("facebook", { failureRedirect: "/", successRedirect: "/main"}));
app.get("/", function(req, res) {
	res.render("login");
});


//twitter api stuff
app.get("/tweets", function(req, res) {
	let client = new twitter({
		consumer_key: "by2uAHIrQMjBT6SlwwXXpPTUE",
		consumer_secret: "UwBMq1fDWRAultSFSastLy5cxNyDEiwX1pstNhZcOgoxLfWVqG",
		access_token_key: "859111674187591687-X26xgHPvDu0mWuNg1PrLAoH3QKMpVGP",
		access_token_secret: "mOInAtmFW21Qon8GVnDMSrC0RJp8iMxiScKznTFYXQK4j"
	});

	client.get("search/tweets", {q: "#csc365"}, function(error, tweets) {
		let tempArray = [],
			obj = {
				tweetArray: tempArray

			};

		tweets.statuses.forEach(function(element) {
			tempArray.push(element.text);
		});
		res.json(obj);
	});
});
//loads the pages
app.get("/main", ensureAuthenticated, function(req, res) {
	let obj = {
		number: random()
	};
	res.render("page", obj);
});

app.get("/page3", ensureAuthenticated, function(req, res) {
	let obj1 = {
		number: random()
	};
	res.render("page3", obj1);
});

app.get("/page2", ensureAuthenticated, function(req, res) {
	res.render("page2");
});

function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	else {
		res.sendStatus(403);
	}
}


app.listen(3000, function() {
	console.log("Listening on port 3000");

});

module.exports = app;
