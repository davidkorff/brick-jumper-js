function runIndex(){
  score1=0
  score2=0
  gameGoingIndex = true
  document.getElementById("Instructions").innerHTML="Instructions: Press 'Enter' to Start<br>First to reach 50 points wins.<br> If your opponent is hit by a same color wall, you earn 1 point.<br> If you shoot your opponent, you earn 5 points.<br><br>Red Brick must avoid the Red walls. Blue Brick must avoid the Blue walls.<br>Controls: Red- Press w to jump. Press 2 to shoot.<br>Blue- Up arrow to jump. Press shift to shoot."
  // document.removeEventListener("keydown", startGameArtificial)
  // document.removeEventListener("keydown", startGameDoubleArtificial)
  document.addEventListener('keydown', startGameIndex)
  let r = document.getElementsByTagName('button');
  for (let i = (r.length-1); i >= 0; i--) {
    if(r[i].getAttribute('id') != 'a'){
        r[i].parentNode.removeChild(r[i]);
    }
  }
}

function startGameIndex(e){
  console.log(e.which)
    if (e.which === 13) {
      document.removeEventListener("keydown", startGameIndex)
      displayScoreIndex()
      startMovingWallsIndex()
      jump1ListenerIndex()
      jump2ListenerIndex()
      shootBullet1ListenerIndex()
      shootBullet2ListenerIndex()
    }
}

function startMovingWallsIndex(){
  moveWallLeftIndex(wall0)
  moveWallLeftIndex(wall1)
  moveWallLeftIndex(wall2)
  moveWallLeftIndex(wall3)
  moveWallLeftIndex(wall4)
  moveWallRightIndex(wall5)
  moveWallRightIndex(wall6)
  moveWallRightIndex(wall7)
  moveWallRightIndex(wall8)
  moveWallRightIndex(wall9)
  checkCollisionsIndex()
  if (gameGoingIndex){setTimeout(startMovingWallsIndex, 5)}
}

function moveWallLeftIndex(object){
  object.style.left = `${getLeftPositionIndex(object) - 1}px`
  if (getLeftPositionIndex(object) < -10) {
    object.style.left = `${1000+Math.floor(Math.random()*150)}px`
  }
}
function moveWallRightIndex(object){
  object.style.left = `${getLeftPositionIndex(object) + 1}px`
  if (getLeftPositionIndex(object) > 1000) {
    object.style.left = `${-Math.floor(Math.random()*150)}px`
  }
}

function checkCollisionsIndex(){
  checkWallCollision1Index()
  checkWallCollision2Index()
  checkBullet1CollisionIndex()
  checkBullet2CollisionIndex()
}

function checkWallCollision1Index(){
  dodger1LeftPosition = getLeftPositionIndex(dodger1)
  dodger1HeightPosition = getBottomPositionIndex(dodger1)
  wall0Position = getLeftPositionIndex(wall0)
  wall1Position = getLeftPositionIndex(wall1)
  wall2Position = getLeftPositionIndex(wall2)
  wall3Position = getLeftPositionIndex(wall3)
  wall4Position = getLeftPositionIndex(wall4)
  if (((dodger1LeftPosition+20 === wall0Position) ||
       (dodger1LeftPosition+20 === wall1Position) ||
       (dodger1LeftPosition+20 === wall2Position) ||
       (dodger1LeftPosition+20 === wall3Position) ||
       (dodger1LeftPosition+20 === wall4Position)) &&
       (dodger1HeightPosition <240 )){
    score1++
    console.log(`Player 1 was hit by a wall. Player 2 has ${score1} point(s).`)
    displayScoreIndex()
    checkIfPlayerWonIndex()
  }
}
function checkWallCollision2Index(){
  dodger2LeftPosition = getLeftPositionIndex(dodger2)
  dodger2HeightPosition = getBottomPositionIndex(dodger2)
  wall5Position = getLeftPositionIndex(wall5)
  wall6Position = getLeftPositionIndex(wall6)
  wall7Position = getLeftPositionIndex(wall7)
  wall8Position = getLeftPositionIndex(wall8)
  wall9Position = getLeftPositionIndex(wall9)
  if (((dodger2LeftPosition === wall5Position+10) ||
       (dodger2LeftPosition === wall6Position+10) ||
       (dodger2LeftPosition === wall7Position+10) ||
       (dodger2LeftPosition === wall8Position+10) ||
       (dodger2LeftPosition === wall9Position+10)) &&
       (dodger2HeightPosition <240 )){
    score2++
    console.log(`Player 2 was hit by a wall. Player 1 has ${score2} point(s).`)
    displayScoreIndex()
    checkIfPlayerWonIndex()
  }
}
function jump1ListenerIndex(){
  document.addEventListener('keydown', jump1Index) }
function jump1Index(e){
    if (e.which === 87){
      jump1UpIndex()
      document.removeEventListener("keydown", jump1Index)
    }}
function jump1UpIndex(){
  dodger1.style.bottom = `${getBottomPositionIndex(dodger1) +3}px`
  if (getBottomPositionIndex(dodger1)<300){
    setTimeout(jump1UpIndex, 10)
  }
  else{jump1DownIndex()}
}
function jump1DownIndex(){
  dodger1.style.bottom = `${getBottomPositionIndex(dodger1)- 3}px`
  if (getBottomPositionIndex(dodger1)>200){
    setTimeout(jump1DownIndex, 10)
  }
  else{jump1ListenerIndex()}
}

function jump2ListenerIndex(){
  document.addEventListener('keydown', jump2Index) }
function jump2Index(e){
  if (e.which === 38){
    jump2UpIndex()
    document.removeEventListener("keydown", jump2Index)
  }}
function jump2UpIndex(){
  dodger2.style.bottom = `${getBottomPositionIndex(dodger2) +3}px`
  if (getBottomPositionIndex(dodger2)<300){
    setTimeout(jump2UpIndex, 10)
  }
  else{jump2DownIndex()}
}
function jump2DownIndex(){
  dodger2.style.bottom = `${getBottomPositionIndex(dodger2) - 3}px`
  if (getBottomPositionIndex(dodger2)>200){
    setTimeout(jump2DownIndex, 10)
  }
  else{jump2ListenerIndex()}
}

function shootBullet1ListenerIndex(){
  document.addEventListener('keydown', shoot1Index)
}
function shoot1Index(e){
  if (e.which === 50){
    bullet1.style.bottom = `${(getBottomPositionIndex(dodger1)+10)}px`
    shootBullet1Index()
    document.removeEventListener("keydown", shoot1Index)
  }}
function shootBullet1Index(e){
  bullet1.style.left = `${getLeftPositionIndex(bullet1)+ 2}px`
  if (getLeftPositionIndex(bullet1) < 1000) {
    setTimeout(shootBullet1Index, 5)
  }
  else{
    bullet1.style.left = `${190}px`
    bullet1.style.bottom = `${190}px`
    shootBullet1ListenerIndex()
  }
}

function shootBullet2ListenerIndex(){
  document.addEventListener('keydown', shoot2Index)
}
function shoot2Index(e){
  if (e.which === 16){
    bullet2.style.bottom = `${(getBottomPositionIndex(dodger2)+10)}px`
    shootBullet2Index()
    document.removeEventListener("keydown", shoot2Index)
  }}
function shootBullet2Index(e){
  bullet2.style.left = `${getLeftPositionIndex(bullet2) - 2}px`
  if (getLeftPositionIndex(bullet2) > 0) {
    setTimeout(shootBullet2Index, 5)
  }
  else{
    bullet2.style.left = `${820}px`
    bullet2.style.bottom = `${190}px`
    shootBullet2ListenerIndex()
  }
}

function checkBullet1CollisionIndex(){
  dodger2LeftPosition = getLeftPositionIndex(dodger2)
  dodger2HeightPosition = getBottomPositionIndex(dodger2)
  bullet1LeftPosition = getLeftPositionIndex(bullet1)
  bullet1HeightPosition = getBottomPositionIndex(bullet1)
  if ((dodger2LeftPosition <= bullet1LeftPosition) &&
      (dodger2LeftPosition+20 >= bullet1LeftPosition) &&
      (dodger2HeightPosition <= bullet1HeightPosition) &&
      (dodger2HeightPosition+20 >= bullet1HeightPosition)){
    score2 = score2 + 5
    console.log(`Player 2 was hit by a bullet. Player 1 has ${score2} point(s).`)
    resetBullet1PositionIndex()
    displayScoreIndex()
    checkIfPlayerWonIndex()
  }
}
function checkBullet2CollisionIndex(){
  dodger1LeftPosition = getLeftPositionIndex(dodger1)
  dodger1HeightPosition = getBottomPositionIndex(dodger1)
  bullet2LeftPosition = getLeftPositionIndex(bullet2)
  bullet2HeightPosition = getBottomPositionIndex(bullet2)
  if ((dodger1LeftPosition <= bullet2LeftPosition) &&
      (dodger1LeftPosition+20 >= bullet2LeftPosition) &&
      (dodger1HeightPosition <= bullet2HeightPosition) &&
      (dodger1HeightPosition+20 >= bullet2HeightPosition)){
    score1 = score1+5
    console.log(`Player 1 was hit by a bullet. Player 2 has ${score1} point(s).`)
    resetBullet2PositionIndex()
    displayScoreIndex()
    checkIfPlayerWonIndex()
  }
}

function resetAllWallPositionsIndex(){
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
function resetBullet1PositionIndex(){
  if (parseInt(bullet1.style.left.replace('px', ''),10)===190){
    bullet1.style.left = `${190}px`}
  else{bullet1.style.left = `${1000}px`}
}
function resetBullet2PositionIndex(){
  if (parseInt(bullet2.style.left.replace('px', ''),10)===820){
    bullet2.style.left = `${820}px`}
  else{bullet2.style.left = `${0}px`}
}

function checkIfPlayerWonIndex(){
  if (score1 >= 50) {askNewGameIndex(2)}
  else if (score2 >= 50) {askNewGameIndex(1)}
}

function askNewGameIndex(num){
  if (confirm(`Player ${num} wins. Press Enter to Start a new Game`) == true){}
  else{gameGoingIndex = false}
  resetGameIndex()
}

function resetGameIndex(){
  score1=0
  score2=0
  resetAllWallPositionsIndex()
  resetBullet1PositionIndex()
  resetBullet2PositionIndex()
  displayScoreIndex()
  //document.addEventListener('keydown', startGame)
}

function displayScoreIndex(){
  document.getElementById("score2").innerHTML=`Player One:${score2}<br> Player Two:${score1}`
}

function getLeftPositionIndex(object){
  return parseInt(object.style.left.replace('px', ''))
}

function getBottomPositionIndex(object){
  return parseInt(object.style.bottom.replace('px', ''))
}
