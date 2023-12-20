function main() {
    const icons = document.querySelectorAll('.ico')
    const notesContainer = document.querySelector('.notes-container')
    const createBtn = document.querySelector('.btn-create')


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
        const outputContainer = document.querySelector('.output-container')

        let originalContent = document.body.innerHTML
        let sheetName = document.querySelector('#input').value

        document.body.innerHTML = outputContainer.innerHTML
        document.body.insertAdjacentHTML('afterbegin', `<h1 class="sheet-name">${sheetName}</h1>`)

        window.print()

        document.body.innerHTML = originalContent

        main()
    })

}

main()

