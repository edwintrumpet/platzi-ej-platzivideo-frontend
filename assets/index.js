import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
const video = document.querySelector('video')
const playButton = document.querySelector('#play-button')
const muteButton = document.querySelector('#mute-button')

const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay()
] })

playButton.onclick = () => player.tooglePlay()
muteButton.onclick = () => player.toogleMute()
