var btn = document.getElementsByClassName("dropbtn")[0]
var content = document.getElementsByClassName("dropdownContent")[0]

btn.addEventListener("click", function(){
    content.classList.toggle('hidden')
})