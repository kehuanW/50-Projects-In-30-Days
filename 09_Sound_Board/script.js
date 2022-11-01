const audio_ids = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

audio_ids.forEach((audio_id) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = audio_id
    document.getElementById('buttons').appendChild(btn)
})