var App = new Vue({
  el: "#app",
  data() {
    return {
      search: "",
      title: "CLS G.Library",
      cards: [
        {
          name: "단어",
          cardColor: "warning",
          items: [
            "명사",
            "동사",
            "형용사",
            "부사",
            "대명사",
            "접속사",
            "감탄사",
            "전치사",
            "관사"
          ]
        },
        {
          name: "의미",
          cardColor: "success",
          items: [
            "시제",
            "조동사",
            "동명사",
            "분사",
            "수동태",
            "부정사",
            "비교",
            "관계사",
            "가정법",
            "의문사&의문문",
            "일치",
            "화법",
            "특수구문"
          ]
        },
        {
          name: "문장",
          cardColor: "danger",
          items: [
            "문장",
            "문장의 종류",
            "문장의 구성요소",
            "문장의 5형식"
          ]
        },
        
      ]     
    }
    },
    
      
  computed: {
    filteredCards() {
      var _this = this
      if(this.search.length === 0) return this.cards
      return this.cards.map(function(card) {
        return {
          name: card.name,
          cardColor: card.cardColor,
          items: card.items.filter(function (item) {
            return item.includes(_this.search)
          })
        }
      })
    }
  },
  
  methods: {
    removeCard (card) {
      this.cards.splice(this.cards.indexOf(card), 1)
    },
    clearSearchField () {
      this.search = ''
    }
  }
});

// 위쪽으로 vue

// clsToggle
var dropdown = document.getElementsByClassName("dropdown-btn is-light");
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
  });

// Search 박스에서 값 가져오기
// mp3 넣기
// img 넣기

function getCardNumber()  {
  let cardNumber = document.getElementById('inputCardNumber').value;
  let z = '<audio controls><source src="../src/' + cardNumber +'.m4a" type="audio/mp3"></audio>'
  document.getElementById("audioSetting").innerHTML = z;
  let y = '<img src="../images/grammar_image/glCard/glCard' + cardNumber +".jpg" + '" alt="GrammarCard">'
  document.getElementById("glAudioCard").innerHTML = y;
  
}

const input = document.querySelector('#inputCardNumber');
input.addEventListener('keyup',function(e){
  if (e.keyCode === 13) {
    let cardNumber = document.getElementById('inputCardNumber').value;
    let z = '<audio controls><source src="../src/' + cardNumber +'.m4a" type="audio/mp3"></audio>'
    document.getElementById("audioSetting").innerHTML = z;
    let y = '<img src="../images/grammar_image/glCard/glCard' + cardNumber +".jpg" + '" alt="GrammarCard">'
    document.getElementById("glAudioCard").innerHTML = y;
    document.getElementById('inputCardNumber').value ='';
  }  
});




// tabs
document.querySelectorAll("#nav li").forEach(function(navEl) {
  navEl.onclick = function() { toggleTab(this.id, this.dataset.target); }
});

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll("#nav li");

  navEls.forEach(function(navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add("is-active");
    } else {
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
      }
    }
  });

  var tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function(tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}
// 글씨체

function changeFont1() {
  // 1. 대상 element 선택
  const element = document.getElementById('divRandom');
    // 2. style 변경
  element.style.fontFamily = 'Yeon Sung', cursive;
}

function changeFont2() {
    const element = document.getElementById('divRandom');
  element.style.fontFamily = 'Gamja Flower', cursive;
}

function changeFont3() {
    const element = document.getElementById('divRandom');
  element.style.fontFamily = 'Black Han Sans', sans-serif;
}

function changeFont4() {
    const element = document.getElementById('divRandom');
  element.style.fontFamily = 'Single Day', cursive;
}
function changeFont5() {
    const element = document.getElementById('divRandom');
  element.style.fontFamily = 'Gaegu', cursive;
}
function changeFont6() {
    const element = document.getElementById('divRandom');
  element.style.fontFamily = 'Jua', sans-serif;
}

function changeFontSize1() {
  // 1. 대상 element 선택
  const element = document.getElementById('divRandom');
    // 2. style 변경
  element.style.fontSize = "50px";
}

function changeFontSize2() {
  // 1. 대상 element 선택
  const element = document.getElementById('divRandom');
    // 2. style 변경
  element.style.fontSize = "100px";
}
function changeFontSize3() {
  // 1. 대상 element 선택
  const element = document.getElementById('divRandom');
    // 2. style 변경
  element.style.fontSize = "150px";
}
function changeFontSize4() {
  // 1. 대상 element 선택
  const element = document.getElementById('divRandom');
    // 2. style 변경
  element.style.fontSize = "200px";
}


// 아래쪽 CLS Speaking Random 

const consonantVal = "bcdfghjklmnpqrstvwxyz";
const vowelVal = "aeiou";
const constantUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const constantLowerCase = "abcdefghijklmnopqrstuvwxyz";
const pronounBox = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
const pronounBoxK = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
const pronounBoxE = new Array("I ", "You ", "He ", "She ", "It ", "We ", "You ", "They ");
const articleK = new Array("하나의 ", "하나의 ", "그 ");
const articleE = new Array("a ", "an ", "the ");
const prepositionK = new Array();
const prepositionE = new Array();


const noun1personK = new Array("성인","천사","이모","아기","상사","소년","형제","선장","아이","직원","부부","사촌","고객","아빠","딸","치과의사","의사","기술자","가족","아버지","바보","친구","신사","소녀","할아버지","사람","영웅","인간","남편","나는","아이","왕","여성","어머니","간호사","부모","사람들","경찰","왕자","여왕","그녀","여동생","아들","학생","10대의","삼촌","우리","아내","여성","여러분","농부","외국인","여걸","소방관","충고하는 사람","10대 소년","여행자","동료","학급친구","한 방 사람","인간","육군 대장","거지","승객","시민","어릿광대","상인","거짓말쟁이","임자","적","지배자","도둑","방문자","여행자","단짝","교수","고용주","피고용인","음악가","배우","여배우","하인","지도자","해녀","계산원","뱃사람","사냥꾼","경영자","변호사","시장","고객","이발사","남자","여성","운동선수","지원자","악마","요정","반대자","청중","탐험가","백만장자","기어오르는 사람","동무","주인","이야기하는 사람","상인","지휘자","시민","일반인","목수","교대자","선조","범죄자","사람들","비서","유권자","우두머리","조카","조카딸","시인","강도","겁쟁이","교사","디저트","노예","해군","벌목꾼","불교도","소비자","저자","의사","정치가","천재","살인자","작곡가","해군대장","황제","공주");
const noun1personE = new Array("adult","angel","aunt","baby","boss","boy","brother","captain","child","clerk","couple","cousin","customer","dad","daughter","dentist","doctor","engineer","family","father","fool","friend","gentleman","girl","grandfather","guy","hero","human","husband","I","kid","king","lady","mother","nurse","parent","people","police","prince","queen","she","sister","son","student","teen","uncle","we","wife","woman","you","farmer","foreigner","heroine","fireman","adviser","teenager","tourist","mate","classmate","roommate","mankind","general","beggar","passenger","citizen","clown","trader","liar","owner","enemy","ruler","thief","visitor","traveler","pal","professor","employer","employee","musician","actor","actress","servant","leader","diver","cashier","sailor","hunter","manager","lawyer","mayor","client","barber","male","female","athlete","volunteer","devil","fairy","opponent","audience","explorer","millionaire","climber","fellow","host","narrator","merchant","director","civil","civilian","carpenter","relay","ancestor","criminal","folk","secretary","voter","chief","nephew","niece","poet","robbery","coward","instructor","dessert","slave","navy","logger","Buddhist","consumer","author","physician","politician","genius","murderer","composer","admiral","emperor","princess");
const noun2objectK = new Array("사고","오후","나이","항공사","비행기","사과","팔","등","공","풍선","바구니","박쥐","화장실","건전지","콩","침대","침실","쇠고기","종","자전거","영수증","혈액","게시판","배","몸","폭탄","뼈","책","부츠","병","바닥","그릇","뇌","브레이크","가지","브랜드","빵","다리","거품","단추","(동물)우리","사탕","모자","자동차","당근","수레","현금","성","체인점","의자","원","교실","동영상","시계","천","구름","동전","쿠키","구석","비용","면 목화","관","커튼","책상","일기","접시","인형","문","귀","지구","달걀","엔진","지우개","눈","얼굴","부채","농장","파일","손가락","화재","국기","꽃","안개","음식","발","축구","과일","유령","선물","유리","장갑","접착제","금","포도","풀","머리카락","손","모자","머리","심장","열","헬기","숙제","꿀","얼음","그것","청바지","열쇠","칼","잎","다리","편지","선","입술","우편","남자","지도","고기","우유","거울","돈","달","산","입","영화관","목","신문","코","메모","석유","바지","종이","배","사진","주머니","감자","상","경주","비","무지개","반지","바위","지붕","소금","모래","가위","선박","신발","피부","치마","눈","양말","숟가락","돌","딸기","지하철","설탕","태양","탁자","꼬리","테이프","전화","교과서","것","치아","장난감","나무","우산","채소","수박","창문","목재","비누","총","쓰레기","옷","의복","지갑","양배추","지갑","팔꿈치","무기","초","발가락","손수건","요리기구","쓰레기","무덤","사전","쟁반","소나기","껍질","발목","맥주","베개","약","철도","바지","식물","완두콩","견과","땅콩","목구멍","철","손톱","뺨","밧줄","위","연","담장","마늘","강철","기둥","우편엽서","눈물","막대기","분수","서랍","소설","상록수","생산품","짐","저널","뒤꿈치","여권","자동차","입방체","지느러미","여과기","꾸러미","꾸러미","잡지","막대기","자물쇠","구멍","후추","손잡이","파도","식품","수레바퀴","오이","손목","꽃병","식초","씨","발톱","곡물","묘","약","버섯","갈고리","연료","내용물","(여행의) 수하물","땀","건설","동화","복숭아","잔디","혀","꽃","창조물","깃털","풍자만화","둥지","식료품류","칠판","벽돌","항아리","제분기","풍차","젓가락","소지품","면허","돼지고기","(특정 작업을 위해 고안된) 장치","눈썹","단지","온도계","소매","뿌리","추첨","실","바늘","컨테이너","발자국","상품","눈금","온실","보물","굴뚝","성냥","활","뿔","주먹","폐","막대","사다리","모서리","농작물","주름","시집","시","위성","물질","꾸러미","표면","무거운 짐","연장","근육","신경","얼굴의 생김새","불꽃","반도","주전자","꼬리표","양상추","탄알","통나무","삽","자석","물살","도끼","콩","곡식","매","대륙","엄지손가락","끈","화살","손바닥","수도꼭지","덫","세포","세탁","기계","빵 한 덩어리","자원","액체","독감");
const noun2objectE = new Array("accident","afternoon","age","airline","airplane","apple","arm","back","ball","balloon","basket","bat","bathroom","battery","bean","bed","bedroom","beef","bell","bicycle","bill","blood","board","boat","body","bomb","bone","book","boot","bottle","bottom","bowl","brain","brake","branch","brand","bread","bridge","bubble","button","cage","candy","cap","car","carrot","cart","cash","castle","chain","chair","circle","classroom","clip","clock","cloth","cloud","coin","cookie","corner","cost","cotton","crown","curtain","desk","diary","dish","doll","door","ear","earth","egg","engine","eraser","eye","face","fan","farm","file","finger","fire","flag","flower","fog","food","foot","football","fruit","ghost","gift","glass","glove","glue","gold","grape","grass","hair","hand","hat","head","heart","heat","helicopter","homework","honey","ice","it","jeans","key","knife","leaf","leg","letter","line","lip","mail","man","map","meat","milk","mirror","money","moon","mountain","mouth","movie","neck","newspaper","nose","note","oil","pants","paper","pear","picture","pocket","potato","prize","race","rain","rainbow","ring","rock","roof","salt","sand","scissors","ship","shoe","skin","skirt","snow","sock","spoon","stone","strawberry","subway","sugar","sun","table","tail","tape","telephone","textbook","thing","tooth","toy","tree","umbrella","vegetable","watermelon","window","wood","soap","gun","trash","clothes","clothing","wallet","cabbage","purse","elbow","weapon","candle","toe","handkerchief","cooker","garbage","grave","dictionary","tray","shower","shell","ankle","beer","pillow","medicine","railroad","trousers","plant","pea","nut","peanut","throat","iron","nail","cheek","rope","stomach","kite","fence","garlic","steel","post","postcard","tear","pole","fountain","drawer","novel","evergreen","product","load","journal","heel","passport","automobile","cube","fin","filter","pack","package","magazine","bar","lock","hole","pepper","handle","wave","diet","wheel","cucumber","wrist","vase","vinegar","seed","claw","grain","tomb","drug","mushroom","hook","fuel","content","baggage","sweat","construction","fairy tale","peach","lawn","tongue","bloom","creature","feather","cartoon","nest","grocery","blackboard","brick","jar","mill","windmill","chopstick","belonging","license","pork","device","eyebrow","pot","thermometer","sleeve","root","lot","thread","needle","container","footprint","merchandise","scale","greenhouse","treasure","chimney","match","bow","horn","fist","lung","rod","ladder","edge","crop","wrinkle","poetry","poem","satellite","material","parcel","surface","burden","tool","muscle","nerve","feature","flame","peninsula","kettle","label","lettuce","bullet","log","spade","magnet","current","ax","soy","cereal","falcon","continent","thumb","string","arrow","palm","faucet","trap","cell","laundry","instrument","loaf","resource","fluid","influenza");
const noun3animalK = new Array("동물","개미","곰","벌","새","벌레","고양이","소","개","돌고래","오리","코끼리","물고기","여우","개구리","기린","말","사자","원숭이","쥐","돼지","강아지","토끼","호랑이","얼룩말","어린 양","사슴","상어","매","양","올빼미","거북이","게","비둘기","참새","달팽이","당나귀","염소","새끼 새","황소","거위","표범","수탉","칠면조","암탉","곤충","두꺼비");
const noun3animalE = new Array("animal","ant","bear","bee","bird","bug","cat","cow","dog","dolphin","duck","elephant","fish","fox","frog","giraffe","horse","lion","monkey","mouse","pig","puppy","rabbit","tiger","zebra","lamb","deer","shark","hawk","sheep","owl","turtle","crab","pigeon","sparrow","snail","donkey","goat","chick","bull","goose","leopard","cock","turkey","hen","insect","toad");
const noun4placeK = new Array("아카데미","공항","지역","은행","해변","교회","영화관","도시","동아리","대학","회사","콘서트","대회","나라","시골","출구","공장","분야","바닥","숲","앞","정원","문","땅","천국","언덕","집; 가정의","병원","집","부엌","호수","땅","도서관","거실","박물관","바다","사무소","궁전","공원","연필","장소","식당","화장실","강","도로","방","학교","바다","상점","하늘","남","공간","가게","거리","마을","벽","동물원","계단","입구","유치원","지옥","물웅덩이","운동장","항구","마을","연못","굴","골짜기","해안","작은 길","극장","횡단보도","시청","중심가","도시의 주택가","바닷가","오두막집","그늘","법정","화성","우체국","형무소","항구","빵집","지하실","사찰","태평양","대서양","과수원","교도소","지대","경사면","체육관","길","국경","행성","도랑","진료소","차고","장소","시내","우주");
const noun4placeE = new Array("academy","airport","area","bank","beach","church","cinema","city","club","college","company","concert","contest","country","countryside","exit","factory","field","floor","forest","front","garden","gate","ground","heaven","hill","home","hospital","house","kitchen","lake","land","library","living room","museum","ocean","office","palace","park","pencil","place","restaurant","restroom","river","road","room","school","sea","shop","sky","south","space","store","street","town","wall","zoo","stair","entrance","kindergarten","hell","pool","playground","harbor","village","pond","cave","valley","coast","path","theater","crosswalk","city hall","downtown","uptown","shore","hut","shade","court","Mars","post office","prison","port","bakery","basement","temple","Pacific","Atlantic","orchard","jail","zone","slope","gym","route","frontier","planet","ditch","clinic","garage","location","stream","universe");
const noun5conceptK = new Array("억양","주소","모험","공기","분노","예술","기반","야구","농구","목욕","전투","아름다움","탄생","생일","아침 식사","기업","달력","경우","기회","수업","감기","색","코미디","조건","군중","문화","주기","위험","데이트","날","죽음","대화","저녁식사","동쪽","오차","저녁","시험","예","사실","열","미래","몸짓","목표","신","그룹","습관","두통","역사","취미","휴일","시간","생각","직무","기쁨","교훈","빛","운","점심","수학","기억","마음","개월","아침","음악","이름","국가","자연","밤","정오","북","아무것도 없음","수","하나","부분","평화","소풍","분홍색","요점","힘","현재","문제","퍼즐","질문","권리","판매","과학","점수","계절","측면","크기","축구","노래","소리","속도","이야기","스트레스","만찬","시험","저것","그들","갈증","이것","시간","위쪽의","관광","탑","삼각형","여행","유형","목소리","전쟁","물","방법","날씨","결혼","주","주말","체중","서부","바람","단어","세계","연도","슬픔","정신이상","선택","아픔","정직","현명함","배구","암흑","상상력","웃음","새벽","나약함","골칫거리","명예","값","아픔","고독","소음","논쟁","초대","햇빛","해돋이","일몰","영광","필요","반","미움","기쁨","충고","의미","지루함","수학","두려움","운","편의","교통","언어","한밤중","거리","실패","도입","개발","감정","위치","보호","불쌍히 여김","우아함","경제","12개","친절","손해","식사","고난","자랑","발견","기쁨","도착","인내","대화","침묵","차이","통행","이유","사회","배달","경이","별명","한 쌍","상징","웅장","발명","기침","능력","용기","외관","생각하기","지정","실망","속임수","가을","1야드","공학","왕국","거래","싸움","지식","등급","매력","경험","조각","시력","관광","합계","요약","기록","주의","부","조화","비용","지출","이야기","직사각형","사과","작은 조각","준비","요술","축하","각도","경향","힘","분리","물질","규칙","시기","북극","남극","만족","야생","기간","도보여행","숨","정보","제안","졸업","순간","자신감","결과","의견","감탄","교육","호의","대화","고용","실업","지역","산업","공포","안전","대중(사회)","치료","시험","살아남음","휴식","1센트","1세기","센티미터","섭씨","연구","되풀이","회복","끝","자유","연설","행동","활동","어린 시절","비행","힘","길이","높이","말","우정","혼합","지불","접촉","계급","자기","장면","신용","재주","규칙","신청","사생활","커뮤니케이션","임무","법률","놀람","비율","폭풍","보랏빛","관습","운동","문법","상해","나쁜","상처","양","의식","병","경고","공포","격노","온도","슬픔","열","가려움","정사각형","인기","위험","존재","정부","실험","정도","수수께끼","예외","노동","치료","노력","처벌","성취","봄","환경","위치","탐험","환경","근원","대부분","소수","호기심","일","발음","중간","간격","종교","불평","종류","장애","가치","이익","연결","재산","윤곽","직업","유사점","엷은 안개","이야기","경우","서두름","의도","투쟁","방향","위치","요청","요구","번역","파괴","민주주의","부족","덩어리","산성","틈","예","끌어당김","완성","관계","관계","방어","결합","정정","안락","곡조","원인","죄","한계","한정","세금","걱정","성가","대조","전통","주제","해결","경향","선거","전기","결점","홍수","자유","목적","책임","합","환경","오염","행동","식욕","유리","불리","수확","폭력","장식","우화","반대","물리학","연합","위협","실행","감사","기후","오염","손해","헌신","광고","인구","숫자","효과","가난","부서","공동체","겁","증명","용기","범위","세부 사항","수술","교육","조직","실마리","산뜻한","수집","책임","의심","운임","여행","신화","기간","임금","자세","증거","향상","공격","맥박","지시","지휘자","적용","질","계산","방법","인내","운명","출발","개념","평판","불교","농업","구역","기회","운송 수단","입장","무질서","허가","목적지","지나간 자국","소비","자취","전설","구조","몫","지름","안전","충돌","번영","정치","범위","분쟁","응답","진화","혁명","살인","침입","구성","항해","상황","기능","분석","재활용","복습","보수","거절","예약","응답","퇴직","반작용","구제","환불","제한","결합","중심","집중","영향","압력","의기소침","표현","인상","원리","감정","(미래의) 전망","광경","의심");
const noun5conceptE = new Array("accent","address","adventure","air","anger","art","base","baseball","basketball","bath","battle","beauty","birth","birthday","breakfast","business","calendar","case","chance","class","cold","color","comedy","condition","crowd","culture","cycle","danger","date","day","death","dialogue","dinner","east","error","evening","exam","example","fact","fever","future","gesture","goal","god","group","habit","headache","history","hobby","holiday","hour","idea","job","joy","lesson","light","luck","lunch","mathematics","memory","mind","month","morning","music","name","nation","nature","night","noon","north","nothing","number","one","part","peace","picnic","pink","point","power","present","problem","puzzle","question","right","sale","science","score","season","side","size","soccer","song","sound","speed","story","stress","supper","test","that","they","thirst","this","time","top","tour","tower","triangle","trip","type","voice","war","water","way","weather","wedding","week","weekend","weight","west","wind","word","world","year","sadness","madness","choice","ache","honesty","wisdom","volleyball","darkness","imagination","laughter","dawn","weakness","trouble","honor","price","pain","loneliness","noise","argument","invitation","sunlight","sunrise","sunset","glory","necessity","half","hatefulness","pleasure","advice","meaning","boredom","math","fear","fortune","convenience","traffic","language","midnight","distance","failure","introduction","development","emotion","position","protection","pity","grace","economy","dozen","kindness","damage","meal","hardship","pride","discovery","delight","arrival","patience","dialog","silence","difference","passage","reason","society","delivery","wonder","nickname","pair","symbol","grandeur","invention","cough","ability","courage","appearance","thought","appointment","disappointment","trick","autumn","yard","engineering","kingdom","trade","quarrel","knowledge","grade","charm","experience","piece","sight","sightseeing","sum","summary","record","attention","wealth","harmony","expense","expenditure","tale","rectangle","apology","bit","preparation","magic","celebration","angle","tendency","force","separation","matter","regulation","envy","the North Pole","the South Pole","satisfaction","wildness","period","hiking","breath","information","suggestion","graduation","moment","confidence","result","opinion","admiration","education","favor","conversation","employment","unemployment","region","industry","fright","safety","public","treatment","examination","survival","rest","cent","century","centimeter","centigrade","research","repetition","recovery","finale","freedom","speech","action","activity","childhood","flight","strength","length","height","saying","friendship","mixture","payment","contact","rank","self","scene","credit","talent","rule","proposal","privacy","communication","mission","law","alarm","rate","storm","violet","custom","movement","grammar","injury","evil","wound","amount","ceremony","disease","warning","horror","fury","temperature","grief","row","itch","square","popularity","risk","existence","government","experiment","degree","riddle","exception","labor","cure","effort","punishment","achievement","view","atmosphere","situation","exploration","environment","source","majority","minority","curiosity","task","pronunciation","medium","interval","religion","complaint","sort","handicap","value","profit","connection","property","outline","profession","similarity","mist","narration","occasion","haste","intention","conflict","direction","site","request","requirement","translation","destruction","democracy","lack","lump","acid","gap","instance","attraction","completion","relation","relationship","defense","combination","correction","comfort","tune","cause","crime","limit","limitation","tax","anxiety","anthem","contrast","tradition","subject","solution","trend","election","electricity","fault","flood","liberty","purpose","charge","addition","surroundings","contamination","behavior","appetite","advantage","disadvantage","harvest","violence","decoration","fable","objection","physics","association","threat","performance","appreciation","climate","pollution","harm","devotion","advertisement","population","figure","effect","poverty","department","community","cowardice","proof","bravery","extent","detail","operation","instruction","organization","clue","neat","collection","responsibility","doubt","fare","journey","myth","term","wage","posture","evidence","improvement","attack","pulse","indication","conductor","application","quality","account","method","endurance","fate","departure","concept","reputation","Buddhism","agriculture","district","opportunity","vehicle","admission","disorder","permission","destination","track","consumption","trace","legend","structure","share","diameter","security","impact","prosperity","politics","range","dispute","response","evolution","revolution","murder","invasion","composition","voyage","circumstance","function","analysis","recycling","review","reward","rejection","reservation","reply","retirement","reaction","relief","refund","restriction","union","center","concentration","influence","pressure","depression","expression","impression","principle","sentiment","prospect","spectacle","suspicion");



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

const adjective1personK = new Array("모든","혼자","다른","어떤","나쁜","큰","검은","파란","용감한","갈색","바쁜","차분한","특정한","깨끗한","영리한","멋진","미쳐있는","궁금한","귀여운","죽은","더러운","모든","유명한","환상적인","빨리","지방","좋아하는","좋은","자유의","재미있는","거대한","기쁜","좋은","위대한","잘 생긴","행복한"," 어려운","무거운","솔직한","더운","배고픈","친절한","게으른","작은","화난","많은","많은","새로운","멋진","나이든","가난한","예쁜","빠른","조용한","준비된","빨간","부자의","슬픈","안전한","같은","짧은","수줍은","아픈","느린","작은","똑똑한","부드러운","일부","미안한","강한","키가 큰","추한","따뜻한","젖은","하얀","잘못된","노란색","젊은","두려운");
const adjective1personE = new Array("all","alone","another","any","bad","big","black","blue","brave","brown","busy","calm","certain","clean","clever","cool","crazy","curious","cute","dead","dirty","every","famous","fantastic","fast","fat","favorite","fine","free","fun","giant","glad","good","great","handsome","happy","hard","heavy","honest","hot","hungry","kind","lazy","little","mad","many","much","new","nice","old","poor","pretty","quick","quiet","ready","red","rich","sad","safe","same","short","shy","sick","slow","small","smart","soft","some","sorry","strong","tall","ugly","warm","wet","white","wrong","yellow","young","afraid");
const adjective2objectK = new Array("모든","다른","어떤","나쁜","기본적인","큰","검은","파란","갈색","특정한","싼","깨끗한","가까운","다른","어려운","더러운","건조한","쉬운","모든","유명한","환상적인","좋아하는","좋은","재미있는","좋은","위대한","녹색","회색","무거운","중요한","큰","작은","긴","많은","새로운","다음의","멋진","나이든","예쁜","빠른","조용한","준비된","빨간","슬픈","안전한","같은","짧은","수줍은","아픈","느린","작은","똑똑한","부드러운","일부","신맛이 나는","키가 큰","추한","따뜻한","젖은","하얀","잘못된","노란색","젊은");
const adjective2objectE = new Array("all","another","any","bad","basic","big","black","blue","brown","certain","cheap","clean","close","different","difficult","dirty","dry","easy","every","famous","fantastic","favorite","fine","fun","good","great","green","grey","heavy","important","large","little","long","many","new","next","nice","old","pretty","quick","quiet","ready","red","sad","safe","same","short","shy","sick","slow","small","smart","soft","some","sour","tall","ugly","warm","wet","white","wrong","yellow","young");
const adjective3animalK = new Array("모든","혼자","다른","어떤","나쁜","큰","검은","파란","용감한","갈색","바쁜","차분한","특정한","깨끗한","영리한","멋진","미쳐있는","궁금한","귀여운","죽은","더러운","모든","유명한","환상적인","빨리","지방","좋아하는","좋은","자유의","재미있는","거대한","기쁜","좋은","위대한","잘 생긴","행복한"," 어려운","무거운","솔직한","더운","배고픈","친절한","게으른","작은","화난","많은","많은","새로운","멋진","나이든","가난한","예쁜","빠른","조용한","준비된","빨간","부자의","슬픈","안전한","같은","짧은","수줍은","아픈","느린","작은","똑똑한","부드러운","일부","미안한","강한","키가 큰","추한","따뜻한","젖은","하얀","잘못된","노란색","젊은","두려운");
const adjective3animalE = new Array("all","alone","another","any","bad","big","black","blue","brave","brown","busy","calm","certain","clean","clever","cool","crazy","curious","cute","dead","dirty","every","famous","fantastic","fast","fat","favorite","fine","free","fun","giant","glad","good","great","handsome","happy","hard","heavy","honest","hot","hungry","kind","lazy","little","mad","many","much","new","nice","old","poor","pretty","quick","quiet","ready","red","rich","sad","safe","same","short","shy","sick","slow","small","smart","soft","some","sorry","strong","tall","ugly","warm","wet","white","wrong","yellow","young","afraid");
const adjective4placeK = new Array("모든","다른","어떤","나쁜","큰","검은","파란","갈색","특정한","깨끗한","가까운","어두운","더러운","건조한","모든","유명한","환상적인","먼","좋아하는","좋은","가득한","재미있는","좋은","위대한","큰","지난","중앙의","새로운","다음의","멋진","나이든","예쁜","조용한","빨간","부자의","안전한","같은","작은","일부","추한","따뜻한","젖은","하얀","잘못된","노란색");
const adjective4placeE = new Array("all","another","any","bad","big","black","blue","brown","certain","clean","close","dark","dirty","dry","every","famous","fantastic","far","favorite","fine","full","fun","good","great","large","last","middle","new","next","nice","old","pretty","quiet","red","rich","safe","same","small","some","ugly","warm","wet","white","wrong","yellow");
const adjective5conceptK = new Array("모든","어떤","나쁜","기본적인","큰","특정한","분명한","멋진","죽은","깊은","어려운","더러운","쉬운","유명한","환상적인","좋아하는","좋은","좋은","위대한","중요한","작은","새로운","멋진","같은","작은","일부","사실","잘못된");
const adjective5conceptE = new Array("all","any","bad","basic","big","certain","clear","cool","dead","deep","difficult","dirty","easy","famous","fantastic","favorite","fine","good","great","important","little","new","nice","same","small","some","true","wrong");
const adjectiveCountableK1 = new Array("조금","약간","많이","거의 없는");
const adjectiveCountableE1 = new Array("some, any","some, any","a lot of, lots of, plenty of, many, much","a few, few, a little, little");
const adjectiveCountableE2 = new Array("some", "any","a lot of","lots of","plenty of","many","much","a few","few","a little","little");

const function0103K = new Array("하나 + 자음","하나 + b","하나 + c","하나 + d","하나 + f","하나 + g","하나 + h","하나 + j","하나 + k","하나 + l","하나 + m","하나 + n","하나 + p","하나 + q","하나 + r","하나 + s","하나 + t","하나 + v","하나 + w","하나 + x","하나 + y","하나 + z","하나 + 모음","하나 + a","하나 + e","하나 + i","하나 + o","하나 + u");
const function0103E = new Array("a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","a + ","an +","an +","an +","an +","an +","an +");
const function0105K = new Array("물고기 한 마리 - 물고기들","양 한 마리 - 양들","사슴 한 마리 - 사슴들","남자 한 명 - 남자들","여자 한 명 - 여자들","발 하나 - 발들","이(빨) 하나 - 이(빨)들","거위 한 마리 - 거위들","쥐 한 마리 - 쥐들","황소 한 마리 - 황소들","어린이 한 명 - 어린이들","사람 한 명 - 사람들");
const function0105E = new Array("a fish - fish","a sheep - sheep","a deer -deer","a man - men","a woman - women","a foot - feet","a tooth - teeth","a goose - geese","a mouse - mice","an ox - oxen","a child - children","a person - people");
const function0107K = new Array("잔(cold drink)","잔(hot drink) ","조각/점","얇은 조각","그릇","병","덩어리","무게(파운드)");
const function0107E = new Array("glass","cup","piece","slice","bowl","bottle","loaf","pound");

const uncountableNounK = new Array("물", "쥬스", "우유", "커피", "티")

const adjectiveFractionK = new Array("1/2", "1/4", "1/3", "2/3", "4 5/7");
const adjectiveFractionE = new Array("one half, a half","one quarter, a quarter","one third","two thirds","four and five sevenths");
const adjectiveCardinalOrdinalK = new Array("하나(의)","둘","셋","넷","다섯","여섯","일곱","여덟","아홉","열","첫 번째(의)","두 번째","세 번째","네 번째","다섯 번째","여섯 번째","일곱 번째","여덟 번째","아홉 번째","열 번째");
const adjectiveCardinalOrdinalE = new Array("one","two","three","four","five","six","seven","eight","nine","ten","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth");
const adjectiveCardinalOrdinal = new Array("기수","기수","기수","기수","기수","기수","기수","기수","기수","기수","서수","서수","서수","서수","서수","서수","서수","서수","서수","서수");

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
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
  return valueNumber
}

// 작업하던데로 돌아오기 ctrl+q
// TODO : 20220630 번역하는 기능 - 직역, 번역 둘 다 사용, kakao를 파파고로, result2
function translateAndPrint() {
  // html에서 값을 가져온다
  let koreanWord = document.getElementById("divRandom").value;
  // TODO : 번역한다 - ajax & kakao
  let results = '';
  $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v2/translation/translate",
        data: { query: koreanWord, src_lang: "kr", target_lang: "en" }, 
        headers: { Authorization: "KakaoAK 4fa3a1890d37bd3c60507b53aad1d00b" }
      })
        .done(function (msg) {
          results = msg.translated_text[0];
        });
  
  // 화면에 뿌려준다
  document.getElementById("divRandom2").innerText = resultOfKakao;

  // 리팩토링중 삭제 - 한번쓰이는건 literal > let result2 = getRandomTwoChar2(koreanWord);
  document.getElementById("divRandom3").innerText = getRandomTwoChar2(koreanWord);

}
function getCardNumber()  {
  let cardNumber = document.getElementById('inputCardNumber').value;
  let z = '<audio controls><source src="../src/' + cardNumber +'.m4a" type="audio/mp3"></audio>'
  document.getElementById("audioSetting").innerHTML = z;
  let y = '<img src="../images/grammar_image/glCard/glCard' + cardNumber +".jpg" + '" alt="GrammarCard">'
  document.getElementById("glAudioCard").innerHTML = y;
  
}

// 카카오 번역
// let은 전역상수로 선언하지 않는다 >>> 지역 변수

// let valueOfRandomResult ='';

    function printName(textForTranslation) {
      // const beforeTranslation = document.getElementById('inputTranslate').value;
      // let beforeTranslation = valueOfRandomResult;
      let results = '';

      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v2/translation/translate",
        //query : 질문할 문장 beforeTranslationSentence = 긴코드가 좋은 코드다
        data: { query: textForTranslation, src_lang: "kr", target_lang: "en" }, 
        headers: { Authorization: "KakaoAK 4fa3a1890d37bd3c60507b53aad1d00b" }
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
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
}
//0102 명사-셀수 X 명사 세는 법
function function0102() {
  let result = getRandomTwoChar2(noun2objectK, noun2objectE);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById("divRandom").innerText = valueK ;
  document.getElementById("divRandom2").innerText = valueE;
}
//0103 명사-셀수 X 명사 세는 법
function function0103() {
  let result = getRandomTwoChar2(function0103K, function0103E);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
}
//0103 명사-셀수 X 명사 세는 법
function function0103more() {
  let result = getRandomTwoChar2(articleK, articleE)  + getRandomTwoChar(noun3animalK, noun3animalE);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
}
//0104 명사-셀수 X 명사 세는 법
let pluralK = new Array("들");
let pluralE = new Array("s/es");

function function0104() {
  let result = getRandomTwoChar2(noun3animalK, noun3animalE) +"들";
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
}
//0105 명사-셀수 X 명사 세는 법
function function0105() {
  let result = getRandomTwoChar2(function0105K, function0105E);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
}

//0107 명사-셀수 X 명사 세는 법
function function0107() {
  let result = getRandomTwoChar2(function0107K, function0107E);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
}

//0108 명사-셀수 X 명사 세는 법
function function0108() {
  const firstArray = new Array("한 ", "두 ", "세 ", "네 ", "다섯 ", "여섯 ", "일곱 ", "여덟 ", "아홉 ", "열 ");

  let result = getRandomTwoChar(uncountableNounK) + " " + getRandomTwoChar(firstArray) + getRandomTwoChar(function0107K);

  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}


//0303 수량 형용사
function function0303() {
  let result = getRandomTwoChar2(adjectiveCountableK1, adjectiveCountableE1);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
}
function function0303v2() {
  let result = getRandomTwoChar(adjectiveCountableE2);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

const plural2K = "사람들"
//0304 the 형용사
function function0304() {
  let valueNumber = Math.floor(Math.random() * adjective1personK.length);
  let kWord = adjective1personK[valueNumber] + " 사람들";
  let eWord = "the " + adjective1personE[valueNumber];
  document.getElementById("divRandom").innerText = kWord;
  document.getElementById("divRandom2").innerText = eWord;
}
//0305 수사(숫자) 표현법
function function0305() {
  let result = getRandomTwoChar2();
  valueK = adjectiveCardinalOrdinalK[valueNumber];
  valueE = adjectiveCardinalOrdinalE[valueNumber];
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
}
//0305 수사(숫자) 표현법
function function0305v2() {
  let result = getRandomTwoChar2(adjectiveCardinalOrdinalK, adjectiveCardinalOrdinalE);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
}
//0306 분수 읽기
function function0306() {
  let result = getRandomTwoChar2(adjectiveFractionK, adjectiveFractionE);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
}
//0307 형용사-어순
function function0307() {
  let result = getRandomTwoChar2(adjectiveFractionK, adjectiveFractionE);
  valueK = valueK[valueNumber];
  valueE = valueE[valueNumber];
  document.getElementById("divRandom").innerText = valueK;
  document.getElementById("divRandom2").innerText = valueE;
}

//인칭대명사-소유격-인칭대명사
function pronoun8() {
  const firstArray = new Array("나의 ", "너의 ", "그의 ", "그녀의 ", "그것의 ", "우리의 ", "너희들의 ", "그들의 ");
  let result = getRandomTwoChar(firstArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}
//인칭대명사-소유대명사
function pronoun9() {
  const firstArray = new Array("나의 것 ", "너의 것 ", "그의 것 ", "그녀의 것 ", "그것의 것 ", "우리의 것 ", "너희들의 것 ", "그들의 것 ");
  let result = getRandomTwoChar(firstArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}
//인칭대명사-목적격
function pronoun10() {
  const firstArray = new Array("나를", "너를 ", "그를 ", "그녀를 ", "그것을 ", "우리를 ", "너희들을 ", "그들을 ");
  let result = getRandomTwoChar(firstArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

//지시대명사
function pronoun2() {
  const firstArray = new Array("이것 ", "저것 ", "그것 ", "이것들 ", "저것들 ", "그것들 ");
  let result = getRandomTwoChar(firstArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}
//의문사
function pronoun3() {
  const firstArray = new Array("누구", "무엇", "어디", "언제", "왜", "어떻게");

  let result = getRandomTwoChar(firstArray) + "?";
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}
//재귀대명사
function pronoun13() {
  const firstArray = new Array("나자신", "너자신 ", "그자신 ", "그녀자신 ", "그것자신 ", "우리자신들 ", "너희자신들 ", "그들자신들 ");
  let result = getRandomTwoChar(firstArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

//be동사
function getRandomDouble0() {
  const secondArray = new Array("새롭다 ", "학생이다 ", "선생님이다 ", "거기에 있다 ", "교실에 있다 ", "책상 위에 있다 ", "크다", "작다", "빠르다", "느리다", "좋다", "나쁘다", "비싸다", "싸다", "두껍다", "얇다", "시끄럽다", "조용하다", "똑똑하다", "멍청하다", "젖었다", "말랐다", "무겁다", "가볍다", "딱딱하다", "부드럽다", "얕다", "깊다", "쉽다", "어렵다", "좁다", "넓다", "광대하다", "약하다", "강하다", "부유하다", "가난하다", "젊다", "늙다", "길다", "짧다", "  높다", "  낮다", "  관대하다", "  인색하다", "  진실하다  ", "  거짓이다", "  아름답다", "  못생겼다", "  새롭다", "  오래됐다", "행복하다", "슬프다", "안전하다", "위험하다", "이르다",  "크지 않다", "작지 않다", "빠르지 않다", "느리지 않다", "좋지 않다", "나쁘지 않다", "비싸지 않다", "싸지 않다", "두껍지 않다", "얇지 않다", "시끄럽지 않다", "조용하지 않다", "똑똑하지 않다", "멍청하지 않다", "젖지 않았다", "마르지 않다", "무겁지 않다", "가볍지 않다", "딱딱하지 않다", "부드럽지 않다", "얕지 않다", "깊지 않다", "쉽지 않다", "어렵지 않다", "좁지 않다", "넓지 않다", "광대하지 않다", "약하지 않다", "강하지 않다", "부유하지 않다", "가난하지 않다", "젊지 않다", "늙지 않다", "길지 않다", "짧지 않다", "  높지 않다", "  낮지 않다", "  관대하지 않다", "  인색하지 않다", "  진실하지 않다  ", "  거짓이지 않다", "  아름답지 않다", "  못생기지 않다", "  새롭지 않다", "  안오래됐다", "행복하지 않다", "슬프지 않다", "안전하지 않다", "위험하지 않다", "이르지 않다", "크니?", "작니?", "빠르니?", "느리니?", "좋니?", "나쁘니?", "비싸니?", "싸니?", "두껍니?", "얇니?", "시끄럽니?", "조용하니?", "똑똑하니?", "멍청하니?", "젖었니?", "말랐니?", "무겁니?", "가볍니?", "딱딱하니?", "부드럽니?", "얕니?", "깊니?", "쉽니?", "어렵니?", "좁니?", "넓니?", "광대하니?", "약하니?", "강하니?", "부유하니?", "가난하니?", "젊니?", "늙었니?", "기니?", "짧니?", "  높니?", "  낮니?", "  관대하니?", "  인색하니?", "  진실하니?  ", "  거짓이니?", "  아름답니?", "  못생겼니?", "  새롭니?", "  오래됐니?  ", "행복하니?", "슬프니?", "안전하니?", "위험하니?", "이르니?" );
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

//일반동사 & 단순
function getRandomDouble1() {
  const secondArray = new Array("사랑한다 ", "좋아한다 ", "즐긴다 ", "시작한다 ", "멈춘다", "연다", "닫는다", "요리한다", "먹는다", "대화한다", "달린다", "난다", "시작한다", "그만둔다", "말한다", "간다", "온다", "말한다", "본다", "보인다", "가지고 있다", "마신다", "점프한다", "잡는다", "이야기한다", "씻는다", "걷는다", "일어선다", "앉는다", "넘어진다", "논다", "공부한다", "돕는다", "듣는다", "본다", "  당긴다", "  민다", "  그린다", "  들린다", "  보인다  ", "  자른다", "  읽는다", "  움직인다", "  묻는다", "  사용한다  ", "한다", " 하게 한다", " 운다", " 수영한다", "잔다" , "사랑하지 않는다 ", "좋아하지 않는다 ", "즐기지 않는다 ", "시작하지 않는다 ", "멈추지 않는다", "열지 않는다", "닫지 않는다", "요리하지 않는다", "먹지 않는다", "대화하지 않는다", "달리지 않는다", "날지 않는다", "시작하지 않는다", "그만두지 않는다", "말하지 않는다", "가지 않는다", "오지 않는다", "말하지 않는다", "보지 않는다", "보이지 않는다", "가지고 있지 않다", "마시지 않는다", "점프하지 않는다", "잡지 않는다", "이야기하지 않는다", "씻지 않는다", "걷지 않는다", "일어서지 않는다", "앉지 않는다", "넘어지지 않는다", "놀지 않는다", "공부하지 않는다", "돕지 않는다", "듣지 않는다", "보지 않는다", "  안당긴다", "  안민다", "  안그린다", "  안들린다", "  안보인다  ", " 안자른다", "  안읽는다", "  안움직인다", "  안묻는다", "  안사용한다  ", "안한다", " 하게 안한다", " 울지 않는다", "안잔다", "사랑하니? ", "좋아하니? ", "즐기니? ", "시작하니? ", "멈추니?", "여니?", "닫니?", "요리하니?", "먹니?", "대화하니?", "달리니?", "날아가니?", "시작하니?", "그만두니?", "말하니?", "가니?", "오니?", "말하니?", "보니?", "보이니?", "가지니?", "마시니?", "점프하니?", "잡니?", "이야기하니?", "씻니?", "걷니?", "서있니?", "앉니?", "넘어지니?", "노니?", "공부하니?", "돕니?", "듣니?", "보니?", "  당기니?", "  미니?", "  그리니?", "  들리니?", "  보이니?  ", "  자르니?", "  읽니?", "  움직이니?", "  묻니?", "  사용하니?  ", "하니?", " 하게 하니?", " 우니?", " 수영하니?", "자니?" );
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 과거 시제
function getRandomPast() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("사랑했다 ","좋아했다 ","즐겼다 ","시작했다 ", "멈췄다 ", "말했다 ", "이야기했다 ", "물었다 ", "읽었다 ", "움직였다 "," 앉았다", "일어섰다 ", "걸었다 ", "달렸다 ", "날았다 ", "넘어졌다 ", "뛰었다 ", "잡았다 ", "따랐다 ", "자랐다 ", "도착했다 ", "봤다 ", "들었다 ", "왔다 ", "갔다 ", "줬다 ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 미래 시제
function getRandomFuture() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("사랑할거다 ","좋아할거다 ","즐길거다 ","시작할거다 ", "멈출거다 ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 진행 시제
function getRandomContinuous() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("가고 있다 ", "먹고 있다 ", "읽고 있다 ", "쓰고 있다 ", "놀고 있다 ", "잡고 있다 ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 완료 시제
function getRandomPerfect() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("갔다 왔다 ", "먹어왔다 ", "읽어 왔다 ", "써왔다 ", "놀아왔다 ", "잡아왔다 ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 완료 진행 시제
function getRandomPerfectContinuous() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("게임을 해오는 중이다 ", "읽어오는 중이다 ", "함께 놀아오고 있는 중이다 ", "써왔다 ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 과거 완료 시제
function getRandomPastPerfect() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("갔다 왔었다 ", "먹어왔었다 ", "읽어 왔었다 ", "써왔었다 ", "놀아왔었다 ", "잡아왔었다 ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 미래 완료 시제
function getRandomFuturePerfect() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("갔다 왔을 거다 ", "먹어왔을 거다 ", "읽어 왔을 거다 ", "써왔을 거다 ", "놀아왔을 거다 ", "잡아왔을 거다 ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// can
function getRandomCan() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸을 수 있다 ", "요리할 수 있다 ", "공부할 수 있다 ", "춤출 수 있다 ", "읽을 수 있다 ", "이길 수 있다 ", "노래할 수 있다");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// may
function getRandomMay() {
  const firstArray = new Array("저 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸어도 되요? ", "들어와도 되나요?", "한국말 해도 되요?", "물 좀 마셔도 되나요?", "전화기 좀 빌려써도 되나요?", "집에 가도 되요?", "노래해도 되요?");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// should
function getRandomShould() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸어야 된다 ","들어와야 한다","영어로 말 해야 한다","춤 춰야 한다", "숙제를 해야만 한다", "이겨야 한다", "노래해야만 한다");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// should have p.p.
function getRandomShouldHavePP() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸었어야 했다 ","들어왔어야 했다","영어로 말 했어야 했다","춤 췄어야 했다", "숙제를 했어야만 했다", "이겼어야 했다", "노래했어야만 했다");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// must have p.p.
function getRandomMustHavePP() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸었음에 틀림없다 ","들어왔음에 틀림없다","영어로 말 했음에 틀림없다","춤 췄음에 틀림없다", "숙제를 했음에 틀림없다", "이겼음에 틀림없다", "노래했음에 틀림없다");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// cannot have p.p.
function getRandomCannotHavePP() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸었을리가 없다 ","들어왔을리가 없다","영어로 말했을리가 없다","춤 췄을리가 없다", "숙제를 했을리가 없다", "이겼을리가 없다", "노래했을리가 없다");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// may have p.p.
function getRandomMayHavePP() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걸었을지도 모른다 ","들어왔을지도 모른다","영어로 말했을지도 모른다","춤 췄을지도 모른다", "숙제를 했을지도 모른다", "이겼을지도 모른다", "노래했을지도 모른다");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// used to
function getRandomUsedTo() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걷곤 했다 ","들어오곤 했다","영어로 말하곤 했다","춤 추곤 했다", "숙제를 하곤 했다", "이기곤 했다", "노래하곤 했다");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// had better 
function getRandomHadBetter() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("걷는 것이 낫다 ","들어오는 게 낫다","영어로 말하는 게 낫다","춤 추는 게 낫다", "숙제를 하는 게 낫다", "이기는 게 낫다", "노래하는 게 낫다");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// would rather 
function getRandomWouldRather() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("차라리 걷는 것이 낫다 ","차라리 들어는 게 낫다","차라리 영어로 말하는 게 낫다","차라리 춤 추는 게 낫다", "차라리 숙제를 하는 게 낫다", "차라리 이기는 게 낫다", "차라리 노래하는 게 낫다");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 수동태
function getRandomPassive() {
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("얘기를 들었다 ","주어졌다(받았다)","가르침을 받았다(배웠다)");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}



// 진행 수동태 
function getRandomPassive2() {
  const firstArray = new Array("내 핸드폰은 ", "그 컴퓨터는 ", "그 바닥은 ", "그 벽은 ", "그 탭은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("수리되고 있다", "닦이고 있다", "잘리고 있다", "옮겨지고 있다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 완료 수동태
function getRandomPassive3() {
  const firstArray = new Array("내 책들은 ", "그 컴퓨터들은 ", "그 접시들은 ", "그 의자들은 ", "그 책상들은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("놓여 있다 ","덮여 있다","쌓여 있다","남겨져 있다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}
// 분사 ing
function getRandomParticipleSentence() {
  const firstArray = new Array("나의 ", "너의 ", "그의 ", "그녀의 ", "우리의 ", "그들의 ", "그 ", "한 ");
  const secondArray = new Array("춤추고 있는 " , "노래하고 있는 ", "웃고 있는 ", "부서진 " , "만들어진 ");
  const thirdArray = new Array("친구가 ", "선생님이 ", "니콜이 ", "싸이먼이 ", "아기가 ", "창문이 ", "컵이 ", "책상이");
  const fourthArray = new Array(" 있다 ","바닥에 있다","방에 있다","학교에 있다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) + getRandomTwoChar(fourthArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 분사 ing
function getRandomParticipleIng() {
  const secondArray = new Array("춤추고 있는 " , "노래하고 있는 ", "웃고 있는 ");
  const thirdArray = new Array("친구 ", "선생님 ", "니콜 ", "싸이먼 ", "아기 ");
  let result = getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) ;
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 분사 p.p. 
function getRandomParticiplePP() {
  const secondArray = new Array("부서진 " , "만들어진 ");
  const thirdArray = new Array("창문 ", "컵 ", "책상", "컴퓨터", "TV", "핸드폰", "탭");
  let result = getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 분사 구문
function getRandomParticiple2() {
  const firstArray = new Array("내 책들은 ", "그 컴퓨터들은 ", "그 접시들은 ", "그 의자들은 ", "그 책상들은 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array("놓여 있다 ","덮여 있다","쌓여 있다","남겨져 있다");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 비인칭 독립 분사구문
function getRandomParticiple3() {
  const firstArray = new Array("일반적으로 말해서 ", "솔직히 말해서 ", "엄밀히 말해서 ", "대략적으로 말해서 ", "~와 비교해 보면", "만일 ~라면", "~을 고려하면 ", "~로 판단하건데", "~얘기가 나와서 말인데");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// with 목적어 분사
function getRandomParticiple4() {
  const firstArray = new Array("~한 채로 ", "~된 채로 ");
  const secondArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}
// with 목적어 분사-응용
function getRandomParticiple5() {
  const firstArray = new Array("친구가 ", "선생님이 ", "니콜이 ", "싸이먼이 ", "아기가 ", "창문이 ", "컵이 ", "책상이 ");
  const secondArray = new Array("춤추고 있는 " , "노래하고 있는 ", "웃고 있는 ", "부서진 " , "만들어진 ");
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + "채로";
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 관계사 주격1
  function getRandomReletives1() {
    const secondArray = new Array("프랑스에 살았던 ", "학생인 ", "춤추고 있는 ", "나에게 전화하는 ", "요리하고 있는 ", "매우 어린 ", "다른 사람들을 돕는 ", "은행에서 일하는 ", "서있는 ", "책을 읽고 있는 ", "물을 마시고 있는 ", "공부하고 있는 ", "노래를 듣고 있는 ", "수영하고 있는 " );
    const thirdArray = new Array("한 남자를 ", "한 친구를 ", "그 아가를 ", "한 여자를 ", "한 소녀를 ", "학생들을 ", "선생님들을 ", "친구들을 ");
    const lastArray = new Array("사랑한다 ", "봤다 ", "만났다 ", "초대했다 ", "안다");
    let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
    document.getElementById("divRandom").innerText = result;
    valueOfRandomResult = result;
    document.getElementById('divRandom2').innerText = " ";
  }
  // 관계사 주격2
  function getRandomReletives11() {
    const firstArray = new Array("나를 ", "너를 ", "그를 ", "그녀를 ", "니콜을 ", "우리를 ", "너희들을 ", "그들을 ");
    const secondArray = new Array("프랑스에 살았던 ", "학생인 ", "춤추고 있는 ", "나에게 전화하는 ", "요리하고 있는 ", "매우 어린 ", "다른 사람들을 돕는 ", "은행에서 일하는 ", "서있는 ", "책을 읽고 있는 ", "물을 마시고 있는 ", "공부하고 있는 ", "노래를 듣고 있는 ", "수영하고 있는 " );
    const thirdArray = new Array("한 남자는 ", "그 친구는 ", "그 아가는 ", "한 여자는 ", "한 소녀는 ", "학생들은 ", "선생님들은 ", "친구들은 " );
    const lastArray = new Array("사랑한다 ", "봤다 ", "만났다 ", "초대했다 ", "안다");
    let result = getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) + getRandomTwoChar(firstArray) + getRandomTwoChar(lastArray);
    document.getElementById("divRandom").innerText = result;
    valueOfRandomResult = result;
    document.getElementById('divRandom2').innerText = " ";
  }
  // 관계사 목적격
  function getRandomReletives2() {
    const secondArray = new Array("프랑스를 사랑하는 ", "학생들이 좋아하는 ", "선생님이 좋아하는 ", "우리 엄마가 초대한 ", "Tom이 믿는 ", "니콜이 돕는 " );
    const thirdArray = new Array("한 남자를 ", "한 친구를 ", "그 아가를 ", "한 여자를 ", "한 소녀를 ", "학생들을 ", "선생님들을 ", "친구들을 ");
    const lastArray = new Array("사랑한다 ", "봤다 ", "만났다 ", "초대했다 ", "안다");
    let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
    document.getElementById("divRandom").innerText = result;
    valueOfRandomResult = result;
    document.getElementById('divRandom2').innerText = " ";
  }
// 관계사 소유격
  function getRandomReletives3() {
    const secondArray = new Array("여자 형제가 선생님인 ", "남자 형제가 잘생긴 ", "차가 포르쉐인 ", "(남자)사촌이 BTS인 ", "(여자)사촌이 BTS를 좋아하는 ", "노래를 부르는 것이 취미인 ", "머리카락이 곱슬거리는 ", "개가 귀여운 ", "생일이 크리스마스인  ", "삶이 힘든 " );
    const thirdArray = new Array("한 남자를 ", "한 친구를 ", "그 아가를 ", "한 여자를 ", "한 소녀를 ", "학생들을 ", "선생님들을 ", "친구들을 ");
    const lastArray = new Array("사랑한다 ", "봤다 ", "만났다 ", "초대했다 ", "안다");
    let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
    document.getElementById("divRandom").innerText = result;
    valueOfRandomResult = result;
    document.getElementById('divRandom2').innerText = " ";
}
// 관계사 what
function getRandomReletivesWhat() {
  const secondArray = new Array("네가 필요한 ", "그가 찾고 있는 ", "그녀가 말 한 ", "그녀의 엄마가 화나게 만드는 ", "우리가 계획했던 ", "그들이 원하는 " );
  const thirdArray = new Array("것을 안다 ", "것을 모르겠다 ", "것을 이해하지 못한다 ", "것은 아니다" );
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
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
  const secondArray = new Array("사랑한다 ", "좋아한다 ", "즐긴다 ", "시작한다 ", "멈춘다", "연다", "닫는다", "요리한다", "먹는다", "대화한다", "달린다", "난다", "시작한다", "그만둔다", "말한다", "간다", "온다", "말한다", "본다", "보인다", "가지고 있다", "마신다", "점프한다", "잡는다", "이야기한다", "씻는다", "걷는다", "일어선다", "앉는다", "넘어진다", "논다", "공부한다", "돕는다", "듣는다", "본다", "  당긴다", "  민다", "  그린다", "  들린다", "  보인다  ", "  자른다", "  읽는다", "  움직인다", "  묻는다", "  사용한다  ", "한다", " 하게 한다", " 운다", " 수영한다", "잔다" , "사랑하지 않는다 ", "좋아하지 않는다 ", "즐기지 않는다 ", "시작하지 않는다 ", "멈추지 않는다", "열지 않는다", "닫지 않는다", "요리하지 않는다", "먹지 않는다", "대화하지 않는다", "달리지 않는다", "날지 않는다", "시작하지 않는다", "그만두지 않는다", "말하지 않는다", "가지 않는다", "오지 않는다", "말하지 않는다", "보지 않는다", "보이지 않는다", "가지고 있지 않다", "마시지 않는다", "점프하지 않는다", "잡지 않는다", "이야기하지 않는다", "씻지 않는다", "걷지 않는다", "일어서지 않는다", "앉지 않는다", "넘어지지 않는다", "놀지 않는다", "공부하지 않는다", "돕지 않는다", "듣지 않는다", "보지 않는다", "  안당긴다", "  안민다", "  안그린다", "  안들린다", "  안보인다  ", " 안자른다", "  안읽는다", "  안움직인다", "  안묻는다", "  안사용한다  ", "안한다", " 하게 안한다", " 울지 않는다", "안잔다", "사랑하니? ", "좋아하니? ", "즐기니? ", "시작하니? ", "멈추니?", "여니?", "닫니?", "요리하니?", "먹니?", "대화하니?", "달리니?", "날아가니?", "시작하니?", "그만두니?", "말하니?", "가니?", "오니?", "말하니?", "보니?", "보이니?", "가지니?", "마시니?", "점프하니?", "잡니?", "이야기하니?", "씻니?", "걷니?", "서있니?", "앉니?", "넘어지니?", "노니?", "공부하니?", "돕니?", "듣니?", "보니?", "  당기니?", "  미니?", "  그리니?", "  들리니?", "  보이니?  ", "  자르니?", "  읽니?", "  움직이니?", "  묻니?", "  사용하니?  ", "하니?", " 하게 하니?", " 우니?", " 수영하니?", "자니?" );
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}
// 복합관계대명사
function getRandomReletives5() {
  const secondArray = new Array("사랑한다 ", "좋아한다 ", "즐긴다 ", "시작한다 ", "멈춘다", "연다", "닫는다", "요리한다", "먹는다", "대화한다", "달린다", "난다", "시작한다", "그만둔다", "말한다", "간다", "온다", "말한다", "본다", "보인다", "가지고 있다", "마신다", "점프한다", "잡는다", "이야기한다", "씻는다", "걷는다", "일어선다", "앉는다", "넘어진다", "논다", "공부한다", "돕는다", "듣는다", "본다", "  당긴다", "  민다", "  그린다", "  들린다", "  보인다  ", "  자른다", "  읽는다", "  움직인다", "  묻는다", "  사용한다  ", "한다", " 하게 한다", " 운다", " 수영한다", "잔다" , "사랑하지 않는다 ", "좋아하지 않는다 ", "즐기지 않는다 ", "시작하지 않는다 ", "멈추지 않는다", "열지 않는다", "닫지 않는다", "요리하지 않는다", "먹지 않는다", "대화하지 않는다", "달리지 않는다", "날지 않는다", "시작하지 않는다", "그만두지 않는다", "말하지 않는다", "가지 않는다", "오지 않는다", "말하지 않는다", "보지 않는다", "보이지 않는다", "가지고 있지 않다", "마시지 않는다", "점프하지 않는다", "잡지 않는다", "이야기하지 않는다", "씻지 않는다", "걷지 않는다", "일어서지 않는다", "앉지 않는다", "넘어지지 않는다", "놀지 않는다", "공부하지 않는다", "돕지 않는다", "듣지 않는다", "보지 않는다", "  안당긴다", "  안민다", "  안그린다", "  안들린다", "  안보인다  ", " 안자른다", "  안읽는다", "  안움직인다", "  안묻는다", "  안사용한다  ", "안한다", " 하게 안한다", " 울지 않는다", "안잔다", "사랑하니? ", "좋아하니? ", "즐기니? ", "시작하니? ", "멈추니?", "여니?", "닫니?", "요리하니?", "먹니?", "대화하니?", "달리니?", "날아가니?", "시작하니?", "그만두니?", "말하니?", "가니?", "오니?", "말하니?", "보니?", "보이니?", "가지니?", "마시니?", "점프하니?", "잡니?", "이야기하니?", "씻니?", "걷니?", "서있니?", "앉니?", "넘어지니?", "노니?", "공부하니?", "돕니?", "듣니?", "보니?", "  당기니?", "  미니?", "  그리니?", "  들리니?", "  보이니?  ", "  자르니?", "  읽니?", "  움직이니?", "  묻니?", "  사용하니?  ", "하니?", " 하게 하니?", " 우니?", " 수영하니?", "자니?" );
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}
// 복합관계부사
function getRandomReletives6() {
  const secondArray = new Array("사랑한다 ", "좋아한다 ", "즐긴다 ", "시작한다 ", "멈춘다", "연다", "닫는다", "요리한다", "먹는다", "대화한다", "달린다", "난다", "시작한다", "그만둔다", "말한다", "간다", "온다", "말한다", "본다", "보인다", "가지고 있다", "마신다", "점프한다", "잡는다", "이야기한다", "씻는다", "걷는다", "일어선다", "앉는다", "넘어진다", "논다", "공부한다", "돕는다", "듣는다", "본다", "  당긴다", "  민다", "  그린다", "  들린다", "  보인다  ", "  자른다", "  읽는다", "  움직인다", "  묻는다", "  사용한다  ", "한다", " 하게 한다", " 운다", " 수영한다", "잔다" , "사랑하지 않는다 ", "좋아하지 않는다 ", "즐기지 않는다 ", "시작하지 않는다 ", "멈추지 않는다", "열지 않는다", "닫지 않는다", "요리하지 않는다", "먹지 않는다", "대화하지 않는다", "달리지 않는다", "날지 않는다", "시작하지 않는다", "그만두지 않는다", "말하지 않는다", "가지 않는다", "오지 않는다", "말하지 않는다", "보지 않는다", "보이지 않는다", "가지고 있지 않다", "마시지 않는다", "점프하지 않는다", "잡지 않는다", "이야기하지 않는다", "씻지 않는다", "걷지 않는다", "일어서지 않는다", "앉지 않는다", "넘어지지 않는다", "놀지 않는다", "공부하지 않는다", "돕지 않는다", "듣지 않는다", "보지 않는다", "  안당긴다", "  안민다", "  안그린다", "  안들린다", "  안보인다  ", " 안자른다", "  안읽는다", "  안움직인다", "  안묻는다", "  안사용한다  ", "안한다", " 하게 안한다", " 울지 않는다", "안잔다", "사랑하니? ", "좋아하니? ", "즐기니? ", "시작하니? ", "멈추니?", "여니?", "닫니?", "요리하니?", "먹니?", "대화하니?", "달리니?", "날아가니?", "시작하니?", "그만두니?", "말하니?", "가니?", "오니?", "말하니?", "보니?", "보이니?", "가지니?", "마시니?", "점프하니?", "잡니?", "이야기하니?", "씻니?", "걷니?", "서있니?", "앉니?", "넘어지니?", "노니?", "공부하니?", "돕니?", "듣니?", "보니?", "  당기니?", "  미니?", "  그리니?", "  들리니?", "  보이니?  ", "  자르니?", "  읽니?", "  움직이니?", "  묻니?", "  사용하니?  ", "하니?", " 하게 하니?", " 우니?", " 수영하니?", "자니?" );
  const thirdArray = new Array(" ", " ", " ", " ", " ", " ", " ");
  let result = getRandomTwoChar(pronounBox) + getRandomTwoChar(secondArray) + getRandomTwoChar(thirdArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 가정법 과거
function getRandomCondition1() {
  const firstArray = new Array("내가 ", "네가 ", "그가 ", "그녀가 ", "니콜이 ", "우리가 ", "너희들이 ", "그들이 ");
  const secondArray = new Array("사랑하면", "좋아하면", "즐기면", "시작하면", "멈추면", "열면", "닫으면", "요리하면", "먹는다면", "대화한다면", "달린다면", "난다면", "시작한다면", "그만둔다면", "말한다면", "간다면", "온다면", "말한다면", "본다면", "가지고 있다면", "마신다면", "잡는다면", "이야기한다면", "씻는다면", "공부한다면", "돕는다면", "본다면", "당긴다면", "민다면", "그린다면", "자른다면", "읽는다면", "움직인다면", "묻는다면", "사용한다면", "한다면" );
  const thirdArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const lastArray = new Array("행복할 텐데. ", "슬플텐데. ", "춤출 수 있을텐데. ", "알텐데.");
  let result = "만약 " + getRandomTwoChar(firstArray) + "그것을 " + getRandomTwoChar(secondArray) + ", " + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}
// 가정법 과거완료
function getRandomCondition2() {
  const firstArray = new Array("내가 ", "네가 ", "그가 ", "그녀가 ", "니콜이 ", "우리가 ", "너희들이 ", "그들이 ");
  const secondArray = new Array("사랑했다면", "좋아했다면", "즐겼다면", "시작했다면", "멈췄다면", "열었다면", "닫았다면", "요리했다면", "먹었다면", "대화했다면", "달렸다면", "날았다면", "시작했다면", "그만뒀다면", "말했다면", "갔다면", "왔다면", "말했다면", "봤다면", "가지고 있었다면", "마셨다면", "잡았다면", "이야기했다면", "씻었다면", "공부했다면", "도왔다면", "봤다면", "당겼다면", "밀었다면", "그렸다면", "잘랐다면", "읽었다면", "움직였다면", "물었다면", "사용했다면", "했다면" );
  const thirdArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const lastArray = new Array("행복했을 텐데. ", "슬펐을텐데. ", "춤출 수 있었을텐데. ", "알았을텐데.");
  let result = "만약 " + getRandomTwoChar(firstArray) + "그것을 " + getRandomTwoChar(secondArray) + ", " + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// I wish 가정법 
function getRandomCondition3() {
  const firstArray = new Array("내가 ", "네가 ", "그가 ", "그녀가 ", "니콜이 ", "우리가 ", "너희들이 ", "그들이 ");
  const secondArray = new Array("사랑했다면 ", "좋아했다면 ", "즐겼다면 ", "시작했다면 ", "멈췄다면 ", "열었다면 ", "닫았다면 ", "요리했다면 ", "먹었다면 ", "대화했다면 ", "달렸다면 ", "날았다면 ", "시작했다면 ", "그만뒀다면 ", "말했다면 ", "갔다면 ", "왔다면 ", "말했다면 ", "봤다면 ", "가지고 있었다면 ", "마셨다면 ", "잡았다면 ", "이야기했다면 ", "씻었다면 ", "공부했다면 ", "도왔다면 ", "봤다면 ", "  당겼다면 ", "밀었다면 ", "그렸다면 ", "잘랐다면 ", "읽었다면 ", "  움직였다면 ", "  물었다면 ", "  사용했다면   ", "했다면 " );
  let result = getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + " 좋을텐데 " ;
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// as if 가정법 
function getRandomCondition4() {
  const firstArray = new Array("내가 ", "네가 ", "그가 ", "그녀가 ", "니콜이 ", "우리가 ", "너희들이 ", "그들이 ");
  const secondArray = new Array("사랑했던 ", "좋아했던 ", "즐겼던 ", "시작했던 ", "멈췄던 ", "열었던 ", "닫았던 ", "요리했던 ", "먹었던 ", "대화했던 ", "달렸던 ", "날았던 ", "시작했던 ", "그만뒀던 ", "말했던 ", "갔던 ", "왔던 ", "말했던 ", "봤던 ", "가지고 있었던 ", "마셨던 ", "잡았던 ", "이야기했던 ", "씻었던 ", "공부했던 ", "도왔던 ", "봤던 ", "  당겼던 ", "밀었던 ", "그렸던 ", "잘랐던 ", "읽었던 ", "  움직였던 ", "  물었던 ", "  사용했던   ", "했던 " );
  const thirdArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const lastArray = new Array("행복했을 텐데. ", "슬펐을텐데. ", "춤출 수 있었을텐데. ", "알았을텐데.");
  let result = getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray) + "마치 " + getRandomTwoChar(firstArray) + getRandomTwoChar(secondArray) + "것처럼";
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
}

// 가정법 혼합가정법
function getRandomCondition12() {
  const firstArray = new Array("내가 ", "네가 ", "그가 ", "그녀가 ", "니콜이 ", "우리가 ", "너희들이 ", "그들이 ");
  const secondArray = new Array("사랑하면 ", "좋아하면 ", "즐기면 ", "시작하면 ", "멈추면 ", "열면 ", "닫으면 ", "요리하면 ", "먹는다면 ", "대화한다면 ", "달린다면 ", "난다면 ", "시작한다면 ", "그만둔다면 ", "말한다면 ", "간다면 ", "온다면 ", "말한다면 ", "본다면 ", "가지고 있다면 ", "마신다면 ", "잡는다면 ", "이야기한다면 ", "씻는다면 ", "공부한다면 ", "돕는다면 ", "본다면 ", "  당긴다면 ", "민다면 ", "그린다면 ", "자른다면 ", "읽는다면 ", "  움직인다면 ", "  묻는다면 ", "  사용한다면   ", "한다면 " );
  const thirdArray = new Array("나는 ", "너는 ", "그는 ", "그녀는 ", "그것은 ", "우리는 ", "너희들은 ", "그들은 ");
  const lastArray = new Array("행복했을 텐데. ", "슬펐을텐데. ", "춤출 수 있었을텐데. ", "알았을텐데.");
  let result = "만약 " + getRandomTwoChar(firstArray) + "그것을 " + getRandomTwoChar(secondArray) + ", " + getRandomTwoChar(thirdArray) + getRandomTwoChar(lastArray);
  document.getElementById("divRandom").innerText = result;
  valueOfRandomResult = result;
  document.getElementById('divRandom2').innerText = " ";
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

