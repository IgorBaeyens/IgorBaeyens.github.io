


const logicVideo = (videos) => { 
    videos.forEach(video => {
        video.addEventListener('webkitfullscreenchange', (event) => {
            console.log(event)
            if(event.target.src.includes('small')) {
                event.target.src = event.target.src.replace('small', 'large')
            } else if (event.target.src.includes('large')) {
                // document.getElementById('info-screen_text').style.flexDirection = 'column'
                event.target.src = event.target.src.replace('large', 'small')
            }
        })
    });
}

export { logicVideo }