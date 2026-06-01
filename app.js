window.onload = () => {

document.getElementById(
"telegramPopup"
).style.display = "flex";

};

function closePopup(){

document.getElementById(
"telegramPopup"
).style.display = "none";

}

const searchInput =
document.getElementById(
"searchInput"
);

if(searchInput){

searchInput.addEventListener(
"keyup",
function(){

const value =
this.value.toLowerCase();

const cards =
document.querySelectorAll(
".course-card"
);

cards.forEach(card=>{

const title =
card.querySelector(
"h3"
).textContent.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});
}
