var xhr = new XMLHttpRequest()
var container = document.getElementById('container')

xhr.onreadystatechange = function() {
    if(xhr.status === 200 && xhr.readyState === 4) {
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData)
        console.log(data)
        // listDataToDom(data.objects[0].toDo)
    }
}

xhr.open("GET", "https://api.vschool.io/ani/todo")
xhr.send()

function listDataToDom(toDo) {
    // for (var i = 0; 1 < toDo.length; i++) {
    //     var name = document.
    // }
}