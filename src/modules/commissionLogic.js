let commTabs = document.getElementsByClassName("comm__tabs")[0]

const addCommissionLogic = () => {
    
    commTabs.addEventListener('change', (event) => {
        console.log(event.target.value)
    })

}

export { addCommissionLogic }