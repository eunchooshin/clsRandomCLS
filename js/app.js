// Constant
const INITIAL_COLOR = '#2c2c2c'
const INITIAL_BG_COLOR = 'white';
const INITIAL_LINE_WIDTH = 2.5;
const BTN_CLICKED_CN = 'controls__color__clicked';
// Dom Element
const canvasParent = document.querySelector('#canvas');
const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.jsColor')
const myColorContorls = document.querySelector('#jsMyColorControl');
const myColor = document.querySelector('#jsMyColor')
const range = document.querySelector('#jsRange');
const mode = document.querySelector('#jsMode');
const fill = document.querySelector('#jsFill');
const saveBtn = document.querySelector('#jsSave');
const resetBtn = document.querySelector('#jsReset');
const resizeBtn = document.querySelector('#jsResize');
const widthControls = document.querySelector('#jsWidth');
const heightControls = document.querySelector('#jsHeight');
// Variable
let canvasWidth = 600;
let canvasHeight = 500;
let isBrushing = false;
let isFilling = false;
// Init setting
const initSetting = () => {
  // Set width, height of canvas
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  // Set background color, brush color, fill color, line width of canvas
  ctx.fillStyle = INITIAL_BG_COLOR;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.strokeStyle = INITIAL_COLOR;
  ctx.fillStyle = INITIAL_COLOR;
  ctx.lineWidth = INITIAL_LINE_WIDTH;
  // Set initial line width
  range.value = INITIAL_LINE_WIDTH;
  // Set initial mode to brush
  isFilling = false;
  // Set all button unclicked
  colors.forEach(color=>{
    color.classList.remove(BTN_CLICKED_CN);
  })
  // Set black button clicked
  colors[0].classList.add(BTN_CLICKED_CN);
}

var hasTouchStartEvent = 'ontouchstart';

// document.addEventListener( hasTouchStartEvent ? 'touchstart' : 'mousedown', function( e ) {
//     console.log( e.touches ? 'TouchEvent' : 'MouseEvent' );
// }, false );

// Init event
const initEvent = () => {
  // Add event to Canvas
  if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    // canvas.addEventListener("touchmove", onTouchMove);
    canvas.addEventListener("mouseleave", stopBrushing);
    canvas.addEventListener("mouseup touchend", stopBrushing);
    // canvas.addEventListener("mousedown", startBrushing);
    canvas.addEventListener("touchstart", startBrushing);
  //   canvas.addEventListener( hasTouchStartEvent ? 'touchstart' : 'mousedown', function( e ) {
  //     console.log( e.touches ? 'TouchEvent' : 'MouseEvent' );
  // }, false );
  
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleContextMenu)
  }
  // Add event to color
  colors.forEach(color => {
    color.addEventListener('click', handleColorClick);
  })
  // Add event to range
  if (range) {
    range.addEventListener("input", handleRangeChange);
  }
  // Add event to mode button
  if (mode) {
    mode.addEventListener("click", hanldeModeClick);
  }
  // Add event to brush button
  if (fill) {
      fill.addEventListener("click", handleFillClick);
  }
  // Add event to save button
  if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
  }
  // Add event to reset button
  if (resetBtn) {
    resetBtn.addEventListener("click", handleResetClick);
  }
  // Add event to my color
  if (myColorContorls) {
    myColorContorls.addEventListener("change", handleMyColorChange);
  }
  // Add event to resize button
  if (resizeBtn) {
    resizeBtn.addEventListener("click", handleResizeClick);
  }
}
// Set start brush
const startBrushing = () => {
  isBrushing = true;
}
// Set stop brush
const stopBrushing = () => {
  isBrushing = false;
}
// Event of move mouse on canvas
const onMouseMove = (e) => {
  if (isFilling)
    return;
  const x = e.offsetX;
  const y = e.offsetY;
  if (!isBrushing) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
// Event of move touch on canvas
const onTouchMove = (e) => {
  if (isFilling)
    return;
  const x = e.offsetX;
  const y = e.offsetY;
  if (!isBrushing) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
// Event of click color
const handleColorClick = (e) => {
  // set color of brush or fill
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  // Set all button unclicked
  colors.forEach(color=>{
    color.classList.remove(BTN_CLICKED_CN);
  })
  // Set clicked button clicked
  e.target.classList.add(BTN_CLICKED_CN);
}
// Event of change line width
const handleRangeChange = (e) => {
  const size = e.target.value;
  ctx.lineWidth = size;
}
// Event of change mode
const hanldeModeClick = () => {
  if (isFilling === true) {
    // If current mode is brush
    isFilling = false;
    console.log('brush');
  } else {
    // If current mode is fill
    isFilling = true;
    console.log('fill');
  }
}
// Event of click canvas
const handleCanvasClick = () => {
  if (isFilling === true) {
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }
}
// Event of click canvas
const handleFillClick = () => {
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}
// Prevent event of right click
const handleContextMenu = (e) => {
  e.preventDefault();
}
// Event of Click save button
const handleSaveClick = () => {
  const image = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = image;
  link.download = 'BrushJS[Export]';
  link.click();
}
// Event of Click reset button
const handleResetClick = () => {
  initSetting();
}
// Event of Change my color
const handleMyColorChange = (e) => {
  const color = e.target.value;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  myColor.style.backgroundColor = color;
}
// Event of Change size of canvas
const handleResizeClick = (e) => {
  if (widthControls.value>window.innerWidth){
    alert('Too Large');
  }else{
    canvasWidth = widthControls.value;
    canvasHeight = heightControls.value;
    initSetting();
  }
}
// init
initSetting();
initEvent();


//이미지 올려서 화면에 뿌리기
const browseBtn = document.querySelector('.browse-btn');
const realInput = document.querySelector('#real-input');

function readInputFile(e) {
  var file = e.target.files;

  var reader = new FileReader();
  reader.onload = function (e) {
    var img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file[0]);
}

realInput.addEventListener('change', readInputFile);