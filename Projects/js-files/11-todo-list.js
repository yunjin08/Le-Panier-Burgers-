const todoList = [];

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
    for(let i=0; i<todoList.length; i++){
        const listsObject = todoList[i];
        //const name = listsObject.name;    (shorthand rule, use to conserve variables)
        //const date = listsObject.date;
        const {name, date} = listsObject;
        const html = `
        <div>${name} </div>
        <div> ${date} </div>
        <button class="deleteButton" onclick="
        todoList.splice(${i}, 1);
        rendertodoList();
        ">Delete</button> 
        `;
        toName += html;

    }
    document.querySelector('.js-name-list1').innerHTML = toName;
}