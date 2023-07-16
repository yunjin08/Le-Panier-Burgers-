
const todoList = [];

outputList();

function getData(){
    const nameElement = document.querySelector('.js-add-name');
    const name = nameElement.value;

    const dateElement = document.querySelector('.js-add-date');
    const date = dateElement.value;

    todoList.push({
        name,
        date
    });

    outputList();

    nameElement.value = '';
    dateElement.value = '';
}

function outputList(){
    let toPrint='';

    for(let i=0; i<todoList.length; i++){
        const listObject = todoList[i];
        const {name, date } = listObject;
        const html = `
        <div>${name}</div><div>${date}</div><button class=deleteButton onclick="
        todoList.splice(${i}, 1);
        outputList();
        "> Delete </button>`;
        toPrint += html ;
    }

    document.querySelector('.js-print-result').innerHTML = toPrint;


}