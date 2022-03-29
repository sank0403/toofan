window.localStorage;
if (!localStorage.totaliplwins){
localStorage.setItem("totaliplwins",0);
localStorage.setItem("totalipltime",0);
localStorage.setItem("averageipltime",0);
}

let i = 60;
window.onload = onTimer();
function onTimer() {
  document.getElementById('mycounter').innerHTML = i;
  i--;
  if (i < 0)  {
	if (!gameOver){  
		document.getElementById("answer").style.color = "red";
		document.getElementById("answer").innerText = "Time is up! You lose!\n The player was "+firstname+" "+lastname+".";
		gameOver = true;
	}
  }
  else {
	setTimeout(onTimer, 1000);
  }
}


setTimeout(FetchData, 5000)
setTimeout(FetchData, 10000)
setTimeout(FetchData, 20000)
setTimeout(FetchData, 30000)
setTimeout(FetchData, 40000)
setTimeout(FetchData, 50000)
	function FetchData(){
		if (!gameOver){
			var elementid = GetElemid(arrayid);
			elementid = Number(elementid);
			switch (elementid){
				case 0: document.getElementById(0).innerText = year;
				break;
				case 1: document.getElementById(1).innerText = country;
				break;				
				case 2: document.getElementById(2).innerText = team;
				break;
				case 3: document.getElementById(3).innerText = category;
				break;
				case 4: document.getElementById(4).innerText = fnfl;
				break;
				case 5: document.getElementById(5).innerText = lnfl;
				break;	
			}			
			arrayid.splice(arrayid.indexOf(elementid),1)
		}
	}	

function GetElemid(){
	var arrayidind = [Math.floor(Math.random()*arrayid.length)];
	var returnid = arrayid[arrayidind];
	return returnid;
}
	

	/* setTimeout(FetchData1, 5000)
		function FetchData1(){
			if (!gameOver){
			document.getElementById(0).innerText = catg;
			}
		}	

	setTimeout(FetchData2, 15000)
		function FetchData2(){
			if (!gameOver){
			document.getElementById(1).innerText = country;
			}
		}

	setTimeout(FetchData3, 25000)
		function FetchData3(){
			if (!gameOver){
			document.getElementById(2).innerText = year;
			}
		}

	setTimeout(FetchData4, 35000)
		function FetchData4(){
			if (!gameOver){
			document.getElementById(3).innerText = fnfl;
			}
		}

	setTimeout(FetchData5, 45000)
		function FetchData5(){
			if (!gameOver){
			document.getElementById(4).innerText = lnfl;
			}
		}	 */

// *****************************************************************************
var enterHit = false;
var gameOver = false;
var arrayid = [0,1,2,3,4,5]
var yearList = ["2008",
"2009",
"2010",
"2011",
"2012",
"2013",
"2014",
"2015",
"2016",
"2017",
"2018",
"2019",
"2020",
"2021",
"2008",
"2009",
"2010",
"2011",
"2012",
"2013",
"2014",
"2015",
"2016",
"2017",
"2018",
"2019",
"2020",
"2021",
"2008",
"2009",
"2010",
"2011",
"2012",
"2013",
"2014",
"2015",
"2016",
"2017",
"2018",
"2019",
"2020",
"2021",
"2008",
"2009",
"2010",
"2011",
"2012",
"2013",
"2014",
"2015",
"2016",
"2017",
"2018",
"2019",
"2020",
"2021",
"2008",
"2009",
"2010",
"2011",
"2012",
"2013",
"2014",
"2015",
"2016",
"2017",
"2018",
"2019",
"2020",
"2021",
"2008",
"2009",
"2010",
"2011",
"2012",
"2013",
"2014",
"2015",
"2016",
"2017",
"2018",
"2019",
"2020",
"2021",
]
var countryList = ["AUS",
"AUS",
"IND",
"WIN",
"WIN",
"AUS",
"IND",
"AUS",
"IND",
"AUS",
"NZL",
"AUS",
"IND",
"IND",
"PAK",
"IND",
"IND",
"SRL",
"SAF",
"WIN",
"IND",
"WIN",
"IND",
"IND",
"AUS",
"SAF",
"SAF",
"IND",
"SRL",
"AUS",
"IND",
"WIN",
"WIN",
"WIN",
"AUS",
"WIN",
"IND",
"AUS",
"IND",
"WIN",
"IND",
"IND",
"AUS",
"AUS",
"IND",
"WIN",
"WIN",
"AUS",
"AUS",
"WIN",
"IND",
"ENG",
"WIN",
"WIN",
"ENG",
"IND",
"IND",
"IND",
"IND",
"IND",
"IND",
"WIN",
"IND",
"IND",
"AUS",
"IND",
"AUS",
"IND",
"NZL",
"SAF",
"IND",
"IND",
"IND",
"IND",
"IND",
"IND",
"IND",
"IND",
"BNG",
"IND",
"IND",
"IND",
"IND",
"IND",
] 
var firstnameList = ["Shaun",
"Matthew",
"Sachin",
"Chris",
"Chris",
"Michael",
"Robin",
"David",
"Virat",
"David",
"Kane",
"David",
"KL",
"Ruturaj",
"Sohail",
"RP",
"Pragyan",
"Lasith",
"Morne",
"Dwayne",
"Mohit",
"Dwayne",
"Bhuvaneshwar",
"Bhuvaneshwar",
"Andrew",
"Imran",
"Kagiso",
"Harshal",
"Sanath",
"Adam",
"Robin",
"Chris",
"Chris",
"Chris",
"Glenn",
"Chris",
"Virat",
"Glenn",
"Rishabh",
"Andre",
"Ishan",
"KL",
"Shane",
"Adam",
"Sachin",
"Chris",
"Sunil",
"Shane",
"Glenn",
"Andre",
"Virat",
"Ben",
"Sunil",
"Andre",
"Jofra",
"Harshal",
"Yusuf",
"Anil",
"Suresh",
"Murali",
"Manvinder",
"Kieron",
"Manish",
"Rohit",
"Ben",
"Krunal",
"Shane",
"Jasprit",
"Trent",
"Faf",
"Shreevats",
"Rohit",
"Saurabh",
"Iqbal",
"Mandeep",
"Sanju",
"Axar",
"Shreyas",
"Mustafizur",
"Basil",
"Rishabh",
"Shubman",
"Devdutt",
"Ruturaj",
]
var lastnameList = ["Marsh",
"Hayden",
"Tendulkar",
"Gayle",
"Gayle",
"Hussey ",
"Uthappa",
"Warner",
"Kohli",
"Warner",
"Williamson",
"Warner",
"Rahul",
"Gaikwad",
"Tanvir",
"Singh",
"Ojha",
"Malinga",
"Morkel",
"Bravo",
"Sharma",
"Bravo",
"Kumar",
"Kumar",
"Tye",
"Tahir",
"Rabada",
"Patel",
"Jayasuriya",
"Gilchrist",
"Uthappa",
"Gayle",
"Gayle",
"Gayle",
"Maxwell",
"Gayle",
"Kohli",
"Maxwell",
"Pant",
"Russell",
"Kishan",
"Rahul",
"Watson",
"Gilchrist",
"Tendulkar",
"Gayle",
"Narine",
"Watson",
"Maxwell",
"Russell",
"Kohli",
"Stokes",
"Narine",
"Russell",
"Archer",
"Patel",
"Pathan",
"Kumble",
"Raina",
"Vijay",
"Bisla",
"Pollard",
"Pandey",
"Sharma",
"Cutting",
"Pandya",
"Watson",
"Bumrah",
"Boult",
"duplessis",
"Goswami",
"Sharma",
"Tiwary",
"Abdulla",
"Singh",
"Samson",
"Patel",
"Iyer",
"Rahman ",
"Thampi",
"Pant",
"Gill",
"Padikkal",
"Gaikwad",
]
var teamList = ["KXIP",
"CSK",
"MI",
"RCB",
"RCB",
"CSK",
"KKR",
"SRH",
"RCB",
"SRH",
"SRH",
"SRH",
"KXIP",
"CSK",
"RR",
"DC",
"DC",
"MI",
"DD",
"CSK",
"CSK",
"CSK",
"SRH",
"SRH",
"KXIP",
"CSK",
"DC",
"RCB",
"MI",
"DC",
"RCB",
"RCB",
"RCB",
"RCB",
"KXIP",
"RCB",
"RCB",
"KXIP",
"DC",
"KKR",
"MI",
"PBKS",
"RR",
"DC",
"MI",
"RCB",
"KKR",
"RR",
"KXIP",
"KKR",
"RCB",
"RPS",
"KKR",
"KKR",
"RR",
"RCB",
"RR",
"RCB",
"CSK",
"CSK",
"KKR",
"MI",
"KKR",
"MI",
"SRH",
"MI",
"CSK",
"MI",
"MI",
"CSK",
"RCB",
"DC",
"MI",
"KKR",
"KXIP",
"RR",
"KXIP",
"DC",
"SRH",
"GL",
"DC",
"KKR",
"RCB",
"CSK",
]
var catgList = ["OC",
"OC",
"OC",
"OC",
"OC",
"OC",
"OC",
"OC",
"OC",
"OC",
"OC",
"OC",
"OC",
"OC",
"PC",
"PC",
"PC",
"PC",
"PC",
"PC",
"PC",
"PC",
"PC",
"PC",
"PC",
"PC",
"PC",
"PC",
"Max6s",
"Max6s",
"Max6s",
"Max6s",
"Max6s",
"Max6s",
"Max6s",
"Max6s",
"Max6s",
"Max6s",
"Max6s",
"Max6s",
"Max6s",
"Max6s",
"MVP",
"MVP",
"MVP",
"MVP",
"MVP",
"MVP",
"MVP",
"MVP",
"MVP",
"MVP",
"MVP",
"MVP",
"MVP",
"MVP",
"MF",
"MF",
"MF",
"MF",
"MF",
"MF",
"MF",
"MF",
"MF",
"MF",
"MF",
"MF",
"MF",
"MF",
"EP",
"EP",
"EP",
"EP",
"EP",
"EP",
"EP",
"EP",
"EP",
"EP",
"EP",
"EP",
"EP",
"EP",
]
var index = [Math.floor(Math.random()*yearList.length)];
var firstname = firstnameList[index];
var lastname = lastnameList[index];
var year = yearList[index];
var team = teamList[index];
var category = catgList[index];
var country = countryList[index];
var fnfl = firstname.slice(0, 1).toUpperCase();
var lnfl = lastname.slice(0, 1).toUpperCase();
var fnwidth = firstname.length;
var lnwidth = lastname.length;
var width = fnwidth + lnwidth;
var answername = "";
answername = firstname.concat(lastname).toLowerCase();
document.getElementById("answer").style.color = "cyan";
document.getElementById("answer").innerText = "Read the Game Rules to learn about how to play.\n Timer in Progress - Refresh Page to reload!";
var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

window.onload = function(){
    intialize();
}


function intialize() {

    // Create the game board

        for (let clueindex = 0; clueindex < 6; clueindex++) {
            // <span id="0-0" class="tile">P</span>
            let clue = document.createElement("span");
            clue.id = clueindex;
            clue.classList.add("clue-ball");
			if (clueindex == 0){	
            clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Year</div>';
			}
			else if (clueindex == 1){	
            clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Country</div>';
			}
			else if (clueindex == 2){	
            clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Team</div>';
			}	
			else if (clueindex == 3){	
            clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">Category</div>';
			}
			else if (clueindex == 4){	
            clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">FN FL</div>';
			}	
			else if (clueindex == 5){	
            clue.innerHTML = '<img class="image" src="ball.png" alt="Alt text"/><div class="centered">LN FL</div>';
			}			
            document.getElementById("clue-ball").appendChild(clue);
        }	

        for (let statsindex = 6; statsindex < 8; statsindex++) {
            // <span id="0-0" class="tile">P</span>
            let stats = document.createElement("span");
            stats.id = statsindex;
            stats.classList.add("stats-item");
			if (statsindex == 6){	
            stats.innerHTML = "Total Wins: " + localStorage.totaliplwins;
			}
			else if (statsindex == 7){	
            stats.innerHTML = "Avg. Time: " + localStorage.averageipltime + "s";
			}	
            document.getElementById("stats-item").appendChild(stats);
        }			
		


   // for (let r = 0; r < height; r++) {
	    let f = 1
        for (let c = 0; c < fnwidth; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = f.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("boardfirst").appendChild(tile);
        }
    //}
  
	    let l = 1
        for (let c = fnwidth; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = l.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("boardlast").appendChild(tile);
        }
    //}	
	
    // Create the key board
/*     let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ] */
	
     let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Clr"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]	 

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if (key == "Clr") {
                keyTile.id = "Clr";
            }		
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; // "Key" + "A";
            } 
		
            keyTile.addEventListener("click", processKey);

            if (key == "Enter"  || key == "⌫") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }
    

    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}


function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return; 

    // alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
		if (enterHit == true){
			for (let c = col-1; c >= 0; c--) {
				let currTile = document.getElementById(1 + '-' + c.toString());
				currTile.innerText = "";
				currTile.classList.remove("correct","present");
				col -= 1;
			}
			let currTile = document.getElementById(1 + '-' + 0);
			currTile.innerText = e.code[3];
			col = 1;
			enterHit = false;
		}
		else{		
			if (col < width) {
				let currTile = document.getElementById(1 + '-' + col.toString());
				if (currTile.innerText == "") {
					currTile.innerText = e.code[3];
					col += 1;
				}
			}
		}
		document.getElementById("answer").innerText = "";
    }
    else if (e.code == "Backspace") {
		if (enterHit == true){
			for (let c = col-1; c >= 0; c--) {
				let currTile = document.getElementById(1 + '-' + c.toString());
				currTile.innerText = "";
				currTile.classList.remove("correct","present");
				col -= 1;
			}
			enterHit = false;
		}
		else{
			if (0 < col && col <= width) {
				col -=1;
			}
			let currTile = document.getElementById(1 + '-' + col.toString());
			currTile.innerText = "";
			currTile.classList.remove("correct","present");
		}
		document.getElementById("answer").innerText = "";
    }
    else if (e.code == "Clr") {
		enterHit = false;
		if (confirm('Are you sure you want to clear the entry?')) {
		  // Clear it!
			for (let c = col-1; c >= 0; c--) {
				let currTile = document.getElementById(1 + '-' + c.toString());
				currTile.innerText = "";
				currTile.classList.remove("correct","present");				
				col -= 1;
			}
		} else {
		  // Do nothing!
		} 
	}
    else if (e.code == "Enter") {
        update();
    }
}

function update() {
	enterHit = true;	
    let guess = "";
    document.getElementById("answer").innerText = "";
	
    let letterCount = {}; //keep track of letter frequency, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
    for (let i = 0; i < answername.length; i++) {
        let letter = answername[i];

        if (letterCount[letter]) {
           letterCount[letter] += 1;
        } 
        else {
           letterCount[letter] = 1;
        }
    }

    //string up the guesses into the word
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(1 + '-' + c.toString());
        let letter = currTile.innerText;
		if (answername[c] == letter.toLowerCase()) {
			currTile.classList.add("correct");
			letterCount[letter.toLowerCase()] -= 1;
		}
        guess += letter;
    }

    guess = guess.toLowerCase(); //case sensitive
	
	
	if (guess == answername) {
		for (let c = 0; c < width; c++) {
			let currTile = document.getElementById(1 + '-' + c.toString());
			currTile.classList.add("correct");		
		}		
		document.getElementById("answer").style.color = "green";
		localStorage.totaliplwins = Number(localStorage.totaliplwins)+1;
		localStorage.totalipltime = Number(localStorage.totalipltime)+(60-i);		
		localStorage.averageipltime = Math.round(localStorage.totalipltime/localStorage.totaliplwins);
		document.getElementById(6).innerText = "Total Wins: " + localStorage.totaliplwins;
		document.getElementById(7).innerText = "Avg. Time: " + localStorage.averageipltime + "s";
		document.getElementById("answer").innerText = "You have identified the player successfully.\nCongrats! Time Taken: " + (60-i) + "s.";
		gameOver = true;
		var hidecounter = document.getElementById("mycounter");
		hidecounter.style.color = "black";
	}	
	else{
		document.getElementById("answer").style.color = "red";
		document.getElementById("answer").innerText = "Incorrect Guess! \n Hit any key to clear and then try again.";
/* 		for (let c = col-1; c >= 0; c--) {
			let currTile = document.getElementById(1 + '-' + c.toString());
			currTile.innerText = "";
			col -= 1;
		} */		
	}
	
    //go again and mark which ones are present but in wrong position
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(1 + '-' + c.toString());
        let letter = currTile.innerText;
        // skip the letter if it has been marked correct
        if (!currTile.classList.contains("correct")) {
            //Is it in the word?         //make sure we don't double count
            if (answername.includes(letter.toLowerCase()) && letterCount[letter.toLowerCase()] > 0) {
                currTile.classList.add("present");	
                letterCount[letter.toLowerCase()] -= 1;
            } 			
        }
    }	

}
