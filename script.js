const icons = document.querySelectorAll('.ico')
const notesContainer = document.querySelector('.notes-container')
const createBtn = document.querySelector('.btn-create')
const outputWrapper = document.querySelector('.output-container')
let notesArr = []

function updateUI (color, ghost)  {
    notesContainer.insertAdjacentHTML('beforeend', `<div class="ico ${color}">${notesArr[notesArr.length - 1]}</div>`)
    if (ghost) {
        notesContainer.lastElementChild.classList.add('ghost')
    }
}

icons.forEach(icon => {
    icon.addEventListener('mousedown', () => {
        notesArr.push(icon.innerHTML)
        let ghost = icon.classList.contains('ghost')
        let color = icon.classList.contains('blue') ? 'blue' : 'red'
        updateUI(color, ghost)
    })
})

createBtn.addEventListener('mousedown', () => {
    let originalContent = document.body.innerHTML

    document.body.innerHTML = outputWrapper.innerHTML
    window.print()
    document.body.innerHTML = originalContent

    alert('Please refresh the site!')
})
