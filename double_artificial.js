function runDoubleArtificial(){
  initializeConstants()
  document.getElementById("Instructions").innerHTML="Instructions: Press 'Enter' to Start<br>First to reach 50 points wins.<br> If your opponent is hit by a same color wall, you earn 1 point.<br>If you shoot your opponent, you earn 5 points.<br><br>Red Brick must avoid the Red walls. Blue Brick must avoid the Blue walls.<br>Controls: None. You aren't playing.<br>"
  document.addEventListener('keydown', startGameDoubleArtificial)
  removeButtons()
}

function startGameDoubleArtificial(e){
  console.log(e.which)
    if (e.which === 13) {
      document.removeEventListener("keydown", startGameDoubleArtificial)
      displayScore()
      startMovingWallsDoubleArtificial()
      jump1ListenerDoubleArtificial()
      shootBullet1ListenerDoubleArtificial()
      shootBullet2ListenerDoubleArtificial()
    }
}

function startMovingWallsDoubleArtificial(){
  if (getBottomPosition(dodger2) === 200){jump2ListenerDoubleArtificial()}
  if (getBottomPosition(dodger1) === 200){jump1ListenerDoubleArtificial()}
  moveAllWalls()
  checkCollisions()
  if (gameGoing){setTimeout(startMovingWallsDoubleArtificial, 5)}
}

function jump1ListenerDoubleArtificial(){
  if ((getLeftPosition(wall0) === 210) ||
      (getLeftPosition(wall1) === 210) ||
      (getLeftPosition(wall2) === 210) ||
      (getLeftPosition(wall3) === 210) ||
      (getLeftPosition(wall4) === 210)){
    jump1UpDoubleArtificial()
  }
}

function jump1UpDoubleArtificial(){
  dodger1.style.bottom = `${getBottomPosition(dodger1) +3}px`
  if (getBottomPosition(dodger1)<300){
    setTimeout(jump1UpDoubleArtificial, 10)
  }
  else{jump1DownDoubleArtificial()}
}
function jump1DownDoubleArtificial(){
  dodger1.style.bottom = `${getBottomPosition(dodger1)- 3}px`
  if (getBottomPosition(dodger1)>200){
    setTimeout(jump1DownDoubleArtificial, 10)
  }
  else{jump1ListenerDoubleArtificial()}
}

function jump2ListenerDoubleArtificial(){
  if ((getLeftPosition(wall5) === 780) ||
      (getLeftPosition(wall6) === 780) ||
      (getLeftPosition(wall7) === 780) ||
      (getLeftPosition(wall8)=== 780) ||
      (getLeftPosition(wall9) === 780)){
    jump2UpDoubleArtificial()
  }
}

function jump2UpDoubleArtificial(){
  dodger2.style.bottom = `${getBottomPosition(dodger2) +3}px`
  if (getBottomPosition(dodger2)<300){
    setTimeout(jump2UpDoubleArtificial, 10)
  }
  else{jump2DownDoubleArtificial()}
}
function jump2DownDoubleArtificial(){
  dodger2.style.bottom = `${getBottomPosition(dodger2) - 3}px`
  if (getBottomPosition(dodger2)>200){
    setTimeout(jump2DownDoubleArtificial, 10)
  }
  else{jump2ListenerDoubleArtificial()}
}

function shootBullet1ListenerDoubleArtificial(){
  setTimeout(shoot1DoubleArtificial, Math.floor((Math.random() * 4000) + 3000))
}
function shoot1DoubleArtificial(e){
  bullet1.style.bottom = `${(getBottomPosition(dodger1)+10)}px`
  shootBullet1DoubleArtificial()
}
function shootBullet1DoubleArtificial(){
  bullet1.style.left = `${getLeftPosition(bullet1)+ 2}px`
  if (getLeftPosition(bullet1) < 1000) {
    setTimeout(shootBullet1DoubleArtificial, 5)
  }
  else{
    bullet1.style.left = `${180}px`
    bullet1.style.bottom = `${190}px`
    if (gameGoing){
      shootBullet1ListenerDoubleArtificial()
    }
  }
}

function shootBullet2ListenerDoubleArtificial(){
  setTimeout(shoot2DoubleArtificial, Math.floor((Math.random() * 4000) + 3000))
}
function shoot2DoubleArtificial(){
    bullet2.style.bottom = `${(getBottomPosition(dodger2)+10)}px`
    shootBullet2DoubleArtificial()
}
function shootBullet2DoubleArtificial(){
  bullet2.style.left = `${getLeftPosition(bullet2) - 2}px`
  if (getLeftPosition(bullet2) > 0) {
    setTimeout(shootBullet2DoubleArtificial, 5)
  }
  else{
    bullet2.style.left = `${820}px`
    bullet2.style.bottom = `${190}px`
    if (gameGoing){
      shootBullet2ListenerDoubleArtificial()
    }
  }
}
