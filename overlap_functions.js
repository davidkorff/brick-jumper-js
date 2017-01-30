function removeButtons(){
  let r = document.getElementsByTagName('button');
  for (let i = (r.length-1); i >= 0; i--) {
    if(r[i].getAttribute('id') != 'a'){
        r[i].parentNode.removeChild(r[i]);
    }
  }
}

function initializeConstants(){
  score1=0
  score2=0
  gameGoing = true
}

function moveWallLeft(object){
  object.style.left = `${getLeftPosition(object) - 1}px`
  if (getLeftPosition(object) < -10) {
    object.style.left = `${1000+Math.floor(Math.random()*150)}px`
  }
}

function moveWallRight(object){
  object.style.left = `${getLeftPosition(object) + 1}px`
  if (getLeftPosition(object) > 1000) {
    object.style.left = `${-Math.floor(Math.random()*150)}px`
  }
}

function getLeftPosition(object){
  return parseInt(object.style.left.replace('px', ''))
}

function getBottomPosition(object){
  return parseInt(object.style.bottom.replace('px', ''))
}

function displayScore(){
  document.getElementById("score2").innerHTML=`Red:${score2}<br> Blue:${score1}`
}

function resetAllWallPositions(){
  wall0.style.left = `${1100}px`
  wall1.style.left = `${1300}px`
  wall2.style.left = `${500}px`
  wall3.style.left = `${700}px`
  wall4.style.left = `${900}px`
  wall5.style.left = `${495}px`
  wall6.style.left = `${300}px`
  wall7.style.left = `${100}px`
  wall8.style.left = `${-100}px`
  wall9.style.left = `${-300}px`
}

function resetBullet1Position(){
  if (parseInt(bullet1.style.left.replace('px', ''),10)===180){
    bullet1.style.left = `${180}px`}
  else{bullet1.style.left = `${1000}px`}
}

function resetBullet2Position(){
  if (parseInt(bullet2.style.left.replace('px', ''),10)===820){
    bullet2.style.left = `${820}px`}
  else{bullet2.style.left = `${0}px`}
}

function resetGame(){
  initializeConstants()
  resetAllWallPositions()
  resetBullet1Position()
  resetBullet2Position()
  displayScore()
}

function askNewGame(player){
  if (confirm(`${player} wins. Press Enter to Start a new Game`) == true){}
  else{gameGoing = false}
  resetGame()
}

function checkIfPlayerWon(){
  if (score1 >= 50) {askNewGame('Blue')}
  else if (score2 >= 50) {askNewGame('Red')}
}

function checkBullet2Collision(){
  if ((getLeftPosition(dodger1) <= getLeftPosition(bullet2)) &&
      (getLeftPosition(dodger1)+20 >= getLeftPosition(bullet2)) &&
      (getBottomPosition(dodger1) <= getBottomPosition(bullet2)) &&
      (getBottomPosition(dodger1)+20 >= getBottomPosition(bullet2))){
    score1 = score1+5
    resetBullet2Position()
    displayScore()
    checkIfPlayerWon()
  }
}

function checkBullet1Collision(){
  if ((getLeftPosition(dodger2) <= getLeftPosition(bullet1)) &&
      (getLeftPosition(dodger2)+20 >= getLeftPosition(bullet1)) &&
      (getBottomPosition(dodger2) <= getBottomPosition(bullet1)) &&
      (getBottomPosition(dodger2)+20 >= getBottomPosition(bullet1))){
    score2 = score2 + 5
    resetBullet1Position()
    displayScore()
    checkIfPlayerWon()
  }
}

function checkWallCollision1(){
  if (((getLeftPosition(dodger1)+20 === getLeftPosition(wall0)) ||
       (getLeftPosition(dodger1)+20 === getLeftPosition(wall1)) ||
       (getLeftPosition(dodger1)+20 === getLeftPosition(wall2)) ||
       (getLeftPosition(dodger1)+20 === getLeftPosition(wall3)) ||
       (getLeftPosition(dodger1)+20 === getLeftPosition(wall4))) &&
       (getBottomPosition(dodger1) <240 )){
    score1++
    displayScore()
    checkIfPlayerWon()
  }
}

function checkWallCollision2(){
  if (((getLeftPosition(dodger2) === getLeftPosition(wall5)+10) ||
       (getLeftPosition(dodger2) === getLeftPosition(wall6)+10) ||
       (getLeftPosition(dodger2) === getLeftPosition(wall7)+10) ||
       (getLeftPosition(dodger2) === getLeftPosition(wall8)+10) ||
       (getLeftPosition(dodger2) === getLeftPosition(wall9)+10)) &&
       (getBottomPosition(dodger2) <240 )){
    score2++
    displayScore()
    checkIfPlayerWon()
  }
}

function checkCollisions(){
  checkWallCollision1()
  checkWallCollision2()
  checkBullet1Collision()
  checkBullet2Collision()
}
function moveAllWalls(){
  moveWallLeft(wall0)
  moveWallLeft(wall1)
  moveWallLeft(wall2)
  moveWallLeft(wall3)
  moveWallLeft(wall4)
  moveWallRight(wall5)
  moveWallRight(wall6)
  moveWallRight(wall7)
  moveWallRight(wall8)
  moveWallRight(wall9)
}
