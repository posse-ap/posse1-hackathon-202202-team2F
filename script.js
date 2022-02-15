'use strict';

//年月入力時の処理
const editYear=document.getElementById('edit-year');
const editMonth=document.getElementById('edit-month');
const decideBirth=document.getElementById('decide-birth');
const choice10=document.getElementById('choice10');
const choice11=document.getElementById('choice11');
const choice12=document.getElementById('choice12');
const answer2=document.getElementById('answer2');
var colorCode;
var j;
const choice2=[
  document.getElementById('choice20'),
  document.getElementById('choice21'),
  document.getElementById('choice22'),
];
const decideColor=document.getElementById('decide-color');
//例としてgreenと緑色表示
let choiceColor10=choice10.innerHTML;
choice10.style.backgroundColor=choiceColor10;
//年月の入力内容を取得
function checkYearMonth(){
  let yearText=editYear.innerHTML;
  let monthText=editMonth.innerHTML;
  colorCode=yearText+monthText;
  console.log(colorCode);
}
//年月取得を確定時実行
decideBirth.addEventListener('click',function(){
  checkYearMonth();
  j=Math.floor(Math.random()*3);
  for(let i=0;i<=2;i++){
    choice2[i].style.backgroundColor="white";
  }
  choice2[j].style.backgroundColor=`#${colorCode}`;

})
//色の入力内容を取得
function changeColor(){
  let choiceColor11=choice11.innerHTML;
  let choiceColor12=choice12.innerHTML;
  choice11.style.backgroundColor=choiceColor11;
  choice12.style.backgroundColor=choiceColor12;
}
//背景色変化を確定時実行
decideColor.addEventListener('click',function(){
  changeColor();
})
for(let i=0;i<=2;i++){
  choice2[i].addEventListener('click',function(){
    answer2.innerHTML="こんにちは";//クリック時表示成功
  })
}
















