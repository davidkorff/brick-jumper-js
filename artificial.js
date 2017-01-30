function runArtificial(){
  score1=0
  score2=0
  gameGoingArtificial = true
  document.getElementById("Instructions").innerHTML="Instructions: Press 'Enter' to Start<br>First to reach 50 points wins.<br> If your opponent is hit by a same color wall, you earn 1 point.<br> If you shoot your opponent, you earn 5 points.<br><br>Red Brick must avoid the Red walls. Blue Brick must avoid the Blue walls.<br>Controls: Red- Up arrow to jump. Press shift to shoot.<br>"
  document.addEventListener('keydown', startGameArtificial)
  let r = document.getElementsByTagName('button');
  for (let i = (r.length-1); i >= 0; i--) {
    if(r[i].getAttribute('id') != 'a'){
        r[i].parentNode.removeChild(r[i]);
    }
  }
}
function startGameArtificial(e){
  console.log(e.which)
    if (e.which === 13) {
      document.removeEventListener("keydown", startGameArtificial)
      displayScoreArtificial()
      startMovingWallsArtificial()
      jump1ListenerArtificial()
      shootBullet1ListenerArtificial()
      shootBullet2ListenerArtificial()
    }
}

function startMovingWallsArtificial(){
  if (getBottomPositionArtificial(dodger2) === 200){
    jump2ListenerArtificial()
  }
  moveWallLeftArtificial(wall0)
  moveWallLeftArtificial(wall1)
  moveWallLeftArtificial(wall2)
  moveWallLeftArtificial(wall3)
  moveWallLeftArtificial(wall4)
  moveWallRightArtificial(wall5)
  moveWallRightArtificial(wall6)
  moveWallRightArtificial(wall7)
  moveWallRightArtificial(wall8)
  moveWallRightArtificial(wall9)
  checkCollisionsArtificial()
  if (gameGoingArtificial){setTimeout(startMovingWallsArtificial, 5)}
}

function moveWallLeftArtificial(object){
  object.style.left = `${getLeftPositionArtificial(object) - 1}px`
  if (getLeftPositionArtificial(object) < -10) {
    object.style.left = `${1000+Math.floor(Math.random()*150)}px`
  }
}
function moveWallRightArtificial(object){
  object.style.left = `${getLeftPositionArtificial(object) + 1}px`
  if (getLeftPositionArtificial(object) > 1000) {
    object.style.left = `${-Math.floor(Math.random()*150)}px`
  }
}

function checkCollisionsArtificial(){
  checkWallCollision1Artificial()
  checkWallCollision2Artificial()
  checkBullet1CollisionArtificial()
  checkBullet2CollisionArtificial()
}

function checkWallCollision1Artificial(){
  dodger1LeftPosition = getLeftPositionArtificial(dodger1)
  dodger1HeightPosition = getBottomPositionArtificial(dodger1)
  wall0Position = getLeftPositionArtificial(wall0)
  wall1Position = getLeftPositionArtificial(wall1)
  wall2Position = getLeftPositionArtificial(wall2)
  wall3Position = getLeftPositionArtificial(wall3)
  wall4Position = getLeftPositionArtificial(wall4)
  if (((dodger1LeftPosition+20 === wall0Position) ||
       (dodger1LeftPosition+20 === wall1Position) ||
       (dodger1LeftPosition+20 === wall2Position) ||
       (dodger1LeftPosition+20 === wall3Position) ||
       (dodger1LeftPosition+20 === wall4Position)) &&
       (dodger1HeightPosition <240 )){
    score1++
    console.log(`Player 1 was hit by a wall. Player 2 has ${score1} point(s).`)
    displayScoreArtificial()
    checkIfPlayerWonArtificial()
  }
}
function checkWallCollision2Artificial(){
  dodger2LeftPosition = getLeftPositionArtificial(dodger2)
  dodger2HeightPosition = getBottomPositionArtificial(dodger2)
  wall5Position = getLeftPositionArtificial(wall5)
  wall6Position = getLeftPositionArtificial(wall6)
  wall7Position = getLeftPositionArtificial(wall7)
  wall8Position = getLeftPositionArtificial(wall8)
  wall9Position = getLeftPositionArtificial(wall9)
  if (((dodger2LeftPosition === wall5Position+10) ||
       (dodger2LeftPosition === wall6Position+10) ||
       (dodger2LeftPosition === wall7Position+10) ||
       (dodger2LeftPosition === wall8Position+10) ||
       (dodger2LeftPosition === wall9Position+10)) &&
       (dodger2HeightPosition <240 )){
    score2++
    console.log(`Player 2 was hit by a wall. Player 1 has ${score2} point(s).`)
    displayScoreArtificial()
    checkIfPlayerWonArtificial()
  }
}

function jump1ListenerArtificial(){
  document.addEventListener('keydown', jump1Artificial) }
function jump1Artificial(e){
    if (e.which === 38){
      jump1UpArtificial()
      document.removeEventListener("keydown", jump1Artificial)
    }}
function jump1UpArtificial(){
  dodger1.style.bottom = `${getBottomPositionArtificial(dodger1) +3}px`
  if (getBottomPositionArtificial(dodger1)<300){
    setTimeout(jump1UpArtificial, 10)
  }
  else{jump1DownArtificial()}
}
function jump1DownArtificial(){
  dodger1.style.bottom = `${getBottomPositionArtificial(dodger1)- 3}px`
  if (getBottomPositionArtificial(dodger1)>200){
    setTimeout(jump1DownArtificial, 10)
  }
  else{jump1ListenerArtificial()}
}

function jump2ListenerArtificial(){
  dodger2LeftPosition = getLeftPositionArtificial(dodger2)
  wall5Position = getLeftPositionArtificial(wall5)
  wall6Position = getLeftPositionArtificial(wall6)
  wall7Position = getLeftPositionArtificial(wall7)
  wall8Position = getLeftPositionArtificial(wall8)
  wall9Position = getLeftPositionArtificial(wall9)
  if ((wall5Position === 780) ||
      (wall6Position === 780) ||
      (wall7Position === 780) ||
      (wall8Position === 780) ||
      (wall9Position === 780)){
    jump2UpArtificial()
  }
}
function jump2Artificial(e){
  if (e.which === 38){
    jump2UpArtificial()
    document.removeEventListener("keydown", jump2Artificial)
  }}
function jump2UpArtificial(){
  dodger2.style.bottom = `${getBottomPositionArtificial(dodger2) +3}px`
  if (getBottomPositionArtificial(dodger2)<300){
    setTimeout(jump2UpArtificial, 10)
  }
  else{jump2DownArtificial()}
}
function jump2DownArtificial(){
  dodger2.style.bottom = `${getBottomPositionArtificial(dodger2) - 3}px`
  if (getBottomPositionArtificial(dodger2)>200){
    setTimeout(jump2DownArtificial, 10)
  }
  else{jump2ListenerArtificial()}
}

function shootBullet1ListenerArtificial(){
  document.addEventListener('keydown', shoot1Artificial)
}
function shoot1Artificial(e){
  if (e.which === 16){
    bullet1.style.bottom = `${(getBottomPositionArtificial(dodger1)+10)}px`
    shootBullet1Artificial()
    document.removeEventListener("keydown", shoot1Artificial)
  }}
function shootBullet1Artificial(e){
  bullet1.style.left = `${getLeftPositionArtificial(bullet1)+ 2}px`
  if (getLeftPositionArtificial(bullet1) < 1000) {
    setTimeout(shootBullet1Artificial, 5)
  }
  else{
    bullet1.style.left = `${180}px`
    bullet1.style.bottom = `${190}px`
    shootBullet1ListenerArtificial()
  }
}

function shootBullet2ListenerArtificial(){
  setTimeout(shoot2Artificial, Math.floor((Math.random() * 4000) + 3000))
}

function shoot2Artificial(){
    bullet2.style.bottom = `${(getBottomPositionArtificial(dodger2)+10)}px`
    shootBullet2Artificial()
}
function shootBullet2Artificial(){
  bullet2.style.left = `${getLeftPositionArtificial(bullet2) - 2}px`
  if (getLeftPositionArtificial(bullet2) > 0) {
    setTimeout(shootBullet2Artificial, 5)
  }
  else{
    bullet2.style.left = `${820}px`
    bullet2.style.bottom = `${190}px`
    if (gameGoingArtificial){
      shootBullet2ListenerArtificial()
    }
  }
}

function checkBullet1CollisionArtificial(){
  dodger2LeftPosition = getLeftPositionArtificial(dodger2)
  dodger2HeightPosition = getBottomPositionArtificial(dodger2)
  bullet1LeftPosition = getLeftPositionArtificial(bullet1)
  bullet1HeightPosition = getBottomPositionArtificial(bullet1)
  if ((dodger2LeftPosition <= bullet1LeftPosition) &&
      (dodger2LeftPosition+20 >= bullet1LeftPosition) &&
      (dodger2HeightPosition <= bullet1HeightPosition) &&
      (dodger2HeightPosition+20 >= bullet1HeightPosition)){
    score2 = score2 + 5
    console.log(`Player 2 was hit by a bullet. Player 1 has ${score2} point(s).`)
    resetBullet1PositionArtificial()
    displayScoreArtificial()
    checkIfPlayerWonArtificial()
  }
}
function checkBullet2CollisionArtificial(){
  dodger1LeftPosition = getLeftPositionArtificial(dodger1)
  dodger1HeightPosition = getBottomPositionArtificial(dodger1)
  bullet2LeftPosition = getLeftPositionArtificial(bullet2)
  bullet2HeightPosition = getBottomPositionArtificial(bullet2)
  if ((dodger1LeftPosition <= bullet2LeftPosition) &&
      (dodger1LeftPosition+20 >= bullet2LeftPosition) &&
      (dodger1HeightPosition <= bullet2HeightPosition) &&
      (dodger1HeightPosition+20 >= bullet2HeightPosition)){
    score1 = score1+5
    console.log(`Player 1 was hit by a bullet. Player 2 has ${score1} point(s).`)
    resetBullet2PositionArtificial()
    displayScoreArtificial()
    checkIfPlayerWonArtificial()
  }
}

function resetAllWallPositionsArtificial(){
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
function resetBullet1PositionArtificial(){
  if (parseInt(bullet1.style.left.replace('px', ''),10)===180){
    bullet1.style.left = `${180}px`}
  else{bullet1.style.left = `${1000}px`}
}
function resetBullet2PositionArtificial(){
  if (parseInt(bullet2.style.left.replace('px', ''),10)===820){
    bullet2.style.left = `${820}px`}
  else{bullet2.style.left = `${0}px`}
}

function checkIfPlayerWonArtificial(){
  if (score1 >= 50) {askNewGameArtificial(2)}
  else if (score2 >= 50) {askNewGameArtificial(1)}
}

function askNewGameArtificial(num){
  if (confirm(`Player ${num} wins. Press Enter to Start a new Game`) == true){}
  else{gameGoingArtificial = false}
  resetGameArtificial()
}

function resetGameArtificial(){
  score1=0
  score2=0
  resetAllWallPositionsArtificial()
  resetBullet1PositionArtificial()
  resetBullet2PositionArtificial()
  displayScoreArtificial()
  //document.addEventListener('keydown', startGame)
}

function displayScoreArtificial(){
  document.getElementById("score2").innerHTML=`Player One:${score2}<br> Player Two:${score1}`
}

function getLeftPositionArtificial(object){
  return parseInt(object.style.left.replace('px', ''))
}

function getBottomPositionArtificial(object){
  return parseInt(object.style.bottom.replace('px', ''))
}
