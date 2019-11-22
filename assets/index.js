import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'
const video = document.querySelector('video')
const playButton = document.querySelector('#play-button')
const muteButton = document.querySelector('#mute-button')

const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
    new AutoPause()
] })

playButton.onclick = () => player.tooglePlay()
muteButton.onclick = () => player.toogleMute()

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {console.log(error.message)})
}