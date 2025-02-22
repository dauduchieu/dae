const s_inpFile = $('#inp-file')
const s_inputLabel = $('.input-file')
const s_inputIcon = $('.interact .input-file i')
const s_inputFileName = $('.interact .file-name')
let isFirstInput = true

const s_loading = $('.interact .loading')

function changeAnimation(element, animationString) {
    element.style.animation = 'none'
    void element.offsetWidth
    element.style.animation = animationString
}

function fileChangeAnimation(e) {
    if (!isFirstInput) return
    isFirstInput = false

    const fileName = e.target.files[0]['name']
    s_inputFileName.innerText = fileName

    changeAnimation(s_inputLabel, `input-file-on-input 1s linear 1 forwards`)
    changeAnimation(s_inputIcon, `input-file-icon-on-input 1s linear 1 forwards`)
    changeAnimation(s_inputFileName, 'input-file-name-on-input 1s linear 1 forwards')
    
    changeAnimation(s_loading, `show-loading 1s linear .5s 1 forwards`)
}

s_inpFile.addEventListener('change', fileChangeAnimation)
