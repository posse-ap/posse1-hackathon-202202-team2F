'use strict';

//年月入力時の処理
const editYear = document.getElementById('edit-year');
const editMonth = document.getElementById('edit-month');
const editDate = document.getElementById('edit-date');
const decideBirth = document.getElementById('decide-birth');
const choice10 = document.getElementById('choice10');
const choice11 = document.getElementById('choice11');
const choice12 = document.getElementById('choice12');
const answer2 = document.getElementById('answer2');
const shareSection = document.getElementById('share-section');
const tweetShare = document.getElementById('tweet-share');
var yearText;
var monthText;
var dateText;
var colorCode;
var j;
const multiplyNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
const choice2 = [
    document.getElementById('choice20'),
    document.getElementById('choice21'),
    document.getElementById('choice22'),
];

tweetShare.addEventListener('click', function() {
    var tweetContent = "あなたのラッキーカラーは" + colorCode + "です";
    var hashtags = "大学,必修,表参道,プログラミング,あなたのラッキーカラー";
    var url = "https://posse-ap.github.io/posse1-hackathon-202202-team2F/";
    window.open("https://twitter.com/share?text=" + tweetContent + "&url=" + url + "&hashtags=" + hashtags);
})

const decideColor = document.getElementById('decide-color');
//例としてgreenと緑色表示
let choiceColor10 = choice10.innerHTML;
choice10.style.backgroundColor = choiceColor10;

//年月の入力内容を取得
function checkBirth() {
    yearText = multiplyNumbers[Math.floor(Math.random() * 10)] * editYear.innerHTML;
    monthText = multiplyNumbers[Math.floor(Math.random() * 10)] * editMonth.innerHTML;
    dateText = multiplyNumbers[Math.floor(Math.random() * 10)] * editDate.innerHTML;
    colorCode = `rgb(${yearText}, ${monthText}, ${dateText})`;
}
//年月取得を確定時実行
decideBirth.addEventListener('click', function() {
    if (editDate.innerHTML != "" && editMonth.innerHTML != "" && editYear.innerHTML != "") {
        checkBirth();
        j = Math.floor(Math.random() * 3);
        for (let i = 0; i <= 2; i++) {
            choice2[i].style.pointerEvents = "fill";
        }
        choice2[j].style.backgroundColor = colorCode;
        if (j == 0) {
            choice2[1].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
            choice2[2].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
        }
        if (j == 1) {
            choice2[0].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
            choice2[2].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
        }
        if (j == 2) {
            choice2[0].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
            choice2[1].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
        };
    }
});
//色の入力内容を取得
function changeColor() {
    let choiceColor11 = choice11.innerHTML;
    let choiceColor12 = choice12.innerHTML;
    choice11.style.backgroundColor = choiceColor11;
    choice12.style.backgroundColor = choiceColor12;
}
//背景色変化を確定時実行
decideColor.addEventListener('click', function() {
    changeColor();
})
var japanese;
for (let i = 0; i <= 2; i++) {
    choice2[i].addEventListener('click', function() {

        if (choice2[i].style.backgroundColor == colorCode) {
            answer2.innerHTML = "正解!"; //クリック時表示成功
            answer2.style.color = "blue";
        } else {
            answer2.innerHTML = "不正解!";
            answer2.style.color = "red";
        }
        shareSection.style.display = "flex";
    });
};



window.addEventListener('load', function() {
    shareSection.style.display = "none"; //最初は見せず、クリック時に表示
    choice2[0].style.pointerEvents = "none";
    choice2[1].style.pointerEvents = "none";
    choice2[2].style.pointerEvents = "none";
    editYear.innerHTML = "";
    editMonth.innerHTML = "";
    editDate.innerHTML = "";
    document.onkeypress = function(e) {
        if (e.key === 'Enter') {
            return false;
        } //Enterキー無効化してcolorcodeがずれるのを防ぐ
    }
})


//