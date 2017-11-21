/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var tayElem = document.getElementById("name1");
tayElem.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var khalElem = document.getElementById("position2");
khalElem.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var pikoElem = document.getElementById("alias3");
pikoElem.innerHTML = "Concatenation";

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var nameElem = document.getElementsByClassName("name");
var profElem = document.getElementsByClassName("profile");
// console.log(profElem);

for(var i = 0; i<profElem.length; i++){
	if(nameElem[i].innerHTML == "Prince" && profElem[i].innerHTML == "n/a"){
		// console.log(profElem[i]);
		profElem[i].innerHTML = "Purple Rain";
	}
	if(nameElem[i].innerHTML == "Bruce Lee" && profElem[i].innerHTML == "n/a"){
		profElem[i].innerHTML = '"Be like water."';
	}
}

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/



/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var aliasElem = document.getElementsByClassName("alias");
console.log(aliasElem);

for(var i = 0; i<aliasElem.length; i++){
	if(nameElem[i].innerHTML == "Samuel L Jackson" && aliasElem[i].innerHTML == "n/a"){
		// console.log(aliasElem[i].innerHTML);
		aliasElem[i].innerHTML = "'Jules'";
	}
}

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/


// var block1Elem = document.getElementsByClassName("block1 col-sm-4");
// console.log(block1Elem);

var peteElem = document.createElement("div");
peteElem.id = "name7";
peteElem.innerHTML = "Peter Griffin";

varParentElem = document.getElementById("nameParent");

varParentElem.appendChild(peteElem);

// block1Elem[2].appendChild(peteElem);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var timElem = document.createElement("div");
timElem.id = "alias8";
timElem.innerHTML = "Old Man Riverwalk";

var riverElem = document.getElementById("aliasParent");

riverElem.appendChild(timElem);

//Final Boss
/*9. Create your own profile.*/
var block3Elem = document.getElementsByClassName("block3 col-sm-4");
var blankDude = block3Elem[2];
// console.log(blankDude);

blankDude.innerHTML= '<img src="https://www.fiendle.com/plushies/homestar-trogdor/homestar-trogdor-01.png">';

var dudeName = document.createElement("div");
dudeName.id = "name9";
dudeName.innerHTML = "Trogdor";

blankDude.appendChild(dudeName);

var dudePos = document.createElement("div");
dudePos.id = "position9";
dudePos.innerHTML = "Dragon-Man";

blankDude.appendChild(dudePos);

var dudeAlias = document.createElement("div");
dudeAlias.id = "alias9";
dudeAlias.innerHTML = "The Burninator";

blankDude.appendChild(dudeAlias);

var dudeQuote = document.createElement("div");
dudeQuote.id = "bio9";
dudeQuote.innerHTML = '"Burninating all tha people, and their thatched-roof cottages."';

blankDude.appendChild(dudeQuote);


