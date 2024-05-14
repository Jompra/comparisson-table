function init() {
    console.log('Welcome to the console')
    console.log('If you\'re looking here, you\'re the sort of person that we are looking for.')
    console.log('So use the coupon code "Console2024" and you\'ll get £50 off!')

    const rows = document.querySelectorAll('tr')
    const tooltips = document.querySelectorAll('.tooltip')
    const firstCells = document.querySelectorAll('tr td:first-of-type p')

    const greenWords = ['£249 pm', 'Weekly', 'Yes', 'Coming Soon']
    const yellowWords = ['Loan Required', '7.3% Loan', 'Depends', 'Some', 'Unlikely']
    const redWords = ['No', 'None']

    function highlightWords(cells) {
        for (let cell of cells) {
            if (greenWords.includes(cell.innerText)) {
                cell.style.color = '#4BBD15'
            }
            else if (yellowWords.includes(cell.innerText)) {
                cell.style.color = '#E4BC2B'
            }
            else if (redWords.includes(cell.innerText)) {
                cell.style.color = '#F2681A'
            }
        }
    }

    function rowHoverIn(event) {
        const cells = event.target.children

        // event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.12)'

        highlightWords(cells)
    }
    
    function rowHoverOut(event) {
        const cells = event.target.children
        // event.target.style.backgroundColor = 'rgba(0,0,0,0)'
        if (!event.target.classList.contains('tableHead')){
            for (let cell of cells) {
                cell.style.color = '#ffffff'
            }
        }
    }
    function removeTooltips() {
        tooltips.forEach(tip => {
            tip.style.display = 'none'
        })
    }

    function showTooltip(event) {
        event.stopImmediatePropagation()
        removeTooltips()
        const iconId = event.target.id.match(/\d+/)[0]
        const rect = event.target.getBoundingClientRect()
        const x = Math.floor(rect.right)
        const y = Math.floor(rect.top)
        const tooltip = document.querySelector(`#tip-${iconId}`)

        tooltip.style.display = 'inline-block'
        
        if (iconId === "21"){
            tooltip.style.top = y - 300 + 'px'
        } else {
            tooltip.style.top = y + 20 + 'px'
        }
    }

    firstCells.forEach((firstCell, i) => {
        firstCell.addEventListener('click', showTooltip)
    })

    rows.forEach(row => {
        row.addEventListener('mouseenter', rowHoverIn)
        row.addEventListener('mouseleave', rowHoverOut)
        row.addEventListener('click', removeTooltips)
    })
}

window.addEventListener('DOMContentLoaded', init)