let addTodoInput = document.querySelector("#addTodoInput")
let addTodoButton = document.querySelector("#addTodoButton")
let clearTodoButton = document.querySelector("#clearTodoButton")
let todoList = document.querySelector("#todoList")
let searchTodoInput = document.querySelector("#searchTodoInput")
let todoListLi;
let todos = []



runEvents();
function runEvents() {
    //! todo ekleme
    addTodoButton.addEventListener("click", addTodoFunction)
    //! todo silme
    todoList.addEventListener("click", removeTodoFunction)
    //! tüm todoları silme
    clearTodoButton.addEventListener("click", allTodoRemoveFunction)
    //! sayfa yüklendiğinde todoları yükleme
    document.addEventListener("DOMContentLoaded", againAddTodo)
    //! todo filtreleme
    searchTodoInput.addEventListener("keyup", filterTodoFunction)



}

//! todo ekleme
function addTodoFunction(e) {
    let text = addTodoInput.value.trim()
    if (text == null || text == "") {
        todoMessageFunction("rgb(179, 42, 42)", "görev eklemek için bir şeyler yazınız")
    } else {
        //! arayüze todo ekleme
        addTodoUI(text)
        //! storage'a todo ekleme
        addTodoStorage(text)
        //! bilgilendirme mesajı
        todoMessageFunction("rgba(124, 182, 124, 0.993)", "görev başarıyla eklendi")
    }
    e.preventDefault();
}
//! todo ekleme


//! bilgilendirme mesajı*****************************************************************
function todoMessageFunction(color, message) {
    let todoMessage = document.createElement("div")
    todoMessage.className = "todoMessage"
    todoMessage.textContent = message
    document.body.prepend(todoMessage)
    todoMessage.setAttribute(`style`, `background-color:${color};display: block;`)

    setTimeout((e) => {
        todoMessage.remove();
    }, 1500)
}
//! bilgilendirme mesajı*****************************************************************


// arayüze todo ekleme******************************************************************
function addTodoUI(text) {
    let li = document.createElement("li");
    li.className = "clearName"
    let p = document.createElement("p")
    p.className = "search"
    let i = document.createElement("i")
    i.className = "fa fa-remove"
    p.textContent = text;
    todoList.prepend(li)
    li.appendChild(p)
    li.appendChild(i)
    todoListLi = document.querySelector("#todoListLi")
    todoListLi.setAttribute("style", "display:none;")
    addTodoInput.value = ""
}
// arayüze todo ekleme******************************************************************


//! storage'a todo ekleme******************************************************************
function addTodoStorage(text) {
    checkTodosFromStorage()
    todos.push(text)
    localStorage.setItem("todos", JSON.stringify(todos))
}
//! storage'a todo ekleme******************************************************************


// arayüzden tek tek todo silme******************************************************************
function removeTodoFunction(e) {
    if (e.target.className === "fa fa-remove") {
        let removeTodo = e.target.parentElement;
        let removeTodoStorage = e.target.previousSibling.textContent

        removeTodo.remove()
        storageRemoveTodo(removeTodoStorage)
        todoMessageFunction("rgba(124, 182, 124, 0.993)", "görev başarıyla kaldırıldı")
    }
}
// arayüzden tek tek todo silme******************************************************************


//! storage'dan tek tek todo silme******************************************************************
function storageRemoveTodo(text) {
    checkTodosFromStorage()
    todos.forEach(function (todo, index) {
        if (text === todo) {
            todos.splice(index, 1)
        }
        localStorage.setItem("todos", JSON.stringify(todos))
    })


}
//! storage'dan tek tek todo silme******************************************************************



// tüm todoları temizleme******************************************************************
function allTodoRemoveFunction() {
    let allClearTodo = document.querySelectorAll(".clearName")
    if (allClearTodo.length > 0) {
        //? arayüzden tüm todoları silme
        allClearTodo.forEach(e => {
            e.remove()
        })
        todoListLi.setAttribute("style", "display:block")
        //? storage'dan tüm todoları silme
        todos = []
        localStorage.setItem("todos", todos)
        todoMessageFunction("rgba(124, 182, 124, 0.993)", "Görev Listesi Temizlendi")
    } else {
        todoMessageFunction("rgb(179, 42, 42)", "Görev Listesi Zaten Boş")
    }
}
// tüm todoları temizleme******************************************************************


//! storage'da todo var mı yokmu kontrolü******************************************************************
function checkTodosFromStorage() {
    let bos = localStorage.getItem("todos")
    if (bos === null || bos === "") {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    };

}
//! storage'da todo var mı yokmu kontrolü******************************************************************


// storage'dan arayüze tekrar yükleme******************************************************************
function againAddTodo() {
    checkTodosFromStorage()
    todos.forEach(function (e) {
        addTodoUI(e)
    })
}
// storage'dan arayüze tekrar yükleme******************************************************************


//! todo filtreleme
function filterTodoFunction(e) {
    let filterValue = e.target.value.toLowerCase().trim()
    let search = document.querySelectorAll(".search")
    if (search.length > 0) {
        search.forEach(function (filterTodo) {
            if (filterTodo.textContent.toLocaleLowerCase().trim().includes(filterValue)) {
                filterTodo.parentElement.setAttribute("style", "display:flex")
            } else {
                filterTodo.parentElement.setAttribute("style", "display:none")
            }
        })
    } else {
        todoMessageFunction("rgb(179, 42, 42)", "Liste Boşken Arama Yapılamaz")
    }
}
//! todo filtreleme

