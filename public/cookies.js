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
	// console.log("set cookie" + name + "to" + value)
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

function cookieLogic(name)
{
	var currentCookie = getCookie(name);
	if(currentCookie == "FALSE"){
		setCookie(name, "TRUE");
	}else{
		setCookie(name, "FALSE");
	}
}

function getFavArray()
{
	var favs = [];
	var nameArray = ["CAMPUS CENTER FRONT", "DAVIS SQUARE", "CAMPUS CENTER BACK",
					"CARMICHAEL HALL", "OLIN HALL", "AIDEKMANN", "SMFA"];
	for(var i = 0; i < 7; i++) {
		if(getCookie(nameArray[i]) == "TRUE") {
			//console.log(nameArray[i])
			favs.push(nameArray[i]);
		}
	}

	return favs;
}

