const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const consonantVal = "bcdfghjklmnpqrstvwxyz";
const vowelVal = "aeiou";
const constantUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const constantLowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "";
let lowerCase = "";

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});

function getRandomChar(value) {
  return value.charAt(Math.floor(Math.random() * value.length));
  // 문자열 특정 인덱스 단일문자 반환 / floor 반내림 / random 0-1사이 랜덤값 * 총 문자열의 수(21)
}
// Random Code 생성
function getRandomTwoChar(value) {
  return value[Math.floor(Math.random() * value.length)];
}

//인칭대명사-주격
function pronoun5() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  let result = getRandomTwoChar(firstArray);
  $("#divRandom").text(result);
}
//인칭대명사-소유격
function pronoun8() {
  const firstArray = new Array("나의 ", "너의 ", "그의 ", "그녀의 ", "그것의 ", "우리의 ", "너희들의 ", "그들의 ");
  let result = getRandomTwoChar(firstArray);
  $("#divRandom").text(result);
}
//인칭대명사-소유대명사
function pronoun9() {
  const firstArray = new Array("나의 것 ", "너의 것 ", "그의 것 ", "그녀의 것 ", "그것의 것 ", "우리의 것 ", "너희들의 것 ", "그들의 것 ");
  let result = getRandomTwoChar(firstArray);
  $("#divRandom").text(result);
}
//인칭대명사-목적격
function pronoun10() {
  const firstArray = new Array("나를", "너를 ", "그를 ", "그녀를 ", "그것을 ", "우리를 ", "너희들을 ", "그들을 ");
  let result = getRandomTwoChar(firstArray);
  $("#divRandom").text(result);
}

//지시대명사
function pronoun2() {
  const firstArray = new Array("이것 ", "저것 ", "그것 ", "이것들 ", "저것들 ", "그것들 ");
  let result = getRandomTwoChar(firstArray);
  $("#divRandom").text(result);
}
//의문사
function pronoun3() {
  const firstArray = new Array("누구", "무엇", "어디", "언제", "왜", "어떻게");

  let result = getRandomTwoChar(firstArray) + "?";
  $("#divRandom").text(result);
}
//재귀대명사
function pronoun13() {
  const firstArray = new Array("나자신", "너자신 ", "그자신 ", "그녀자신 ", "그것자신 ", "우리자신들 ", "너희자신들 ", "그들자신들 ");
  let result = getRandomTwoChar(firstArray);
  $("#divRandom").text(result);
}

//be동사
function getRandomDouble0() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const secondArray = new Array("새롭다 ", "학생이다 ", "선생님이다 ", "거기에 있다 ", "교실에 있다 ", "책상 위에 있다 ", "크다", "작다", "빠르다", "느리다", "좋다", "나쁘다", "비싸다", "싸다", "두껍다", "얇다", "시끄럽다", "조용하다", "똑똑하다", "멍청하다", "젖었다", "말랐다", "무겁다", "가볍다", "딱딱하다", "부드럽다", "얕다", "깊다", "쉽다", "어렵다", "좁다", "넓다", "광대하다", "약하다", "강하다", "부유하다", "가난하다", "젊다", "늙다", "길다", "짧다", "  높다", "  낮다", "  관대하다", "  인색하다", "  진실하다  ", "  거짓이다", "  아름답다", "  못생겼다", "  새롭다", "  오래됐다", "행복하다", "슬프다", "안전하다", "위험하다", "이르다",  "크지 않다", "작지 않다", "빠르지 않다", "느리지 않다", "좋지 않다", "나쁘지 않다", "비싸지 않다", "싸지 않다", "두껍지 않다", "얇지 않다", "시끄럽지 않다", "조용하지 않다", "똑똑하지 않다", "멍청하지 않다", "젖지 않았다", "마르지 않다", "무겁지 않다", "가볍지 않다", "딱딱하지 않다", "부드럽지 않다", "얕지 않다", "깊지 않다", "쉽지 않다", "어렵지 않다", "좁지 않다", "넓지 않다", "광대하지 않다", "약하지 않다", "강하지 않다", "부유하지 않다", "가난하지 않다", "젊지 않다", "늙지 않다", "길지 않다", "짧지 않다", "  높지 않다", "  낮지 않다", "  관대하지 않다", "  인색하지 않다", "  진실하지 않다  ", "  거짓이지 않다", "  아름답지 않다", "  못생기지 않다", "  새롭지 않다", "  안오래됐다", "행복하지 않다", "슬프지 않다", "안전하지 않다", "위험하지 않다", "이르지 않다", "크니?", "작니?", "빠르니?", "느리니?", "좋니?", "나쁘니?", "비싸니?", "싸니?", "두껍니?", "얇니?", "시끄럽니?", "조용하니?", "똑똑하니?", "멍청하니?", "젖었니?", "말랐니?", "무겁니?", "가볍니?", "딱딱하니?", "부드럽니?", "얕니?", "깊니?", "쉽니?", "어렵니?", "좁니?", "넓니?", "광대하니?", "약하니?", "강하니?", "부유하니?", "가난하니?", "젊니?", "늙었니?", "기니?", "짧니?", "  높니?", "  낮니?", "  관대하니?", "  인색하니?", "  진실하니?  ", "  거짓이니?", "  아름답니?", "  못생겼니?", "  새롭니?", "  오래됐니?  ", "행복하니?", "슬프니?", "안전하니?", "위험하니?", "이르니?" );
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

//일반동사 & 단순
function getRandomDouble1() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const secondArray = new Array("사랑한다 ", "좋아한다 ", "즐긴다 ", "시작한다 ", "멈춘다", "연다", "닫는다", "요리한다", "먹는다", "대화한다", "달린다", "난다", "시작한다", "그만둔다", "말한다", "간다", "온다", "말한다", "본다", "보인다", "가지고 있다", "마신다", "점프한다", "잡는다", "이야기한다", "씻는다", "걷는다", "일어선다", "앉는다", "넘어진다", "논다", "공부한다", "돕는다", "듣는다", "본다", "  당긴다", "  민다", "  그린다", "  들린다", "  보인다  ", "  자른다", "  읽는다", "  움직인다", "  묻는다", "  사용한다  ", "한다", " 하게 한다", " 운다", " 수영한다", "잔다" , "사랑하지 않는다 ", "좋아하지 않는다 ", "즐기지 않는다 ", "시작하지 않는다 ", "멈추지 않는다", "열지 않는다", "닫지 않는다", "요리하지 않는다", "먹지 않는다", "대화하지 않는다", "달리지 않는다", "날지 않는다", "시작하지 않는다", "그만두지 않는다", "말하지 않는다", "가지 않는다", "오지 않는다", "말하지 않는다", "보지 않는다", "보이지 않는다", "가지고 있지 않다", "마시지 않는다", "점프하지 않는다", "잡지 않는다", "이야기하지 않는다", "씻지 않는다", "걷지 않는다", "일어서지 않는다", "앉지 않는다", "넘어지지 않는다", "놀지 않는다", "공부하지 않는다", "돕지 않는다", "듣지 않는다", "보지 않는다", "  안당긴다", "  안민다", "  안그린다", "  안들린다", "  안보인다  ", " 안자른다", "  안읽는다", "  안움직인다", "  안묻는다", "  안사용한다  ", "안한다", " 하게 안한다", " 울지 않는다", "안잔다", "사랑하니? ", "좋아하니? ", "즐기니? ", "시작하니? ", "멈추니?", "여니?", "닫니?", "요리하니?", "먹니?", "대화하니?", "달리니?", "날아가니?", "시작하니?", "그만두니?", "말하니?", "가니?", "오니?", "말하니?", "보니?", "보이니?", "가지니?", "마시니?", "점프하니?", "잡니?", "이야기하니?", "씻니?", "걷니?", "서있니?", "앉니?", "넘어지니?", "노니?", "공부하니?", "돕니?", "듣니?", "보니?", "  당기니?", "  미니?", "  그리니?", "  들리니?", "  보이니?  ", "  자르니?", "  읽니?", "  움직이니?", "  묻니?", "  사용하니?  ", "하니?", " 하게 하니?", " 우니?", " 수영하니?", "자니?" );
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 과거 시제
function getRandomPast() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("사랑했다 ","좋아했다 ","즐겼다 ","시작했다 ", "멈췄다 ", "말했다 ", "이야기했다 ", "물었다 ", "읽었다 ", "움직였다 "," 앉았다", "일어섰다 ", "걸었다 ", "달렸다 ", "날았다 ", "넘어졌다 ", "뛰었다 ", "잡았다 ", "따랐다 ", "자랐다 ", "도착했다 ", "봤다 ", "들었다 ", "왔다 ", "갔다 ", "줬다 ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 미래 시제
function getRandomFuture() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("사랑할거다 ","좋아할거다 ","즐길거다 ","시작할거다 ", "멈출거다 ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 진행 시제
function getRandomContinuous() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("가고 있다 ", "먹고 있다 ", "읽고 있다 ", "쓰고 있다 ", "놀고 있다 ", "잡고 있다 ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 완료 시제
function getRandomPerfect() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("갔다 왔다 ", "먹어왔다 ", "읽어 왔다 ", "써왔다 ", "놀아왔다 ", "잡아왔다 ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 완료 진행 시제
function getRandomPerfectContinuous() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("게임을 해오는 중이다 ", "읽어오는 중이다 ", "함께 놀아오고 있는 중이다 ", "써왔다 ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 과거 완료 시제
function getRandomPastPerfect() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("갔다 왔었다 ", "먹어왔었다 ", "읽어 왔었다 ", "써왔었다 ", "놀아왔었다 ", "잡아왔었다 ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 미래 완료 시제
function getRandomFuturePerfect() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("갔다 왔을 거다 ", "먹어왔을 거다 ", "읽어 왔을 거다 ", "써왔을 거다 ", "놀아왔을 거다 ", "잡아왔을 거다 ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// can
function getRandomCan() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸을 수 있다 ", "요리할 수 있다 ", "공부할 수 있다 ", "춤출 수 있다 ", "읽을 수 있다 ", "이길 수 있다 ", "노래할 수 있다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// may
function getRandomMay() {
  const firstArray = new Array("저 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸어도 되요? ", "들어와도 되나요?", "한국말 해도 되요?", "물 좀 마셔도 되나요?", "전화기 좀 빌려써도 되나요?", "집에 가도 되요?", "노래해도 되요?");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// should
function getRandomShould() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸어야 된다 ","들어와야 한다","영어로 말 해야 한다","춤 춰야 한다", "숙제를 해야만 한다", "이겨야 한다", "노래해야만 한다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// should have p.p.
function getRandomShouldHavePP() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸었어야 했다 ","들어왔어야 했다","영어로 말 했어야 했다","춤 췄어야 했다", "숙제를 했어야만 했다", "이겼어야 했다", "노래했어야만 했다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// must have p.p.
function getRandomMustHavePP() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸었음에 틀림없다 ","들어왔음에 틀림없다","영어로 말 했음에 틀림없다","춤 췄음에 틀림없다", "숙제를 했음에 틀림없다", "이겼음에 틀림없다", "노래했음에 틀림없다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// cannot have p.p.
function getRandomCannotHavePP() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸었을리가 없다 ","들어왔을리가 없다","영어로 말했을리가 없다","춤 췄을리가 없다", "숙제를 했을리가 없다", "이겼을리가 없다", "노래했을리가 없다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// may have p.p.
function getRandomMayHavePP() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸었을지도 모른다 ","들어왔을지도 모른다","영어로 말했을지도 모른다","춤 췄을지도 모른다", "숙제를 했을지도 모른다", "이겼을지도 모른다", "노래했을지도 모른다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// used to
function getRandomUsedTo() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걷곤 했다 ","들어오곤 했다","영어로 말하곤 했다","춤 추곤 했다", "숙제를 하곤 했다", "이기곤 했다", "노래하곤 했다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// had better 
function getRandomHadBetter() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걷는 것이 낫다 ","들어오는 게 낫다","영어로 말하는 게 낫다","춤 추는 게 낫다", "숙제를 하는 게 낫다", "이기는 게 낫다", "노래하는 게 낫다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// would rather 
function getRandomWouldRather() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("차라리 걷는 것이 낫다 ","차라리 들어는 게 낫다","차라리 영어로 말하는 게 낫다","차라리 춤 추는 게 낫다", "차라리 숙제를 하는 게 낫다", "차라리 이기는 게 낫다", "차라리 노래하는 게 낫다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 수동태
function getRandomPassive() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "우리는 ", "너희들은 ", "그들은 ", "니콜은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("얘기를 들었다 ","주어졌다(받았다)","가르침을 받았다(배웠다)");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}



// 진행 수동태 
function getRandomPassive2() {
  const firstArray = new Array("내 핸드폰은 ", "그 컴퓨터는 ", "그 바닥은 ", "그 벽은 ", "그 탭은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("수리되고 있다", "닦이고 있다", "잘리고 있다", "옮겨지고 있다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 완료 수동태
function getRandomPassive3() {
  const firstArray = new Array("내 책들은 ", "그 컴퓨터들은 ", "그 접시들은 ", "그 의자들은 ", "그 책상들은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("놓여 있다 ","덮여 있다","쌓여 있다","남겨져 있다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 분사 ing
function getRandomParticipleIng() {
  const firstArray = new Array("나의 ", "너의 ", "그의 ", "그녀의 ", "우리의 ", "그들의 ", "그 ", "한 ");
  const secondArray = new Array("춤추고 있는 " , "노래하고 있는 ", "웃고 있는 ");
  const thirdArray = new Array("친구가 ", "선생님이 ", "니콜이 ", "싸이먼이 ", "아기가 ");
  const fourthArray = new Array(" 있다 ","바닥에 있다","방에 있다","학교에 있다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) + getRandomTwoChar(fourthArray);
  $("#divRandom").text(result);
}

// 분사 p.p. 
function getRandomParticiplePP() {
  const firstArray = new Array("나의 ", "너의 ", "그의 ", "그녀의 ", "우리의 ", "그들의 ", "그 ", "한 ");
  const secondArray = new Array("부서진 " , "만들어진 ");
  const thirdArray = new Array("창문이 ", "컵이 ", "책상이");
  const fourthArray = new Array(" 있다 ","바닥에 있다","방에 있다","학교에 있다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) + getRandomTwoChar(fourthArray);
  $("#divRandom").text(result);
}

// 분사 구문
function getRandomParticiple2() {
  const firstArray = new Array("내 책들은 ", "그 컴퓨터들은 ", "그 접시들은 ", "그 의자들은 ", "그 책상들은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("놓여 있다 ","덮여 있다","쌓여 있다","남겨져 있다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 비인칭 독립 분사구문
function getRandomParticiple3() {
  const firstArray = new Array("일반적으로 말해서 ", "솔직히 말해서 ", "엄밀히 말해서 ", "대략적으로 말해서 ", "~와 비교해 보면", "만일 ~라면", "~을 고려하면 ", "~로 판단하건데", "~얘기가 나와서 말인데");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray);
  $("#divRandom").text(result);
}

// with 목적어 분사
function getRandomParticiple4() {
  const firstArray = new Array("~한 채로 ", "~된 채로 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 관계사 주격1
  function getRandomReletives1() {
    const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "니콜은 ", "우리는 ", "너희들은 ", "그들은 ");
    const secondArray = new Array("프랑스에 살았던 ", "학생인 ", "춤추고 있는 ", "나에게 전화하는 ", "요리하고 있는 ", "매우 어린 ", "다른 사람들을 돕는 ", "은행에서 일하는 ", "서있는 ", "책을 읽고 있는 ", "물을 마시고 있는 ", "공부하고 있는 ", "노래를 듣고 있는 ", "수영하고 있는 " );
    const thirdArray = new Array("한 남자를 ", "한 친구를 ", "그 아가를 ", "한 여자를 ", "한 소녀를 ", "학생들을 ", "선생님들을 ", "친구들을 ");
    const lastArray = new Array("사랑한다 ", "봤다 ", "만났다 ", "초대했다 ", "안다");
    let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
    $("#divRandom").text(result);
  }
  // 관계사 주격2
  function getRandomReletives11() {
    const firstArray = new Array("나를 ", "너를 ", "그를 ", "그녀를 ", "니콜을 ", "우리를 ", "너희들을 ", "그들을 ");
    const secondArray = new Array("프랑스에 살았던 ", "학생인 ", "춤추고 있는 ", "나에게 전화하는 ", "요리하고 있는 ", "매우 어린 ", "다른 사람들을 돕는 ", "은행에서 일하는 ", "서있는 ", "책을 읽고 있는 ", "물을 마시고 있는 ", "공부하고 있는 ", "노래를 듣고 있는 ", "수영하고 있는 " );
    const thirdArray = new Array("한 남자는 ", "그 친구는 ", "그 아가는 ", "한 여자는 ", "한 소녀는 ", "학생들은 ", "선생님들은 ", "친구들은 " );
    const lastArray = new Array("사랑한다 ", "봤다 ", "만났다 ", "초대했다 ", "안다");
    let result = getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) + getRandomTwoChar(firstArray) + getRandomTwoChar(lastArray);
    $("#divRandom").text(result);
  }
  // 관계사 목적격
  function getRandomReletives2() {
    const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "니콜은 ", "우리는 ", "너희들은 ", "그들은 ");
    const secondArray = new Array("프랑스를 사랑하는 ", "학생들이 좋아하는 ", "선생님이 좋아하는 ", "우리 엄마가 초대한 ", "Tom이 믿는 ", "니콜이 돕는 " );
    const thirdArray = new Array("한 남자를 ", "한 친구를 ", "그 아가를 ", "한 여자를 ", "한 소녀를 ", "학생들을 ", "선생님들을 ", "친구들을 ");
    const lastArray = new Array("사랑한다 ", "봤다 ", "만났다 ", "초대했다 ", "안다");
    let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
    $("#divRandom").text(result);
  }
// 관계사 소유격
  function getRandomReletives3() {
    const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "니콜은 ", "우리는 ", "너희들은 ", "그들은 ");
    const secondArray = new Array("여자 형제가 선생님인 ", "남자 형제가 잘생긴 ", "차가 포르쉐인 ", "(남자)사촌이 BTS인 ", "(여자)사촌이 BTS를 좋아하는 ", "노래를 부르는 것이 취미인 ", "머리카락이 곱슬거리는 ", "개가 귀여운 ", "생일이 크리스마스인  ", "삶이 힘든 " );
    const thirdArray = new Array("한 남자를 ", "한 친구를 ", "그 아가를 ", "한 여자를 ", "한 소녀를 ", "학생들을 ", "선생님들을 ", "친구들을 ");
    const lastArray = new Array("사랑한다 ", "봤다 ", "만났다 ", "초대했다 ", "안다");
    let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
    $("#divRandom").text(result);
}
// 관계사 that
function getRandomReletivesWhat() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const secondArray = new Array("네가 필요한 ", "그가 찾고 있는 ", "그녀가 말 한 ", "그녀의 엄마가 화나게 만드는 ", "우리가 계획했던 ", "그들이 원하는 " );
  const thirdArray = new Array("것을 안다 ", "것을 모르겠다 ", "것을 이해하지 못한다 ", "것은 아니다" );
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}
// 관계사 전체
/*  
  function getRandomReletives() {
    getRandomReletives1
    getRandomReletives11
    getRandomReletives2
    getRandomReletives3
    의 결과중에 뽑기
    $("#divRandom").text(result);
  }
*/
// 관계사부사
function getRandomReletives4() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const secondArray = new Array("사랑한다 ", "좋아한다 ", "즐긴다 ", "시작한다 ", "멈춘다", "연다", "닫는다", "요리한다", "먹는다", "대화한다", "달린다", "난다", "시작한다", "그만둔다", "말한다", "간다", "온다", "말한다", "본다", "보인다", "가지고 있다", "마신다", "점프한다", "잡는다", "이야기한다", "씻는다", "걷는다", "일어선다", "앉는다", "넘어진다", "논다", "공부한다", "돕는다", "듣는다", "본다", "  당긴다", "  민다", "  그린다", "  들린다", "  보인다  ", "  자른다", "  읽는다", "  움직인다", "  묻는다", "  사용한다  ", "한다", " 하게 한다", " 운다", " 수영한다", "잔다" , "사랑하지 않는다 ", "좋아하지 않는다 ", "즐기지 않는다 ", "시작하지 않는다 ", "멈추지 않는다", "열지 않는다", "닫지 않는다", "요리하지 않는다", "먹지 않는다", "대화하지 않는다", "달리지 않는다", "날지 않는다", "시작하지 않는다", "그만두지 않는다", "말하지 않는다", "가지 않는다", "오지 않는다", "말하지 않는다", "보지 않는다", "보이지 않는다", "가지고 있지 않다", "마시지 않는다", "점프하지 않는다", "잡지 않는다", "이야기하지 않는다", "씻지 않는다", "걷지 않는다", "일어서지 않는다", "앉지 않는다", "넘어지지 않는다", "놀지 않는다", "공부하지 않는다", "돕지 않는다", "듣지 않는다", "보지 않는다", "  안당긴다", "  안민다", "  안그린다", "  안들린다", "  안보인다  ", " 안자른다", "  안읽는다", "  안움직인다", "  안묻는다", "  안사용한다  ", "안한다", " 하게 안한다", " 울지 않는다", "안잔다", "사랑하니? ", "좋아하니? ", "즐기니? ", "시작하니? ", "멈추니?", "여니?", "닫니?", "요리하니?", "먹니?", "대화하니?", "달리니?", "날아가니?", "시작하니?", "그만두니?", "말하니?", "가니?", "오니?", "말하니?", "보니?", "보이니?", "가지니?", "마시니?", "점프하니?", "잡니?", "이야기하니?", "씻니?", "걷니?", "서있니?", "앉니?", "넘어지니?", "노니?", "공부하니?", "돕니?", "듣니?", "보니?", "  당기니?", "  미니?", "  그리니?", "  들리니?", "  보이니?  ", "  자르니?", "  읽니?", "  움직이니?", "  묻니?", "  사용하니?  ", "하니?", " 하게 하니?", " 우니?", " 수영하니?", "자니?" );
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}
// 복합관계대명사
function getRandomReletives5() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const secondArray = new Array("사랑한다 ", "좋아한다 ", "즐긴다 ", "시작한다 ", "멈춘다", "연다", "닫는다", "요리한다", "먹는다", "대화한다", "달린다", "난다", "시작한다", "그만둔다", "말한다", "간다", "온다", "말한다", "본다", "보인다", "가지고 있다", "마신다", "점프한다", "잡는다", "이야기한다", "씻는다", "걷는다", "일어선다", "앉는다", "넘어진다", "논다", "공부한다", "돕는다", "듣는다", "본다", "  당긴다", "  민다", "  그린다", "  들린다", "  보인다  ", "  자른다", "  읽는다", "  움직인다", "  묻는다", "  사용한다  ", "한다", " 하게 한다", " 운다", " 수영한다", "잔다" , "사랑하지 않는다 ", "좋아하지 않는다 ", "즐기지 않는다 ", "시작하지 않는다 ", "멈추지 않는다", "열지 않는다", "닫지 않는다", "요리하지 않는다", "먹지 않는다", "대화하지 않는다", "달리지 않는다", "날지 않는다", "시작하지 않는다", "그만두지 않는다", "말하지 않는다", "가지 않는다", "오지 않는다", "말하지 않는다", "보지 않는다", "보이지 않는다", "가지고 있지 않다", "마시지 않는다", "점프하지 않는다", "잡지 않는다", "이야기하지 않는다", "씻지 않는다", "걷지 않는다", "일어서지 않는다", "앉지 않는다", "넘어지지 않는다", "놀지 않는다", "공부하지 않는다", "돕지 않는다", "듣지 않는다", "보지 않는다", "  안당긴다", "  안민다", "  안그린다", "  안들린다", "  안보인다  ", " 안자른다", "  안읽는다", "  안움직인다", "  안묻는다", "  안사용한다  ", "안한다", " 하게 안한다", " 울지 않는다", "안잔다", "사랑하니? ", "좋아하니? ", "즐기니? ", "시작하니? ", "멈추니?", "여니?", "닫니?", "요리하니?", "먹니?", "대화하니?", "달리니?", "날아가니?", "시작하니?", "그만두니?", "말하니?", "가니?", "오니?", "말하니?", "보니?", "보이니?", "가지니?", "마시니?", "점프하니?", "잡니?", "이야기하니?", "씻니?", "걷니?", "서있니?", "앉니?", "넘어지니?", "노니?", "공부하니?", "돕니?", "듣니?", "보니?", "  당기니?", "  미니?", "  그리니?", "  들리니?", "  보이니?  ", "  자르니?", "  읽니?", "  움직이니?", "  묻니?", "  사용하니?  ", "하니?", " 하게 하니?", " 우니?", " 수영하니?", "자니?" );
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}
// 복합관계부사
function getRandomReletives6() {
  const firstArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const secondArray = new Array("사랑한다 ", "좋아한다 ", "즐긴다 ", "시작한다 ", "멈춘다", "연다", "닫는다", "요리한다", "먹는다", "대화한다", "달린다", "난다", "시작한다", "그만둔다", "말한다", "간다", "온다", "말한다", "본다", "보인다", "가지고 있다", "마신다", "점프한다", "잡는다", "이야기한다", "씻는다", "걷는다", "일어선다", "앉는다", "넘어진다", "논다", "공부한다", "돕는다", "듣는다", "본다", "  당긴다", "  민다", "  그린다", "  들린다", "  보인다  ", "  자른다", "  읽는다", "  움직인다", "  묻는다", "  사용한다  ", "한다", " 하게 한다", " 운다", " 수영한다", "잔다" , "사랑하지 않는다 ", "좋아하지 않는다 ", "즐기지 않는다 ", "시작하지 않는다 ", "멈추지 않는다", "열지 않는다", "닫지 않는다", "요리하지 않는다", "먹지 않는다", "대화하지 않는다", "달리지 않는다", "날지 않는다", "시작하지 않는다", "그만두지 않는다", "말하지 않는다", "가지 않는다", "오지 않는다", "말하지 않는다", "보지 않는다", "보이지 않는다", "가지고 있지 않다", "마시지 않는다", "점프하지 않는다", "잡지 않는다", "이야기하지 않는다", "씻지 않는다", "걷지 않는다", "일어서지 않는다", "앉지 않는다", "넘어지지 않는다", "놀지 않는다", "공부하지 않는다", "돕지 않는다", "듣지 않는다", "보지 않는다", "  안당긴다", "  안민다", "  안그린다", "  안들린다", "  안보인다  ", " 안자른다", "  안읽는다", "  안움직인다", "  안묻는다", "  안사용한다  ", "안한다", " 하게 안한다", " 울지 않는다", "안잔다", "사랑하니? ", "좋아하니? ", "즐기니? ", "시작하니? ", "멈추니?", "여니?", "닫니?", "요리하니?", "먹니?", "대화하니?", "달리니?", "날아가니?", "시작하니?", "그만두니?", "말하니?", "가니?", "오니?", "말하니?", "보니?", "보이니?", "가지니?", "마시니?", "점프하니?", "잡니?", "이야기하니?", "씻니?", "걷니?", "서있니?", "앉니?", "넘어지니?", "노니?", "공부하니?", "돕니?", "듣니?", "보니?", "  당기니?", "  미니?", "  그리니?", "  들리니?", "  보이니?  ", "  자르니?", "  읽니?", "  움직이니?", "  묻니?", "  사용하니?  ", "하니?", " 하게 하니?", " 우니?", " 수영하니?", "자니?" );
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  $("#divRandom").text(result);
}

// 가정법 과거
function getRandomCondition1() {
  const firstArray = new Array("내가 ", "네가 ", "그가 ", "그녀가 ", "니콜이 ", "우리가 ", "너희들이 ", "그들이 ");
  const secondArray = new Array("사랑하면 ", "좋아하면 ", "즐기면 ", "시작하면 ", "멈추면 ", "열면 ", "닫으면 ", "요리하면 ", "먹는다면 ", "대화한다면 ", "달린다면 ", "난다면 ", "시작한다면 ", "그만둔다면 ", "말한다면 ", "간다면 ", "온다면 ", "말한다면 ", "본다면 ", "가지고 있다면 ", "마신다면 ", "잡는다면 ", "이야기한다면 ", "씻는다면 ", "공부한다면 ", "돕는다면 ", "본다면 ", "  당긴다면 ", "민다면 ", "그린다면 ", "자른다면 ", "읽는다면 ", "  움직인다면 ", "  묻는다면 ", "  사용한다면   ", "한다면 " );
  const thirdArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const lastArray = new Array("행복할 텐데. ", "슬플텐데. ", "춤출 수 있을텐데. ", "알텐데.");
  let result = "만약 " + getRandomTwoChar(firstArray) + "그것을 " + getRandomTwoChar(secondArray) + ", " + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
  $("#divRandom").text(result);
}
// 가정법 과거완료
function getRandomCondition2() {
  const firstArray = new Array("내가 ", "네가 ", "그가 ", "그녀가 ", "니콜이 ", "우리가 ", "너희들이 ", "그들이 ");
  const secondArray = new Array("사랑했다면 ", "좋아했다면 ", "즐겼다면 ", "시작했다면 ", "멈췄다면 ", "열었다면 ", "닫았다면 ", "요리했다면 ", "먹었다면 ", "대화했다면 ", "달렸다면 ", "날았다면 ", "시작했다면 ", "그만뒀다면 ", "말했다면 ", "갔다면 ", "왔다면 ", "말했다면 ", "봤다면 ", "가지고 있었다면 ", "마셨다면 ", "잡았다면 ", "이야기했다면 ", "씻었다면 ", "공부했다면 ", "도왔다면 ", "봤다면 ", "  당겼다면 ", "밀었다면 ", "그렸다면 ", "잘랐다면 ", "읽었다면 ", "  움직였다면 ", "  물었다면 ", "  사용했다면   ", "했다면 " );
  const thirdArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const lastArray = new Array("행복했을 텐데. ", "슬펐을텐데. ", "춤출 수 있었을텐데. ", "알았을텐데.");
  let result = "만약 " + getRandomTwoChar(firstArray) + "그것을 " + getRandomTwoChar(secondArray) + ", " + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
  $("#divRandom").text(result);
}

// I wish 가정법 
function getRandomCondition3() {
  const firstArray = new Array("내가 ", "네가 ", "그가 ", "그녀가 ", "니콜이 ", "우리가 ", "너희들이 ", "그들이 ");
  const secondArray = new Array("사랑했다면 ", "좋아했다면 ", "즐겼다면 ", "시작했다면 ", "멈췄다면 ", "열었다면 ", "닫았다면 ", "요리했다면 ", "먹었다면 ", "대화했다면 ", "달렸다면 ", "날았다면 ", "시작했다면 ", "그만뒀다면 ", "말했다면 ", "갔다면 ", "왔다면 ", "말했다면 ", "봤다면 ", "가지고 있었다면 ", "마셨다면 ", "잡았다면 ", "이야기했다면 ", "씻었다면 ", "공부했다면 ", "도왔다면 ", "봤다면 ", "  당겼다면 ", "밀었다면 ", "그렸다면 ", "잘랐다면 ", "읽었다면 ", "  움직였다면 ", "  물었다면 ", "  사용했다면   ", "했다면 " );
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + " 좋을텐데 " ;
  $("#divRandom").text(result);
}

// as if 가정법 
function getRandomCondition4() {
  const firstArray = new Array("내가 ", "네가 ", "그가 ", "그녀가 ", "니콜이 ", "우리가 ", "너희들이 ", "그들이 ");
  const secondArray = new Array("사랑했던 ", "좋아했던 ", "즐겼던 ", "시작했던 ", "멈췄던 ", "열었던 ", "닫았던 ", "요리했던 ", "먹었던 ", "대화했던 ", "달렸던 ", "날았던 ", "시작했던 ", "그만뒀던 ", "말했던 ", "갔던 ", "왔던 ", "말했던 ", "봤던 ", "가지고 있었던 ", "마셨던 ", "잡았던 ", "이야기했던 ", "씻었던 ", "공부했던 ", "도왔던 ", "봤던 ", "  당겼던 ", "밀었던 ", "그렸던 ", "잘랐던 ", "읽었던 ", "  움직였던 ", "  물었던 ", "  사용했던   ", "했던 " );
  const thirdArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const lastArray = new Array("행복했을 텐데. ", "슬펐을텐데. ", "춤출 수 있었을텐데. ", "알았을텐데.");
  let result = getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray) + "마치 " + getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + "것처럼";
  $("#divRandom").text(result);
}

// 가정법 혼합가정법
function getRandomCondition12() {
  const firstArray = new Array("내가 ", "네가 ", "그가 ", "그녀가 ", "니콜이 ", "우리가 ", "너희들이 ", "그들이 ");
  const secondArray = new Array("사랑하면 ", "좋아하면 ", "즐기면 ", "시작하면 ", "멈추면 ", "열면 ", "닫으면 ", "요리하면 ", "먹는다면 ", "대화한다면 ", "달린다면 ", "난다면 ", "시작한다면 ", "그만둔다면 ", "말한다면 ", "간다면 ", "온다면 ", "말한다면 ", "본다면 ", "가지고 있다면 ", "마신다면 ", "잡는다면 ", "이야기한다면 ", "씻는다면 ", "공부한다면 ", "돕는다면 ", "본다면 ", "  당긴다면 ", "민다면 ", "그린다면 ", "자른다면 ", "읽는다면 ", "  움직인다면 ", "  묻는다면 ", "  사용한다면   ", "한다면 " );
  const thirdArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const lastArray = new Array("행복했을 텐데. ", "슬펐을텐데. ", "춤출 수 있었을텐데. ", "알았을텐데.");
  let result = "만약 " + getRandomTwoChar(firstArray) + "그것을 " + getRandomTwoChar(secondArray) + ", " + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
  $("#divRandom").text(result);
}

// // 가정법 전체
// function getRandomCondition() {
//   getRandomCondition1()
//   getRandomCondition2()
//   getRandomCondition3()
//   getRandomCondition4()
//   getRandomCondition12()

//   $("#divRandom").text(result);
// }



document.addEventListener('contextmenu', function () {
  event.preventDefault();
});

function initArrayLoad(arrays) {
  $("#latinAlphabet input").each(function (index, item) {
    $(item).val(arrays[index]);
  });
}