import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import AdsPlugin from './plugins/Ads'
const video = document.querySelector('video')
const playButton: HTMLElement = document.querySelector('#play-button')
const muteButton: HTMLElement = document.querySelector('#mute-button')

const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
    new AdsPlugin()
] })

playButton.onclick = () => player.tooglePlay()
muteButton.onclick = () => player.toogleMute()

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {console.log(error.message)})
}