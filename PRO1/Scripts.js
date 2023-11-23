const panels =document.querySelectorAll('.panel')

//console.log(panels) you can use console.log to see the selected items

panels.forEach(panel =>{
    panel.addEventListener('click', () =>{
        removeActiveClasses(),
        panel.classList.add('active')
})
})

function removeActiveClasses() {
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}