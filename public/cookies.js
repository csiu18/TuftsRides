function initializeCookies()
{
	localStorage.setItem("CAMPUS CENTER FRONT", "FALSE");
	localStorage.setItem("DAVIS SQUARE", "FALSE");
	localStorage.setItem("CAMPUS CENTER BACK", "FALSE");
	localStorage.setItem("CARMICHAEL HALL", "FALSE");
	localStorage.setItem("OLIN HALL", "FALSE");
	localStorage.setItem("AIDEKMANN", "FALSE");
    localStorage.setItem("SMFA", "FALSE");

}

function setCookie(name, value)
{
	console.log("set cookie" + name + "to" + value)
	localStorage.setItem(name, value);

}

function removeCookie(name)
{
	localStorage.removeItem(name)
}

function getCookie(name)
{
	return localStorage.getItem(name)

}

function cookieLogic(name, star)
{
    var starIcon = document.querySelector('#' + star);
	var currentCookie = getCookie(name);
	if(currentCookie == "FALSE"){  
        starIcon.style.color = "white";
		setCookie(name, "TRUE");
	}else{
		setCookie(name, "FALSE");
        starIcon.style.color = "black";
	}
}

function getFavArray()
{
	var favs = [];
	var nameArray = ["CAMPUS CENTER FRONT", "DAVIS SQUARE", "CAMPUS CENTER BACK",
					"CARMICHAEL HALL", "OLIN HALL", "AIDEKMANN", "SMFA"];
	for(var i = 0; i < 7; i++) {
        var star = "#star" + (i + 1); 
        var starIcon = document.querySelector(star);
		if(getCookie(nameArray[i]) == "TRUE") {
			//console.log(nameArray[i])            
            starIcon.style.color = "white";
			favs.push(nameArray[i]);
		} else {
            starIcon.style.color = "black";
        }
	}

	return favs;
}

