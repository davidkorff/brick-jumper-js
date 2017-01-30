function runIndex(){
  initializeConstants()
  document.getElementById("Instructions").innerHTML="Instructions: Press 'Enter' to Start<br>First to reach 50 points wins.<br> If your opponent is hit by a same color wall, you earn 1 point.<br> If you shoot your opponent, you earn 5 points.<br><br>Red Brick must avoid the Red walls. Blue Brick must avoid the Blue walls.<br>Controls: Red- Press w to jump. Press 2 to shoot.<br>Blue- Up arrow to jump. Press shift to shoot.<br>"
  document.addEventListener('keydown', startGameIndex)
  removeButtons()
}

function startGameIndex(e){
  console.log(e.which)
    if (e.which === 13) {
      document.removeEventListener("keydown", startGameIndex)
      displayScore()
      startMovingWallsIndex()
      jump1ListenerIndex()
      jump2ListenerIndex()
      shootBullet1ListenerIndex()
      shootBullet2ListenerIndex()
    }
}

function startMovingWallsIndex(){
  moveAllWalls()
  checkCollisions()
  if (gameGoing){setTimeout(startMovingWallsIndex, 5)}
}

function jump1ListenerIndex(){
  document.addEventListener('keydown', jump1Index) }
function jump1Index(e){
    if (e.which === 87){
      jump1UpIndex()
      document.removeEventListener("keydown", jump1Index)
    }}
function jump1UpIndex(){
  dodger1.style.bottom = `${getBottomPosition(dodger1) +3}px`
  if (getBottomPosition(dodger1)<300){
    setTimeout(jump1UpIndex, 10)
  }
  else{jump1DownIndex()}
}
function jump1DownIndex(){
  dodger1.style.bottom = `${getBottomPosition(dodger1)- 3}px`
  if (getBottomPosition(dodger1)>200){
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
  dodger2.style.bottom = `${getBottomPosition(dodger2) +3}px`
  if (getBottomPosition(dodger2)<300){
    setTimeout(jump2UpIndex, 10)
  }
  else{jump2DownIndex()}
}
function jump2DownIndex(){
  dodger2.style.bottom = `${getBottomPosition(dodger2) - 3}px`
  if (getBottomPosition(dodger2)>200){
    setTimeout(jump2DownIndex, 10)
  }
  else{jump2ListenerIndex()}
}

function shootBullet1ListenerIndex(){
  document.addEventListener('keydown', shoot1Index)
}
function shoot1Index(e){
  if (e.which === 50){
    bullet1.style.bottom = `${(getBottomPosition(dodger1)+10)}px`
    shootBullet1Index()
    document.removeEventListener("keydown", shoot1Index)
  }}
function shootBullet1Index(e){
  bullet1.style.left = `${getLeftPosition(bullet1)+ 2}px`
  if (getLeftPosition(bullet1) < 1000) {
    setTimeout(shootBullet1Index, 5)
  }
  else{
    bullet1.style.left = `${180}px`
    bullet1.style.bottom = `${190}px`
    shootBullet1ListenerIndex()
  }
}

function shootBullet2ListenerIndex(){
  document.addEventListener('keydown', shoot2Index)
}
function shoot2Index(e){
  if (e.which === 16){
    bullet2.style.bottom = `${(getBottomPosition(dodger2)+10)}px`
    shootBullet2Index()
    document.removeEventListener("keydown", shoot2Index)
  }}
function shootBullet2Index(){
  bullet2.style.left = `${getLeftPosition(bullet2) - 2}px`
  if (getLeftPosition(bullet2) > 0) {
    setTimeout(shootBullet2Index, 5)
  }
  else{
    bullet2.style.left = `${820}px`
    bullet2.style.bottom = `${190}px`
    shootBullet2ListenerIndex()
  }
}
