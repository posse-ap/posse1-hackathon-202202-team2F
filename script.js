'use strict';

//じゃんけんゲームと◯×ゲームのボタンを押した時の処理
for(let i = 0; i < 2; i++){
  let select = document.getElementById(`select${i}`);
  select.addEventListener('click', () => {
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('main-editer');
  });
}















const janken = document.getElementById('game1Img');
const marubatu = document.getElementById('game2Img');

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