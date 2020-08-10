// selected toDo
let selectedToDo = null

// target form
const formNode = document.querySelector('.form')
// listen to submission
formNode.addEventListener("submit", handleSubmit)


function getFormInput(){
    // target input
    const inputText = document.querySelector('.task-input').value
    return inputText;

}
function handleSubmit(e){
    e.preventDefault();
    // get text
    const inputText = getFormInput();
    if(selectedToDo === null){
        addToDo(inputText);
    } else {
        updateRecord(inputText)
    }
    clearForm()
}

function addToDo(text){
    // create li 
    const liNode = document.createElement('li')
    liNode.innerHTML = `-<p> ${text}</p> 
                        <button class="edit-btn">edit</button>
                        <button class="delete-btn" >delete</button>`
    // find ul
    const ulNode = document.getElementById('list')
    // append li to ul
    ulNode.append(liNode)
    // when an li is clicked
    ulNode.addEventListener("click", (e) => {
        // when edit is clicked
        if(e.target.tagName == "BUTTON" && e.target.className == "edit-btn"){
            onEdit(e)
        } else if(e.target.tagName == "BUTTON" && e.target.className == "delete-btn"){
        // when delete button is clicked
            deleteRecord(e)
        }
    })
   
    

}
function clearForm(){
    // target input
    const input = document.querySelector('.task-input')
    input.value = ""
    // reset global selectToDo
    selectedToDo = null
}

function onEdit(e){
 
    // target clicked li > p
    selectedToDo = e.target.parentElement.querySelector('p')
    // populate input Form
    document.querySelector('.task-input').value = selectedToDo.innerText

}

function updateRecord(text){
    // target clicked li > p
    selectedToDo.innerText = text
    
}

function deleteRecord(e){
    e.target.parentElement.remove()
}



