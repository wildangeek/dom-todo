let array = []
let edit = 'Edit'
let del = 'Delete'
function addTodo() {
    posting = document.getElementById('add-todo').value;
    array.push(posting)
    for (i=0;i<array.length;i++){
        var element = document.createElement("p");
        var btnEdit = document.createElement("button");
        var btnDelete = document.createElement("button");
        var posted = document.createTextNode(array[i]);
        var postedEdit = document.createTextNode(edit);
        var postedDelete = document.createTextNode(del);
    }
    element.appendChild(posted);
    document.getElementById("show-todo").appendChild(element);
    btnEdit.appendChild(postedEdit);
    document.getElementById('btn-edit-delete').appendChild(btnEdit)
    btnDelete.appendChild(postedDelete);
    document.getElementById('btn-edit-delete').appendChild(btnDelete)
}