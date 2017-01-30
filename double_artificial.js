function runDoubleArtificial(){
  score1=0
  score2=0
  gameGoingDoubleArtificial = true
  document.getElementById("Instructions").innerHTML="Instructions: Press 'Enter' to Start<br>First to reach 50 points wins.<br> If your opponent is hit by a same color wall, you earn 1 point.<br>If you shoot your opponent, you earn 5 points.<br><br>Red Brick must avoid the Red walls. Blue Brick must avoid the Blue walls.<br>Controls: None. You aren't playing.<br>"
  document.addEventListener('keydown', startGameDoubleArtificial)
  let r = document.getElementsByTagName('button');
  for (let i = (r.length-1); i >= 0; i--) {
    if(r[i].getAttribute('id') != 'a'){
        r[i].parentNode.removeChild(r[i]);
    }
  }
}
function startGameDoubleArtificial(e){
  console.log(e.which)
    if (e.which === 13) {
      document.removeEventListener("keydown", startGameDoubleArtificial)
      displayScoreDoubleArtificial()
      startMovingWallsDoubleArtificial()
      jump1ListenerDoubleArtificial()
      shootBullet1ListenerDoubleArtificial()
      shootBullet2ListenerDoubleArtificial()
    }
}

function startMovingWallsDoubleArtificial(){
  if (getBottomPositionDoubleArtificial(dodger2) === 200){jump2ListenerDoubleArtificial()}
  if (getBottomPositionDoubleArtificial(dodger1) === 200){jump1ListenerDoubleArtificial()}
  moveWallLeftDoubleArtificial(wall0)
  moveWallLeftDoubleArtificial(wall1)
  moveWallLeftDoubleArtificial(wall2)
  moveWallLeftDoubleArtificial(wall3)
  moveWallLeftDoubleArtificial(wall4)
  moveWallRightDoubleArtificial(wall5)
  moveWallRightDoubleArtificial(wall6)
  moveWallRightDoubleArtificial(wall7)
  moveWallRightDoubleArtificial(wall8)
  moveWallRightDoubleArtificial(wall9)
  checkCollisionsDoubleArtificial()
  if (gameGoingDoubleArtificial){setTimeout(startMovingWallsDoubleArtificial, 5)}
}

function moveWallLeftDoubleArtificial(object){
  object.style.left = `${getLeftPositionDoubleArtificial(object) - 1}px`
  if (getLeftPositionDoubleArtificial(object) < -10) {
    object.style.left = `${1000+Math.floor(Math.random()*150)}px`
  }
}
function moveWallRightDoubleArtificial(object){
  object.style.left = `${getLeftPositionDoubleArtificial(object) + 1}px`
  if (getLeftPositionDoubleArtificial(object) > 1000) {
    object.style.left = `${-Math.floor(Math.random()*150)}px`
  }
}

function checkCollisionsDoubleArtificial(){
  checkWallCollision1DoubleArtificial()
  checkWallCollision2DoubleArtificial()
  checkBullet1CollisionDoubleArtificial()
  checkBullet2CollisionDoubleArtificial()
}

function checkWallCollision1DoubleArtificial(){
  dodger1LeftPosition = getLeftPositionDoubleArtificial(dodger1)
  dodger1HeightPosition = getBottomPositionDoubleArtificial(dodger1)
  wall0Position = getLeftPositionDoubleArtificial(wall0)
  wall1Position = getLeftPositionDoubleArtificial(wall1)
  wall2Position = getLeftPositionDoubleArtificial(wall2)
  wall3Position = getLeftPositionDoubleArtificial(wall3)
  wall4Position = getLeftPositionDoubleArtificial(wall4)
  if (((dodger1LeftPosition+20 === wall0Position) ||
       (dodger1LeftPosition+20 === wall1Position) ||
       (dodger1LeftPosition+20 === wall2Position) ||
       (dodger1LeftPosition+20 === wall3Position) ||
       (dodger1LeftPosition+20 === wall4Position)) &&
       (dodger1HeightPosition <240 )){
    score1++
    console.log(`Player 1 was hit by a wall. Player 2 has ${score1} point(s).`)
    displayScoreDoubleArtificial()
    checkIfPlayerWonDoubleArtificial()
  }
}
function checkWallCollision2DoubleArtificial(){
  dodger2LeftPosition = getLeftPositionDoubleArtificial(dodger2)
  dodger2HeightPosition = getBottomPositionDoubleArtificial(dodger2)
  wall5Position = getLeftPositionDoubleArtificial(wall5)
  wall6Position = getLeftPositionDoubleArtificial(wall6)
  wall7Position = getLeftPositionDoubleArtificial(wall7)
  wall8Position = getLeftPositionDoubleArtificial(wall8)
  wall9Position = getLeftPositionDoubleArtificial(wall9)
  if (((dodger2LeftPosition === wall5Position+10) ||
       (dodger2LeftPosition === wall6Position+10) ||
       (dodger2LeftPosition === wall7Position+10) ||
       (dodger2LeftPosition === wall8Position+10) ||
       (dodger2LeftPosition === wall9Position+10)) &&
       (dodger2HeightPosition <240 )){
    score2++
    console.log(`Player 2 was hit by a wall. Player 1 has ${score2} point(s).`)
    displayScoreDoubleArtificial()
    checkIfPlayerWonDoubleArtificial()
  }
}

function jump1ListenerDoubleArtificial(){
  dodger1LeftPosition = getLeftPositionDoubleArtificial(dodger1)
  wall0Position = getLeftPositionDoubleArtificial(wall0)
  wall1Position = getLeftPositionDoubleArtificial(wall1)
  wall2Position = getLeftPositionDoubleArtificial(wall2)
  wall3Position = getLeftPositionDoubleArtificial(wall3)
  wall4Position = getLeftPositionDoubleArtificial(wall4)
  if ((wall0Position === 210) ||
      (wall1Position === 210) ||
      (wall2Position === 210) ||
      (wall3Position === 210) ||
      (wall4Position === 210)){
    jump1UpDoubleArtificial()
  }
}

function jump1UpDoubleArtificial(){
  dodger1.style.bottom = `${getBottomPositionDoubleArtificial(dodger1) +3}px`
  if (getBottomPositionDoubleArtificial(dodger1)<300){
    setTimeout(jump1UpDoubleArtificial, 10)
  }
  else{jump1DownDoubleArtificial()}
}
function jump1DownDoubleArtificial(){
  dodger1.style.bottom = `${getBottomPositionDoubleArtificial(dodger1)- 3}px`
  if (getBottomPositionDoubleArtificial(dodger1)>200){
    setTimeout(jump1DownDoubleArtificial, 10)
  }
  else{jump1ListenerDoubleArtificial()}
}

function jump2ListenerDoubleArtificial(){
  dodger2LeftPosition = getLeftPositionDoubleArtificial(dodger2)
  wall5Position = getLeftPositionDoubleArtificial(wall5)
  wall6Position = getLeftPositionDoubleArtificial(wall6)
  wall7Position = getLeftPositionDoubleArtificial(wall7)
  wall8Position = getLeftPositionDoubleArtificial(wall8)
  wall9Position = getLeftPositionDoubleArtificial(wall9)
  if ((wall5Position === 780) ||
      (wall6Position === 780) ||
      (wall7Position === 780) ||
      (wall8Position === 780) ||
      (wall9Position === 780)){
    jump2UpDoubleArtificial()
  }
}

function jump2UpDoubleArtificial(){
  dodger2.style.bottom = `${getBottomPositionDoubleArtificial(dodger2) +3}px`
  if (getBottomPositionDoubleArtificial(dodger2)<300){
    setTimeout(jump2UpDoubleArtificial, 10)
  }
  else{jump2DownDoubleArtificial()}
}
function jump2DownDoubleArtificial(){
  dodger2.style.bottom = `${getBottomPositionDoubleArtificial(dodger2) - 3}px`
  if (getBottomPositionDoubleArtificial(dodger2)>200){
    setTimeout(jump2DownDoubleArtificial, 10)
  }
  else{jump2ListenerDoubleArtificial()}
}

function shootBullet1ListenerDoubleArtificial(){
  setTimeout(shoot1DoubleArtificial, Math.floor((Math.random() * 4000) + 3000))
}
function shoot1DoubleArtificial(e){
  bullet1.style.bottom = `${(getBottomPositionDoubleArtificial(dodger1)+10)}px`
  shootBullet1DoubleArtificial()
}
function shootBullet1DoubleArtificial(){
  bullet1.style.left = `${getLeftPositionDoubleArtificial(bullet1)+ 2}px`
  if (getLeftPositionDoubleArtificial(bullet1) < 1000) {
    setTimeout(shootBullet1DoubleArtificial, 5)
  }
  else{
    bullet1.style.left = `${180}px`
    bullet1.style.bottom = `${190}px`
    if (gameGoingDoubleArtificial){
      shootBullet1ListenerDoubleArtificial()
    }
  }
}

function shootBullet2ListenerDoubleArtificial(){
  setTimeout(shoot2DoubleArtificial, Math.floor((Math.random() * 4000) + 3000))
}

function shoot2DoubleArtificial(){
    bullet2.style.bottom = `${(getBottomPositionDoubleArtificial(dodger2)+10)}px`
    shootBullet2DoubleArtificial()
}
function shootBullet2DoubleArtificial(){
  bullet2.style.left = `${getLeftPositionDoubleArtificial(bullet2) - 2}px`
  if (getLeftPositionDoubleArtificial(bullet2) > 0) {
    setTimeout(shootBullet2DoubleArtificial, 5)
  }
  else{
    bullet2.style.left = `${820}px`
    bullet2.style.bottom = `${190}px`
    if (gameGoingDoubleArtificial){
      shootBullet2ListenerDoubleArtificial()
    }
  }
}

function checkBullet1CollisionDoubleArtificial(){
  dodger2LeftPosition = getLeftPositionDoubleArtificial(dodger2)
  dodger2HeightPosition = getBottomPositionDoubleArtificial(dodger2)
  bullet1LeftPosition = getLeftPositionDoubleArtificial(bullet1)
  bullet1HeightPosition = getBottomPositionDoubleArtificial(bullet1)
  if ((dodger2LeftPosition <= bullet1LeftPosition) &&
      (dodger2LeftPosition+20 >= bullet1LeftPosition) &&
      (dodger2HeightPosition <= bullet1HeightPosition) &&
      (dodger2HeightPosition+20 >= bullet1HeightPosition)){
    score2 = score2 + 5
    console.log(`Player 2 was hit by a bullet. Player 1 has ${score2} point(s).`)
    resetBullet1PositionDoubleArtificial()
    displayScoreDoubleArtificial()
    checkIfPlayerWonDoubleArtificial()
  }
}
function checkBullet2CollisionDoubleArtificial(){
  dodger1LeftPosition = getLeftPositionDoubleArtificial(dodger1)
  dodger1HeightPosition = getBottomPositionDoubleArtificial(dodger1)
  bullet2LeftPosition = getLeftPositionDoubleArtificial(bullet2)
  bullet2HeightPosition = getBottomPositionDoubleArtificial(bullet2)
  if ((dodger1LeftPosition <= bullet2LeftPosition) &&
      (dodger1LeftPosition+20 >= bullet2LeftPosition) &&
      (dodger1HeightPosition <= bullet2HeightPosition) &&
      (dodger1HeightPosition+20 >= bullet2HeightPosition)){
    score1 = score1+5
    console.log(`Player 1 was hit by a bullet. Player 2 has ${score1} point(s).`)
    resetBullet2PositionDoubleArtificial()
    displayScoreDoubleArtificial()
    checkIfPlayerWonDoubleArtificial()
  }
}

function resetAllWallPositionsDoubleArtificial(){
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
function resetBullet1PositionDoubleArtificial(){
  if (parseInt(bullet1.style.left.replace('px', ''),10)===180){
    bullet1.style.left = `${180}px`}
  else{bullet1.style.left = `${1000}px`}
}
function resetBullet2PositionDoubleArtificial(){
  if (parseInt(bullet2.style.left.replace('px', ''),10)===820){
    bullet2.style.left = `${820}px`}
  else{bullet2.style.left = `${0}px`}
}

function checkIfPlayerWonDoubleArtificial(){
  if (score1 >= 50) {askNewGameDoubleArtificial(2)}
  else if (score2 >= 50) {askNewGameDoubleArtificial(1)}
}

function askNewGameDoubleArtificial(num){
  if (confirm(`Player ${num} wins. Press Enter to Start a new Game`) == true){}
  else{gameGoingDoubleArtificial = false}
  resetGameDoubleArtificial()
}

function resetGameDoubleArtificial(){
  score1=0
  score2=0
  resetAllWallPositionsDoubleArtificial()
  resetBullet1PositionDoubleArtificial()
  resetBullet2PositionDoubleArtificial()
  displayScoreDoubleArtificial()
}

function displayScoreDoubleArtificial(){
  document.getElementById("score2").innerHTML=`Player One:${score2}<br> Player Two:${score1}`
}

function getLeftPositionDoubleArtificial(object){
  return parseInt(object.style.left.replace('px', ''))
}

function getBottomPositionDoubleArtificial(object){
  return parseInt(object.style.bottom.replace('px', ''))
}
