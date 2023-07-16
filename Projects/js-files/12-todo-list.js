const todoList = [];

document.querySelector('.js-button1').addEventListener('click', () => {
    addList();
});


rendertodoList();

function addList(){
    const inputElement = document.querySelector('.js-list-input1');
    const name = inputElement.value;

    const dateElement = document.querySelector('.js-date-input');
    const date = dateElement.value;

    todoList.push({
        //name: name,       (shorthand rule, use to conserve variables)
        //date: date
        name,
        date
    });

    inputElement.value = '';
    dateElement.value = '';
    rendertodoList();

    

}


function rendertodoList(){
    let toName = '';
    
    todoList.forEach((listsObject,index)=> {

        const {name, date} = listsObject;
        const html = `
        <div>${name} </div>
        <div> ${date} </div>
        <button class="deleteButton">Delete</button> 
        `;
        toName += html;
 });
 
    document.querySelector('.js-name-list1').innerHTML = toName;
    document.querySelectorAll('.deleteButton').forEach((deleteButton, i) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(i, 1);
            rendertodoList();
        })
    });
   
}