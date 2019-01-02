"use strict";

let ajaxGet = function(url, success, error) {
	let getRequest = new XMLHttpRequest();
	getRequest.open("GET", url);
	getRequest.open("GET", "/tweets")
	getRequest.timeout = 10 * 1000;


	getRequest.addEventListener("load", function(evt) {
		if(getRequest.status >= 200 && getRequest.status < 300) {
			//this is where I do stuff with tweets
			showTweet(JSON.parse(getRequest.responseText));


		}
		else {
			error(evt);
		}
	});


//shows tweets and makes them links if they match
let showTweet = function(tweets) {
	tweets.tweetArray.forEach(function(element) {
	let newLi = document.createElement("li");
		newLi.setAttribute("class", "list-group-item list-group-item-success");
		let newText = document.createTextNode(element);
		if(/pizza/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "http://www.papposbrewco.com/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/burger/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "https://www.blaaacksheep.com/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/tacos/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "http://www.greatamericantaco.com/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/sushi/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "https://www.eatoceanzen.com/oz_menu.php");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
			}
		else if(/Chinese/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "https://www.chinesechefcampbell.com/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/Indian/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "https://www.gemofindiaspringfield.com/#/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/sandwhich/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "http://newks.com/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/ice cream/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "http://www.eatandys.com/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/cupcake/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "http://www.theurbancup.com/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/coffee/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "http://www.mudhousecoffee.com/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/bbq/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "http://www.buckinghambbq.com/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/barbeque/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "http://www.buckinghambbq.com/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/peruvian/i.test(element)) {
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "http://cafecusco.com/");
			newLink.appendChild(newText);
			newLi.appendChild(newLink)
		}
		else if(/japanese/i.test(element)) {
				let newLink = document.createElement("a");
				newLink.setAttribute("href", "http://www.fujiofspringfield.com/");
				newLink.appendChild(newText);
				newLi.appendChild(newLink)
			}
		else if(/steak/i.test(element)) {
				let newLink = document.createElement("a");
				newLink.setAttribute("href", "http://jimmssteakhouseandpub.com/");
				newLink.appendChild(newText);
				newLi.appendChild(newLink)
			}
		else if(/korean/i.test(element)) {
				let newLink = document.createElement("a");
				newLink.setAttribute("href", "https://www.facebook.com/JinsKoreanGrill/");
				newLink.appendChild(newText);
				newLi.appendChild(newLink)
			}
		else if(/chicken/i.test(element)) {
				let newLink = document.createElement("a");
				newLink.setAttribute("href", "https://www.zaxbys.com/locations/mo/springfield/3220-e-sunshine-st/");
				newLink.appendChild(newText);
				newLi.appendChild(newLink)
			}
		else if(/wings/i.test(element)) {
				let newLink = document.createElement("a");
				newLink.setAttribute("href", "http://www.buffalowildwings.com/en/locations/Detail/3216");
				newLink.appendChild(newText);
				newLi.appendChild(newLink)
			}
		else if(/thai/i.test(element)) {
				let newLink = document.createElement("a");
				newLink.setAttribute("href", "http://tongs-thai-restaurant.com/");
				newLink.appendChild(newText);
				newLi.appendChild(newLink)
			}
		else if(/soup/i.test(element)) {
				let newLink = document.createElement("a");
				newLink.setAttribute("href", "https://www.panerabread.com/en-us/home.html");
				newLink.appendChild(newText);
				newLi.appendChild(newLink)
			}
		else if(/italian/i.test(element)) {
				let newLink = document.createElement("a");
				newLink.setAttribute("href", "http://www.brunositalianrestaurantdowntown.com/");
				newLink.appendChild(newText);
				newLi.appendChild(newLink)
			}
			else if(/mexican/i.test(element)) {
				let newLink = document.createElement("a");
				newLink.setAttribute("href", "http://www.greatamericantaco.com/");
				newLink.appendChild(newText);
				newLi.appendChild(newLink)
			}

//or else just append with plain text
		else {
			newLi.appendChild(newText);
		}
			let currentNode = document.getElementById("tweetList");
			currentNode.appendChild(newLi);

		});
		if(/pizza/i.test(tweets.tweetArray[0])) {
			document.getElementById("pizza").style.display="initial"
		}
		else if(/burger/i.test(tweets.tweetArray[0])) {
			document.getElementById("burger").style.display="initial"
		}
		else if(/taco|mexican/i.test(tweets.tweetArray[0])) {
			document.getElementById("taco").style.display="initial"
		}
		else if(/sushi/i.test(tweets.tweetArray[0])) {
			document.getElementById("sushi").style.display="initial"
		}
		else if(/chinese/i.test(tweets.tweetArray[0])) {
			document.getElementById("chinese").style.display="initial"
		}
		else if(/indian/i.test(tweets.tweetArray[0])) {
			document.getElementById("indian").style.display="initial"
		}
		else if(/sandwhich/i.test(tweets.tweetArray[0])) {
			document.getElementById("sandwhich").style.display="initial"
		}
		else if(/ice cream/i.test(tweets.tweetArray[0])) {
			document.getElementById("icecream").style.display="initial"
		}
		else if(/cupcake/i.test(tweets.tweetArray[0])) {
			document.getElementById("cupcake").style.display="initial"
		}
		else if(/coffee/i.test(tweets.tweetArray[0])) {
			document.getElementById("coffee").style.display="initial"
		}
		else if(/bbq|barbeque/i.test(tweets.tweetArray[0])) {
			document.getElementById("bbq").style.display="initial"
		}
		else if(/peruvian/i.test(tweets.tweetArray[0])) {
			document.getElementById("peruvian").style.display="initial"
		}
		else if(/japanese/i.test(tweets.tweetArray[0])) {
			document.getElementById("japanese").style.display="initial"
		}
		else if(/steak/i.test(tweets.tweetArray[0])) {
			document.getElementById("steak").style.display="initial"
		}
		else if(/korean/i.test(tweets.tweetArray[0])) {
			document.getElementById("korean").style.display="initial"
		}
		else if(/chicken/i.test(tweets.tweetArray[0])) {
			document.getElementById("chicken").style.display="initial"
		}
		else if(/wings/i.test(tweets.tweetArray[0])) {
			document.getElementById("wings").style.display="initial"
		}
		else if(/thai/i.test(tweets.tweetArray[0])) {
			document.getElementById("thai").style.display="initial"
		}
		else if(/soup/i.test(tweets.tweetArray[0])) {
			document.getElementById("soup").style.display="initial"
		}
		else if (/italian/i.test(tweets.tweetArray[0])) {
			document.getElementById("italian").style.display="initial"
		}
};

	getRequest.send();
};

ajaxGet();
