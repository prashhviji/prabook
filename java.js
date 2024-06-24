var popupoverlay = document.querySelector(".popup-overlay")
var popipbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")


addpopupbutton.addEventListener('click',function(){
    popupoverlay.style.display="block"
    popipbox.style.display="block"
})

var cancelbutton = document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popipbox.style.display="none"
})


var container=document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var booktitleauthor = document.getElementById("book-author-input")
var booktdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h4>${booktitleauthor.value}</h4>
    <p>${booktdescriptioninput.value}</p>
    <button  class="button" onclick="deletebook(event)">Delete</button>`
   
    container.append(div)
    popupoverlay.style.display="none"
    popipbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}