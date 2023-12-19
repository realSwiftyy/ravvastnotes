const icons = document.querySelectorAll('.ico')
const notesContainer = document.querySelector('.notes-container')
const createBtn = document.querySelector('.btn-create')
const outputContainer = document.querySelector('.output-container')



icons.forEach(icon => {
    icon.addEventListener('click', () => {
        let color = icon.classList.contains('blue') ? 'blue' : 'red'
        notesContainer.insertAdjacentHTML('beforeend', `<div class="ico ${color} note">${icon.innerHTML}</div>`)
        if (icon.classList.contains('ghost')) notesContainer.lastElementChild.classList.add('ghost')


    })
})

notesContainer.addEventListener('click', event => {
    if (event.target.classList.contains('note'))
        notesContainer.removeChild(event.target)

})

createBtn.addEventListener('mousedown', () => {
    let originalContent = document.body.innerHTML

    document.body.innerHTML = outputContainer.innerHTML

    window.print()
    document.body.innerHTML = originalContent


    alert('Please refresh the site!')
})
