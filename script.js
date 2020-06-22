// ----------------Start of Ticker carousel functions-------------------------


const tickerControll = () => {

// --------------------------Ticker variables---------------------------
let titleTicker = document.querySelector('.flex-headline-cont');
let noOfTickerChildren = titleTicker.childElementCount;
let tickerChildWidths = [];
let totalWidth = 0;


let tickerMarginLeft = parseInt(getComputedStyle(titleTicker).marginLeft);


let timeLeft = parseInt(getComputedStyle(titleTicker).transition);




// ---------Calculation foreach of the Ticker child elements----------------------
const calctickerChildrenWidths = () => {
  for (i = 0; i < noOfTickerChildren;i++){
tickerChildWidths.push(parseInt(getComputedStyle(titleTicker.children[i]).width));
  }
  return tickerChildWidths;
}
calctickerChildrenWidths();
// -----------Calculation for the total of ticker width--------------------
const totalTitleTickerWidth = (arr) => {
for (let i = 0; i < tickerChildWidths.length;i++){
  totalWidth += tickerChildWidths[i];
}

}
totalTitleTickerWidth();


// ---------ticker function controlls-------------------------------------
//-------------------required variables-----------------------

let requiredMargin = -totalWidth/2;
let currentMargin = parseInt(getComputedStyle(titleTicker).marginLeft);
let remaindingTime = parseInt(getComputedStyle(titleTicker).transition);
let tickerPlay = document.querySelector('.tickerplay');
let pause =  document.querySelector('.pause');
let rwdBtn = document.querySelector('.rwd');

//-----------------continuous play------------------------

const adjustMargin = () => {
titleTicker.style.transition = '0s';
titleTicker.style.margin = '0';
playTicker();
}

//-------------declaring timer function to reset margin---------------

let timer = setInterval(function () {
adjustMargin();
},((totalWidth + parseInt(getComputedStyle(titleTicker).marginLeft) )/25)*100);

//------------------ticker function start---------------------------------

const playTicker = () => {
// --------------clear timer to adjust margin----------------
clearInterval(timer);
//---------------------reste timer---------------------------
timer = setInterval(function () {
adjustMargin();
},((totalWidth + parseInt(getComputedStyle(titleTicker).marginLeft) )/25)*100);

//--------------set pace of ticker carousel------------------

titleTicker.style.transition = `${(totalWidth + parseInt(getComputedStyle(titleTicker).marginLeft) )/250}s All linear`;
titleTicker.style.marginLeft = `${requiredMargin}px` ;
}
playTicker();

// -------ticker function pause-------------------------------------

pause.addEventListener('click', () => {
  clearInterval(timer);

titleTicker.style.transition = `${(totalWidth + parseInt(getComputedStyle(titleTicker).marginLeft) )/250}s All linear`;
titleTicker.style.marginLeft = getComputedStyle(titleTicker).marginLeft;
})

// ---------------ticker function play after pause-------------------------

tickerPlay.addEventListener('click', () => {
       playTicker();
     });

// -----------------------ticker function rewind ------------------------

rwdBtn.addEventListener('click', () => {

if((parseInt(getComputedStyle(titleTicker).marginLeft) + 300) < 0){

  titleTicker.style.transition = '0s';

  titleTicker.style.marginLeft = `${parseInt(getComputedStyle(titleTicker).marginLeft) + 300}px`;
  titleTicker.style.transition = `${(totalWidth + parseInt(getComputedStyle(titleTicker).marginLeft) )/250}s All linear`;
  playTicker();

}

})
}

tickerControll();
// ------------------End of Ticker carousel functions----------------------------------
