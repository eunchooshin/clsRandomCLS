var App = new Vue({
  el: '#app',
  data() {
    return {
      search: '',
      title: 'CLS G.Library',
      cards: [
        {
          name: '단어',
          cardColor: 'warning',
          items: [
            '명사',
            '동사',
            '형용사',
            '부사',
            '대명사',
            '접속사',
            '감탄사',
            '전치사',
            '관사',
          ],
        },
        {
          name: '의미',
          cardColor: 'success',
          items: [
            '시제',
            '조동사',
            '동명사',
            '분사',
            '수동태',
            '부정사',
            '비교',
            '관계사',
            '가정법',
            '의문사&의문문',
            '일치',
            '화법',
            '특수구문',
          ],
        },
        {
          name: '문장',
          cardColor: 'danger',
          items: ['문장', '문장의 종류', '문장의 구성요소', '문장의 5형식'],
        },
      ],
    };
  },

  computed: {
    filteredCards() {
      var _this = this;
      if (this.search.length === 0) return this.cards;
      return this.cards.map(function (card) {
        return {
          name: card.name,
          cardColor: card.cardColor,
          items: card.items.filter(function (item) {
            return item.includes(_this.search);
          }),
        };
      });
    },
  },

  methods: {
    removeCard(card) {
      this.cards.splice(this.cards.indexOf(card), 1);
    },
    clearSearchField() {
      this.search = '';
    },
  },
});

// 위쪽으로 vue

// clsToggle
var dropdown = document.getElementsByClassName('dropdown-btn is-light');
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
}

// // myToggle
// var dd = document.getElementsByClassName("dropdown-btn button All");
// var i;

// for (i = 0; i < dd.length; i++) {
//   dd[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var ddContent = document.getElementsByClassName("dropdown-container").nextElementSibling;
//     if (ddContent.style.display === "block") {
//       ddContent.style.display = "none";
//     } else {
//       ddContent.style.display = "block";
//     }
//   });
// }

$(document).ready(function () {
  $('#switchRoundedDefault').click(function () {
    $('#divRandom').toggle();
  });
  $('#switchRoundedDanger').click(function () {
    $('#divRandom2').toggle();
  });
  $('#switchRoundedWarning').click(function () {
    $('#AudioCardBox').toggle();
  });
  $('#switchRoundedLast').click(function () {
    $('#navButtons').toggle();
  });
  $('.button').click(function () {
    const buttonSound = new Audio('../src/buttonSound.mp3');
    buttonSound.play();
  });
});

// // input넣으면 글씨쓰기
// document.getElementById("draw_text").addEventListener("keyup", function () {
//   var canvas = document.getElementById("my_canvas");
//   var context = canvas.getContext("2d");

//   context.clearRect(0, 0, canvas.width, canvas.height);

//   let text = document.getElementById("draw_text").value;

//   context.font = "40pt BM YEONSUNG OTF";
//   context.fillText(text, 10, 50);
// });

// document.getElementById("draw_text").dispatchEvent(new Event("keyup"));

// Search 박스에서 값 가져오기
// mp3 넣기
// img 넣기


function getCardNumber() {
  let cardNumber = document.getElementById('inputCardNumber').value;
  let z =
    '<audio controls><source src="../src/' +
    cardNumber +
    '.m4a" type="audio/mp3"></audio>';
  document.getElementById('audioSetting').innerHTML = z;
  let y =
    '<img src="../images/grammar_image/glCard/glCard' + cardNumber + '.jpg' + '" alt="GrammarCard">';
  document.getElementById('glAudioCard').innerHTML = y;
  // let myPicture = '<img width="720" height="1000" src="../images/grammar_image/glCard/glCard' + cardNumber + '.jpg' + '" alt="GrammarCard">';
  // document.getElementById('myPicture').innerHTML = x;
};

const input = document.querySelector('#inputCardNumber');
input.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    let cardNumber = document.getElementById('inputCardNumber').value;
    let z = '<audio controls><source src="../src/' + cardNumber + '.m4a" type="audio/mp3"></audio>';
    document.getElementById('audioSetting').innerHTML = z;
    let y = '<img src="../images/grammar_image/glCard/glCard' + cardNumber + '.jpg' + '" alt="GrammarCard">';
    document.getElementById('glAudioCard').innerHTML = y;
    document.getElementById('inputCardNumber').value = '';
  }
});

// tabs
document.querySelectorAll('#nav li').forEach(function (navEl) {
  navEl.onclick = function () {
    toggleTab(this.id, this.dataset.target);
  };
});

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll('#nav li');

  navEls.forEach(function (navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add('is-active');
    } else {
      if (navEl.classList.contains('is-active')) {
        navEl.classList.remove('is-active');
      }
    }
  });

  var tabs = document.querySelectorAll('.tab-pane');

  tabs.forEach(function (tab) {
    if (tab.id == targetId) {
      tab.style.display = 'block';
    } else {
      tab.style.display = 'none';
    }
  });
}
// 글씨체

function changeFont1() {
  // 1. 대상 element 선택
  const element = document.getElementById('divRandom');
  // 2. style 변경
  (element.style.fontFamily = 'Yeon Sung'), cursive;
}

function changeFont2() {
  const element = document.getElementById('divRandom');
  (element.style.fontFamily = 'Gamja Flower'), cursive;
}

function changeFont3() {
  const element = document.getElementById('divRandom');
  (element.style.fontFamily = 'Black Han Sans'), sans - serif;
}

function changeFont4() {
  const element = document.getElementById('divRandom');
  (element.style.fontFamily = 'Single Day'), cursive;
}
function changeFont5() {
  const element = document.getElementById('divRandom');
  (element.style.fontFamily = 'Gaegu'), cursive;
}
function changeFont6() {
  const element = document.getElementById('divRandom');
  (element.style.fontFamily = 'Jua'), sans - serif;
}
function changeFont7() {
  const element = document.getElementById('divRandom');
  (element.style.fontFamily = 'Nanum Gothic'), sans - serif;
}

function changeFontSize1() {
  // 1. 대상 element 선택
  const element = document.getElementById('divRandom');
  // 2. style 변경
  element.style.fontSize = '50px';
}

function changeFontSize2() {
  // 1. 대상 element 선택
  const element = document.getElementById('divRandom');
  // 2. style 변경
  element.style.fontSize = '100px';
}
function changeFontSize3() {
  // 1. 대상 element 선택
  const element = document.getElementById('divRandom');
  // 2. style 변경
  element.style.fontSize = '150px';
}
function changeFontSize4() {
  // 1. 대상 element 선택
  const element = document.getElementById('divRandom');
  // 2. style 변경
  element.style.fontSize = '200px';
}

// 아래쪽 CLS Speaking Random

const consonantVal = 'bcdfghjklmnpqrstvwxyz';
const vowelVal = 'aeiou';
const constantUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const constantLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const pronounBox = new Array('나는 ', '너는 ', '그는 ', '그녀는 ', '그것은 ', '우리는 ', '너희들은 ', '그들은 ');
const pronounBoxK = new Array('나는 ', '너는 ', '그는 ', '그녀는 ', '그것은 ', '우리는 ', '너희들은 ', '그들은 ');
const pronounBoxE = new Array('I ', 'You ', 'He ', 'She ', 'It ', 'We ', 'You ', 'They ');
const pronounBoxBeE = new Array('I am ', 'You are ', 'He is ', 'She is ', 'It is ', 'We are ', 'You are ', 'They are ');
const pronounBoxHaveE = new Array('I have ', 'You have ', 'He has ', 'She has ', 'It has ', 'We have ', 'You have ', 'They have ');

const prepositionK = new Array();
const prepositionE = new Array();

const noun1personK = new Array("성인", "천사", "이모", "아기", "상사", "소년", "형제", "선장", "아이", "직원", "부부", "사촌", "고객", "아빠", "딸", "치과의사", "의사", "기술자", "가족", "아버지", "바보", "친구", "신사", "소녀", "할아버지", "사람", "영웅", "인간", "남편", "나는", "아이", "왕", "여성", "어머니", "간호사", "부모", "사람들", "경찰", "왕자", "여왕", "그녀", "여동생", "아들", "학생", "10대의", "삼촌", "우리", "아내", "여성", "여러분", "농부", "외국인", "여걸", "소방관", "충고하는 사람", "10대 소년", "여행자", "동료", "학급친구", "한 방 사람", "인간", "육군 대장", "거지", "승객", "시민", "어릿광대", "상인", "거짓말쟁이", "임자", "적", "지배자", "도둑", "방문자", "여행자", "단짝", "교수", "고용주", "피고용인", "음악가", "배우", "여배우", "하인", "지도자", "해녀", "계산원", "뱃사람", "사냥꾼", "경영자", "변호사", "시장", "고객", "이발사", "남자", "여성", "운동선수", "지원자", "악마", "요정", "반대자", "청중", "탐험가", "백만장자", "기어오르는 사람", "동무", "주인", "이야기하는 사람", "상인", "지휘자", "시민", "일반인", "목수", "교대자", "선조", "범죄자", "사람들", "비서", "유권자", "우두머리", "조카", "조카딸", "시인", "강도", "겁쟁이", "교사", "디저트", "노예", "해군", "벌목꾼", "불교도", "소비자", "저자", "의사", "정치가", "천재", "살인자", "작곡가", "해군대장", "황제", "공주");
const noun1personE = new Array("adult", "angel", "aunt", "baby", "boss", "boy", "brother", "captain", "child", "clerk", "couple", "cousin", "customer", "dad", "daughter", "dentist", "doctor", "engineer", "family", "father", "fool", "friend", "gentleman", "girl", "grandfather", "guy", "hero", "human", "husband", "I", "kid", "king", "lady", "mother", "nurse", "parent", "people", "police", "prince", "queen", "she", "sister", "son", "student", "teen", "uncle", "we", "wife", "woman", "you", "farmer", "foreigner", "heroine", "fireman", "adviser", "teenager", "tourist", "mate", "classmate", "roommate", "mankind", "general", "beggar", "passenger", "citizen", "clown", "trader", "liar", "owner", "enemy", "ruler", "thief", "visitor", "traveler", "pal", "professor", "employer", "employee", "musician", "actor", "actress", "servant", "leader", "diver", "cashier", "sailor", "hunter", "manager", "lawyer", "mayor", "client", "barber", "male", "female", "athlete", "volunteer", "devil", "fairy", "opponent", "audience", "explorer", "millionaire", "climber", "fellow", "host", "narrator", "merchant", "director", "civil", "civilian", "carpenter", "relay", "ancestor", "criminal", "folk", "secretary", "voter", "chief", "nephew", "niece", "poet", "robbery", "coward", "instructor", "dessert", "slave", "navy", "logger", "Buddhist", "consumer", "author", "physician", "politician", "genius", "murderer", "composer", "admiral", "emperor", "princess");
const noun2objectK = new Array("사고", "오후", "나이", "항공사", "비행기", "사과", "팔", "등", "공", "풍선", "바구니", "박쥐", "화장실", "건전지", "콩", "침대", "침실", "쇠고기", "종", "자전거", "영수증", "혈액", "게시판", "배", "몸", "폭탄", "뼈", "책", "부츠", "병", "바닥", "그릇", "뇌", "브레이크", "가지", "브랜드", "빵", "다리", "거품", "단추", "(동물)우리", "사탕", "모자", "자동차", "당근", "수레", "현금", "성", "체인점", "의자", "원", "교실", "동영상", "시계", "천", "구름", "동전", "쿠키", "구석", "비용", "면 목화", "관", "커튼", "책상", "일기", "접시", "인형", "문", "귀", "지구", "달걀", "엔진", "지우개", "눈", "얼굴", "부채", "농장", "파일", "손가락", "화재", "국기", "꽃", "안개", "음식", "발", "축구", "과일", "유령", "선물", "유리", "장갑", "접착제", "금", "포도", "풀", "머리카락", "손", "모자", "머리", "심장", "열", "헬기", "숙제", "꿀", "얼음", "그것", "청바지", "열쇠", "칼", "잎", "다리", "편지", "선", "입술", "우편", "남자", "지도", "고기", "우유", "거울", "돈", "달", "산", "입", "영화관", "목", "신문", "코", "메모", "석유", "바지", "종이", "배", "사진", "주머니", "감자", "상", "경주", "비", "무지개", "반지", "바위", "지붕", "소금", "모래", "가위", "선박", "신발", "피부", "치마", "눈", "양말", "숟가락", "돌", "딸기", "지하철", "설탕", "태양", "탁자", "꼬리", "테이프", "전화", "교과서", "것", "치아", "장난감", "나무", "우산", "채소", "수박", "창문", "목재", "비누", "총", "쓰레기", "옷", "의복", "지갑", "양배추", "지갑", "팔꿈치", "무기", "초", "발가락", "손수건", "요리기구", "쓰레기", "무덤", "사전", "쟁반", "소나기", "껍질", "발목", "맥주", "베개", "약", "철도", "바지", "식물", "완두콩", "견과", "땅콩", "목구멍", "철", "손톱", "뺨", "밧줄", "위", "연", "담장", "마늘", "강철", "기둥", "우편엽서", "눈물", "막대기", "분수", "서랍", "소설", "상록수", "생산품", "짐", "저널", "뒤꿈치", "여권", "자동차", "입방체", "지느러미", "여과기", "꾸러미", "꾸러미", "잡지", "막대기", "자물쇠", "구멍", "후추", "손잡이", "파도", "식품", "수레바퀴", "오이", "손목", "꽃병", "식초", "씨", "발톱", "곡물", "묘", "약", "버섯", "갈고리", "연료", "내용물", "(여행의) 수하물", "땀", "건설", "동화", "복숭아", "잔디", "혀", "꽃", "창조물", "깃털", "풍자만화", "둥지", "식료품류", "칠판", "벽돌", "항아리", "제분기", "풍차", "젓가락", "소지품", "면허", "돼지고기", "(특정 작업을 위해 고안된) 장치", "눈썹", "단지", "온도계", "소매", "뿌리", "추첨", "실", "바늘", "컨테이너", "발자국", "상품", "눈금", "온실", "보물", "굴뚝", "성냥", "활", "뿔", "주먹", "폐", "막대", "사다리", "모서리", "농작물", "주름", "시집", "시", "위성", "물질", "꾸러미", "표면", "무거운 짐", "연장", "근육", "신경", "얼굴의 생김새", "불꽃", "반도", "주전자", "꼬리표", "양상추", "탄알", "통나무", "삽", "자석", "물살", "도끼", "콩", "곡식", "매", "대륙", "엄지손가락", "끈", "화살", "손바닥", "수도꼭지", "덫", "세포", "세탁", "기계", "빵 한 덩어리", "자원", "액체", "독감");
const noun2objectE = new Array("accident", "afternoon", "age", "airline", "airplane", "apple", "arm", "back", "ball", "balloon", "basket", "bat", "bathroom", "battery", "bean", "bed", "bedroom", "beef", "bell", "bicycle", "bill", "blood", "board", "boat", "body", "bomb", "bone", "book", "boot", "bottle", "bottom", "bowl", "brain", "brake", "branch", "brand", "bread", "bridge", "bubble", "button", "cage", "candy", "cap", "car", "carrot", "cart", "cash", "castle", "chain", "chair", "circle", "classroom", "clip", "clock", "cloth", "cloud", "coin", "cookie", "corner", "cost", "cotton", "crown", "curtain", "desk", "diary", "dish", "doll", "door", "ear", "earth", "egg", "engine", "eraser", "eye", "face", "fan", "farm", "file", "finger", "fire", "flag", "flower", "fog", "food", "foot", "football", "fruit", "ghost", "gift", "glass", "glove", "glue", "gold", "grape", "grass", "hair", "hand", "hat", "head", "heart", "heat", "helicopter", "homework", "honey", "ice", "it", "jeans", "key", "knife", "leaf", "leg", "letter", "line", "lip", "mail", "man", "map", "meat", "milk", "mirror", "money", "moon", "mountain", "mouth", "movie", "neck", "newspaper", "nose", "note", "oil", "pants", "paper", "pear", "picture", "pocket", "potato", "prize", "race", "rain", "rainbow", "ring", "rock", "roof", "salt", "sand", "scissors", "ship", "shoe", "skin", "skirt", "snow", "sock", "spoon", "stone", "strawberry", "subway", "sugar", "sun", "table", "tail", "tape", "telephone", "textbook", "thing", "tooth", "toy", "tree", "umbrella", "vegetable", "watermelon", "window", "wood", "soap", "gun", "trash", "clothes", "clothing", "wallet", "cabbage", "purse", "elbow", "weapon", "candle", "toe", "handkerchief", "cooker", "garbage", "grave", "dictionary", "tray", "shower", "shell", "ankle", "beer", "pillow", "medicine", "railroad", "trousers", "plant", "pea", "nut", "peanut", "throat", "iron", "nail", "cheek", "rope", "stomach", "kite", "fence", "garlic", "steel", "post", "postcard", "tear", "pole", "fountain", "drawer", "novel", "evergreen", "product", "load", "journal", "heel", "passport", "automobile", "cube", "fin", "filter", "pack", "package", "magazine", "bar", "lock", "hole", "pepper", "handle", "wave", "diet", "wheel", "cucumber", "wrist", "vase", "vinegar", "seed", "claw", "grain", "tomb", "drug", "mushroom", "hook", "fuel", "content", "baggage", "sweat", "construction", "fairy tale", "peach", "lawn", "tongue", "bloom", "creature", "feather", "cartoon", "nest", "grocery", "blackboard", "brick", "jar", "mill", "windmill", "chopstick", "belonging", "license", "pork", "device", "eyebrow", "pot", "thermometer", "sleeve", "root", "lot", "thread", "needle", "container", "footprint", "merchandise", "scale", "greenhouse", "treasure", "chimney", "match", "bow", "horn", "fist", "lung", "rod", "ladder", "edge", "crop", "wrinkle", "poetry", "poem", "satellite", "material", "parcel", "surface", "burden", "tool", "muscle", "nerve", "feature", "flame", "peninsula", "kettle", "label", "lettuce", "bullet", "log", "spade", "magnet", "current", "ax", "soy", "cereal", "falcon", "continent", "thumb", "string", "arrow", "palm", "faucet", "trap", "cell", "laundry", "instrument", "loaf", "resource", "fluid", "influenza");
const noun3animalK = new Array("동물", "개미", "곰", "벌", "새", "벌레", "고양이", "소", "개", "돌고래", "오리", "코끼리", "물고기", "여우", "개구리", "기린", "말", "사자", "원숭이", "쥐", "돼지", "강아지", "토끼", "호랑이", "얼룩말", "어린 양", "사슴", "상어", "매", "양", "올빼미", "거북이", "게", "비둘기", "참새", "달팽이", "당나귀", "염소", "새끼 새", "황소", "거위", "표범", "수탉", "칠면조", "암탉", "곤충", "두꺼비");
const noun3animalE = new Array("animal", "ant", "bear", "bee", "bird", "bug", "cat", "cow", "dog", "dolphin", "duck", "elephant", "fish", "fox", "frog", "giraffe", "horse", "lion", "monkey", "mouse", "pig", "puppy", "rabbit", "tiger", "zebra", "lamb", "deer", "shark", "hawk", "sheep", "owl", "turtle", "crab", "pigeon", "sparrow", "snail", "donkey", "goat", "chick", "bull", "goose", "leopard", "cock", "turkey", "hen", "insect", "toad");
const noun4placeK = new Array("아카데미", "공항", "지역", "은행", "해변", "교회", "영화관", "도시", "동아리", "대학", "회사", "콘서트", "대회", "나라", "시골", "출구", "공장", "분야", "바닥", "숲", "앞", "정원", "문", "땅", "천국", "언덕", "집; 가정의", "병원", "집", "부엌", "호수", "땅", "도서관", "거실", "박물관", "바다", "사무소", "궁전", "공원", "연필", "장소", "식당", "화장실", "강", "도로", "방", "학교", "바다", "상점", "하늘", "남", "공간", "가게", "거리", "마을", "벽", "동물원", "계단", "입구", "유치원", "지옥", "물웅덩이", "운동장", "항구", "마을", "연못", "굴", "골짜기", "해안", "작은 길", "극장", "횡단보도", "시청", "중심가", "도시의 주택가", "바닷가", "오두막집", "그늘", "법정", "화성", "우체국", "형무소", "항구", "빵집", "지하실", "사찰", "태평양", "대서양", "과수원", "교도소", "지대", "경사면", "체육관", "길", "국경", "행성", "도랑", "진료소", "차고", "장소", "시내", "우주");
const noun4placeE = new Array("academy", "airport", "area", "bank", "beach", "church", "cinema", "city", "club", "college", "company", "concert", "contest", "country", "countryside", "exit", "factory", "field", "floor", "forest", "front", "garden", "gate", "ground", "heaven", "hill", "home", "hospital", "house", "kitchen", "lake", "land", "library", "living room", "museum", "ocean", "office", "palace", "park", "pencil", "place", "restaurant", "restroom", "river", "road", "room", "school", "sea", "shop", "sky", "south", "space", "store", "street", "town", "wall", "zoo", "stair", "entrance", "kindergarten", "hell", "pool", "playground", "harbor", "village", "pond", "cave", "valley", "coast", "path", "theater", "crosswalk", "city hall", "downtown", "uptown", "shore", "hut", "shade", "court", "Mars", "post office", "prison", "port", "bakery", "basement", "temple", "Pacific", "Atlantic", "orchard", "jail", "zone", "slope", "gym", "route", "frontier", "planet", "ditch", "clinic", "garage", "location", "stream", "universe");
const noun5conceptK = new Array("억양", "주소", "모험", "공기", "분노", "예술", "기반", "야구", "농구", "목욕", "전투", "아름다움", "탄생", "생일", "아침 식사", "기업", "달력", "경우", "기회", "수업", "감기", "색", "코미디", "조건", "군중", "문화", "주기", "위험", "데이트", "날", "죽음", "대화", "저녁식사", "동쪽", "오차", "저녁", "시험", "예", "사실", "열", "미래", "몸짓", "목표", "신", "그룹", "습관", "두통", "역사", "취미", "휴일", "시간", "생각", "직무", "기쁨", "교훈", "빛", "운", "점심", "수학", "기억", "마음", "개월", "아침", "음악", "이름", "국가", "자연", "밤", "정오", "북", "아무것도 없음", "수", "하나", "부분", "평화", "소풍", "분홍색", "요점", "힘", "현재", "문제", "퍼즐", "질문", "권리", "판매", "과학", "점수", "계절", "측면", "크기", "축구", "노래", "소리", "속도", "이야기", "스트레스", "만찬", "시험", "저것", "그들", "갈증", "이것", "시간", "위쪽의", "관광", "탑", "삼각형", "여행", "유형", "목소리", "전쟁", "물", "방법", "날씨", "결혼", "주", "주말", "체중", "서부", "바람", "단어", "세계", "연도", "슬픔", "정신이상", "선택", "아픔", "정직", "현명함", "배구", "암흑", "상상력", "웃음", "새벽", "나약함", "골칫거리", "명예", "값", "아픔", "고독", "소음", "논쟁", "초대", "햇빛", "해돋이", "일몰", "영광", "필요", "반", "미움", "기쁨", "충고", "의미", "지루함", "수학", "두려움", "운", "편의", "교통", "언어", "한밤중", "거리", "실패", "도입", "개발", "감정", "위치", "보호", "불쌍히 여김", "우아함", "경제", "12개", "친절", "손해", "식사", "고난", "자랑", "발견", "기쁨", "도착", "인내", "대화", "침묵", "차이", "통행", "이유", "사회", "배달", "경이", "별명", "한 쌍", "상징", "웅장", "발명", "기침", "능력", "용기", "외관", "생각하기", "지정", "실망", "속임수", "가을", "1야드", "공학", "왕국", "거래", "싸움", "지식", "등급", "매력", "경험", "조각", "시력", "관광", "합계", "요약", "기록", "주의", "부", "조화", "비용", "지출", "이야기", "직사각형", "사과", "작은 조각", "준비", "요술", "축하", "각도", "경향", "힘", "분리", "물질", "규칙", "시기", "북극", "남극", "만족", "야생", "기간", "도보여행", "숨", "정보", "제안", "졸업", "순간", "자신감", "결과", "의견", "감탄", "교육", "호의", "대화", "고용", "실업", "지역", "산업", "공포", "안전", "대중(사회)", "치료", "시험", "살아남음", "휴식", "1센트", "1세기", "센티미터", "섭씨", "연구", "되풀이", "회복", "끝", "자유", "연설", "행동", "활동", "어린 시절", "비행", "힘", "길이", "높이", "말", "우정", "혼합", "지불", "접촉", "계급", "자기", "장면", "신용", "재주", "규칙", "신청", "사생활", "커뮤니케이션", "임무", "법률", "놀람", "비율", "폭풍", "보랏빛", "관습", "운동", "문법", "상해", "나쁜", "상처", "양", "의식", "병", "경고", "공포", "격노", "온도", "슬픔", "열", "가려움", "정사각형", "인기", "위험", "존재", "정부", "실험", "정도", "수수께끼", "예외", "노동", "치료", "노력", "처벌", "성취", "봄", "환경", "위치", "탐험", "환경", "근원", "대부분", "소수", "호기심", "일", "발음", "중간", "간격", "종교", "불평", "종류", "장애", "가치", "이익", "연결", "재산", "윤곽", "직업", "유사점", "엷은 안개", "이야기", "경우", "서두름", "의도", "투쟁", "방향", "위치", "요청", "요구", "번역", "파괴", "민주주의", "부족", "덩어리", "산성", "틈", "예", "끌어당김", "완성", "관계", "관계", "방어", "결합", "정정", "안락", "곡조", "원인", "죄", "한계", "한정", "세금", "걱정", "성가", "대조", "전통", "주제", "해결", "경향", "선거", "전기", "결점", "홍수", "자유", "목적", "책임", "합", "환경", "오염", "행동", "식욕", "유리", "불리", "수확", "폭력", "장식", "우화", "반대", "물리학", "연합", "위협", "실행", "감사", "기후", "오염", "손해", "헌신", "광고", "인구", "숫자", "효과", "가난", "부서", "공동체", "겁", "증명", "용기", "범위", "세부 사항", "수술", "교육", "조직", "실마리", "산뜻한", "수집", "책임", "의심", "운임", "여행", "신화", "기간", "임금", "자세", "증거", "향상", "공격", "맥박", "지시", "지휘자", "적용", "질", "계산", "방법", "인내", "운명", "출발", "개념", "평판", "불교", "농업", "구역", "기회", "운송 수단", "입장", "무질서", "허가", "목적지", "지나간 자국", "소비", "자취", "전설", "구조", "몫", "지름", "안전", "충돌", "번영", "정치", "범위", "분쟁", "응답", "진화", "혁명", "살인", "침입", "구성", "항해", "상황", "기능", "분석", "재활용", "복습", "보수", "거절", "예약", "응답", "퇴직", "반작용", "구제", "환불", "제한", "결합", "중심", "집중", "영향", "압력", "의기소침", "표현", "인상", "원리", "감정", "(미래의) 전망", "광경", "의심");
const noun5conceptE = new Array("accent", "address", "adventure", "air", "anger", "art", "base", "baseball", "basketball", "bath", "battle", "beauty", "birth", "birthday", "breakfast", "business", "calendar", "case", "chance", "class", "cold", "color", "comedy", "condition", "crowd", "culture", "cycle", "danger", "date", "day", "death", "dialogue", "dinner", "east", "error", "evening", "exam", "example", "fact", "fever", "future", "gesture", "goal", "god", "group", "habit", "headache", "history", "hobby", "holiday", "hour", "idea", "job", "joy", "lesson", "light", "luck", "lunch", "mathematics", "memory", "mind", "month", "morning", "music", "name", "nation", "nature", "night", "noon", "north", "nothing", "number", "one", "part", "peace", "picnic", "pink", "point", "power", "present", "problem", "puzzle", "question", "right", "sale", "science", "score", "season", "side", "size", "soccer", "song", "sound", "speed", "story", "stress", "supper", "test", "that", "they", "thirst", "this", "time", "top", "tour", "tower", "triangle", "trip", "type", "voice", "war", "water", "way", "weather", "wedding", "week", "weekend", "weight", "west", "wind", "word", "world", "year", "sadness", "madness", "choice", "ache", "honesty", "wisdom", "volleyball", "darkness", "imagination", "laughter", "dawn", "weakness", "trouble", "honor", "price", "pain", "loneliness", "noise", "argument", "invitation", "sunlight", "sunrise", "sunset", "glory", "necessity", "half", "hatefulness", "pleasure", "advice", "meaning", "boredom", "math", "fear", "fortune", "convenience", "traffic", "language", "midnight", "distance", "failure", "introduction", "development", "emotion", "position", "protection", "pity", "grace", "economy", "dozen", "kindness", "damage", "meal", "hardship", "pride", "discovery", "delight", "arrival", "patience", "dialog", "silence", "difference", "passage", "reason", "society", "delivery", "wonder", "nickname", "pair", "symbol", "grandeur", "invention", "cough", "ability", "courage", "appearance", "thought", "appointment", "disappointment", "trick", "autumn", "yard", "engineering", "kingdom", "trade", "quarrel", "knowledge", "grade", "charm", "experience", "piece", "sight", "sightseeing", "sum", "summary", "record", "attention", "wealth", "harmony", "expense", "expenditure", "tale", "rectangle", "apology", "bit", "preparation", "magic", "celebration", "angle", "tendency", "force", "separation", "matter", "regulation", "envy", "the North Pole", "the South Pole", "satisfaction", "wildness", "period", "hiking", "breath", "information", "suggestion", "graduation", "moment", "confidence", "result", "opinion", "admiration", "education", "favor", "conversation", "employment", "unemployment", "region", "industry", "fright", "safety", "public", "treatment", "examination", "survival", "rest", "cent", "century", "centimeter", "centigrade", "research", "repetition", "recovery", "finale", "freedom", "speech", "action", "activity", "childhood", "flight", "strength", "length", "height", "saying", "friendship", "mixture", "payment", "contact", "rank", "self", "scene", "credit", "talent", "rule", "proposal", "privacy", "communication", "mission", "law", "alarm", "rate", "storm", "violet", "custom", "movement", "grammar", "injury", "evil", "wound", "amount", "ceremony", "disease", "warning", "horror", "fury", "temperature", "grief", "row", "itch", "square", "popularity", "risk", "existence", "government", "experiment", "degree", "riddle", "exception", "labor", "cure", "effort", "punishment", "achievement", "view", "atmosphere", "situation", "exploration", "environment", "source", "majority", "minority", "curiosity", "task", "pronunciation", "medium", "interval", "religion", "complaint", "sort", "handicap", "value", "profit", "connection", "property", "outline", "profession", "similarity", "mist", "narration", "occasion", "haste", "intention", "conflict", "direction", "site", "request", "requirement", "translation", "destruction", "democracy", "lack", "lump", "acid", "gap", "instance", "attraction", "completion", "relation", "relationship", "defense", "combination", "correction", "comfort", "tune", "cause", "crime", "limit", "limitation", "tax", "anxiety", "anthem", "contrast", "tradition", "subject", "solution", "trend", "election", "electricity", "fault", "flood", "liberty", "purpose", "charge", "addition", "surroundings", "contamination", "behavior", "appetite", "advantage", "disadvantage", "harvest", "violence", "decoration", "fable", "objection", "physics", "association", "threat", "performance", "appreciation", "climate", "pollution", "harm", "devotion", "advertisement", "population", "figure", "effect", "poverty", "department", "community", "cowardice", "proof", "bravery", "extent", "detail", "operation", "instruction", "organization", "clue", "neat", "collection", "responsibility", "doubt", "fare", "journey", "myth", "term", "wage", "posture", "evidence", "improvement", "attack", "pulse", "indication", "conductor", "application", "quality", "account", "method", "endurance", "fate", "departure", "concept", "reputation", "Buddhism", "agriculture", "district", "opportunity", "vehicle", "admission", "disorder", "permission", "destination", "track", "consumption", "trace", "legend", "structure", "share", "diameter", "security", "impact", "prosperity", "politics", "range", "dispute", "response", "evolution", "revolution", "murder", "invasion", "composition", "voyage", "circumstance", "function", "analysis", "recycling", "review", "reward", "rejection", "reservation", "reply", "retirement", "reaction", "relief", "refund", "restriction", "union", "center", "concentration", "influence", "pressure", "depression", "expression", "impression", "principle", "sentiment", "prospect", "spectacle", "suspicion");

const verb1personK = new Array();
const verb1personE = new Array();
const verb2objectK = new Array();
const verb2objectE = new Array();
const verb3animalK = new Array();
const verb3animalE = new Array();
const verb4placeK = new Array();
const verb4placeE = new Array();
const verb5conceptK = new Array();
const verb5conceptE = new Array();

const VERB_SENTENCE_FORM_1_K = new Array("행동한다", "조언한다", "동의한다", "도착한다", "묻는다", "굽는다", "시작한다", "믿는다", "깨뜨린다", "탄다", "보살핀다", "바꾼다", "확인한다", "선택한다", "오른다", "온다", "요리한다", "복사한다", "건넌다", "운다", "자른다", "춤춘다", "결정한다", "죽는다", "한다", "그린다", "꿈꾼다", "마신다", "운전한다", "떨어진다", "먹는다", "끝난다", "들어간다", "운동간다", "실패한다", "떨어진다", "느낀다", "싸운다", "마친다", "고정한다", "난다", "집중한다", "잊는다", "형성한다", "튀긴다", "간다", "자란다", "추측한다", "걷는다", "돕는다", "친다", "잡는다", "희망한다", "서두른다", "참여한다", "계속한다", "찬다", "안다", "거짓말한다", "듣는다", "산다", "본다", "사랑한다", "움직인다", "연다", "통과한다", "지불한다", "논다", "민다", "읽는다", "돌아온다", "달린다", "노래한다", "앉는다", "잔다", "냄새맡는다", "미소짓는다", "말한다", "일어선다", "시작한다", "머무른다", "멈춘다", "수영한다", "말한다", "이야기한다", "여행한다", "노력한다", "돌린다", "방문한다", "기다린다", "깬다", "걷는다", "씻는다", "입는다", "이긴다", "바란다", "일한다", "걱정한다", "쓴다", "울린다", "가라앉는다", "먹인다", "쏜다", "이끈다", "긴다", "바닥을 쓴다", "운다", "떠난다", "구부린다", "잃는다", "감는다", "미끄러진다", "판다", "빛난다", "돌린다", "때린다", "깨운다", "낳는다", "찢는다", "얼린다", "훔친다", "분다", "던진다", "탄다", "오른다", "흔든다");
const VERB_SENTENCE_FORM_1_E = new Array("act", "advise", "agree", "arrive", "ask", "bake", "begin", "believe", "break", "burn", "care", "change", "check", "choose", "climb", "come", "cook", "copy", "cross", "cry", "cut", "dance", "decide", "die", "do", "draw", "dream", "drink", "drive", "drop", "eat", "end", "enter", "exercise", "fail", "fall", "feel", "fight", "finish", "fix", "fly", "focus", "forget", "form", "fry", "go", "grow", "guess", "hang", "help", "hit", "hold", "hope", "hurry", "join", "keep", "kick", "know", "lie", "listen", "live", "look", "love", "move", "open", "pass", "pay", "play", "push", "read", "return", "run", "sing", "sit", "sleep", "smell", "smile", "speak", "stand", "start", "stay", "stop", "swim", "talk", "tell", "travel", "try", "turn", "visit", "wait", "wake", "walk", "wash", "wear", "win", "wish", "work", "worry", "write", "ring", "sink", "feed", "shoot", "lead", "creep", "sweep", "weep", "leave", "bend", "lose", "wind", "slide", "dig", "shine", "spin", "strike", "awake", "bear", "tear", "freeze", "steal", "blow", "throw", "ride", "rise", "shake");
const VERB_SENTENCE_FORM_2_K = new Array();
const VERB_SENTENCE_FORM_2_E = new Array();
const VERB_SENTENCE_FORM_3_K = new Array();
const VERB_SENTENCE_FORM_3_E = new Array();
const VERB_SENTENCE_FORM_4_K = new Array();
const VERB_SENTENCE_FORM_4_E = new Array();
const VERB_SENTENCE_FORM_5_K = new Array();
const VERB_SENTENCE_FORM_5_E = new Array();


const adjective1personK = new Array("모든", "혼자", "다른", "어떤", "나쁜", "큰", "검은", "파란", "용감한", "갈색", "바쁜", "차분한", "특정한", "깨끗한", "영리한", "멋진", "미쳐있는", "궁금한", "귀여운", "죽은", "더러운", "모든", "유명한", "환상적인", "빨리", "지방", "좋아하는", "좋은", "자유의", "재미있는", "거대한", "기쁜", "좋은", "위대한", "잘 생긴", "행복한", " 어려운", "무거운", "솔직한", "더운", "배고픈", "친절한", "게으른", "작은", "화난", "많은", "많은", "새로운", "멋진", "나이든", "가난한", "예쁜", "빠른", "조용한", "준비된", "빨간", "부자의", "슬픈", "안전한", "같은", "짧은", "수줍은", "아픈", "느린", "작은", "똑똑한", "부드러운", "일부", "미안한", "강한", "키가 큰", "추한", "따뜻한", "젖은", "하얀", "잘못된", "노란색", "젊은", "두려운");
const adjective1personE = new Array("all", "alone", "another", "any", "bad", "big", "black", "blue", "brave", "brown", "busy", "calm", "certain", "clean", "clever", "cool", "crazy", "curious", "cute", "dead", "dirty", "every", "famous", "fantastic", "fast", "fat", "favorite", "fine", "free", "fun", "giant", "glad", "good", "great", "handsome", "happy", "hard", "heavy", "honest", "hot", "hungry", "kind", "lazy", "little", "mad", "many", "much", "new", "nice", "old", "poor", "pretty", "quick", "quiet", "ready", "red", "rich", "sad", "safe", "same", "short", "shy", "sick", "slow", "small", "smart", "soft", "some", "sorry", "strong", "tall", "ugly", "warm", "wet", "white", "wrong", "yellow", "young", "afraid");
const adjective2objectK = new Array("모든", "다른", "어떤", "나쁜", "기본적인", "큰", "검은", "파란", "갈색", "특정한", "싼", "깨끗한", "가까운", "다른", "어려운", "더러운", "건조한", "쉬운", "모든", "유명한", "환상적인", "좋아하는", "좋은", "재미있는", "좋은", "위대한", "녹색", "회색", "무거운", "중요한", "큰", "작은", "긴", "많은", "새로운", "다음의", "멋진", "나이든", "예쁜", "빠른", "조용한", "준비된", "빨간", "슬픈", "안전한", "같은", "짧은", "수줍은", "아픈", "느린", "작은", "똑똑한", "부드러운", "일부", "신맛이 나는", "키가 큰", "추한", "따뜻한", "젖은", "하얀", "잘못된", "노란색", "젊은");
const adjective2objectE = new Array("all", "another", "any", "bad", "basic", "big", "black", "blue", "brown", "certain", "cheap", "clean", "close", "different", "difficult", "dirty", "dry", "easy", "every", "famous", "fantastic", "favorite", "fine", "fun", "good", "great", "green", "grey", "heavy", "important", "large", "little", "long", "many", "new", "next", "nice", "old", "pretty", "quick", "quiet", "ready", "red", "sad", "safe", "same", "short", "shy", "sick", "slow", "small", "smart", "soft", "some", "sour", "tall", "ugly", "warm", "wet", "white", "wrong", "yellow", "young");
const adjective3animalK = new Array("모든", "혼자", "다른", "어떤", "나쁜", "큰", "검은", "파란", "용감한", "갈색", "바쁜", "차분한", "특정한", "깨끗한", "영리한", "멋진", "미쳐있는", "궁금한", "귀여운", "죽은", "더러운", "모든", "유명한", "환상적인", "빨리", "지방", "좋아하는", "좋은", "자유의", "재미있는", "거대한", "기쁜", "좋은", "위대한", "잘 생긴", "행복한", " 어려운", "무거운", "솔직한", "더운", "배고픈", "친절한", "게으른", "작은", "화난", "많은", "많은", "새로운", "멋진", "나이든", "가난한", "예쁜", "빠른", "조용한", "준비된", "빨간", "부자의", "슬픈", "안전한", "같은", "짧은", "수줍은", "아픈", "느린", "작은", "똑똑한", "부드러운", "일부", "미안한", "강한", "키가 큰", "추한", "따뜻한", "젖은", "하얀", "잘못된", "노란색", "젊은", "두려운");
const adjective3animalE = new Array("all", "alone", "another", "any", "bad", "big", "black", "blue", "brave", "brown", "busy", "calm", "certain", "clean", "clever", "cool", "crazy", "curious", "cute", "dead", "dirty", "every", "famous", "fantastic", "fast", "fat", "favorite", "fine", "free", "fun", "giant", "glad", "good", "great", "handsome", "happy", "hard", "heavy", "honest", "hot", "hungry", "kind", "lazy", "little", "mad", "many", "much", "new", "nice", "old", "poor", "pretty", "quick", "quiet", "ready", "red", "rich", "sad", "safe", "same", "short", "shy", "sick", "slow", "small", "smart", "soft", "some", "sorry", "strong", "tall", "ugly", "warm", "wet", "white", "wrong", "yellow", "young", "afraid");
const adjective4placeK = new Array("모든", "다른", "어떤", "나쁜", "큰", "검은", "파란", "갈색", "특정한", "깨끗한", "가까운", "어두운", "더러운", "건조한", "모든", "유명한", "환상적인", "먼", "좋아하는", "좋은", "가득한", "재미있는", "좋은", "위대한", "큰", "지난", "중앙의", "새로운", "다음의", "멋진", "나이든", "예쁜", "조용한", "빨간", "부자의", "안전한", "같은", "작은", "일부", "추한", "따뜻한", "젖은", "하얀", "잘못된", "노란색");
const adjective4placeE = new Array("all", "another", "any", "bad", "big", "black", "blue", "brown", "certain", "clean", "close", "dark", "dirty", "dry", "every", "famous", "fantastic", "far", "favorite", "fine", "full", "fun", "good", "great", "large", "last", "middle", "new", "next", "nice", "old", "pretty", "quiet", "red", "rich", "safe", "same", "small", "some", "ugly", "warm", "wet", "white", "wrong", "yellow");
const adjective5conceptK = new Array("모든", "어떤", "나쁜", "기본적인", "큰", "특정한", "분명한", "멋진", "죽은", "깊은", "어려운", "더러운", "쉬운", "유명한", "환상적인", "좋아하는", "좋은", "좋은", "위대한", "중요한", "작은", "새로운", "멋진", "같은", "작은", "일부", "사실", "잘못된");
const adjective5conceptE = new Array("all", "any", "bad", "basic", "big", "certain", "clear", "cool", "dead", "deep", "difficult", "dirty", "easy", "famous", "fantastic", "favorite", "fine", "good", "great", "important", "little", "new", "nice", "same", "small", "some", "true", "wrong");
const adjectiveCountableK1 = new Array("조금", "약간", "많이", "거의 없는");
const adjectiveCountableE1 = new Array("some, any", "some, any", "a lot of, lots of, plenty of, many, much", "a few, few, a little, little");
const adjectiveCountableE2 = new Array("some", "any", "a lot of", "lots of", "plenty of", "many", "much", "a few", "few", "a little", "little");


const function0103K = new Array("하나 + 자음", "하나 + b", "하나 + c", "하나 + d", "하나 + f", "하나 + g", "하나 + h", "하나 + j", "하나 + k", "하나 + l", "하나 + m", "하나 + n", "하나 + p", "하나 + q", "하나 + r", "하나 + s", "하나 + t", "하나 + v", "하나 + w", "하나 + x", "하나 + y", "하나 + z", "하나 + 모음", "하나 + a", "하나 + e", "하나 + i", "하나 + o", "하나 + u");
const function0103E = new Array("a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "a + ", "an +", "an +", "an +", "an +", "an +", "an +");
const function0105K = new Array("물고기 한 마리 - 물고기들", "양 한 마리 - 양들", "사슴 한 마리 - 사슴들", "남자 한 명 - 남자들", "여자 한 명 - 여자들", "발 하나 - 발들", "이(빨) 하나 - 이(빨)들", "거위 한 마리 - 거위들", "쥐 한 마리 - 쥐들", "황소 한 마리 - 황소들", "어린이 한 명 - 어린이들", "사람 한 명 - 사람들");
const function0105E = new Array("a fish - fish", "a sheep - sheep", "a deer -deer", "a man - men", "a woman - women", "a foot - feet", "a tooth - teeth", "a goose - geese", "a mouse - mice", "an ox - oxen", "a child - children", "a person - people");
const function0107K = new Array("잔(cold drink)", "잔(hot drink) ", "조각/점", "얇은 조각", "그릇", "병", "덩어리", "무게(파운드)");
const function0107E = new Array("glass", "cup", "piece", "slice", "bowl", "bottle", "loaf", "pound");

const uncountableNounK = new Array('물', '쥬스', '우유', '커피', '티');

const adjectiveFractionK = new Array("1/2", "1/4", "1/3", "2/3", "4 5/7");
const adjectiveFractionE = new Array("one half, a half", "one quarter, a quarter", "one third", "two thirds", "four and five sevenths");
const adjectiveCardinalOrdinalK = new Array("하나(의)", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉", "열", "첫 번째(의)", "두 번째", "세 번째", "네 번째", "다섯 번째", "여섯 번째", "일곱 번째", "여덟 번째", "아홉 번째", "열 번째");
const adjectiveCardinalOrdinal2K = new Array("한", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉", "열", "첫 번째(의)", "두 번째", "세 번째", "네 번째", "다섯 번째", "여섯 번째", "일곱 번째", "여덟 번째", "아홉 번째", "열 번째");
const adjectiveCardinalOrdinalE = new Array("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth");
const adjectiveCardinalOrdinal = new Array("기수", "기수", "기수", "기수", "기수", "기수", "기수", "기수", "기수", "기수", "서수", "서수", "서수", "서수", "서수", "서수", "서수", "서수", "서수", "서수");

const adverbOfFrequencyK = new Array('항상', '보통', '종종', '가끔', '거의 ~않은', '거의 ~않은', '거의 ~않은', '절대 ~않은');
const adverbOfFrequencyE = new Array('always', 'usually', 'often', 'sometimes', 'hardly, rarely, seldom', 'hardly, rarely, seldom', 'hardly, rarely, seldom', 'never');
const adverbTooEitherNeitherK = new Array('역시, 또한 (긍정문)', '역시, 또한 (부정문)', '역시, 또한 (not + either)');
const adverbTooEitherNeitherE = new Array('too', 'either', 'neither');
const sameInAdjectvieAndAdverbK = new Array('좋은', '건강한, 잘', '빠른, 빠르게', '이른, 일찍', '늦은, 늦게', '마지막의, 마지막으로', '오래된, 오래', '바른, 바로, 곧장', '높은, 높게', '어려운, 딱딱한, 열심히', '예쁜, 꽤');
const sameInAdjectvieAndAdverbE = new Array('good', 'well', 'fast', 'early', 'late', 'last', 'long', 'right', 'high', 'hard', 'pretty');

const adverbSimilarK = new Array("늦게", "가까이", "높게", "열심히", "짧은", "최근에", "거의", "매우", "거의 ~않은", "곧");
const adverbSimilarE = new Array("late", "near", "high", "hard", "short", "lately", "nearly", "highly", "hardly", "shortly");
const adjectiveConfusingK = new Array("남자다운", "상냥한", "사랑스러운", "값비싼", "매일, 매주", "매월, 매년");
const adjectiveConfusingE = new Array("manly", "friendly", "lovely", "costly", "daily, weekly,", "monthly, yearly");
const adverbAlreadyYetK = new Array("이미, 벌써", "아직, 벌써, 이제", "아직, 여전히", "매우", "훨씬", "그 밖에", "조차");
const adverbAlreadyYetE = new Array("already", "yet", "still", "very ", "much", "else ", "even ");
const adverbWithVerbK = new Array("입다 ", "미루다 ", "태워오다 ", "깨우다 ", "기르다 ", "취소하다 ", "수행하다 ", "포기하다 ", "찾다 ", "보충하다 ", "입어보다 ", "켜다/끄다 ");
const adverbWithVerbE = new Array("put it on", "put it off", "pick it up", "wake it up", "bring it up", "call it off", "carry it out", "give it up", "look it up", "make it up", "try it on", "turn it on/off");

const PRONOUN_DEMONSTRATIVE_K = new Array("이것", "저것", "그것", "이것들", "저것들");
const PRONOUN_DEMONSTRATIVE_E = new Array("this", "that", "it", "these", "those");
const PRONOUN_DEMONSTRATIVE_2K = new Array("소개, 전화할 때", "앞에 나온 명사", "(~하는) 사람들", "이", "저", "이 정도로", "저 정도로");
const PRONOUN_DEMONSTRATIVE_2E = new Array("this", "that / those ", "those (who) ", "this, these", "that, those", "this", "that");
const IMPERSONAL_SUBJECT_K = new Array("비인칭주어 it ( 날짜 )", "비인칭주어 it ( 날씨 )", "비인칭주어 it ( 요일 )", "비인칭주어 it ( 거리 )", "비인칭주어 it ( 시간 )", "비인칭주어 it ( 계절 )", "비인칭주어 it ( 명암 )");
const IMPERSONAL_SUBJECT_E = new Array("It is July 30th.", "It is sunny.", "It is Sunday.", "It is far.", "It is 7 o’clock.", "It is winter.", "It is dark.");
const PRONOUN_PERSONAL_SUBJECTIVE_3K = new Array("나", "너", "그", "그녀", "그것", "우리", "너희들", "그들", "그것들");
const PRONOUN_PERSONAL_SUBJECTIVE_2K = new Array("내가", "네가", "그가", "그녀가", "그것이", "우리들이", "너희들이", "그들이", "그것들이");
const PRONOUN_PERSONAL_SUBJECTIVE_K = new Array("나는, 내가", "너는, 네가", "그는, 그가", "그녀는, 그녀가", "그것은, 그것이", "우리들은, 우리들이", "너희들은, 너희들이", "그들은, 그들이", "그것들은, 그것들이");
const PRONOUN_PERSONAL_SUBJECTIVE_E = new Array("I", "You", "He", "She", "It", "We", "You", "They", "They");
const PRONOUN_PERSONAL_SUBJECTIVE_SMALL_E = new Array("I", "you", "he", "she", "it", "we", "you", "they", "they");
const PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_K = new Array("나는, 내가 ~이다", "너는, 네가 ~이다", "그는, 그가 ~이다", "그녀는, 그녀가 ~이다", "그것은, 그것이 ~이다", "우리들은, 우리들이 ~이다", "너희들은, 너희들이 ~이다", "그들은, 그들이 ~이다", "그것들은, 그것들이 ~이다");
const PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_E = new Array("I am", "You are", "He is", "She is", "It is", "We are", "You are", "They are", "They are");
const PRONOUN_PERSONAL_POSSESSIVE_K = new Array();
const PRONOUN_PERSONAL_POSSESSIVE_E = new Array();
const PRONOUN_PERSONAL_POSSESSIVE_2K = new Array("나의", "너의", "그의", "그녀의", "그것의", "우리들의", "너희들의", "그들의, 그것들의");
const PRONOUN_PERSONAL_POSSESSIVE_2E = new Array("my", "your", "his", "her", "its", "our", "your", "their");
const PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_K = new Array("나의 것, 내꺼", "너의, 니꺼", "그의 것", "그녀의 것", "그것의 것", "우리들의 것", "너희들의 것", "그들의 것", "그것들의 것");
const PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_E = new Array("mine", "yours", "his", "hers", "its", "ours", "yours", "theirs", "theirs");
const PRONOUN_PERSONAL_OBJECTIVE_K = new Array("나를, 나에게", "너를, 너에게", "그를, 그에게", "그녀를, 그녀에게", "그것을, 그것에게", "우리들을, 우리들에게", "너희들을, 너희들에게", "그들을, 그들에게");
const PRONOUN_PERSONAL_OBJECTIVE_E = new Array("me", "you", "him", "her", "it", "us", "you", "them", "them");
const PRONOUN_PERSONAL_ALL_K = new Array();
const PRONOUN_PERSONAL_ALL_E = new Array();
const PRONOUN_QUESTION_ANSWER_K = new Array("I 로 물어보면?", "You 로 물어보면?", "We 로 물어보면?", "He 는?", "She 는?", "It 는?", "They 는?");
const PRONOUN_QUESTION_ANSWER_E = new Array("You", "I / We", "We / You", "He", "She", "It", "They");
const PRONOUN_REFLEXIVE_K = new Array("- 자신/들", "나자신", "너자신", "그자신", "그녀자신", "그것자신", "우리자신들", "너희자신들", "그들자신들");
const PRONOUN_REFLEXIVE_E = new Array("-self/selves", "myself", "yourself", "himself", "herself", "itself", "ourselves", "yourselves", "themselves");
const PRONOUN_REFLEXIVE_USAGE_K = new Array("재귀용법", "강조용법");
const PRONOUN_REFLEXIVE_USAGE_E = new Array("(목적어자리) 생략 X ", "(‘직접’이라해석) 생략 O ");
const PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_K = new Array("홀로 (bye~bye~)", "혼자 힘으로, 스스로", "저절로", "본래", "마음껏 먹다", "혼잣말하다", "즐기다");
const PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_E = new Array("by oneself", "for oneself", "of itself", "in oneself", "help oneself", "talk/say to oneself", "enjoy oneself");
const PRONOUN_INDEFINITE_K = new Array();
const PRONOUN_INDEFINITE_E = new Array();
const PRONOUN_INDEFINITE_2K = new Array("앞에 나온 명사와 같은 종류의 하나", "앞에 나온 명사와 같은 종류 두 개 이상", "일반 사람 ", "특정한 그것 하나");
const PRONOUN_INDEFINITE_2E = new Array("one", "ones", "one", "it");
const PRONOUN_INDEFINITE_3K = new Array("긍정, 권유", "부정, 의문, 조건");
const PRONOUN_INDEFINITE_3E = new Array("Some", "Any");
const PRONOUN_INDEFINITE_4K = new Array("2 아무거나 하나, 나머지 하나", "3 아무거나 하나, 또 다른 하나, 나머지 하나", "여럿 -몇몇은, 다른 몇몇은", "여럿 -몇몇은, 나머지 모두는");
const PRONOUN_INDEFINITE_4E = new Array("one, the other", "one, another, the other", "some, others", "some, the others");
const PRONOUN_INDEFINITE_5K = new Array("서로서로 (2명)", "서로서로 (3명 이상)");
const PRONOUN_INDEFINITE_5E = new Array("each other", "one another");
const PRONOUN_INDEFINITE_6K = new Array("단명 단동 (모두)", "단명 단동 (각각)", "복명 단동 (각각)", "단명 단동 (셀수 X)", "복명 복동 (셀수 O)", "복명 복동 (둘다)", "~마다, ~에 한 번", "~마다, ~에 한 번");
const PRONOUN_INDEFINITE_6E = new Array("every ", "each ", "each of ", "all (of) ", "all (of) ", "both (of) ", "every 서수 단명", "every 기수 복명");
const PRONOUN_INDEFINITE_7K = new Array("둘 중 어느쪽이든", "둘 중 어느쪽이든", "둘 다 아닌", "둘 다 아닌", "아무(것)도 아닌", "아무(것)도 아닌");
const PRONOUN_INDEFINITE_7E = new Array("either 단명 단동 ", "either of 복명 단동 ", "neither 단명 단동 ", "neither of 복명 단동", "none of 단명 단동 (셀수 X)", "none of 복명 단동");
const PRONOUN_COMPLETE_PARTIAL_NEGATION_K = new Array("전혀 아니다, 아무도 ~아니다", "모두가 ~한 것은 아니다, 항상 ~한 것은 아니다");
const PRONOUN_COMPLETE_PARTIAL_NEGATION_E = new Array("no, none, nothing, nobody, neither, not(never) ~ any", "부정어 + 전체를 나타내는 부사, 부정어 + all every both, 부정어 + always completely, entirely, absolutely, necessarily");
const PRONOUN_INTERROGATIVE_K = new Array("누구", "무엇", "어느 것");
const PRONOUN_INTERROGATIVE_E = new Array("Who", "What", "Which");

const conjunctionCoordinateK = new Array("그리고, 그래서", "앞뒤 내용이 대등할 때", "그러나, 하지만", "앞뒤 내용이 반대될 때", "혹은, 또는", "둘 이상 중에서 선택할 때", "그래서, 그 결과", "앞-원인, 뒤-결과");
const conjunctionCoordinateE = new Array("and", "and", "but", "but", "or", "or", "so", "so");
const conjunctionSubordinateNounK = new Array("~하는 것", "~인지 아닌지");
const conjunctionSubordinateNounE = new Array("that ", "if/whether ~ (or not)");
const conjunctionSubordinateAdverbK = new Array("SV 할 때 SV 한다", "SV 이후로 SV", "SV 동안에 SV", "SV 전에 SV", "SV 후에 SV", "SV 하자마자 SV", "SV 때까지 SV");
const conjunctionSubordinateAdverbE = new Array("SV when, as SV ", "SV since SV ", "SV while SV ", "SV before SV ", "SV after SV ", "SV as soon as SV ", "SV until/till SV ");
const conjunctionSubordinateAdverb2K = new Array("~때문에", "만약~라면", "만약~하지 않는다면", "~에도 불구하고 ", "~하기 위해서", "매우 (원인)해서 (결과)하다");
const conjunctionSubordinateAdverb2E = new Array("because since as", "if", "unless (= if ~ not)", "even though, even if", "so that, in order that", "so 형/부(원인) that (결과)");
const conjunctionRelativeK = new Array("A B 둘 다", "A B 둘 중 하나", "A B 둘 다 아닌", "A뿐만 아니라 B도", "A가 아니라 B");
const conjunctionRelativeE = new Array("both A and B ", "either A or B", "neither A nor B", "not only A but (also) B, B as well as A", "not A but B");
const conjunctiveAdverb1K = new Array("그러나", "반대로", "반면", "그와 대조적으로", "게다가", "요약하면", "그렇지 않으면", "예를 들면");
const conjunctiveAdverb1E = new Array("however", "on the contrary", "on the other hand", "by contrast", "besides, moreover, furthermore, in addition", "in short", "otherwise", "for example, for instance");
const conjunctiveAdverb2K = new Array("그러므로", "결국", "그 결과", "결과적으로", "사실", "특히", "다시 말해서", "그런데", "대신에");
const conjunctiveAdverb2E = new Array("so, therefore, hence", "finally", "consequently", "as a result", "in fact, as a matter of fact", "above all", "in other words", "by the way", "instead");

const PREPOSITION_TIME_K = new Array("– 긴 시간/하루의 때에", "in the morning", "- 세기 연도 계절 월에", "– 요일 날짜 특정한 날에", "– 정확한 때에", "- 구체적 시간, 특정한 시점에");
const PREPOSITION_TIME_E = new Array("in", "in", "in", "on ", "at", "at");
const PREPOSITION_TIME_ETC_K = new Array("경에, 무렵에", "전에", "후에", "동안에", "(구체적 숫자)", "동안에 ", "(특정기간)", "~까지(계속)", "~까지(완료)", "부터 ", "이후로");
const PREPOSITION_TIME_ETC_E = new Array("around ", "before ", "after ", "for ", "", "during ", "", "until ", "by ", "from", "since");
const PREPOSITION_PLACE_K = new Array("– 넓은 장소, 내부 안에", "- 도시 국가, 건물, 사물 내부", "– 표면에 접촉한 상태 위에", "– 비교적 좁은 장소", "- 하나의 지점에");
const PREPOSITION_PLACE_E = new Array("in", "in", "on ", "at", "at");
const PREPOSITION_PLACE_ETC_K = new Array("근처에", "위에 (떨어져)", "아래 (떨어져)", "~로(목적지)", "뒤에");
const PREPOSITION_PLACE_ETC_E = new Array("near", "over", "under", "to", "behind");
const PREPOSITION_POSITION_K = new Array("위에(막연히)", "아래(막연히)");
const PREPOSITION_POSITION_E = new Array("above", "below");
const PREPOSITION_DIRECTION_K = new Array("안으로", "밖으로", "~으로(~행의)", "쪽으로", "가로질러", "통과하여", "따라", "주위에", "위로", "아래로");
const PREPOSITION_DIRECTION_E = new Array("into ", "out of", "for ", "toward ", "across ", "through ", "along ", "around ", "up", "down",);
const PREPOSITION_ETC_K = new Array("~을 타고, ~으로(수단)", "~을 가지고(도구), ~와 함께", "~없이", "~와 같이, 처럼", "앞에 ", "옆에 ", "맞은편에 ", "A부터 B까지", "A와 B 사이에", "중에", "쪽으로", "향해서");
const PREPOSITION_ETC_E = new Array("by", "with ", "without ", "like ", "in front of", "next to, by", "across from", "from A to B", "between A and B", "among ", "to", "for");

const articleK = new Array('하나의 ', '하나의 ', '그 ');
const articleE = new Array('a ', 'an ', 'the ');
const ARTICLE_K = new Array('하나의 + 자음', '하나의 + 모음', '그 ');
const ARTICLE_E = new Array('a ', 'an ', 'the ');
const ARTICLE_INFINITIVE_K = new Array("① 막연한(아무거나) 하나", "② 개수 하나", "③ ~당, ~마다 (per)", "④ 종족대표 (단수)", "⑤ 어떤", "⑥ 약간");
const ARTICLE_INFINITIVE_E = new Array("a/an", "a/an", "a/an", "a/an", "a/an", "a/an");
const ARTICLE_THE_NUMERIC_K = new Array();
const ARTICLE_THE_NUMERIC_E = new Array();
const ARTICLE_THE_K = new Array("① 유일한 것 말할 때", "② 너도 알고 나도 아는 것 말할 때", "③ 했던 말 또 할 때", "④ 동서남북 말할 때", "⑤ 제한/한정 수식될 때", "⑥ 악기 이름 말할 때", "⑦ 서수, 최상급 말할 때", "⑧ the only, the very, the same", "⑨ 종족대표 말할 때");
const ARTICLE_THE_E = new Array("the", "the", "the", "the", "the", "the", "the", "the", "the");
const NO_ARTICLE_K = new Array("① 식사 / 운동 / 학과(과목) 앞에", "② 고유한 이름 앞에", "(나라, 도시, 사람, 등)", "③ By 교통수단", "④ 소유격", "⑤ 건물 본래 목적", "⑥ 신분 / 관직");
const NO_ARTICLE_E = new Array("No a/an/the (무관사)", "No a/an/the (무관사)", "No a/an/the (무관사)", "No a/an/the (무관사)", "No a/an/the (무관사)", "No a/an/the (무관사)", "No a/an/the (무관사)");

const TENSE_K = new Array();
const TENSE_PRESENT_K = new Array();
const TENSE_PAST_K = new Array();
const TENSE_PAST_2K = new Array();
const SENTENCE_NEGATIVE_INTERROGATIVE_K = new Array();
const TENSE_CONTINUOUS_K = new Array();
const RULE_OF_ING_K = new Array();
const VERB_NOT_CONTINUOUS_K = new Array();
const TENSE_CONTINUOUS_2K = new Array();
const TENSE_FUTURE_K = new Array();
const TENSE_FUTURE_2K = new Array();
const TENSE_PRESENT_PERFECT_K = new Array();
const PRESENT_PERFECT_USAGE_K = new Array();
const PRESENT_PERFECT_USAGE_2K = new Array();
const PAST_VS_PRESENT_PERFECT_K = new Array();
const PAST_PERFECT_AND_FUTURE_PERFECT_K = new Array();
const PERFECT_CONTINUOUS_K = new Array();



const AUXILIARY_CAN_K = new Array("행동할 수 있다", "조언할 수 있다", "동의할 수 있다", "도착할 수 있다", "물어볼 수 있다", "구울 수 있다", "시작할 수 있다", "믿을 수 있다", "깨뜨릴 수 있다", "탈 수 있다", "보살필 수 있다", "바꿀 수 있다", "확인할 수 있다", "선택할 수 있다", "오를 수 있다", "올 수 있다", "요리할 수 있다", "복사할 수 있다", "건널 수 있다", "울 수 있다", "자를 수 있다", "춤출 수 있다", "결정할 수 있다", "죽을 수 있다", "할 수 있다", "그릴 수 있다", "꿈꿀 수 있다", "마실 수 있다", "운전할 수 있다", "떨어뜨릴 수 있다", "먹을 수 있다", "끝날 수 있다", "들어갈 수 있다", "운동할 수 있다", "실패할 수 있다", "떨어질 수 있다", "느낄 수 있다", "싸울 수 있다", "마칠 수 있다", "고정할 수 있다", "날 수 있다", "집중할 수 있다", "잊을 수 있다", "형성할 수 있다", "튀길 수 있다", "갈 수 있다", "자랄 수 있다", "추측할 수 있다", "걸을 수 있다", "도울 수 있다", "칠 수 있다", "잡을 수 있다", "희망할 수 있다", "서두를 수 있다", "참여할 수 있다", "계속할 수 있다", "찰 수 있다", "알 수 있다", "거짓말 할 수 있다", "들을 수 있다", "살 수 있다", "볼 수 있다", "사랑할 수 있다", "움직일 수 있다", "열 수 있다", "통과할 수 있다", "지불할 수 있다", "놀 수 있다", "밀할 수 있다", "읽을할 수 있다", "돌아갈 수 있다", "달릴 수 있다", "노래할 수 있다", "앉을 수 있다", "잘 수 있다", "냄새날 수 있다", "미소지을 수 있다", "말할 수 있다", "일어설 수 있다", "시작할 수 있다", "머무를 수 있다", "멈출 수 있다", "수영할 수 있다", "말할 수 있다", "이야기할 수 있다", "여행할 수 있다", "노력할 수 있다", "돌릴 수 있다", "방문할 수 있다", "기다릴 수 있다", "깰 수 있다", "걸을 수 있다", "씻을 수 있다", "입을 수 있다", "이길 수 있다", "바랄 수 있다", "일할 수 있다", "걱정할 수 있다", "쓸 수 있다", "울릴 수 있다", "가라앉을 수 있다", "먹일 수 있다", "쏠 수 있다", "이끌 수 있다", "기다릴 수 있다", "바닥을 쓸 수 있다", "울 수 있다", "떠날 수 있다", "구부릴 수 있다", "잃을 수 있다", "감을 수 있다", "미끄러질 수 있다", "팔 수 있다", "빛날 수 있다", "돌 수 있다", "때릴 수 있다", "깨울 수 있다", "낳을 수 있다", "찢을 수 있다", "얼 수 있다", "훔칠 수 있다", "불 수 있다", "던질 수 있다", "탈 수 있다", "오를 수 있다", "흔들 수 있다");
const AUXILIARY_MAY_K = new Array("행동할지도 모른다", "조언할지도 모른다", "동의할지도 모른다", "도착할지도 모른다", "물어볼 수 있다", "구울 수 있다", "시작할지도 모른다", "믿을 수 있다", "깨뜨릴 수 있다", "탈 수 있다", "보살필 수 있다", "바꿀 수 있다", "확인할지도 모른다", "선택할지도 모른다", "오를 수 있다", "올 수 있다", "요리할지도 모른다", "복사할지도 모른다", "건널 수 있다", "울 수 있다", "자를 수 있다", "춤출 수 있다", "결정할지도 모른다", "죽을 수 있다", "할지도 모른다", "그릴 수 있다", "꿈꿀 수 있다", "마실 수 있다", "운전할지도 모른다", "떨어뜨릴 수 있다", "먹을 수 있다", "끝날 수 있다", "들어갈 수 있다", "운동할지도 모른다", "실패할지도 모른다", "떨어질 수 있다", "느낄 수 있다", "싸울 수 있다", "마칠 수 있다", "고정할지도 모른다", "날 수 있다", "집중할지도 모른다", "잊을 수 있다", "형성할지도 모른다", "튀길 수 있다", "갈 수 있다", "자랄 수 있다", "추측할지도 모른다", "걸을 수 있다", "도울 수 있다", "칠 수 있다", "잡을 수 있다", "희망할지도 모른다", "서두를 수 있다", "참여할지도 모른다", "계속할지도 모른다", "찰 수 있다", "알 수 있다", "거짓말 할지도 모른다", "들을 수 있다", "살 수 있다", "볼 수 있다", "사랑할지도 모른다", "움직일 수 있다", "열 수 있다", "통과할지도 모른다", "지불할지도 모른다", "놀 수 있다", "밀할지도 모른다", "읽을할지도 모른다", "돌아갈 수 있다", "달릴 수 있다", "노래할지도 모른다", "앉을 수 있다", "잘 수 있다", "냄새날 수 있다", "미소지을 수 있다", "말할지도 모른다", "일어설 수 있다", "시작할지도 모른다", "머무를 수 있다", "멈출 수 있다", "수영할지도 모른다", "말할지도 모른다", "이야기할지도 모른다", "여행할지도 모른다", "노력할지도 모른다", "돌릴 수 있다", "방문할지도 모른다", "기다릴 수 있다", "깰 수 있다", "걸을 수 있다", "씻을 수 있다", "입을 수 있다", "이길 수 있다", "바랄 수 있다", "일할지도 모른다", "걱정할지도 모른다", "쓸 수 있다", "울릴 수 있다", "가라앉을 수 있다", "먹일 수 있다", "쏠 수 있다", "이끌 수 있다", "기다릴 수 있다", "바닥을 쓸 수 있다", "울 수 있다", "떠날 수 있다", "구부릴 수 있다", "잃을 수 있다", "감을 수 있다", "미끄러질 수 있다", "팔 수 있다", "빛날 수 있다", "돌 수 있다", "때릴 수 있다", "깨울 수 있다", "낳을 수 있다", "찢을 수 있다", "얼 수 있다", "훔칠 수 있다", "불 수 있다", "던질 수 있다", "탈 수 있다", "오를 수 있다", "흔들 수 있다");
const AUXILIARY_WILL_K = new Array("행동할 것이다", "조언할 것이다", "동의할 것이다", "도착할 것이다", "물어볼 것이다", "구울 것이다", "시작할 것이다", "믿을 것이다", "깨뜨릴 것이다", "탈 것이다", "보살필 것이다", "바꿀 것이다", "확인할 것이다", "선택할 것이다", "오를 것이다", "올 것이다", "요리할 것이다", "복사할 것이다", "건널 것이다", "울 것이다", "자를 것이다", "춤출 것이다", "결정할 것이다", "죽을 것이다", "할 것이다", "그릴 것이다", "꿈꿀 것이다", "마실 것이다", "운전할 것이다", "떨어뜨릴 것이다", "먹을 것이다", "끝날 것이다", "들어갈 것이다", "운동할 것이다", "실패할 것이다", "떨어질 것이다", "느낄 것이다", "싸울 것이다", "마칠 것이다", "고정할 것이다", "날 것이다", "집중할 것이다", "잊을 것이다", "형성할 것이다", "튀길 것이다", "갈 것이다", "자랄 것이다", "추측할 것이다", "걸을 것이다", "도울 것이다", "칠 것이다", "잡을 것이다", "희망할 것이다", "서두를 것이다", "참여할 것이다", "계속할 것이다", "찰 것이다", "알 것이다", "거짓말 것이다", "들을 것이다", "살 것이다", "볼 것이다", "사랑할 것이다", "움직일 것이다", "열 것이다", "통과할 것이다", "지불할 것이다", "놀 것이다", "밀할 것이다", "읽을할 것이다", "돌아갈 것이다", "달릴 것이다", "노래할 것이다", "앉을 것이다", "잘 것이다", "냄새날 것이다", "미소지을 것이다", "말할 것이다", "일어설 것이다", "시작할 것이다", "머무를 것이다", "멈출 것이다", "수영할 것이다", "말할 것이다", "이야기할 것이다", "여행할 것이다", "노력할 것이다", "돌릴 것이다", "방문할 것이다", "기다릴 것이다", "깰 것이다", "걸을 것이다", "씻을 것이다", "입을 것이다", "이길 것이다", "바랄 것이다", "일할 것이다", "걱정할 것이다", "쓸 것이다", "울릴 것이다", "가라앉을 것이다", "먹일 것이다", "쏠 것이다", "이끌 것이다", "기다릴 것이다", "바닥을 것이다", "울 것이다", "떠날 것이다", "구부릴 것이다", "잃을 것이다", "감을 것이다", "미끄러질 것이다", "팔 것이다", "빛날 것이다", "돌 것이다", "때릴 것이다", "깨울 것이다", "낳을 것이다", "찢을 것이다", "얼 것이다", "훔칠 것이다", "불 것이다", "던질 것이다", "탈 것이다", "오를 것이다", "흔들 것이다");
const AUXILIARY_MUST_K = new Array("행동해야 한다", "조언해야 한다", "동의해야 한다", "도착해야 한다", "물어야 한다", "굽다해야 한다", "시작해야 한다", "믿어야 한다", "깨뜨려야 한다", "태워야 한다", "보살펴야 한다", "바꿔야 한다", "확인해야 한다", "선택해야 한다", "올라야 한다", "와야 한다", "요리해야 한다", "복사해야 한다", "건너야 한다", "울어야 한다", "잘라야 한다", "춤춰야 한다", "결정해야 한다", "죽어야 한다", "해야 한다", "그려야 한다", "꿈꿔야 한다", "마셔야 한다", "운전해야 한다", "떨어져야 한다", "먹어야 한다", "끝나야 한다", "들어가야 한다", "운동해야 한다", "실패해야 한다", "떨어져야 한다", "느껴야 한다", "싸워야 한다", "마쳐야 한다", "고정해야 한다", "날아야 한다", "집중해야 한다", "잊어야 한다", "형성해야 한다", "튀겨야 한다", "가야 한다", "자라야 한다", "추측해야 한다", "걸어야 한다", "도와야 한다", "쳐야 한다", "잡아야 한다", "희망해야 한다", "서둘러야 한다", "참여해야 한다", "계속해야 한다", "차야 한다", "알아야 한다", "거짓말해야 한다", "들어야 한다", "살아야 한다", "봐야 한다", "사랑해야 한다", "움직여야 한다", "열어야 한다", "통과해야 한다", "지불해야 한다", "놀아야 한다", "밀어야 한다", "읽어야 한다", "돌아가야 한다", "달려야 한다", "노래해야 한다", "앉아야 한다", "자야 한다", "냄새맡아야 한다", "미소지어야 한다", "말해야 한다", "일어서야 한다", "시작해야 한다", "머물러야 한다", "멈춰야 한다", "수영해야 한다", "말해야 한다", "이야기해야 한다", "여행해야 한다", "노력해야 한다", "돌려야 한다", "방문해야 한다", "기다려야 한다", "깨야 한다", "걸어야 한다", "씻어야 한다", "입어야 한다", "이겨야 한다", "바라야 한다", "일해야 한다", "걱정해야 한다", "써야 한다", "울려야 한다", "가라앉아야 한다", "먹여야 한다", "쏘아야 한다", "이끌어야 한다", "기어야 한다", "쓸어야 한다", "울어야 한다", "떠나야 한다", "구부려야 한다", "잃어야 한다", "감아야 한다", "미끄러져야 한다", "파야 한다", "빛나야 한다", "돌려야 한다", "때려야 한다", "깨우쳐야 한다", "낳아야 한다", "찢어야 한다", "얼려야 한다", "훔쳐야 한다", "불어야 한다", "던져야 한다", "타야 한다", "올라야 한다", "흔들어야 한다");
const AUXILIARY_HaveTo_K = new Array("행동해야 한다", "조언해야 한다", "동의해야 한다", "도착해야 한다", "물어야 한다", "굽다해야 한다", "시작해야 한다", "믿어야 한다", "깨뜨려야 한다", "태워야 한다", "보살펴야 한다", "바꿔야 한다", "확인해야 한다", "선택해야 한다", "올라야 한다", "와야 한다", "요리해야 한다", "복사해야 한다", "건너야 한다", "울어야 한다", "잘라야 한다", "춤춰야 한다", "결정해야 한다", "죽어야 한다", "해야 한다", "그려야 한다", "꿈꿔야 한다", "마셔야 한다", "운전해야 한다", "떨어져야 한다", "먹어야 한다", "끝나야 한다", "들어가야 한다", "운동해야 한다", "실패해야 한다", "떨어져야 한다", "느껴야 한다", "싸워야 한다", "마쳐야 한다", "고정해야 한다", "날아야 한다", "집중해야 한다", "잊어야 한다", "형성해야 한다", "튀겨야 한다", "가야 한다", "자라야 한다", "추측해야 한다", "걸어야 한다", "도와야 한다", "쳐야 한다", "잡아야 한다", "희망해야 한다", "서둘러야 한다", "참여해야 한다", "계속해야 한다", "차야 한다", "알아야 한다", "거짓말해야 한다", "들어야 한다", "살아야 한다", "봐야 한다", "사랑해야 한다", "움직여야 한다", "열어야 한다", "통과해야 한다", "지불해야 한다", "놀아야 한다", "밀어야 한다", "읽어야 한다", "돌아가야 한다", "달려야 한다", "노래해야 한다", "앉아야 한다", "자야 한다", "냄새맡아야 한다", "미소지어야 한다", "말해야 한다", "일어서야 한다", "시작해야 한다", "머물러야 한다", "멈춰야 한다", "수영해야 한다", "말해야 한다", "이야기해야 한다", "여행해야 한다", "노력해야 한다", "돌려야 한다", "방문해야 한다", "기다려야 한다", "깨야 한다", "걸어야 한다", "씻어야 한다", "입어야 한다", "이겨야 한다", "바라야 한다", "일해야 한다", "걱정해야 한다", "써야 한다", "울려야 한다", "가라앉아야 한다", "먹여야 한다", "쏘아야 한다", "이끌어야 한다", "기어야 한다", "쓸어야 한다", "울어야 한다", "떠나야 한다", "구부려야 한다", "잃어야 한다", "감아야 한다", "미끄러져야 한다", "파야 한다", "빛나야 한다", "돌려야 한다", "때려야 한다", "깨우쳐야 한다", "낳아야 한다", "찢어야 한다", "얼려야 한다", "훔쳐야 한다", "불어야 한다", "던져야 한다", "타야 한다", "올라야 한다", "흔들어야 한다");
const AUXILIARY_SHOULD_K = new Array("행동해야 한다", "조언해야 한다", "동의해야 한다", "도착해야 한다", "물어야 한다", "굽다해야 한다", "시작해야 한다", "믿어야 한다", "깨뜨려야 한다", "태워야 한다", "보살펴야 한다", "바꿔야 한다", "확인해야 한다", "선택해야 한다", "올라야 한다", "와야 한다", "요리해야 한다", "복사해야 한다", "건너야 한다", "울어야 한다", "잘라야 한다", "춤춰야 한다", "결정해야 한다", "죽어야 한다", "해야 한다", "그려야 한다", "꿈꿔야 한다", "마셔야 한다", "운전해야 한다", "떨어져야 한다", "먹어야 한다", "끝나야 한다", "들어가야 한다", "운동해야 한다", "실패해야 한다", "떨어져야 한다", "느껴야 한다", "싸워야 한다", "마쳐야 한다", "고정해야 한다", "날아야 한다", "집중해야 한다", "잊어야 한다", "형성해야 한다", "튀겨야 한다", "가야 한다", "자라야 한다", "추측해야 한다", "걸어야 한다", "도와야 한다", "쳐야 한다", "잡아야 한다", "희망해야 한다", "서둘러야 한다", "참여해야 한다", "계속해야 한다", "차야 한다", "알아야 한다", "거짓말해야 한다", "들어야 한다", "살아야 한다", "봐야 한다", "사랑해야 한다", "움직여야 한다", "열어야 한다", "통과해야 한다", "지불해야 한다", "놀아야 한다", "밀어야 한다", "읽어야 한다", "돌아가야 한다", "달려야 한다", "노래해야 한다", "앉아야 한다", "자야 한다", "냄새맡아야 한다", "미소지어야 한다", "말해야 한다", "일어서야 한다", "시작해야 한다", "머물러야 한다", "멈춰야 한다", "수영해야 한다", "말해야 한다", "이야기해야 한다", "여행해야 한다", "노력해야 한다", "돌려야 한다", "방문해야 한다", "기다려야 한다", "깨야 한다", "걸어야 한다", "씻어야 한다", "입어야 한다", "이겨야 한다", "바라야 한다", "일해야 한다", "걱정해야 한다", "써야 한다", "울려야 한다", "가라앉아야 한다", "먹여야 한다", "쏘아야 한다", "이끌어야 한다", "기어야 한다", "쓸어야 한다", "울어야 한다", "떠나야 한다", "구부려야 한다", "잃어야 한다", "감아야 한다", "미끄러져야 한다", "파야 한다", "빛나야 한다", "돌려야 한다", "때려야 한다", "깨우쳐야 한다", "낳아야 한다", "찢어야 한다", "얼려야 한다", "훔쳐야 한다", "불어야 한다", "던져야 한다", "타야 한다", "올라야 한다", "흔들어야 한다");
const AUXILIARY_OughtTo_K = new Array("행동해야 한다", "조언해야 한다", "동의해야 한다", "도착해야 한다", "물어야 한다", "굽다해야 한다", "시작해야 한다", "믿어야 한다", "깨뜨려야 한다", "태워야 한다", "보살펴야 한다", "바꿔야 한다", "확인해야 한다", "선택해야 한다", "올라야 한다", "와야 한다", "요리해야 한다", "복사해야 한다", "건너야 한다", "울어야 한다", "잘라야 한다", "춤춰야 한다", "결정해야 한다", "죽어야 한다", "해야 한다", "그려야 한다", "꿈꿔야 한다", "마셔야 한다", "운전해야 한다", "떨어져야 한다", "먹어야 한다", "끝나야 한다", "들어가야 한다", "운동해야 한다", "실패해야 한다", "떨어져야 한다", "느껴야 한다", "싸워야 한다", "마쳐야 한다", "고정해야 한다", "날아야 한다", "집중해야 한다", "잊어야 한다", "형성해야 한다", "튀겨야 한다", "가야 한다", "자라야 한다", "추측해야 한다", "걸어야 한다", "도와야 한다", "쳐야 한다", "잡아야 한다", "희망해야 한다", "서둘러야 한다", "참여해야 한다", "계속해야 한다", "차야 한다", "알아야 한다", "거짓말해야 한다", "들어야 한다", "살아야 한다", "봐야 한다", "사랑해야 한다", "움직여야 한다", "열어야 한다", "통과해야 한다", "지불해야 한다", "놀아야 한다", "밀어야 한다", "읽어야 한다", "돌아가야 한다", "달려야 한다", "노래해야 한다", "앉아야 한다", "자야 한다", "냄새맡아야 한다", "미소지어야 한다", "말해야 한다", "일어서야 한다", "시작해야 한다", "머물러야 한다", "멈춰야 한다", "수영해야 한다", "말해야 한다", "이야기해야 한다", "여행해야 한다", "노력해야 한다", "돌려야 한다", "방문해야 한다", "기다려야 한다", "깨야 한다", "걸어야 한다", "씻어야 한다", "입어야 한다", "이겨야 한다", "바라야 한다", "일해야 한다", "걱정해야 한다", "써야 한다", "울려야 한다", "가라앉아야 한다", "먹여야 한다", "쏘아야 한다", "이끌어야 한다", "기어야 한다", "쓸어야 한다", "울어야 한다", "떠나야 한다", "구부려야 한다", "잃어야 한다", "감아야 한다", "미끄러져야 한다", "파야 한다", "빛나야 한다", "돌려야 한다", "때려야 한다", "깨우쳐야 한다", "낳아야 한다", "찢어야 한다", "얼려야 한다", "훔쳐야 한다", "불어야 한다", "던져야 한다", "타야 한다", "올라야 한다", "흔들어야 한다");
const AUXILIARY_HAD_BETTER_K = new Array();
const AUXILIARY_WOULD_RATHER_K = new Array();
const AUXILIARY_USED_TO_K = new Array();
const AUXILIARY_HAVE_PP_K = new Array();
const MAY_IDIOMATIC_EXPRESSION_K = new Array();
const AUXILIARY_SUMMARY = new Array();

const GERUND_K = new Array("행동하는 것", "조언하는 것", "동의하는 것", "도착하는 것", "묻는 것", "굽는 것", "시작하는 것", "믿는 것", "깨뜨리는 것", "타는 것", "보살피는 것", "바꾸는 것", "확인하는 것", "선택하는 것", "오르는 것", "오는 것", "요리하는 것", "복사하는 것", "건너는 것", "우는 것", "자르는 것", "춤추는 것", "결정하는 것", "죽는 것", "하는 것", "그리는 것", "꿈꾸는 것", "마시는 것");
const GERUND_E = new Array("acting", "advising", "agreeing", "arriving", "asking", "baking", "beginning", "believing", "breaking", "burning", "caring", "changing", "checking", "choosing", "climbing", "coming", "cooking", "copying", "crossing", "crying", "cutting", "dancing", "deciding", "dying", "doing", "drawing", "dreaming", "drinking");
const GERUND_TYPE_K = new Array("은 좋다", "을 사랑한다", "을 잘한다");
const GERUND_TYPE_E = new Array("주어", "목적어", "전치사의 목적어");
const GERUND_NEGATIVE_K = new Array("안 ", "절대 안 ");
const GERUND_NEGATIVE_E = new Array("not ", "never ");
const GERUND_SENSE_SUBJECT_K = new Array();
const GERUND_SENSE_SUBJECT_SENTENCE_K = new Array(" 에 감사합니다");
const GERUND_SENSE_SUBJECT_SENTENCE_E = new Array("Thank you for ");
const GERUND_VS_PRESENT_PARTICIPLE_K = new Array("to만 쓰는 동사 ", "ing만 쓰는 동사", "", "둘 다 쓰는 동사 - 뜻 같음", "둘 다 쓰는 동사 - 뜻 다름");
const VERB_WITH_K = new Array("to만 쓰는 동사 ", "ing만 쓰는 동사", "", "둘 다 쓰는 동사 - 뜻 같음", "둘 다 쓰는 동사 - 뜻 다름");
const VERB_WITH_E = new Array("언제 답을 출래 ", "피마디인", "스키어 기쁘", "사랑동사", "기억동사");
const VERB_WITH_TO_K = new Array("원한다", "소망한다", "희망한다", "기대한다", "필요하다", "요구한다", "결정한다", "동의한다", "계획한다", "약속한다", "선택한다", "거절한다");
const VERB_WITH_TO_E = new Array("want", "wish", "hope", "expect", "need", "demand", "decide", "agree", "plan", "promise", "choose", "refuse");
const VERB_WITH_ING_K = new Array("끝나다", "꺼리다", "부인하다", "즐기다", "멈추다", "유지하다", "피하다", "인정하다", "포기하다", "연습하다");
const VERB_WITH_ING_E = new Array("finish", "mind", "deny", "enjoy", "stop", "keep", "avoid", "admit", "give up", "practice");
const VERB_WITH_BOTH_K = new Array("좋아한다", "시작한다", "계속한다", "사랑한다", "싫어한다", "시작한다");
const VERB_WITH_BOTH_E = new Array("like", "start ", "continue", "love ", "hate", "begin");
const VERB_WITH_BOTH_2K = new Array("기억한다 ", "노력한다", "잊는다", " 멈춘다", "후회한다");
const VERB_WITH_BOTH_2E = new Array("remember", "try", "forget", "stop", "regret");
const VERB_WITH_BOTH_3K = new Array("할 것을 기억하다", "했던 것을 기억하다", "할 것을 잊다", "했던 것을 잊다", "하게 되어 유감이다", "했던 것을 후회하다", "하기 위해 멈추다", "하는 것을 멈추다", "노력하다", "시험 삼아 해보다");
const VERB_WITH_BOTH_3E = new Array("remember to", "remember -ing", "forget to", "forget -ing ", "regret to", "regret -ing ", "stop to", "stop -ing ", "try to", "try -ing");
const GERUND_IDIOMATIC_EXPRESSION_K = new Array("-하는 게 어때?", "하고싶다", "고대하다 ", "-하는 데 어려움을 겪다", "-하는 데 어려움을 겪다", "반대하다 ", "못하게 하다", "익숙하다", "-해도 소용없다", "-해도 소용없다", "-하지 않을 수 없다", "-하지 않을 수 없다", "-은 불가능하다", "-은 불가능하다", "계속해서 -하다");
const GERUND_IDIOMATIC_EXPRESSION_E = new Array("How(What) about -ing", "feel like -ing", "look forward to -ing", "have a hard time -ing", "have trouble /difficulty -ing", "object to -ing", "prevent/keep/stop 목 from -ing", "be/get used to -ing", "it is no use –ing", "It is useless to V", "cannot help –ing", "cannot help but V", "There is no –ing", " It is impossible to V", "keep –ing =go on -ing");
const GERUND_IDIOMATIC_EXPRESSION_2K = new Array("막 ~하려고 하다", "막 ~하려고 하다", "-하자마자", "-하느라 바쁘다", "시간/돈 쓰다", "-하러 가다", "할 가치가 있다", "~해줘서 고맙다");
const GERUND_IDIOMATIC_EXPRESSION_2E = new Array("be at the point of –ing", "be about to V", "on -ing", "be busy -ing", "spend 시간/돈 (on) ing", "go -ing", "be worth -ing", "thank ~ for -ing");
const GERUND_TENSE_K = new Array();
const GERUND_PASSIVE_K = new Array();

const PARTICIPLE_K = new Array();
const PARTICIPLE_MODIFY_NOUN_K = new Array();
const PARTICIPLE_AS_COMPLEMENT_K = new Array();
const PARTICIPLE_EMOTION_K = new Array();
const PARTICIPIAL_CONSTRUCTION_K = new Array();
const PARTICIPIAL_CONSTRUCTION_MEANING_K = new Array("~할 때", "~하기 전에", "~한 후에", "~라면", "~때문에", "불구하고", "하면서", "하고 했다");
const PARTICIPIAL_CONSTRUCTION_MEANING_E = new Array("when", "before", "after", "if", "because, since, as", "(al)though, even though, even if", "as, while", "and");
const PARTICIPIAL_CONSTRUCTION_MEANING_2K = new Array("때", "라면", "때문에", "불구하고", "하면서", "하고 했다");
const PARTICIPIAL_CONSTRUCTION_MEANING_2E = new Array("시간", "조건", "원인, 이유", "양보", "동시동작 ", "연속동작");
const PARTICIPIAL_CONSTRUCTION_NEGATIVE_K = new Array();
const PARTICIPLE_IDIOMATIC_EXPRESSION_K = new Array("일반적으로 말해서", "솔직히 말해서", "엄밀히 말해서", "대략적으로 말해서", "~와 비교해 보면", "만일 ~라면", "~을 고려하면", "~로 판단하건데", "~얘기가 나와서 말인데");
const PARTICIPLE_IDIOMATIC_EXPRESSION_E = new Array("generally speaking", "frankly speaking", "strictly speaking", "roughly speaking", "compared with", "supposing (that)", "considering (that)", "judging from", "speaking(talking) of");
const PARTICIPLE_WITH_WITH_K = new Array();

const PASSIVE_K = new Array();
const PASSIVE_SENTENCE_K = new Array();
const PASSIVE_TENSE_K = new Array();
const PASSIVE_NO_OBJECTIVE_K = new Array();
const PASSIVE_IDIOMATIC_PREP_K = new Array("로서 알려져 있다", "로 유명하다", "에게 알려져 있다", "로 가득 차 있다", "로 덮여 있다", "로 붐비다", "에 흥미가 있다", "에 대해 기뻐하다", "에 만족하다", "에 실망하다", "에 진저리가 나다");
const PASSIVE_IDIOMATIC_PREP_E = new Array("be known as ", "be known for ", "be known to ", "be filled with ", "be covered with ", "be crowded with ", "be interested in ", "be pleased with/about ", "be satisfied with ", "be disappointed with/at/in ", "be fed up with ");
const PASSIVE_IDIOMATIC_PREP_2K = new Array("로 만들어지다", "로 만들어지다", "로 만들어지다", "에 놀라다", "에 대해 들뜨다", "에 대해 걱정하다", "와 관련되어있다", "로 구성되어있다", "에 기초하다");
const PASSIVE_IDIOMATIC_PREP_2E = new Array("be made from ", "be made (out) of ", "be made into ", "be surprised at/by ", "be excited about ", "be worried/concerned about ", "be involved in ", "be composed of ", "be based on ");
const PASSIVE_SENTENCE_PATTERN_K = new Array();
const PASSIVE_SENTENCE_PATTERN_4TH_K = new Array();
const PASSIVE_SENTENCE_PATTERN_5TH_K = new Array();
const VERB_NOT_PASSIVE_K = new Array();
const PASSIVE_VERB_PHRASE_K = new Array("을 따라잡다", "을 수행하다", "을 없애다", "을 돌보다", "을 돌보다", "을 업신여기다", "을 비웃다", "(차로) 태워오다", "을 참다", "(차가) 을 치다", "을 칭찬(험담)하다", "을 이용하다", "을 켜다(끄다)");
const PASSIVE_VERB_PHRASE_E = new Array("catch up with ", "carry out ", "do away with ", "look after ", "take care of ", "look down on ", "laugh at ", "pick up", "put up with ", "run over ", "speak well(ill) of ", "take advantage of ", "turn on(off) ");
const PASSIVE_THAT_CLAUSE_OBJECT_K = new Array();

const INFINITIVE_K = new Array();
const TO_INFINITIVE_VS_TO_PREPOSITION_K = new Array();
const TO_INFINITIVE_AS_NOUN_K = new Array("행동하는 것", "조언하는 것", "동의하는 것", "도착하는 것", "묻는 것", "굽는 것", "시작하는 것", "믿는 것", "깨뜨리는 것", "타는 것", "보살피는 것", "바꾸는 것", "확인하는 것", "선택하는 것", "오르는 것", "오는 것", "요리하는 것", "복사하는 것", "건너는 것", "우는 것", "자르는 것", "춤추는 것", "결정하는 것", "죽는 것", "하는 것", "그리는 것", "꿈꾸는 것", "마시는 것");
const TO_INFINITIVE_AS_NOUN_E = new Array("to act", "to advise", "to agree", "to arrive", "to ask", "to bake", "to begin", "to believe", "to break", "to burn", "to care", "to change", "to check", "to choose", "to climb", "to come", "to cook", "to copy", "to cross", "to cry", "to cut", "to dance", "to decide", "to die", "to do", "to draw", "to dream", "to drink");
const TO_INFINITIVE_AS_NOUN_IT_TO_K = new Array();
const TO_INFINITIVE_AS_NOUN_INTERROGATIVE_K = new Array("누구를 ~할지", "무엇을 ~할지", "어디서 ~할지", "언제 ~할지", "어떻게 ~할지", "어느것을 ~할지");
const TO_INFINITIVE_AS_NOUN_INTERROGATIVE_E = new Array("who(m) to부정사", "what to부정사", "where to부정사", "when to부정사", "how to부정사", "which to부정사");
const TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2K = new Array("누구를 ", "무엇을 ", "어디서 ", "언제 ", "어떻게 ", "어느 것을 ");
const TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2E = new Array("who(m) to", "what to", "where to", "when to", "how to", "which to");
const TO_INFINITIVE_AS_ADJECTIVE_K = new Array();
const TO_INFINITIVE_AS_ADVERB_K = new Array("목적", "감정 ", "판단 ", "결과", "형용사 수식");
const TO_INFINITIVE_AS_ADVERB_E = new Array("~하기 위해", "~해서", "~하는 걸 보니", "~해서 ~하다", "~하기에");
const TO_INFINITIVE_AS_ADVERB_2K = new Array();
const TO_INFINITIVE_AS_ADVERB_2E = new Array();
const INFINITIVE_USAGE_K = new Array();
const INFINITIVE_IDIOMATIC_EXPRESSION_K = new Array();
const INFINITIVE_IDIOMATIC_EXPRESSION_TOO_TO_K = new Array();
const INFINITIVE_IDIOMATIC_EXPRESSION_ENOUGH_TO_K = new Array();
const INFINITIVE_NEGATIVE_SENSE_SUBJECT_TENSE_K = new Array();
const INFINITIVE_VERB_WITH_TO_K = new Array();
const INFINITIVE_COMPLEMENT_K = new Array();
const INFINITIVE_COMPLEMENT_2K = new Array();
const INFINITIVE_BE_TO_K = new Array("예정", "의무", "가능", "운명", "의도");
const INFINITIVE_BE_TO_E = new Array("~할 예정이다", "~해야 한다", "~할 수 있다", "~할 운명이다", "~하려 하다");
const INFINITIVE_BE_TO_2K = new Array("예정 (~할 예정이다)", "의무 (~해야 한다)", "가능 (~할 수 있다)", "운명 (~할 운명이다)", "의도 (~하려 하다)");
const INFINITIVE_BE_TO_2E = new Array("will, be going to", "should, have to", "can, be able to", "be destined to", "intend to");
const INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_K = new Array("말할 필요도 없이", "~은 말할 것도 없이", "~은 말할 것도 없이", "말하자면", "이상한 이야기지만", "우선, 먼저", "솔직히 말하면", "확실히", "간단히 말하면", "설상가상으로", "사실대로 말하면");
const INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_E = new Array("needless to say", "not to mention", "not to speak of", "so to speak", "strange to say", "to begin with", "to be frank", "to be sure", "to make a long story short", "to make matters worse", "to tell the truth");

const COMPARATIVE_K = new Array();
const COMPARATIVE_ORIGINAL_K = new Array();
const COMPARATIVE_COMPARATIVE_K = new Array();
const COMPARATIVE_SUPERATIVE_K = new Array();
const COMPARATIVE_COMPARATIVE_RULE_K = new Array("① 보통은?", "② e로 끝나면?", "③ cvc는?", "④ y앞에 자음이면?", "⑤ y앞에 모음이면?", "⑥ er/est말고 more/most?");
const COMPARATIVE_COMPARATIVE_RULE_E = new Array("형부er/the 형부est", "r/st", "cer/cest", "y-kill -ier/iest", "그냥 er/est", "대부분의 3음절, -풀 –어블 –리스 –어스 –이브 –잉 -ful -ble -less -ous –ive -ing 등으로 끝날 때");
const COMPARATIVE_COMPARATIVE_IRREGULAR_K = new Array("-better-best", "-better-best", "-worse-worst", "-worse-worst", "-more-most", "-more-most", "-less-least");
const COMPARATIVE_COMPARATIVE_IRREGULAR_E = new Array("good", "well", "bad(ly)", "ill", "many", "much", "little");
const COMPARATIVE_COMPARATIVE_IRREGULAR_2K = new Array("good-__________-best", "well-__________-best", "bad(ly)-__________-worst", "ill-__________-worst", "many-__________-most", "much-__________-most", "little-__________-least");
const COMPARATIVE_COMPARATIVE_IRREGULAR_2E = new Array("better", "better", "worse", "worse", "more", "more", "less");
const COMPARATIVE_COMPARATIVE_IRREGULAR_3K = new Array("good-better-", "well-better-", "bad(ly)-worse-", "ill-worse-", "many-more-", "much-more-", "little-less-");
const COMPARATIVE_COMPARATIVE_IRREGULAR_3E = new Array("best", "best", "worst", "worst", "most", "most", "least");
const COMPARATIVE_COMPARATIVE_IRREGULAR_4K = new Array("낡은", "손위", "거리", "정도", "시간", "순서");
const COMPARATIVE_COMPARATIVE_IRREGULAR_4E = new Array("old-older-oldest", "old-elder-eldest", "far-farther-farthest", "far-further-furthest", "late-later-latest", "late-latter-last");
const COMPARATIVE_IDIOMATIC_EXPRESSION_K = new Array("~하면 할수록, 더욱 ~한", "점점 더 ~한", "점점 더 ~한", "점점 더 ~한");
const COMPARATIVE_IDIOMATIC_EXPRESSION_E = new Array("The 비교급 S+V, the 비교급 S+V", "get 비교급 and 비교급", "비교급 and 비교급", "more and more 원급");
const COMPARATIVE_COMPARATIVE_TO_NOT_THAN_K = new Array("~보다 나은", "~보다 열등한", "~보다 앞선", "~보다 어린", "~보다 손위인");
const COMPARATIVE_COMPARATIVE_TO_NOT_THAN_E = new Array("superior to ", "inferior to ", "prior to ", "junior to ", "senior to ");

const RELATIVES_K = new Array();
const RELATIVE_PRONOUN_USAGE_K = new Array();
const RELATIVE_PRONOUN_WHO_WHICH_THAT_K = new Array();
const RELATIVE_PRONOUN_THAT_K = new Array();
const RELATIVE_PRONOUN_WHAT_K = new Array();
const RELATIVE_PRONOUN_OMIT_K = new Array();
const DEFINING_RELATIVE_CLAUSE_K = new Array();
const RELATIVE_PRONOUN_WITH_PREP_K = new Array();
const RELATIVE_ADVERB_K = new Array();
const DEFINING_RELATIVE_CLAUSE_2K = new Array();
const RELATIVE_ADVERB_ANTECEDENT_K = new Array();
const COMPOUND_RELATIVE_PRONOUN_K = new Array();
const COMPOUND_RELATIVE_PRONOUN_2K = new Array();
const COMPOUND_RELATIVE_ADVERB_K = new Array();
const COMPOUND_RELATIVES_K = new Array();

const SUBJUNCTIVE_K = new Array();
const SUBJUNCTIVE_PAST_K = new Array();
const SUBJUNCTIVE_PAST_PERFECT_K = new Array();
const SUBJUNCTIVE_I_WISH_K = new Array("좋을텐데", "~라면 좋을텐데", "~했다면 좋을텐데");
const SUBJUNCTIVE_I_WISH_E = new Array("I wish ", "I wish S 과거", "I wish S 과거 완료");
const SUBJUNCTIVE_AS_IF_K = new Array("마치 ~인 것처럼", "마치 ~였던 것처럼");
const SUBJUNCTIVE_AS_IF_E = new Array("as if S 과거", "as if S 과거 완료");
const SUBJUNCTIVE_MIXED_K = new Array("- (과거) ~했더라면, (현재) ~할 텐데");
const SUBJUNCTIVE_MIXED_E = new Array("If S had p.p., S 우슈쿠마 동사원형");
const SUBJUNCTIVE_PRESENT_K = new Array("만약 ~라면, ~한다", "만약 ~라면, ~할 수 있다", "만약 ~라면, ~할 지도 모른다");
const SUBJUNCTIVE_PRESENT_E = new Array("If S 현재, S will 동사원형", "If S 현재, S can 동사원형", "If S 현재, S may 동사원형");
const SUBJUNCTIVE_FUTURE_K = new Array("만약 ~라면, ~할 것이다");
const SUBJUNCTIVE_FUTURE_E = new Array("If S should 동사원형, S V");
const SUBJUNCTIVE_OTHERS_K = new Array("if 생략", "A가 없다면", "A가 없었다면", "~할 때이다");
const SUBJUNCTIVE_OTHERS_E = new Array("의문문 순서로 = were, should, had를 맨 앞", "without A = but for A = were it not for A = if it were not for A", "without A = but for A = had it not been for A = if it had not been for A", "It’s time that S 과거 / 슈 동사원형 ");

const INTERROGATIVE_K = new Array("누구", "무엇(뭐)", "어디", "언제", "왜", "어떻게");
const INTERROGATIVE_E = new Array("Who", "What", "Where ", "When", "Why ", "How");
const INTERROGATIVE_USAGE_K = new Array("be/조동사로 시작", "Wh-로 시작");
const INTERROGATIVE_USAGE_E = new Array("Yes/No로 대답한다", "Yes/No로 대답하지 않는다");
const INTERROGATIVE_PRONOUN_K = new Array("사람/신분 물어볼 때", "사물/직업 물어볼 때", "선택하는 질문 할 때", "무슨? 어느?");
const INTERROGATIVE_PRONOUN_E = new Array("who", "what", "which", "what/which 명사");
const INTERROGATIVE_ADVERB_K = new Array("장소를 물어볼 때", "날짜/시간 물어볼 때", "이유를 물어볼 때", "~하는 게 어때?");
const INTERROGATIVE_ADVERB_E = new Array("where", "when", "why", "Why don’t you 동사원형?");
const INTERROGATIVE_HOW_K = new Array("어떤? 어떻게? 얼마나?", "몇 살?", "얼마나 많이? (몇개)", "얼마나 많이? (가격)", "얼마나 자주?", "얼마나 멀리? (거리)", "얼마나 오래?", "얼마나 긴? (기간/길이)", "얼마나 큰지?", "얼마나 키가큰지?");
const INTERROGATIVE_HOW_E = new Array("How", "How old ?", "How many ?", "How much ?", "How often ?", "How far ? ", "How long ?", "How long ?", "How big ?", "How tall ?");
const INTERROGATIVE_ALTERNATIVE_NEGATIVE_K = new Array();
const TAG_QUESTION_K = new Array("그렇지? 그렇지 않니?", "명령문, 그렇지?", "청유문(Let's~), 그렇지?", "I am ~, 그렇지?");
const TAG_QUESTION_E = new Array(", (조)동사 + 대명사?", ", will you?", ", shall we?", ", aren’t I?");
const INDIRECT_QUESTION_K = new Array("의문사O 간접의문문", "의문사X 간접의문문");
const INDIRECT_QUESTION_E = new Array("의문사 S V", "if/whether S V");
const INTERROGATIVE_WHAT_HOW_K = new Array("직업", "첫 만남", "날씨", "날씨", "성격", "외모", "외모", "요일", "날짜", "안부");
const INTERROGATIVE_WHAT_HOW_E = new Array("What do you do? ", "How do you do?", "How’s the weather?", "What’s the weather like?", "What’s he like?", "What does he look like?", "How does he look?", "What day is it today?", "What date is it today?", "How is he? How are you?");

const AGREEMENT_K = new Array();
const AGREEMENT_E = new Array();
const AGREEMENT_ON_NUMBER_K = new Array("① every/each/thing/body/one", "② 학문 ics, 국가 단체 질병 s로 끝", "③ 거금무시(거리 금액 무게 시간) 명사", "④ A and B가 한 가지 사물", "⑤ 동명사구/부정사구 주어", "⑥ The number of 복명 단동 ~의 수", "① 쌍을 이루는 명사 – scissors, glasses", "② The 형용사 = 형용사 people = ~한 사람들", "③ a number of 복명 복동 – 많은");
const AGREEMENT_ON_NUMBER_E = new Array("단수 주어 ", "단수 주어 ", "단수 주어 ", "단수 주어 ", "단수 주어 ", "단수 주어 ", "복수 주어", "복수 주어", "복수 주어");
const AGREEMENT_ON_NUMBER_2K = new Array("부분 of 단명 - 단동?복동?", "부분 of 복명 - 단동?복동?", "most all some half percent 분수 of 단명  - 단동?복동?", "most all some half percent 분수 of 복명  - 단동?복동?", "all (the) 단명  ", "all (the) 복명 ", "all (the) 복명 복동");
const AGREEMENT_ON_NUMBER_2E = new Array("단동", "복동", "단동", "복동", "단동", "복동", "단수 주어");
const AGREEMENT_ON_NUMBER_3E = new Array("A B 둘 중 하나", "A B 둘 다 아닌", "A가 아니라 B", "A뿐만 아니라 B도", "A뿐만 아니라 B도");
const AGREEMENT_ON_NUMBER_3K = new Array("either A or B", "neither A nor B", "not A but B", "not only A but (also) B", "B as well as A");
const AGREEMENT_TENSE_K = new Array("주절이 현재 > 종속절의 시제는?", "주절이 과거 > 종속절의 시제는? ", "진리, 격언, 과학적 사실, 현재 상태, 습관", "과거 사건, 역사적 사실");
const AGREEMENT_TENSE_E = new Array("종속절 아무 시제 가능", "과거/과거진행/과거완료만 가능", "항상 현재 시제", "항상 과거");

const SPEECH_K = new Array("말을 전달하는 방법 2가지");
const SPEECH_E = new Array("직접 화법, 간접 화법");
const SPEECH_QUOTED_REPORTED_K = new Array("say 를 간접화법으로", "say to 를 간접화법으로", "② 쉼표따옴표 ( , “ ” )", "③ 시제, 인칭대명사, 지시어, 부사(구) 일치");
const SPEECH_QUOTED_REPORTED_E = new Array("say", "tell", "( that ) S V", "③ 시제, 인칭대명사, 지시어, 부사(구) 일치");
const SPEECH_ADVERB_PHRASE_K = new Array("ago ", "this ", "these ", "here ", "today ", "now ", "next ", "tomorrow ", "yesterday ", "last week", "last month", "last year");
const SPEECH_ADVERB_PHRASE_E = new Array("before", "that", "those", "there", "that day", "then, at that time", "the following", "the next day, the following day ", "the day before, the previous day", "the previous week", "the previous month", "the previous year");
const SPEECH_INTERROGATIVE_K = new Array("의문문의 say (to) 간접 화법으로", "의문사 X 의문문의 쉼따 (,“ ”) 간접 화법으로", "의문사 O 의문문의 쉼따 (,“ ”) 간접 화법으로", "③ 시제, 인칭대명사, 지시어, 부사(구) 일치");
const SPEECH_INTERROGATIVE_E = new Array("ask", "if/whether S V", "의문사 SV", "시인지부 일치");
const SPEECH_IMPERATIVE_K = new Array("명령문의 명령하는 의미의 say (to) 간접화법으로", "명령문의 부탁하는 의미의 say (to) 간접화법으로", "명령문의 충고하는 의미의 say (to) 간접화법으로", "명령문의 쉼따 (,“ ”) 간접화법으로", "③ 시제, 인칭대명사, 지시어, 부사(구) 일치");
const SPEECH_IMPERATIVE_E = new Array("ask / beg / request", "advise", "(not) to 부정사", "시인지부 일치");
const SPEECH_MINDMAP_K = new Array();

const SPECIAL_SYNTAX_K = new Array();
const SPECIAL_SYNTAX_EMPHASIS_K = new Array();
const SPECIAL_SYNTAX_IT_THAT_K = new Array();
const SPECIAL_SYNTAX_INVERSION_K = new Array();
const SPECIAL_SYNTAX_SO_NEITHER_K = new Array();
const SPECIAL_SYNTAX_OMIT_K = new Array();
const SPECIAL_SYNTAX_INANIMATES_SUBJECT_K = new Array();

const SENTENCE_BASIC_K = new Array();
const SENTENCE_BASIC_2K = new Array();
const SENTENCE_EXTENDED_K = new Array();
const SENTENCE_TYPE_K = new Array();
const EXCLAMATORY_K = new Array();
const EXCLAMATORY_SOLUTION_K = new Array();
const SENTENCE_IMPERATIVE_K = new Array();
const SENTENCE_SUGGESTION_K = new Array();

const SENTENCE_ELEMENTS_K = new Array();
const SENTENCE_PATTERN_K = new Array();
const SENTENCE_PATTERN_2K = new Array();
const SENTENCE_THERE_BE_K = new Array();
const SENTENCE_PATTERN_1_2_3_K = new Array();
const SENTENCE_PATTERN_4_K = new Array();
const SENTENCE_PATTERN_5_K = new Array();
const SENTENCE_PATTERN_5_2K = new Array();
const SENTENCE_PATTERN_5_3K = new Array();



const example = new Array();
const valueK = new Array();
const valueE = new Array();

function getRandomChar(value) {
  return value.charAt(Math.floor(Math.random() * value.length));
  // 문자열 특정 인덱스 단일문자 반환 / floor 반내림 / random 0-1사이 랜덤값 * 총 문자열의 수(21)
}
// Random Code 생성
function getRandomTwoChar(value) {
  return value[Math.floor(Math.random() * value.length)];
}

// Random Code 생성
function getRandomTwoChar2(valueK, valueE) {
  let valueNumber = Math.floor(Math.random() * valueK.length);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('divRandom').innerText = valueK;
  document.getElementById('divRandom2').innerText = valueE;
  return valueNumber;
}

// 작업하던데로 돌아오기 ctrl+q
// TODO : 20220630 번역하는 기능 - 직역, 번역 둘 다 사용, kakao를 파파고로, result2
function translateAndPrint() {
  // html에서 값을 가져온다
  let koreanWord = document.getElementById('divRandom').value;
  // TODO : 번역한다 - ajax & kakao
  let results = '';
  $.ajax({
    method: 'GET',
    url: 'https://dapi.kakao.com/v2/translation/translate',
    data: { query: koreanWord, src_lang: 'kr', target_lang: 'en' },
    headers: { Authorization: 'KakaoAK 4fa3a1890d37bd3c60507b53aad1d00b' },
  }).done(function (msg) {
    results = msg.translated_text[0];
  });

  // 화면에 뿌려준다
  document.getElementById('divRandom2').innerText = resultOfKakao;

  // 리팩토링중 삭제 - 한번쓰이는건 literal > let result2 = getRandomTwoChar2(koreanWord);
  document.getElementById('divRandom3').innerText =
    getRandomTwoChar2(koreanWord);
}
function getCardNumber() {
  let cardNumber = document.getElementById('inputCardNumber').value;
  let z =
    '<audio controls><source src="../src/' +
    cardNumber +
    '.m4a" type="audio/mp3"></audio>';
  document.getElementById('audioSetting').innerHTML = z;
  let y =
    '<img src="../images/grammar_image/glCard/glCard' +
    cardNumber +
    '.jpg' +
    '" alt="GrammarCard">';
  document.getElementById('glAudioCard').innerHTML = y;
}
function putCardNumber(thisNumber) {
  let cardNumber = thisNumber;
  let z =
    '<audio controls><source src="../src/' +
    cardNumber +
    '.m4a" type="audio/mp3"></audio>';
  document.getElementById('audioSetting').innerHTML = z;
  let y =
    '<img src="../images/grammar_image/glCard/glCard' +
    cardNumber +
    '.jpg' +
    '" alt="GrammarCard">';
  document.getElementById('glAudioCard').innerHTML = y;
}

// 카카오 번역
// let은 전역상수로 선언하지 않는다 >>> 지역 변수

// let valueOfRandomResult ='';

function printName(textForTranslation) {
  // const beforeTranslation = document.getElementById('inputTranslate').value;
  // let beforeTranslation = valueOfRandomResult;
  let results = '';

  $.ajax({
    method: 'GET',
    url: 'https://dapi.kakao.com/v2/translation/translate',
    //query : 질문할 문장 beforeTranslationSentence = 긴코드가 좋은 코드다
    data: { query: textForTranslation, src_lang: 'kr', target_lang: 'en' },
    headers: { Authorization: 'KakaoAK 4fa3a1890d37bd3c60507b53aad1d00b' },
  })

    //ajax의 리턴값 = msg >>> 다른 것으로 줘도 된다
    .done(function (msg) {
      // alert("Data Saved: " + msg); // 이건 나중에 지워도 됨
      // console.log(msg);
      // console.log(msg.translated_text[0]);
      // temp1.documents[0].translated_text.Array(1)
      // document.getElementById('divRandom2').innerText = msg.translated_text[0];
      // document.getElementById('inputTranslate').value = '';
      results = msg.translated_text[0];
    });
  console.log(textForTranslation);
  return results;
}

//인칭대명사-주격
function pronoun5() {
  let result = getRandomTwoChar2(pronounBoxK, pronounBoxE);
  // valueK = valueK[valueNumber];
  // valueE = valueE[valueNumber];
  // document.getElementById("divRandom").innerText = valueK;
  // document.getElementById("divRandom2").innerText = valueE;
  // valueOfRandomResult = result;
  // document.getElementById('divRandom2').innerText = " ";
}

//관사
function articles() {
  let result = getRandomTwoChar2(articleK, articleE);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('divRandom').innerText = valueK;
  document.getElementById('divRandom2').innerText = valueE;
}
//0102 명사-셀수 X 명사 세는 법
function function0102() {
  let result = getRandomTwoChar2(noun2objectK, noun2objectE);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('divRandom').innerText = valueK;
  document.getElementById('divRandom2').innerText = valueE;
}
//0103 명사-셀수 X 명사 세는 법
function function0103() {
  let result = getRandomTwoChar2(function0103K, function0103E);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('divRandom').innerText = valueK;
  document.getElementById('divRandom2').innerText = valueE;
}
//0103 명사-셀수 X 명사 세는 법
function function0103more() {
  let valueNumber = Math.floor(Math.random() * function0103K.length);
  let valueNumber2 = Math.floor(Math.random() * noun3animalK.length);
  let kWord = "하나의 " + noun3animalE[valueNumber] + " (" + noun3animalK[valueNumber] + ")";
  let eWord = "a? an? 하나의 " + noun3animalK[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//0104 명사-셀수 X 명사 세는 법
let pluralK = new Array('들');
let pluralE = new Array('s/es');

function function0104() {
  let valueNumber = Math.floor(Math.random() * noun3animalE.length);
  let kWord = noun3animalK[valueNumber] + "들";
  let eWord = noun3animalE[valueNumber] + "s? es?";
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//0105 명사-셀수 X 명사 세는 법
function function0105() {
  let result = getRandomTwoChar2(function0105K, function0105E);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('divRandom').innerText = valueK;
  document.getElementById('divRandom2').innerText = valueE;
}

//0107 명사-셀수 X 명사 세는 법
function function0107() {
  let result = getRandomTwoChar2(function0107K, function0107E);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('divRandom').innerText = valueK;
  document.getElementById('divRandom2').innerText = valueE;
}

//0108 명사-셀수 X 명사 세는 법
function function0108() {
  let chooseNumbers = Math.floor(Math.random() * 9);
  let chooseNumbers_1 = chooseNumbers - 1;
  let chooseContainers_k = new Array("잔(cold drink)", "잔(hot drink) ", "조각/점", "얇은 조각", "그릇", "병", "덩어리", "파운드(무게)");
  let chooseContainers_E = new Array("glass", "cup", "piece", "slice", "bowl", "bottle", "loaf", "pound");
  let chooseContainers_2E = new Array("glasses", "cups", "pieces", "slices", "bowls", "bottles", "loaves", "pounds");
  const uncountableNoun1K = new Array('물', '쥬스', '우유');
  const uncountableNoun1E = new Array('water', 'juice', 'milk');
  const uncountableNoun2K = new Array('커피', '티');
  const uncountableNoun2E = new Array('coffee', 'tea');
  const uncountableNoun3K = new Array('종이', '빵', '피자', '치즈', '가구', '정보', '조언');
  const uncountableNoun3E = new Array('paper', 'bread', 'pizza', 'cheese', 'furniture', 'information', 'advice');
  const uncountableNoun4K = new Array('빵', '치즈', '피자', '케이크', '고기');
  const uncountableNoun4E = new Array('bread', 'cheese', 'pizza', 'cake', 'meat');
  const uncountableNoun5K = new Array('쌀', '스프', '샐러드');
  const uncountableNoun5E = new Array('rice', 'soup', 'salad');
  const uncountableNoun6K = new Array('물', '쥬스', '우유');
  const uncountableNoun6E = new Array('water', 'juice', 'milk');
  const uncountableNoun7K = new Array('고기', '빵', '비누');
  const uncountableNoun7E = new Array('meat', 'bread', 'soap');
  const uncountableNoun8K = new Array('설탕', '고기', '밀가루');
  const uncountableNoun8E = new Array('sugar', 'meat', 'flour');
  switch (chooseNumbers) {
    case 1:
      let valueNumber1 = Math.floor(Math.random() * uncountableNoun1K.length);
      kWord = uncountableNoun1K[valueNumber1] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_E[chooseNumbers_1] + " of " + uncountableNoun1E[valueNumber1];
      document.getElementById("divRandom").innerText = kWord;
      document.getElementById("divRandom2").innerText = eWord;
      break;
    case 2:
      let valueNumber2 = Math.floor(Math.random() * uncountableNoun2K.length);
      kWord = uncountableNoun2K[valueNumber2] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun2E[valueNumber2];
      document.getElementById("divRandom").innerText = kWord;
      document.getElementById("divRandom2").innerText = eWord;
      break;
    case 3:
      let valueNumber3 = Math.floor(Math.random() * uncountableNoun3K.length);
      kWord = uncountableNoun3K[valueNumber3] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun3E[valueNumber3];
      document.getElementById("divRandom").innerText = kWord;
      document.getElementById("divRandom2").innerText = eWord;
      break;
    case 4:
      let valueNumber4 = Math.floor(Math.random() * uncountableNoun4K.length);
      kWord = uncountableNoun4K[valueNumber4] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun4E[valueNumber4];
      document.getElementById("divRandom").innerText = kWord;
      document.getElementById("divRandom2").innerText = eWord;
      break;
    case 5:
      let valueNumber5 = Math.floor(Math.random() * uncountableNoun5K.length);
      kWord = uncountableNoun5K[valueNumber5] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun5E[valueNumber5];
      document.getElementById("divRandom").innerText = kWord;
      document.getElementById("divRandom2").innerText = eWord;
      break;
    case 6:
      let valueNumber6 = Math.floor(Math.random() * uncountableNoun6K.length);
      kWord = uncountableNoun6K[valueNumber6] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun6E[valueNumber6];
      document.getElementById("divRandom").innerText = kWord;
      document.getElementById("divRandom2").innerText = eWord;
      break;
    case 7:
      let valueNumber7 = Math.floor(Math.random() * uncountableNoun7K.length);
      kWord = uncountableNoun7K[valueNumber7] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun7E[valueNumber7];
      document.getElementById("divRandom").innerText = kWord;
      document.getElementById("divRandom2").innerText = eWord;
      break;
    case 8:
      let valueNumber8 = Math.floor(Math.random() * uncountableNoun8K.length);
      kWord = uncountableNoun8K[valueNumber8] + " " + adjectiveCardinalOrdinal2K[chooseNumbers_1] + " " + chooseContainers_k[chooseNumbers_1];
      eWord = adjectiveCardinalOrdinalE[chooseNumbers_1] + " " + chooseContainers_2E[chooseNumbers_1] + " of " + uncountableNoun8E[valueNumber8];
      document.getElementById("divRandom").innerText = kWord;
      document.getElementById("divRandom2").innerText = eWord;
      break;
  }
}

//0303 수량 형용사
function function0303() {
  let valueNumber = Math.floor(Math.random() * adjectiveCountableK1.length);
  let kWord = adjectiveCountableK1[valueNumber];
  let eWord = adjectiveCountableE1[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
function function0303v2() {
  let valueNumber = Math.floor(Math.random() * adjectiveCountableE2.length);
  let kWord = adjectiveCountableK1[valueNumber];
  let eWord = adjectiveCountableE2[valueNumber];
  document.getElementById("divRandom").innerText = eWord;
  document.getElementById('divRandom2').innerText = kWord;
}


//0304 the 형용사
function function0304() {
  let valueNumber = Math.floor(Math.random() * adjective1personK.length);
  let kWord = adjective1personK[valueNumber] + ' 사람들';
  let eWord = 'the ' + adjective1personE[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0305 수사(숫자) 표현법
function function0305() {
  let result = getRandomTwoChar2();
  valueK = adjectiveCardinalOrdinalK[valueNumber];
  valueE = adjectiveCardinalOrdinalE[valueNumber];
  document.getElementById('divRandom').innerText = valueK;
  document.getElementById('divRandom2').innerText = valueE;
}
//0305 수사(숫자) 표현법
function function0305v2() {
  let result = getRandomTwoChar2(
    adjectiveCardinalOrdinalK,
    adjectiveCardinalOrdinalE
  );
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('divRandom').innerText = valueK;
  document.getElementById('divRandom2').innerText = valueE;
}
//0306 분수 읽기
function function0306() {
  let result = getRandomTwoChar2(adjectiveFractionK, adjectiveFractionE);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('divRandom').innerText = valueK;
  document.getElementById('divRandom2').innerText = valueE;
}
//0307 형용사-어순
function function0307() {
  let result = getRandomTwoChar2(adjectiveFractionK, adjectiveFractionE);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById('divRandom').innerText = valueK;
  document.getElementById('divRandom2').innerText = valueE;
}
//0402 부사
function function0402() {
  let result = getRandomTwoChar2(adjective4placeK, adjective4placeE);
  let valueNumber = Math.floor(Math.random() * adjective4placeK.length);
  let kWord = adjective4placeK[valueNumber] + " + '~하게'";
  let eWord = adjective4placeE[valueNumber] + ' + ly';
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0403 빈도부사
function function0403() {
  let valueNumber = Math.floor(Math.random() * adverbOfFrequencyK.length);
  let kWord = adverbOfFrequencyK[valueNumber];
  let eWord = adverbOfFrequencyE[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0404 too, either, neither
function function0404() {
  let valueNumber = Math.floor(Math.random() * adverbTooEitherNeitherK.length);
  let kWord = adverbTooEitherNeitherK[valueNumber];
  let eWord = adverbTooEitherNeitherE[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0405 sameInAdjectvieAndAdverb
function function0405() {
  let valueNumber = Math.floor(Math.random() * sameInAdjectvieAndAdverbK.length);
  let kWord = sameInAdjectvieAndAdverbK[valueNumber];
  let eWord = sameInAdjectvieAndAdverbE[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0406 adverbSimilar
function function0406() {
  let valueNumber = Math.floor(Math.random() * adverbSimilarK.length);
  let kWord = adverbSimilarK[valueNumber];
  let eWord = adverbSimilarE[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0407 adjectiveConfusing
function function0407() {
  let valueNumber = Math.floor(Math.random() * adjectiveConfusingK.length);
  let kWord = adjectiveConfusingK[valueNumber];
  let eWord = adjectiveConfusingE[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0408 adverbAlreadyYet
function function0408() {
  let valueNumber = Math.floor(Math.random() * adverbAlreadyYetK.length);
  let kWord = adverbAlreadyYetK[valueNumber];
  let eWord = adverbAlreadyYetE[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0409 adverbWithVerb
function function0409() {
  let valueNumber = Math.floor(Math.random() * adverbWithVerbK.length);
  let kWord = adverbWithVerbK[valueNumber];
  let eWord = adverbWithVerbE[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}

//0502 PRONOUN_DEMONSTRATIVE_K
function function0502() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0503 PRONOUN_DEMONSTRATIVE_2K
function function0503() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_DEMONSTRATIVE_2K.length);
  let kWord = PRONOUN_DEMONSTRATIVE_2K[valueNumber];
  let eWord = PRONOUN_DEMONSTRATIVE_2E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0504 IMPERSONAL_SUBJECT_K
function function0504() {
  let valueNumber = Math.floor(Math.random() * IMPERSONAL_SUBJECT_K.length);
  let kWord = IMPERSONAL_SUBJECT_K[valueNumber];
  let eWord = IMPERSONAL_SUBJECT_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0505 IMPERSONAL_SUBJECT_K
function function0505() {
  let valueNumber = Math.floor(Math.random() * IMPERSONAL_SUBJECT_K.length);
  let kWord = IMPERSONAL_SUBJECT_K[valueNumber];
  let eWord = IMPERSONAL_SUBJECT_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0506 PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_K
function function0506() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0507 PRONOUN_PERSONAL_POSSESSIVE_K
function function0507() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_POSSESSIVE_K.length);
  let kWord = PRONOUN_PERSONAL_POSSESSIVE_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_POSSESSIVE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0508 PRONOUN_PERSONAL_POSSESSIVE_2K
function function0508() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_POSSESSIVE_2K.length);
  let kWord = PRONOUN_PERSONAL_POSSESSIVE_2K[valueNumber];
  let eWord = PRONOUN_PERSONAL_POSSESSIVE_2E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0509 PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_K
function function0509() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_K.length);
  let kWord = PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_POSSESSIVE_PRONOUN_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0510 PRONOUN_PERSONAL_OBJECTIVE_K
function function0510() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_OBJECTIVE_K.length);
  let kWord = PRONOUN_PERSONAL_OBJECTIVE_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0511 PRONOUN_PERSONAL_ALL_K
function function0511() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_PERSONAL_ALL_K.length);
  let kWord = PRONOUN_PERSONAL_ALL_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_ALL_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0512 PRONOUN_QUESTION_ANSWER_K
function function0512() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_QUESTION_ANSWER_K.length);
  let kWord = PRONOUN_QUESTION_ANSWER_K[valueNumber];
  let eWord = PRONOUN_QUESTION_ANSWER_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0513 PRONOUN_REFLEXIVE_K
function function0513() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_REFLEXIVE_K.length);
  let kWord = PRONOUN_REFLEXIVE_K[valueNumber];
  let eWord = PRONOUN_REFLEXIVE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0514 PRONOUN_REFLEXIVE_USAGE_K
function function0514() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_REFLEXIVE_USAGE_K.length);
  let kWord = PRONOUN_REFLEXIVE_USAGE_K[valueNumber];
  let eWord = PRONOUN_REFLEXIVE_USAGE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0515 PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_K
function function0515() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_K.length);
  let kWord = PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_K[valueNumber];
  let eWord = PRONOUN_REFLEXIVE_IDIOMATIC_USAGE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0516 PRONOUN_INDEFINITE_K
function function0516() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_K.length);
  let kWord = PRONOUN_INDEFINITE_K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0517 PRONOUN_INDEFINITE_2K
function function0517() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_2K.length);
  let kWord = PRONOUN_INDEFINITE_2K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_2E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0518 PRONOUN_INDEFINITE_3K
function function0518() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_3K.length);
  let kWord = PRONOUN_INDEFINITE_3K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_3E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0519 PRONOUN_INDEFINITE_4K
function function0519() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_4K.length);
  let kWord = PRONOUN_INDEFINITE_4K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_4E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0520 PRONOUN_INDEFINITE_5K
function function0520() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_5K.length);
  let kWord = PRONOUN_INDEFINITE_5K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_5E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0521 PRONOUN_INDEFINITE_6K
function function0521() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_6K.length);
  let kWord = PRONOUN_INDEFINITE_6K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_6E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0522 PRONOUN_INDEFINITE_7K
function function0522() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INDEFINITE_7K.length);
  let kWord = PRONOUN_INDEFINITE_7K[valueNumber];
  let eWord = PRONOUN_INDEFINITE_7E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0523 PRONOUN_COMPLETE_PARTIAL_NEGATION_K
function function0523() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_COMPLETE_PARTIAL_NEGATION_K.length);
  let kWord = PRONOUN_COMPLETE_PARTIAL_NEGATION_K[valueNumber];
  let eWord = PRONOUN_COMPLETE_PARTIAL_NEGATION_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0524 PRONOUN_INTERROGATIVE_K
function function0524() {
  let valueNumber = Math.floor(Math.random() * PRONOUN_INTERROGATIVE_K.length);
  let kWord = PRONOUN_INTERROGATIVE_K[valueNumber];
  let eWord = PRONOUN_INTERROGATIVE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0602 conjunctionCoordinate
function function0602() {
  let valueNumber = Math.floor(Math.random() * conjunctionCoordinateK.length);
  let kWord = conjunctionCoordinateK[valueNumber];
  let eWord = conjunctionCoordinateE[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0604 conjunctionSubordinateNoun
function function0604() {
  let valueNumber = Math.floor(Math.random() * conjunctionSubordinateNounK.length);
  let kWord = conjunctionSubordinateNounK[valueNumber];
  let eWord = conjunctionSubordinateNounE[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0605 conjunctionSubordinateAdverb
function function0605() {
  let valueNumber = Math.floor(Math.random() * conjunctionSubordinateAdverbK.length);
  let kWord = conjunctionSubordinateAdverbK[valueNumber];
  let eWord = conjunctionSubordinateAdverbE[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0606 conjunctionSubordinateAdverb2
function function0606() {
  let valueNumber = Math.floor(Math.random() * conjunctionSubordinateAdverb2K.length);
  let kWord = conjunctionSubordinateAdverb2K[valueNumber];
  let eWord = conjunctionSubordinateAdverb2E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0607 conjunctionRelative
function function0607() {
  let valueNumber = Math.floor(Math.random() * conjunctionRelativeK.length);
  let kWord = conjunctionRelativeK[valueNumber] + "가 니콜을 사랑한다";
  let eWord = conjunctionRelativeE[valueNumber] + " loves Nicole";
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0608 conjunctiveAdverb1
function function0608() {
  let valueNumber = Math.floor(Math.random() * conjunctiveAdverb1K.length);
  let kWord = conjunctiveAdverb1K[valueNumber];
  let eWord = conjunctiveAdverb1E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0609 conjunctiveAdverb2
function function0609() {
  let valueNumber = Math.floor(Math.random() * conjunctiveAdverb2K.length);
  let kWord = conjunctiveAdverb2K[valueNumber];
  let eWord = conjunctiveAdverb2E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0802 PREPOSITION_TIME
function function0802() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_TIME_K.length);
  let kWord = PREPOSITION_TIME_K[valueNumber];
  let eWord = PREPOSITION_TIME_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0803 PREPOSITION_TIME_ETC
function function0803() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_TIME_ETC_K.length);
  let kWord = PREPOSITION_TIME_ETC_K[valueNumber];
  let eWord = PREPOSITION_TIME_ETC_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0804 PREPOSITION_PLACE
function function0804() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_PLACE_K.length);
  let kWord = PREPOSITION_PLACE_K[valueNumber];
  let eWord = PREPOSITION_PLACE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0805 PREPOSITION_PLACE_ETC
function function0805() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_PLACE_ETC_K.length);
  let kWord = PREPOSITION_PLACE_ETC_K[valueNumber];
  let eWord = PREPOSITION_PLACE_ETC_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0806 PREPOSITION_POSITION
function function0806() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_POSITION_K.length);
  let kWord = PREPOSITION_POSITION_K[valueNumber];
  let eWord = PREPOSITION_POSITION_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0807 PREPOSITION_DIRECTION
function function0807() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_DIRECTION_K.length);
  let kWord = PREPOSITION_DIRECTION_K[valueNumber];
  let eWord = PREPOSITION_DIRECTION_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0808 PREPOSITION_ETC
function function0808() {
  let valueNumber = Math.floor(Math.random() * PREPOSITION_ETC_K.length);
  let kWord = PREPOSITION_ETC_K[valueNumber];
  let eWord = PREPOSITION_ETC_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0901 ARTICLE
function function0901() {
  let valueNumber = Math.floor(Math.random() * ARTICLE_K.length);
  let kWord = ARTICLE_K[valueNumber];
  let eWord = ARTICLE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0902 ARTICLE_INFINITIVE
function function0902() {
  let valueNumber = Math.floor(Math.random() * ARTICLE_INFINITIVE_K.length);
  let kWord = ARTICLE_INFINITIVE_K[valueNumber];
  let eWord = ARTICLE_INFINITIVE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0903 ARTICLE_THE_NUMERIC
function function0903() {
  let valueNumber = Math.floor(Math.random() * ARTICLE_THE_NUMERIC_K.length);
  let kWord = ARTICLE_THE_NUMERIC_K[valueNumber];
  let eWord = ARTICLE_THE_NUMERIC_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0904 ARTICLE_THE
function function0904() {
  let valueNumber = Math.floor(Math.random() * ARTICLE_THE_K.length);
  let kWord = ARTICLE_THE_K[valueNumber];
  let eWord = ARTICLE_THE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0905 NO_ARTICLE
function function0905() {
  let valueNumber = Math.floor(Math.random() * NO_ARTICLE_K.length);
  let kWord = NO_ARTICLE_K[valueNumber];
  let eWord = NO_ARTICLE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//0905 NO_ARTICLE
function function0905() {
  let valueNumber = Math.floor(Math.random() * NO_ARTICLE_K.length);
  let kWord = NO_ARTICLE_K[valueNumber];
  let eWord = NO_ARTICLE_E[valueNumber];
  document.getElementById('divRandom').innerText = kWord;
  document.getElementById('divRandom2').innerText = eWord;
}
//1002 TENSE_PRESENT
function function1001() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + VERB_SENTENCE_FORM_1_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1003 TENSE_PAST
function function1002() {
  let valueNumber = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + VERB_SENTENCE_FORM_1_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1010 AUXILIARY_WILL_K
function function1010() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WILL_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_WILL_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "will " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1102 AUXILIARY_CAN_K
function function1102() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_CAN_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_CAN_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "can " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1103 AUXILIARY_MAY_K
function function1103() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_MAY_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_MAY_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "may " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1104 AUXILIARY_WILL_K
function function1104() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WILL_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_WILL_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "will " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1105 AUXILIARY_BeGoingTo_K
function function1105() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_WILL_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_WILL_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "going to " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1107 AUXILIARY_MUST_K
function function1107() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_MUST_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_MUST_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "must " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1108 AUXILIARY_HaveTo_K
function function1108() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_HaveTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_HaveTo_K[valueNumber];
  let eWord = pronounBoxHaveE[valueNumber2][valueNumber2] + "have to " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1109 AUXILIARY_SHOULD_K
function function1109() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_SHOULD_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_SHOULD_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "should " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1109_2 AUXILIARY_OughtTo_K
function function1109v2() {
  let valueNumber = Math.floor(Math.random() * AUXILIARY_OughtTo_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = pronounBoxK[valueNumber2] + AUXILIARY_OughtTo_K[valueNumber];
  let eWord = pronounBoxE[valueNumber2] + "ought to " + VERB_SENTENCE_FORM_1_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}

//1201 GERUND_K
function function1201() {
  let valueNumber = Math.floor(Math.random() * GERUND_K.length);
  let valueNumber2 = Math.floor(Math.random() * pronounBoxK.length);
  let kWord = GERUND_K[valueNumber];
  let eWord = GERUND_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1202 GERUND_TYPE_K
function function1202() {
  let valueNumber = Math.floor(Math.random() * GERUND_TYPE_K.length);
  let valueNumber2 = Math.floor(Math.random() * GERUND_K.length);
  let kWord = GERUND_K[valueNumber2] + GERUND_TYPE_K[valueNumber];
  let eWord = GERUND_TYPE_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1203 GERUND_NEGATIVE_K
function function1203() {
  let valueNumber = Math.floor(Math.random() * GERUND_K.length);
  let valueNumber2 = Math.floor(Math.random() * GERUND_NEGATIVE_K.length);
  let kWord = GERUND_NEGATIVE_K[valueNumber2] + GERUND_K[valueNumber];
  let eWord = GERUND_NEGATIVE_E[valueNumber2] + GERUND_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1204 GERUND_SENSE_SUBJECT_SENTENCE_K
function function1204() {
  let valueNumber = Math.floor(Math.random() * GERUND_K.length);
  let valueNumber2 = Math.floor(Math.random() * GERUND_NEGATIVE_K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + GERUND_K[valueNumber];
  let eWord = PRONOUN_PERSONAL_POSSESSIVE_2E[valueNumber2] + " " + GERUND_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1204 GERUND_SENSE_SUBJECT_K
function function1204v2() {
  let valueNumber = Math.floor(Math.random() * GERUND_K.length);
  let valueNumber2 = Math.floor(Math.random() * GERUND_NEGATIVE_K.length);
  let valueNumber3 = Math.floor(Math.random() * GERUND_SENSE_SUBJECT_SENTENCE_E.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber2] + " " + GERUND_K[valueNumber] + GERUND_SENSE_SUBJECT_SENTENCE_K[valueNumber3];
  let eWord = GERUND_SENSE_SUBJECT_SENTENCE_E[valueNumber3] + PRONOUN_PERSONAL_POSSESSIVE_2E[valueNumber2] + " " + GERUND_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;

}
//1205 GERUND_VS_PRESENT_PARTICIPLE_K
//1206 VERB_WITH_K
function function1206() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_K.length);
  let kWord = VERB_WITH_K[valueNumber];
  let eWord = VERB_WITH_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1207 VERB_WITH_TO_K
function function1207() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_TO_K.length);
  let kWord = VERB_WITH_TO_K[valueNumber];
  let eWord = VERB_WITH_TO_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1208 VERB_WITH_ING_K
function function1208() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_ING_K.length);
  let kWord = VERB_WITH_ING_K[valueNumber];
  let eWord = VERB_WITH_ING_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1209 VERB_WITH_BOTH_K
function function1209() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_BOTH_K.length);
  let kWord = VERB_WITH_BOTH_K[valueNumber];
  let eWord = VERB_WITH_BOTH_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1210 VERB_WITH_BOTH_2K
function function1210() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_BOTH_2K.length);
  let kWord = VERB_WITH_BOTH_2K[valueNumber];
  let eWord = VERB_WITH_BOTH_2E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1210v2 VERB_WITH_BOTH_3K
function function1210v2() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_BOTH_3K.length);
  let kWord = VERB_WITH_BOTH_3K[valueNumber];
  let eWord = VERB_WITH_BOTH_3E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1211 GERUND_IDIOMATIC_EXPRESSION_K
function function1211() {
  let valueNumber = Math.floor(Math.random() * GERUND_IDIOMATIC_EXPRESSION_K.length);
  let kWord = GERUND_IDIOMATIC_EXPRESSION_K[valueNumber];
  let eWord = GERUND_IDIOMATIC_EXPRESSION_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1212 GERUND_IDIOMATIC_EXPRESSION_2K
function function1212() {
  let valueNumber = Math.floor(Math.random() * GERUND_IDIOMATIC_EXPRESSION_2K.length);
  let kWord = GERUND_IDIOMATIC_EXPRESSION_2K[valueNumber];
  let eWord = GERUND_IDIOMATIC_EXPRESSION_2E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1213 GERUND_SUMMARY_K

//1301 PARTICIPLE_K
//1302 PARTICIPLE_MODIFY_NOUN_K
//1303 PARTICIPLE_AS_COMPLEMENT_K
//1304 PARTICIPLE_EMOTION_K
//1305 PARTICIPIAL_CONSTRUCTION_K
//1306 PARTICIPIAL_CONSTRUCTION_MEANING_K
function function1306() {
  let valueNumber = Math.floor(Math.random() * PARTICIPIAL_CONSTRUCTION_MEANING_K.length);
  let kWord = PARTICIPIAL_CONSTRUCTION_MEANING_K[valueNumber];
  let eWord = PARTICIPIAL_CONSTRUCTION_MEANING_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
function function1306v2() {
  let valueNumber = Math.floor(Math.random() * PARTICIPIAL_CONSTRUCTION_MEANING_2K.length);
  let kWord = PARTICIPIAL_CONSTRUCTION_MEANING_2K[valueNumber];
  let eWord = PARTICIPIAL_CONSTRUCTION_MEANING_2E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1307 PARTICIPIAL_CONSTRUCTION_NEGATIVE_K
function function1307() {
  let valueNumber = Math.floor(Math.random() * PARTICIPLE_K.length);
  let valueNumber2 = Math.floor(Math.random() * GERUND_NEGATIVE_K.length);
  let kWord = GERUND_NEGATIVE_K[valueNumber2] + PARTICIPLE_K[valueNumber];
  let eWord = GERUND_NEGATIVE_E[valueNumber2] + PARTICIPLE_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1308 PARTICIPLE_IDIOMATIC_EXPRESSION_K
function function1308() {
  let valueNumber = Math.floor(Math.random() * PARTICIPLE_K.length);
  let kWord = PARTICIPLE_IDIOMATIC_EXPRESSION_K[valueNumber];
  let eWord = PARTICIPLE_IDIOMATIC_EXPRESSION_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1309 PARTICIPLE_WITH_WITH_K

//1401 PASSIVE_K
//1402 PASSIVE_SENTENCE_K
//1403 PASSIVE_TENSE_K
//1404 PASSIVE_NO_OBJECTIVE_K
//1405 PASSIVE_IDIOMATIC_PREP_K
function function1405() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_IDIOMATIC_PREP_K.length);
  let kWord = PASSIVE_IDIOMATIC_PREP_K[valueNumber];
  let eWord = PASSIVE_IDIOMATIC_PREP_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1406 PASSIVE_IDIOMATIC_PREP_2K
function function1406() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_IDIOMATIC_PREP_2K.length);
  let kWord = PASSIVE_IDIOMATIC_PREP_2K[valueNumber];
  let eWord = PASSIVE_IDIOMATIC_PREP_2E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1407 PASSIVE_SENTENCE_PATTERN_K
//1408 PASSIVE_SENTENCE_PATTERN_4TH_K
//1409 PASSIVE_SENTENCE_PATTERN_5TH_K
//1410 VERB_NOT_PASSIVE_K
//1411 PASSIVE_VERB_PHRASE_K
function function1411() {
  let valueNumber = Math.floor(Math.random() * PASSIVE_VERB_PHRASE_K.length);
  let kWord = PASSIVE_VERB_PHRASE_K[valueNumber];
  let eWord = PASSIVE_VERB_PHRASE_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1412 PASSIVE_THAT_CLAUSE_OBJECT_K

//1501 INFINITIVE_K
function function1501() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_TO_K.length);
  let kWord = VERB_WITH_TO_K[valueNumber];
  let eWord = VERB_WITH_TO_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1502 TO_INFINITIVE_VS_TO_PREPOSITION_K
//1503 TO_INFINITIVE_AS_NOUN_K
function function1503() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_K.length);
  let kWord = TO_INFINITIVE_AS_NOUN_K[valueNumber];
  let eWord = TO_INFINITIVE_AS_NOUN_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1504 TO_INFINITIVE_AS_NOUN_IT_TO_K
//1505 TO_INFINITIVE_AS_NOUN_INTERROGATIVE_K
function function1505() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_INTERROGATIVE_K.length);
  let kWord = TO_INFINITIVE_AS_NOUN_INTERROGATIVE_K[valueNumber];
  let eWord = TO_INFINITIVE_AS_NOUN_INTERROGATIVE_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
function function1505v2() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2K.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_K.length);
  let kWord = TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2K[valueNumber] + VERB_SENTENCE_FORM_1_K[valueNumber2] + "할지";
  let eWord = TO_INFINITIVE_AS_NOUN_INTERROGATIVE_2E[valueNumber] + " " + VERB_SENTENCE_FORM_1_E[valueNumber2];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1506 TO_INFINITIVE_AS_ADJECTIVE_K
//1507 TO_INFINITIVE_AS_ADVERB_K
function function1507() {
  let valueNumber = Math.floor(Math.random() * TO_INFINITIVE_AS_ADVERB_K.length);
  let kWord = TO_INFINITIVE_AS_ADVERB_K[valueNumber];
  let eWord = TO_INFINITIVE_AS_ADVERB_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1508 TO_INFINITIVE_AS_ADVERB_2K
function function1508() {
  let valueNumber = Math.floor(Math.random() * adjective1personK.length);
  let valueNumber2 = Math.floor(Math.random() * VERB_SENTENCE_FORM_1_K.length);
  let kWord = VERB_SENTENCE_FORM_1_K[valueNumber2] + " " + adjective1personK[valueNumber];
  let eWord = adjective1personE[valueNumber] + " to " + VERB_SENTENCE_FORM_1_E[valueNumber2];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1509 INFINITIVE_USAGE_K
//1510 INFINITIVE_IDIOMATIC_EXPRESSION_K
//1511 INFINITIVE_IDIOMATIC_EXPRESSION_TOO_TO_K
//1512 INFINITIVE_IDIOMATIC_EXPRESSION_ENOUGH_TO_K
//1513 INFINITIVE_NEGATIVE_SENSE_SUBJECT_TENSE_K
//1513v1 INFINITIVE_NEGATIVE_K
//1513v2 INFINITIVE_SENSE_SUBJECT_K
//1513v3 INFINITIVE_TENSE_K
//1514 INFINITIVE_VERB_WITH_TO_K
function function1514() {
  let valueNumber = Math.floor(Math.random() * VERB_WITH_TO_K.length);
  let kWord = VERB_WITH_TO_K[valueNumber];
  let eWord = VERB_WITH_TO_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1515 INFINITIVE_COMPLEMENT_K
//1516 INFINITIVE_COMPLEMENT_2K
//1517 INFINITIVE_BE_TO_K
function function1517() {
  let valueNumber = Math.floor(Math.random() * INFINITIVE_BE_TO_K.length);
  let kWord = INFINITIVE_BE_TO_K[valueNumber];
  let eWord = INFINITIVE_BE_TO_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
function function1517v2() {
  let valueNumber = Math.floor(Math.random() * INFINITIVE_BE_TO_2K.length);
  let kWord = INFINITIVE_BE_TO_2K[valueNumber];
  let eWord = INFINITIVE_BE_TO_2E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1518 INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_K
function function1517() {
  let valueNumber = Math.floor(Math.random() * INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_K.length);
  let kWord = INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_K[valueNumber];
  let eWord = INFINITIVE_INDEPENDENT_IDIOMATIC_EXPRESSION_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1602 COMPARATIVE_ORIGINAL_K
function function1602() {
  let valueNumber = Math.floor(Math.random() * adjective1personK.length);
  let valueNumber2 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
  let valueNumber3 = Math.floor(Math.random() * PRONOUN_PERSONAL_SUBJECTIVE_3K.length);
  let kWord = PRONOUN_PERSONAL_SUBJECTIVE_2K[valueNumber3] + " " + PRONOUN_PERSONAL_SUBJECTIVE_3K[valueNumber2] + "만큼 " + adjective1personK[valueNumber] + "다";
  let eWord = PRONOUN_PERSONAL_SUBJECTIVE_WITH_BE_E[valueNumber3] + " as " + adjective1personE[valueNumber] + " as " + PRONOUN_PERSONAL_OBJECTIVE_E[valueNumber2];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1605 COMPARATIVE_COMPARATIVE_RULE_K
function function1605() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_RULE_K.length);
  let kWord = COMPARATIVE_COMPARATIVE_RULE_K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_RULE_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//1606 COMPARATIVE_COMPARATIVE_IRREGULAR_K 1~3
function function1606() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_IRREGULAR_K.length);
  let kWord = COMPARATIVE_COMPARATIVE_IRREGULAR_K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_IRREGULAR_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
function function1606v2() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_IRREGULAR_2K.length);
  let kWord = COMPARATIVE_COMPARATIVE_IRREGULAR_2K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_IRREGULAR_2E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
function function1606v3() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_IRREGULAR_3K.length);
  let kWord = COMPARATIVE_COMPARATIVE_IRREGULAR_3K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_IRREGULAR_3E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
function function1606v4() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_IRREGULAR_4K.length);
  let kWord = COMPARATIVE_COMPARATIVE_IRREGULAR_4K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_IRREGULAR_4E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
function function1607() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_IDIOMATIC_EXPRESSION_K.length);
  let kWord = COMPARATIVE_IDIOMATIC_EXPRESSION_K[valueNumber];
  let eWord = COMPARATIVE_IDIOMATIC_EXPRESSION_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
function function1609() {
  let valueNumber = Math.floor(Math.random() * COMPARATIVE_COMPARATIVE_TO_NOT_THAN_K.length);
  let kWord = COMPARATIVE_COMPARATIVE_TO_NOT_THAN_K[valueNumber];
  let eWord = COMPARATIVE_COMPARATIVE_TO_NOT_THAN_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}


RELATIVES_K
RELATIVE_PRONOUN_USAGE_K
RELATIVE_PRONOUN_WHO_WHICH_THAT_K
RELATIVE_PRONOUN_THAT_K
RELATIVE_PRONOUN_WHAT_K
RELATIVE_PRONOUN_OMIT_K
DEFINING_RELATIVE_CLAUSE_K
RELATIVE_PRONOUN_WITH_PREP_K
RELATIVE_ADVERB_K
DEFINING_RELATIVE_CLAUSE_2K
RELATIVE_ADVERB_ANTECEDENT_K
COMPOUND_RELATIVE_PRONOUN_K
COMPOUND_RELATIVE_PRONOUN_2K
COMPOUND_RELATIVE_ADVERB_K
COMPOUND_RELATIVES_K

function function1801() {
  let valueNumber = Math.floor(Math.random() * SUBJUNCTIVE_K.length);
  let kWord = SUBJUNCTIVE_K[valueNumber];
  let eWord = SUBJUNCTIVE_E[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}

SUBJUNCTIVE_PAST_K
SUBJUNCTIVE_PAST_PERFECT_K
SUBJUNCTIVE_I_WISH_K
SUBJUNCTIVE_AS_IF_K
SUBJUNCTIVE_MIXED_K
SUBJUNCTIVE_PRESENT_K
SUBJUNCTIVE_FUTURE_K
SUBJUNCTIVE_OTHERS_K

INTERROGATIVE_K
INTERROGATIVE_USAGE_K
INTERROGATIVE_PRONOUN_K
INTERROGATIVE_ADVERB_K
INTERROGATIVE_HOW_K
INTERROGATIVE_ALTERNATIVE_NEGATIVE_K
TAG_QUESTION_K
INDIRECT_QUESTION_K
INTERROGATIVE_WHAT_HOW_K

AGREEMENT_K
AGREEMENT_ON_NUMBER_K
AGREEMENT_ON_NUMBER_2K
AGREEMENT_TENSE_K
AGREEMENT_MINDMAP_K

SPEECH_K
SPEECH_QUOTED_REPORTED_K
SPEECH_ADVERB_PHRASE_K
SPEECH_INTERROGATIVE_K
SPEECH_IMPERATIVE_K
SPEECH_MINDMAP_K

SPECIAL_SYNTAX_K
SPECIAL_SYNTAX_EMPHASIS_K
SPECIAL_SYNTAX_IT_THAT_K
SPECIAL_SYNTAX_INVERSION_K
SPECIAL_SYNTAX_SO_NEITHER_K
SPECIAL_SYNTAX_OMIT_K
SPECIAL_SYNTAX_INANIMATES_SUBJECT_K

SENTENCE_BASIC_K
SENTENCE_BASIC_2K
SENTENCE_EXTENDED_K
SENTENCE_TYPE_K
EXCLAMATORY_K
EXCLAMATORY_SOLUTION_K
SENTENCE_IMPERATIVE_K
SENTENCE_SUGGESTION_K

SENTENCE_ELEMENTS_K
SENTENCE_PATTERN_K
SENTENCE_PATTERN_2K
SENTENCE_THERE_BE_K
SENTENCE_PATTERN_1_2_3_K
SENTENCE_PATTERN_4_K
SENTENCE_PATTERN_5_K
SENTENCE_PATTERN_5_2K
SENTENCE_PATTERN_5_3K



//인칭대명사-소유격-인칭대명사
function pronoun8() {
  const firstArray = new Array(
    '나의 ',
    '너의 ',
    '그의 ',
    '그녀의 ',
    '그것의 ',
    '우리의 ',
    '너희들의 ',
    '그들의 '
  );
  let result = getRandomTwoChar(firstArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
//인칭대명사-소유대명사
function pronoun9() {
  const firstArray = new Array(
    '나의 것 ',
    '너의 것 ',
    '그의 것 ',
    '그녀의 것 ',
    '그것의 것 ',
    '우리의 것 ',
    '너희들의 것 ',
    '그들의 것 '
  );
  let result = getRandomTwoChar(firstArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
//인칭대명사-목적격
function pronoun10() {
  const firstArray = new Array(
    '나를',
    '너를 ',
    '그를 ',
    '그녀를 ',
    '그것을 ',
    '우리를 ',
    '너희들을 ',
    '그들을 '
  );
  let result = getRandomTwoChar(firstArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

//지시대명사
function pronoun2() {
  const firstArray = new Array(
    '이것 ',
    '저것 ',
    '그것 ',
    '이것들 ',
    '저것들 ',
    '그것들 '
  );
  let result = getRandomTwoChar(firstArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
//의문사
function pronoun3() {
  const firstArray = new Array('누구', '무엇', '어디', '언제', '왜', '어떻게');

  let result = getRandomTwoChar(firstArray) + '?';
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
//재귀대명사
function pronoun13() {
  const firstArray = new Array(
    '나자신',
    '너자신 ',
    '그자신 ',
    '그녀자신 ',
    '그것자신 ',
    '우리자신들 ',
    '너희자신들 ',
    '그들자신들 '
  );
  let result = getRandomTwoChar(firstArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

//be동사
function getRandomDouble0() {
  const secondArray = new Array(
    '새롭다 ',
    '학생이다 ',
    '선생님이다 ',
    '거기에 있다 ',
    '교실에 있다 ',
    '책상 위에 있다 ',
    '크다',
    '작다',
    '빠르다',
    '느리다',
    '좋다',
    '나쁘다',
    '비싸다',
    '싸다',
    '두껍다',
    '얇다',
    '시끄럽다',
    '조용하다',
    '똑똑하다',
    '멍청하다',
    '젖었다',
    '말랐다',
    '무겁다',
    '가볍다',
    '딱딱하다',
    '부드럽다',
    '얕다',
    '깊다',
    '쉽다',
    '어렵다',
    '좁다',
    '넓다',
    '광대하다',
    '약하다',
    '강하다',
    '부유하다',
    '가난하다',
    '젊다',
    '늙다',
    '길다',
    '짧다',
    '  높다',
    '  낮다',
    '  관대하다',
    '  인색하다',
    '  진실하다  ',
    '  거짓이다',
    '  아름답다',
    '  못생겼다',
    '  새롭다',
    '  오래됐다',
    '행복하다',
    '슬프다',
    '안전하다',
    '위험하다',
    '이르다',
    '크지 않다',
    '작지 않다',
    '빠르지 않다',
    '느리지 않다',
    '좋지 않다',
    '나쁘지 않다',
    '비싸지 않다',
    '싸지 않다',
    '두껍지 않다',
    '얇지 않다',
    '시끄럽지 않다',
    '조용하지 않다',
    '똑똑하지 않다',
    '멍청하지 않다',
    '젖지 않았다',
    '마르지 않다',
    '무겁지 않다',
    '가볍지 않다',
    '딱딱하지 않다',
    '부드럽지 않다',
    '얕지 않다',
    '깊지 않다',
    '쉽지 않다',
    '어렵지 않다',
    '좁지 않다',
    '넓지 않다',
    '광대하지 않다',
    '약하지 않다',
    '강하지 않다',
    '부유하지 않다',
    '가난하지 않다',
    '젊지 않다',
    '늙지 않다',
    '길지 않다',
    '짧지 않다',
    '  높지 않다',
    '  낮지 않다',
    '  관대하지 않다',
    '  인색하지 않다',
    '  진실하지 않다  ',
    '  거짓이지 않다',
    '  아름답지 않다',
    '  못생기지 않다',
    '  새롭지 않다',
    '  안오래됐다',
    '행복하지 않다',
    '슬프지 않다',
    '안전하지 않다',
    '위험하지 않다',
    '이르지 않다',
    '크니?',
    '작니?',
    '빠르니?',
    '느리니?',
    '좋니?',
    '나쁘니?',
    '비싸니?',
    '싸니?',
    '두껍니?',
    '얇니?',
    '시끄럽니?',
    '조용하니?',
    '똑똑하니?',
    '멍청하니?',
    '젖었니?',
    '말랐니?',
    '무겁니?',
    '가볍니?',
    '딱딱하니?',
    '부드럽니?',
    '얕니?',
    '깊니?',
    '쉽니?',
    '어렵니?',
    '좁니?',
    '넓니?',
    '광대하니?',
    '약하니?',
    '강하니?',
    '부유하니?',
    '가난하니?',
    '젊니?',
    '늙었니?',
    '기니?',
    '짧니?',
    '  높니?',
    '  낮니?',
    '  관대하니?',
    '  인색하니?',
    '  진실하니?  ',
    '  거짓이니?',
    '  아름답니?',
    '  못생겼니?',
    '  새롭니?',
    '  오래됐니?  ',
    '행복하니?',
    '슬프니?',
    '안전하니?',
    '위험하니?',
    '이르니?'
  );
  const thirdArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

//일반동사 & 단순
function getRandomDouble1() {
  const secondArray = new Array(
    '사랑한다 ',
    '좋아한다 ',
    '즐긴다 ',
    '시작한다 ',
    '멈춘다',
    '연다',
    '닫는다',
    '요리한다',
    '먹는다',
    '대화한다',
    '달린다',
    '난다',
    '시작한다',
    '그만둔다',
    '말한다',
    '간다',
    '온다',
    '말한다',
    '본다',
    '보인다',
    '가지고 있다',
    '마신다',
    '점프한다',
    '잡는다',
    '이야기한다',
    '씻는다',
    '걷는다',
    '일어선다',
    '앉는다',
    '넘어진다',
    '논다',
    '공부한다',
    '돕는다',
    '듣는다',
    '본다',
    '  당긴다',
    '  민다',
    '  그린다',
    '  들린다',
    '  보인다  ',
    '  자른다',
    '  읽는다',
    '  움직인다',
    '  묻는다',
    '  사용한다  ',
    '한다',
    ' 하게 한다',
    ' 운다',
    ' 수영한다',
    '잔다',
    '사랑하지 않는다 ',
    '좋아하지 않는다 ',
    '즐기지 않는다 ',
    '시작하지 않는다 ',
    '멈추지 않는다',
    '열지 않는다',
    '닫지 않는다',
    '요리하지 않는다',
    '먹지 않는다',
    '대화하지 않는다',
    '달리지 않는다',
    '날지 않는다',
    '시작하지 않는다',
    '그만두지 않는다',
    '말하지 않는다',
    '가지 않는다',
    '오지 않는다',
    '말하지 않는다',
    '보지 않는다',
    '보이지 않는다',
    '가지고 있지 않다',
    '마시지 않는다',
    '점프하지 않는다',
    '잡지 않는다',
    '이야기하지 않는다',
    '씻지 않는다',
    '걷지 않는다',
    '일어서지 않는다',
    '앉지 않는다',
    '넘어지지 않는다',
    '놀지 않는다',
    '공부하지 않는다',
    '돕지 않는다',
    '듣지 않는다',
    '보지 않는다',
    '  안당긴다',
    '  안민다',
    '  안그린다',
    '  안들린다',
    '  안보인다  ',
    ' 안자른다',
    '  안읽는다',
    '  안움직인다',
    '  안묻는다',
    '  안사용한다  ',
    '안한다',
    ' 하게 안한다',
    ' 울지 않는다',
    '안잔다',
    '사랑하니? ',
    '좋아하니? ',
    '즐기니? ',
    '시작하니? ',
    '멈추니?',
    '여니?',
    '닫니?',
    '요리하니?',
    '먹니?',
    '대화하니?',
    '달리니?',
    '날아가니?',
    '시작하니?',
    '그만두니?',
    '말하니?',
    '가니?',
    '오니?',
    '말하니?',
    '보니?',
    '보이니?',
    '가지니?',
    '마시니?',
    '점프하니?',
    '잡니?',
    '이야기하니?',
    '씻니?',
    '걷니?',
    '서있니?',
    '앉니?',
    '넘어지니?',
    '노니?',
    '공부하니?',
    '돕니?',
    '듣니?',
    '보니?',
    '  당기니?',
    '  미니?',
    '  그리니?',
    '  들리니?',
    '  보이니?  ',
    '  자르니?',
    '  읽니?',
    '  움직이니?',
    '  묻니?',
    '  사용하니?  ',
    '하니?',
    ' 하게 하니?',
    ' 우니?',
    ' 수영하니?',
    '자니?'
  );
  const thirdArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 과거 시제
function getRandomPast() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '사랑했다 ',
    '좋아했다 ',
    '즐겼다 ',
    '시작했다 ',
    '멈췄다 ',
    '말했다 ',
    '이야기했다 ',
    '물었다 ',
    '읽었다 ',
    '움직였다 ',
    ' 앉았다',
    '일어섰다 ',
    '걸었다 ',
    '달렸다 ',
    '날았다 ',
    '넘어졌다 ',
    '뛰었다 ',
    '잡았다 ',
    '따랐다 ',
    '자랐다 ',
    '도착했다 ',
    '봤다 ',
    '들었다 ',
    '왔다 ',
    '갔다 ',
    '줬다 '
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}



// 진행 시제
function getRandomContinuous() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '가고 있다 ',
    '먹고 있다 ',
    '읽고 있다 ',
    '쓰고 있다 ',
    '놀고 있다 ',
    '잡고 있다 '
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 완료 시제
function getRandomPerfect() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '갔다 왔다 ',
    '먹어왔다 ',
    '읽어 왔다 ',
    '써왔다 ',
    '놀아왔다 ',
    '잡아왔다 '
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 완료 진행 시제
function getRandomPerfectContinuous() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '게임을 해오는 중이다 ',
    '읽어오는 중이다 ',
    '함께 놀아오고 있는 중이다 ',
    '써왔다 '
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 과거 완료 시제
function getRandomPastPerfect() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '갔다 왔었다 ',
    '먹어왔었다 ',
    '읽어 왔었다 ',
    '써왔었다 ',
    '놀아왔었다 ',
    '잡아왔었다 '
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 미래 완료 시제
function getRandomFuturePerfect() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '갔다 왔을 거다 ',
    '먹어왔을 거다 ',
    '읽어 왔을 거다 ',
    '써왔을 거다 ',
    '놀아왔을 거다 ',
    '잡아왔을 거다 '
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}



// may
function getRandomMay() {
  const firstArray = new Array('저 ');
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '걸어도 되요? ',
    '들어와도 되나요?',
    '한국말 해도 되요?',
    '물 좀 마셔도 되나요?',
    '전화기 좀 빌려써도 되나요?',
    '집에 가도 되요?',
    '노래해도 되요?'
  );
  let result =
    getRandomTwoChar(firstArray) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// should
function getRandomShould() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '걸어야 된다 ',
    '들어와야 한다',
    '영어로 말 해야 한다',
    '춤 춰야 한다',
    '숙제를 해야만 한다',
    '이겨야 한다',
    '노래해야만 한다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// should have p.p.
function getRandomShouldHavePP() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '걸었어야 했다 ',
    '들어왔어야 했다',
    '영어로 말 했어야 했다',
    '춤 췄어야 했다',
    '숙제를 했어야만 했다',
    '이겼어야 했다',
    '노래했어야만 했다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// must have p.p.
function getRandomMustHavePP() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '걸었음에 틀림없다 ',
    '들어왔음에 틀림없다',
    '영어로 말 했음에 틀림없다',
    '춤 췄음에 틀림없다',
    '숙제를 했음에 틀림없다',
    '이겼음에 틀림없다',
    '노래했음에 틀림없다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// cannot have p.p.
function getRandomCannotHavePP() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '걸었을리가 없다 ',
    '들어왔을리가 없다',
    '영어로 말했을리가 없다',
    '춤 췄을리가 없다',
    '숙제를 했을리가 없다',
    '이겼을리가 없다',
    '노래했을리가 없다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// may have p.p.
function getRandomMayHavePP() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '걸었을지도 모른다 ',
    '들어왔을지도 모른다',
    '영어로 말했을지도 모른다',
    '춤 췄을지도 모른다',
    '숙제를 했을지도 모른다',
    '이겼을지도 모른다',
    '노래했을지도 모른다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// used to
function getRandomUsedTo() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '걷곤 했다 ',
    '들어오곤 했다',
    '영어로 말하곤 했다',
    '춤 추곤 했다',
    '숙제를 하곤 했다',
    '이기곤 했다',
    '노래하곤 했다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// had better
function getRandomHadBetter() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '걷는 것이 낫다 ',
    '들어오는 게 낫다',
    '영어로 말하는 게 낫다',
    '춤 추는 게 낫다',
    '숙제를 하는 게 낫다',
    '이기는 게 낫다',
    '노래하는 게 낫다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// would rather
function getRandomWouldRather() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '차라리 걷는 것이 낫다 ',
    '차라리 들어는 게 낫다',
    '차라리 영어로 말하는 게 낫다',
    '차라리 춤 추는 게 낫다',
    '차라리 숙제를 하는 게 낫다',
    '차라리 이기는 게 낫다',
    '차라리 노래하는 게 낫다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 수동태
function getRandomPassive() {
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '얘기를 들었다 ',
    '주어졌다(받았다)',
    '가르침을 받았다(배웠다)'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 진행 수동태
function getRandomPassive2() {
  const firstArray = new Array(
    '내 핸드폰은 ',
    '그 컴퓨터는 ',
    '그 바닥은 ',
    '그 벽은 ',
    '그 탭은 '
  );
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '수리되고 있다',
    '닦이고 있다',
    '잘리고 있다',
    '옮겨지고 있다'
  );
  let result =
    getRandomTwoChar(firstArray) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 완료 수동태
function getRandomPassive3() {
  const firstArray = new Array(
    '내 책들은 ',
    '그 컴퓨터들은 ',
    '그 접시들은 ',
    '그 의자들은 ',
    '그 책상들은 '
  );
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '놓여 있다 ',
    '덮여 있다',
    '쌓여 있다',
    '남겨져 있다'
  );
  let result =
    getRandomTwoChar(firstArray) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
// 분사 ing
function getRandomParticipleSentence() {
  const firstArray = new Array(
    '나의 ',
    '너의 ',
    '그의 ',
    '그녀의 ',
    '우리의 ',
    '그들의 ',
    '그 ',
    '한 '
  );
  const secondArray = new Array(
    '춤추고 있는 ',
    '노래하고 있는 ',
    '웃고 있는 ',
    '부서진 ',
    '만들어진 '
  );
  const thirdArray = new Array(
    '친구가 ',
    '선생님이 ',
    '니콜이 ',
    '싸이먼이 ',
    '아기가 ',
    '창문이 ',
    '컵이 ',
    '책상이'
  );
  const fourthArray = new Array(
    ' 있다 ',
    '바닥에 있다',
    '방에 있다',
    '학교에 있다'
  );
  let result =
    getRandomTwoChar(firstArray) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray) +
    getRandomTwoChar(fourthArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 분사 ing
function getRandomParticipleIng() {
  const secondArray = new Array('춤추고 있는 ', '노래하고 있는 ', '웃고 있는 ');
  const thirdArray = new Array('친구 ', '선생님 ', '니콜 ', '싸이먼 ', '아기 ');
  let result = getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 분사 p.p.
function getRandomParticiplePP() {
  const secondArray = new Array('부서진 ', '만들어진 ');
  const thirdArray = new Array(
    '창문 ',
    '컵 ',
    '책상',
    '컴퓨터',
    'TV',
    '핸드폰',
    '탭'
  );
  let result = getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 분사 구문
function getRandomParticiple2() {
  const firstArray = new Array(
    '내 책들은 ',
    '그 컴퓨터들은 ',
    '그 접시들은 ',
    '그 의자들은 ',
    '그 책상들은 '
  );
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(
    '놓여 있다 ',
    '덮여 있다',
    '쌓여 있다',
    '남겨져 있다'
  );
  let result =
    getRandomTwoChar(firstArray) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 비인칭 독립 분사구문
function getRandomParticiple3() {
  const firstArray = new Array(
    '일반적으로 말해서 ',
    '솔직히 말해서 ',
    '엄밀히 말해서 ',
    '대략적으로 말해서 ',
    '~와 비교해 보면',
    '만일 ~라면',
    '~을 고려하면 ',
    '~로 판단하건데',
    '~얘기가 나와서 말인데'
  );
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// with 목적어 분사
function getRandomParticiple4() {
  const firstArray = new Array('~한 채로 ', '~된 채로 ');
  const secondArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const thirdArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  let result =
    getRandomTwoChar(firstArray) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
// with 목적어 분사-응용
function getRandomParticiple5() {
  const firstArray = new Array(
    '친구가 ',
    '선생님이 ',
    '니콜이 ',
    '싸이먼이 ',
    '아기가 ',
    '창문이 ',
    '컵이 ',
    '책상이 '
  );
  const secondArray = new Array(
    '춤추고 있는 ',
    '노래하고 있는 ',
    '웃고 있는 ',
    '부서진 ',
    '만들어진 '
  );
  const thirdArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  let result =
    getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + '채로';
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 관계사 주격1
function getRandomReletives1() {
  const secondArray = new Array(
    '프랑스에 살았던 ',
    '학생인 ',
    '춤추고 있는 ',
    '나에게 전화하는 ',
    '요리하고 있는 ',
    '매우 어린 ',
    '다른 사람들을 돕는 ',
    '은행에서 일하는 ',
    '서있는 ',
    '책을 읽고 있는 ',
    '물을 마시고 있는 ',
    '공부하고 있는 ',
    '노래를 듣고 있는 ',
    '수영하고 있는 '
  );
  const thirdArray = new Array(
    '한 남자를 ',
    '한 친구를 ',
    '그 아가를 ',
    '한 여자를 ',
    '한 소녀를 ',
    '학생들을 ',
    '선생님들을 ',
    '친구들을 '
  );
  const lastArray = new Array(
    '사랑한다 ',
    '봤다 ',
    '만났다 ',
    '초대했다 ',
    '안다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray) +
    getRandomTwoChar(lastArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
// 관계사 주격2
function getRandomReletives11() {
  const firstArray = new Array(
    '나를 ',
    '너를 ',
    '그를 ',
    '그녀를 ',
    '니콜을 ',
    '우리를 ',
    '너희들을 ',
    '그들을 '
  );
  const secondArray = new Array(
    '프랑스에 살았던 ',
    '학생인 ',
    '춤추고 있는 ',
    '나에게 전화하는 ',
    '요리하고 있는 ',
    '매우 어린 ',
    '다른 사람들을 돕는 ',
    '은행에서 일하는 ',
    '서있는 ',
    '책을 읽고 있는 ',
    '물을 마시고 있는 ',
    '공부하고 있는 ',
    '노래를 듣고 있는 ',
    '수영하고 있는 '
  );
  const thirdArray = new Array(
    '한 남자는 ',
    '그 친구는 ',
    '그 아가는 ',
    '한 여자는 ',
    '한 소녀는 ',
    '학생들은 ',
    '선생님들은 ',
    '친구들은 '
  );
  const lastArray = new Array(
    '사랑한다 ',
    '봤다 ',
    '만났다 ',
    '초대했다 ',
    '안다'
  );
  let result =
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray) +
    getRandomTwoChar(firstArray) +
    getRandomTwoChar(lastArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
// 관계사 목적격
function getRandomReletives2() {
  const secondArray = new Array(
    '프랑스를 사랑하는 ',
    '학생들이 좋아하는 ',
    '선생님이 좋아하는 ',
    '우리 엄마가 초대한 ',
    'Tom이 믿는 ',
    '니콜이 돕는 '
  );
  const thirdArray = new Array(
    '한 남자를 ',
    '한 친구를 ',
    '그 아가를 ',
    '한 여자를 ',
    '한 소녀를 ',
    '학생들을 ',
    '선생님들을 ',
    '친구들을 '
  );
  const lastArray = new Array(
    '사랑한다 ',
    '봤다 ',
    '만났다 ',
    '초대했다 ',
    '안다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray) +
    getRandomTwoChar(lastArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
// 관계사 소유격
function getRandomReletives3() {
  const secondArray = new Array(
    '여자 형제가 선생님인 ',
    '남자 형제가 잘생긴 ',
    '차가 포르쉐인 ',
    '(남자)사촌이 BTS인 ',
    '(여자)사촌이 BTS를 좋아하는 ',
    '노래를 부르는 것이 취미인 ',
    '머리카락이 곱슬거리는 ',
    '개가 귀여운 ',
    '생일이 크리스마스인  ',
    '삶이 힘든 '
  );
  const thirdArray = new Array(
    '한 남자를 ',
    '한 친구를 ',
    '그 아가를 ',
    '한 여자를 ',
    '한 소녀를 ',
    '학생들을 ',
    '선생님들을 ',
    '친구들을 '
  );
  const lastArray = new Array(
    '사랑한다 ',
    '봤다 ',
    '만났다 ',
    '초대했다 ',
    '안다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray) +
    getRandomTwoChar(lastArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
// 관계사 what
function getRandomReletivesWhat() {
  const secondArray = new Array(
    '네가 필요한 ',
    '그가 찾고 있는 ',
    '그녀가 말 한 ',
    '그녀의 엄마가 화나게 만드는 ',
    '우리가 계획했던 ',
    '그들이 원하는 '
  );
  const thirdArray = new Array(
    '것을 안다 ',
    '것을 모르겠다 ',
    '것을 이해하지 못한다 ',
    '것은 아니다'
  );
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
// 관계사 전체
/*  
  function getRandomReletives() {
    getRandomReletives1
    getRandomReletives11
    getRandomReletives2
    getRandomReletives3
    의 결과중에 뽑기
    document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  }
*/
// 관계사부사
function getRandomReletives4() {
  const secondArray = new Array(
    '사랑한다 ',
    '좋아한다 ',
    '즐긴다 ',
    '시작한다 ',
    '멈춘다',
    '연다',
    '닫는다',
    '요리한다',
    '먹는다',
    '대화한다',
    '달린다',
    '난다',
    '시작한다',
    '그만둔다',
    '말한다',
    '간다',
    '온다',
    '말한다',
    '본다',
    '보인다',
    '가지고 있다',
    '마신다',
    '점프한다',
    '잡는다',
    '이야기한다',
    '씻는다',
    '걷는다',
    '일어선다',
    '앉는다',
    '넘어진다',
    '논다',
    '공부한다',
    '돕는다',
    '듣는다',
    '본다',
    '  당긴다',
    '  민다',
    '  그린다',
    '  들린다',
    '  보인다  ',
    '  자른다',
    '  읽는다',
    '  움직인다',
    '  묻는다',
    '  사용한다  ',
    '한다',
    ' 하게 한다',
    ' 운다',
    ' 수영한다',
    '잔다',
    '사랑하지 않는다 ',
    '좋아하지 않는다 ',
    '즐기지 않는다 ',
    '시작하지 않는다 ',
    '멈추지 않는다',
    '열지 않는다',
    '닫지 않는다',
    '요리하지 않는다',
    '먹지 않는다',
    '대화하지 않는다',
    '달리지 않는다',
    '날지 않는다',
    '시작하지 않는다',
    '그만두지 않는다',
    '말하지 않는다',
    '가지 않는다',
    '오지 않는다',
    '말하지 않는다',
    '보지 않는다',
    '보이지 않는다',
    '가지고 있지 않다',
    '마시지 않는다',
    '점프하지 않는다',
    '잡지 않는다',
    '이야기하지 않는다',
    '씻지 않는다',
    '걷지 않는다',
    '일어서지 않는다',
    '앉지 않는다',
    '넘어지지 않는다',
    '놀지 않는다',
    '공부하지 않는다',
    '돕지 않는다',
    '듣지 않는다',
    '보지 않는다',
    '  안당긴다',
    '  안민다',
    '  안그린다',
    '  안들린다',
    '  안보인다  ',
    ' 안자른다',
    '  안읽는다',
    '  안움직인다',
    '  안묻는다',
    '  안사용한다  ',
    '안한다',
    ' 하게 안한다',
    ' 울지 않는다',
    '안잔다',
    '사랑하니? ',
    '좋아하니? ',
    '즐기니? ',
    '시작하니? ',
    '멈추니?',
    '여니?',
    '닫니?',
    '요리하니?',
    '먹니?',
    '대화하니?',
    '달리니?',
    '날아가니?',
    '시작하니?',
    '그만두니?',
    '말하니?',
    '가니?',
    '오니?',
    '말하니?',
    '보니?',
    '보이니?',
    '가지니?',
    '마시니?',
    '점프하니?',
    '잡니?',
    '이야기하니?',
    '씻니?',
    '걷니?',
    '서있니?',
    '앉니?',
    '넘어지니?',
    '노니?',
    '공부하니?',
    '돕니?',
    '듣니?',
    '보니?',
    '  당기니?',
    '  미니?',
    '  그리니?',
    '  들리니?',
    '  보이니?  ',
    '  자르니?',
    '  읽니?',
    '  움직이니?',
    '  묻니?',
    '  사용하니?  ',
    '하니?',
    ' 하게 하니?',
    ' 우니?',
    ' 수영하니?',
    '자니?'
  );
  const thirdArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
// 복합관계대명사
function getRandomReletives5() {
  const secondArray = new Array(
    '사랑한다 ',
    '좋아한다 ',
    '즐긴다 ',
    '시작한다 ',
    '멈춘다',
    '연다',
    '닫는다',
    '요리한다',
    '먹는다',
    '대화한다',
    '달린다',
    '난다',
    '시작한다',
    '그만둔다',
    '말한다',
    '간다',
    '온다',
    '말한다',
    '본다',
    '보인다',
    '가지고 있다',
    '마신다',
    '점프한다',
    '잡는다',
    '이야기한다',
    '씻는다',
    '걷는다',
    '일어선다',
    '앉는다',
    '넘어진다',
    '논다',
    '공부한다',
    '돕는다',
    '듣는다',
    '본다',
    '  당긴다',
    '  민다',
    '  그린다',
    '  들린다',
    '  보인다  ',
    '  자른다',
    '  읽는다',
    '  움직인다',
    '  묻는다',
    '  사용한다  ',
    '한다',
    ' 하게 한다',
    ' 운다',
    ' 수영한다',
    '잔다',
    '사랑하지 않는다 ',
    '좋아하지 않는다 ',
    '즐기지 않는다 ',
    '시작하지 않는다 ',
    '멈추지 않는다',
    '열지 않는다',
    '닫지 않는다',
    '요리하지 않는다',
    '먹지 않는다',
    '대화하지 않는다',
    '달리지 않는다',
    '날지 않는다',
    '시작하지 않는다',
    '그만두지 않는다',
    '말하지 않는다',
    '가지 않는다',
    '오지 않는다',
    '말하지 않는다',
    '보지 않는다',
    '보이지 않는다',
    '가지고 있지 않다',
    '마시지 않는다',
    '점프하지 않는다',
    '잡지 않는다',
    '이야기하지 않는다',
    '씻지 않는다',
    '걷지 않는다',
    '일어서지 않는다',
    '앉지 않는다',
    '넘어지지 않는다',
    '놀지 않는다',
    '공부하지 않는다',
    '돕지 않는다',
    '듣지 않는다',
    '보지 않는다',
    '  안당긴다',
    '  안민다',
    '  안그린다',
    '  안들린다',
    '  안보인다  ',
    ' 안자른다',
    '  안읽는다',
    '  안움직인다',
    '  안묻는다',
    '  안사용한다  ',
    '안한다',
    ' 하게 안한다',
    ' 울지 않는다',
    '안잔다',
    '사랑하니? ',
    '좋아하니? ',
    '즐기니? ',
    '시작하니? ',
    '멈추니?',
    '여니?',
    '닫니?',
    '요리하니?',
    '먹니?',
    '대화하니?',
    '달리니?',
    '날아가니?',
    '시작하니?',
    '그만두니?',
    '말하니?',
    '가니?',
    '오니?',
    '말하니?',
    '보니?',
    '보이니?',
    '가지니?',
    '마시니?',
    '점프하니?',
    '잡니?',
    '이야기하니?',
    '씻니?',
    '걷니?',
    '서있니?',
    '앉니?',
    '넘어지니?',
    '노니?',
    '공부하니?',
    '돕니?',
    '듣니?',
    '보니?',
    '  당기니?',
    '  미니?',
    '  그리니?',
    '  들리니?',
    '  보이니?  ',
    '  자르니?',
    '  읽니?',
    '  움직이니?',
    '  묻니?',
    '  사용하니?  ',
    '하니?',
    ' 하게 하니?',
    ' 우니?',
    ' 수영하니?',
    '자니?'
  );
  const thirdArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
// 복합관계부사
function getRandomReletives6() {
  const secondArray = new Array(
    '사랑한다 ',
    '좋아한다 ',
    '즐긴다 ',
    '시작한다 ',
    '멈춘다',
    '연다',
    '닫는다',
    '요리한다',
    '먹는다',
    '대화한다',
    '달린다',
    '난다',
    '시작한다',
    '그만둔다',
    '말한다',
    '간다',
    '온다',
    '말한다',
    '본다',
    '보인다',
    '가지고 있다',
    '마신다',
    '점프한다',
    '잡는다',
    '이야기한다',
    '씻는다',
    '걷는다',
    '일어선다',
    '앉는다',
    '넘어진다',
    '논다',
    '공부한다',
    '돕는다',
    '듣는다',
    '본다',
    '  당긴다',
    '  민다',
    '  그린다',
    '  들린다',
    '  보인다  ',
    '  자른다',
    '  읽는다',
    '  움직인다',
    '  묻는다',
    '  사용한다  ',
    '한다',
    ' 하게 한다',
    ' 운다',
    ' 수영한다',
    '잔다',
    '사랑하지 않는다 ',
    '좋아하지 않는다 ',
    '즐기지 않는다 ',
    '시작하지 않는다 ',
    '멈추지 않는다',
    '열지 않는다',
    '닫지 않는다',
    '요리하지 않는다',
    '먹지 않는다',
    '대화하지 않는다',
    '달리지 않는다',
    '날지 않는다',
    '시작하지 않는다',
    '그만두지 않는다',
    '말하지 않는다',
    '가지 않는다',
    '오지 않는다',
    '말하지 않는다',
    '보지 않는다',
    '보이지 않는다',
    '가지고 있지 않다',
    '마시지 않는다',
    '점프하지 않는다',
    '잡지 않는다',
    '이야기하지 않는다',
    '씻지 않는다',
    '걷지 않는다',
    '일어서지 않는다',
    '앉지 않는다',
    '넘어지지 않는다',
    '놀지 않는다',
    '공부하지 않는다',
    '돕지 않는다',
    '듣지 않는다',
    '보지 않는다',
    '  안당긴다',
    '  안민다',
    '  안그린다',
    '  안들린다',
    '  안보인다  ',
    ' 안자른다',
    '  안읽는다',
    '  안움직인다',
    '  안묻는다',
    '  안사용한다  ',
    '안한다',
    ' 하게 안한다',
    ' 울지 않는다',
    '안잔다',
    '사랑하니? ',
    '좋아하니? ',
    '즐기니? ',
    '시작하니? ',
    '멈추니?',
    '여니?',
    '닫니?',
    '요리하니?',
    '먹니?',
    '대화하니?',
    '달리니?',
    '날아가니?',
    '시작하니?',
    '그만두니?',
    '말하니?',
    '가니?',
    '오니?',
    '말하니?',
    '보니?',
    '보이니?',
    '가지니?',
    '마시니?',
    '점프하니?',
    '잡니?',
    '이야기하니?',
    '씻니?',
    '걷니?',
    '서있니?',
    '앉니?',
    '넘어지니?',
    '노니?',
    '공부하니?',
    '돕니?',
    '듣니?',
    '보니?',
    '  당기니?',
    '  미니?',
    '  그리니?',
    '  들리니?',
    '  보이니?  ',
    '  자르니?',
    '  읽니?',
    '  움직이니?',
    '  묻니?',
    '  사용하니?  ',
    '하니?',
    ' 하게 하니?',
    ' 우니?',
    ' 수영하니?',
    '자니?'
  );
  const thirdArray = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ');
  let result =
    getRandomTwoChar(pronounBox) +
    getRandomTwoChar(secondArray) +
    getRandomTwoChar(thirdArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 가정법 과거
function getRandomCondition1() {
  const firstArray = new Array(
    '내가 ',
    '네가 ',
    '그가 ',
    '그녀가 ',
    '니콜이 ',
    '우리가 ',
    '너희들이 ',
    '그들이 '
  );
  const secondArray = new Array(
    '사랑하면',
    '좋아하면',
    '즐기면',
    '시작하면',
    '멈추면',
    '열면',
    '닫으면',
    '요리하면',
    '먹는다면',
    '대화한다면',
    '달린다면',
    '난다면',
    '시작한다면',
    '그만둔다면',
    '말한다면',
    '간다면',
    '온다면',
    '말한다면',
    '본다면',
    '가지고 있다면',
    '마신다면',
    '잡는다면',
    '이야기한다면',
    '씻는다면',
    '공부한다면',
    '돕는다면',
    '본다면',
    '당긴다면',
    '민다면',
    '그린다면',
    '자른다면',
    '읽는다면',
    '움직인다면',
    '묻는다면',
    '사용한다면',
    '한다면'
  );
  const thirdArray = new Array(
    '나는 ',
    '너는 ',
    '그는 ',
    '그녀는 ',
    '그것은 ',
    '우리는 ',
    '너희들은 ',
    '그들은 '
  );
  const lastArray = new Array(
    '행복할 텐데. ',
    '슬플텐데. ',
    '춤출 수 있을텐데. ',
    '알텐데.'
  );
  let result =
    '만약 ' +
    getRandomTwoChar(firstArray) +
    '그것을 ' +
    getRandomTwoChar(secondArray) +
    ', ' +
    getRandomTwoChar(thirdArray) +
    getRandomTwoChar(lastArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}
// 가정법 과거완료
function getRandomCondition2() {
  const firstArray = new Array(
    '내가 ',
    '네가 ',
    '그가 ',
    '그녀가 ',
    '니콜이 ',
    '우리가 ',
    '너희들이 ',
    '그들이 '
  );
  const secondArray = new Array(
    '사랑했다면',
    '좋아했다면',
    '즐겼다면',
    '시작했다면',
    '멈췄다면',
    '열었다면',
    '닫았다면',
    '요리했다면',
    '먹었다면',
    '대화했다면',
    '달렸다면',
    '날았다면',
    '시작했다면',
    '그만뒀다면',
    '말했다면',
    '갔다면',
    '왔다면',
    '말했다면',
    '봤다면',
    '가지고 있었다면',
    '마셨다면',
    '잡았다면',
    '이야기했다면',
    '씻었다면',
    '공부했다면',
    '도왔다면',
    '봤다면',
    '당겼다면',
    '밀었다면',
    '그렸다면',
    '잘랐다면',
    '읽었다면',
    '움직였다면',
    '물었다면',
    '사용했다면',
    '했다면'
  );
  const thirdArray = new Array(
    '나는 ',
    '너는 ',
    '그는 ',
    '그녀는 ',
    '그것은 ',
    '우리는 ',
    '너희들은 ',
    '그들은 '
  );
  const lastArray = new Array(
    '행복했을 텐데. ',
    '슬펐을텐데. ',
    '춤출 수 있었을텐데. ',
    '알았을텐데.'
  );
  let result =
    '만약 ' +
    getRandomTwoChar(firstArray) +
    '그것을 ' +
    getRandomTwoChar(secondArray) +
    ', ' +
    getRandomTwoChar(thirdArray) +
    getRandomTwoChar(lastArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// I wish 가정법
function getRandomCondition3() {
  const firstArray = new Array(
    '내가 ',
    '네가 ',
    '그가 ',
    '그녀가 ',
    '니콜이 ',
    '우리가 ',
    '너희들이 ',
    '그들이 '
  );
  const secondArray = new Array(
    '사랑했다면 ',
    '좋아했다면 ',
    '즐겼다면 ',
    '시작했다면 ',
    '멈췄다면 ',
    '열었다면 ',
    '닫았다면 ',
    '요리했다면 ',
    '먹었다면 ',
    '대화했다면 ',
    '달렸다면 ',
    '날았다면 ',
    '시작했다면 ',
    '그만뒀다면 ',
    '말했다면 ',
    '갔다면 ',
    '왔다면 ',
    '말했다면 ',
    '봤다면 ',
    '가지고 있었다면 ',
    '마셨다면 ',
    '잡았다면 ',
    '이야기했다면 ',
    '씻었다면 ',
    '공부했다면 ',
    '도왔다면 ',
    '봤다면 ',
    '  당겼다면 ',
    '밀었다면 ',
    '그렸다면 ',
    '잘랐다면 ',
    '읽었다면 ',
    '  움직였다면 ',
    '  물었다면 ',
    '  사용했다면   ',
    '했다면 '
  );
  let result =
    getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + ' 좋을텐데 ';
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// as if 가정법
function getRandomCondition4() {
  const firstArray = new Array(
    '내가 ',
    '네가 ',
    '그가 ',
    '그녀가 ',
    '니콜이 ',
    '우리가 ',
    '너희들이 ',
    '그들이 '
  );
  const secondArray = new Array(
    '사랑했던 ',
    '좋아했던 ',
    '즐겼던 ',
    '시작했던 ',
    '멈췄던 ',
    '열었던 ',
    '닫았던 ',
    '요리했던 ',
    '먹었던 ',
    '대화했던 ',
    '달렸던 ',
    '날았던 ',
    '시작했던 ',
    '그만뒀던 ',
    '말했던 ',
    '갔던 ',
    '왔던 ',
    '말했던 ',
    '봤던 ',
    '가지고 있었던 ',
    '마셨던 ',
    '잡았던 ',
    '이야기했던 ',
    '씻었던 ',
    '공부했던 ',
    '도왔던 ',
    '봤던 ',
    '  당겼던 ',
    '밀었던 ',
    '그렸던 ',
    '잘랐던 ',
    '읽었던 ',
    '  움직였던 ',
    '  물었던 ',
    '  사용했던   ',
    '했던 '
  );
  const thirdArray = new Array(
    '나는 ',
    '너는 ',
    '그는 ',
    '그녀는 ',
    '그것은 ',
    '우리는 ',
    '너희들은 ',
    '그들은 '
  );
  const lastArray = new Array(
    '행복했을 텐데. ',
    '슬펐을텐데. ',
    '춤출 수 있었을텐데. ',
    '알았을텐데.'
  );
  let result =
    getRandomTwoChar(thirdArray) +
    getRandomTwoChar(lastArray) +
    '마치 ' +
    getRandomTwoChar(firstArray) +
    getRandomTwoChar(secondArray) +
    '것처럼';
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// 가정법 혼합가정법
function getRandomCondition12() {
  const firstArray = new Array(
    '내가 ',
    '네가 ',
    '그가 ',
    '그녀가 ',
    '니콜이 ',
    '우리가 ',
    '너희들이 ',
    '그들이 '
  );
  const secondArray = new Array(
    '사랑하면 ',
    '좋아하면 ',
    '즐기면 ',
    '시작하면 ',
    '멈추면 ',
    '열면 ',
    '닫으면 ',
    '요리하면 ',
    '먹는다면 ',
    '대화한다면 ',
    '달린다면 ',
    '난다면 ',
    '시작한다면 ',
    '그만둔다면 ',
    '말한다면 ',
    '간다면 ',
    '온다면 ',
    '말한다면 ',
    '본다면 ',
    '가지고 있다면 ',
    '마신다면 ',
    '잡는다면 ',
    '이야기한다면 ',
    '씻는다면 ',
    '공부한다면 ',
    '돕는다면 ',
    '본다면 ',
    '  당긴다면 ',
    '민다면 ',
    '그린다면 ',
    '자른다면 ',
    '읽는다면 ',
    '  움직인다면 ',
    '  묻는다면 ',
    '  사용한다면   ',
    '한다면 '
  );
  const thirdArray = new Array(
    '나는 ',
    '너는 ',
    '그는 ',
    '그녀는 ',
    '그것은 ',
    '우리는 ',
    '너희들은 ',
    '그들은 '
  );
  const lastArray = new Array(
    '행복했을 텐데. ',
    '슬펐을텐데. ',
    '춤출 수 있었을텐데. ',
    '알았을텐데.'
  );
  let result =
    '만약 ' +
    getRandomTwoChar(firstArray) +
    '그것을 ' +
    getRandomTwoChar(secondArray) +
    ', ' +
    getRandomTwoChar(thirdArray) +
    getRandomTwoChar(lastArray);
  document.getElementById('divRandom').innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = ' ';
}

// // 가정법 전체
// function getRandomCondition() {
//   getRandomCondition1()
//   getRandomCondition2()
//   getRandomCondition3()
//   getRandomCondition4()
//   getRandomCondition12()

//   document.getElementById("divRandom").innerText = result;
valueOfRandomResult = result;
// }
