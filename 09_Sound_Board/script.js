const audio_ids = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

audio_ids.forEach((audio_id) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = audio_id

    btn.addEventListener('click', () => {
        stopAllSongs()
        document.getElementById(audio_id).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopAllSongs() {
    audio_ids.forEach(audio_id => {
        const song = document.getElementById(audio_id)
        song.pause();
        // 设置或返回音频/视频中的当前播放位置（以秒计）。
        song.currentTime = 0;
    })
}