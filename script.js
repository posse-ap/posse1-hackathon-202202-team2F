'use strict';

//年月入力時の処理
const birthYear=document.getElementById('birth-year');
const birthMonth=document.getElementById('birth-month');


















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