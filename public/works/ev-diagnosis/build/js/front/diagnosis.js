
const header = document.getElementById('header');
const footerContents = document.getElementById('footer-contents');

const screen00 = document.getElementById('screen00');
const screen00Btn = document.getElementById('screen00-btn');

const screen01 = document.getElementById('screen01');
const screen01Labels = document.querySelectorAll('#screen01 label');

const screen02 = document.getElementById('screen02');
const screen02Labels = document.querySelectorAll('#screen02 label');
const screen02BtnPc = document.getElementById('screen-btn02-pc');
const screen02BtnSp = document.getElementById('screen-btn02-sp');

const screen03 = document.getElementById('screen03');
const screen03Labels = document.querySelectorAll('#screen03 label');
const screen03BtnPc = document.getElementById('screen-btn03-pc');
const screen03BtnSp = document.getElementById('screen-btn03-sp');

const screen04 = document.getElementById('screen04');
const screen04Labels = document.querySelectorAll('#screen04 label');
const screen04BtnPc = document.getElementById('screen-btn04-pc');
const screen04BtnSp = document.getElementById('screen-btn04-sp');

const screen05 = document.getElementById('screen05');
const screen05Labels = document.querySelectorAll('#screen05 label');
const screen05BtnPc = document.getElementById('screen-btn05-pc');
const screen05BtnSp = document.getElementById('screen-btn05-sp');

const screen06 = document.getElementById('screen06');
const screen06Labels = document.querySelectorAll('#screen06 label');
const screen06BtnPc = document.getElementById('screen-btn06-pc');
const screen06BtnSp = document.getElementById('screen-btn06-sp');

const screen07 = document.getElementById('screen07');

let table_A = 0;
let table_B = 0;
let table_C = 0;
let table_D = 0;
let table_E = 0;
let table_F = 0;

let redirectURL = '';


function result() {
  let q01 = document.querySelector('input[name="q01"]:checked').value;
  let q02 = document.querySelector('input[name="q02"]:checked').value;
  let q03 = document.querySelector('input[name="q03"]:checked').value;
  let q04 = document.querySelector('input[name="q04"]:checked').value;
  let q05 = document.querySelector('input[name="q05"]:checked').value;
  let q06 = document.querySelector('input[name="q06"]:checked').value;

  switch (q01) {
    case '戸建て':
      table_A += 10;
      table_B += 10;
      table_C += 10;
      table_D += 10;
      table_E += 10;
      table_F += 10;
      break;
    case '集合住宅':
      table_A += 5;
      table_B += 10;
      table_C += 10;
      table_D += 15;
      table_E += 5;
      table_F += 15;
      break;
  }
  switch (q02) {
    case '自宅にある専用コンセントでの充電':
      table_A += 10;
      table_B += 10;
      table_C += 10;
      table_D += 10;
      table_E += 10;
      table_F += 10;
      break;
    case '公共の充電スポットでの充電':
      table_A += 5;
      table_B += 10;
      table_C += 20;
      table_D += 15;
      table_E += 5;
      table_F += 5;
      break;
  }
  switch (q03) {
    case '軽自動車・コンパクトカー':
      table_A += 45;
      table_B += 0;
      table_C += 0;
      table_D += 0;
      table_E += 15;
      table_F += 0;
      break;
    case 'SUV・ミニバン':
      table_A += 0;
      table_B += 25;
      table_C += 25;
      table_D += 5;
      table_E += 5;
      table_F += 0;
      break;
    case 'セダン・クーペ':
      table_A += 0;
      table_B += 0;
      table_C += 0;
      table_D += 30;
      table_E += 0;
      table_F += 30;
      break;
  }
  switch (q04) {
    case '買い物や送迎':
      table_A += 25;
      table_B += 10;
      table_C += 15;
      table_D += 5;
      table_E += 5;
      table_F += 0;
      break;
    case '週末のキャンプや家族旅行':
      table_A += 0;
      table_B += 25;
      table_C += 25;
      table_D += 5;
      table_E += 5;
      table_F += 0;
      break;
    case '通勤や仕事での長距離移動':
      table_A += 5;
      table_B += 15;
      table_C += 0;
      table_D += 20;
      table_E += 5;
      table_F += 15;
      break;
    case 'ドライブや一人時間を楽しむ':
      table_A += 0;
      table_B += 5;
      table_C += 0;
      table_D += 20;
      table_E += 20;
      table_F += 15;
      break;
  }
  switch (q05) {
    case '1〜2人':
      table_A += 20;
      table_B += 5;
      table_C += 0;
      table_D += 10;
      table_E += 15;
      table_F += 10;
      break;
    case '3〜4人':
      table_A += 10;
      table_B += 20;
      table_C += 10;
      table_D += 10;
      table_E += 5;
      table_F += 5;
      break;
    case '5人以上':
      table_A += 0;
      table_B += 5;
      table_C += 45;
      table_D += 5;
      table_E += 0;
      table_F += 5;
      break;
  }
  switch (q06) {
    case '価格の安さ・コスパ':
      table_A += 40;
      table_B += 10;
      table_C += 0;
      table_D += 10;
      table_E += 0;
      table_F += 0;
      break;
    case '加速や走りの楽しさ':
      table_A += 5;
      table_B += 5;
      table_C += 0;
      table_D += 25;
      table_E += 10;
      table_F += 15;
      break;
    case '実用性・車内の広さ':
      table_A += 10;
      table_B += 15;
      table_C += 35;
      table_D += 0;
      table_E += 0;
      table_F += 0;
      break;
    case 'デザイン・ブランドの個性':
      table_A += 0;
      table_B += 0;
      table_C += 10;
      table_D += 20;
      table_E += 30;
      table_F += 0;
      break;
    case '先進性と安心感':
      table_A += 0;
      table_B += 0;
      table_C += 10;
      table_D += 30;
      table_E += 0;
      table_F += 20;
      break;
  }

  // ここで表の値を比較
  const scores = {
    A: table_A,
    B: table_B,
    C: table_C,
    D: table_D,
    E: table_E,
    F: table_F
  };

  // 最も値が大きいキー（A~F）を取得。同点の場合はアルファベット順で早い方を優先。
  const winner = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
  // console.log('Winner Type: ' + winner);

  switch (winner) {
    case 'A':
      redirectURL = 'result.html?type=1';
      break;
    case 'B':
      redirectURL = 'result.html?type=2';
      break;
    case 'C':
      redirectURL = 'result.html?type=3';
      break;
    case 'D':
      redirectURL = 'result.html?type=4';
      break;
    case 'E':
      redirectURL = 'result.html?type=5';
      break;
    case 'F':
      redirectURL = 'result.html?type=6';
      break;
  }

  setTimeout(() => {
    window.location.href = redirectURL;
  }, 800);


  // console.log('table_A:' + table_A);
  // console.log('table_B:' + table_B);
  // console.log('table_C:' + table_C);
  // console.log('table_D:' + table_D);
  // console.log('table_E:' + table_E);
  // console.log('table_F:' + table_F);
}


// ======================================================
// 進む
// ======================================================
screen00Btn.addEventListener('click', () => {
  screen00.classList.remove('is-active');
  screen01.classList.add('is-active');
});

screen01Labels.forEach((screen01Label) => {
  screen01Label.addEventListener('click', () => {
    screen01.classList.remove('is-active');
    screen02.classList.add('is-active');
    header.classList.add('is-active02');
    footerContents.classList.remove('bar01');
    footerContents.classList.add('bar02');
  });
});

screen02Labels.forEach((screen02Label) => {
  screen02Label.addEventListener('click', () => {
    screen02.classList.remove('is-active');
    screen03.classList.add('is-active');
    header.classList.remove('is-active02');
    header.classList.add('is-active03');
    footerContents.classList.remove('bar02');
    footerContents.classList.add('bar03');
  });
});

screen03Labels.forEach((screen03Label) => {
  screen03Label.addEventListener('click', () => {
    screen03.classList.remove('is-active');
    screen04.classList.add('is-active');
    header.classList.remove('is-active03');
    header.classList.add('is-active04');
    footerContents.classList.remove('bar03');
    footerContents.classList.add('bar04');
  });
});

screen04Labels.forEach((screen04Label) => {
  screen04Label.addEventListener('click', () => {
    screen04.classList.remove('is-active');
    screen05.classList.add('is-active');
    header.classList.remove('is-active04');
    header.classList.add('is-active05');
    footerContents.classList.remove('bar04');
    footerContents.classList.add('bar05');
  });
});

screen05Labels.forEach((screen05Label) => {
  screen05Label.addEventListener('click', () => {
    screen05.classList.remove('is-active');
    screen06.classList.add('is-active');
    header.classList.remove('is-active05');
    header.classList.add('is-active06');
    footerContents.classList.remove('bar05');
    footerContents.classList.add('bar06');
  });
});

screen06Labels.forEach((screen06Label) => {
  screen06Label.addEventListener('click', () => {
    // クリックと同時には最後のボタンの値が取れないため、少しだけずらして発火。
    setTimeout(() => {
      result();
    }, 100);
    screen06.classList.remove('is-active');
    screen07.classList.add('is-active');
    header.classList.remove('is-active06');
  });
});


// ======================================================
// 戻る（PC）
// ======================================================
screen02BtnPc.addEventListener('click', () => {
  screen02.classList.remove('is-active');
  screen01.classList.add('is-active');
  footerContents.classList.remove('bar02');
  footerContents.classList.add('bar01');
});

screen03BtnPc.addEventListener('click', () => {
  screen03.classList.remove('is-active');
  screen02.classList.add('is-active');
  footerContents.classList.remove('bar03');
  footerContents.classList.add('bar02');
});

screen04BtnPc.addEventListener('click', () => {
  screen04.classList.remove('is-active');
  screen03.classList.add('is-active');
  footerContents.classList.remove('bar04');
  footerContents.classList.add('bar03');
});

screen05BtnPc.addEventListener('click', () => {
  screen05.classList.remove('is-active');
  screen04.classList.add('is-active');
  footerContents.classList.remove('bar05');
  footerContents.classList.add('bar04');
});

screen06BtnPc.addEventListener('click', () => {
  screen06.classList.remove('is-active');
  screen05.classList.add('is-active');
  footerContents.classList.remove('bar06');
  footerContents.classList.add('bar05');
});


// ======================================================
// 戻る（SP）
// ======================================================
screen02BtnSp.addEventListener('click', () => {
  screen02.classList.remove('is-active');
  screen01.classList.add('is-active');
  header.classList.remove('is-active02');
  footerContents.classList.remove('bar02');
  footerContents.classList.add('bar01');
});

screen03BtnSp.addEventListener('click', () => {
  screen03.classList.remove('is-active');
  screen02.classList.add('is-active');
  header.classList.remove('is-active03');
  header.classList.add('is-active02');
  footerContents.classList.remove('bar03');
  footerContents.classList.add('bar02');
});

screen04BtnSp.addEventListener('click', () => {
  screen04.classList.remove('is-active');
  screen03.classList.add('is-active');
  header.classList.remove('is-active04');
  header.classList.add('is-active03');
  footerContents.classList.remove('bar04');
  footerContents.classList.add('bar03');
});

screen05BtnSp.addEventListener('click', () => {
  screen05.classList.remove('is-active');
  screen04.classList.add('is-active');
  header.classList.remove('is-active05');
  header.classList.add('is-active04');
  footerContents.classList.remove('bar05');
  footerContents.classList.add('bar04');
});

screen06BtnSp.addEventListener('click', () => {
  screen06.classList.remove('is-active');
  screen05.classList.add('is-active');
  header.classList.remove('is-active06');
  header.classList.add('is-active05');
  footerContents.classList.remove('bar06');
  footerContents.classList.add('bar05');
});