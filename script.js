if (!localStorage.clicks) localStorage.clicks = 0;
if (!localStorage.forClick) localStorage.forClick = 1;
if (!localStorage.perSecond) localStorage.perSecond = 0;
if (!localStorage.clickPrice) localStorage.clickPrice = 1000;
if (!localStorage.farmPrice) localStorage.farmPrice = 200;

let bal = Number(localStorage.clicks);
let forClick = Number(localStorage.forClick);
let perSecond = Number(localStorage.perSecond);
let clickPrice = Number(localStorage.clickPrice);
let farmPrice = Number(localStorage.farmPrice);
const farmPrice1 = 200;
const clickPrice1 = 1000;

document.getElementById("ball").innerHTML = bal;
document.getElementById("forClick").innerHTML = forClick;
document.getElementById("clickPrice").innerHTML = clickPrice;
document.getElementById("perSecond").innerHTML = perSecond;
document.getElementById("farmPrice").innerHTML = farmPrice;


function addMoney() {
 bal = bal + forClick;
 document.getElementById("ball").innerHTML = bal;
 console.log('dd')
 localStorage.clicks = bal;
}

function farm() {
 bal = bal + perSecond
 document.getElementById("ball").innerHTML = bal
 localStorage.clicks = bal;
}

setInterval(farm, 1000)

function addClick() {
 if (bal < clickPrice) {
  alert('Тебе не хватает денег!');
 }
 if (bal >= clickPrice) {
  bal = bal - clickPrice;
  clickPrice = Math.round(clickPrice + clickPrice1 * 1.001);
  forClick = forClick + 1;
  localStorage.clicks = bal;
  localStorage.clickPrice = clickPrice;
  localStorage.forClick = forClick;
  document.getElementById("ball").innerHTML = bal;
  document.getElementById("clickPrice").innerHTML = clickPrice;
  document.getElementById("forClick").innerHTML = forClick;
 }
}

function addFarm() {
 if (bal < farmPrice) {
  alert("Тебе не хватает денег!")
 }
 if (bal >= farmPrice) {
  bal = bal - farmPrice;
  farmPrice = farmPrice + Math.round(farmPrice1 * 1.01);
  perSecond = perSecond + 1;
  localStorage.clicks = bal;
  localStorage.farmPrice = farmPrice;
  localStorage.perSecond = perSecond;
  document.getElementById("ball").innerHTML = bal;
  document.getElementById("farmPrice").innerHTML = farmPrice
  document.getElementById("perSecond").innerHTML = perSecond
 }
}
