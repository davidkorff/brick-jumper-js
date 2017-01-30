score1=0
score2=0
gameGoing = true
document.addEventListener('keydown', startGame)

function startGame(e){
  console.log(e.which)
    if (e.which === 13) {
      document.removeEventListener("keydown", startGame)
      displayScore()
      startMovingWalls()
      jump1Listener()
      shootBullet1Listener()
      shootBullet2Listener()
    }
}

function startMovingWalls(){
  if (getBottomPosition(dodger2) === 200){jump2Listener()}
  if (getBottomPosition(dodger1) === 200){jump1Listener()}
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
  checkCollisions()
  if (gameGoing){setTimeout(startMovingWalls, 5)}
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

function checkCollisions(){
  checkWallCollision1()
  checkWallCollision2()
  checkBullet1Collision()
  checkBullet2Collision()
}

function checkWallCollision1(){
  dodger1LeftPosition = getLeftPosition(dodger1)
  dodger1HeightPosition = getBottomPosition(dodger1)
  wall0Position = getLeftPosition(wall0)
  wall1Position = getLeftPosition(wall1)
  wall2Position = getLeftPosition(wall2)
  wall3Position = getLeftPosition(wall3)
  wall4Position = getLeftPosition(wall4)
  if (((dodger1LeftPosition+20 === wall0Position) ||
       (dodger1LeftPosition+20 === wall1Position) ||
       (dodger1LeftPosition+20 === wall2Position) ||
       (dodger1LeftPosition+20 === wall3Position) ||
       (dodger1LeftPosition+20 === wall4Position)) &&
       (dodger1HeightPosition <240 )){
    score1++
    console.log(`Player 1 was hit by a wall. Player 2 has ${score1} point(s).`)
    displayScore()
    checkIfPlayerWon()
  }
}
function checkWallCollision2(){
  dodger2LeftPosition = getLeftPosition(dodger2)
  dodger2HeightPosition = getBottomPosition(dodger2)
  wall5Position = getLeftPosition(wall5)
  wall6Position = getLeftPosition(wall6)
  wall7Position = getLeftPosition(wall7)
  wall8Position = getLeftPosition(wall8)
  wall9Position = getLeftPosition(wall9)
  if (((dodger2LeftPosition === wall5Position+10) ||
       (dodger2LeftPosition === wall6Position+10) ||
       (dodger2LeftPosition === wall7Position+10) ||
       (dodger2LeftPosition === wall8Position+10) ||
       (dodger2LeftPosition === wall9Position+10)) &&
       (dodger2HeightPosition <240 )){
    score2++
    console.log(`Player 2 was hit by a wall. Player 1 has ${score2} point(s).`)
    displayScore()
    checkIfPlayerWon()
  }
}

function jump(e){
  if(e.which === 87){
    jump1Up(e)
  } else if(e.which == 38){
    jump2Up(e)
  }
} //IMPLIMENT

function jump1Listener(){
  dodger1LeftPosition = getLeftPosition(dodger1)
  wall0Position = getLeftPosition(wall0)
  wall1Position = getLeftPosition(wall1)
  wall2Position = getLeftPosition(wall2)
  wall3Position = getLeftPosition(wall3)
  wall4Position = getLeftPosition(wall4)
  if ((wall0Position === 210) ||
      (wall1Position === 210) ||
      (wall2Position === 210) ||
      (wall3Position === 210) ||
      (wall4Position === 210)){
    jump1Up()
  }
}

function jump1Up(){
  dodger1.style.bottom = `${getBottomPosition(dodger1) +3}px`
  if (getBottomPosition(dodger1)<300){
    setTimeout(jump1Up, 10)
  }
  else{jump1Down()}
}
function jump1Down(){
  dodger1.style.bottom = `${getBottomPosition(dodger1)- 3}px`
  if (getBottomPosition(dodger1)>200){
    setTimeout(jump1Down, 10)
  }
  else{jump1Listener()}
}

function jump2Listener(){
  dodger2LeftPosition = getLeftPosition(dodger2)
  wall5Position = getLeftPosition(wall5)
  wall6Position = getLeftPosition(wall6)
  wall7Position = getLeftPosition(wall7)
  wall8Position = getLeftPosition(wall8)
  wall9Position = getLeftPosition(wall9)
  if ((wall5Position === 780) ||
      (wall6Position === 780) ||
      (wall7Position === 780) ||
      (wall8Position === 780) ||
      (wall9Position === 780)){
    jump2Up()
  }
}

function jump2Up(){
  dodger2.style.bottom = `${getBottomPosition(dodger2) +3}px`
  if (getBottomPosition(dodger2)<300){
    setTimeout(jump2Up, 10)
  }
  else{jump2Down()}
}
function jump2Down(){
  dodger2.style.bottom = `${getBottomPosition(dodger2) - 3}px`
  if (getBottomPosition(dodger2)>200){
    setTimeout(jump2Down, 10)
  }
  else{jump2Listener()}
}

function shootBullet1Listener(){
  setTimeout(shoot1, Math.floor((Math.random() * 4000) + 3000))
}
function shoot1(e){
  bullet1.style.bottom = `${(getBottomPosition(dodger1)+10)}px`
  shootBullet1()
}
function shootBullet1(){
  bullet1.style.left = `${getLeftPosition(bullet1)+ 2}px`
  if (getLeftPosition(bullet1) < 1000) {
    setTimeout(shootBullet1, 5)
  }
  else{
    bullet1.style.left = `${180}px`
    bullet1.style.bottom = `${190}px`
    if (gameGoing){
      shootBullet1Listener()
    }
  }
}

function shootBullet2Listener(){
  setTimeout(shoot2, Math.floor((Math.random() * 4000) + 3000))
}

function shoot2(){
    bullet2.style.bottom = `${(getBottomPosition(dodger2)+10)}px`
    shootBullet2()
}
function shootBullet2(){
  bullet2.style.left = `${getLeftPosition(bullet2) - 2}px`
  if (getLeftPosition(bullet2) > 0) {
    setTimeout(shootBullet2, 5)
  }
  else{
    bullet2.style.left = `${820}px`
    bullet2.style.bottom = `${190}px`
    if (gameGoing){
      shootBullet2Listener()
    }
  }
}

function checkBullet1Collision(){
  dodger2LeftPosition = getLeftPosition(dodger2)
  dodger2HeightPosition = getBottomPosition(dodger2)
  bullet1LeftPosition = getLeftPosition(bullet1)
  bullet1HeightPosition = getBottomPosition(bullet1)
  if ((dodger2LeftPosition <= bullet1LeftPosition) &&
      (dodger2LeftPosition+20 >= bullet1LeftPosition) &&
      (dodger2HeightPosition <= bullet1HeightPosition) &&
      (dodger2HeightPosition+20 >= bullet1HeightPosition)){
    score2 = score2 + 5
    console.log(`Player 2 was hit by a bullet. Player 1 has ${score2} point(s).`)
    resetBullet1Position()
    displayScore()
    checkIfPlayerWon()
  }
}
function checkBullet2Collision(){
  dodger1LeftPosition = getLeftPosition(dodger1)
  dodger1HeightPosition = getBottomPosition(dodger1)
  bullet2LeftPosition = getLeftPosition(bullet2)
  bullet2HeightPosition = getBottomPosition(bullet2)
  if ((dodger1LeftPosition <= bullet2LeftPosition) &&
      (dodger1LeftPosition+20 >= bullet2LeftPosition) &&
      (dodger1HeightPosition <= bullet2HeightPosition) &&
      (dodger1HeightPosition+20 >= bullet2HeightPosition)){
    score1 = score1+5
    console.log(`Player 1 was hit by a bullet. Player 2 has ${score1} point(s).`)
    resetBullet2Position()
    displayScore()
    checkIfPlayerWon()
  }
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

function checkIfPlayerWon(){
  if (score1 >= 50) {askNewGame(2)}
  else if (score2 >= 50) {askNewGame(1)}
}

function askNewGame(num){
  if (confirm(`Player ${num} wins. Press Enter to Start a new Game`) == true){}
  else{gameGoing = false}
  resetGame()
}

function resetGame(){
  score1=0
  score2=0
  resetAllWallPositions()
  resetBullet1Position()
  resetBullet2Position()
  displayScore()
}

function displayScore(){
  document.getElementById("score2").innerHTML=`Player One:${score2}<br> Player Two:${score1}`
}

function getLeftPosition(object){
  return parseInt(object.style.left.replace('px', ''))
}

function getBottomPosition(object){
  return parseInt(object.style.bottom.replace('px', ''))
}
