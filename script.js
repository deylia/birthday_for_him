
// SCRAPBOOK BY DEWI ❤️
// PART 1


// ---------- MUSIC ----------
const music = document.getElementById("bgMusic");

// ---------- OPEN BOOK ----------
const hero = document.getElementById("hero");
const scrapbook = document.getElementById("scrapbook");
const openBook = document.getElementById("openBook");

if(scrapbook){
    scrapbook.style.display="none";
}

if(openBook){

openBook.addEventListener("click",()=>{

hero.style.opacity="0";

setTimeout(()=>{

hero.style.display="none";

scrapbook.style.display="block";

scrapbook.classList.add("fade");

window.scrollTo({
top:0,
behavior:"smooth"
});

},600);

music.play().catch(()=>{});

});

}

// GIFT GAME

const gifts=document.querySelectorAll(".gift");

const giftText=document.getElementById("giftText");

const giftNext=document.getElementById("giftNext");

if(gifts.length>0){

giftNext.style.display="none";

gifts.forEach(gift=>{

gift.addEventListener("click",()=>{

if(gift.dataset.id=="2"){

gift.innerHTML="💌";

gift.style.background="#FFF";

giftText.innerHTML="🥹 Yeayy... kamu menemukan surat dari aku ❤️";

giftNext.style.display="inline-block";

confetti({

particleCount:120,

spread:90,

origin:{y:.6}

});

}else{

gift.innerHTML="😂";

giftText.innerHTML="Ups... bukan yang ini sayang.";

}

});

});

}

// QUIZ

const wrong=document.querySelectorAll(".quizWrong");

const correct=document.getElementById("correctQuiz");

const quizResult=document.getElementById("quizResult");

wrong.forEach(btn=>{

btn.onclick=()=>{

quizResult.innerHTML="❌ Salah hehe... coba inget lagi 🥹";

quizResult.style.color="#D16D6D";

}

});

if(correct){

correct.onclick=()=>{

quizResult.innerHTML="🥳 Yeyy bener!! Kamu masih inget ternyata 🤍";

quizResult.style.color="#67A36D";

confetti({

particleCount:180,

spread:120

});

}

}

// PHOTO LIGHTBOX

const photos=document.querySelectorAll(".photo-card img");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.left="0";

overlay.style.top="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.8)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.zIndex="99999";

const img=document.createElement("img");

img.src=photo.src;

img.style.maxWidth="90%";

img.style.maxHeight="90%";

img.style.borderRadius="20px";

img.style.boxShadow="0 20px 40px rgba(0,0,0,.4)";

overlay.appendChild(img);

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

}

});

});

// PAGE ANIMATION

const pages=document.querySelectorAll(".page");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

pages.forEach(page=>{

page.style.opacity="0";

page.style.transform="translateY(80px)";

page.style.transition=".8s";

observer.observe(page);

});

// RANDOM QUOTES

const quotes=[

"Every love story is beautiful, but ours is my favorite. 🤍",

"I still choose you every single day ❤️",

"You are my safest place 🏡",

"Thank you for existing 🌷",

"My favorite notification is always from you 📱",

"I love you more than yesterday ❤️"

];

const subtitle=document.querySelector(".subtitle");

if(subtitle){

let index=0;

setInterval(()=>{

subtitle.innerHTML=quotes[index];

index++;

if(index>=quotes.length){

index=0;

}

},4000);

}

// STICKY NOTES

const noteMessages = [
"🤍 Terima kasih sudah hadir di hidup aku.",
"🌷 Aku bangga banget punya kamu.",
"🥹 Kamu selalu bikin aku merasa aman.",
"💖 Semoga kita selalu sama ya.",
"🫶 Kamu adalah rumah terbaik buat aku.",
"💌 Happy Birthday calon mas bojo.",
"✨ Jangan lupa selalu jaga kesehatan ya.",
"🌸 Aku sayang kamu hari ini, besok, dan seterusnya.",
"💕 Senyum kamu selalu jadi favorit aku.",
"🤍 Terima kasih sudah sabar menghadapi aku.",
"💍 Semoga suatu hari kita benar-benar jadi mas bojo & mbak bojo wkwk.",
"🥰 Aku akan selalu dukung semua mimpi kamu."
];

const notes = document.querySelectorAll(".note");

notes.forEach((note) => {

let used = [];

note.addEventListener("click", () => {

if (used.length === noteMessages.length) {

used = [];

}

let random;

do {

random = Math.floor(Math.random() * noteMessages.length);

} while (used.includes(random));

used.push(random);

note.innerHTML = noteMessages[random];

note.style.background = "#FFFDF8";

note.style.transform = "scale(1.05) rotate(0deg)";

setTimeout(() => {

note.style.transform = "";

},300);

});

});


// LOVE METER

const loveBtn = document.getElementById("loveBtn");
const loveFill = document.getElementById("loveFill");
const loveText = document.getElementById("loveText");

let percent = 0;

if(loveBtn){

loveBtn.onclick = () => {

percent += 20;

if(percent <= 100){

loveFill.style.width = percent + "%";

loveText.innerHTML = percent + "% ❤️";

}else{

loveFill.style.width = "100%";

loveText.innerHTML = "∞ Tak Terhingga 🤍";

confetti({

particleCount:180,

spread:120

});

}

}  

}


// SECRET LETTER

const envelope = document.getElementById("secretEnvelope");

const secret = document.getElementById("secretMessage");

if(envelope){

envelope.onclick = () => {

if(secret.style.display=="block"){

secret.style.display="none";

envelope.innerHTML="💌";

}else{

secret.style.display="block";

envelope.innerHTML="📖";

secret.classList.add("fade");

}

}

}


const startDate = new Date("2025-10-05T00:00:00");

function updateCountdown(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor(

(diff%(1000*60*60*24))/(1000*60*60)

);

const minutes = Math.floor(

(diff%(1000*60*60))/(1000*60)

);

const timer = document.getElementById("timer");

if(timer){

timer.innerHTML = `

${days} Hari

<br>

${hours} Jam

${minutes} Menit

`;

}

}

setInterval(updateCountdown,1000);

updateCountdown();

// FLOWER PETALS

function createFlower(){

const flower = document.createElement("div");

flower.className="heart";

const emoji = [

"🌸",

"🌷",

"🌼",

"🤍",

"💕",

"💖"

];

flower.innerHTML = emoji[Math.floor(Math.random()*emoji.length)];

flower.style.left=Math.random()*100+"vw";

flower.style.fontSize=(Math.random()*20+18)+"px";

flower.style.animationDuration=(Math.random()*4+6)+"s";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},10000);

}

setInterval(createFlower,700);


// SPARKLES

function sparkle(){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},2000);

}

setInterval(sparkle,500);


// LOVE MESSAGE TYPING EFFECT

const loveTyping = document.getElementById("loveTyping");


const loveWords = [

"Aku sayang kamu ❤️",

"Terima kasih sudah selalu ada 🤍",

"Kamu adalah orang favorit aku 🥰",

"Aku harap kita selalu bersama 💍",

"Semoga semua mimpi kamu tercapai ✨"

];


let typingIndex = 0;


function typingLove(){

if(!loveTyping) return;


let text = loveWords[typingIndex];

let char = 0;


loveTyping.innerHTML="";


let interval=setInterval(()=>{


loveTyping.innerHTML += text[char];


char++;


if(char >= text.length){

clearInterval(interval);


setTimeout(()=>{

typingIndex++;

if(typingIndex >= loveWords.length){

typingIndex=0;

}

typingLove();


},2500);


}


},120);


}


typingLove();


// MUSIC BUTTON


const musicBtn=document.getElementById("musicBtn");


let musicPlaying=false;


if(musicBtn && music){


musicBtn.onclick=()=>{


if(!musicPlaying){


music.play();


musicBtn.innerHTML="⏸ Pause Music";


musicPlaying=true;


}else{


music.pause();


musicBtn.innerHTML="🎵 Play Music";


musicPlaying=false;


}


}


}


// VIRTUAL HUG BUTTON


const hugBtn=document.getElementById("hugBtn");


if(hugBtn){


hugBtn.onclick=()=>{


const hug=document.createElement("div");


hug.innerHTML="🤗";


hug.style.position="fixed";

hug.style.left="50%";

hug.style.top="50%";

hug.style.transform="translate(-50%,-50%) scale(0)";

hug.style.fontSize="120px";

hug.style.zIndex="99999";

hug.style.transition=".6s";


document.body.appendChild(hug);



setTimeout(()=>{


hug.style.transform="translate(-50%,-50%) scale(1)";


},100);



setTimeout(()=>{


hug.style.transform="translate(-50%,-50%) scale(0)";


},1500);



setTimeout(()=>{


hug.remove();


},2200);



confetti({

particleCount:100,

spread:100

});


}


}


// CLICK LOVE EFFECT


document.addEventListener("click",(e)=>{


const heart=document.createElement("span");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="25px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";


heart.style.animation="heartPop 1s ease forwards";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},1000);


});


// MEMORY DIARY


const diaryBtn=document.getElementById("diaryBtn");

const diaryBox=document.getElementById("diaryBox");



if(diaryBtn){


diaryBtn.onclick=()=>{


if(diaryBox.style.display==="block"){


diaryBox.style.display="none";


diaryBtn.innerHTML="📖 Buka Diary";


}else{


diaryBox.style.display="block";


diaryBtn.innerHTML="💌 Tutup Diary";


diaryBox.classList.add("fade");


}


}


}


// RANDOM LOVE FACT


const loveFacts=[


"Kamu adalah alasan aku tersenyum hari ini 😊",


"Aku suka cara kamu membuat hal kecil terasa spesial ✨",


"Walaupun kamu suka kentutin aku, aku tetep sayang kamu 🤍",


"Aku selalu bangga sama kamu ❤️",


"Jangan lupa makan dan istirahat ya sayang 🌷"


];


const factBtn=document.getElementById("factBtn");

const factText=document.getElementById("factText");



if(factBtn){


factBtn.onclick=()=>{


let random=Math.floor(Math.random()*loveFacts.length);


factText.innerHTML=loveFacts[random];


confetti({

particleCount:70,

spread:80

});


}


}


// BIRTHDAY SURPRISE


const surpriseBtn=document.getElementById("surpriseBtn");


if(surpriseBtn){


surpriseBtn.onclick=()=>{


document.body.classList.add("birthdayMode");


alert(

"🎂 Happy Birthday Sayang ❤️\n\nSemoga kamu selalu sehat, bahagia, dan semua impian kamu tercapai. Aku sayang kamu 🤍"

);



for(let i=0;i<10;i++){

createFlower();

}


}


}



// =======================================
// SECRET PASSWORD
// =======================================


const secretBtn=document.getElementById("secretBtn");


if(secretBtn){


secretBtn.onclick=()=>{


let password=prompt("Masukkan kata rahasia ❤️");


if(password==="sayangdewiku"){


alert(

"💖 Berhasil membuka rahasia!\n\nAku selalu pilih kamu ❤️"

);


confetti({

particleCount:200,

spread:150

});


}else{


alert(

"🥺 Salah password hehe"

);


}


}


}



// 100 REASONS WHY I LOVE YOU

const reasonBtn = document.getElementById("reasonBtn");
const reasonText = document.getElementById("reasonText");


const reasons = [

"Karena kamu selalu sabar menghadapi aku 🤍",

"Karena kamu selalu bikin aku merasa aman 🥰",

"Karena senyum kamu selalu bikin aku bahagia ❤️",

"Karena kamu selalu berusaha untuk aku 🌷",

"Karena kamu adalah tempat cerita terbaik aku 💌",

"Karena kamu selalu mendukung mimpi aku ✨",

"Karena kamu membuat hari biasa jadi spesial 💖",

"Karena aku nyaman menjadi diri sendiri saat sama kamu 🤍"

];


if(reasonBtn){

reasonBtn.onclick=()=>{


let random = Math.floor(Math.random()*reasons.length);


reasonText.innerHTML = reasons[random];


reasonText.classList.add("fade");


};


}


// LUCKY WHEEL


const wheelBtn=document.getElementById("wheelBtn");
const wheelResult=document.getElementById("wheelResult");


const prizes=[

"💌 Surat cinta dari aku",

"🤗 Pelukan virtual",

"🥰 kue pukis",

"🌷 2 dada",

"💖 Aku sayang kamu selamanya",

"🎁 Kejutan kecil"

];


if(wheelBtn){


wheelBtn.onclick=()=>{


let hadiah = prizes[Math.floor(Math.random()*prizes.length)];


wheelResult.innerHTML=
"🎉 Kamu mendapatkan: <br>"+hadiah;


confetti({

particleCount:150,

spread:100

});


};


}


// BIRTHDAY WISH


const birthdayBtn=document.getElementById("birthdayBtn");

const birthdayText=document.getElementById("birthdayText");



if(birthdayBtn){


birthdayBtn.onclick=()=>{


birthdayText.innerHTML=

`
🎂 Happy Birthday Sayang ❤️
<br><br>
Semoga kamu selalu sehat,
<br>
panjang umur,
<br>
dilancarkan semua urusannya,
<br>
dan semua impian kamu tercapai.
<br><br>
Aku selalu bangga sama kamu 🤍
`;



confetti({

particleCount:200,

spread:120

});


};


}



// =======================================
// PROMISE CARD CLICK
// =======================================


const promises=document.querySelectorAll(".promise");


promises.forEach(card=>{


card.onclick=()=>{


card.classList.toggle("open");


};


});

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

document.addEventListener("keydown", function(e){

    if(e.key === "F12"){
        e.preventDefault();
    }

    if(e.ctrlKey && e.shiftKey && (
        e.key === "I" ||
        e.key === "J" ||
        e.key === "C"
    )){
        e.preventDefault();
    }

    if(e.ctrlKey && e.key === "U"){
        e.preventDefault();
    }

});

document.querySelectorAll("img").forEach(img=>{
    img.draggable = false;
});

document.addEventListener("copy", function(e){
    e.preventDefault();
});