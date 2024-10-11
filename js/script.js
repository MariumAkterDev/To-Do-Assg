// ======================== DOM Part Starts ===================================== 
    // =========================== error txt DOM
    let error               = document.querySelector(".errortxt")
    let mainDiv             = document.querySelector(".to-doListInput")
    // =========================== List Input DOM
    let mainInput           = document.querySelector(".mainInput")
    let maininputButton     = document.querySelector(".maininput-Button")
    // =========================== Result Input DOM
    let resultMainDiv       = document.querySelector(".resultMainDiv")
// ------------------------------- DOM Part Ends --------------------------------
// ======================================== Function Part Starts ..............
// ...................................... Enter Key Function for Add btn
let addEnterKey = (item) => {
    if (item.key == "Enter"){     
        btnClick ()
    }
} 
// ........................................ error - Disappear Function
mainInput.addEventListener('click', ()=>{
    error.innerHTML                   = ""
    mainDiv.style                     = "border: transparent"
})
// ......................................... click Funtion for Add btn
let btnClick = () => {
    if (mainInput.value == ""){
        error.innerHTML               = "Field Required !"
        mainDiv.style                 = "border: 2px solid red"
        mainInput.blur()
    }else{
        // ================== create Element 
        let resultSingleDiv           = document.createElement('div')
        let resultInput               = document.createElement('input')
        let editBtn                   = document.createElement('button')   
        let deltBtn                   = document.createElement('button')                                                                      
        // ==================  showing path 
        resultMainDiv.appendChild(resultSingleDiv) 
        resultSingleDiv.appendChild(resultInput)
        resultSingleDiv.appendChild(editBtn)
        resultSingleDiv.appendChild(deltBtn)                                                                  
        // ==================  adding class name 
        resultSingleDiv.classList.add('resultSingleDiv') 
        resultInput.classList.add('resultInput')
        editBtn.classList.add('btn')
        deltBtn.classList.add('deltBtn')
        // ==================  adding content to the tags
        editBtn.innerHTML             = 'Edit'
        deltBtn.innerHTML             = 'Delete'
        // ==================  adding data into Input 
        resultInput.value             = mainInput.value
        mainInput.value               = ""
        // ==================  setting Input attributes
        resultInput.placeholder       = 'List ....'
        resultInput.setAttribute('readonly','readonly')
        // ...................................... delete Funtion for Delete btn 
        deltBtn.addEventListener('click', () => {
            resultSingleDiv.remove()
        })
    }
}
