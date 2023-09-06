
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

var atk=0;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

var audio = document.getElementById("myAudio");
var audioPlayer = document.getElementById("myAudio");


playButton.onclick=goTown   




const weapons=[
    {
        name : "stick",
        power : 5
    },
    {
        name : "dagger",
        power : 30
    },
    {
        name : "claw hammer",
        power : 50
    },
    {
        name : "sword",
        power :100
    },
];

const monsters = [
    {
        name : "Froggit",
        level : 2,
        health : 15
    },
    {
        name : "Loox",
        level : 8,
        health : 60
    },
    {
        name : "Toriel",
        level : 10,
        health: 12000
    }
]

const locations = [
    {
        name: "town square",
        "button text": ["Go to store","Go to cave","Fight Toriel"],
        "button functions": [goStore,goCave,fightToriel],
        text : "In the melancholic tableau of my existence, I find myself ensnared within the gentle yet resolute embrace of a maternal caprine guardian, whose unwavering love constrains my departure from the hallowed recesses of these ancient ruins."
    },
    {
        name : "store",
        "button text" : ["Buy 20 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions" : [buyHealth, buyWeapon, goTown],
        text : "You enter the store."
    },
    {
        name: "cave",
        "button text" : ["Fight Froggit", "Fight Loox", "Go to town square"],
        "button functions" : [fightFroggit,fightBeast,goTown],
        text : "You enter the cave. You're ready to hunt"
    },
    {
        name:"fight",
        "button text":["Attack","Dodge","Run"],
        "button functions" : [attack,dodge,goTown],
        text:"You are fighting a monster."
    },
    {
        name:"kill monster",
        "button text":["Go to town square","Go to town square","Go to town square"],
        "button functions":[goTown,goTown,easterEgg],
        text:'The monsters turn into ashes.You gain experience points and find gold.'
    },
    {
        name:"lose",
        "button text" :["REPLAY?","REPLAY?","REPLAY?"],
        "button functions": [restart,restart,restart],
        text : "You lose."
    },
    {
        name:"win",
        "button text" :["REPLAY?","REPLAY?","REPLAY?"],
        "button functions": [restart,restart,restart],
        text : "While she came to hug you to say the final goodbye, You strike her one last time...\nToriel:You... at my most vulnerable moment...\nToriel:To think I was worried you wouldn't fit in out there...\nToriel:Eheheheh!!! You really are no different than them!\nToriel:Ha... ha...\nToriel:Now I see who I was protecting by keeping you here.\nToriel:Not you...\nToriel:But them!\nToriel:Ha... ha...\nYou are filled with determination"
    },
    {
        name:"easter egg",
        "button text" :["2","8","Go to town square"],
        "button functions": [pickTwo,pickEight,goTown],
        text : "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
]
const imageStuff=[
    {
        name: "town",
        "source" : ["https://giffiles.alphacoders.com/162/162108.gif"],
        "alt" : ["town"]
    },
    {
        name: "store",
        "source":["https://media.tenor.com/rLYJYLvzsCgAAAAd/shop-store.gif"],
        "alt" : ["store"]
    },
    {
        name: "cave",
        "source":["https://i.pinimg.com/originals/39/b9/cf/39b9cf83175bec13c7aa7573924c0ae8.gif"],
        "alt":["cave"]
    },
    {
        name: "Froggit",
        "source":["https://media.tenor.com/xbJuKe87bSQAAAAC/swaying-blinking.gif"],
        "alt":["Froggit"]
    },
    {
        name:"Loox",
        "source":["https://art.pixilart.com/71e048012c95203.gif"],
        "alt":["Loox"]
    },
    {
        name:"Toriel",
        "source":["https://media.tenor.com/dT21giOjDZMAAAAM/idle-eyes-blink.gif"],
        "alt":["Toriel"]
    }

]

//Initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightToriel;

function update(location) {
    monsterStats.style.display="none";
	button1.innerText = location["button text"][0];
	button2.innerText = location["button text"][1];
	button3.innerText = location["button text"][2];
	button1.onclick = location["button functions"][0];
	button2.onclick = location["button functions"][1];
	button3.onclick = location["button functions"][2];
    text.innerText = location.text;    
}

function goTown() {
    playButton.style.display="none"
    update(locations[0]);
    changeImage(imageStuff[0]);
    changeAudioSource('./music/Undertale_OST_-_Waterfall_(mp3.pm).mp3');
}

function goStore() {
    update(locations[1]);
    changeImage(imageStuff[1]);
    changeAudioSource('./music/toby_fox_-_Undertale_OST_023_-_Shop_(mp3.pm).mp3'); 
}

function goCave(){
    update(locations[2]);
    changeImage(imageStuff[2]);
    changeAudioSource('./music/Undertale_OST_-_Premonition_(mp3.pm).mp3');
}

function buyHealth(){
    if(gold>=10){
        gold-=10;
        health+=20;
        goldText.innerText=gold;
        healthText.innerText=health;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}
function buyWeapon(){
    if(currentWeapon < weapons.length - 1)
        if(gold>=30){
            gold-=30;
            currentWeapon+=1;
            goldText.innerText=gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText="You now have a " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += "In your inventory you have: " + inventory;
        }
        else{
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    else{
        text.innerText = "You already have the most powerful weapon";
        button2.innerText="Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}
function sellWeapon(){
    if(inventory.length>1){
        gold+=15;
        goldText.innerText=gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += "In your inventory you have: "+inventory;
    }
    else{
        text.innerText="Don't sell your only weapon!";
    }
}
function fightFroggit(){
    changeAudioSource('./music/toby_fox_-_Enemy_Approaching_(mp3.pm).mp3');
    changeImage(imageStuff[3]);
    fighting=0;
    goFight();
}
function fightBeast(){
    changeAudioSource('./music/toby_fox_-_Enemy_Approaching_(mp3.pm).mp3');
    changeImage(imageStuff[4]);
    fighting=1;
    goFight();
}
function fightToriel(){
    changeAudioSource('./music/Undertale_OST_-_Toby_Fox_-_Heartache_(mp3.pm).mp3');
    atk=0;
    changeImage(imageStuff[5]);
    fighting=2;
    goFight();
    text.innerText = "Toriel blocks the way"
}
function goFight(){
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterNameText.innerText=monsters[fighting].name;
    monsterHealthText.innerText=monsterHealth;
}
function attack(){
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += "You attack it with your " + weapons[currentWeapon].name + ".\n\n";
    if(fighting===2){
        if(atk===0){
            text.innerText +="Toriel: I will not let you pass \n"
        }
        else if(atk===1){
            text.innerText += "Toriel: Go upstairs, I promise you, you will be happy here my child \n"
        }
        else if(atk===2){
            text.innerText += "Toriel: Why do you want to leave so badly? \n"
        }
        else if(atk===3){
            text.innerText += "Toriel: You are just like the others. \n "
        }
        else if(atk===4){
            text.innerText += "Toriel: Stop looking at me that way.\n "
        }
        else if(atk===5){
            text.innerText += "Toriel: I know you want to go home, but...\nToriel:But please... go upstairs now. \n "
        }
        else if(atk===6){
            text.innerText += "Toriel : I promise I will take good care of you here \n "
        }
        else if(atk===7){
            text.innerText += "Toriel : I know we do not have much, but...\nWe can have a good life here \n "
        }
        else if(atk===8){
            text.innerText += "Toriel : Pathetic, is it not? I cannot save even a single child. \n "
        }
        else if(atk===9){
            text.innerText += "No, I understand.\nYou would just be unhappy trapped down here.\nThe RUINS are very small once you get used to them.\nIt would not be right for you to grow up in a place like this.\nMy expectations... My loneliness... My fear...\nFor you, my child... I will put them aside.\n"
        }
        else if(atk===10){
            winGame();
        }
        atk=atk+1;
        console.log(atk);
    }
    if(isMonsterHit()){
        health-=getMonsterAttackValue(monsters[fighting].level);
    }
    else{
        text.innerText+="You miss";
    }
    monsterHealth-=weapons[currentWeapon].power + Math.floor(Math.random()*xp)+1;
    healthText.innerText=health;
    monsterHealthText.innerText=monsterHealth;
    if(health<=0){
        lose();
    }
    else if(monsterHealth<=0){
        if(fighting===2){
            winGame();
        }
        else{
            defeatMonster();
        }
    }
    if(Math.random()<=.1 && inventory.length!==1){
        text.innerText+="Your " + inventory.pop() + " breaks. ";
        currentWeapon-=1;
    }
}
function getMonsterAttackValue(level){
    let hit = (level * 5) - (Math.floor(Math.random()*xp));
    return hit;
}
function isMonsterHit(){
    return Math.random()>.2 || health<20;
}
function dodge(){
    text.innerText="You dodge the attack from the " + monsters[fighting].name + ".";
}
function defeatMonster(){
    gold+=Math.floor(monsters[fighting].level*6.7);
    xp+=monsters[fighting].level;
    goldText.innerText=gold;
    xpText.innerText=xp;
    update(locations[4]);
}
function lose(){
    changeAudioSource('./music/Toby_Fox_-_Start_Menu_Undertale_OST_(mp3.pm).mp3');
    update(locations[5]);
}
function winGame(){
    changeAudioSource('./music/Toby_Fox_-_Your_Best_Nightmare_(mp3.pm).mp3');
    update(locations[6]);
}
function restart(){
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];
    goldText.innerText=gold;
    healthText.innerText=health;
    xpText.innerText = xp;
    goTown();
}

function easterEgg(){
    update(locations[7]);
}

function pickTwo(){
    pick(2);
}
function pickEight(){
    pick(8);
}
function pick(guess){
    let numbers = [];
    while(numbers.length<10){
        numbers.push(Math.floor(Math.random()*11));
    }
    text.innerText = "You picked " + guess + ".Here are the random numbers: \n";

    for(let i=0;i<10;i++){
        text.innerText += numbers[i] + "\n";
    }
    if(numbers.indexOf(guess)!==-1){
        text.innerText+="Right! You win 20 gold!"
        gold+=20;
        goldText.innerText=gold;
    }
    else{
        text.innerText += "Wrong! You lose 10 health!"
        health-=10;
        healthText.innerText=health
        if(health<=0){
            lose();
        }
    }
}
function changeImage(imageStuff){

    var imgElement = document.querySelector("#myImage");
    if (imgElement) { 
        imgElement.src = imageStuff["source"][0];
        imgElement.alt = imageStuff["alt"][0];
        imgElement.width=500;
        imgElement.height=500;
}
}
function changeAudioSource(newSource) {
    audioPlayer.src = newSource;
    audioPlayer.load(); // Reload the audio element to apply the changes
    audioPlayer.play(); // Start playing the new audio
}
