'use strict';

//年月入力時の処理
const editYear=document.getElementById('edit-year');
const editMonth=document.getElementById('edit-month');
const decideBirth=document.getElementById('decide-birth');
const choice10=document.getElementById('choice10');
const choice11=document.getElementById('choice11');
const choice12=document.getElementById('choice12');
const decideColor=document.getElementById('decide-color');

let choiceColor10=choice10.innerHTML;
choice10.style.backgroundColor=choiceColor10;

function checkYearMonth(){
  let yearText=editYear.innerHTML;
  let monthText=editMonth.innerHTML;
  console.log(yearText);
  console.log(monthText);
}
decideBirth.addEventListener('click',function(){
  checkYearMonth();
})
function changeColor(){
  let choiceColor11=choice11.innerHTML;
  let choiceColor12=choice12.innerHTML;
  choice11.style.backgroundColor=choiceColor11;
  choice12.style.backgroundColor=choiceColor12;
}
decideColor.addEventListener('click',function(){
  changeColor();
})














//選ぶゲームによって完成画面の画像を変える
// if () {

// }




const func1 = () => {
  console.log('a');
  const enjoy = document.getElementById('enjoyButton');
  const easy = document.getElementById('easyButton');
  const difficult = document.getElementById('difficultButton');
  const comment = document.getElementsByName('comments')
  const checkButton = document.getElementById('checkButton');
  console.log('b');

  for (let i =0; i<comment.length; i++) {
    if(comment[i].checked){
      console.log(comment[i].value);
      console.log('c');
    }
  }
}
console.log('d')
// checkButton.addEventListener('click',buttonClick);