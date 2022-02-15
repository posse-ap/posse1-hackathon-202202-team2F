'use strict';

//年月入力時の処理
const editYear=document.getElementById('edit-year');
const editMonth=document.getElementById('edit-month');
const editDate=document.getElementById('edit-date');
const decideBirth=document.getElementById('decide-birth');
const choice10=document.getElementById('choice10');
const choice11=document.getElementById('choice11');
const choice12=document.getElementById('choice12');
const answer2=document.getElementById('answer2');
const shareSection=document.getElementById('share-section');
var yearText;
var monthText;
var dateText;
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
function checkBirth(){
  yearText=editYear.innerHTML;
  monthText=editMonth.innerHTML;
  dateText=editDate.innerHTML;
  colorCode=`rgb(${yearText}, ${monthText}, ${dateText})`;
}
//年月取得を確定時実行
decideBirth.addEventListener('click',function(){
  checkBirth();
  j=Math.floor(Math.random()*3);
  for(let i=0;i<=2;i++){
    choice2[i].style.backgroundColor="rgb(255,255,255)";
  }
  choice2[j].style.backgroundColor=colorCode;

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
    console.log(choice2[i].style.backgroundColor);
    console.log(colorCode);
    if(choice2[i].style.backgroundColor==colorCode){
      console.log("ok");
      answer2.innerHTML="正解!";//クリック時表示成功
    }else{
      answer2.innerHTML="不正解!";
    }
    shareSection.style.display="flex";
  })
}


window.addEventListener('load',function(){
  shareSection.style.display="none";//最初は見せず、クリック時に表示
  document.onkeypress=function(e){
    if(e.key==='Enter'){
      return false;
    }//Enterキー無効化してcolorcodeがずれるのを防ぐ
  }
})


//










