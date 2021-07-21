const $video    = document.querySelector('#video')
const $play     = document.querySelector('#play')
const $pause    = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward  = document.querySelector('#forward')

//play
$play.addEventListener('click', handlePlay)
function handlePlay(){
    $video.play()
    $play.hidden  = true
    $pause.hidden = false

  console.log('le diste click al boton de play');
}

//pausa
$pause.addEventListener('click', handlePause)
function handlePause(){
    $video.pause()
    $play.hidden  = false
    $pause.hidden = true
  console.log('le diste click al boton de pause');
}

//retroceder
$backward.addEventListener('click', handleBackward)
function handleBackward(){
    //$video.currentTime = $video.currentTime - 10;
    $video.currentTime -= 10;
  console.log('retrasar 10 segundos', $video.currentTime);
}


//adelantar
$forward.addEventListener('click', handleForward)
function handleForward(){
    //$video.currentTime = $video.currentTime + 10;
    $video.currentTime += 10;
  console.log('adelantar 10 segundos', $video.currentTime);
}

//mover la barra
const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)


function handleLoaded(){
    $progress.max = $video.duration
    console.log('ha cargado el video', $video.duration)
}

function handleTimeUpdate(){
  $progress.value = $video.currentTime
 //console.log('Tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)
function handleInput(){
  $video.currentTime = $progress.value
  console.log($progress.value);
}
