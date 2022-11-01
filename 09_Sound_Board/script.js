const audio_ids = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

audio_ids.forEach((audio_id) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = audio_id

    btn.addEventListener('click', () => {
        stopAllSongs()
        document.getElementsById(audio_id).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopAllSongs() {
    audio_ids.forEach(audio_id => {
        const song = document.getElementById(audio_id)
        song.onpause();
        song.currentTime = 0;
    })
}