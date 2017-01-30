function runArtificial(){
  initializeConstants()
  document.getElementById("Instructions").innerHTML="Instructions: Press 'Enter' to Start<br>First to reach 50 points wins.<br> If your opponent is hit by a same color wall, you earn 1 point.<br> If you shoot your opponent, you earn 5 points.<br><br>Red Brick must avoid the Red walls. Blue Brick must avoid the Blue walls.<br>Controls: Red- Up arrow to jump. Press shift to shoot.<br>"
  document.addEventListener('keydown', startGameArtificial)
  removeButtons()
}

function startGameArtificial(e){
  console.log(e.which)
    if (e.which === 13) {
      document.removeEventListener("keydown", startGameArtificial)
      displayScore()
      startMovingWallsArtificial()
      jump1ListenerArtificial()
      shootBullet1ListenerArtificial()
      shootBullet2ListenerArtificial()
    }
}

function startMovingWallsArtificial(){
  if (getBottomPosition(dodger2) === 200){
    jump2ListenerArtificial()
  }
  moveAllWalls()
  checkCollisions()
  if (gameGoing){setTimeout(startMovingWallsArtificial, 5)}
}


function jump1ListenerArtificial(){
  document.addEventListener('keydown', jump1Artificial) }
function jump1Artificial(e){
    if (e.which === 38){
      jump1UpArtificial()
      document.removeEventListener("keydown", jump1Artificial)
    }}
function jump1UpArtificial(){
  dodger1.style.bottom = `${getBottomPosition(dodger1) +3}px`
  if (getBottomPosition(dodger1)<300){
    setTimeout(jump1UpArtificial, 10)
  }
  else{jump1DownArtificial()}
}
function jump1DownArtificial(){
  dodger1.style.bottom = `${getBottomPosition(dodger1)- 3}px`
  if (getBottomPosition(dodger1)>200){
    setTimeout(jump1DownArtificial, 10)
  }
  else{jump1ListenerArtificial()}
}

function jump2ListenerArtificial(){
  if ((getLeftPosition(wall5) === 780) ||
      (getLeftPosition(wall6) === 780) ||
      (getLeftPosition(wall7) === 780) ||
      (getLeftPosition(wall8) === 780) ||
      (getLeftPosition(wall9) === 780)){
    jump2UpArtificial()
  }
}
function jump2Artificial(e){
  if (e.which === 38){
    jump2UpArtificial()
    document.removeEventListener("keydown", jump2Artificial)
  }}

function jump2UpArtificial(){
  dodger2.style.bottom = `${getBottomPosition(dodger2) +3}px`
  if (getBottomPosition(dodger2)<300){
    setTimeout(jump2UpArtificial, 10)
  }
  else{jump2DownArtificial()}
}
function jump2DownArtificial(){
  dodger2.style.bottom = `${getBottomPosition(dodger2) - 3}px`
  if (getBottomPosition(dodger2)>200){
    setTimeout(jump2DownArtificial, 10)
  }
  else{jump2ListenerArtificial()}
}

function shootBullet1ListenerArtificial(){
  document.addEventListener('keydown', shoot1Artificial)
}
function shoot1Artificial(e){
  if (e.which === 16){
    bullet1.style.bottom = `${(getBottomPosition(dodger1)+10)}px`
    shootBullet1Artificial()
    document.removeEventListener("keydown", shoot1Artificial)
  }}
function shootBullet1Artificial(e){
  bullet1.style.left = `${getLeftPosition(bullet1)+ 2}px`
  if (getLeftPosition(bullet1) < 1000) {
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
    bullet2.style.bottom = `${(getBottomPosition(dodger2)+10)}px`
    shootBullet2Artificial()
}
function shootBullet2Artificial(){
  bullet2.style.left = `${getLeftPosition(bullet2) - 2}px`
  if (getLeftPosition(bullet2) > 0) {
    setTimeout(shootBullet2Artificial, 5)
  }
  else{
    bullet2.style.left = `${820}px`
    bullet2.style.bottom = `${190}px`
    if (gameGoing){
      shootBullet2ListenerArtificial()
    }
  }
}
