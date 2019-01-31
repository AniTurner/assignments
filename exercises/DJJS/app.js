var box = document.getElementById("emptyBox")
box.addEventListener("mouseover", function(){
    box.style = "background-color: blue"
})
box.addEventListener("mousedown", function() {
    box.style = "background-color: red"
})
box.addEventListener("mouseleave", function(){
    box.style = "background-color: yellow"

})
box.addEventListener("dblclick", function(){
    box.style = "background-color: green"
})
box.addEventListener("wheel", function(){
    box.style = "background-color: orange"
})

document.addEventListener("keydown", function(e){
    if(e.which === 66) {
        box.style = "background-color: blue"
    }
})
document.addEventListener("keydown", function(e){
    if(e.which === 82) {
        box.style = "background-color: red"
    }
})
document.addEventListener("keydown", function(e){
    if(e.which === 71) {
        box.style = "background-color: green"
    }
})
document.addEventListener("keydown", function(e){
    if(e.which === 79) {
        box.style = "background-color: orange"
    }
})